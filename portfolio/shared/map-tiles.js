/* Shared OSM tile configuration. Normal browser caching/referrer behavior is retained. */
(function () {
    'use strict';
    var settings = window.PortfolioMaps = {
        osmUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
    var script = document.currentScript;
    var root = new URL('../', script.src);
    var relativePage = location.pathname.slice(root.pathname.length);
    function notice(text, local) {
        function show() {
            if (document.getElementById('tile-service-notice')) return;
            var box = document.createElement('aside');
            box.id = 'tile-service-notice';
            box.setAttribute('role', 'alert');
            box.style.cssText = 'position:fixed;top:8px;left:50px;right:8px;z-index:10000;background:#fff;color:#222;padding:12px;border:1px solid #aaa;font:14px/1.4 sans-serif';
            box.textContent = text;
            if (local) {
                var link = document.createElement('a');
                link.href = 'http://127.0.0.1:8000/' + relativePage;
                link.textContent = ' Open served version';
                link.target = '_top';
                box.appendChild(link);
            }
            document.body.appendChild(box);
        }
        if (document.body) show(); else document.addEventListener('DOMContentLoaded', show, { once: true });
    }
    if (!window.L || !L.TileLayer) return;
    L.TileLayer.addInitHook(function () {
        if (!/^https?:\/\/(?:\{s\}\.|[abc]\.)?tile\.openstreetmap\.org\//.test(this._url)) return;
        if (location.protocol === 'file:') {
            // Do not request OSM tiles without a web-page referrer.
            this._url = L.Util.emptyImageUrl;
            notice('Start Portfolio.command must be running. Open this page through localhost or your hosted website to load maps and data.', true);
            return;
        }
        this._url = settings.osmUrl;
        this.options.referrerPolicy = 'strict-origin-when-cross-origin';
        this.options.updateWhenIdle = true;
        this.options.keepBuffer = 1;
        var failures = 0;
        this.on('tileerror', function () {
            if (++failures === 3) {
                notice('The map tile service is unavailable or denied access. Check your network and privacy settings. No automatic retries will be made.', false);
                if (this._map) this._map.removeLayer(this);
            }
        });
    });
}());
