/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ri = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, wi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Nu = 0, Pc = 1, Ou = 2, zf = 3, kf = 0, qc = 1, Zc = 2, xn = 3, bn = 0, Ve = 1, hn = 2, Bn = 0, Pi = 1, $s = 2, Ic = 3, Lc = 4, Fu = 5, ei = 100, Bu = 101, zu = 102, ku = 103, Vu = 104, Hu = 200, Gu = 201, Wu = 202, Xu = 203, wo = 204, Eo = 205, Yu = 206, qu = 207, Zu = 208, $u = 209, Ju = 210, Ku = 211, ju = 212, Qu = 213, td = 214, To = 0, Ao = 1, Co = 2, Ui = 3, Ro = 4, Po = 5, Io = 6, Lo = 7, pr = 0, ed = 1, nd = 2, zn = 0, id = 1, sd = 2, rd = 3, $c = 4, od = 5, ad = 6, cd = 7, Dc = "attached", ld = "detached", la = 300, Vn = 301, ni = 302, Js = 303, Ks = 304, ys = 306, js = 1e3, nn = 1001, Qs = 1002, Te = 1003, Jc = 1004, Vf = 1004, ls = 1005, Hf = 1005, _e = 1006, zs = 1007, Gf = 1007, yn = 1008, Wf = 1008, Sn = 1009, Kc = 1010, jc = 1011, ms = 1012, ha = 1013, Hn = 1014, qe = 1015, vs = 1016, ua = 1017, da = 1018, Ni = 1020, Qc = 35902, tl = 1021, el = 1022, ke = 1023, nl = 1024, il = 1025, Ii = 1026, Oi = 1027, fa = 1028, mr = 1029, sl = 1030, pa = 1031, Xf = 1032, ma = 1033, ks = 33776, Vs = 33777, Hs = 33778, Gs = 33779, Do = 35840, Uo = 35841, No = 35842, Oo = 35843, Fo = 36196, Bo = 37492, zo = 37496, ko = 37808, Vo = 37809, Ho = 37810, Go = 37811, Wo = 37812, Xo = 37813, Yo = 37814, qo = 37815, Zo = 37816, $o = 37817, Jo = 37818, Ko = 37819, jo = 37820, Qo = 37821, Ws = 36492, ta = 36494, ea = 36495, rl = 36283, na = 36284, ia = 36285, sa = 36286, hd = 2200, ud = 2201, dd = 2202, tr = 2300, ra = 2301, bo = 2302, Ei = 2400, Ti = 2401, er = 2402, ga = 2500, ol = 2501, Yf = 0, qf = 1, Zf = 2, fd = 3200, pd = 3201, $f = 3202, Jf = 3203, si = 0, md = 1, Nn = "", Be = "srgb", zi = "srgb-linear", gr = "linear", se = "srgb", Kf = 0, Mi = 7680, jf = 7681, Qf = 7682, tp = 7683, ep = 34055, np = 34056, ip = 5386, sp = 512, rp = 513, op = 514, ap = 515, cp = 516, lp = 517, hp = 518, Uc = 519, gd = 512, _d = 513, xd = 514, al = 515, yd = 516, vd = 517, Md = 518, bd = 519, nr = 35044, Sd = 35048, up = 35040, dp = 35045, fp = 35049, pp = 35041, mp = 35046, gp = 35050, _p = 35042, xp = "100", Nc = "300 es", vn = 2e3, ir = 2001;
class En {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const s = i.indexOf(e);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, t);
      t.target = null;
    }
  }
}
const Ce = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Zl = 1234567;
const Li = Math.PI / 180, gs = 180 / Math.PI;
function je() {
  const r = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ce[r & 255] + Ce[r >> 8 & 255] + Ce[r >> 16 & 255] + Ce[r >> 24 & 255] + "-" + Ce[t & 255] + Ce[t >> 8 & 255] + "-" + Ce[t >> 16 & 15 | 64] + Ce[t >> 24 & 255] + "-" + Ce[e & 63 | 128] + Ce[e >> 8 & 255] + "-" + Ce[e >> 16 & 255] + Ce[e >> 24 & 255] + Ce[n & 255] + Ce[n >> 8 & 255] + Ce[n >> 16 & 255] + Ce[n >> 24 & 255]).toLowerCase();
}
function pe(r, t, e) {
  return Math.max(t, Math.min(e, r));
}
function cl(r, t) {
  return (r % t + t) % t;
}
function yp(r, t, e, n, i) {
  return n + (r - t) * (i - n) / (e - t);
}
function vp(r, t, e) {
  return r !== t ? (e - r) / (t - r) : 0;
}
function Xs(r, t, e) {
  return (1 - e) * r + e * t;
}
function Mp(r, t, e, n) {
  return Xs(r, t, 1 - Math.exp(-e * n));
}
function bp(r, t = 1) {
  return t - Math.abs(cl(r, t * 2) - t);
}
function Sp(r, t, e) {
  return r <= t ? 0 : r >= e ? 1 : (r = (r - t) / (e - t), r * r * (3 - 2 * r));
}
function wp(r, t, e) {
  return r <= t ? 0 : r >= e ? 1 : (r = (r - t) / (e - t), r * r * r * (r * (r * 6 - 15) + 10));
}
function Ep(r, t) {
  return r + Math.floor(Math.random() * (t - r + 1));
}
function Tp(r, t) {
  return r + Math.random() * (t - r);
}
function Ap(r) {
  return r * (0.5 - Math.random());
}
function Cp(r) {
  r !== void 0 && (Zl = r);
  let t = Zl += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Rp(r) {
  return r * Li;
}
function Pp(r) {
  return r * gs;
}
function Ip(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Lp(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Dp(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Up(r, t, e, n, i) {
  const s = Math.cos, o = Math.sin, a = s(e / 2), c = o(e / 2), l = s((t + n) / 2), h = o((t + n) / 2), u = s((t - n) / 2), d = o((t - n) / 2), f = s((n - t) / 2), m = o((n - t) / 2);
  switch (i) {
    case "XYX":
      r.set(a * h, c * u, c * d, a * l);
      break;
    case "YZY":
      r.set(c * d, a * h, c * u, a * l);
      break;
    case "ZXZ":
      r.set(c * u, c * d, a * h, a * l);
      break;
    case "XZX":
      r.set(a * h, c * m, c * f, a * l);
      break;
    case "YXY":
      r.set(c * f, a * h, c * m, a * l);
      break;
    case "ZYZ":
      r.set(c * m, c * f, a * h, a * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function ze(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function kt(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Ys = {
  DEG2RAD: Li,
  RAD2DEG: gs,
  generateUUID: je,
  clamp: pe,
  euclideanModulo: cl,
  mapLinear: yp,
  inverseLerp: vp,
  lerp: Xs,
  damp: Mp,
  pingpong: bp,
  smoothstep: Sp,
  smootherstep: wp,
  randInt: Ep,
  randFloat: Tp,
  randFloatSpread: Ap,
  seededRandom: Cp,
  degToRad: Rp,
  radToDeg: Pp,
  isPowerOfTwo: Ip,
  ceilPowerOfTwo: Lp,
  floorPowerOfTwo: Dp,
  setQuaternionFromProperEuler: Up,
  normalize: kt,
  denormalize: ze
};
class q {
  constructor(t = 0, e = 0) {
    q.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(pe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), s = this.x - t.x, o = this.y - t.y;
    return this.x = s * n - o * i + t.x, this.y = s * i + o * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class zt {
  constructor(t, e, n, i, s, o, a, c, l) {
    zt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i, s, o, a, c, l);
  }
  set(t, e, n, i, s, o, a, c, l) {
    const h = this.elements;
    return h[0] = t, h[1] = i, h[2] = a, h[3] = e, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], _ = i[0], g = i[3], p = i[6], y = i[1], v = i[4], x = i[7], I = i[2], E = i[5], C = i[8];
    return s[0] = o * _ + a * y + c * I, s[3] = o * g + a * v + c * E, s[6] = o * p + a * x + c * C, s[1] = l * _ + h * y + u * I, s[4] = l * g + h * v + u * E, s[7] = l * p + h * x + u * C, s[2] = d * _ + f * y + m * I, s[5] = d * g + f * v + m * E, s[8] = d * p + f * x + m * C, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], o = t[4], a = t[5], c = t[6], l = t[7], h = t[8];
    return e * o * h - e * a * l - n * s * h + n * a * c + i * s * l - i * o * c;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], o = t[4], a = t[5], c = t[6], l = t[7], h = t[8], u = h * o - a * l, d = a * c - h * s, f = l * s - o * c, m = e * u + n * d + i * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return t[0] = u * _, t[1] = (i * l - h * n) * _, t[2] = (a * n - i * o) * _, t[3] = d * _, t[4] = (h * e - i * c) * _, t[5] = (i * s - a * e) * _, t[6] = f * _, t[7] = (n * c - l * e) * _, t[8] = (o * e - n * s) * _, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + t,
      -i * l,
      i * c,
      -i * (-l * o + c * a) + a + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(Va.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Va.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Va.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Va = /* @__PURE__ */ new zt();
function wd(r) {
  for (let t = r.length - 1; t >= 0; --t)
    if (r[t] >= 65535) return !0;
  return !1;
}
const Np = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function hs(r, t) {
  return new Np[r](t);
}
function sr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Ed() {
  const r = sr("canvas");
  return r.style.display = "block", r;
}
const $l = {};
function Os(r) {
  r in $l || ($l[r] = !0, console.warn(r));
}
function Op(r, t, e) {
  return new Promise(function(n, i) {
    function s() {
      switch (r.clientWaitSync(t, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
function Fp(r) {
  const t = r.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Bp(r) {
  const t = r.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const qt = {
  enabled: !0,
  workingColorSpace: zi,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(r, t, e) {
    return this.enabled === !1 || t === e || !t || !e || (this.spaces[t].transfer === se && (r.r = kn(r.r), r.g = kn(r.g), r.b = kn(r.b)), this.spaces[t].primaries !== this.spaces[e].primaries && (r.applyMatrix3(this.spaces[t].toXYZ), r.applyMatrix3(this.spaces[e].fromXYZ)), this.spaces[e].transfer === se && (r.r = ps(r.r), r.g = ps(r.g), r.b = ps(r.b))), r;
  },
  fromWorkingColorSpace: function(r, t) {
    return this.convert(r, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function(r, t) {
    return this.convert(r, t, this.workingColorSpace);
  },
  getPrimaries: function(r) {
    return this.spaces[r].primaries;
  },
  getTransfer: function(r) {
    return r === Nn ? gr : this.spaces[r].transfer;
  },
  getLuminanceCoefficients: function(r, t = this.workingColorSpace) {
    return r.fromArray(this.spaces[t].luminanceCoefficients);
  },
  define: function(r) {
    Object.assign(this.spaces, r);
  },
  // Internal APIs
  _getMatrix: function(r, t, e) {
    return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(r) {
    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(r = this.workingColorSpace) {
    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
  }
};
function kn(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ps(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const Jl = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], Kl = [0.2126, 0.7152, 0.0722], jl = [0.3127, 0.329], Ql = /* @__PURE__ */ new zt().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), th = /* @__PURE__ */ new zt().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
qt.define({
  [zi]: {
    primaries: Jl,
    whitePoint: jl,
    transfer: gr,
    toXYZ: Ql,
    fromXYZ: th,
    luminanceCoefficients: Kl,
    workingColorSpaceConfig: { unpackColorSpace: Be },
    outputColorSpaceConfig: { drawingBufferColorSpace: Be }
  },
  [Be]: {
    primaries: Jl,
    whitePoint: jl,
    transfer: se,
    toXYZ: Ql,
    fromXYZ: th,
    luminanceCoefficients: Kl,
    outputColorSpaceConfig: { drawingBufferColorSpace: Be }
  }
});
let Xi;
class Td {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Xi === void 0 && (Xi = sr("canvas")), Xi.width = t.width, Xi.height = t.height;
      const n = Xi.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Xi;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = sr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = kn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(kn(e[n] / 255) * 255) : e[n] = kn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let zp = 0;
class Ai {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: zp++ }), this.uuid = je(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(Ha(i[o].image)) : s.push(Ha(i[o]));
      } else
        s = Ha(i);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ha(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Td.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let kp = 0;
class me extends En {
  constructor(t = me.DEFAULT_IMAGE, e = me.DEFAULT_MAPPING, n = nn, i = nn, s = _e, o = yn, a = ke, c = Sn, l = me.DEFAULT_ANISOTROPY, h = Nn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: kp++ }), this.uuid = je(), this.name = "", this.source = new Ai(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new q(0, 0), this.repeat = new q(1, 1), this.center = new q(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new zt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== la) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case js:
          t.x = t.x - Math.floor(t.x);
          break;
        case nn:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case Qs:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case js:
          t.y = t.y - Math.floor(t.y);
          break;
        case nn:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case Qs:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
me.DEFAULT_IMAGE = null;
me.DEFAULT_MAPPING = la;
me.DEFAULT_ANISOTROPY = 1;
class Qt {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    Qt.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = this.w, o = t.elements;
    return this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * s, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, s;
    const c = t.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], m = c[9], _ = c[2], g = c[6], p = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(l + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const v = (l + 1) / 2, x = (f + 1) / 2, I = (p + 1) / 2, E = (h + d) / 4, C = (u + _) / 4, R = (m + g) / 4;
      return v > x && v > I ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = E / n, s = C / n) : x > I ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = E / i, s = R / i) : I < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(I), n = C / s, i = R / s), this.set(n, i, s, e), this;
    }
    let y = Math.sqrt((g - m) * (g - m) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (g - m) / y, this.y = (u - _) / y, this.z = (d - h) / y, this.w = Math.acos((l + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ad extends En {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Qt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Qt(0, 0, t, e);
    const i = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: _e,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new me(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++)
      this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++)
        this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, i = t.textures.length; n < i; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Ai(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class dn extends Ad {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class _a extends me {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Te, this.minFilter = Te, this.wrapR = nn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Vp extends dn {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    super(t, e, i), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new _a(null, t, e, n), this.texture.isRenderTargetTexture = !0;
  }
}
class ll extends me {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Te, this.minFilter = Te, this.wrapR = nn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Hp extends dn {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    super(t, e, i), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new ll(null, t, e, n), this.texture.isRenderTargetTexture = !0;
  }
}
class Ie {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, s, o, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[o + 0], f = s[o + 1], m = s[o + 2], _ = s[o + 3];
    if (a === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (a === 1) {
      t[e + 0] = d, t[e + 1] = f, t[e + 2] = m, t[e + 3] = _;
      return;
    }
    if (u !== _ || c !== d || l !== f || h !== m) {
      let g = 1 - a;
      const p = c * d + l * f + h * m + u * _, y = p >= 0 ? 1 : -1, v = 1 - p * p;
      if (v > Number.EPSILON) {
        const I = Math.sqrt(v), E = Math.atan2(I, p * y);
        g = Math.sin(g * E) / I, a = Math.sin(a * E) / I;
      }
      const x = a * y;
      if (c = c * g + d * x, l = l * g + f * x, h = h * g + m * x, u = u * g + _ * x, g === 1 - a) {
        const I = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= I, l *= I, h *= I, u *= I;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, i, s, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[o], d = s[o + 1], f = s[o + 2], m = s[o + 3];
    return t[e] = a * m + h * u + c * f - l * d, t[e + 1] = c * m + h * d + l * u - a * f, t[e + 2] = l * m + h * f + a * d - c * u, t[e + 3] = h * m - a * u - c * d - l * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const n = t._x, i = t._y, s = t._z, o = t._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(s / 2), d = c(n / 2), f = c(i / 2), m = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u + d * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], s = e[8], o = e[1], a = e[5], c = e[9], l = e[2], h = e[6], u = e[10], d = n + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (s - l) * f, this._z = (o - i) * f;
    } else if (n > a && n > u) {
      const f = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (s + l) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - l) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / f, this._x = (s + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(pe(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, s = t._z, o = t._w, a = e._x, c = e._y, l = e._z, h = e._w;
    return this._x = n * h + o * a + i * l - s * c, this._y = i * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let a = o * t._w + n * t._x + i * t._y + s * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * o + e * this._w, this._x = f * n + e * this._x, this._y = f * i + e * this._y, this._z = f * s + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - e) * h) / l, d = Math.sin(e * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class T {
  constructor(t = 0, e = 0, n = 0) {
    T.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(eh.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(eh.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * i, this.y = s[1] * e + s[4] * n + s[7] * i, this.z = s[2] * e + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements, o = 1 / (s[3] * e + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * e + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * e + s[6] * n + s[10] * i + s[14]) * o, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, s = t.x, o = t.y, a = t.z, c = t.w, l = 2 * (o * i - a * n), h = 2 * (a * e - s * i), u = 2 * (s * n - o * e);
    return this.x = e + c * l + o * u - a * h, this.y = n + c * h + a * l - s * u, this.z = i + c * u + s * h - o * l, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * i, this.y = s[1] * e + s[5] * n + s[9] * i, this.z = s[2] * e + s[6] * n + s[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, s = t.z, o = e.x, a = e.y, c = e.z;
    return this.x = i * c - s * a, this.y = s * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Ga.copy(this).projectOnVector(t), this.sub(Ga);
  }
  reflect(t) {
    return this.sub(Ga.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(pe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ga = /* @__PURE__ */ new T(), eh = /* @__PURE__ */ new Ie();
class Le {
  constructor(t = new T(1 / 0, 1 / 0, 1 / 0), e = new T(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(on.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(on.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = on.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          t.isMesh === !0 ? t.getVertexPosition(o, on) : on.fromBufferAttribute(s, o), on.applyMatrix4(t.matrixWorld), this.expandByPoint(on);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Rr.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Rr.copy(n.boundingBox)), Rr.applyMatrix4(t.matrixWorld), this.union(Rr);
    }
    const i = t.children;
    for (let s = 0, o = i.length; s < o; s++)
      this.expandByObject(i[s], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, on), on.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ws), Pr.subVectors(this.max, ws), Yi.subVectors(t.a, ws), qi.subVectors(t.b, ws), Zi.subVectors(t.c, ws), Zn.subVectors(qi, Yi), $n.subVectors(Zi, qi), ci.subVectors(Yi, Zi);
    let e = [
      0,
      -Zn.z,
      Zn.y,
      0,
      -$n.z,
      $n.y,
      0,
      -ci.z,
      ci.y,
      Zn.z,
      0,
      -Zn.x,
      $n.z,
      0,
      -$n.x,
      ci.z,
      0,
      -ci.x,
      -Zn.y,
      Zn.x,
      0,
      -$n.y,
      $n.x,
      0,
      -ci.y,
      ci.x,
      0
    ];
    return !Wa(e, Yi, qi, Zi, Pr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Wa(e, Yi, qi, Zi, Pr)) ? !1 : (Ir.crossVectors(Zn, $n), e = [Ir.x, Ir.y, Ir.z], Wa(e, Yi, qi, Zi, Pr));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, on).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(on).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Cn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Cn = [
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T(),
  /* @__PURE__ */ new T()
], on = /* @__PURE__ */ new T(), Rr = /* @__PURE__ */ new Le(), Yi = /* @__PURE__ */ new T(), qi = /* @__PURE__ */ new T(), Zi = /* @__PURE__ */ new T(), Zn = /* @__PURE__ */ new T(), $n = /* @__PURE__ */ new T(), ci = /* @__PURE__ */ new T(), ws = /* @__PURE__ */ new T(), Pr = /* @__PURE__ */ new T(), Ir = /* @__PURE__ */ new T(), li = /* @__PURE__ */ new T();
function Wa(r, t, e, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    li.fromArray(r, s);
    const a = i.x * Math.abs(li.x) + i.y * Math.abs(li.y) + i.z * Math.abs(li.z), c = t.dot(li), l = e.dot(li), h = n.dot(li);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const Gp = /* @__PURE__ */ new Le(), Es = /* @__PURE__ */ new T(), Xa = /* @__PURE__ */ new T();
class De {
  constructor(t = new T(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Gp.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let s = 0, o = t.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Es.subVectors(t, this.center);
    const e = Es.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Es, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Xa.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Es.copy(t.center).add(Xa)), this.expandByPoint(Es.copy(t.center).sub(Xa))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Rn = /* @__PURE__ */ new T(), Ya = /* @__PURE__ */ new T(), Lr = /* @__PURE__ */ new T(), Jn = /* @__PURE__ */ new T(), qa = /* @__PURE__ */ new T(), Dr = /* @__PURE__ */ new T(), Za = /* @__PURE__ */ new T();
class ki {
  constructor(t = new T(), e = new T(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Rn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Rn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Rn.copy(this.origin).addScaledVector(this.direction, e), Rn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Ya.copy(t).add(e).multiplyScalar(0.5), Lr.copy(e).sub(t).normalize(), Jn.copy(this.origin).sub(Ya);
    const s = t.distanceTo(e) * 0.5, o = -this.direction.dot(Lr), a = Jn.dot(this.direction), c = -Jn.dot(Lr), l = Jn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, m;
    if (h > 0)
      if (u = o * c - a, d = o * a - c, m = s * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            const _ = 1 / h;
            u *= _, d *= _, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
      else
        d <= -m ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l) : d <= m ? (u = 0, d = Math.min(Math.max(-s, -c), s), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Ya).addScaledVector(Lr, d), f;
  }
  intersectSphere(t, e) {
    Rn.subVectors(t.center, this.origin);
    const n = Rn.dot(this.direction), i = Rn.dot(Rn) - n * n, s = t.radius * t.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, s, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (t.min.x - d.x) * l, i = (t.max.x - d.x) * l) : (n = (t.max.x - d.x) * l, i = (t.min.x - d.x) * l), h >= 0 ? (s = (t.min.y - d.y) * h, o = (t.max.y - d.y) * h) : (s = (t.max.y - d.y) * h, o = (t.min.y - d.y) * h), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (t.min.z - d.z) * u, c = (t.max.z - d.z) * u) : (a = (t.max.z - d.z) * u, c = (t.min.z - d.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Rn) !== null;
  }
  intersectTriangle(t, e, n, i, s) {
    qa.subVectors(e, t), Dr.subVectors(n, t), Za.crossVectors(qa, Dr);
    let o = this.direction.dot(Za), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Jn.subVectors(this.origin, t);
    const c = a * this.direction.dot(Dr.crossVectors(Jn, Dr));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(qa.cross(Jn));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * Jn.dot(Za);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Dt {
  constructor(t, e, n, i, s, o, a, c, l, h, u, d, f, m, _, g) {
    Dt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i, s, o, a, c, l, h, u, d, f, m, _, g);
  }
  set(t, e, n, i, s, o, a, c, l, h, u, d, f, m, _, g) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = i, p[1] = s, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Dt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, i = 1 / $i.setFromMatrixColumn(t, 0).length(), s = 1 / $i.setFromMatrixColumn(t, 1).length(), o = 1 / $i.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (t.order === "XYZ") {
      const d = o * h, f = o * u, m = a * h, _ = a * u;
      e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = f + m * l, e[5] = d - _ * l, e[9] = -a * c, e[2] = _ - d * l, e[6] = m + f * l, e[10] = o * c;
    } else if (t.order === "YXZ") {
      const d = c * h, f = c * u, m = l * h, _ = l * u;
      e[0] = d + _ * a, e[4] = m * a - f, e[8] = o * l, e[1] = o * u, e[5] = o * h, e[9] = -a, e[2] = f * a - m, e[6] = _ + d * a, e[10] = o * c;
    } else if (t.order === "ZXY") {
      const d = c * h, f = c * u, m = l * h, _ = l * u;
      e[0] = d - _ * a, e[4] = -o * u, e[8] = m + f * a, e[1] = f + m * a, e[5] = o * h, e[9] = _ - d * a, e[2] = -o * l, e[6] = a, e[10] = o * c;
    } else if (t.order === "ZYX") {
      const d = o * h, f = o * u, m = a * h, _ = a * u;
      e[0] = c * h, e[4] = m * l - f, e[8] = d * l + _, e[1] = c * u, e[5] = _ * l + d, e[9] = f * l - m, e[2] = -l, e[6] = a * c, e[10] = o * c;
    } else if (t.order === "YZX") {
      const d = o * c, f = o * l, m = a * c, _ = a * l;
      e[0] = c * h, e[4] = _ - d * u, e[8] = m * u + f, e[1] = u, e[5] = o * h, e[9] = -a * h, e[2] = -l * h, e[6] = f * u + m, e[10] = d - _ * u;
    } else if (t.order === "XZY") {
      const d = o * c, f = o * l, m = a * c, _ = a * l;
      e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = d * u + _, e[5] = o * h, e[9] = f * u - m, e[2] = m * u - f, e[6] = a * h, e[10] = _ * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Wp, t, Xp);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return Je.subVectors(t, e), Je.lengthSq() === 0 && (Je.z = 1), Je.normalize(), Kn.crossVectors(n, Je), Kn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Je.x += 1e-4 : Je.z += 1e-4, Je.normalize(), Kn.crossVectors(n, Je)), Kn.normalize(), Ur.crossVectors(Je, Kn), i[0] = Kn.x, i[4] = Ur.x, i[8] = Je.x, i[1] = Kn.y, i[5] = Ur.y, i[9] = Je.y, i[2] = Kn.z, i[6] = Ur.z, i[10] = Je.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], _ = n[6], g = n[10], p = n[14], y = n[3], v = n[7], x = n[11], I = n[15], E = i[0], C = i[4], R = i[8], S = i[12], M = i[1], L = i[5], D = i[9], U = i[13], B = i[2], Y = i[6], H = i[10], j = i[14], G = i[3], at = i[7], dt = i[11], xt = i[15];
    return s[0] = o * E + a * M + c * B + l * G, s[4] = o * C + a * L + c * Y + l * at, s[8] = o * R + a * D + c * H + l * dt, s[12] = o * S + a * U + c * j + l * xt, s[1] = h * E + u * M + d * B + f * G, s[5] = h * C + u * L + d * Y + f * at, s[9] = h * R + u * D + d * H + f * dt, s[13] = h * S + u * U + d * j + f * xt, s[2] = m * E + _ * M + g * B + p * G, s[6] = m * C + _ * L + g * Y + p * at, s[10] = m * R + _ * D + g * H + p * dt, s[14] = m * S + _ * U + g * j + p * xt, s[3] = y * E + v * M + x * B + I * G, s[7] = y * C + v * L + x * Y + I * at, s[11] = y * R + v * D + x * H + I * dt, s[15] = y * S + v * U + x * j + I * xt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], s = t[12], o = t[1], a = t[5], c = t[9], l = t[13], h = t[2], u = t[6], d = t[10], f = t[14], m = t[3], _ = t[7], g = t[11], p = t[15];
    return m * (+s * c * u - i * l * u - s * a * d + n * l * d + i * a * f - n * c * f) + _ * (+e * c * f - e * l * d + s * o * d - i * o * f + i * l * h - s * c * h) + g * (+e * l * u - e * a * f - s * o * u + n * o * f + s * a * h - n * l * h) + p * (-i * a * h - e * c * u + e * a * d + i * o * u - n * o * d + n * c * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], o = t[4], a = t[5], c = t[6], l = t[7], h = t[8], u = t[9], d = t[10], f = t[11], m = t[12], _ = t[13], g = t[14], p = t[15], y = u * g * l - _ * d * l + _ * c * f - a * g * f - u * c * p + a * d * p, v = m * d * l - h * g * l - m * c * f + o * g * f + h * c * p - o * d * p, x = h * _ * l - m * u * l + m * a * f - o * _ * f - h * a * p + o * u * p, I = m * u * c - h * _ * c - m * a * d + o * _ * d + h * a * g - o * u * g, E = e * y + n * v + i * x + s * I;
    if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / E;
    return t[0] = y * C, t[1] = (_ * d * s - u * g * s - _ * i * f + n * g * f + u * i * p - n * d * p) * C, t[2] = (a * g * s - _ * c * s + _ * i * l - n * g * l - a * i * p + n * c * p) * C, t[3] = (u * c * s - a * d * s - u * i * l + n * d * l + a * i * f - n * c * f) * C, t[4] = v * C, t[5] = (h * g * s - m * d * s + m * i * f - e * g * f - h * i * p + e * d * p) * C, t[6] = (m * c * s - o * g * s - m * i * l + e * g * l + o * i * p - e * c * p) * C, t[7] = (o * d * s - h * c * s + h * i * l - e * d * l - o * i * f + e * c * f) * C, t[8] = x * C, t[9] = (m * u * s - h * _ * s - m * n * f + e * _ * f + h * n * p - e * u * p) * C, t[10] = (o * _ * s - m * a * s + m * n * l - e * _ * l - o * n * p + e * a * p) * C, t[11] = (h * a * s - o * u * s - h * n * l + e * u * l + o * n * f - e * a * f) * C, t[12] = I * C, t[13] = (h * _ * i - m * u * i + m * n * d - e * _ * d - h * n * g + e * u * g) * C, t[14] = (m * a * i - o * _ * i - m * n * c + e * _ * c + o * n * g - e * a * g) * C, t[15] = (o * u * i - h * a * i + h * n * c - e * u * c - o * n * d + e * a * d) * C, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= s, e[1] *= n, e[5] *= i, e[9] *= s, e[2] *= n, e[6] *= i, e[10] *= s, e[3] *= n, e[7] *= i, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), s = 1 - n, o = t.x, a = t.y, c = t.z, l = s * o, h = s * a;
    return this.set(
      l * o + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      h * a + n,
      h * c - i * o,
      0,
      l * c - i * a,
      h * c + i * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, n, i, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      t,
      1,
      o,
      0,
      e,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const i = this.elements, s = e._x, o = e._y, a = e._z, c = e._w, l = s + s, h = o + o, u = a + a, d = s * l, f = s * h, m = s * u, _ = o * h, g = o * u, p = a * u, y = c * l, v = c * h, x = c * u, I = n.x, E = n.y, C = n.z;
    return i[0] = (1 - (_ + p)) * I, i[1] = (f + x) * I, i[2] = (m - v) * I, i[3] = 0, i[4] = (f - x) * E, i[5] = (1 - (d + p)) * E, i[6] = (g + y) * E, i[7] = 0, i[8] = (m + v) * C, i[9] = (g - y) * C, i[10] = (1 - (d + _)) * C, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    let s = $i.set(i[0], i[1], i[2]).length();
    const o = $i.set(i[4], i[5], i[6]).length(), a = $i.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), t.x = i[12], t.y = i[13], t.z = i[14], an.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return an.elements[0] *= l, an.elements[1] *= l, an.elements[2] *= l, an.elements[4] *= h, an.elements[5] *= h, an.elements[6] *= h, an.elements[8] *= u, an.elements[9] *= u, an.elements[10] *= u, e.setFromRotationMatrix(an), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(t, e, n, i, s, o, a = vn) {
    const c = this.elements, l = 2 * s / (e - t), h = 2 * s / (n - i), u = (e + t) / (e - t), d = (n + i) / (n - i);
    let f, m;
    if (a === vn)
      f = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    else if (a === ir)
      f = -o / (o - s), m = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, s, o, a = vn) {
    const c = this.elements, l = 1 / (e - t), h = 1 / (n - i), u = 1 / (o - s), d = (e + t) * l, f = (n + i) * h;
    let m, _;
    if (a === vn)
      m = (o + s) * u, _ = -2 * u;
    else if (a === ir)
      m = s * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const $i = /* @__PURE__ */ new T(), an = /* @__PURE__ */ new Dt(), Wp = /* @__PURE__ */ new T(0, 0, 0), Xp = /* @__PURE__ */ new T(1, 1, 1), Kn = /* @__PURE__ */ new T(), Ur = /* @__PURE__ */ new T(), Je = /* @__PURE__ */ new T(), nh = /* @__PURE__ */ new Dt(), ih = /* @__PURE__ */ new Ie();
class Qe {
  constructor(t = 0, e = 0, n = 0, i = Qe.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements, s = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(pe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-pe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(pe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-pe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(pe(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-pe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return nh.makeRotationFromQuaternion(t), this.setFromRotationMatrix(nh, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return ih.setFromEuler(this), this.setFromQuaternion(ih, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Qe.DEFAULT_ORDER = "XYZ";
class xa {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Yp = 0;
const sh = /* @__PURE__ */ new T(), Ji = /* @__PURE__ */ new Ie(), Pn = /* @__PURE__ */ new Dt(), Nr = /* @__PURE__ */ new T(), Ts = /* @__PURE__ */ new T(), qp = /* @__PURE__ */ new T(), Zp = /* @__PURE__ */ new Ie(), rh = /* @__PURE__ */ new T(1, 0, 0), oh = /* @__PURE__ */ new T(0, 1, 0), ah = /* @__PURE__ */ new T(0, 0, 1), ch = { type: "added" }, $p = { type: "removed" }, Ki = { type: "childadded", child: null }, $a = { type: "childremoved", child: null };
class Zt extends En {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Yp++ }), this.uuid = je(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Zt.DEFAULT_UP.clone();
    const t = new T(), e = new Qe(), n = new Ie(), i = new T(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Dt()
      },
      normalMatrix: {
        value: new zt()
      }
    }), this.matrix = new Dt(), this.matrixWorld = new Dt(), this.matrixAutoUpdate = Zt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new xa(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Ji.setFromAxisAngle(t, e), this.quaternion.multiply(Ji), this;
  }
  rotateOnWorldAxis(t, e) {
    return Ji.setFromAxisAngle(t, e), this.quaternion.premultiply(Ji), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(rh, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(oh, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(ah, t);
  }
  translateOnAxis(t, e) {
    return sh.copy(t).applyQuaternion(this.quaternion), this.position.add(sh.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(rh, t);
  }
  translateY(t) {
    return this.translateOnAxis(oh, t);
  }
  translateZ(t) {
    return this.translateOnAxis(ah, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Pn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Nr.copy(t) : Nr.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Ts.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Pn.lookAt(Ts, Nr, this.up) : Pn.lookAt(Nr, Ts, this.up), this.quaternion.setFromRotationMatrix(Pn), i && (Pn.extractRotation(i.matrixWorld), Ji.setFromRotationMatrix(Pn), this.quaternion.premultiply(Ji.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(ch), Ki.child = t, this.dispatchEvent(Ki), Ki.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent($p), $a.child = t, this.dispatchEvent($a), $a.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Pn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Pn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Pn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(ch), Ki.child = t, this.dispatchEvent(Ki), Ki.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(t, e);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let s = 0, o = i.length; s < o; s++)
      i[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ts, t, qp), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ts, Zp, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(t.shapes, u);
          }
        else
          s(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(t.materials, this.material[c]));
        i.material = a;
      } else
        i.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(t.animations, c));
      }
    }
    if (e) {
      const a = o(t.geometries), c = o(t.materials), l = o(t.textures), h = o(t.images), u = o(t.shapes), d = o(t.skeletons), f = o(t.animations), m = o(t.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Zt.DEFAULT_UP = /* @__PURE__ */ new T(0, 1, 0);
Zt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const cn = /* @__PURE__ */ new T(), In = /* @__PURE__ */ new T(), Ja = /* @__PURE__ */ new T(), Ln = /* @__PURE__ */ new T(), ji = /* @__PURE__ */ new T(), Qi = /* @__PURE__ */ new T(), lh = /* @__PURE__ */ new T(), Ka = /* @__PURE__ */ new T(), ja = /* @__PURE__ */ new T(), Qa = /* @__PURE__ */ new T(), tc = /* @__PURE__ */ new Qt(), ec = /* @__PURE__ */ new Qt(), nc = /* @__PURE__ */ new Qt();
class Ye {
  constructor(t = new T(), e = new T(), n = new T()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), cn.subVectors(t, e), i.cross(cn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, i, s) {
    cn.subVectors(i, e), In.subVectors(n, e), Ja.subVectors(t, e);
    const o = cn.dot(cn), a = cn.dot(In), c = cn.dot(Ja), l = In.dot(In), h = In.dot(Ja), u = o * l - a * a;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / u, f = (l * c - a * h) * d, m = (o * h - a * c) * d;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, Ln) === null ? !1 : Ln.x >= 0 && Ln.y >= 0 && Ln.x + Ln.y <= 1;
  }
  static getInterpolation(t, e, n, i, s, o, a, c) {
    return this.getBarycoord(t, e, n, i, Ln) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Ln.x), c.addScaledVector(o, Ln.y), c.addScaledVector(a, Ln.z), c);
  }
  static getInterpolatedAttribute(t, e, n, i, s, o) {
    return tc.setScalar(0), ec.setScalar(0), nc.setScalar(0), tc.fromBufferAttribute(t, e), ec.fromBufferAttribute(t, n), nc.fromBufferAttribute(t, i), o.setScalar(0), o.addScaledVector(tc, s.x), o.addScaledVector(ec, s.y), o.addScaledVector(nc, s.z), o;
  }
  static isFrontFacing(t, e, n, i) {
    return cn.subVectors(n, e), In.subVectors(t, e), cn.cross(In).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return cn.subVectors(this.c, this.b), In.subVectors(this.a, this.b), cn.cross(In).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Ye.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Ye.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, s) {
    return Ye.getInterpolation(t, this.a, this.b, this.c, e, n, i, s);
  }
  containsPoint(t) {
    return Ye.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Ye.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, s = this.c;
    let o, a;
    ji.subVectors(i, n), Qi.subVectors(s, n), Ka.subVectors(t, n);
    const c = ji.dot(Ka), l = Qi.dot(Ka);
    if (c <= 0 && l <= 0)
      return e.copy(n);
    ja.subVectors(t, i);
    const h = ji.dot(ja), u = Qi.dot(ja);
    if (h >= 0 && u <= h)
      return e.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), e.copy(n).addScaledVector(ji, o);
    Qa.subVectors(t, s);
    const f = ji.dot(Qa), m = Qi.dot(Qa);
    if (m >= 0 && f <= m)
      return e.copy(s);
    const _ = f * l - c * m;
    if (_ <= 0 && l >= 0 && m <= 0)
      return a = l / (l - m), e.copy(n).addScaledVector(Qi, a);
    const g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0)
      return lh.subVectors(s, i), a = (u - h) / (u - h + (f - m)), e.copy(i).addScaledVector(lh, a);
    const p = 1 / (g + _ + d);
    return o = _ * p, a = d * p, e.copy(n).addScaledVector(ji, o).addScaledVector(Qi, a);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Cd = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, jn = { h: 0, s: 0, l: 0 }, Or = { h: 0, s: 0, l: 0 };
function ic(r, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r + (t - r) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? r + (t - r) * 6 * (2 / 3 - e) : r;
}
class ut {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const i = t;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Be) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, qt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, i = qt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, qt.toWorkingColorSpace(this, i), this;
  }
  setHSL(t, e, n, i = qt.workingColorSpace) {
    if (t = cl(t, 1), e = pe(e, 0, 1), n = pe(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, o = 2 * n - s;
      this.r = ic(o, s, t + 1 / 3), this.g = ic(o, s, t), this.b = ic(o, s, t - 1 / 3);
    }
    return qt.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = Be) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              e
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Be) {
    const n = Cd[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = kn(t.r), this.g = kn(t.g), this.b = kn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = ps(t.r), this.g = ps(t.g), this.b = ps(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Be) {
    return qt.fromWorkingColorSpace(Re.copy(this), t), Math.round(pe(Re.r * 255, 0, 255)) * 65536 + Math.round(pe(Re.g * 255, 0, 255)) * 256 + Math.round(pe(Re.b * 255, 0, 255));
  }
  getHexString(t = Be) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = qt.workingColorSpace) {
    qt.fromWorkingColorSpace(Re.copy(this), e);
    const n = Re.r, i = Re.g, s = Re.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = h, t;
  }
  getRGB(t, e = qt.workingColorSpace) {
    return qt.fromWorkingColorSpace(Re.copy(this), e), t.r = Re.r, t.g = Re.g, t.b = Re.b, t;
  }
  getStyle(t = Be) {
    qt.fromWorkingColorSpace(Re.copy(this), t);
    const e = Re.r, n = Re.g, i = Re.b;
    return t !== Be ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(jn), this.setHSL(jn.h + t, jn.s + e, jn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(jn), t.getHSL(Or);
    const n = Xs(jn.h, Or.h, e), i = Xs(jn.s, Or.s, e), s = Xs(jn.l, Or.l, e);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, i = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * i, this.g = s[1] * e + s[4] * n + s[7] * i, this.b = s[2] * e + s[5] * n + s[8] * i, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Re = /* @__PURE__ */ new ut();
ut.NAMES = Cd;
let Jp = 0;
class Ue extends En {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(t) {
  }
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Jp++ }), this.uuid = je(), this.name = "", this.blending = Pi, this.side = bn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = wo, this.blendDst = Eo, this.blendEquation = ei, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ut(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ui, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Uc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Mi, this.stencilZFail = Mi, this.stencilZPass = Mi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const i = this[e];
        if (i === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Pi && (n.blending = this.blending), this.side !== bn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== wo && (n.blendSrc = this.blendSrc), this.blendDst !== Eo && (n.blendDst = this.blendDst), this.blendEquation !== ei && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Ui && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Uc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Mi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Mi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Mi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (e) {
      const s = i(t.textures), o = i(t.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = e[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class wn extends Ue {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.color = new ut(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Qe(), this.combine = pr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const On = /* @__PURE__ */ Kp();
function Kp() {
  const r = new ArrayBuffer(4), t = new Float32Array(r), e = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const s = new Uint32Array(2048), o = new Uint32Array(64), a = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; (l & 8388608) === 0; )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, s[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    s[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    o[c] = c << 23;
  o[31] = 1199570944, o[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    o[c] = 2147483648 + (c - 32 << 23);
  o[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (a[c] = 1024);
  return {
    floatView: t,
    uint32View: e,
    baseTable: n,
    shiftTable: i,
    mantissaTable: s,
    exponentTable: o,
    offsetTable: a
  };
}
function Xe(r) {
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = pe(r, -65504, 65504), On.floatView[0] = r;
  const t = On.uint32View[0], e = t >> 23 & 511;
  return On.baseTable[e] + ((t & 8388607) >> On.shiftTable[e]);
}
function Fs(r) {
  const t = r >> 10;
  return On.uint32View[0] = On.mantissaTable[On.offsetTable[t] + (r & 1023)] + On.exponentTable[t], On.floatView[0];
}
const jp = {
  toHalfFloat: Xe,
  fromHalfFloat: Fs
}, xe = /* @__PURE__ */ new T(), Fr = /* @__PURE__ */ new q();
class oe {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = nr, this.updateRanges = [], this.gpuType = qe, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        Fr.fromBufferAttribute(this, e), Fr.applyMatrix3(t), this.setXY(e, Fr.x, Fr.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        xe.fromBufferAttribute(this, e), xe.applyMatrix3(t), this.setXYZ(e, xe.x, xe.y, xe.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      xe.fromBufferAttribute(this, e), xe.applyMatrix4(t), this.setXYZ(e, xe.x, xe.y, xe.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      xe.fromBufferAttribute(this, e), xe.applyNormalMatrix(t), this.setXYZ(e, xe.x, xe.y, xe.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      xe.fromBufferAttribute(this, e), xe.transformDirection(t), this.setXYZ(e, xe.x, xe.y, xe.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ze(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = kt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = kt(e, this.array), n = kt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = kt(e, this.array), n = kt(n, this.array), i = kt(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, s) {
    return t *= this.itemSize, this.normalized && (e = kt(e, this.array), n = kt(n, this.array), i = kt(i, this.array), s = kt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== nr && (t.usage = this.usage), t;
  }
}
class Qp extends oe {
  constructor(t, e, n) {
    super(new Int8Array(t), e, n);
  }
}
class tm extends oe {
  constructor(t, e, n) {
    super(new Uint8Array(t), e, n);
  }
}
class em extends oe {
  constructor(t, e, n) {
    super(new Uint8ClampedArray(t), e, n);
  }
}
class nm extends oe {
  constructor(t, e, n) {
    super(new Int16Array(t), e, n);
  }
}
class hl extends oe {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class im extends oe {
  constructor(t, e, n) {
    super(new Int32Array(t), e, n);
  }
}
class ul extends oe {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class sm extends oe {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n), this.isFloat16BufferAttribute = !0;
  }
  getX(t) {
    let e = Fs(this.array[t * this.itemSize]);
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize] = Xe(e), this;
  }
  getY(t) {
    let e = Fs(this.array[t * this.itemSize + 1]);
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize + 1] = Xe(e), this;
  }
  getZ(t) {
    let e = Fs(this.array[t * this.itemSize + 2]);
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize + 2] = Xe(e), this;
  }
  getW(t) {
    let e = Fs(this.array[t * this.itemSize + 3]);
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.array[t * this.itemSize + 3] = Xe(e), this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = kt(e, this.array), n = kt(n, this.array)), this.array[t + 0] = Xe(e), this.array[t + 1] = Xe(n), this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = kt(e, this.array), n = kt(n, this.array), i = kt(i, this.array)), this.array[t + 0] = Xe(e), this.array[t + 1] = Xe(n), this.array[t + 2] = Xe(i), this;
  }
  setXYZW(t, e, n, i, s) {
    return t *= this.itemSize, this.normalized && (e = kt(e, this.array), n = kt(n, this.array), i = kt(i, this.array), s = kt(s, this.array)), this.array[t + 0] = Xe(e), this.array[t + 1] = Xe(n), this.array[t + 2] = Xe(i), this.array[t + 3] = Xe(s), this;
  }
}
class St extends oe {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let rm = 0;
const en = /* @__PURE__ */ new Dt(), sc = /* @__PURE__ */ new Zt(), ts = /* @__PURE__ */ new T(), Ke = /* @__PURE__ */ new Le(), As = /* @__PURE__ */ new Le(), we = /* @__PURE__ */ new T();
class Vt extends En {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: rm++ }), this.uuid = je(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (wd(t) ? ul : hl)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new zt().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return en.makeRotationFromQuaternion(t), this.applyMatrix4(en), this;
  }
  rotateX(t) {
    return en.makeRotationX(t), this.applyMatrix4(en), this;
  }
  rotateY(t) {
    return en.makeRotationY(t), this.applyMatrix4(en), this;
  }
  rotateZ(t) {
    return en.makeRotationZ(t), this.applyMatrix4(en), this;
  }
  translate(t, e, n) {
    return en.makeTranslation(t, e, n), this.applyMatrix4(en), this;
  }
  scale(t, e, n) {
    return en.makeScale(t, e, n), this.applyMatrix4(en), this;
  }
  lookAt(t) {
    return sc.lookAt(t), sc.updateMatrix(), this.applyMatrix4(sc.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ts).negate(), this.translate(ts.x, ts.y, ts.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let i = 0, s = t.length; i < s; i++) {
        const o = t[i];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new St(n, 3));
    } else {
      for (let n = 0, i = e.count; n < i; n++) {
        const s = t[n];
        e.setXYZ(n, s.x, s.y, s.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Le());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new T(-1 / 0, -1 / 0, -1 / 0),
        new T(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, i = e.length; n < i; n++) {
          const s = e[n];
          Ke.setFromBufferAttribute(s), this.morphTargetsRelative ? (we.addVectors(this.boundingBox.min, Ke.min), this.boundingBox.expandByPoint(we), we.addVectors(this.boundingBox.max, Ke.max), this.boundingBox.expandByPoint(we)) : (this.boundingBox.expandByPoint(Ke.min), this.boundingBox.expandByPoint(Ke.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new De());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new T(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Ke.setFromBufferAttribute(t), e)
        for (let s = 0, o = e.length; s < o; s++) {
          const a = e[s];
          As.setFromBufferAttribute(a), this.morphTargetsRelative ? (we.addVectors(Ke.min, As.min), Ke.expandByPoint(we), we.addVectors(Ke.max, As.max), Ke.expandByPoint(we)) : (Ke.expandByPoint(As.min), Ke.expandByPoint(As.max));
        }
      Ke.getCenter(n);
      let i = 0;
      for (let s = 0, o = t.count; s < o; s++)
        we.fromBufferAttribute(t, s), i = Math.max(i, n.distanceToSquared(we));
      if (e)
        for (let s = 0, o = e.length; s < o; s++) {
          const a = e[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            we.fromBufferAttribute(a, l), c && (ts.fromBufferAttribute(t, l), we.add(ts)), i = Math.max(i, n.distanceToSquared(we));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, i = e.normal, s = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new oe(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], c = [];
    for (let R = 0; R < n.count; R++)
      a[R] = new T(), c[R] = new T();
    const l = new T(), h = new T(), u = new T(), d = new q(), f = new q(), m = new q(), _ = new T(), g = new T();
    function p(R, S, M) {
      l.fromBufferAttribute(n, R), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, M), d.fromBufferAttribute(s, R), f.fromBufferAttribute(s, S), m.fromBufferAttribute(s, M), h.sub(l), u.sub(l), f.sub(d), m.sub(d);
      const L = 1 / (f.x * m.y - m.x * f.y);
      isFinite(L) && (_.copy(h).multiplyScalar(m.y).addScaledVector(u, -f.y).multiplyScalar(L), g.copy(u).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(L), a[R].add(_), a[S].add(_), a[M].add(_), c[R].add(g), c[S].add(g), c[M].add(g));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: t.count
    }]);
    for (let R = 0, S = y.length; R < S; ++R) {
      const M = y[R], L = M.start, D = M.count;
      for (let U = L, B = L + D; U < B; U += 3)
        p(
          t.getX(U + 0),
          t.getX(U + 1),
          t.getX(U + 2)
        );
    }
    const v = new T(), x = new T(), I = new T(), E = new T();
    function C(R) {
      I.fromBufferAttribute(i, R), E.copy(I);
      const S = a[R];
      v.copy(S), v.sub(I.multiplyScalar(I.dot(S))).normalize(), x.crossVectors(E, S);
      const L = x.dot(c[R]) < 0 ? -1 : 1;
      o.setXYZW(R, v.x, v.y, v.z, L);
    }
    for (let R = 0, S = y.length; R < S; ++R) {
      const M = y[R], L = M.start, D = M.count;
      for (let U = L, B = L + D; U < B; U += 3)
        C(t.getX(U + 0)), C(t.getX(U + 1)), C(t.getX(U + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new oe(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new T(), s = new T(), o = new T(), a = new T(), c = new T(), l = new T(), h = new T(), u = new T();
      if (t)
        for (let d = 0, f = t.count; d < f; d += 3) {
          const m = t.getX(d + 0), _ = t.getX(d + 1), g = t.getX(d + 2);
          i.fromBufferAttribute(e, m), s.fromBufferAttribute(e, _), o.fromBufferAttribute(e, g), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), a.fromBufferAttribute(n, m), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), a.add(h), c.add(h), l.add(h), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
        }
      else
        for (let d = 0, f = e.count; d < f; d += 3)
          i.fromBufferAttribute(e, d + 0), s.fromBufferAttribute(e, d + 1), o.fromBufferAttribute(e, d + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      we.fromBufferAttribute(t, e), we.normalize(), t.setXYZ(e, we.x, we.y, we.z);
  }
  toNonIndexed() {
    function t(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h);
      let f = 0, m = 0;
      for (let _ = 0, g = c.length; _ < g; _++) {
        a.isInterleavedBufferAttribute ? f = c[_] * a.data.stride + a.offset : f = c[_] * h;
        for (let p = 0; p < h; p++)
          d[m++] = l[f++];
      }
      return new oe(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Vt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = t(c, n);
      e.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], f = t(d, n);
        c.push(f);
      }
      e.morphAttributes[a] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(e));
    }
    const s = t.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(e));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const hh = /* @__PURE__ */ new Dt(), hi = /* @__PURE__ */ new ki(), Br = /* @__PURE__ */ new De(), uh = /* @__PURE__ */ new T(), zr = /* @__PURE__ */ new T(), kr = /* @__PURE__ */ new T(), Vr = /* @__PURE__ */ new T(), rc = /* @__PURE__ */ new T(), Hr = /* @__PURE__ */ new T(), dh = /* @__PURE__ */ new T(), Gr = /* @__PURE__ */ new T();
class ye extends Zt {
  constructor(t = new Vt(), e = new wn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Hr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (rc.fromBufferAttribute(u, t), o ? Hr.addScaledVector(rc, h) : Hr.addScaledVector(rc.sub(e), h));
      }
      e.add(Hr);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Br.copy(n.boundingSphere), Br.applyMatrix4(s), hi.copy(t.ray).recast(t.near), !(Br.containsPoint(hi.origin) === !1 && (hi.intersectSphere(Br, uh) === null || hi.origin.distanceToSquared(uh) > (t.far - t.near) ** 2)) && (hh.copy(s).invert(), hi.copy(t.ray).applyMatrix4(hh), !(n.boundingBox !== null && hi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, hi)));
  }
  _computeIntersections(t, e, n) {
    let i;
    const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = o[g.materialIndex], y = Math.max(g.start, f.start), v = Math.min(a.count, Math.min(g.start + g.count, f.start + f.count));
          for (let x = y, I = v; x < I; x += 3) {
            const E = a.getX(x), C = a.getX(x + 1), R = a.getX(x + 2);
            i = Wr(this, p, t, n, l, h, u, E, C, R), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = g.materialIndex, e.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const y = a.getX(g), v = a.getX(g + 1), x = a.getX(g + 2);
          i = Wr(this, o, t, n, l, h, u, y, v, x), i && (i.faceIndex = Math.floor(g / 3), e.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = o[g.materialIndex], y = Math.max(g.start, f.start), v = Math.min(c.count, Math.min(g.start + g.count, f.start + f.count));
          for (let x = y, I = v; x < I; x += 3) {
            const E = x, C = x + 1, R = x + 2;
            i = Wr(this, p, t, n, l, h, u, E, C, R), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = g.materialIndex, e.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(c.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const y = g, v = g + 1, x = g + 2;
          i = Wr(this, o, t, n, l, h, u, y, v, x), i && (i.faceIndex = Math.floor(g / 3), e.push(i));
        }
      }
  }
}
function om(r, t, e, n, i, s, o, a) {
  let c;
  if (t.side === Ve ? c = n.intersectTriangle(o, s, i, !0, a) : c = n.intersectTriangle(i, s, o, t.side === bn, a), c === null) return null;
  Gr.copy(a), Gr.applyMatrix4(r.matrixWorld);
  const l = e.ray.origin.distanceTo(Gr);
  return l < e.near || l > e.far ? null : {
    distance: l,
    point: Gr.clone(),
    object: r
  };
}
function Wr(r, t, e, n, i, s, o, a, c, l) {
  r.getVertexPosition(a, zr), r.getVertexPosition(c, kr), r.getVertexPosition(l, Vr);
  const h = om(r, t, e, n, zr, kr, Vr, dh);
  if (h) {
    const u = new T();
    Ye.getBarycoord(dh, zr, kr, Vr, u), i && (h.uv = Ye.getInterpolatedAttribute(i, a, c, l, u, new q())), s && (h.uv1 = Ye.getInterpolatedAttribute(s, a, c, l, u, new q())), o && (h.normal = Ye.getInterpolatedAttribute(o, a, c, l, u, new T()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a,
      b: c,
      c: l,
      normal: new T(),
      materialIndex: 0
    };
    Ye.getNormal(zr, kr, Vr, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class Gn extends Vt {
  constructor(t = 1, e = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    m("z", "y", "x", -1, -1, n, e, t, o, s, 0), m("z", "y", "x", 1, -1, n, e, -t, o, s, 1), m("x", "z", "y", 1, 1, t, n, e, i, o, 2), m("x", "z", "y", 1, -1, t, n, -e, i, o, 3), m("x", "y", "z", 1, -1, t, e, n, i, s, 4), m("x", "y", "z", -1, -1, t, e, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new St(l, 3)), this.setAttribute("normal", new St(h, 3)), this.setAttribute("uv", new St(u, 2));
    function m(_, g, p, y, v, x, I, E, C, R, S) {
      const M = x / C, L = I / R, D = x / 2, U = I / 2, B = E / 2, Y = C + 1, H = R + 1;
      let j = 0, G = 0;
      const at = new T();
      for (let dt = 0; dt < H; dt++) {
        const xt = dt * L - U;
        for (let Ot = 0; Ot < Y; Ot++) {
          const Jt = Ot * M - D;
          at[_] = Jt * y, at[g] = xt * v, at[p] = B, l.push(at.x, at.y, at.z), at[_] = 0, at[g] = 0, at[p] = E > 0 ? 1 : -1, h.push(at.x, at.y, at.z), u.push(Ot / C), u.push(1 - dt / R), j += 1;
        }
      }
      for (let dt = 0; dt < R; dt++)
        for (let xt = 0; xt < C; xt++) {
          const Ot = d + xt + Y * dt, Jt = d + xt + Y * (dt + 1), X = d + (xt + 1) + Y * (dt + 1), nt = d + (xt + 1) + Y * dt;
          c.push(Ot, Jt, nt), c.push(Jt, X, nt), G += 6;
        }
      a.addGroup(f, G, S), f += G, d += j;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Gn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function _s(r) {
  const t = {};
  for (const e in r) {
    t[e] = {};
    for (const n in r[e]) {
      const i = r[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function Fe(r) {
  const t = {};
  for (let e = 0; e < r.length; e++) {
    const n = _s(r[e]);
    for (const i in n)
      t[i] = n[i];
  }
  return t;
}
function am(r) {
  const t = [];
  for (let e = 0; e < r.length; e++)
    t.push(r[e].clone());
  return t;
}
function Rd(r) {
  const t = r.getRenderTarget();
  return t === null ? r.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : qt.workingColorSpace;
}
const Pd = { clone: _s, merge: Fe };
var cm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, lm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class fn extends Ue {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = cm, this.fragmentShader = lm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = _s(t.uniforms), this.uniformsGroups = am(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? e.uniforms[i] = {
        type: "t",
        value: o.toJSON(t).uuid
      } : o && o.isColor ? e.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? e.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? e.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? e.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? e.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? e.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : e.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class ya extends Zt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Dt(), this.projectionMatrix = new Dt(), this.projectionMatrixInverse = new Dt(), this.coordinateSystem = vn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qn = /* @__PURE__ */ new T(), fh = /* @__PURE__ */ new q(), ph = /* @__PURE__ */ new q();
class Ee extends ya {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = gs * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Li * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return gs * 2 * Math.atan(
      Math.tan(Li * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(t, e, n) {
    Qn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Qn.x, Qn.y).multiplyScalar(-t / Qn.z), Qn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Qn.x, Qn.y).multiplyScalar(-t / Qn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, fh, ph), e.subVectors(ph, fh);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, n, i, s, o) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Li * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * i / c, e -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const es = -90, ns = 1;
class Id extends Zt {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Ee(es, ns, t, e);
    i.layers = this.layers, this.add(i);
    const s = new Ee(es, ns, t, e);
    s.layers = this.layers, this.add(s);
    const o = new Ee(es, ns, t, e);
    o.layers = this.layers, this.add(o);
    const a = new Ee(es, ns, t, e);
    a.layers = this.layers, this.add(a);
    const c = new Ee(es, ns, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Ee(es, ns, t, e);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, i, s, o, a, c] = e;
    for (const l of e) this.remove(l);
    if (t === vn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === ir)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e)
      this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, c, l, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), m = t.xr.enabled;
    t.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, i), t.render(e, s), t.setRenderTarget(n, 1, i), t.render(e, o), t.setRenderTarget(n, 2, i), t.render(e, a), t.setRenderTarget(n, 3, i), t.render(e, c), t.setRenderTarget(n, 4, i), t.render(e, l), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, i), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = m, n.texture.needsPMREMUpdate = !0;
  }
}
class _r extends me {
  constructor(t, e, n, i, s, o, a, c, l, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : Vn, super(t, e, n, i, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Ld extends dn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new _r(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : _e;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Gn(5, 5, 5), s = new fn({
      name: "CubemapFromEquirect",
      uniforms: _s(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Ve,
      blending: Bn
    });
    s.uniforms.tEquirect.value = e;
    const o = new ye(i, s), a = e.minFilter;
    return e.minFilter === yn && (e.minFilter = _e), new Id(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(t, e, n, i) {
    const s = t.getRenderTarget();
    for (let o = 0; o < 6; o++)
      t.setRenderTarget(this, o), t.clear(e, n, i);
    t.setRenderTarget(s);
  }
}
const oc = /* @__PURE__ */ new T(), hm = /* @__PURE__ */ new T(), um = /* @__PURE__ */ new zt();
class Un {
  constructor(t = new T(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = oc.subVectors(n, e).cross(hm.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(oc), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || um.getNormalMatrix(t), i = this.coplanarPoint(oc).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ui = /* @__PURE__ */ new De(), Xr = /* @__PURE__ */ new T();
class xr {
  constructor(t = new Un(), e = new Un(), n = new Un(), i = new Un(), s = new Un(), o = new Un()) {
    this.planes = [t, e, n, i, s, o];
  }
  set(t, e, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = vn) {
    const n = this.planes, i = t.elements, s = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], m = i[9], _ = i[10], g = i[11], p = i[12], y = i[13], v = i[14], x = i[15];
    if (n[0].setComponents(c - s, d - l, g - f, x - p).normalize(), n[1].setComponents(c + s, d + l, g + f, x + p).normalize(), n[2].setComponents(c + o, d + h, g + m, x + y).normalize(), n[3].setComponents(c - o, d - h, g - m, x - y).normalize(), n[4].setComponents(c - a, d - u, g - _, x - v).normalize(), e === vn)
      n[5].setComponents(c + a, d + u, g + _, x + v).normalize();
    else if (e === ir)
      n[5].setComponents(a, u, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(ui);
  }
  intersectsSprite(t) {
    return ui.center.set(0, 0, 0), ui.radius = 0.7071067811865476, ui.applyMatrix4(t.matrixWorld), this.intersectsSphere(ui);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let s = 0; s < 6; s++)
      if (e[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (Xr.x = i.normal.x > 0 ? t.max.x : t.min.x, Xr.y = i.normal.y > 0 ? t.max.y : t.min.y, Xr.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Xr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Dd() {
  let r = null, t = !1, e = null, n = null;
  function i(s, o) {
    e(s, o), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = r.requestAnimationFrame(i), t = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      e = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function dm(r) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(a, c) {
    const l = a.array, h = a.usage, u = l.byteLength, d = r.createBuffer();
    r.bindBuffer(c, d), r.bufferData(c, l, h), a.onUploadCallback();
    let f;
    if (l instanceof Float32Array)
      f = r.FLOAT;
    else if (l instanceof Uint16Array)
      a.isFloat16BufferAttribute ? f = r.HALF_FLOAT : f = r.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      f = r.SHORT;
    else if (l instanceof Uint32Array)
      f = r.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      f = r.INT;
    else if (l instanceof Int8Array)
      f = r.BYTE;
    else if (l instanceof Uint8Array)
      f = r.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      f = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: d,
      type: f,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: a.version,
      size: u
    };
  }
  function n(a, c, l) {
    const h = c.array, u = c.updateRanges;
    if (r.bindBuffer(l, a), u.length === 0)
      r.bufferSubData(l, 0, h);
    else {
      u.sort((f, m) => f.start - m.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const m = u[d], _ = u[f];
        _.start <= m.start + m.count + 1 ? m.count = Math.max(
          m.count,
          _.start + _.count - m.start
        ) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let f = 0, m = u.length; f < m; f++) {
        const _ = u[f];
        r.bufferSubData(
          l,
          _.start * h.BYTES_PER_ELEMENT,
          h,
          _.start,
          _.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), t.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const c = t.get(a);
    c && (r.deleteBuffer(c.buffer), t.delete(a));
  }
  function o(a, c) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = t.get(a);
      (!h || h.version < a.version) && t.set(a, {
        buffer: a.buffer,
        type: a.type,
        bytesPerElement: a.elementSize,
        version: a.version
      });
      return;
    }
    const l = t.get(a);
    if (l === void 0)
      t.set(a, e(a, c));
    else if (l.version < a.version) {
      if (l.size !== a.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, a, c), l.version = a.version;
    }
  }
  return {
    get: i,
    remove: s,
    update: o
  };
}
class Wn extends Vt {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    };
    const s = t / 2, o = e / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = t / a, d = e / c, f = [], m = [], _ = [], g = [];
    for (let p = 0; p < h; p++) {
      const y = p * d - o;
      for (let v = 0; v < l; v++) {
        const x = v * u - s;
        m.push(x, -y, 0), _.push(0, 0, 1), g.push(v / a), g.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let y = 0; y < a; y++) {
        const v = y + l * p, x = y + l * (p + 1), I = y + 1 + l * (p + 1), E = y + 1 + l * p;
        f.push(v, x, E), f.push(x, I, E);
      }
    this.setIndex(f), this.setAttribute("position", new St(m, 3)), this.setAttribute("normal", new St(_, 3)), this.setAttribute("uv", new St(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Wn(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var fm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, pm = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, mm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, gm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _m = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, xm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ym = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, vm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Mm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, bm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Sm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, wm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Em = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Tm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Am = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Cm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Rm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Pm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Im = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Lm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Dm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Um = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Nm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Om = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Fm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Bm = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, zm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, km = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Vm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Hm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Gm = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wm = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Xm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Ym = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, qm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Zm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, $m = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Jm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Km = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, jm = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, tg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, eg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ng = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ig = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, sg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, rg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, og = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ag = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, cg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, hg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, ug = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, dg = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, fg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, pg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, mg = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, gg = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _g = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xg = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, yg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Mg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, bg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Sg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, wg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Eg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Tg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ag = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Cg = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Rg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Pg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ig = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Lg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Dg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ug = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ng = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Og = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Fg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Bg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, zg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, kg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Vg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Hg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Gg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Wg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Xg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Yg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, qg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Zg = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, $g = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Jg = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Kg = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, jg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Qg = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, t_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, e_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, n_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, i_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, s_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, r_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, o_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, a_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, c_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, l_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, h_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, u_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const d_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, f_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, p_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, m_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, g_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, __ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, x_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, y_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, v_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, M_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, b_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, S_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, w_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, E_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, T_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, A_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, C_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, R_ = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, P_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, I_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, L_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, D_ = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, U_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, N_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, O_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, F_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, B_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, z_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, k_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, V_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, H_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, G_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, W_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, X_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Wt = {
  alphahash_fragment: fm,
  alphahash_pars_fragment: pm,
  alphamap_fragment: mm,
  alphamap_pars_fragment: gm,
  alphatest_fragment: _m,
  alphatest_pars_fragment: xm,
  aomap_fragment: ym,
  aomap_pars_fragment: vm,
  batching_pars_vertex: Mm,
  batching_vertex: bm,
  begin_vertex: Sm,
  beginnormal_vertex: wm,
  bsdfs: Em,
  iridescence_fragment: Tm,
  bumpmap_pars_fragment: Am,
  clipping_planes_fragment: Cm,
  clipping_planes_pars_fragment: Rm,
  clipping_planes_pars_vertex: Pm,
  clipping_planes_vertex: Im,
  color_fragment: Lm,
  color_pars_fragment: Dm,
  color_pars_vertex: Um,
  color_vertex: Nm,
  common: Om,
  cube_uv_reflection_fragment: Fm,
  defaultnormal_vertex: Bm,
  displacementmap_pars_vertex: zm,
  displacementmap_vertex: km,
  emissivemap_fragment: Vm,
  emissivemap_pars_fragment: Hm,
  colorspace_fragment: Gm,
  colorspace_pars_fragment: Wm,
  envmap_fragment: Xm,
  envmap_common_pars_fragment: Ym,
  envmap_pars_fragment: qm,
  envmap_pars_vertex: Zm,
  envmap_physical_pars_fragment: rg,
  envmap_vertex: $m,
  fog_vertex: Jm,
  fog_pars_vertex: Km,
  fog_fragment: jm,
  fog_pars_fragment: Qm,
  gradientmap_pars_fragment: tg,
  lightmap_pars_fragment: eg,
  lights_lambert_fragment: ng,
  lights_lambert_pars_fragment: ig,
  lights_pars_begin: sg,
  lights_toon_fragment: og,
  lights_toon_pars_fragment: ag,
  lights_phong_fragment: cg,
  lights_phong_pars_fragment: lg,
  lights_physical_fragment: hg,
  lights_physical_pars_fragment: ug,
  lights_fragment_begin: dg,
  lights_fragment_maps: fg,
  lights_fragment_end: pg,
  logdepthbuf_fragment: mg,
  logdepthbuf_pars_fragment: gg,
  logdepthbuf_pars_vertex: _g,
  logdepthbuf_vertex: xg,
  map_fragment: yg,
  map_pars_fragment: vg,
  map_particle_fragment: Mg,
  map_particle_pars_fragment: bg,
  metalnessmap_fragment: Sg,
  metalnessmap_pars_fragment: wg,
  morphinstance_vertex: Eg,
  morphcolor_vertex: Tg,
  morphnormal_vertex: Ag,
  morphtarget_pars_vertex: Cg,
  morphtarget_vertex: Rg,
  normal_fragment_begin: Pg,
  normal_fragment_maps: Ig,
  normal_pars_fragment: Lg,
  normal_pars_vertex: Dg,
  normal_vertex: Ug,
  normalmap_pars_fragment: Ng,
  clearcoat_normal_fragment_begin: Og,
  clearcoat_normal_fragment_maps: Fg,
  clearcoat_pars_fragment: Bg,
  iridescence_pars_fragment: zg,
  opaque_fragment: kg,
  packing: Vg,
  premultiplied_alpha_fragment: Hg,
  project_vertex: Gg,
  dithering_fragment: Wg,
  dithering_pars_fragment: Xg,
  roughnessmap_fragment: Yg,
  roughnessmap_pars_fragment: qg,
  shadowmap_pars_fragment: Zg,
  shadowmap_pars_vertex: $g,
  shadowmap_vertex: Jg,
  shadowmask_pars_fragment: Kg,
  skinbase_vertex: jg,
  skinning_pars_vertex: Qg,
  skinning_vertex: t_,
  skinnormal_vertex: e_,
  specularmap_fragment: n_,
  specularmap_pars_fragment: i_,
  tonemapping_fragment: s_,
  tonemapping_pars_fragment: r_,
  transmission_fragment: o_,
  transmission_pars_fragment: a_,
  uv_pars_fragment: c_,
  uv_pars_vertex: l_,
  uv_vertex: h_,
  worldpos_vertex: u_,
  background_vert: d_,
  background_frag: f_,
  backgroundCube_vert: p_,
  backgroundCube_frag: m_,
  cube_vert: g_,
  cube_frag: __,
  depth_vert: x_,
  depth_frag: y_,
  distanceRGBA_vert: v_,
  distanceRGBA_frag: M_,
  equirect_vert: b_,
  equirect_frag: S_,
  linedashed_vert: w_,
  linedashed_frag: E_,
  meshbasic_vert: T_,
  meshbasic_frag: A_,
  meshlambert_vert: C_,
  meshlambert_frag: R_,
  meshmatcap_vert: P_,
  meshmatcap_frag: I_,
  meshnormal_vert: L_,
  meshnormal_frag: D_,
  meshphong_vert: U_,
  meshphong_frag: N_,
  meshphysical_vert: O_,
  meshphysical_frag: F_,
  meshtoon_vert: B_,
  meshtoon_frag: z_,
  points_vert: k_,
  points_frag: V_,
  shadow_vert: H_,
  shadow_frag: G_,
  sprite_vert: W_,
  sprite_frag: X_
}, ct = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ut(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new zt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new zt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new zt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new zt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new zt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new zt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new zt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new zt() },
    normalScale: { value: /* @__PURE__ */ new q(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new zt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new zt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new zt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new zt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ut(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ut(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new zt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new zt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ut(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new q(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new zt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new zt() },
    alphaTest: { value: 0 }
  }
}, ln = {
  basic: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.specularmap,
      ct.envmap,
      ct.aomap,
      ct.lightmap,
      ct.fog
    ]),
    vertexShader: Wt.meshbasic_vert,
    fragmentShader: Wt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.specularmap,
      ct.envmap,
      ct.aomap,
      ct.lightmap,
      ct.emissivemap,
      ct.bumpmap,
      ct.normalmap,
      ct.displacementmap,
      ct.fog,
      ct.lights,
      {
        emissive: { value: /* @__PURE__ */ new ut(0) }
      }
    ]),
    vertexShader: Wt.meshlambert_vert,
    fragmentShader: Wt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.specularmap,
      ct.envmap,
      ct.aomap,
      ct.lightmap,
      ct.emissivemap,
      ct.bumpmap,
      ct.normalmap,
      ct.displacementmap,
      ct.fog,
      ct.lights,
      {
        emissive: { value: /* @__PURE__ */ new ut(0) },
        specular: { value: /* @__PURE__ */ new ut(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Wt.meshphong_vert,
    fragmentShader: Wt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.envmap,
      ct.aomap,
      ct.lightmap,
      ct.emissivemap,
      ct.bumpmap,
      ct.normalmap,
      ct.displacementmap,
      ct.roughnessmap,
      ct.metalnessmap,
      ct.fog,
      ct.lights,
      {
        emissive: { value: /* @__PURE__ */ new ut(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Wt.meshphysical_vert,
    fragmentShader: Wt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.aomap,
      ct.lightmap,
      ct.emissivemap,
      ct.bumpmap,
      ct.normalmap,
      ct.displacementmap,
      ct.gradientmap,
      ct.fog,
      ct.lights,
      {
        emissive: { value: /* @__PURE__ */ new ut(0) }
      }
    ]),
    vertexShader: Wt.meshtoon_vert,
    fragmentShader: Wt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.bumpmap,
      ct.normalmap,
      ct.displacementmap,
      ct.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Wt.meshmatcap_vert,
    fragmentShader: Wt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Fe([
      ct.points,
      ct.fog
    ]),
    vertexShader: Wt.points_vert,
    fragmentShader: Wt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Wt.linedashed_vert,
    fragmentShader: Wt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.displacementmap
    ]),
    vertexShader: Wt.depth_vert,
    fragmentShader: Wt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.bumpmap,
      ct.normalmap,
      ct.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Wt.meshnormal_vert,
    fragmentShader: Wt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Fe([
      ct.sprite,
      ct.fog
    ]),
    vertexShader: Wt.sprite_vert,
    fragmentShader: Wt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new zt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Wt.background_vert,
    fragmentShader: Wt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new zt() }
    },
    vertexShader: Wt.backgroundCube_vert,
    fragmentShader: Wt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Wt.cube_vert,
    fragmentShader: Wt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Wt.equirect_vert,
    fragmentShader: Wt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Fe([
      ct.common,
      ct.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new T() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Wt.distanceRGBA_vert,
    fragmentShader: Wt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Fe([
      ct.lights,
      ct.fog,
      {
        color: { value: /* @__PURE__ */ new ut(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Wt.shadow_vert,
    fragmentShader: Wt.shadow_frag
  }
};
ln.physical = {
  uniforms: /* @__PURE__ */ Fe([
    ln.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new zt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new zt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new q(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new zt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new zt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new zt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ut(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new zt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new zt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new zt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new q() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new zt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ut(0) },
      specularColor: { value: /* @__PURE__ */ new ut(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new zt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new zt() },
      anisotropyVector: { value: /* @__PURE__ */ new q() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new zt() }
    }
  ]),
  vertexShader: Wt.meshphysical_vert,
  fragmentShader: Wt.meshphysical_frag
};
const Yr = { r: 0, b: 0, g: 0 }, di = /* @__PURE__ */ new Qe(), Y_ = /* @__PURE__ */ new Dt();
function q_(r, t, e, n, i, s, o) {
  const a = new ut(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, f = null;
  function m(y) {
    let v = y.isScene === !0 ? y.background : null;
    return v && v.isTexture && (v = (y.backgroundBlurriness > 0 ? e : t).get(v)), v;
  }
  function _(y) {
    let v = !1;
    const x = m(y);
    x === null ? p(a, c) : x && x.isColor && (p(x, 1), v = !0);
    const I = r.xr.getEnvironmentBlendMode();
    I === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : I === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (r.autoClear || v) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function g(y, v) {
    const x = m(v);
    x && (x.isCubeTexture || x.mapping === ys) ? (h === void 0 && (h = new ye(
      new Gn(1, 1, 1),
      new fn({
        name: "BackgroundCubeMaterial",
        uniforms: _s(ln.backgroundCube.uniforms),
        vertexShader: ln.backgroundCube.vertexShader,
        fragmentShader: ln.backgroundCube.fragmentShader,
        side: Ve,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(I, E, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), di.copy(v.backgroundRotation), di.x *= -1, di.y *= -1, di.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (di.y *= -1, di.z *= -1), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(di)), h.material.toneMapped = qt.getTransfer(x.colorSpace) !== se, (u !== x || d !== x.version || f !== r.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, f = r.toneMapping), h.layers.enableAll(), y.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new ye(
      new Wn(2, 2),
      new fn({
        name: "BackgroundMaterial",
        uniforms: _s(ln.background.uniforms),
        vertexShader: ln.background.vertexShader,
        fragmentShader: ln.background.fragmentShader,
        side: bn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, l.material.toneMapped = qt.getTransfer(x.colorSpace) !== se, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || f !== r.toneMapping) && (l.material.needsUpdate = !0, u = x, d = x.version, f = r.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(y, v) {
    y.getRGB(Yr, Rd(r)), n.buffers.color.setClear(Yr.r, Yr.g, Yr.b, v, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(y, v = 1) {
      a.set(y), c = v, p(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(y) {
      c = y, p(a, c);
    },
    render: _,
    addToRenderList: g
  };
}
function Z_(r, t) {
  const e = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let s = i, o = !1;
  function a(M, L, D, U, B) {
    let Y = !1;
    const H = u(U, D, L);
    s !== H && (s = H, l(s.object)), Y = f(M, U, D, B), Y && m(M, U, D, B), B !== null && t.update(B, r.ELEMENT_ARRAY_BUFFER), (Y || o) && (o = !1, x(M, L, D, U), B !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(B).buffer));
  }
  function c() {
    return r.createVertexArray();
  }
  function l(M) {
    return r.bindVertexArray(M);
  }
  function h(M) {
    return r.deleteVertexArray(M);
  }
  function u(M, L, D) {
    const U = D.wireframe === !0;
    let B = n[M.id];
    B === void 0 && (B = {}, n[M.id] = B);
    let Y = B[L.id];
    Y === void 0 && (Y = {}, B[L.id] = Y);
    let H = Y[U];
    return H === void 0 && (H = d(c()), Y[U] = H), H;
  }
  function d(M) {
    const L = [], D = [], U = [];
    for (let B = 0; B < e; B++)
      L[B] = 0, D[B] = 0, U[B] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: D,
      attributeDivisors: U,
      object: M,
      attributes: {},
      index: null
    };
  }
  function f(M, L, D, U) {
    const B = s.attributes, Y = L.attributes;
    let H = 0;
    const j = D.getAttributes();
    for (const G in j)
      if (j[G].location >= 0) {
        const dt = B[G];
        let xt = Y[G];
        if (xt === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (xt = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (xt = M.instanceColor)), dt === void 0 || dt.attribute !== xt || xt && dt.data !== xt.data) return !0;
        H++;
      }
    return s.attributesNum !== H || s.index !== U;
  }
  function m(M, L, D, U) {
    const B = {}, Y = L.attributes;
    let H = 0;
    const j = D.getAttributes();
    for (const G in j)
      if (j[G].location >= 0) {
        let dt = Y[G];
        dt === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (dt = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (dt = M.instanceColor));
        const xt = {};
        xt.attribute = dt, dt && dt.data && (xt.data = dt.data), B[G] = xt, H++;
      }
    s.attributes = B, s.attributesNum = H, s.index = U;
  }
  function _() {
    const M = s.newAttributes;
    for (let L = 0, D = M.length; L < D; L++)
      M[L] = 0;
  }
  function g(M) {
    p(M, 0);
  }
  function p(M, L) {
    const D = s.newAttributes, U = s.enabledAttributes, B = s.attributeDivisors;
    D[M] = 1, U[M] === 0 && (r.enableVertexAttribArray(M), U[M] = 1), B[M] !== L && (r.vertexAttribDivisor(M, L), B[M] = L);
  }
  function y() {
    const M = s.newAttributes, L = s.enabledAttributes;
    for (let D = 0, U = L.length; D < U; D++)
      L[D] !== M[D] && (r.disableVertexAttribArray(D), L[D] = 0);
  }
  function v(M, L, D, U, B, Y, H) {
    H === !0 ? r.vertexAttribIPointer(M, L, D, B, Y) : r.vertexAttribPointer(M, L, D, U, B, Y);
  }
  function x(M, L, D, U) {
    _();
    const B = U.attributes, Y = D.getAttributes(), H = L.defaultAttributeValues;
    for (const j in Y) {
      const G = Y[j];
      if (G.location >= 0) {
        let at = B[j];
        if (at === void 0 && (j === "instanceMatrix" && M.instanceMatrix && (at = M.instanceMatrix), j === "instanceColor" && M.instanceColor && (at = M.instanceColor)), at !== void 0) {
          const dt = at.normalized, xt = at.itemSize, Ot = t.get(at);
          if (Ot === void 0) continue;
          const Jt = Ot.buffer, X = Ot.type, nt = Ot.bytesPerElement, bt = X === r.INT || X === r.UNSIGNED_INT || at.gpuType === ha;
          if (at.isInterleavedBufferAttribute) {
            const it = at.data, Pt = it.stride, Ft = at.offset;
            if (it.isInstancedInterleavedBuffer) {
              for (let Ut = 0; Ut < G.locationSize; Ut++)
                p(G.location + Ut, it.meshPerAttribute);
              M.isInstancedMesh !== !0 && U._maxInstanceCount === void 0 && (U._maxInstanceCount = it.meshPerAttribute * it.count);
            } else
              for (let Ut = 0; Ut < G.locationSize; Ut++)
                g(G.location + Ut);
            r.bindBuffer(r.ARRAY_BUFFER, Jt);
            for (let Ut = 0; Ut < G.locationSize; Ut++)
              v(
                G.location + Ut,
                xt / G.locationSize,
                X,
                dt,
                Pt * nt,
                (Ft + xt / G.locationSize * Ut) * nt,
                bt
              );
          } else {
            if (at.isInstancedBufferAttribute) {
              for (let it = 0; it < G.locationSize; it++)
                p(G.location + it, at.meshPerAttribute);
              M.isInstancedMesh !== !0 && U._maxInstanceCount === void 0 && (U._maxInstanceCount = at.meshPerAttribute * at.count);
            } else
              for (let it = 0; it < G.locationSize; it++)
                g(G.location + it);
            r.bindBuffer(r.ARRAY_BUFFER, Jt);
            for (let it = 0; it < G.locationSize; it++)
              v(
                G.location + it,
                xt / G.locationSize,
                X,
                dt,
                xt * nt,
                xt / G.locationSize * it * nt,
                bt
              );
          }
        } else if (H !== void 0) {
          const dt = H[j];
          if (dt !== void 0)
            switch (dt.length) {
              case 2:
                r.vertexAttrib2fv(G.location, dt);
                break;
              case 3:
                r.vertexAttrib3fv(G.location, dt);
                break;
              case 4:
                r.vertexAttrib4fv(G.location, dt);
                break;
              default:
                r.vertexAttrib1fv(G.location, dt);
            }
        }
      }
    }
    y();
  }
  function I() {
    R();
    for (const M in n) {
      const L = n[M];
      for (const D in L) {
        const U = L[D];
        for (const B in U)
          h(U[B].object), delete U[B];
        delete L[D];
      }
      delete n[M];
    }
  }
  function E(M) {
    if (n[M.id] === void 0) return;
    const L = n[M.id];
    for (const D in L) {
      const U = L[D];
      for (const B in U)
        h(U[B].object), delete U[B];
      delete L[D];
    }
    delete n[M.id];
  }
  function C(M) {
    for (const L in n) {
      const D = n[L];
      if (D[M.id] === void 0) continue;
      const U = D[M.id];
      for (const B in U)
        h(U[B].object), delete U[B];
      delete D[M.id];
    }
  }
  function R() {
    S(), o = !0, s !== i && (s = i, l(s.object));
  }
  function S() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: a,
    reset: R,
    resetDefaultState: S,
    dispose: I,
    releaseStatesOfGeometry: E,
    releaseStatesOfProgram: C,
    initAttributes: _,
    enableAttribute: g,
    disableUnusedAttributes: y
  };
}
function $_(r, t, e) {
  let n;
  function i(l) {
    n = l;
  }
  function s(l, h) {
    r.drawArrays(n, l, h), e.update(h, n, 1);
  }
  function o(l, h, u) {
    u !== 0 && (r.drawArraysInstanced(n, l, h, u), e.update(h, n, u));
  }
  function a(l, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
    let f = 0;
    for (let m = 0; m < u; m++)
      f += h[m];
    e.update(f, n, 1);
  }
  function c(l, h, u, d) {
    if (u === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let m = 0; m < l.length; m++)
        o(l[m], h[m], d[m]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, d, 0, u);
      let m = 0;
      for (let _ = 0; _ < u; _++)
        m += h[_] * d[_];
      e.update(m, n, 1);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = c;
}
function J_(r, t, e, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const C = t.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function o(C) {
    return !(C !== ke && n.convert(C) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(C) {
    const R = C === vs && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== Sn && n.convert(C) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    C !== qe && !R);
  }
  function c(C) {
    if (C === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const u = e.logarithmicDepthBuffer === !0, d = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), m = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), y = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), v = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), I = m > 0, E = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: l,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: m,
    maxTextureSize: _,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: y,
    maxVaryings: v,
    maxFragmentUniforms: x,
    vertexTextures: I,
    maxSamples: E
  };
}
function K_(r) {
  const t = this;
  let e = null, n = 0, i = !1, s = !1;
  const o = new Un(), a = new zt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    e = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const m = u.clippingPlanes, _ = u.clipIntersection, g = u.clipShadows, p = r.get(u);
    if (!i || m === null || m.length === 0 || s && !g)
      s ? h(null) : l();
    else {
      const y = s ? 0 : n, v = y * 4;
      let x = p.clippingState || null;
      c.value = x, x = h(m, d, v, f);
      for (let I = 0; I !== v; ++I)
        x[I] = e[I];
      p.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, d, f, m) {
    const _ = u !== null ? u.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = c.value, m !== !0 || g === null) {
        const p = f + _ * 4, y = d.matrixWorldInverse;
        a.getNormalMatrix(y), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let v = 0, x = f; v !== _; ++v, x += 4)
          o.copy(u[v]).applyMatrix4(y, a), o.normal.toArray(g, x), g[x + 3] = o.constant;
      }
      c.value = g, c.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, g;
  }
}
function j_(r) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, a) {
    return a === Js ? o.mapping = Vn : a === Ks && (o.mapping = ni), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Js || a === Ks)
        if (t.has(o)) {
          const c = t.get(o).texture;
          return e(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Ld(c.height);
            return l.fromEquirectangularTexture(r, o), t.set(o, l), o.addEventListener("dispose", i), e(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = t.get(a);
    c !== void 0 && (t.delete(a), c.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class va extends ya {
  constructor(t = -1, e = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - t, o = n + t, a = i + e, c = i - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const us = 4, mh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Si = 20, ac = /* @__PURE__ */ new va(), gh = /* @__PURE__ */ new ut();
let cc = null, lc = 0, hc = 0, uc = !1;
const bi = (1 + Math.sqrt(5)) / 2, is = 1 / bi, _h = [
  /* @__PURE__ */ new T(-bi, is, 0),
  /* @__PURE__ */ new T(bi, is, 0),
  /* @__PURE__ */ new T(-is, 0, bi),
  /* @__PURE__ */ new T(is, 0, bi),
  /* @__PURE__ */ new T(0, bi, -is),
  /* @__PURE__ */ new T(0, bi, is),
  /* @__PURE__ */ new T(-1, 1, -1),
  /* @__PURE__ */ new T(1, 1, -1),
  /* @__PURE__ */ new T(-1, 1, 1),
  /* @__PURE__ */ new T(1, 1, 1)
];
class Oc {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, n = 0.1, i = 100) {
    cc = this._renderer.getRenderTarget(), lc = this._renderer.getActiveCubeFace(), hc = this._renderer.getActiveMipmapLevel(), uc = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(t, n, i, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = vh(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = yh(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(cc, lc, hc), this._renderer.xr.enabled = uc, t.scissorTest = !1, qr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Vn || t.mapping === ni ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), cc = this._renderer.getRenderTarget(), lc = this._renderer.getActiveCubeFace(), hc = this._renderer.getActiveMipmapLevel(), uc = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: _e,
      minFilter: _e,
      generateMipmaps: !1,
      type: vs,
      format: ke,
      colorSpace: zi,
      depthBuffer: !1
    }, i = xh(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = xh(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Q_(s)), this._blurMaterial = t0(s, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new ye(this._lodPlanes[0], t);
    this._renderer.compile(e, ac);
  }
  _sceneToCubeUV(t, e, n, i) {
    const a = new Ee(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(gh), h.toneMapping = zn, h.autoClear = !1;
    const f = new wn({
      name: "PMREM.Background",
      side: Ve,
      depthWrite: !1,
      depthTest: !1
    }), m = new ye(new Gn(), f);
    let _ = !1;
    const g = t.background;
    g ? g.isColor && (f.color.copy(g), t.background = null, _ = !0) : (f.color.copy(gh), _ = !0);
    for (let p = 0; p < 6; p++) {
      const y = p % 3;
      y === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : y === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p]));
      const v = this._cubeSize;
      qr(i, y * v, p > 2 ? v : 0, v, v), h.setRenderTarget(i), _ && h.render(m, a), h.render(t, a);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = g;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === Vn || t.mapping === ni;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = vh()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = yh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new ye(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = t;
    const c = this._cubeSize;
    qr(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(o, ac);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = _h[(i - s - 1) % _h.length];
      this._blur(t, s - 1, s, o, a);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      o,
      e,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      t,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(t, e, n, i, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new ye(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Si - 1), _ = s / m, g = isFinite(s) ? 1 + Math.floor(h * _) : Si;
    g > Si && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);
    const p = [];
    let y = 0;
    for (let C = 0; C < Si; ++C) {
      const R = C / _, S = Math.exp(-R * R / 2);
      p.push(S), C === 0 ? y += S : C < g && (y += 2 * S);
    }
    for (let C = 0; C < p.length; C++)
      p[C] = p[C] / y;
    d.envMap.value = t.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: v } = this;
    d.dTheta.value = m, d.mipInt.value = v - n;
    const x = this._sizeLods[i], I = 3 * x * (i > v - us ? i - v + us : 0), E = 4 * (this._cubeSize - x);
    qr(e, I, E, 3 * x, 2 * x), c.setRenderTarget(e), c.render(u, ac);
  }
}
function Q_(r) {
  const t = [], e = [], n = [];
  let i = r;
  const s = r - us + 1 + mh.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    e.push(a);
    let c = 1 / a;
    o > r - us ? c = mh[o - r + us - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, _ = 3, g = 2, p = 1, y = new Float32Array(_ * m * f), v = new Float32Array(g * m * f), x = new Float32Array(p * m * f);
    for (let E = 0; E < f; E++) {
      const C = E % 3 * 2 / 3 - 1, R = E > 2 ? 0 : -1, S = [
        C,
        R,
        0,
        C + 2 / 3,
        R,
        0,
        C + 2 / 3,
        R + 1,
        0,
        C,
        R,
        0,
        C + 2 / 3,
        R + 1,
        0,
        C,
        R + 1,
        0
      ];
      y.set(S, _ * m * E), v.set(d, g * m * E);
      const M = [E, E, E, E, E, E];
      x.set(M, p * m * E);
    }
    const I = new Vt();
    I.setAttribute("position", new oe(y, _)), I.setAttribute("uv", new oe(v, g)), I.setAttribute("faceIndex", new oe(x, p)), t.push(I), i > us && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function xh(r, t, e) {
  const n = new dn(r, t, e);
  return n.texture.mapping = ys, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function qr(r, t, e, n, i) {
  r.viewport.set(t, e, n, i), r.scissor.set(t, e, n, i);
}
function t0(r, t, e) {
  const n = new Float32Array(Si), i = new T(0, 1, 0);
  return new fn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Si,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: dl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function yh() {
  return new fn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: dl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function vh() {
  return new fn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: dl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function dl() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function e0(r) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Js || c === Ks, h = c === Vn || c === ni;
      if (l || h) {
        let u = t.get(a);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d)
          return e === null && (e = new Oc(r)), u = l ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const f = a.image;
          return l && f && f.height > 0 || h && f && i(f) ? (e === null && (e = new Oc(r)), u = l ? e.fromEquirectangular(a) : e.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), a.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = t.get(c);
    l !== void 0 && (t.delete(c), l.dispose());
  }
  function o() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function n0(r) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return t[n] = i, i;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = e(n);
      return i === null && Os("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function i0(r, t, e, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const m in d.attributes)
      t.remove(d.attributes[m]);
    for (const m in d.morphAttributes) {
      const _ = d.morphAttributes[m];
      for (let g = 0, p = _.length; g < p; g++)
        t.remove(_[g]);
    }
    d.removeEventListener("dispose", o), delete i[d.id];
    const f = s.get(d);
    f && (t.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, e.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const m in d)
      t.update(d[m], r.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const m in f) {
      const _ = f[m];
      for (let g = 0, p = _.length; g < p; g++)
        t.update(_[g], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], f = u.index, m = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const y = f.array;
      _ = f.version;
      for (let v = 0, x = y.length; v < x; v += 3) {
        const I = y[v + 0], E = y[v + 1], C = y[v + 2];
        d.push(I, E, E, C, C, I);
      }
    } else if (m !== void 0) {
      const y = m.array;
      _ = m.version;
      for (let v = 0, x = y.length / 3 - 1; v < x; v += 3) {
        const I = v + 0, E = v + 1, C = v + 2;
        d.push(I, E, E, C, C, I);
      }
    } else
      return;
    const g = new (wd(d) ? ul : hl)(d, 1);
    g.version = _;
    const p = s.get(u);
    p && t.remove(p), s.set(u, g);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function s0(r, t, e) {
  let n;
  function i(d) {
    n = d;
  }
  let s, o;
  function a(d) {
    s = d.type, o = d.bytesPerElement;
  }
  function c(d, f) {
    r.drawElements(n, f, s, d * o), e.update(f, n, 1);
  }
  function l(d, f, m) {
    m !== 0 && (r.drawElementsInstanced(n, f, s, d * o, m), e.update(f, n, m));
  }
  function h(d, f, m) {
    if (m === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, d, 0, m);
    let g = 0;
    for (let p = 0; p < m; p++)
      g += f[p];
    e.update(g, n, 1);
  }
  function u(d, f, m, _) {
    if (m === 0) return;
    const g = t.get("WEBGL_multi_draw");
    if (g === null)
      for (let p = 0; p < d.length; p++)
        l(d[p] / o, f[p], _[p]);
    else {
      g.multiDrawElementsInstancedWEBGL(n, f, 0, s, d, 0, _, 0, m);
      let p = 0;
      for (let y = 0; y < m; y++)
        p += f[y] * _[y];
      e.update(p, n, 1);
    }
  }
  this.setMode = i, this.setIndex = a, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function r0(r) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (e.calls++, o) {
      case r.TRIANGLES:
        e.triangles += a * (s / 3);
        break;
      case r.LINES:
        e.lines += a * (s / 2);
        break;
      case r.LINE_STRIP:
        e.lines += a * (s - 1);
        break;
      case r.LINE_LOOP:
        e.lines += a * s;
        break;
      case r.POINTS:
        e.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function o0(r, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Qt();
  function s(o, a, c) {
    const l = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(a);
    if (d === void 0 || d.count !== u) {
      let S = function() {
        C.dispose(), n.delete(a), a.removeEventListener("dispose", S);
      };
      d !== void 0 && d.texture.dispose();
      const f = a.morphAttributes.position !== void 0, m = a.morphAttributes.normal !== void 0, _ = a.morphAttributes.color !== void 0, g = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], y = a.morphAttributes.color || [];
      let v = 0;
      f === !0 && (v = 1), m === !0 && (v = 2), _ === !0 && (v = 3);
      let x = a.attributes.position.count * v, I = 1;
      x > t.maxTextureSize && (I = Math.ceil(x / t.maxTextureSize), x = t.maxTextureSize);
      const E = new Float32Array(x * I * 4 * u), C = new _a(E, x, I, u);
      C.type = qe, C.needsUpdate = !0;
      const R = v * 4;
      for (let M = 0; M < u; M++) {
        const L = g[M], D = p[M], U = y[M], B = x * I * 4 * M;
        for (let Y = 0; Y < L.count; Y++) {
          const H = Y * R;
          f === !0 && (i.fromBufferAttribute(L, Y), E[B + H + 0] = i.x, E[B + H + 1] = i.y, E[B + H + 2] = i.z, E[B + H + 3] = 0), m === !0 && (i.fromBufferAttribute(D, Y), E[B + H + 4] = i.x, E[B + H + 5] = i.y, E[B + H + 6] = i.z, E[B + H + 7] = 0), _ === !0 && (i.fromBufferAttribute(U, Y), E[B + H + 8] = i.x, E[B + H + 9] = i.y, E[B + H + 10] = i.z, E[B + H + 11] = U.itemSize === 4 ? i.w : 1);
        }
      }
      d = {
        count: u,
        texture: C,
        size: new q(x, I)
      }, n.set(a, d), a.addEventListener("dispose", S);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      c.getUniforms().setValue(r, "morphTexture", o.morphTexture, e);
    else {
      let f = 0;
      for (let _ = 0; _ < l.length; _++)
        f += l[_];
      const m = a.morphTargetsRelative ? 1 : 1 - f;
      c.getUniforms().setValue(r, "morphTargetBaseInfluence", m), c.getUniforms().setValue(r, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(r, "morphTargetsTexture", d.texture, e), c.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function a0(r, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = t.get(c, h);
    if (i.get(u) !== l && (t.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), i.get(c) !== l && (e.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
class fl extends me {
  constructor(t, e, n, i, s, o, a, c, l, h = Ii) {
    if (h !== Ii && h !== Oi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Ii && (n = Hn), n === void 0 && h === Oi && (n = Ni), super(null, i, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : Te, this.minFilter = c !== void 0 ? c : Te, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Ud = /* @__PURE__ */ new me(), Mh = /* @__PURE__ */ new fl(1, 1), Nd = /* @__PURE__ */ new _a(), Od = /* @__PURE__ */ new ll(), Fd = /* @__PURE__ */ new _r(), bh = [], Sh = [], wh = new Float32Array(16), Eh = new Float32Array(9), Th = new Float32Array(4);
function Ms(r, t, e) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = t * e;
  let s = bh[i];
  if (s === void 0 && (s = new Float32Array(i), bh[i] = s), t !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== t; ++o)
      a += e, r[o].toArray(s, a);
  }
  return s;
}
function be(r, t) {
  if (r.length !== t.length) return !1;
  for (let e = 0, n = r.length; e < n; e++)
    if (r[e] !== t[e]) return !1;
  return !0;
}
function Se(r, t) {
  for (let e = 0, n = t.length; e < n; e++)
    r[e] = t[e];
}
function Ma(r, t) {
  let e = Sh[t];
  e === void 0 && (e = new Int32Array(t), Sh[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = r.allocateTextureUnit();
  return e;
}
function c0(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1f(this.addr, t), e[0] = t);
}
function l0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (be(e, t)) return;
    r.uniform2fv(this.addr, t), Se(e, t);
  }
}
function h0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (r.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (be(e, t)) return;
    r.uniform3fv(this.addr, t), Se(e, t);
  }
}
function u0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (be(e, t)) return;
    r.uniform4fv(this.addr, t), Se(e, t);
  }
}
function d0(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (be(e, t)) return;
    r.uniformMatrix2fv(this.addr, !1, t), Se(e, t);
  } else {
    if (be(e, n)) return;
    Th.set(n), r.uniformMatrix2fv(this.addr, !1, Th), Se(e, n);
  }
}
function f0(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (be(e, t)) return;
    r.uniformMatrix3fv(this.addr, !1, t), Se(e, t);
  } else {
    if (be(e, n)) return;
    Eh.set(n), r.uniformMatrix3fv(this.addr, !1, Eh), Se(e, n);
  }
}
function p0(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (be(e, t)) return;
    r.uniformMatrix4fv(this.addr, !1, t), Se(e, t);
  } else {
    if (be(e, n)) return;
    wh.set(n), r.uniformMatrix4fv(this.addr, !1, wh), Se(e, n);
  }
}
function m0(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1i(this.addr, t), e[0] = t);
}
function g0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (be(e, t)) return;
    r.uniform2iv(this.addr, t), Se(e, t);
  }
}
function _0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (be(e, t)) return;
    r.uniform3iv(this.addr, t), Se(e, t);
  }
}
function x0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (be(e, t)) return;
    r.uniform4iv(this.addr, t), Se(e, t);
  }
}
function y0(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1ui(this.addr, t), e[0] = t);
}
function v0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (be(e, t)) return;
    r.uniform2uiv(this.addr, t), Se(e, t);
  }
}
function M0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (be(e, t)) return;
    r.uniform3uiv(this.addr, t), Se(e, t);
  }
}
function b0(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (be(e, t)) return;
    r.uniform4uiv(this.addr, t), Se(e, t);
  }
}
function S0(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (Mh.compareFunction = al, s = Mh) : s = Ud, e.setTexture2D(t || s, i);
}
function w0(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || Od, i);
}
function E0(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || Fd, i);
}
function T0(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Nd, i);
}
function A0(r) {
  switch (r) {
    case 5126:
      return c0;
    // FLOAT
    case 35664:
      return l0;
    // _VEC2
    case 35665:
      return h0;
    // _VEC3
    case 35666:
      return u0;
    // _VEC4
    case 35674:
      return d0;
    // _MAT2
    case 35675:
      return f0;
    // _MAT3
    case 35676:
      return p0;
    // _MAT4
    case 5124:
    case 35670:
      return m0;
    // INT, BOOL
    case 35667:
    case 35671:
      return g0;
    // _VEC2
    case 35668:
    case 35672:
      return _0;
    // _VEC3
    case 35669:
    case 35673:
      return x0;
    // _VEC4
    case 5125:
      return y0;
    // UINT
    case 36294:
      return v0;
    // _VEC2
    case 36295:
      return M0;
    // _VEC3
    case 36296:
      return b0;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return S0;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return w0;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return E0;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return T0;
  }
}
function C0(r, t) {
  r.uniform1fv(this.addr, t);
}
function R0(r, t) {
  const e = Ms(t, this.size, 2);
  r.uniform2fv(this.addr, e);
}
function P0(r, t) {
  const e = Ms(t, this.size, 3);
  r.uniform3fv(this.addr, e);
}
function I0(r, t) {
  const e = Ms(t, this.size, 4);
  r.uniform4fv(this.addr, e);
}
function L0(r, t) {
  const e = Ms(t, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, e);
}
function D0(r, t) {
  const e = Ms(t, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, e);
}
function U0(r, t) {
  const e = Ms(t, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, e);
}
function N0(r, t) {
  r.uniform1iv(this.addr, t);
}
function O0(r, t) {
  r.uniform2iv(this.addr, t);
}
function F0(r, t) {
  r.uniform3iv(this.addr, t);
}
function B0(r, t) {
  r.uniform4iv(this.addr, t);
}
function z0(r, t) {
  r.uniform1uiv(this.addr, t);
}
function k0(r, t) {
  r.uniform2uiv(this.addr, t);
}
function V0(r, t) {
  r.uniform3uiv(this.addr, t);
}
function H0(r, t) {
  r.uniform4uiv(this.addr, t);
}
function G0(r, t, e) {
  const n = this.cache, i = t.length, s = Ma(e, i);
  be(n, s) || (r.uniform1iv(this.addr, s), Se(n, s));
  for (let o = 0; o !== i; ++o)
    e.setTexture2D(t[o] || Ud, s[o]);
}
function W0(r, t, e) {
  const n = this.cache, i = t.length, s = Ma(e, i);
  be(n, s) || (r.uniform1iv(this.addr, s), Se(n, s));
  for (let o = 0; o !== i; ++o)
    e.setTexture3D(t[o] || Od, s[o]);
}
function X0(r, t, e) {
  const n = this.cache, i = t.length, s = Ma(e, i);
  be(n, s) || (r.uniform1iv(this.addr, s), Se(n, s));
  for (let o = 0; o !== i; ++o)
    e.setTextureCube(t[o] || Fd, s[o]);
}
function Y0(r, t, e) {
  const n = this.cache, i = t.length, s = Ma(e, i);
  be(n, s) || (r.uniform1iv(this.addr, s), Se(n, s));
  for (let o = 0; o !== i; ++o)
    e.setTexture2DArray(t[o] || Nd, s[o]);
}
function q0(r) {
  switch (r) {
    case 5126:
      return C0;
    // FLOAT
    case 35664:
      return R0;
    // _VEC2
    case 35665:
      return P0;
    // _VEC3
    case 35666:
      return I0;
    // _VEC4
    case 35674:
      return L0;
    // _MAT2
    case 35675:
      return D0;
    // _MAT3
    case 35676:
      return U0;
    // _MAT4
    case 5124:
    case 35670:
      return N0;
    // INT, BOOL
    case 35667:
    case 35671:
      return O0;
    // _VEC2
    case 35668:
    case 35672:
      return F0;
    // _VEC3
    case 35669:
    case 35673:
      return B0;
    // _VEC4
    case 5125:
      return z0;
    // UINT
    case 36294:
      return k0;
    // _VEC2
    case 36295:
      return V0;
    // _VEC3
    case 36296:
      return H0;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return G0;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return W0;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return X0;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Y0;
  }
}
class Z0 {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = A0(e.type);
  }
}
class $0 {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = q0(e.type);
  }
}
class J0 {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(t, e[a.id], n);
    }
  }
}
const dc = /(\w+)(\])?(\[|\.)?/g;
function Ah(r, t) {
  r.seq.push(t), r.map[t.id] = t;
}
function K0(r, t, e) {
  const n = r.name, i = n.length;
  for (dc.lastIndex = 0; ; ) {
    const s = dc.exec(n), o = dc.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      Ah(e, l === void 0 ? new Z0(a, r, t) : new $0(a, r, t));
      break;
    } else {
      let u = e.map[a];
      u === void 0 && (u = new J0(a), Ah(e, u)), e = u;
    }
  }
}
class So {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = t.getActiveUniform(e, i), o = t.getUniformLocation(e, s.name);
      K0(s, o, this);
    }
  }
  setValue(t, e, n, i) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let s = 0, o = e.length; s !== o; ++s) {
      const a = e[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(t, c.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, s = t.length; i !== s; ++i) {
      const o = t[i];
      o.id in e && n.push(o);
    }
    return n;
  }
}
function Ch(r, t, e) {
  const n = r.createShader(t);
  return r.shaderSource(n, e), r.compileShader(n), n;
}
const j0 = 37297;
let Q0 = 0;
function tx(r, t) {
  const e = r.split(`
`), n = [], i = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`);
  }
  return n.join(`
`);
}
const Rh = /* @__PURE__ */ new zt();
function ex(r) {
  qt._getMatrix(Rh, qt.workingColorSpace, r);
  const t = `mat3( ${Rh.elements.map((e) => e.toFixed(4))} )`;
  switch (qt.getTransfer(r)) {
    case gr:
      return [t, "LinearTransferOETF"];
    case se:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", r), [t, "LinearTransferOETF"];
  }
}
function Ph(r, t, e) {
  const n = r.getShaderParameter(t, r.COMPILE_STATUS), i = r.getShaderInfoLog(t).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return e.toUpperCase() + `

` + i + `

` + tx(r.getShaderSource(t), o);
  } else
    return i;
}
function nx(r, t) {
  const e = ex(t);
  return [
    `vec4 ${r}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function ix(r, t) {
  let e;
  switch (t) {
    case id:
      e = "Linear";
      break;
    case sd:
      e = "Reinhard";
      break;
    case rd:
      e = "Cineon";
      break;
    case $c:
      e = "ACESFilmic";
      break;
    case ad:
      e = "AgX";
      break;
    case cd:
      e = "Neutral";
      break;
    case od:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const Zr = /* @__PURE__ */ new T();
function sx() {
  qt.getLuminanceCoefficients(Zr);
  const r = Zr.x.toFixed(4), t = Zr.y.toFixed(4), e = Zr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function rx(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Bs).join(`
`);
}
function ox(r) {
  const t = [];
  for (const e in r) {
    const n = r[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function ax(r, t) {
  const e = {}, n = r.getProgramParameter(t, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(t, i), o = s.name;
    let a = 1;
    s.type === r.FLOAT_MAT2 && (a = 2), s.type === r.FLOAT_MAT3 && (a = 3), s.type === r.FLOAT_MAT4 && (a = 4), e[o] = {
      type: s.type,
      location: r.getAttribLocation(t, o),
      locationSize: a
    };
  }
  return e;
}
function Bs(r) {
  return r !== "";
}
function Ih(r, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Lh(r, t) {
  return r.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const cx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Fc(r) {
  return r.replace(cx, hx);
}
const lx = /* @__PURE__ */ new Map();
function hx(r, t) {
  let e = Wt[t];
  if (e === void 0) {
    const n = lx.get(t);
    if (n !== void 0)
      e = Wt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return Fc(e);
}
const ux = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Dh(r) {
  return r.replace(ux, dx);
}
function dx(r, t, e, n) {
  let i = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Uh(r) {
  let t = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? t += `
#define HIGH_PRECISION` : r.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function fx(r) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === qc ? t = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Zc ? t = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === xn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function px(r) {
  let t = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Vn:
      case ni:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case ys:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function mx(r) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case ni:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function gx(r) {
  let t = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case pr:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ed:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case nd:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function _x(r) {
  const t = r.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function xx(r, t, e, n) {
  const i = r.getContext(), s = e.defines;
  let o = e.vertexShader, a = e.fragmentShader;
  const c = fx(e), l = px(e), h = mx(e), u = gx(e), d = _x(e), f = rx(e), m = ox(s), _ = i.createProgram();
  let g, p, y = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m
  ].filter(Bs).join(`
`), g.length > 0 && (g += `
`), p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m
  ].filter(Bs).join(`
`), p.length > 0 && (p += `
`)) : (g = [
    Uh(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + h : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + c : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Bs).join(`
`), p = [
    Uh(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + l : "",
    e.envMap ? "#define " + h : "",
    e.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + c : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== zn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== zn ? Wt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== zn ? ix("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Wt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    nx("linearToOutputTexel", e.outputColorSpace),
    sx(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Bs).join(`
`)), o = Fc(o), o = Ih(o, e), o = Lh(o, e), a = Fc(a), a = Ih(a, e), a = Lh(a, e), o = Dh(o), a = Dh(a), e.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, g = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, p = [
    "#define varying in",
    e.glslVersion === Nc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Nc ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const v = y + g + o, x = y + p + a, I = Ch(i, i.VERTEX_SHADER, v), E = Ch(i, i.FRAGMENT_SHADER, x);
  i.attachShader(_, I), i.attachShader(_, E), e.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function C(L) {
    if (r.debug.checkShaderErrors) {
      const D = i.getProgramInfoLog(_).trim(), U = i.getShaderInfoLog(I).trim(), B = i.getShaderInfoLog(E).trim();
      let Y = !0, H = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (Y = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, _, I, E);
        else {
          const j = Ph(i, I, "vertex"), G = Ph(i, E, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + D + `
` + j + `
` + G
          );
        }
      else D !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", D) : (U === "" || B === "") && (H = !1);
      H && (L.diagnostics = {
        runnable: Y,
        programLog: D,
        vertexShader: {
          log: U,
          prefix: g
        },
        fragmentShader: {
          log: B,
          prefix: p
        }
      });
    }
    i.deleteShader(I), i.deleteShader(E), R = new So(i, _), S = ax(i, _);
  }
  let R;
  this.getUniforms = function() {
    return R === void 0 && C(this), R;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = i.getProgramParameter(_, j0)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Q0++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = I, this.fragmentShader = E, this;
}
let yx = 0;
class vx {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(t);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new Mx(t), e.set(t, n)), n;
  }
}
class Mx {
  constructor(t) {
    this.id = yx++, this.code = t, this.usedTimes = 0;
  }
}
function bx(r, t, e, n, i, s, o) {
  const a = new xa(), c = new vx(), l = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(S) {
    return l.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function g(S, M, L, D, U) {
    const B = D.fog, Y = U.geometry, H = S.isMeshStandardMaterial ? D.environment : null, j = (S.isMeshStandardMaterial ? e : t).get(S.envMap || H), G = j && j.mapping === ys ? j.image.height : null, at = m[S.type];
    S.precision !== null && (f = i.getMaxPrecision(S.precision), f !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", f, "instead."));
    const dt = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, xt = dt !== void 0 ? dt.length : 0;
    let Ot = 0;
    Y.morphAttributes.position !== void 0 && (Ot = 1), Y.morphAttributes.normal !== void 0 && (Ot = 2), Y.morphAttributes.color !== void 0 && (Ot = 3);
    let Jt, X, nt, bt;
    if (at) {
      const ie = ln[at];
      Jt = ie.vertexShader, X = ie.fragmentShader;
    } else
      Jt = S.vertexShader, X = S.fragmentShader, c.update(S), nt = c.getVertexShaderID(S), bt = c.getFragmentShaderID(S);
    const it = r.getRenderTarget(), Pt = r.state.buffers.depth.getReversed(), Ft = U.isInstancedMesh === !0, Ut = U.isBatchedMesh === !0, Kt = !!S.map, K = !!S.matcap, st = !!j, P = !!S.aoMap, Ct = !!S.lightMap, tt = !!S.bumpMap, yt = !!S.normalMap, ot = !!S.displacementMap, It = !!S.emissiveMap, gt = !!S.metalnessMap, A = !!S.roughnessMap, b = S.anisotropy > 0, z = S.clearcoat > 0, Z = S.dispersion > 0, Q = S.iridescence > 0, $ = S.sheen > 0, wt = S.transmission > 0, lt = b && !!S.anisotropyMap, _t = z && !!S.clearcoatMap, Yt = z && !!S.clearcoatNormalMap, et = z && !!S.clearcoatRoughnessMap, vt = Q && !!S.iridescenceMap, Lt = Q && !!S.iridescenceThicknessMap, Nt = $ && !!S.sheenColorMap, Mt = $ && !!S.sheenRoughnessMap, $t = !!S.specularMap, Xt = !!S.specularColorMap, ae = !!S.specularIntensityMap, N = wt && !!S.transmissionMap, ht = wt && !!S.thicknessMap, W = !!S.gradientMap, J = !!S.alphaMap, mt = S.alphaTest > 0, ft = !!S.alphaHash, Ht = !!S.extensions;
    let de = zn;
    S.toneMapped && (it === null || it.isXRRenderTarget === !0) && (de = r.toneMapping);
    const Ae = {
      shaderID: at,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Jt,
      fragmentShader: X,
      defines: S.defines,
      customVertexShaderID: nt,
      customFragmentShaderID: bt,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: f,
      batching: Ut,
      batchingColor: Ut && U._colorsTexture !== null,
      instancing: Ft,
      instancingColor: Ft && U.instanceColor !== null,
      instancingMorph: Ft && U.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: it === null ? r.outputColorSpace : it.isXRRenderTarget === !0 ? it.texture.colorSpace : zi,
      alphaToCoverage: !!S.alphaToCoverage,
      map: Kt,
      matcap: K,
      envMap: st,
      envMapMode: st && j.mapping,
      envMapCubeUVHeight: G,
      aoMap: P,
      lightMap: Ct,
      bumpMap: tt,
      normalMap: yt,
      displacementMap: d && ot,
      emissiveMap: It,
      normalMapObjectSpace: yt && S.normalMapType === md,
      normalMapTangentSpace: yt && S.normalMapType === si,
      metalnessMap: gt,
      roughnessMap: A,
      anisotropy: b,
      anisotropyMap: lt,
      clearcoat: z,
      clearcoatMap: _t,
      clearcoatNormalMap: Yt,
      clearcoatRoughnessMap: et,
      dispersion: Z,
      iridescence: Q,
      iridescenceMap: vt,
      iridescenceThicknessMap: Lt,
      sheen: $,
      sheenColorMap: Nt,
      sheenRoughnessMap: Mt,
      specularMap: $t,
      specularColorMap: Xt,
      specularIntensityMap: ae,
      transmission: wt,
      transmissionMap: N,
      thicknessMap: ht,
      gradientMap: W,
      opaque: S.transparent === !1 && S.blending === Pi && S.alphaToCoverage === !1,
      alphaMap: J,
      alphaTest: mt,
      alphaHash: ft,
      combine: S.combine,
      //
      mapUv: Kt && _(S.map.channel),
      aoMapUv: P && _(S.aoMap.channel),
      lightMapUv: Ct && _(S.lightMap.channel),
      bumpMapUv: tt && _(S.bumpMap.channel),
      normalMapUv: yt && _(S.normalMap.channel),
      displacementMapUv: ot && _(S.displacementMap.channel),
      emissiveMapUv: It && _(S.emissiveMap.channel),
      metalnessMapUv: gt && _(S.metalnessMap.channel),
      roughnessMapUv: A && _(S.roughnessMap.channel),
      anisotropyMapUv: lt && _(S.anisotropyMap.channel),
      clearcoatMapUv: _t && _(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Yt && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: et && _(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: vt && _(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: Lt && _(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Nt && _(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Mt && _(S.sheenRoughnessMap.channel),
      specularMapUv: $t && _(S.specularMap.channel),
      specularColorMapUv: Xt && _(S.specularColorMap.channel),
      specularIntensityMapUv: ae && _(S.specularIntensityMap.channel),
      transmissionMapUv: N && _(S.transmissionMap.channel),
      thicknessMapUv: ht && _(S.thicknessMap.channel),
      alphaMapUv: J && _(S.alphaMap.channel),
      //
      vertexTangents: !!Y.attributes.tangent && (yt || b),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4,
      pointsUvs: U.isPoints === !0 && !!Y.attributes.uv && (Kt || J),
      fog: !!B,
      useFog: S.fog === !0,
      fogExp2: !!B && B.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: Pt,
      skinning: U.isSkinnedMesh === !0,
      morphTargets: Y.morphAttributes.position !== void 0,
      morphNormals: Y.morphAttributes.normal !== void 0,
      morphColors: Y.morphAttributes.color !== void 0,
      morphTargetsCount: xt,
      morphTextureStride: Ot,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: r.shadowMap.enabled && L.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: de,
      decodeVideoTexture: Kt && S.map.isVideoTexture === !0 && qt.getTransfer(S.map.colorSpace) === se,
      decodeVideoTextureEmissive: It && S.emissiveMap.isVideoTexture === !0 && qt.getTransfer(S.emissiveMap.colorSpace) === se,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === hn,
      flipSided: S.side === Ve,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: Ht && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ht && S.extensions.multiDraw === !0 || Ut) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return Ae.vertexUv1s = l.has(1), Ae.vertexUv2s = l.has(2), Ae.vertexUv3s = l.has(3), l.clear(), Ae;
  }
  function p(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const L in S.defines)
        M.push(L), M.push(S.defines[L]);
    return S.isRawShaderMaterial === !1 && (y(M, S), v(M, S), M.push(r.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function y(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function v(S, M) {
    a.disableAll(), M.supportsVertexTextures && a.enable(0), M.instancing && a.enable(1), M.instancingColor && a.enable(2), M.instancingMorph && a.enable(3), M.matcap && a.enable(4), M.envMap && a.enable(5), M.normalMapObjectSpace && a.enable(6), M.normalMapTangentSpace && a.enable(7), M.clearcoat && a.enable(8), M.iridescence && a.enable(9), M.alphaTest && a.enable(10), M.vertexColors && a.enable(11), M.vertexAlphas && a.enable(12), M.vertexUv1s && a.enable(13), M.vertexUv2s && a.enable(14), M.vertexUv3s && a.enable(15), M.vertexTangents && a.enable(16), M.anisotropy && a.enable(17), M.alphaHash && a.enable(18), M.batching && a.enable(19), M.dispersion && a.enable(20), M.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), M.fog && a.enable(0), M.useFog && a.enable(1), M.flatShading && a.enable(2), M.logarithmicDepthBuffer && a.enable(3), M.reverseDepthBuffer && a.enable(4), M.skinning && a.enable(5), M.morphTargets && a.enable(6), M.morphNormals && a.enable(7), M.morphColors && a.enable(8), M.premultipliedAlpha && a.enable(9), M.shadowMapEnabled && a.enable(10), M.doubleSided && a.enable(11), M.flipSided && a.enable(12), M.useDepthPacking && a.enable(13), M.dithering && a.enable(14), M.transmission && a.enable(15), M.sheen && a.enable(16), M.opaque && a.enable(17), M.pointsUvs && a.enable(18), M.decodeVideoTexture && a.enable(19), M.decodeVideoTextureEmissive && a.enable(20), M.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function x(S) {
    const M = m[S.type];
    let L;
    if (M) {
      const D = ln[M];
      L = Pd.clone(D.uniforms);
    } else
      L = S.uniforms;
    return L;
  }
  function I(S, M) {
    let L;
    for (let D = 0, U = h.length; D < U; D++) {
      const B = h[D];
      if (B.cacheKey === M) {
        L = B, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new xx(r, M, S, s), h.push(L)), L;
  }
  function E(S) {
    if (--S.usedTimes === 0) {
      const M = h.indexOf(S);
      h[M] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function C(S) {
    c.remove(S);
  }
  function R() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: x,
    acquireProgram: I,
    releaseProgram: E,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: R
  };
}
function Sx() {
  let r = /* @__PURE__ */ new WeakMap();
  function t(o) {
    return r.has(o);
  }
  function e(o) {
    let a = r.get(o);
    return a === void 0 && (a = {}, r.set(o, a)), a;
  }
  function n(o) {
    r.delete(o);
  }
  function i(o, a, c) {
    r.get(o)[a] = c;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: i,
    dispose: s
  };
}
function wx(r, t) {
  return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.material.id !== t.material.id ? r.material.id - t.material.id : r.z !== t.z ? r.z - t.z : r.id - t.id;
}
function Nh(r, t) {
  return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.z !== t.z ? t.z - r.z : r.id - t.id;
}
function Oh() {
  const r = [];
  let t = 0;
  const e = [], n = [], i = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, f, m, _, g) {
    let p = r[t];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: m,
      renderOrder: u.renderOrder,
      z: _,
      group: g
    }, r[t] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = _, p.group = g), t++, p;
  }
  function a(u, d, f, m, _, g) {
    const p = o(u, d, f, m, _, g);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : e.push(p);
  }
  function c(u, d, f, m, _, g) {
    const p = o(u, d, f, m, _, g);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : e.unshift(p);
  }
  function l(u, d) {
    e.length > 1 && e.sort(u || wx), n.length > 1 && n.sort(d || Nh), i.length > 1 && i.sort(d || Nh);
  }
  function h() {
    for (let u = t, d = r.length; u < d; u++) {
      const f = r[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Ex() {
  let r = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new Oh(), r.set(n, [o])) : i >= s.length ? (o = new Oh(), s.push(o)) : o = s[i], o;
  }
  function e() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function Tx() {
  const r = {};
  return {
    get: function(t) {
      if (r[t.id] !== void 0)
        return r[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new T(),
            color: new ut()
          };
          break;
        case "SpotLight":
          e = {
            position: new T(),
            direction: new T(),
            color: new ut(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new T(),
            color: new ut(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new T(),
            skyColor: new ut(),
            groundColor: new ut()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new ut(),
            position: new T(),
            halfWidth: new T(),
            halfHeight: new T()
          };
          break;
      }
      return r[t.id] = e, e;
    }
  };
}
function Ax() {
  const r = {};
  return {
    get: function(t) {
      if (r[t.id] !== void 0)
        return r[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[t.id] = e, e;
    }
  };
}
let Cx = 0;
function Rx(r, t) {
  return (t.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Px(r) {
  const t = new Tx(), e = Ax(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new T());
  const i = new T(), s = new Dt(), o = new Dt();
  function a(l) {
    let h = 0, u = 0, d = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let f = 0, m = 0, _ = 0, g = 0, p = 0, y = 0, v = 0, x = 0, I = 0, E = 0, C = 0;
    l.sort(Rx);
    for (let S = 0, M = l.length; S < M; S++) {
      const L = l[S], D = L.color, U = L.intensity, B = L.distance, Y = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += D.r * U, u += D.g * U, d += D.b * U;
      else if (L.isLightProbe) {
        for (let H = 0; H < 9; H++)
          n.probe[H].addScaledVector(L.sh.coefficients[H], U);
        C++;
      } else if (L.isDirectionalLight) {
        const H = t.get(L);
        if (H.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const j = L.shadow, G = e.get(L);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, n.directionalShadow[f] = G, n.directionalShadowMap[f] = Y, n.directionalShadowMatrix[f] = L.shadow.matrix, y++;
        }
        n.directional[f] = H, f++;
      } else if (L.isSpotLight) {
        const H = t.get(L);
        H.position.setFromMatrixPosition(L.matrixWorld), H.color.copy(D).multiplyScalar(U), H.distance = B, H.coneCos = Math.cos(L.angle), H.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), H.decay = L.decay, n.spot[_] = H;
        const j = L.shadow;
        if (L.map && (n.spotLightMap[I] = L.map, I++, j.updateMatrices(L), L.castShadow && E++), n.spotLightMatrix[_] = j.matrix, L.castShadow) {
          const G = e.get(L);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, n.spotShadow[_] = G, n.spotShadowMap[_] = Y, x++;
        }
        _++;
      } else if (L.isRectAreaLight) {
        const H = t.get(L);
        H.color.copy(D).multiplyScalar(U), H.halfWidth.set(L.width * 0.5, 0, 0), H.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[g] = H, g++;
      } else if (L.isPointLight) {
        const H = t.get(L);
        if (H.color.copy(L.color).multiplyScalar(L.intensity), H.distance = L.distance, H.decay = L.decay, L.castShadow) {
          const j = L.shadow, G = e.get(L);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, G.shadowCameraNear = j.camera.near, G.shadowCameraFar = j.camera.far, n.pointShadow[m] = G, n.pointShadowMap[m] = Y, n.pointShadowMatrix[m] = L.shadow.matrix, v++;
        }
        n.point[m] = H, m++;
      } else if (L.isHemisphereLight) {
        const H = t.get(L);
        H.skyColor.copy(L.color).multiplyScalar(U), H.groundColor.copy(L.groundColor).multiplyScalar(U), n.hemi[p] = H, p++;
      }
    }
    g > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ct.LTC_FLOAT_1, n.rectAreaLTC2 = ct.LTC_FLOAT_2) : (n.rectAreaLTC1 = ct.LTC_HALF_1, n.rectAreaLTC2 = ct.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const R = n.hash;
    (R.directionalLength !== f || R.pointLength !== m || R.spotLength !== _ || R.rectAreaLength !== g || R.hemiLength !== p || R.numDirectionalShadows !== y || R.numPointShadows !== v || R.numSpotShadows !== x || R.numSpotMaps !== I || R.numLightProbes !== C) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = g, n.point.length = m, n.hemi.length = p, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = x + I - E, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = E, n.numLightProbes = C, R.directionalLength = f, R.pointLength = m, R.spotLength = _, R.rectAreaLength = g, R.hemiLength = p, R.numDirectionalShadows = y, R.numPointShadows = v, R.numSpotShadows = x, R.numSpotMaps = I, R.numLightProbes = C, n.version = Cx++);
  }
  function c(l, h) {
    let u = 0, d = 0, f = 0, m = 0, _ = 0;
    const g = h.matrixWorldInverse;
    for (let p = 0, y = l.length; p < y; p++) {
      const v = l[p];
      if (v.isDirectionalLight) {
        const x = n.directional[u];
        x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(g), u++;
      } else if (v.isSpotLight) {
        const x = n.spot[f];
        x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(g), x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(g), f++;
      } else if (v.isRectAreaLight) {
        const x = n.rectArea[m];
        x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(g), o.identity(), s.copy(v.matrixWorld), s.premultiply(g), o.extractRotation(s), x.halfWidth.set(v.width * 0.5, 0, 0), x.halfHeight.set(0, v.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), m++;
      } else if (v.isPointLight) {
        const x = n.point[d];
        x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(g), d++;
      } else if (v.isHemisphereLight) {
        const x = n.hemi[_];
        x.direction.setFromMatrixPosition(v.matrixWorld), x.direction.transformDirection(g), _++;
      }
    }
  }
  return {
    setup: a,
    setupView: c,
    state: n
  };
}
function Fh(r) {
  const t = new Px(r), e = [], n = [];
  function i(h) {
    l.camera = h, e.length = 0, n.length = 0;
  }
  function s(h) {
    e.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    t.setup(e);
  }
  function c(h) {
    t.setupView(e, h);
  }
  const l = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: l,
    setupLights: a,
    setupLightsView: c,
    pushLight: s,
    pushShadow: o
  };
}
function Ix(r) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, s = 0) {
    const o = t.get(i);
    let a;
    return o === void 0 ? (a = new Fh(r), t.set(i, [a])) : s >= o.length ? (a = new Fh(r), o.push(a)) : a = o[s], a;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
class pl extends Ue {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.depthPacking = fd, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class ml extends Ue {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Lx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Dx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ux(r, t, e) {
  let n = new xr();
  const i = new q(), s = new q(), o = new Qt(), a = new pl({ depthPacking: pd }), c = new ml(), l = {}, h = e.maxTextureSize, u = { [bn]: Ve, [Ve]: bn, [hn]: hn }, d = new fn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new q() },
      radius: { value: 4 }
    },
    vertexShader: Lx,
    fragmentShader: Dx
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new Vt();
  m.setAttribute(
    "position",
    new oe(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new ye(m, d), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = qc;
  let p = this.type;
  this.render = function(E, C, R) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || E.length === 0) return;
    const S = r.getRenderTarget(), M = r.getActiveCubeFace(), L = r.getActiveMipmapLevel(), D = r.state;
    D.setBlending(Bn), D.buffers.color.setClear(1, 1, 1, 1), D.buffers.depth.setTest(!0), D.setScissorTest(!1);
    const U = p !== xn && this.type === xn, B = p === xn && this.type !== xn;
    for (let Y = 0, H = E.length; Y < H; Y++) {
      const j = E[Y], G = j.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      i.copy(G.mapSize);
      const at = G.getFrameExtents();
      if (i.multiply(at), s.copy(G.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / at.x), i.x = s.x * at.x, G.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / at.y), i.y = s.y * at.y, G.mapSize.y = s.y)), G.map === null || U === !0 || B === !0) {
        const xt = this.type !== xn ? { minFilter: Te, magFilter: Te } : {};
        G.map !== null && G.map.dispose(), G.map = new dn(i.x, i.y, xt), G.map.texture.name = j.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(G.map), r.clear();
      const dt = G.getViewportCount();
      for (let xt = 0; xt < dt; xt++) {
        const Ot = G.getViewport(xt);
        o.set(
          s.x * Ot.x,
          s.y * Ot.y,
          s.x * Ot.z,
          s.y * Ot.w
        ), D.viewport(o), G.updateMatrices(j, xt), n = G.getFrustum(), x(C, R, G.camera, j, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === xn && y(G, R), G.needsUpdate = !1;
    }
    p = this.type, g.needsUpdate = !1, r.setRenderTarget(S, M, L);
  };
  function y(E, C) {
    const R = t.update(_);
    d.defines.VSM_SAMPLES !== E.blurSamples && (d.defines.VSM_SAMPLES = E.blurSamples, f.defines.VSM_SAMPLES = E.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), E.mapPass === null && (E.mapPass = new dn(i.x, i.y)), d.uniforms.shadow_pass.value = E.map.texture, d.uniforms.resolution.value = E.mapSize, d.uniforms.radius.value = E.radius, r.setRenderTarget(E.mapPass), r.clear(), r.renderBufferDirect(C, null, R, d, _, null), f.uniforms.shadow_pass.value = E.mapPass.texture, f.uniforms.resolution.value = E.mapSize, f.uniforms.radius.value = E.radius, r.setRenderTarget(E.map), r.clear(), r.renderBufferDirect(C, null, R, f, _, null);
  }
  function v(E, C, R, S) {
    let M = null;
    const L = R.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (L !== void 0)
      M = L;
    else if (M = R.isPointLight === !0 ? c : a, r.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const D = M.uuid, U = C.uuid;
      let B = l[D];
      B === void 0 && (B = {}, l[D] = B);
      let Y = B[U];
      Y === void 0 && (Y = M.clone(), B[U] = Y, C.addEventListener("dispose", I)), M = Y;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, S === xn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : u[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, R.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const D = r.properties.get(M);
      D.light = R;
    }
    return M;
  }
  function x(E, C, R, S, M) {
    if (E.visible === !1) return;
    if (E.layers.test(C.layers) && (E.isMesh || E.isLine || E.isPoints) && (E.castShadow || E.receiveShadow && M === xn) && (!E.frustumCulled || n.intersectsObject(E))) {
      E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, E.matrixWorld);
      const U = t.update(E), B = E.material;
      if (Array.isArray(B)) {
        const Y = U.groups;
        for (let H = 0, j = Y.length; H < j; H++) {
          const G = Y[H], at = B[G.materialIndex];
          if (at && at.visible) {
            const dt = v(E, at, S, M);
            E.onBeforeShadow(r, E, C, R, U, dt, G), r.renderBufferDirect(R, null, U, dt, E, G), E.onAfterShadow(r, E, C, R, U, dt, G);
          }
        }
      } else if (B.visible) {
        const Y = v(E, B, S, M);
        E.onBeforeShadow(r, E, C, R, U, Y, null), r.renderBufferDirect(R, null, U, Y, E, null), E.onAfterShadow(r, E, C, R, U, Y, null);
      }
    }
    const D = E.children;
    for (let U = 0, B = D.length; U < B; U++)
      x(D[U], C, R, S, M);
  }
  function I(E) {
    E.target.removeEventListener("dispose", I);
    for (const R in l) {
      const S = l[R], M = E.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const Nx = {
  [To]: Ao,
  [Co]: Io,
  [Ro]: Lo,
  [Ui]: Po,
  [Ao]: To,
  [Io]: Co,
  [Lo]: Ro,
  [Po]: Ui
};
function Ox(r, t) {
  function e() {
    let N = !1;
    const ht = new Qt();
    let W = null;
    const J = new Qt(0, 0, 0, 0);
    return {
      setMask: function(mt) {
        W !== mt && !N && (r.colorMask(mt, mt, mt, mt), W = mt);
      },
      setLocked: function(mt) {
        N = mt;
      },
      setClear: function(mt, ft, Ht, de, Ae) {
        Ae === !0 && (mt *= de, ft *= de, Ht *= de), ht.set(mt, ft, Ht, de), J.equals(ht) === !1 && (r.clearColor(mt, ft, Ht, de), J.copy(ht));
      },
      reset: function() {
        N = !1, W = null, J.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let N = !1, ht = !1, W = null, J = null, mt = null;
    return {
      setReversed: function(ft) {
        if (ht !== ft) {
          const Ht = t.get("EXT_clip_control");
          ht ? Ht.clipControlEXT(Ht.LOWER_LEFT_EXT, Ht.ZERO_TO_ONE_EXT) : Ht.clipControlEXT(Ht.LOWER_LEFT_EXT, Ht.NEGATIVE_ONE_TO_ONE_EXT);
          const de = mt;
          mt = null, this.setClear(de);
        }
        ht = ft;
      },
      getReversed: function() {
        return ht;
      },
      setTest: function(ft) {
        ft ? it(r.DEPTH_TEST) : Pt(r.DEPTH_TEST);
      },
      setMask: function(ft) {
        W !== ft && !N && (r.depthMask(ft), W = ft);
      },
      setFunc: function(ft) {
        if (ht && (ft = Nx[ft]), J !== ft) {
          switch (ft) {
            case To:
              r.depthFunc(r.NEVER);
              break;
            case Ao:
              r.depthFunc(r.ALWAYS);
              break;
            case Co:
              r.depthFunc(r.LESS);
              break;
            case Ui:
              r.depthFunc(r.LEQUAL);
              break;
            case Ro:
              r.depthFunc(r.EQUAL);
              break;
            case Po:
              r.depthFunc(r.GEQUAL);
              break;
            case Io:
              r.depthFunc(r.GREATER);
              break;
            case Lo:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          J = ft;
        }
      },
      setLocked: function(ft) {
        N = ft;
      },
      setClear: function(ft) {
        mt !== ft && (ht && (ft = 1 - ft), r.clearDepth(ft), mt = ft);
      },
      reset: function() {
        N = !1, W = null, J = null, mt = null, ht = !1;
      }
    };
  }
  function i() {
    let N = !1, ht = null, W = null, J = null, mt = null, ft = null, Ht = null, de = null, Ae = null;
    return {
      setTest: function(ie) {
        N || (ie ? it(r.STENCIL_TEST) : Pt(r.STENCIL_TEST));
      },
      setMask: function(ie) {
        ht !== ie && !N && (r.stencilMask(ie), ht = ie);
      },
      setFunc: function(ie, sn, Tn) {
        (W !== ie || J !== sn || mt !== Tn) && (r.stencilFunc(ie, sn, Tn), W = ie, J = sn, mt = Tn);
      },
      setOp: function(ie, sn, Tn) {
        (ft !== ie || Ht !== sn || de !== Tn) && (r.stencilOp(ie, sn, Tn), ft = ie, Ht = sn, de = Tn);
      },
      setLocked: function(ie) {
        N = ie;
      },
      setClear: function(ie) {
        Ae !== ie && (r.clearStencil(ie), Ae = ie);
      },
      reset: function() {
        N = !1, ht = null, W = null, J = null, mt = null, ft = null, Ht = null, de = null, Ae = null;
      }
    };
  }
  const s = new e(), o = new n(), a = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = !1, g = null, p = null, y = null, v = null, x = null, I = null, E = null, C = new ut(0, 0, 0), R = 0, S = !1, M = null, L = null, D = null, U = null, B = null;
  const Y = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = !1, j = 0;
  const G = r.getParameter(r.VERSION);
  G.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(G)[1]), H = j >= 1) : G.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), H = j >= 2);
  let at = null, dt = {};
  const xt = r.getParameter(r.SCISSOR_BOX), Ot = r.getParameter(r.VIEWPORT), Jt = new Qt().fromArray(xt), X = new Qt().fromArray(Ot);
  function nt(N, ht, W, J) {
    const mt = new Uint8Array(4), ft = r.createTexture();
    r.bindTexture(N, ft), r.texParameteri(N, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(N, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ht = 0; Ht < W; Ht++)
      N === r.TEXTURE_3D || N === r.TEXTURE_2D_ARRAY ? r.texImage3D(ht, 0, r.RGBA, 1, 1, J, 0, r.RGBA, r.UNSIGNED_BYTE, mt) : r.texImage2D(ht + Ht, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, mt);
    return ft;
  }
  const bt = {};
  bt[r.TEXTURE_2D] = nt(r.TEXTURE_2D, r.TEXTURE_2D, 1), bt[r.TEXTURE_CUBE_MAP] = nt(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), bt[r.TEXTURE_2D_ARRAY] = nt(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), bt[r.TEXTURE_3D] = nt(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), it(r.DEPTH_TEST), o.setFunc(Ui), tt(!1), yt(Pc), it(r.CULL_FACE), P(Bn);
  function it(N) {
    h[N] !== !0 && (r.enable(N), h[N] = !0);
  }
  function Pt(N) {
    h[N] !== !1 && (r.disable(N), h[N] = !1);
  }
  function Ft(N, ht) {
    return u[N] !== ht ? (r.bindFramebuffer(N, ht), u[N] = ht, N === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = ht), N === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = ht), !0) : !1;
  }
  function Ut(N, ht) {
    let W = f, J = !1;
    if (N) {
      W = d.get(ht), W === void 0 && (W = [], d.set(ht, W));
      const mt = N.textures;
      if (W.length !== mt.length || W[0] !== r.COLOR_ATTACHMENT0) {
        for (let ft = 0, Ht = mt.length; ft < Ht; ft++)
          W[ft] = r.COLOR_ATTACHMENT0 + ft;
        W.length = mt.length, J = !0;
      }
    } else
      W[0] !== r.BACK && (W[0] = r.BACK, J = !0);
    J && r.drawBuffers(W);
  }
  function Kt(N) {
    return m !== N ? (r.useProgram(N), m = N, !0) : !1;
  }
  const K = {
    [ei]: r.FUNC_ADD,
    [Bu]: r.FUNC_SUBTRACT,
    [zu]: r.FUNC_REVERSE_SUBTRACT
  };
  K[ku] = r.MIN, K[Vu] = r.MAX;
  const st = {
    [Hu]: r.ZERO,
    [Gu]: r.ONE,
    [Wu]: r.SRC_COLOR,
    [wo]: r.SRC_ALPHA,
    [Ju]: r.SRC_ALPHA_SATURATE,
    [Zu]: r.DST_COLOR,
    [Yu]: r.DST_ALPHA,
    [Xu]: r.ONE_MINUS_SRC_COLOR,
    [Eo]: r.ONE_MINUS_SRC_ALPHA,
    [$u]: r.ONE_MINUS_DST_COLOR,
    [qu]: r.ONE_MINUS_DST_ALPHA,
    [Ku]: r.CONSTANT_COLOR,
    [ju]: r.ONE_MINUS_CONSTANT_COLOR,
    [Qu]: r.CONSTANT_ALPHA,
    [td]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function P(N, ht, W, J, mt, ft, Ht, de, Ae, ie) {
    if (N === Bn) {
      _ === !0 && (Pt(r.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (it(r.BLEND), _ = !0), N !== Fu) {
      if (N !== g || ie !== S) {
        if ((p !== ei || x !== ei) && (r.blendEquation(r.FUNC_ADD), p = ei, x = ei), ie)
          switch (N) {
            case Pi:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case $s:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Ic:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Lc:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", N);
              break;
          }
        else
          switch (N) {
            case Pi:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case $s:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Ic:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Lc:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", N);
              break;
          }
        y = null, v = null, I = null, E = null, C.set(0, 0, 0), R = 0, g = N, S = ie;
      }
      return;
    }
    mt = mt || ht, ft = ft || W, Ht = Ht || J, (ht !== p || mt !== x) && (r.blendEquationSeparate(K[ht], K[mt]), p = ht, x = mt), (W !== y || J !== v || ft !== I || Ht !== E) && (r.blendFuncSeparate(st[W], st[J], st[ft], st[Ht]), y = W, v = J, I = ft, E = Ht), (de.equals(C) === !1 || Ae !== R) && (r.blendColor(de.r, de.g, de.b, Ae), C.copy(de), R = Ae), g = N, S = !1;
  }
  function Ct(N, ht) {
    N.side === hn ? Pt(r.CULL_FACE) : it(r.CULL_FACE);
    let W = N.side === Ve;
    ht && (W = !W), tt(W), N.blending === Pi && N.transparent === !1 ? P(Bn) : P(N.blending, N.blendEquation, N.blendSrc, N.blendDst, N.blendEquationAlpha, N.blendSrcAlpha, N.blendDstAlpha, N.blendColor, N.blendAlpha, N.premultipliedAlpha), o.setFunc(N.depthFunc), o.setTest(N.depthTest), o.setMask(N.depthWrite), s.setMask(N.colorWrite);
    const J = N.stencilWrite;
    a.setTest(J), J && (a.setMask(N.stencilWriteMask), a.setFunc(N.stencilFunc, N.stencilRef, N.stencilFuncMask), a.setOp(N.stencilFail, N.stencilZFail, N.stencilZPass)), It(N.polygonOffset, N.polygonOffsetFactor, N.polygonOffsetUnits), N.alphaToCoverage === !0 ? it(r.SAMPLE_ALPHA_TO_COVERAGE) : Pt(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function tt(N) {
    M !== N && (N ? r.frontFace(r.CW) : r.frontFace(r.CCW), M = N);
  }
  function yt(N) {
    N !== Nu ? (it(r.CULL_FACE), N !== L && (N === Pc ? r.cullFace(r.BACK) : N === Ou ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Pt(r.CULL_FACE), L = N;
  }
  function ot(N) {
    N !== D && (H && r.lineWidth(N), D = N);
  }
  function It(N, ht, W) {
    N ? (it(r.POLYGON_OFFSET_FILL), (U !== ht || B !== W) && (r.polygonOffset(ht, W), U = ht, B = W)) : Pt(r.POLYGON_OFFSET_FILL);
  }
  function gt(N) {
    N ? it(r.SCISSOR_TEST) : Pt(r.SCISSOR_TEST);
  }
  function A(N) {
    N === void 0 && (N = r.TEXTURE0 + Y - 1), at !== N && (r.activeTexture(N), at = N);
  }
  function b(N, ht, W) {
    W === void 0 && (at === null ? W = r.TEXTURE0 + Y - 1 : W = at);
    let J = dt[W];
    J === void 0 && (J = { type: void 0, texture: void 0 }, dt[W] = J), (J.type !== N || J.texture !== ht) && (at !== W && (r.activeTexture(W), at = W), r.bindTexture(N, ht || bt[N]), J.type = N, J.texture = ht);
  }
  function z() {
    const N = dt[at];
    N !== void 0 && N.type !== void 0 && (r.bindTexture(N.type, null), N.type = void 0, N.texture = void 0);
  }
  function Z() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Q() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function $() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function wt() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function lt() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function _t() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Yt() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function et() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function vt() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Lt() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Nt(N) {
    Jt.equals(N) === !1 && (r.scissor(N.x, N.y, N.z, N.w), Jt.copy(N));
  }
  function Mt(N) {
    X.equals(N) === !1 && (r.viewport(N.x, N.y, N.z, N.w), X.copy(N));
  }
  function $t(N, ht) {
    let W = l.get(ht);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(ht, W));
    let J = W.get(N);
    J === void 0 && (J = r.getUniformBlockIndex(ht, N.name), W.set(N, J));
  }
  function Xt(N, ht) {
    const J = l.get(ht).get(N);
    c.get(ht) !== J && (r.uniformBlockBinding(ht, J, N.__bindingPointIndex), c.set(ht, J));
  }
  function ae() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), o.setReversed(!1), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), h = {}, at = null, dt = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = !1, g = null, p = null, y = null, v = null, x = null, I = null, E = null, C = new ut(0, 0, 0), R = 0, S = !1, M = null, L = null, D = null, U = null, B = null, Jt.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), o.reset(), a.reset();
  }
  return {
    buffers: {
      color: s,
      depth: o,
      stencil: a
    },
    enable: it,
    disable: Pt,
    bindFramebuffer: Ft,
    drawBuffers: Ut,
    useProgram: Kt,
    setBlending: P,
    setMaterial: Ct,
    setFlipSided: tt,
    setCullFace: yt,
    setLineWidth: ot,
    setPolygonOffset: It,
    setScissorTest: gt,
    activeTexture: A,
    bindTexture: b,
    unbindTexture: z,
    compressedTexImage2D: Z,
    compressedTexImage3D: Q,
    texImage2D: vt,
    texImage3D: Lt,
    updateUBOMapping: $t,
    uniformBlockBinding: Xt,
    texStorage2D: Yt,
    texStorage3D: et,
    texSubImage2D: $,
    texSubImage3D: wt,
    compressedTexSubImage2D: lt,
    compressedTexSubImage3D: _t,
    scissor: Nt,
    viewport: Mt,
    reset: ae
  };
}
function Fx(r, t) {
  const e = r.image && r.image.width ? r.image.width / r.image.height : 1;
  return e > t ? (r.repeat.x = 1, r.repeat.y = e / t, r.offset.x = 0, r.offset.y = (1 - r.repeat.y) / 2) : (r.repeat.x = t / e, r.repeat.y = 1, r.offset.x = (1 - r.repeat.x) / 2, r.offset.y = 0), r;
}
function Bx(r, t) {
  const e = r.image && r.image.width ? r.image.width / r.image.height : 1;
  return e > t ? (r.repeat.x = t / e, r.repeat.y = 1, r.offset.x = (1 - r.repeat.x) / 2, r.offset.y = 0) : (r.repeat.x = 1, r.repeat.y = e / t, r.offset.x = 0, r.offset.y = (1 - r.repeat.y) / 2), r;
}
function zx(r) {
  return r.repeat.x = 1, r.repeat.y = 1, r.offset.x = 0, r.offset.y = 0, r;
}
function Bc(r, t, e, n) {
  const i = kx(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case tl:
      return r * t;
    case nl:
      return r * t;
    case il:
      return r * t * 2;
    case fa:
      return r * t / i.components * i.byteLength;
    case mr:
      return r * t / i.components * i.byteLength;
    case sl:
      return r * t * 2 / i.components * i.byteLength;
    case pa:
      return r * t * 2 / i.components * i.byteLength;
    case el:
      return r * t * 3 / i.components * i.byteLength;
    case ke:
      return r * t * 4 / i.components * i.byteLength;
    case ma:
      return r * t * 4 / i.components * i.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case ks:
    case Vs:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Hs:
    case Gs:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Uo:
    case Oo:
      return Math.max(r, 16) * Math.max(t, 8) / 4;
    case Do:
    case No:
      return Math.max(r, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Fo:
    case Bo:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case zo:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case ko:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Vo:
      return Math.floor((r + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Ho:
      return Math.floor((r + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Go:
      return Math.floor((r + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Wo:
      return Math.floor((r + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Xo:
      return Math.floor((r + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Yo:
      return Math.floor((r + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case qo:
      return Math.floor((r + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Zo:
      return Math.floor((r + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case $o:
      return Math.floor((r + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Jo:
      return Math.floor((r + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Ko:
      return Math.floor((r + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case jo:
      return Math.floor((r + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Qo:
      return Math.floor((r + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Ws:
    case ta:
    case ea:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case rl:
    case na:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 8;
    case ia:
    case sa:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function kx(r) {
  switch (r) {
    case Sn:
    case Kc:
      return { byteLength: 1, components: 1 };
    case ms:
    case jc:
    case vs:
      return { byteLength: 2, components: 1 };
    case ua:
    case da:
      return { byteLength: 2, components: 4 };
    case Hn:
    case ha:
    case qe:
      return { byteLength: 4, components: 1 };
    case Qc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
const Vx = {
  contain: Fx,
  cover: Bx,
  fill: zx,
  getByteLength: Bc
};
function Hx(r, t, e, n, i, s, o) {
  const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new q(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(A, b) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(A, b)
    ) : sr("canvas");
  }
  function _(A, b, z) {
    let Z = 1;
    const Q = gt(A);
    if ((Q.width > z || Q.height > z) && (Z = z / Math.max(Q.width, Q.height)), Z < 1)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
        const $ = Math.floor(Z * Q.width), wt = Math.floor(Z * Q.height);
        u === void 0 && (u = m($, wt));
        const lt = b ? m($, wt) : u;
        return lt.width = $, lt.height = wt, lt.getContext("2d").drawImage(A, 0, 0, $, wt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Q.width + "x" + Q.height + ") to (" + $ + "x" + wt + ")."), lt;
      } else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Q.width + "x" + Q.height + ")."), A;
    return A;
  }
  function g(A) {
    return A.generateMipmaps;
  }
  function p(A) {
    r.generateMipmap(A);
  }
  function y(A) {
    return A.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? r.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D;
  }
  function v(A, b, z, Z, Q = !1) {
    if (A !== null) {
      if (r[A] !== void 0) return r[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let $ = b;
    if (b === r.RED && (z === r.FLOAT && ($ = r.R32F), z === r.HALF_FLOAT && ($ = r.R16F), z === r.UNSIGNED_BYTE && ($ = r.R8)), b === r.RED_INTEGER && (z === r.UNSIGNED_BYTE && ($ = r.R8UI), z === r.UNSIGNED_SHORT && ($ = r.R16UI), z === r.UNSIGNED_INT && ($ = r.R32UI), z === r.BYTE && ($ = r.R8I), z === r.SHORT && ($ = r.R16I), z === r.INT && ($ = r.R32I)), b === r.RG && (z === r.FLOAT && ($ = r.RG32F), z === r.HALF_FLOAT && ($ = r.RG16F), z === r.UNSIGNED_BYTE && ($ = r.RG8)), b === r.RG_INTEGER && (z === r.UNSIGNED_BYTE && ($ = r.RG8UI), z === r.UNSIGNED_SHORT && ($ = r.RG16UI), z === r.UNSIGNED_INT && ($ = r.RG32UI), z === r.BYTE && ($ = r.RG8I), z === r.SHORT && ($ = r.RG16I), z === r.INT && ($ = r.RG32I)), b === r.RGB_INTEGER && (z === r.UNSIGNED_BYTE && ($ = r.RGB8UI), z === r.UNSIGNED_SHORT && ($ = r.RGB16UI), z === r.UNSIGNED_INT && ($ = r.RGB32UI), z === r.BYTE && ($ = r.RGB8I), z === r.SHORT && ($ = r.RGB16I), z === r.INT && ($ = r.RGB32I)), b === r.RGBA_INTEGER && (z === r.UNSIGNED_BYTE && ($ = r.RGBA8UI), z === r.UNSIGNED_SHORT && ($ = r.RGBA16UI), z === r.UNSIGNED_INT && ($ = r.RGBA32UI), z === r.BYTE && ($ = r.RGBA8I), z === r.SHORT && ($ = r.RGBA16I), z === r.INT && ($ = r.RGBA32I)), b === r.RGB && z === r.UNSIGNED_INT_5_9_9_9_REV && ($ = r.RGB9_E5), b === r.RGBA) {
      const wt = Q ? gr : qt.getTransfer(Z);
      z === r.FLOAT && ($ = r.RGBA32F), z === r.HALF_FLOAT && ($ = r.RGBA16F), z === r.UNSIGNED_BYTE && ($ = wt === se ? r.SRGB8_ALPHA8 : r.RGBA8), z === r.UNSIGNED_SHORT_4_4_4_4 && ($ = r.RGBA4), z === r.UNSIGNED_SHORT_5_5_5_1 && ($ = r.RGB5_A1);
    }
    return ($ === r.R16F || $ === r.R32F || $ === r.RG16F || $ === r.RG32F || $ === r.RGBA16F || $ === r.RGBA32F) && t.get("EXT_color_buffer_float"), $;
  }
  function x(A, b) {
    let z;
    return A ? b === null || b === Hn || b === Ni ? z = r.DEPTH24_STENCIL8 : b === qe ? z = r.DEPTH32F_STENCIL8 : b === ms && (z = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : b === null || b === Hn || b === Ni ? z = r.DEPTH_COMPONENT24 : b === qe ? z = r.DEPTH_COMPONENT32F : b === ms && (z = r.DEPTH_COMPONENT16), z;
  }
  function I(A, b) {
    return g(A) === !0 || A.isFramebufferTexture && A.minFilter !== Te && A.minFilter !== _e ? Math.log2(Math.max(b.width, b.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? b.mipmaps.length : 1;
  }
  function E(A) {
    const b = A.target;
    b.removeEventListener("dispose", E), R(b), b.isVideoTexture && h.delete(b);
  }
  function C(A) {
    const b = A.target;
    b.removeEventListener("dispose", C), M(b);
  }
  function R(A) {
    const b = n.get(A);
    if (b.__webglInit === void 0) return;
    const z = A.source, Z = d.get(z);
    if (Z) {
      const Q = Z[b.__cacheKey];
      Q.usedTimes--, Q.usedTimes === 0 && S(A), Object.keys(Z).length === 0 && d.delete(z);
    }
    n.remove(A);
  }
  function S(A) {
    const b = n.get(A);
    r.deleteTexture(b.__webglTexture);
    const z = A.source, Z = d.get(z);
    delete Z[b.__cacheKey], o.memory.textures--;
  }
  function M(A) {
    const b = n.get(A);
    if (A.depthTexture && (A.depthTexture.dispose(), n.remove(A.depthTexture)), A.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(b.__webglFramebuffer[Z]))
          for (let Q = 0; Q < b.__webglFramebuffer[Z].length; Q++) r.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);
        else
          r.deleteFramebuffer(b.__webglFramebuffer[Z]);
        b.__webglDepthbuffer && r.deleteRenderbuffer(b.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(b.__webglFramebuffer))
        for (let Z = 0; Z < b.__webglFramebuffer.length; Z++) r.deleteFramebuffer(b.__webglFramebuffer[Z]);
      else
        r.deleteFramebuffer(b.__webglFramebuffer);
      if (b.__webglDepthbuffer && r.deleteRenderbuffer(b.__webglDepthbuffer), b.__webglMultisampledFramebuffer && r.deleteFramebuffer(b.__webglMultisampledFramebuffer), b.__webglColorRenderbuffer)
        for (let Z = 0; Z < b.__webglColorRenderbuffer.length; Z++)
          b.__webglColorRenderbuffer[Z] && r.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);
      b.__webglDepthRenderbuffer && r.deleteRenderbuffer(b.__webglDepthRenderbuffer);
    }
    const z = A.textures;
    for (let Z = 0, Q = z.length; Z < Q; Z++) {
      const $ = n.get(z[Z]);
      $.__webglTexture && (r.deleteTexture($.__webglTexture), o.memory.textures--), n.remove(z[Z]);
    }
    n.remove(A);
  }
  let L = 0;
  function D() {
    L = 0;
  }
  function U() {
    const A = L;
    return A >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + i.maxTextures), L += 1, A;
  }
  function B(A) {
    const b = [];
    return b.push(A.wrapS), b.push(A.wrapT), b.push(A.wrapR || 0), b.push(A.magFilter), b.push(A.minFilter), b.push(A.anisotropy), b.push(A.internalFormat), b.push(A.format), b.push(A.type), b.push(A.generateMipmaps), b.push(A.premultiplyAlpha), b.push(A.flipY), b.push(A.unpackAlignment), b.push(A.colorSpace), b.join();
  }
  function Y(A, b) {
    const z = n.get(A);
    if (A.isVideoTexture && ot(A), A.isRenderTargetTexture === !1 && A.version > 0 && z.__version !== A.version) {
      const Z = A.image;
      if (Z === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Z.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(z, A, b);
        return;
      }
    }
    e.bindTexture(r.TEXTURE_2D, z.__webglTexture, r.TEXTURE0 + b);
  }
  function H(A, b) {
    const z = n.get(A);
    if (A.version > 0 && z.__version !== A.version) {
      X(z, A, b);
      return;
    }
    e.bindTexture(r.TEXTURE_2D_ARRAY, z.__webglTexture, r.TEXTURE0 + b);
  }
  function j(A, b) {
    const z = n.get(A);
    if (A.version > 0 && z.__version !== A.version) {
      X(z, A, b);
      return;
    }
    e.bindTexture(r.TEXTURE_3D, z.__webglTexture, r.TEXTURE0 + b);
  }
  function G(A, b) {
    const z = n.get(A);
    if (A.version > 0 && z.__version !== A.version) {
      nt(z, A, b);
      return;
    }
    e.bindTexture(r.TEXTURE_CUBE_MAP, z.__webglTexture, r.TEXTURE0 + b);
  }
  const at = {
    [js]: r.REPEAT,
    [nn]: r.CLAMP_TO_EDGE,
    [Qs]: r.MIRRORED_REPEAT
  }, dt = {
    [Te]: r.NEAREST,
    [Jc]: r.NEAREST_MIPMAP_NEAREST,
    [ls]: r.NEAREST_MIPMAP_LINEAR,
    [_e]: r.LINEAR,
    [zs]: r.LINEAR_MIPMAP_NEAREST,
    [yn]: r.LINEAR_MIPMAP_LINEAR
  }, xt = {
    [gd]: r.NEVER,
    [bd]: r.ALWAYS,
    [_d]: r.LESS,
    [al]: r.LEQUAL,
    [xd]: r.EQUAL,
    [Md]: r.GEQUAL,
    [yd]: r.GREATER,
    [vd]: r.NOTEQUAL
  };
  function Ot(A, b) {
    if (b.type === qe && t.has("OES_texture_float_linear") === !1 && (b.magFilter === _e || b.magFilter === zs || b.magFilter === ls || b.magFilter === yn || b.minFilter === _e || b.minFilter === zs || b.minFilter === ls || b.minFilter === yn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(A, r.TEXTURE_WRAP_S, at[b.wrapS]), r.texParameteri(A, r.TEXTURE_WRAP_T, at[b.wrapT]), (A === r.TEXTURE_3D || A === r.TEXTURE_2D_ARRAY) && r.texParameteri(A, r.TEXTURE_WRAP_R, at[b.wrapR]), r.texParameteri(A, r.TEXTURE_MAG_FILTER, dt[b.magFilter]), r.texParameteri(A, r.TEXTURE_MIN_FILTER, dt[b.minFilter]), b.compareFunction && (r.texParameteri(A, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(A, r.TEXTURE_COMPARE_FUNC, xt[b.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (b.magFilter === Te || b.minFilter !== ls && b.minFilter !== yn || b.type === qe && t.has("OES_texture_float_linear") === !1) return;
      if (b.anisotropy > 1 || n.get(b).__currentAnisotropy) {
        const z = t.get("EXT_texture_filter_anisotropic");
        r.texParameterf(A, z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, i.getMaxAnisotropy())), n.get(b).__currentAnisotropy = b.anisotropy;
      }
    }
  }
  function Jt(A, b) {
    let z = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, b.addEventListener("dispose", E));
    const Z = b.source;
    let Q = d.get(Z);
    Q === void 0 && (Q = {}, d.set(Z, Q));
    const $ = B(b);
    if ($ !== A.__cacheKey) {
      Q[$] === void 0 && (Q[$] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, z = !0), Q[$].usedTimes++;
      const wt = Q[A.__cacheKey];
      wt !== void 0 && (Q[A.__cacheKey].usedTimes--, wt.usedTimes === 0 && S(b)), A.__cacheKey = $, A.__webglTexture = Q[$].texture;
    }
    return z;
  }
  function X(A, b, z) {
    let Z = r.TEXTURE_2D;
    (b.isDataArrayTexture || b.isCompressedArrayTexture) && (Z = r.TEXTURE_2D_ARRAY), b.isData3DTexture && (Z = r.TEXTURE_3D);
    const Q = Jt(A, b), $ = b.source;
    e.bindTexture(Z, A.__webglTexture, r.TEXTURE0 + z);
    const wt = n.get($);
    if ($.version !== wt.__version || Q === !0) {
      e.activeTexture(r.TEXTURE0 + z);
      const lt = qt.getPrimaries(qt.workingColorSpace), _t = b.colorSpace === Nn ? null : qt.getPrimaries(b.colorSpace), Yt = b.colorSpace === Nn || lt === _t ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Yt);
      let et = _(b.image, !1, i.maxTextureSize);
      et = It(b, et);
      const vt = s.convert(b.format, b.colorSpace), Lt = s.convert(b.type);
      let Nt = v(b.internalFormat, vt, Lt, b.colorSpace, b.isVideoTexture);
      Ot(Z, b);
      let Mt;
      const $t = b.mipmaps, Xt = b.isVideoTexture !== !0, ae = wt.__version === void 0 || Q === !0, N = $.dataReady, ht = I(b, et);
      if (b.isDepthTexture)
        Nt = x(b.format === Oi, b.type), ae && (Xt ? e.texStorage2D(r.TEXTURE_2D, 1, Nt, et.width, et.height) : e.texImage2D(r.TEXTURE_2D, 0, Nt, et.width, et.height, 0, vt, Lt, null));
      else if (b.isDataTexture)
        if ($t.length > 0) {
          Xt && ae && e.texStorage2D(r.TEXTURE_2D, ht, Nt, $t[0].width, $t[0].height);
          for (let W = 0, J = $t.length; W < J; W++)
            Mt = $t[W], Xt ? N && e.texSubImage2D(r.TEXTURE_2D, W, 0, 0, Mt.width, Mt.height, vt, Lt, Mt.data) : e.texImage2D(r.TEXTURE_2D, W, Nt, Mt.width, Mt.height, 0, vt, Lt, Mt.data);
          b.generateMipmaps = !1;
        } else
          Xt ? (ae && e.texStorage2D(r.TEXTURE_2D, ht, Nt, et.width, et.height), N && e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, et.width, et.height, vt, Lt, et.data)) : e.texImage2D(r.TEXTURE_2D, 0, Nt, et.width, et.height, 0, vt, Lt, et.data);
      else if (b.isCompressedTexture)
        if (b.isCompressedArrayTexture) {
          Xt && ae && e.texStorage3D(r.TEXTURE_2D_ARRAY, ht, Nt, $t[0].width, $t[0].height, et.depth);
          for (let W = 0, J = $t.length; W < J; W++)
            if (Mt = $t[W], b.format !== ke)
              if (vt !== null)
                if (Xt) {
                  if (N)
                    if (b.layerUpdates.size > 0) {
                      const mt = Bc(Mt.width, Mt.height, b.format, b.type);
                      for (const ft of b.layerUpdates) {
                        const Ht = Mt.data.subarray(
                          ft * mt / Mt.data.BYTES_PER_ELEMENT,
                          (ft + 1) * mt / Mt.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, ft, Mt.width, Mt.height, 1, vt, Ht);
                      }
                      b.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, 0, Mt.width, Mt.height, et.depth, vt, Mt.data);
                } else
                  e.compressedTexImage3D(r.TEXTURE_2D_ARRAY, W, Nt, Mt.width, Mt.height, et.depth, 0, Mt.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Xt ? N && e.texSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, 0, Mt.width, Mt.height, et.depth, vt, Lt, Mt.data) : e.texImage3D(r.TEXTURE_2D_ARRAY, W, Nt, Mt.width, Mt.height, et.depth, 0, vt, Lt, Mt.data);
        } else {
          Xt && ae && e.texStorage2D(r.TEXTURE_2D, ht, Nt, $t[0].width, $t[0].height);
          for (let W = 0, J = $t.length; W < J; W++)
            Mt = $t[W], b.format !== ke ? vt !== null ? Xt ? N && e.compressedTexSubImage2D(r.TEXTURE_2D, W, 0, 0, Mt.width, Mt.height, vt, Mt.data) : e.compressedTexImage2D(r.TEXTURE_2D, W, Nt, Mt.width, Mt.height, 0, Mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Xt ? N && e.texSubImage2D(r.TEXTURE_2D, W, 0, 0, Mt.width, Mt.height, vt, Lt, Mt.data) : e.texImage2D(r.TEXTURE_2D, W, Nt, Mt.width, Mt.height, 0, vt, Lt, Mt.data);
        }
      else if (b.isDataArrayTexture)
        if (Xt) {
          if (ae && e.texStorage3D(r.TEXTURE_2D_ARRAY, ht, Nt, et.width, et.height, et.depth), N)
            if (b.layerUpdates.size > 0) {
              const W = Bc(et.width, et.height, b.format, b.type);
              for (const J of b.layerUpdates) {
                const mt = et.data.subarray(
                  J * W / et.data.BYTES_PER_ELEMENT,
                  (J + 1) * W / et.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, J, et.width, et.height, 1, vt, Lt, mt);
              }
              b.clearLayerUpdates();
            } else
              e.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, et.width, et.height, et.depth, vt, Lt, et.data);
        } else
          e.texImage3D(r.TEXTURE_2D_ARRAY, 0, Nt, et.width, et.height, et.depth, 0, vt, Lt, et.data);
      else if (b.isData3DTexture)
        Xt ? (ae && e.texStorage3D(r.TEXTURE_3D, ht, Nt, et.width, et.height, et.depth), N && e.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, et.width, et.height, et.depth, vt, Lt, et.data)) : e.texImage3D(r.TEXTURE_3D, 0, Nt, et.width, et.height, et.depth, 0, vt, Lt, et.data);
      else if (b.isFramebufferTexture) {
        if (ae)
          if (Xt)
            e.texStorage2D(r.TEXTURE_2D, ht, Nt, et.width, et.height);
          else {
            let W = et.width, J = et.height;
            for (let mt = 0; mt < ht; mt++)
              e.texImage2D(r.TEXTURE_2D, mt, Nt, W, J, 0, vt, Lt, null), W >>= 1, J >>= 1;
          }
      } else if ($t.length > 0) {
        if (Xt && ae) {
          const W = gt($t[0]);
          e.texStorage2D(r.TEXTURE_2D, ht, Nt, W.width, W.height);
        }
        for (let W = 0, J = $t.length; W < J; W++)
          Mt = $t[W], Xt ? N && e.texSubImage2D(r.TEXTURE_2D, W, 0, 0, vt, Lt, Mt) : e.texImage2D(r.TEXTURE_2D, W, Nt, vt, Lt, Mt);
        b.generateMipmaps = !1;
      } else if (Xt) {
        if (ae) {
          const W = gt(et);
          e.texStorage2D(r.TEXTURE_2D, ht, Nt, W.width, W.height);
        }
        N && e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, vt, Lt, et);
      } else
        e.texImage2D(r.TEXTURE_2D, 0, Nt, vt, Lt, et);
      g(b) && p(Z), wt.__version = $.version, b.onUpdate && b.onUpdate(b);
    }
    A.__version = b.version;
  }
  function nt(A, b, z) {
    if (b.image.length !== 6) return;
    const Z = Jt(A, b), Q = b.source;
    e.bindTexture(r.TEXTURE_CUBE_MAP, A.__webglTexture, r.TEXTURE0 + z);
    const $ = n.get(Q);
    if (Q.version !== $.__version || Z === !0) {
      e.activeTexture(r.TEXTURE0 + z);
      const wt = qt.getPrimaries(qt.workingColorSpace), lt = b.colorSpace === Nn ? null : qt.getPrimaries(b.colorSpace), _t = b.colorSpace === Nn || wt === lt ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, _t);
      const Yt = b.isCompressedTexture || b.image[0].isCompressedTexture, et = b.image[0] && b.image[0].isDataTexture, vt = [];
      for (let J = 0; J < 6; J++)
        !Yt && !et ? vt[J] = _(b.image[J], !0, i.maxCubemapSize) : vt[J] = et ? b.image[J].image : b.image[J], vt[J] = It(b, vt[J]);
      const Lt = vt[0], Nt = s.convert(b.format, b.colorSpace), Mt = s.convert(b.type), $t = v(b.internalFormat, Nt, Mt, b.colorSpace), Xt = b.isVideoTexture !== !0, ae = $.__version === void 0 || Z === !0, N = Q.dataReady;
      let ht = I(b, Lt);
      Ot(r.TEXTURE_CUBE_MAP, b);
      let W;
      if (Yt) {
        Xt && ae && e.texStorage2D(r.TEXTURE_CUBE_MAP, ht, $t, Lt.width, Lt.height);
        for (let J = 0; J < 6; J++) {
          W = vt[J].mipmaps;
          for (let mt = 0; mt < W.length; mt++) {
            const ft = W[mt];
            b.format !== ke ? Nt !== null ? Xt ? N && e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt, 0, 0, ft.width, ft.height, Nt, ft.data) : e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt, $t, ft.width, ft.height, 0, ft.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Xt ? N && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt, 0, 0, ft.width, ft.height, Nt, Mt, ft.data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt, $t, ft.width, ft.height, 0, Nt, Mt, ft.data);
          }
        }
      } else {
        if (W = b.mipmaps, Xt && ae) {
          W.length > 0 && ht++;
          const J = gt(vt[0]);
          e.texStorage2D(r.TEXTURE_CUBE_MAP, ht, $t, J.width, J.height);
        }
        for (let J = 0; J < 6; J++)
          if (et) {
            Xt ? N && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, vt[J].width, vt[J].height, Nt, Mt, vt[J].data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, $t, vt[J].width, vt[J].height, 0, Nt, Mt, vt[J].data);
            for (let mt = 0; mt < W.length; mt++) {
              const Ht = W[mt].image[J].image;
              Xt ? N && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt + 1, 0, 0, Ht.width, Ht.height, Nt, Mt, Ht.data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt + 1, $t, Ht.width, Ht.height, 0, Nt, Mt, Ht.data);
            }
          } else {
            Xt ? N && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Nt, Mt, vt[J]) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, $t, Nt, Mt, vt[J]);
            for (let mt = 0; mt < W.length; mt++) {
              const ft = W[mt];
              Xt ? N && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt + 1, 0, 0, Nt, Mt, ft.image[J]) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, mt + 1, $t, Nt, Mt, ft.image[J]);
            }
          }
      }
      g(b) && p(r.TEXTURE_CUBE_MAP), $.__version = Q.version, b.onUpdate && b.onUpdate(b);
    }
    A.__version = b.version;
  }
  function bt(A, b, z, Z, Q, $) {
    const wt = s.convert(z.format, z.colorSpace), lt = s.convert(z.type), _t = v(z.internalFormat, wt, lt, z.colorSpace), Yt = n.get(b), et = n.get(z);
    if (et.__renderTarget = b, !Yt.__hasExternalTextures) {
      const vt = Math.max(1, b.width >> $), Lt = Math.max(1, b.height >> $);
      Q === r.TEXTURE_3D || Q === r.TEXTURE_2D_ARRAY ? e.texImage3D(Q, $, _t, vt, Lt, b.depth, 0, wt, lt, null) : e.texImage2D(Q, $, _t, vt, Lt, 0, wt, lt, null);
    }
    e.bindFramebuffer(r.FRAMEBUFFER, A), yt(b) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Z, Q, et.__webglTexture, 0, tt(b)) : (Q === r.TEXTURE_2D || Q >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Z, Q, et.__webglTexture, $), e.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function it(A, b, z) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, A), b.depthBuffer) {
      const Z = b.depthTexture, Q = Z && Z.isDepthTexture ? Z.type : null, $ = x(b.stencilBuffer, Q), wt = b.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, lt = tt(b);
      yt(b) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, lt, $, b.width, b.height) : z ? r.renderbufferStorageMultisample(r.RENDERBUFFER, lt, $, b.width, b.height) : r.renderbufferStorage(r.RENDERBUFFER, $, b.width, b.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, wt, r.RENDERBUFFER, A);
    } else {
      const Z = b.textures;
      for (let Q = 0; Q < Z.length; Q++) {
        const $ = Z[Q], wt = s.convert($.format, $.colorSpace), lt = s.convert($.type), _t = v($.internalFormat, wt, lt, $.colorSpace), Yt = tt(b);
        z && yt(b) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Yt, _t, b.width, b.height) : yt(b) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Yt, _t, b.width, b.height) : r.renderbufferStorage(r.RENDERBUFFER, _t, b.width, b.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function Pt(A, b) {
    if (b && b.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(r.FRAMEBUFFER, A), !(b.depthTexture && b.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Z = n.get(b.depthTexture);
    Z.__renderTarget = b, (!Z.__webglTexture || b.depthTexture.image.width !== b.width || b.depthTexture.image.height !== b.height) && (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = !0), Y(b.depthTexture, 0);
    const Q = Z.__webglTexture, $ = tt(b);
    if (b.depthTexture.format === Ii)
      yt(b) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0, $) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else if (b.depthTexture.format === Oi)
      yt(b) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0, $) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ft(A) {
    const b = n.get(A), z = A.isWebGLCubeRenderTarget === !0;
    if (b.__boundDepthTexture !== A.depthTexture) {
      const Z = A.depthTexture;
      if (b.__depthDisposeCallback && b.__depthDisposeCallback(), Z) {
        const Q = () => {
          delete b.__boundDepthTexture, delete b.__depthDisposeCallback, Z.removeEventListener("dispose", Q);
        };
        Z.addEventListener("dispose", Q), b.__depthDisposeCallback = Q;
      }
      b.__boundDepthTexture = Z;
    }
    if (A.depthTexture && !b.__autoAllocateDepthBuffer) {
      if (z) throw new Error("target.depthTexture not supported in Cube render targets");
      Pt(b.__webglFramebuffer, A);
    } else if (z) {
      b.__webglDepthbuffer = [];
      for (let Z = 0; Z < 6; Z++)
        if (e.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer[Z]), b.__webglDepthbuffer[Z] === void 0)
          b.__webglDepthbuffer[Z] = r.createRenderbuffer(), it(b.__webglDepthbuffer[Z], A, !1);
        else {
          const Q = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, $ = b.__webglDepthbuffer[Z];
          r.bindRenderbuffer(r.RENDERBUFFER, $), r.framebufferRenderbuffer(r.FRAMEBUFFER, Q, r.RENDERBUFFER, $);
        }
    } else if (e.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer), b.__webglDepthbuffer === void 0)
      b.__webglDepthbuffer = r.createRenderbuffer(), it(b.__webglDepthbuffer, A, !1);
    else {
      const Z = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Q = b.__webglDepthbuffer;
      r.bindRenderbuffer(r.RENDERBUFFER, Q), r.framebufferRenderbuffer(r.FRAMEBUFFER, Z, r.RENDERBUFFER, Q);
    }
    e.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ut(A, b, z) {
    const Z = n.get(A);
    b !== void 0 && bt(Z.__webglFramebuffer, A, A.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), z !== void 0 && Ft(A);
  }
  function Kt(A) {
    const b = A.texture, z = n.get(A), Z = n.get(b);
    A.addEventListener("dispose", C);
    const Q = A.textures, $ = A.isWebGLCubeRenderTarget === !0, wt = Q.length > 1;
    if (wt || (Z.__webglTexture === void 0 && (Z.__webglTexture = r.createTexture()), Z.__version = b.version, o.memory.textures++), $) {
      z.__webglFramebuffer = [];
      for (let lt = 0; lt < 6; lt++)
        if (b.mipmaps && b.mipmaps.length > 0) {
          z.__webglFramebuffer[lt] = [];
          for (let _t = 0; _t < b.mipmaps.length; _t++)
            z.__webglFramebuffer[lt][_t] = r.createFramebuffer();
        } else
          z.__webglFramebuffer[lt] = r.createFramebuffer();
    } else {
      if (b.mipmaps && b.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let lt = 0; lt < b.mipmaps.length; lt++)
          z.__webglFramebuffer[lt] = r.createFramebuffer();
      } else
        z.__webglFramebuffer = r.createFramebuffer();
      if (wt)
        for (let lt = 0, _t = Q.length; lt < _t; lt++) {
          const Yt = n.get(Q[lt]);
          Yt.__webglTexture === void 0 && (Yt.__webglTexture = r.createTexture(), o.memory.textures++);
        }
      if (A.samples > 0 && yt(A) === !1) {
        z.__webglMultisampledFramebuffer = r.createFramebuffer(), z.__webglColorRenderbuffer = [], e.bindFramebuffer(r.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let lt = 0; lt < Q.length; lt++) {
          const _t = Q[lt];
          z.__webglColorRenderbuffer[lt] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, z.__webglColorRenderbuffer[lt]);
          const Yt = s.convert(_t.format, _t.colorSpace), et = s.convert(_t.type), vt = v(_t.internalFormat, Yt, et, _t.colorSpace, A.isXRRenderTarget === !0), Lt = tt(A);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Lt, vt, A.width, A.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + lt, r.RENDERBUFFER, z.__webglColorRenderbuffer[lt]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), A.depthBuffer && (z.__webglDepthRenderbuffer = r.createRenderbuffer(), it(z.__webglDepthRenderbuffer, A, !0)), e.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if ($) {
      e.bindTexture(r.TEXTURE_CUBE_MAP, Z.__webglTexture), Ot(r.TEXTURE_CUBE_MAP, b);
      for (let lt = 0; lt < 6; lt++)
        if (b.mipmaps && b.mipmaps.length > 0)
          for (let _t = 0; _t < b.mipmaps.length; _t++)
            bt(z.__webglFramebuffer[lt][_t], A, b, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + lt, _t);
        else
          bt(z.__webglFramebuffer[lt], A, b, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + lt, 0);
      g(b) && p(r.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (wt) {
      for (let lt = 0, _t = Q.length; lt < _t; lt++) {
        const Yt = Q[lt], et = n.get(Yt);
        e.bindTexture(r.TEXTURE_2D, et.__webglTexture), Ot(r.TEXTURE_2D, Yt), bt(z.__webglFramebuffer, A, Yt, r.COLOR_ATTACHMENT0 + lt, r.TEXTURE_2D, 0), g(Yt) && p(r.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let lt = r.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (lt = A.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), e.bindTexture(lt, Z.__webglTexture), Ot(lt, b), b.mipmaps && b.mipmaps.length > 0)
        for (let _t = 0; _t < b.mipmaps.length; _t++)
          bt(z.__webglFramebuffer[_t], A, b, r.COLOR_ATTACHMENT0, lt, _t);
      else
        bt(z.__webglFramebuffer, A, b, r.COLOR_ATTACHMENT0, lt, 0);
      g(b) && p(lt), e.unbindTexture();
    }
    A.depthBuffer && Ft(A);
  }
  function K(A) {
    const b = A.textures;
    for (let z = 0, Z = b.length; z < Z; z++) {
      const Q = b[z];
      if (g(Q)) {
        const $ = y(A), wt = n.get(Q).__webglTexture;
        e.bindTexture($, wt), p($), e.unbindTexture();
      }
    }
  }
  const st = [], P = [];
  function Ct(A) {
    if (A.samples > 0) {
      if (yt(A) === !1) {
        const b = A.textures, z = A.width, Z = A.height;
        let Q = r.COLOR_BUFFER_BIT;
        const $ = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, wt = n.get(A), lt = b.length > 1;
        if (lt)
          for (let _t = 0; _t < b.length; _t++)
            e.bindFramebuffer(r.FRAMEBUFFER, wt.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _t, r.RENDERBUFFER, null), e.bindFramebuffer(r.FRAMEBUFFER, wt.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _t, r.TEXTURE_2D, null, 0);
        e.bindFramebuffer(r.READ_FRAMEBUFFER, wt.__webglMultisampledFramebuffer), e.bindFramebuffer(r.DRAW_FRAMEBUFFER, wt.__webglFramebuffer);
        for (let _t = 0; _t < b.length; _t++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (Q |= r.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (Q |= r.STENCIL_BUFFER_BIT)), lt) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, wt.__webglColorRenderbuffer[_t]);
            const Yt = n.get(b[_t]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Yt, 0);
          }
          r.blitFramebuffer(0, 0, z, Z, 0, 0, z, Z, Q, r.NEAREST), c === !0 && (st.length = 0, P.length = 0, st.push(r.COLOR_ATTACHMENT0 + _t), A.depthBuffer && A.resolveDepthBuffer === !1 && (st.push($), P.push($), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, P)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, st));
        }
        if (e.bindFramebuffer(r.READ_FRAMEBUFFER, null), e.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), lt)
          for (let _t = 0; _t < b.length; _t++) {
            e.bindFramebuffer(r.FRAMEBUFFER, wt.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _t, r.RENDERBUFFER, wt.__webglColorRenderbuffer[_t]);
            const Yt = n.get(b[_t]).__webglTexture;
            e.bindFramebuffer(r.FRAMEBUFFER, wt.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _t, r.TEXTURE_2D, Yt, 0);
          }
        e.bindFramebuffer(r.DRAW_FRAMEBUFFER, wt.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && c) {
        const b = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [b]);
      }
    }
  }
  function tt(A) {
    return Math.min(i.maxSamples, A.samples);
  }
  function yt(A) {
    const b = n.get(A);
    return A.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && b.__useRenderToTexture !== !1;
  }
  function ot(A) {
    const b = o.render.frame;
    h.get(A) !== b && (h.set(A, b), A.update());
  }
  function It(A, b) {
    const z = A.colorSpace, Z = A.format, Q = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || z !== zi && z !== Nn && (qt.getTransfer(z) === se ? (Z !== ke || Q !== Sn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), b;
  }
  function gt(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (l.width = A.naturalWidth || A.width, l.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (l.width = A.displayWidth, l.height = A.displayHeight) : (l.width = A.width, l.height = A.height), l;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = D, this.setTexture2D = Y, this.setTexture2DArray = H, this.setTexture3D = j, this.setTextureCube = G, this.rebindTextures = Ut, this.setupRenderTarget = Kt, this.updateRenderTargetMipmap = K, this.updateMultisampleRenderTarget = Ct, this.setupDepthRenderbuffer = Ft, this.setupFrameBufferTexture = bt, this.useMultisampledRTT = yt;
}
function Bd(r, t) {
  function e(n, i = Nn) {
    let s;
    const o = qt.getTransfer(i);
    if (n === Sn) return r.UNSIGNED_BYTE;
    if (n === ua) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === da) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === Qc) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Kc) return r.BYTE;
    if (n === jc) return r.SHORT;
    if (n === ms) return r.UNSIGNED_SHORT;
    if (n === ha) return r.INT;
    if (n === Hn) return r.UNSIGNED_INT;
    if (n === qe) return r.FLOAT;
    if (n === vs) return r.HALF_FLOAT;
    if (n === tl) return r.ALPHA;
    if (n === el) return r.RGB;
    if (n === ke) return r.RGBA;
    if (n === nl) return r.LUMINANCE;
    if (n === il) return r.LUMINANCE_ALPHA;
    if (n === Ii) return r.DEPTH_COMPONENT;
    if (n === Oi) return r.DEPTH_STENCIL;
    if (n === fa) return r.RED;
    if (n === mr) return r.RED_INTEGER;
    if (n === sl) return r.RG;
    if (n === pa) return r.RG_INTEGER;
    if (n === ma) return r.RGBA_INTEGER;
    if (n === ks || n === Vs || n === Hs || n === Gs)
      if (o === se)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === ks) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Vs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Hs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Gs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === ks) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Vs) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Hs) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Gs) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Do || n === Uo || n === No || n === Oo)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Do) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Uo) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === No) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Oo) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Fo || n === Bo || n === zo)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Fo || n === Bo) return o === se ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === zo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === ko || n === Vo || n === Ho || n === Go || n === Wo || n === Xo || n === Yo || n === qo || n === Zo || n === $o || n === Jo || n === Ko || n === jo || n === Qo)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === ko) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Vo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ho) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Go) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Wo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Xo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Yo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === qo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Zo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === $o) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Jo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ko) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === jo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Qo) return o === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Ws || n === ta || n === ea)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Ws) return o === se ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ta) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === ea) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === rl || n === na || n === ia || n === sa)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Ws) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === na) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ia) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === sa) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Ni ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: e };
}
class zd extends Ee {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class ds extends Zt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Gx = { type: "move" };
class fc {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ds(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ds(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new T(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new T()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ds(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new T(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new T()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let i = null, s = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        o = !0;
        for (const _ of t.hand.values()) {
          const g = e.getJointPose(_, n), p = this._getHandJoint(l, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        l.inputState.pinching && d > f + m ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && d <= f - m && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = e.getPose(t.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Gx)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new ds();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const Wx = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Xx = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Yx {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const i = new me(), s = t.properties.get(i);
      s.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new fn({
        vertexShader: Wx,
        fragmentShader: Xx,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new ye(new Wn(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class qx extends En {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, s = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, m = null;
    const _ = new Yx(), g = e.getContextAttributes();
    let p = null, y = null;
    const v = [], x = [], I = new q();
    let E = null;
    const C = new Ee();
    C.viewport = new Qt();
    const R = new Ee();
    R.viewport = new Qt();
    const S = [C, R], M = new zd();
    let L = null, D = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let nt = v[X];
      return nt === void 0 && (nt = new fc(), v[X] = nt), nt.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let nt = v[X];
      return nt === void 0 && (nt = new fc(), v[X] = nt), nt.getGripSpace();
    }, this.getHand = function(X) {
      let nt = v[X];
      return nt === void 0 && (nt = new fc(), v[X] = nt), nt.getHandSpace();
    };
    function U(X) {
      const nt = x.indexOf(X.inputSource);
      if (nt === -1)
        return;
      const bt = v[nt];
      bt !== void 0 && (bt.update(X.inputSource, X.frame, l || o), bt.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function B() {
      i.removeEventListener("select", U), i.removeEventListener("selectstart", U), i.removeEventListener("selectend", U), i.removeEventListener("squeeze", U), i.removeEventListener("squeezestart", U), i.removeEventListener("squeezeend", U), i.removeEventListener("end", B), i.removeEventListener("inputsourceschange", Y);
      for (let X = 0; X < v.length; X++) {
        const nt = x[X];
        nt !== null && (x[X] = null, v[X].disconnect(nt));
      }
      L = null, D = null, _.reset(), t.setRenderTarget(p), f = null, d = null, u = null, i = null, y = null, Jt.stop(), n.isPresenting = !1, t.setPixelRatio(E), t.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      a = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(X) {
      l = X;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(X) {
      if (i = X, i !== null) {
        if (p = t.getRenderTarget(), i.addEventListener("select", U), i.addEventListener("selectstart", U), i.addEventListener("selectend", U), i.addEventListener("squeeze", U), i.addEventListener("squeezestart", U), i.addEventListener("squeezeend", U), i.addEventListener("end", B), i.addEventListener("inputsourceschange", Y), g.xrCompatible !== !0 && await e.makeXRCompatible(), E = t.getPixelRatio(), t.getSize(I), i.renderState.layers === void 0) {
          const nt = {
            antialias: g.antialias,
            alpha: !0,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, e, nt), i.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new dn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: ke,
              type: Sn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let nt = null, bt = null, it = null;
          g.depth && (it = g.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, nt = g.stencil ? Oi : Ii, bt = g.stencil ? Ni : Hn);
          const Pt = {
            colorFormat: e.RGBA8,
            depthFormat: it,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, e), d = u.createProjectionLayer(Pt), i.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, !1), y = new dn(
            d.textureWidth,
            d.textureHeight,
            {
              format: ke,
              type: Sn,
              depthTexture: new fl(d.textureWidth, d.textureHeight, bt, void 0, void 0, void 0, void 0, void 0, void 0, nt),
              stencilBuffer: g.stencil,
              colorSpace: t.outputColorSpace,
              samples: g.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        y.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), Jt.setContext(i), Jt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function Y(X) {
      for (let nt = 0; nt < X.removed.length; nt++) {
        const bt = X.removed[nt], it = x.indexOf(bt);
        it >= 0 && (x[it] = null, v[it].disconnect(bt));
      }
      for (let nt = 0; nt < X.added.length; nt++) {
        const bt = X.added[nt];
        let it = x.indexOf(bt);
        if (it === -1) {
          for (let Ft = 0; Ft < v.length; Ft++)
            if (Ft >= x.length) {
              x.push(bt), it = Ft;
              break;
            } else if (x[Ft] === null) {
              x[Ft] = bt, it = Ft;
              break;
            }
          if (it === -1) break;
        }
        const Pt = v[it];
        Pt && Pt.connect(bt);
      }
    }
    const H = new T(), j = new T();
    function G(X, nt, bt) {
      H.setFromMatrixPosition(nt.matrixWorld), j.setFromMatrixPosition(bt.matrixWorld);
      const it = H.distanceTo(j), Pt = nt.projectionMatrix.elements, Ft = bt.projectionMatrix.elements, Ut = Pt[14] / (Pt[10] - 1), Kt = Pt[14] / (Pt[10] + 1), K = (Pt[9] + 1) / Pt[5], st = (Pt[9] - 1) / Pt[5], P = (Pt[8] - 1) / Pt[0], Ct = (Ft[8] + 1) / Ft[0], tt = Ut * P, yt = Ut * Ct, ot = it / (-P + Ct), It = ot * -P;
      if (nt.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(It), X.translateZ(ot), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Pt[10] === -1)
        X.projectionMatrix.copy(nt.projectionMatrix), X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);
      else {
        const gt = Ut + ot, A = Kt + ot, b = tt - It, z = yt + (it - It), Z = K * Kt / A * gt, Q = st * Kt / A * gt;
        X.projectionMatrix.makePerspective(b, z, Z, Q, gt, A), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function at(X, nt) {
      nt === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(nt.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (i === null) return;
      let nt = X.near, bt = X.far;
      _.texture !== null && (_.depthNear > 0 && (nt = _.depthNear), _.depthFar > 0 && (bt = _.depthFar)), M.near = R.near = C.near = nt, M.far = R.far = C.far = bt, (L !== M.near || D !== M.far) && (i.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), L = M.near, D = M.far), C.layers.mask = X.layers.mask | 2, R.layers.mask = X.layers.mask | 4, M.layers.mask = C.layers.mask | R.layers.mask;
      const it = X.parent, Pt = M.cameras;
      at(M, it);
      for (let Ft = 0; Ft < Pt.length; Ft++)
        at(Pt[Ft], it);
      Pt.length === 2 ? G(M, C, R) : M.projectionMatrix.copy(C.projectionMatrix), dt(X, M, it);
    };
    function dt(X, nt, bt) {
      bt === null ? X.matrix.copy(nt.matrixWorld) : (X.matrix.copy(bt.matrixWorld), X.matrix.invert(), X.matrix.multiply(nt.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(nt.projectionMatrix), X.projectionMatrixInverse.copy(nt.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = gs * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(X) {
      c = X, d !== null && (d.fixedFoveation = X), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let xt = null;
    function Ot(X, nt) {
      if (h = nt.getViewerPose(l || o), m = nt, h !== null) {
        const bt = h.views;
        f !== null && (t.setRenderTargetFramebuffer(y, f.framebuffer), t.setRenderTarget(y));
        let it = !1;
        bt.length !== M.cameras.length && (M.cameras.length = 0, it = !0);
        for (let Ft = 0; Ft < bt.length; Ft++) {
          const Ut = bt[Ft];
          let Kt = null;
          if (f !== null)
            Kt = f.getViewport(Ut);
          else {
            const st = u.getViewSubImage(d, Ut);
            Kt = st.viewport, Ft === 0 && (t.setRenderTargetTextures(
              y,
              st.colorTexture,
              d.ignoreDepthValues ? void 0 : st.depthStencilTexture
            ), t.setRenderTarget(y));
          }
          let K = S[Ft];
          K === void 0 && (K = new Ee(), K.layers.enable(Ft), K.viewport = new Qt(), S[Ft] = K), K.matrix.fromArray(Ut.transform.matrix), K.matrix.decompose(K.position, K.quaternion, K.scale), K.projectionMatrix.fromArray(Ut.projectionMatrix), K.projectionMatrixInverse.copy(K.projectionMatrix).invert(), K.viewport.set(Kt.x, Kt.y, Kt.width, Kt.height), Ft === 0 && (M.matrix.copy(K.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), it === !0 && M.cameras.push(K);
        }
        const Pt = i.enabledFeatures;
        if (Pt && Pt.includes("depth-sensing")) {
          const Ft = u.getDepthInformation(bt[0]);
          Ft && Ft.isValid && Ft.texture && _.init(t, Ft, i.renderState);
        }
      }
      for (let bt = 0; bt < v.length; bt++) {
        const it = x[bt], Pt = v[bt];
        it !== null && Pt !== void 0 && Pt.update(it, nt, l || o);
      }
      xt && xt(X, nt), nt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: nt }), m = null;
    }
    const Jt = new Dd();
    Jt.setAnimationLoop(Ot), this.setAnimationLoop = function(X) {
      xt = X;
    }, this.dispose = function() {
    };
  }
}
const fi = /* @__PURE__ */ new Qe(), Zx = /* @__PURE__ */ new Dt();
function $x(r, t) {
  function e(g, p) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, Rd(r)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function i(g, p, y, v, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(g, p) : p.isMeshToonMaterial ? (s(g, p), u(g, p)) : p.isMeshPhongMaterial ? (s(g, p), h(g, p)) : p.isMeshStandardMaterial ? (s(g, p), d(g, p), p.isMeshPhysicalMaterial && f(g, p, x)) : p.isMeshMatcapMaterial ? (s(g, p), m(g, p)) : p.isMeshDepthMaterial ? s(g, p) : p.isMeshDistanceMaterial ? (s(g, p), _(g, p)) : p.isMeshNormalMaterial ? s(g, p) : p.isLineBasicMaterial ? (o(g, p), p.isLineDashedMaterial && a(g, p)) : p.isPointsMaterial ? c(g, p, y, v) : p.isSpriteMaterial ? l(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, e(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === Ve && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, e(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === Ve && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, e(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, e(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const y = t.get(p), v = y.envMap, x = y.envMapRotation;
    v && (g.envMap.value = v, fi.copy(x), fi.x *= -1, fi.y *= -1, fi.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (fi.y *= -1, fi.z *= -1), g.envMapRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(fi)), g.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, g.aoMapTransform));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, e(p.map, g.mapTransform));
  }
  function a(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function c(g, p, y, v) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * y, g.scale.value = v * 0.5, p.map && (g.map.value = p.map, e(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function l(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function h(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function d(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function f(g, p, y) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Ve && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = y.texture, g.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    const y = t.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(y.matrixWorld), g.nearDistance.value = y.shadow.camera.near, g.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Jx(r, t, e, n) {
  let i = {}, s = {}, o = [];
  const a = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(y, v) {
    const x = v.program;
    n.uniformBlockBinding(y, x);
  }
  function l(y, v) {
    let x = i[y.id];
    x === void 0 && (m(y), x = h(y), i[y.id] = x, y.addEventListener("dispose", g));
    const I = v.program;
    n.updateUBOMapping(y, I);
    const E = t.render.frame;
    s[y.id] !== E && (d(y), s[y.id] = E);
  }
  function h(y) {
    const v = u();
    y.__bindingPointIndex = v;
    const x = r.createBuffer(), I = y.__size, E = y.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, x), r.bufferData(r.UNIFORM_BUFFER, I, E), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, x), x;
  }
  function u() {
    for (let y = 0; y < a; y++)
      if (o.indexOf(y) === -1)
        return o.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const v = i[y.id], x = y.uniforms, I = y.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let E = 0, C = x.length; E < C; E++) {
      const R = Array.isArray(x[E]) ? x[E] : [x[E]];
      for (let S = 0, M = R.length; S < M; S++) {
        const L = R[S];
        if (f(L, E, S, I) === !0) {
          const D = L.__offset, U = Array.isArray(L.value) ? L.value : [L.value];
          let B = 0;
          for (let Y = 0; Y < U.length; Y++) {
            const H = U[Y], j = _(H);
            typeof H == "number" || typeof H == "boolean" ? (L.__data[0] = H, r.bufferSubData(r.UNIFORM_BUFFER, D + B, L.__data)) : H.isMatrix3 ? (L.__data[0] = H.elements[0], L.__data[1] = H.elements[1], L.__data[2] = H.elements[2], L.__data[3] = 0, L.__data[4] = H.elements[3], L.__data[5] = H.elements[4], L.__data[6] = H.elements[5], L.__data[7] = 0, L.__data[8] = H.elements[6], L.__data[9] = H.elements[7], L.__data[10] = H.elements[8], L.__data[11] = 0) : (H.toArray(L.__data, B), B += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, D, L.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function f(y, v, x, I) {
    const E = y.value, C = v + "_" + x;
    if (I[C] === void 0)
      return typeof E == "number" || typeof E == "boolean" ? I[C] = E : I[C] = E.clone(), !0;
    {
      const R = I[C];
      if (typeof E == "number" || typeof E == "boolean") {
        if (R !== E)
          return I[C] = E, !0;
      } else if (R.equals(E) === !1)
        return R.copy(E), !0;
    }
    return !1;
  }
  function m(y) {
    const v = y.uniforms;
    let x = 0;
    const I = 16;
    for (let C = 0, R = v.length; C < R; C++) {
      const S = Array.isArray(v[C]) ? v[C] : [v[C]];
      for (let M = 0, L = S.length; M < L; M++) {
        const D = S[M], U = Array.isArray(D.value) ? D.value : [D.value];
        for (let B = 0, Y = U.length; B < Y; B++) {
          const H = U[B], j = _(H), G = x % I, at = G % j.boundary, dt = G + at;
          x += at, dt !== 0 && I - dt < j.storage && (x += I - dt), D.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), D.__offset = x, x += j.storage;
        }
      }
    }
    const E = x % I;
    return E > 0 && (x += I - E), y.__size = x, y.__cache = {}, this;
  }
  function _(y) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" || typeof y == "boolean" ? (v.boundary = 4, v.storage = 4) : y.isVector2 ? (v.boundary = 8, v.storage = 8) : y.isVector3 || y.isColor ? (v.boundary = 16, v.storage = 12) : y.isVector4 ? (v.boundary = 16, v.storage = 16) : y.isMatrix3 ? (v.boundary = 48, v.storage = 48) : y.isMatrix4 ? (v.boundary = 64, v.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), v;
  }
  function g(y) {
    const v = y.target;
    v.removeEventListener("dispose", g);
    const x = o.indexOf(v.__bindingPointIndex);
    o.splice(x, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function p() {
    for (const y in i)
      r.deleteBuffer(i[y]);
    o = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
class kd {
  constructor(t = {}) {
    const {
      canvas: e = Ed(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reverseDepthBuffer: d = !1
    } = t;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = o;
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let g = null, p = null;
    const y = [], v = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Be, this.toneMapping = zn, this.toneMappingExposure = 1;
    const x = this;
    let I = !1, E = 0, C = 0, R = null, S = -1, M = null;
    const L = new Qt(), D = new Qt();
    let U = null;
    const B = new ut(0);
    let Y = 0, H = e.width, j = e.height, G = 1, at = null, dt = null;
    const xt = new Qt(0, 0, H, j), Ot = new Qt(0, 0, H, j);
    let Jt = !1;
    const X = new xr();
    let nt = !1, bt = !1;
    const it = new Dt(), Pt = new Dt(), Ft = new T(), Ut = new Qt(), Kt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let K = !1;
    function st() {
      return R === null ? G : 1;
    }
    let P = n;
    function Ct(w, O) {
      return e.getContext(w, O);
    }
    try {
      const w = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r170"), e.addEventListener("webglcontextlost", J, !1), e.addEventListener("webglcontextrestored", mt, !1), e.addEventListener("webglcontextcreationerror", ft, !1), P === null) {
        const O = "webgl2";
        if (P = Ct(O, w), P === null)
          throw Ct(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (w) {
      throw console.error("THREE.WebGLRenderer: " + w.message), w;
    }
    let tt, yt, ot, It, gt, A, b, z, Z, Q, $, wt, lt, _t, Yt, et, vt, Lt, Nt, Mt, $t, Xt, ae, N;
    function ht() {
      tt = new n0(P), tt.init(), Xt = new Bd(P, tt), yt = new J_(P, tt, t, Xt), ot = new Ox(P, tt), yt.reverseDepthBuffer && d && ot.buffers.depth.setReversed(!0), It = new r0(P), gt = new Sx(), A = new Hx(P, tt, ot, gt, yt, Xt, It), b = new j_(x), z = new e0(x), Z = new dm(P), ae = new Z_(P, Z), Q = new i0(P, Z, It, ae), $ = new a0(P, Q, Z, It), Nt = new o0(P, yt, A), et = new K_(gt), wt = new bx(x, b, z, tt, yt, ae, et), lt = new $x(x, gt), _t = new Ex(), Yt = new Ix(tt), Lt = new q_(x, b, z, ot, $, f, c), vt = new Ux(x, $, yt), N = new Jx(P, It, yt, ot), Mt = new $_(P, tt, It), $t = new s0(P, tt, It), It.programs = wt.programs, x.capabilities = yt, x.extensions = tt, x.properties = gt, x.renderLists = _t, x.shadowMap = vt, x.state = ot, x.info = It;
    }
    ht();
    const W = new qx(x, P);
    this.xr = W, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const w = tt.get("WEBGL_lose_context");
      w && w.loseContext();
    }, this.forceContextRestore = function() {
      const w = tt.get("WEBGL_lose_context");
      w && w.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(w) {
      w !== void 0 && (G = w, this.setSize(H, j, !1));
    }, this.getSize = function(w) {
      return w.set(H, j);
    }, this.setSize = function(w, O, k = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = w, j = O, e.width = Math.floor(w * G), e.height = Math.floor(O * G), k === !0 && (e.style.width = w + "px", e.style.height = O + "px"), this.setViewport(0, 0, w, O);
    }, this.getDrawingBufferSize = function(w) {
      return w.set(H * G, j * G).floor();
    }, this.setDrawingBufferSize = function(w, O, k) {
      H = w, j = O, G = k, e.width = Math.floor(w * k), e.height = Math.floor(O * k), this.setViewport(0, 0, w, O);
    }, this.getCurrentViewport = function(w) {
      return w.copy(L);
    }, this.getViewport = function(w) {
      return w.copy(xt);
    }, this.setViewport = function(w, O, k, V) {
      w.isVector4 ? xt.set(w.x, w.y, w.z, w.w) : xt.set(w, O, k, V), ot.viewport(L.copy(xt).multiplyScalar(G).round());
    }, this.getScissor = function(w) {
      return w.copy(Ot);
    }, this.setScissor = function(w, O, k, V) {
      w.isVector4 ? Ot.set(w.x, w.y, w.z, w.w) : Ot.set(w, O, k, V), ot.scissor(D.copy(Ot).multiplyScalar(G).round());
    }, this.getScissorTest = function() {
      return Jt;
    }, this.setScissorTest = function(w) {
      ot.setScissorTest(Jt = w);
    }, this.setOpaqueSort = function(w) {
      at = w;
    }, this.setTransparentSort = function(w) {
      dt = w;
    }, this.getClearColor = function(w) {
      return w.copy(Lt.getClearColor());
    }, this.setClearColor = function() {
      Lt.setClearColor.apply(Lt, arguments);
    }, this.getClearAlpha = function() {
      return Lt.getClearAlpha();
    }, this.setClearAlpha = function() {
      Lt.setClearAlpha.apply(Lt, arguments);
    }, this.clear = function(w = !0, O = !0, k = !0) {
      let V = 0;
      if (w) {
        let F = !1;
        if (R !== null) {
          const rt = R.texture.format;
          F = rt === ma || rt === pa || rt === mr;
        }
        if (F) {
          const rt = R.texture.type, pt = rt === Sn || rt === Hn || rt === ms || rt === Ni || rt === ua || rt === da, Et = Lt.getClearColor(), Tt = Lt.getClearAlpha(), Bt = Et.r, Gt = Et.g, At = Et.b;
          pt ? (m[0] = Bt, m[1] = Gt, m[2] = At, m[3] = Tt, P.clearBufferuiv(P.COLOR, 0, m)) : (_[0] = Bt, _[1] = Gt, _[2] = At, _[3] = Tt, P.clearBufferiv(P.COLOR, 0, _));
        } else
          V |= P.COLOR_BUFFER_BIT;
      }
      O && (V |= P.DEPTH_BUFFER_BIT), k && (V |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), P.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", J, !1), e.removeEventListener("webglcontextrestored", mt, !1), e.removeEventListener("webglcontextcreationerror", ft, !1), _t.dispose(), Yt.dispose(), gt.dispose(), b.dispose(), z.dispose(), $.dispose(), ae.dispose(), N.dispose(), wt.dispose(), W.dispose(), W.removeEventListener("sessionstart", kl), W.removeEventListener("sessionend", Vl), ai.stop();
    };
    function J(w) {
      w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0;
    }
    function mt() {
      console.log("THREE.WebGLRenderer: Context Restored."), I = !1;
      const w = It.autoReset, O = vt.enabled, k = vt.autoUpdate, V = vt.needsUpdate, F = vt.type;
      ht(), It.autoReset = w, vt.enabled = O, vt.autoUpdate = k, vt.needsUpdate = V, vt.type = F;
    }
    function ft(w) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage);
    }
    function Ht(w) {
      const O = w.target;
      O.removeEventListener("dispose", Ht), de(O);
    }
    function de(w) {
      Ae(w), gt.remove(w);
    }
    function Ae(w) {
      const O = gt.get(w).programs;
      O !== void 0 && (O.forEach(function(k) {
        wt.releaseProgram(k);
      }), w.isShaderMaterial && wt.releaseShaderCache(w));
    }
    this.renderBufferDirect = function(w, O, k, V, F, rt) {
      O === null && (O = Kt);
      const pt = F.isMesh && F.matrixWorld.determinant() < 0, Et = Of(w, O, k, V, F);
      ot.setMaterial(V, pt);
      let Tt = k.index, Bt = 1;
      if (V.wireframe === !0) {
        if (Tt = Q.getWireframeAttribute(k), Tt === void 0) return;
        Bt = 2;
      }
      const Gt = k.drawRange, At = k.attributes.position;
      let te = Gt.start * Bt, ce = (Gt.start + Gt.count) * Bt;
      rt !== null && (te = Math.max(te, rt.start * Bt), ce = Math.min(ce, (rt.start + rt.count) * Bt)), Tt !== null ? (te = Math.max(te, 0), ce = Math.min(ce, Tt.count)) : At != null && (te = Math.max(te, 0), ce = Math.min(ce, At.count));
      const le = ce - te;
      if (le < 0 || le === 1 / 0) return;
      ae.setup(F, V, Et, k, Tt);
      let He, ee = Mt;
      if (Tt !== null && (He = Z.get(Tt), ee = $t, ee.setIndex(He)), F.isMesh)
        V.wireframe === !0 ? (ot.setLineWidth(V.wireframeLinewidth * st()), ee.setMode(P.LINES)) : ee.setMode(P.TRIANGLES);
      else if (F.isLine) {
        let Rt = V.linewidth;
        Rt === void 0 && (Rt = 1), ot.setLineWidth(Rt * st()), F.isLineSegments ? ee.setMode(P.LINES) : F.isLineLoop ? ee.setMode(P.LINE_LOOP) : ee.setMode(P.LINE_STRIP);
      } else F.isPoints ? ee.setMode(P.POINTS) : F.isSprite && ee.setMode(P.TRIANGLES);
      if (F.isBatchedMesh)
        if (F._multiDrawInstances !== null)
          ee.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances);
        else if (tt.get("WEBGL_multi_draw"))
          ee.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
        else {
          const Rt = F._multiDrawStarts, An = F._multiDrawCounts, ne = F._multiDrawCount, rn = Tt ? Z.get(Tt).bytesPerElement : 1, Wi = gt.get(V).currentProgram.getUniforms();
          for (let $e = 0; $e < ne; $e++)
            Wi.setValue(P, "_gl_DrawID", $e), ee.render(Rt[$e] / rn, An[$e]);
        }
      else if (F.isInstancedMesh)
        ee.renderInstances(te, le, F.count);
      else if (k.isInstancedBufferGeometry) {
        const Rt = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, An = Math.min(k.instanceCount, Rt);
        ee.renderInstances(te, le, An);
      } else
        ee.render(te, le);
    };
    function ie(w, O, k) {
      w.transparent === !0 && w.side === hn && w.forceSinglePass === !1 ? (w.side = Ve, w.needsUpdate = !0, Cr(w, O, k), w.side = bn, w.needsUpdate = !0, Cr(w, O, k), w.side = hn) : Cr(w, O, k);
    }
    this.compile = function(w, O, k = null) {
      k === null && (k = w), p = Yt.get(k), p.init(O), v.push(p), k.traverseVisible(function(F) {
        F.isLight && F.layers.test(O.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F));
      }), w !== k && w.traverseVisible(function(F) {
        F.isLight && F.layers.test(O.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F));
      }), p.setupLights();
      const V = /* @__PURE__ */ new Set();
      return w.traverse(function(F) {
        if (!(F.isMesh || F.isPoints || F.isLine || F.isSprite))
          return;
        const rt = F.material;
        if (rt)
          if (Array.isArray(rt))
            for (let pt = 0; pt < rt.length; pt++) {
              const Et = rt[pt];
              ie(Et, k, F), V.add(Et);
            }
          else
            ie(rt, k, F), V.add(rt);
      }), v.pop(), p = null, V;
    }, this.compileAsync = function(w, O, k = null) {
      const V = this.compile(w, O, k);
      return new Promise((F) => {
        function rt() {
          if (V.forEach(function(pt) {
            gt.get(pt).currentProgram.isReady() && V.delete(pt);
          }), V.size === 0) {
            F(w);
            return;
          }
          setTimeout(rt, 10);
        }
        tt.get("KHR_parallel_shader_compile") !== null ? rt() : setTimeout(rt, 10);
      });
    };
    let sn = null;
    function Tn(w) {
      sn && sn(w);
    }
    function kl() {
      ai.stop();
    }
    function Vl() {
      ai.start();
    }
    const ai = new Dd();
    ai.setAnimationLoop(Tn), typeof self < "u" && ai.setContext(self), this.setAnimationLoop = function(w) {
      sn = w, W.setAnimationLoop(w), w === null ? ai.stop() : ai.start();
    }, W.addEventListener("sessionstart", kl), W.addEventListener("sessionend", Vl), this.render = function(w, O) {
      if (O !== void 0 && O.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (I === !0) return;
      if (w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(O), O = W.getCamera()), w.isScene === !0 && w.onBeforeRender(x, w, O, R), p = Yt.get(w, v.length), p.init(O), v.push(p), Pt.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), X.setFromProjectionMatrix(Pt), bt = this.localClippingEnabled, nt = et.init(this.clippingPlanes, bt), g = _t.get(w, y.length), g.init(), y.push(g), W.enabled === !0 && W.isPresenting === !0) {
        const rt = x.xr.getDepthSensingMesh();
        rt !== null && ka(rt, O, -1 / 0, x.sortObjects);
      }
      ka(w, O, 0, x.sortObjects), g.finish(), x.sortObjects === !0 && g.sort(at, dt), K = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, K && Lt.addToRenderList(g, w), this.info.render.frame++, nt === !0 && et.beginShadows();
      const k = p.state.shadowsArray;
      vt.render(k, w, O), nt === !0 && et.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const V = g.opaque, F = g.transmissive;
      if (p.setupLights(), O.isArrayCamera) {
        const rt = O.cameras;
        if (F.length > 0)
          for (let pt = 0, Et = rt.length; pt < Et; pt++) {
            const Tt = rt[pt];
            Gl(V, F, w, Tt);
          }
        K && Lt.render(w);
        for (let pt = 0, Et = rt.length; pt < Et; pt++) {
          const Tt = rt[pt];
          Hl(g, w, Tt, Tt.viewport);
        }
      } else
        F.length > 0 && Gl(V, F, w, O), K && Lt.render(w), Hl(g, w, O);
      R !== null && (A.updateMultisampleRenderTarget(R), A.updateRenderTargetMipmap(R)), w.isScene === !0 && w.onAfterRender(x, w, O), ae.resetDefaultState(), S = -1, M = null, v.pop(), v.length > 0 ? (p = v[v.length - 1], nt === !0 && et.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, y.pop(), y.length > 0 ? g = y[y.length - 1] : g = null;
    };
    function ka(w, O, k, V) {
      if (w.visible === !1) return;
      if (w.layers.test(O.layers)) {
        if (w.isGroup)
          k = w.renderOrder;
        else if (w.isLOD)
          w.autoUpdate === !0 && w.update(O);
        else if (w.isLight)
          p.pushLight(w), w.castShadow && p.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || X.intersectsSprite(w)) {
            V && Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);
            const pt = $.update(w), Et = w.material;
            Et.visible && g.push(w, pt, Et, k, Ut.z, null);
          }
        } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || X.intersectsObject(w))) {
          const pt = $.update(w), Et = w.material;
          if (V && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), Ut.copy(w.boundingSphere.center)) : (pt.boundingSphere === null && pt.computeBoundingSphere(), Ut.copy(pt.boundingSphere.center)), Ut.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)), Array.isArray(Et)) {
            const Tt = pt.groups;
            for (let Bt = 0, Gt = Tt.length; Bt < Gt; Bt++) {
              const At = Tt[Bt], te = Et[At.materialIndex];
              te && te.visible && g.push(w, pt, te, k, Ut.z, At);
            }
          } else Et.visible && g.push(w, pt, Et, k, Ut.z, null);
        }
      }
      const rt = w.children;
      for (let pt = 0, Et = rt.length; pt < Et; pt++)
        ka(rt[pt], O, k, V);
    }
    function Hl(w, O, k, V) {
      const F = w.opaque, rt = w.transmissive, pt = w.transparent;
      p.setupLightsView(k), nt === !0 && et.setGlobalState(x.clippingPlanes, k), V && ot.viewport(L.copy(V)), F.length > 0 && Ar(F, O, k), rt.length > 0 && Ar(rt, O, k), pt.length > 0 && Ar(pt, O, k), ot.buffers.depth.setTest(!0), ot.buffers.depth.setMask(!0), ot.buffers.color.setMask(!0), ot.setPolygonOffset(!1);
    }
    function Gl(w, O, k, V) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[V.id] === void 0 && (p.state.transmissionRenderTarget[V.id] = new dn(1, 1, {
        generateMipmaps: !0,
        type: tt.has("EXT_color_buffer_half_float") || tt.has("EXT_color_buffer_float") ? vs : Sn,
        minFilter: yn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qt.workingColorSpace
      }));
      const rt = p.state.transmissionRenderTarget[V.id], pt = V.viewport || L;
      rt.setSize(pt.z, pt.w);
      const Et = x.getRenderTarget();
      x.setRenderTarget(rt), x.getClearColor(B), Y = x.getClearAlpha(), Y < 1 && x.setClearColor(16777215, 0.5), x.clear(), K && Lt.render(k);
      const Tt = x.toneMapping;
      x.toneMapping = zn;
      const Bt = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), p.setupLightsView(V), nt === !0 && et.setGlobalState(x.clippingPlanes, V), Ar(w, k, V), A.updateMultisampleRenderTarget(rt), A.updateRenderTargetMipmap(rt), tt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Gt = !1;
        for (let At = 0, te = O.length; At < te; At++) {
          const ce = O[At], le = ce.object, He = ce.geometry, ee = ce.material, Rt = ce.group;
          if (ee.side === hn && le.layers.test(V.layers)) {
            const An = ee.side;
            ee.side = Ve, ee.needsUpdate = !0, Wl(le, k, V, He, ee, Rt), ee.side = An, ee.needsUpdate = !0, Gt = !0;
          }
        }
        Gt === !0 && (A.updateMultisampleRenderTarget(rt), A.updateRenderTargetMipmap(rt));
      }
      x.setRenderTarget(Et), x.setClearColor(B, Y), Bt !== void 0 && (V.viewport = Bt), x.toneMapping = Tt;
    }
    function Ar(w, O, k) {
      const V = O.isScene === !0 ? O.overrideMaterial : null;
      for (let F = 0, rt = w.length; F < rt; F++) {
        const pt = w[F], Et = pt.object, Tt = pt.geometry, Bt = V === null ? pt.material : V, Gt = pt.group;
        Et.layers.test(k.layers) && Wl(Et, O, k, Tt, Bt, Gt);
      }
    }
    function Wl(w, O, k, V, F, rt) {
      w.onBeforeRender(x, O, k, V, F, rt), w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), F.onBeforeRender(x, O, k, V, w, rt), F.transparent === !0 && F.side === hn && F.forceSinglePass === !1 ? (F.side = Ve, F.needsUpdate = !0, x.renderBufferDirect(k, O, V, F, w, rt), F.side = bn, F.needsUpdate = !0, x.renderBufferDirect(k, O, V, F, w, rt), F.side = hn) : x.renderBufferDirect(k, O, V, F, w, rt), w.onAfterRender(x, O, k, V, F, rt);
    }
    function Cr(w, O, k) {
      O.isScene !== !0 && (O = Kt);
      const V = gt.get(w), F = p.state.lights, rt = p.state.shadowsArray, pt = F.state.version, Et = wt.getParameters(w, F.state, rt, O, k), Tt = wt.getProgramCacheKey(Et);
      let Bt = V.programs;
      V.environment = w.isMeshStandardMaterial ? O.environment : null, V.fog = O.fog, V.envMap = (w.isMeshStandardMaterial ? z : b).get(w.envMap || V.environment), V.envMapRotation = V.environment !== null && w.envMap === null ? O.environmentRotation : w.envMapRotation, Bt === void 0 && (w.addEventListener("dispose", Ht), Bt = /* @__PURE__ */ new Map(), V.programs = Bt);
      let Gt = Bt.get(Tt);
      if (Gt !== void 0) {
        if (V.currentProgram === Gt && V.lightsStateVersion === pt)
          return Yl(w, Et), Gt;
      } else
        Et.uniforms = wt.getUniforms(w), w.onBeforeCompile(Et, x), Gt = wt.acquireProgram(Et, Tt), Bt.set(Tt, Gt), V.uniforms = Et.uniforms;
      const At = V.uniforms;
      return (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (At.clippingPlanes = et.uniform), Yl(w, Et), V.needsLights = Bf(w), V.lightsStateVersion = pt, V.needsLights && (At.ambientLightColor.value = F.state.ambient, At.lightProbe.value = F.state.probe, At.directionalLights.value = F.state.directional, At.directionalLightShadows.value = F.state.directionalShadow, At.spotLights.value = F.state.spot, At.spotLightShadows.value = F.state.spotShadow, At.rectAreaLights.value = F.state.rectArea, At.ltc_1.value = F.state.rectAreaLTC1, At.ltc_2.value = F.state.rectAreaLTC2, At.pointLights.value = F.state.point, At.pointLightShadows.value = F.state.pointShadow, At.hemisphereLights.value = F.state.hemi, At.directionalShadowMap.value = F.state.directionalShadowMap, At.directionalShadowMatrix.value = F.state.directionalShadowMatrix, At.spotShadowMap.value = F.state.spotShadowMap, At.spotLightMatrix.value = F.state.spotLightMatrix, At.spotLightMap.value = F.state.spotLightMap, At.pointShadowMap.value = F.state.pointShadowMap, At.pointShadowMatrix.value = F.state.pointShadowMatrix), V.currentProgram = Gt, V.uniformsList = null, Gt;
    }
    function Xl(w) {
      if (w.uniformsList === null) {
        const O = w.currentProgram.getUniforms();
        w.uniformsList = So.seqWithValue(O.seq, w.uniforms);
      }
      return w.uniformsList;
    }
    function Yl(w, O) {
      const k = gt.get(w);
      k.outputColorSpace = O.outputColorSpace, k.batching = O.batching, k.batchingColor = O.batchingColor, k.instancing = O.instancing, k.instancingColor = O.instancingColor, k.instancingMorph = O.instancingMorph, k.skinning = O.skinning, k.morphTargets = O.morphTargets, k.morphNormals = O.morphNormals, k.morphColors = O.morphColors, k.morphTargetsCount = O.morphTargetsCount, k.numClippingPlanes = O.numClippingPlanes, k.numIntersection = O.numClipIntersection, k.vertexAlphas = O.vertexAlphas, k.vertexTangents = O.vertexTangents, k.toneMapping = O.toneMapping;
    }
    function Of(w, O, k, V, F) {
      O.isScene !== !0 && (O = Kt), A.resetTextureUnits();
      const rt = O.fog, pt = V.isMeshStandardMaterial ? O.environment : null, Et = R === null ? x.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : zi, Tt = (V.isMeshStandardMaterial ? z : b).get(V.envMap || pt), Bt = V.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Gt = !!k.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), At = !!k.morphAttributes.position, te = !!k.morphAttributes.normal, ce = !!k.morphAttributes.color;
      let le = zn;
      V.toneMapped && (R === null || R.isXRRenderTarget === !0) && (le = x.toneMapping);
      const He = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, ee = He !== void 0 ? He.length : 0, Rt = gt.get(V), An = p.state.lights;
      if (nt === !0 && (bt === !0 || w !== M)) {
        const tn = w === M && V.id === S;
        et.setState(V, w, tn);
      }
      let ne = !1;
      V.version === Rt.__version ? (Rt.needsLights && Rt.lightsStateVersion !== An.state.version || Rt.outputColorSpace !== Et || F.isBatchedMesh && Rt.batching === !1 || !F.isBatchedMesh && Rt.batching === !0 || F.isBatchedMesh && Rt.batchingColor === !0 && F.colorTexture === null || F.isBatchedMesh && Rt.batchingColor === !1 && F.colorTexture !== null || F.isInstancedMesh && Rt.instancing === !1 || !F.isInstancedMesh && Rt.instancing === !0 || F.isSkinnedMesh && Rt.skinning === !1 || !F.isSkinnedMesh && Rt.skinning === !0 || F.isInstancedMesh && Rt.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Rt.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && Rt.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && Rt.instancingMorph === !1 && F.morphTexture !== null || Rt.envMap !== Tt || V.fog === !0 && Rt.fog !== rt || Rt.numClippingPlanes !== void 0 && (Rt.numClippingPlanes !== et.numPlanes || Rt.numIntersection !== et.numIntersection) || Rt.vertexAlphas !== Bt || Rt.vertexTangents !== Gt || Rt.morphTargets !== At || Rt.morphNormals !== te || Rt.morphColors !== ce || Rt.toneMapping !== le || Rt.morphTargetsCount !== ee) && (ne = !0) : (ne = !0, Rt.__version = V.version);
      let rn = Rt.currentProgram;
      ne === !0 && (rn = Cr(V, O, F));
      let Wi = !1, $e = !1, bs = !1;
      const he = rn.getUniforms(), _n = Rt.uniforms;
      if (ot.useProgram(rn.program) && (Wi = !0, $e = !0, bs = !0), V.id !== S && (S = V.id, $e = !0), Wi || M !== w) {
        ot.buffers.depth.getReversed() ? (it.copy(w.projectionMatrix), Fp(it), Bp(it), he.setValue(P, "projectionMatrix", it)) : he.setValue(P, "projectionMatrix", w.projectionMatrix), he.setValue(P, "viewMatrix", w.matrixWorldInverse);
        const Yn = he.map.cameraPosition;
        Yn !== void 0 && Yn.setValue(P, Ft.setFromMatrixPosition(w.matrixWorld)), yt.logarithmicDepthBuffer && he.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(w.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && he.setValue(P, "isOrthographic", w.isOrthographicCamera === !0), M !== w && (M = w, $e = !0, bs = !0);
      }
      if (F.isSkinnedMesh) {
        he.setOptional(P, F, "bindMatrix"), he.setOptional(P, F, "bindMatrixInverse");
        const tn = F.skeleton;
        tn && (tn.boneTexture === null && tn.computeBoneTexture(), he.setValue(P, "boneTexture", tn.boneTexture, A));
      }
      F.isBatchedMesh && (he.setOptional(P, F, "batchingTexture"), he.setValue(P, "batchingTexture", F._matricesTexture, A), he.setOptional(P, F, "batchingIdTexture"), he.setValue(P, "batchingIdTexture", F._indirectTexture, A), he.setOptional(P, F, "batchingColorTexture"), F._colorsTexture !== null && he.setValue(P, "batchingColorTexture", F._colorsTexture, A));
      const Ss = k.morphAttributes;
      if ((Ss.position !== void 0 || Ss.normal !== void 0 || Ss.color !== void 0) && Nt.update(F, k, rn), ($e || Rt.receiveShadow !== F.receiveShadow) && (Rt.receiveShadow = F.receiveShadow, he.setValue(P, "receiveShadow", F.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (_n.envMap.value = Tt, _n.flipEnvMap.value = Tt.isCubeTexture && Tt.isRenderTargetTexture === !1 ? -1 : 1), V.isMeshStandardMaterial && V.envMap === null && O.environment !== null && (_n.envMapIntensity.value = O.environmentIntensity), $e && (he.setValue(P, "toneMappingExposure", x.toneMappingExposure), Rt.needsLights && Ff(_n, bs), rt && V.fog === !0 && lt.refreshFogUniforms(_n, rt), lt.refreshMaterialUniforms(_n, V, G, j, p.state.transmissionRenderTarget[w.id]), So.upload(P, Xl(Rt), _n, A)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (So.upload(P, Xl(Rt), _n, A), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && he.setValue(P, "center", F.center), he.setValue(P, "modelViewMatrix", F.modelViewMatrix), he.setValue(P, "normalMatrix", F.normalMatrix), he.setValue(P, "modelMatrix", F.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) {
        const tn = V.uniformsGroups;
        for (let Yn = 0, qn = tn.length; Yn < qn; Yn++) {
          const ql = tn[Yn];
          N.update(ql, rn), N.bind(ql, rn);
        }
      }
      return rn;
    }
    function Ff(w, O) {
      w.ambientLightColor.needsUpdate = O, w.lightProbe.needsUpdate = O, w.directionalLights.needsUpdate = O, w.directionalLightShadows.needsUpdate = O, w.pointLights.needsUpdate = O, w.pointLightShadows.needsUpdate = O, w.spotLights.needsUpdate = O, w.spotLightShadows.needsUpdate = O, w.rectAreaLights.needsUpdate = O, w.hemisphereLights.needsUpdate = O;
    }
    function Bf(w) {
      return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return E;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return R;
    }, this.setRenderTargetTextures = function(w, O, k) {
      gt.get(w.texture).__webglTexture = O, gt.get(w.depthTexture).__webglTexture = k;
      const V = gt.get(w);
      V.__hasExternalTextures = !0, V.__autoAllocateDepthBuffer = k === void 0, V.__autoAllocateDepthBuffer || tt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), V.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(w, O) {
      const k = gt.get(w);
      k.__webglFramebuffer = O, k.__useDefaultFramebuffer = O === void 0;
    }, this.setRenderTarget = function(w, O = 0, k = 0) {
      R = w, E = O, C = k;
      let V = !0, F = null, rt = !1, pt = !1;
      if (w) {
        const Tt = gt.get(w);
        if (Tt.__useDefaultFramebuffer !== void 0)
          ot.bindFramebuffer(P.FRAMEBUFFER, null), V = !1;
        else if (Tt.__webglFramebuffer === void 0)
          A.setupRenderTarget(w);
        else if (Tt.__hasExternalTextures)
          A.rebindTextures(w, gt.get(w.texture).__webglTexture, gt.get(w.depthTexture).__webglTexture);
        else if (w.depthBuffer) {
          const At = w.depthTexture;
          if (Tt.__boundDepthTexture !== At) {
            if (At !== null && gt.has(At) && (w.width !== At.image.width || w.height !== At.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            A.setupDepthRenderbuffer(w);
          }
        }
        const Bt = w.texture;
        (Bt.isData3DTexture || Bt.isDataArrayTexture || Bt.isCompressedArrayTexture) && (pt = !0);
        const Gt = gt.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget ? (Array.isArray(Gt[O]) ? F = Gt[O][k] : F = Gt[O], rt = !0) : w.samples > 0 && A.useMultisampledRTT(w) === !1 ? F = gt.get(w).__webglMultisampledFramebuffer : Array.isArray(Gt) ? F = Gt[k] : F = Gt, L.copy(w.viewport), D.copy(w.scissor), U = w.scissorTest;
      } else
        L.copy(xt).multiplyScalar(G).floor(), D.copy(Ot).multiplyScalar(G).floor(), U = Jt;
      if (ot.bindFramebuffer(P.FRAMEBUFFER, F) && V && ot.drawBuffers(w, F), ot.viewport(L), ot.scissor(D), ot.setScissorTest(U), rt) {
        const Tt = gt.get(w.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + O, Tt.__webglTexture, k);
      } else if (pt) {
        const Tt = gt.get(w.texture), Bt = O || 0;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, Tt.__webglTexture, k || 0, Bt);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(w, O, k, V, F, rt, pt) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Et = gt.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && pt !== void 0 && (Et = Et[pt]), Et) {
        ot.bindFramebuffer(P.FRAMEBUFFER, Et);
        try {
          const Tt = w.texture, Bt = Tt.format, Gt = Tt.type;
          if (!yt.textureFormatReadable(Bt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!yt.textureTypeReadable(Gt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          O >= 0 && O <= w.width - V && k >= 0 && k <= w.height - F && P.readPixels(O, k, V, F, Xt.convert(Bt), Xt.convert(Gt), rt);
        } finally {
          const Tt = R !== null ? gt.get(R).__webglFramebuffer : null;
          ot.bindFramebuffer(P.FRAMEBUFFER, Tt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(w, O, k, V, F, rt, pt) {
      if (!(w && w.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Et = gt.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && pt !== void 0 && (Et = Et[pt]), Et) {
        const Tt = w.texture, Bt = Tt.format, Gt = Tt.type;
        if (!yt.textureFormatReadable(Bt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!yt.textureTypeReadable(Gt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (O >= 0 && O <= w.width - V && k >= 0 && k <= w.height - F) {
          ot.bindFramebuffer(P.FRAMEBUFFER, Et);
          const At = P.createBuffer();
          P.bindBuffer(P.PIXEL_PACK_BUFFER, At), P.bufferData(P.PIXEL_PACK_BUFFER, rt.byteLength, P.STREAM_READ), P.readPixels(O, k, V, F, Xt.convert(Bt), Xt.convert(Gt), 0);
          const te = R !== null ? gt.get(R).__webglFramebuffer : null;
          ot.bindFramebuffer(P.FRAMEBUFFER, te);
          const ce = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return P.flush(), await Op(P, ce, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, At), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, rt), P.deleteBuffer(At), P.deleteSync(ce), rt;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(w, O = null, k = 0) {
      w.isTexture !== !0 && (Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."), O = arguments[0] || null, w = arguments[1]);
      const V = Math.pow(2, -k), F = Math.floor(w.image.width * V), rt = Math.floor(w.image.height * V), pt = O !== null ? O.x : 0, Et = O !== null ? O.y : 0;
      A.setTexture2D(w, 0), P.copyTexSubImage2D(P.TEXTURE_2D, k, 0, 0, pt, Et, F, rt), ot.unbindTexture();
    }, this.copyTextureToTexture = function(w, O, k = null, V = null, F = 0) {
      w.isTexture !== !0 && (Os("WebGLRenderer: copyTextureToTexture function signature has changed."), V = arguments[0] || null, w = arguments[1], O = arguments[2], F = arguments[3] || 0, k = null);
      let rt, pt, Et, Tt, Bt, Gt, At, te, ce;
      const le = w.isCompressedTexture ? w.mipmaps[F] : w.image;
      k !== null ? (rt = k.max.x - k.min.x, pt = k.max.y - k.min.y, Et = k.isBox3 ? k.max.z - k.min.z : 1, Tt = k.min.x, Bt = k.min.y, Gt = k.isBox3 ? k.min.z : 0) : (rt = le.width, pt = le.height, Et = le.depth || 1, Tt = 0, Bt = 0, Gt = 0), V !== null ? (At = V.x, te = V.y, ce = V.z) : (At = 0, te = 0, ce = 0);
      const He = Xt.convert(O.format), ee = Xt.convert(O.type);
      let Rt;
      O.isData3DTexture ? (A.setTexture3D(O, 0), Rt = P.TEXTURE_3D) : O.isDataArrayTexture || O.isCompressedArrayTexture ? (A.setTexture2DArray(O, 0), Rt = P.TEXTURE_2D_ARRAY) : (A.setTexture2D(O, 0), Rt = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, O.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, O.unpackAlignment);
      const An = P.getParameter(P.UNPACK_ROW_LENGTH), ne = P.getParameter(P.UNPACK_IMAGE_HEIGHT), rn = P.getParameter(P.UNPACK_SKIP_PIXELS), Wi = P.getParameter(P.UNPACK_SKIP_ROWS), $e = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, le.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, le.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Tt), P.pixelStorei(P.UNPACK_SKIP_ROWS, Bt), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Gt);
      const bs = w.isDataArrayTexture || w.isData3DTexture, he = O.isDataArrayTexture || O.isData3DTexture;
      if (w.isRenderTargetTexture || w.isDepthTexture) {
        const _n = gt.get(w), Ss = gt.get(O), tn = gt.get(_n.__renderTarget), Yn = gt.get(Ss.__renderTarget);
        ot.bindFramebuffer(P.READ_FRAMEBUFFER, tn.__webglFramebuffer), ot.bindFramebuffer(P.DRAW_FRAMEBUFFER, Yn.__webglFramebuffer);
        for (let qn = 0; qn < Et; qn++)
          bs && P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, gt.get(w).__webglTexture, F, Gt + qn), w.isDepthTexture ? (he && P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, gt.get(O).__webglTexture, F, ce + qn), P.blitFramebuffer(Tt, Bt, rt, pt, At, te, rt, pt, P.DEPTH_BUFFER_BIT, P.NEAREST)) : he ? P.copyTexSubImage3D(Rt, F, At, te, ce + qn, Tt, Bt, rt, pt) : P.copyTexSubImage2D(Rt, F, At, te, ce + qn, Tt, Bt, rt, pt);
        ot.bindFramebuffer(P.READ_FRAMEBUFFER, null), ot.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else
        he ? w.isDataTexture || w.isData3DTexture ? P.texSubImage3D(Rt, F, At, te, ce, rt, pt, Et, He, ee, le.data) : O.isCompressedArrayTexture ? P.compressedTexSubImage3D(Rt, F, At, te, ce, rt, pt, Et, He, le.data) : P.texSubImage3D(Rt, F, At, te, ce, rt, pt, Et, He, ee, le) : w.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, F, At, te, rt, pt, He, ee, le.data) : w.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, F, At, te, le.width, le.height, He, le.data) : P.texSubImage2D(P.TEXTURE_2D, F, At, te, rt, pt, He, ee, le);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, An), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ne), P.pixelStorei(P.UNPACK_SKIP_PIXELS, rn), P.pixelStorei(P.UNPACK_SKIP_ROWS, Wi), P.pixelStorei(P.UNPACK_SKIP_IMAGES, $e), F === 0 && O.generateMipmaps && P.generateMipmap(Rt), ot.unbindTexture();
    }, this.copyTextureToTexture3D = function(w, O, k = null, V = null, F = 0) {
      return w.isTexture !== !0 && (Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."), k = arguments[0] || null, V = arguments[1] || null, w = arguments[2], O = arguments[3], F = arguments[4] || 0), Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(w, O, k, V, F);
    }, this.initRenderTarget = function(w) {
      gt.get(w).__webglFramebuffer === void 0 && A.setupRenderTarget(w);
    }, this.initTexture = function(w) {
      w.isCubeTexture ? A.setTextureCube(w, 0) : w.isData3DTexture ? A.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? A.setTexture2DArray(w, 0) : A.setTexture2D(w, 0), ot.unbindTexture();
    }, this.resetState = function() {
      E = 0, C = 0, R = null, ot.reset(), ae.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return vn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorspace = qt._getDrawingBufferColorSpace(t), e.unpackColorSpace = qt._getUnpackColorSpace();
  }
}
class ba {
  constructor(t, e = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new ut(t), this.density = e;
  }
  clone() {
    return new ba(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class Sa {
  constructor(t, e = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new ut(t), this.near = e, this.far = n;
  }
  clone() {
    return new Sa(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class gl extends Zt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Qe(), this.environmentIntensity = 1, this.environmentRotation = new Qe(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class wa {
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = nr, this.updateRanges = [], this.version = 0, this.uuid = je();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = je()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = je()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Oe = /* @__PURE__ */ new T();
class Fi {
  constructor(t, e, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Oe.fromBufferAttribute(this, e), Oe.applyMatrix4(t), this.setXYZ(e, Oe.x, Oe.y, Oe.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Oe.fromBufferAttribute(this, e), Oe.applyNormalMatrix(t), this.setXYZ(e, Oe.x, Oe.y, Oe.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Oe.fromBufferAttribute(this, e), Oe.transformDirection(t), this.setXYZ(e, Oe.x, Oe.y, Oe.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = ze(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = kt(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  setX(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = kt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = kt(e, this.array), n = kt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = kt(e, this.array), n = kt(n, this.array), i = kt(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = kt(e, this.array), n = kt(n, this.array), i = kt(i, this.array), s = kt(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = s, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[i + s]);
      }
      return new oe(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Fi(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class _l extends Ue {
  static get type() {
    return "SpriteMaterial";
  }
  constructor(t) {
    super(), this.isSpriteMaterial = !0, this.color = new ut(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let ss;
const Cs = /* @__PURE__ */ new T(), rs = /* @__PURE__ */ new T(), os = /* @__PURE__ */ new T(), as = /* @__PURE__ */ new q(), Rs = /* @__PURE__ */ new q(), Vd = /* @__PURE__ */ new Dt(), $r = /* @__PURE__ */ new T(), Ps = /* @__PURE__ */ new T(), Jr = /* @__PURE__ */ new T(), Bh = /* @__PURE__ */ new q(), pc = /* @__PURE__ */ new q(), zh = /* @__PURE__ */ new q();
class Hd extends Zt {
  constructor(t = new _l()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", ss === void 0) {
      ss = new Vt();
      const e = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new wa(e, 5);
      ss.setIndex([0, 1, 2, 0, 2, 3]), ss.setAttribute("position", new Fi(n, 3, 0, !1)), ss.setAttribute("uv", new Fi(n, 2, 3, !1));
    }
    this.geometry = ss, this.material = t, this.center = new q(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), rs.setFromMatrixScale(this.matrixWorld), Vd.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), os.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && rs.multiplyScalar(-os.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Kr($r.set(-0.5, -0.5, 0), os, o, rs, i, s), Kr(Ps.set(0.5, -0.5, 0), os, o, rs, i, s), Kr(Jr.set(0.5, 0.5, 0), os, o, rs, i, s), Bh.set(0, 0), pc.set(1, 0), zh.set(1, 1);
    let a = t.ray.intersectTriangle($r, Ps, Jr, !1, Cs);
    if (a === null && (Kr(Ps.set(-0.5, 0.5, 0), os, o, rs, i, s), pc.set(0, 1), a = t.ray.intersectTriangle($r, Jr, Ps, !1, Cs), a === null))
      return;
    const c = t.ray.origin.distanceTo(Cs);
    c < t.near || c > t.far || e.push({
      distance: c,
      point: Cs.clone(),
      uv: Ye.getInterpolation(Cs, $r, Ps, Jr, Bh, pc, zh, new q()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Kr(r, t, e, n, i, s) {
  as.subVectors(r, e).addScalar(0.5).multiply(n), i !== void 0 ? (Rs.x = s * as.x - i * as.y, Rs.y = i * as.x + s * as.y) : Rs.copy(as), r.copy(t), r.x += Rs.x, r.y += Rs.y, r.applyMatrix4(Vd);
}
const jr = /* @__PURE__ */ new T(), kh = /* @__PURE__ */ new T();
class Gd extends Zt {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      },
      isLOD: {
        value: !0
      }
    }), this.autoUpdate = !0;
  }
  copy(t) {
    super.copy(t, !1);
    const e = t.levels;
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      this.addLevel(s.object.clone(), s.distance, s.hysteresis);
    }
    return this.autoUpdate = t.autoUpdate, this;
  }
  addLevel(t, e = 0, n = 0) {
    e = Math.abs(e);
    const i = this.levels;
    let s;
    for (s = 0; s < i.length && !(e < i[s].distance); s++)
      ;
    return i.splice(s, 0, { distance: e, hysteresis: n, object: t }), this.add(t), this;
  }
  removeLevel(t) {
    const e = this.levels;
    for (let n = 0; n < e.length; n++)
      if (e[n].distance === t) {
        const i = e.splice(n, 1);
        return this.remove(i[0].object), !0;
      }
    return !1;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(t) {
    const e = this.levels;
    if (e.length > 0) {
      let n, i;
      for (n = 1, i = e.length; n < i; n++) {
        let s = e[n].distance;
        if (e[n].object.visible && (s -= s * e[n].hysteresis), t < s)
          break;
      }
      return e[n - 1].object;
    }
    return null;
  }
  raycast(t, e) {
    if (this.levels.length > 0) {
      jr.setFromMatrixPosition(this.matrixWorld);
      const i = t.ray.origin.distanceTo(jr);
      this.getObjectForDistance(i).raycast(t, e);
    }
  }
  update(t) {
    const e = this.levels;
    if (e.length > 1) {
      jr.setFromMatrixPosition(t.matrixWorld), kh.setFromMatrixPosition(this.matrixWorld);
      const n = jr.distanceTo(kh) / t.zoom;
      e[0].object.visible = !0;
      let i, s;
      for (i = 1, s = e.length; i < s; i++) {
        let o = e[i].distance;
        if (e[i].object.visible && (o -= o * e[i].hysteresis), n >= o)
          e[i - 1].object.visible = !1, e[i].object.visible = !0;
        else
          break;
      }
      for (this._currentLevel = i - 1; i < s; i++)
        e[i].object.visible = !1;
    }
  }
  toJSON(t) {
    const e = super.toJSON(t);
    this.autoUpdate === !1 && (e.object.autoUpdate = !1), e.object.levels = [];
    const n = this.levels;
    for (let i = 0, s = n.length; i < s; i++) {
      const o = n[i];
      e.object.levels.push({
        object: o.object.uuid,
        distance: o.distance,
        hysteresis: o.hysteresis
      });
    }
    return e;
  }
}
const Vh = /* @__PURE__ */ new T(), Hh = /* @__PURE__ */ new Qt(), Gh = /* @__PURE__ */ new Qt(), Kx = /* @__PURE__ */ new T(), Wh = /* @__PURE__ */ new Dt(), Qr = /* @__PURE__ */ new T(), mc = /* @__PURE__ */ new De(), Xh = /* @__PURE__ */ new Dt(), gc = /* @__PURE__ */ new ki();
class Wd extends ye {
  constructor(t, e) {
    super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Dc, this.bindMatrix = new Dt(), this.bindMatrixInverse = new Dt(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const t = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Le()), this.boundingBox.makeEmpty();
    const e = t.getAttribute("position");
    for (let n = 0; n < e.count; n++)
      this.getVertexPosition(n, Qr), this.boundingBox.expandByPoint(Qr);
  }
  computeBoundingSphere() {
    const t = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new De()), this.boundingSphere.makeEmpty();
    const e = t.getAttribute("position");
    for (let n = 0; n < e.count; n++)
      this.getVertexPosition(n, Qr), this.boundingSphere.expandByPoint(Qr);
  }
  copy(t, e) {
    return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  raycast(t, e) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), mc.copy(this.boundingSphere), mc.applyMatrix4(i), t.ray.intersectsSphere(mc) !== !1 && (Xh.copy(i).invert(), gc.copy(t.ray).applyMatrix4(Xh), !(this.boundingBox !== null && gc.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(t, e, gc)));
  }
  getVertexPosition(t, e) {
    return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
  }
  bind(t, e) {
    this.skeleton = t, e === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new Qt(), e = this.geometry.attributes.skinWeight;
    for (let n = 0, i = e.count; n < i; n++) {
      t.fromBufferAttribute(e, n);
      const s = 1 / t.manhattanLength();
      s !== 1 / 0 ? t.multiplyScalar(s) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.bindMode === Dc ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === ld ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(t, e) {
    const n = this.skeleton, i = this.geometry;
    Hh.fromBufferAttribute(i.attributes.skinIndex, t), Gh.fromBufferAttribute(i.attributes.skinWeight, t), Vh.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const o = Gh.getComponent(s);
      if (o !== 0) {
        const a = Hh.getComponent(s);
        Wh.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), e.addScaledVector(Kx.copy(Vh).applyMatrix4(Wh), o);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
class xl extends Zt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class un extends me {
  constructor(t = null, e = 1, n = 1, i, s, o, a, c, l = Te, h = Te, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Yh = /* @__PURE__ */ new Dt(), jx = /* @__PURE__ */ new Dt();
class Ea {
  constructor(t = [], e = []) {
    this.uuid = je(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const t = this.bones, e = this.boneInverses;
    if (this.boneMatrices = new Float32Array(t.length * 16), e.length === 0)
      this.calculateInverses();
    else if (t.length !== e.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Dt());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = new Dt();
      this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t];
      n && n.matrixWorld.copy(this.boneInverses[t]).invert();
    }
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, o = t.length; s < o; s++) {
      const a = t[s] ? t[s].matrixWorld : jx;
      Yh.multiplyMatrices(a, e[s]), Yh.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Ea(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const e = new Float32Array(t * t * 4);
    e.set(this.boneMatrices);
    const n = new un(e, t, t, ke, qe);
    return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this;
  }
  getBoneByName(t) {
    for (let e = 0, n = this.bones.length; e < n; e++) {
      const i = this.bones[e];
      if (i.name === t)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(t, e) {
    this.uuid = t.uuid;
    for (let n = 0, i = t.bones.length; n < i; n++) {
      const s = t.bones[n];
      let o = e[s];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new xl()), this.bones.push(o), this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    t.uuid = this.uuid;
    const e = this.bones, n = this.boneInverses;
    for (let i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      t.bones.push(o.uuid);
      const a = n[i];
      t.boneInverses.push(a.toArray());
    }
    return t;
  }
}
class xs extends oe {
  constructor(t, e, n, i = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
const cs = /* @__PURE__ */ new Dt(), qh = /* @__PURE__ */ new Dt(), to = [], Zh = /* @__PURE__ */ new Le(), Qx = /* @__PURE__ */ new Dt(), Is = /* @__PURE__ */ new ye(), Ls = /* @__PURE__ */ new De();
class rr extends ye {
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new xs(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Qx);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new Le()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, cs), Zh.copy(t.boundingBox).applyMatrix4(cs), this.boundingBox.union(Zh);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new De()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, cs), Ls.copy(t.boundingSphere).applyMatrix4(cs), this.boundingSphere.union(Ls);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, o = t * s + 1;
    for (let a = 0; a < n.length; a++)
      n[a] = i[o + a];
  }
  raycast(t, e) {
    const n = this.matrixWorld, i = this.count;
    if (Is.geometry = this.geometry, Is.material = this.material, Is.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ls.copy(this.boundingSphere), Ls.applyMatrix4(n), t.ray.intersectsSphere(Ls) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, cs), qh.multiplyMatrices(n, cs), Is.matrixWorld = qh, Is.raycast(t, to);
        for (let o = 0, a = to.length; o < a; o++) {
          const c = to[o];
          c.instanceId = s, c.object = this, e.push(c);
        }
        to.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new xs(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new un(new Float32Array(i * this.count), i, this.count, fa, qe));
    const s = this.morphTexture.source.data.data;
    let o = 0;
    for (let l = 0; l < n.length; l++)
      o += n[l];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, c = i * t;
    s[c] = a, s.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
function _c(r, t) {
  return r - t;
}
function ty(r, t) {
  return r.z - t.z;
}
function ey(r, t) {
  return t.z - r.z;
}
class ny {
  constructor() {
    this.index = 0, this.pool = [], this.list = [];
  }
  push(t, e, n, i) {
    const s = this.pool, o = this.list;
    this.index >= s.length && s.push({
      start: -1,
      count: -1,
      z: -1,
      index: -1
    });
    const a = s[this.index];
    o.push(a), this.index++, a.start = t, a.count = e, a.z = n, a.index = i;
  }
  reset() {
    this.list.length = 0, this.index = 0;
  }
}
const Ge = /* @__PURE__ */ new Dt(), iy = /* @__PURE__ */ new ut(1, 1, 1), xc = /* @__PURE__ */ new xr(), eo = /* @__PURE__ */ new Le(), pi = /* @__PURE__ */ new De(), Ds = /* @__PURE__ */ new T(), $h = /* @__PURE__ */ new T(), sy = /* @__PURE__ */ new T(), yc = /* @__PURE__ */ new ny(), Pe = /* @__PURE__ */ new ye(), no = [];
function ry(r, t, e = 0) {
  const n = t.itemSize;
  if (r.isInterleavedBufferAttribute || r.array.constructor !== t.array.constructor) {
    const i = r.count;
    for (let s = 0; s < i; s++)
      for (let o = 0; o < n; o++)
        t.setComponent(s + e, o, r.getComponent(s, o));
  } else
    t.array.set(r.array, e * n);
  t.needsUpdate = !0;
}
function mi(r, t) {
  if (r.constructor !== t.constructor) {
    const e = Math.min(r.length, t.length);
    for (let n = 0; n < e; n++)
      t[n] = r[n];
  } else {
    const e = Math.min(r.length, t.length);
    t.set(new r.constructor(r.buffer, 0, e));
  }
}
class Xd extends ye {
  get maxInstanceCount() {
    return this._maxInstanceCount;
  }
  get instanceCount() {
    return this._instanceInfo.length - this._availableInstanceIds.length;
  }
  get unusedVertexCount() {
    return this._maxVertexCount - this._nextVertexStart;
  }
  get unusedIndexCount() {
    return this._maxIndexCount - this._nextIndexStart;
  }
  constructor(t, e, n = e * 2, i) {
    super(new Vt(), i), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._instanceInfo = [], this._geometryInfo = [], this._availableInstanceIds = [], this._availableGeometryIds = [], this._nextIndexStart = 0, this._nextVertexStart = 0, this._geometryCount = 0, this._visibilityChanged = !0, this._geometryInitialized = !1, this._maxInstanceCount = t, this._maxVertexCount = e, this._maxIndexCount = n, this._multiDrawCounts = new Int32Array(t), this._multiDrawStarts = new Int32Array(t), this._multiDrawCount = 0, this._multiDrawInstances = null, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture();
  }
  _initMatricesTexture() {
    let t = Math.sqrt(this._maxInstanceCount * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const e = new Float32Array(t * t * 4), n = new un(e, t, t, ke, qe);
    this._matricesTexture = n;
  }
  _initIndirectTexture() {
    let t = Math.sqrt(this._maxInstanceCount);
    t = Math.ceil(t);
    const e = new Uint32Array(t * t), n = new un(e, t, t, mr, Hn);
    this._indirectTexture = n;
  }
  _initColorsTexture() {
    let t = Math.sqrt(this._maxInstanceCount);
    t = Math.ceil(t);
    const e = new Float32Array(t * t * 4).fill(1), n = new un(e, t, t, ke, qe);
    n.colorSpace = qt.workingColorSpace, this._colorsTexture = n;
  }
  _initializeGeometry(t) {
    const e = this.geometry, n = this._maxVertexCount, i = this._maxIndexCount;
    if (this._geometryInitialized === !1) {
      for (const s in t.attributes) {
        const o = t.getAttribute(s), { array: a, itemSize: c, normalized: l } = o, h = new a.constructor(n * c), u = new oe(h, c, l);
        e.setAttribute(s, u);
      }
      if (t.getIndex() !== null) {
        const s = n > 65535 ? new Uint32Array(i) : new Uint16Array(i);
        e.setIndex(new oe(s, 1));
      }
      this._geometryInitialized = !0;
    }
  }
  // Make sure the geometry is compatible with the existing combined geometry attributes
  _validateGeometry(t) {
    const e = this.geometry;
    if (!!t.getIndex() != !!e.getIndex())
      throw new Error('BatchedMesh: All geometries must consistently have "index".');
    for (const n in e.attributes) {
      if (!t.hasAttribute(n))
        throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
      const i = t.getAttribute(n), s = e.getAttribute(n);
      if (i.itemSize !== s.itemSize || i.normalized !== s.normalized)
        throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
    }
  }
  setCustomSort(t) {
    return this.customSort = t, this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Le());
    const t = this.boundingBox, e = this._instanceInfo;
    t.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) {
      if (e[n].active === !1) continue;
      const s = e[n].geometryIndex;
      this.getMatrixAt(n, Ge), this.getBoundingBoxAt(s, eo).applyMatrix4(Ge), t.union(eo);
    }
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new De());
    const t = this.boundingSphere, e = this._instanceInfo;
    t.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) {
      if (e[n].active === !1) continue;
      const s = e[n].geometryIndex;
      this.getMatrixAt(n, Ge), this.getBoundingSphereAt(s, pi).applyMatrix4(Ge), t.union(pi);
    }
  }
  addInstance(t) {
    if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0)
      throw new Error("BatchedMesh: Maximum item count reached.");
    const n = {
      visible: !0,
      active: !0,
      geometryIndex: t
    };
    let i = null;
    this._availableInstanceIds.length > 0 ? (this._availableInstanceIds.sort(_c), i = this._availableInstanceIds.shift(), this._instanceInfo[i] = n) : (i = this._instanceInfo.length, this._instanceInfo.push(n));
    const s = this._matricesTexture;
    Ge.identity().toArray(s.image.data, i * 16), s.needsUpdate = !0;
    const o = this._colorsTexture;
    return o && (iy.toArray(o.image.data, i * 4), o.needsUpdate = !0), this._visibilityChanged = !0, i;
  }
  addGeometry(t, e = -1, n = -1) {
    this._initializeGeometry(t), this._validateGeometry(t);
    const i = {
      // geometry information
      vertexStart: -1,
      vertexCount: -1,
      reservedVertexCount: -1,
      indexStart: -1,
      indexCount: -1,
      reservedIndexCount: -1,
      // draw range information
      start: -1,
      count: -1,
      // state
      boundingBox: null,
      boundingSphere: null,
      active: !0
    }, s = this._geometryInfo;
    i.vertexStart = this._nextVertexStart, i.reservedVertexCount = e === -1 ? t.getAttribute("position").count : e;
    const o = t.getIndex();
    if (o !== null && (i.indexStart = this._nextIndexStart, i.reservedIndexCount = n === -1 ? o.count : n), i.indexStart !== -1 && i.indexStart + i.reservedIndexCount > this._maxIndexCount || i.vertexStart + i.reservedVertexCount > this._maxVertexCount)
      throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");
    let c;
    return this._availableGeometryIds.length > 0 ? (this._availableGeometryIds.sort(_c), c = this._availableGeometryIds.shift(), s[c] = i) : (c = this._geometryCount, this._geometryCount++, s.push(i)), this.setGeometryAt(c, t), this._nextIndexStart = i.indexStart + i.reservedIndexCount, this._nextVertexStart = i.vertexStart + i.reservedVertexCount, c;
  }
  setGeometryAt(t, e) {
    if (t >= this._geometryCount)
      throw new Error("BatchedMesh: Maximum geometry count reached.");
    this._validateGeometry(e);
    const n = this.geometry, i = n.getIndex() !== null, s = n.getIndex(), o = e.getIndex(), a = this._geometryInfo[t];
    if (i && o.count > a.reservedIndexCount || e.attributes.position.count > a.reservedVertexCount)
      throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");
    const c = a.vertexStart, l = a.reservedVertexCount;
    a.vertexCount = e.getAttribute("position").count;
    for (const h in n.attributes) {
      const u = e.getAttribute(h), d = n.getAttribute(h);
      ry(u, d, c);
      const f = u.itemSize;
      for (let m = u.count, _ = l; m < _; m++) {
        const g = c + m;
        for (let p = 0; p < f; p++)
          d.setComponent(g, p, 0);
      }
      d.needsUpdate = !0, d.addUpdateRange(c * f, l * f);
    }
    if (i) {
      const h = a.indexStart, u = a.reservedIndexCount;
      a.indexCount = e.getIndex().count;
      for (let d = 0; d < o.count; d++)
        s.setX(h + d, c + o.getX(d));
      for (let d = o.count, f = u; d < f; d++)
        s.setX(h + d, c);
      s.needsUpdate = !0, s.addUpdateRange(h, a.reservedIndexCount);
    }
    return a.start = i ? a.indexStart : a.vertexStart, a.count = i ? a.indexCount : a.vertexCount, a.boundingBox = null, e.boundingBox !== null && (a.boundingBox = e.boundingBox.clone()), a.boundingSphere = null, e.boundingSphere !== null && (a.boundingSphere = e.boundingSphere.clone()), this._visibilityChanged = !0, t;
  }
  deleteGeometry(t) {
    const e = this._geometryInfo;
    if (t >= e.length || e[t].active === !1)
      return this;
    const n = this._instanceInfo;
    for (let i = 0, s = n.length; i < s; i++)
      n[i].geometryIndex === t && this.deleteInstance(i);
    return e[t].active = !1, this._availableGeometryIds.push(t), this._visibilityChanged = !0, this;
  }
  deleteInstance(t) {
    const e = this._instanceInfo;
    return t >= e.length || e[t].active === !1 ? this : (e[t].active = !1, this._availableInstanceIds.push(t), this._visibilityChanged = !0, this);
  }
  optimize() {
    let t = 0, e = 0;
    const n = this._geometryInfo, i = n.map((o, a) => a).sort((o, a) => n[o].vertexStart - n[a].vertexStart), s = this.geometry;
    for (let o = 0, a = n.length; o < a; o++) {
      const c = i[o], l = n[c];
      if (l.active !== !1) {
        if (s.index !== null) {
          if (l.indexStart !== e) {
            const { indexStart: h, vertexStart: u, reservedIndexCount: d } = l, f = s.index, m = f.array, _ = t - u;
            for (let g = h; g < h + d; g++)
              m[g] = m[g] + _;
            f.array.copyWithin(e, h, h + d), f.addUpdateRange(e, d), l.indexStart = e;
          }
          e += l.reservedIndexCount;
        }
        if (l.vertexStart !== t) {
          const { vertexStart: h, reservedVertexCount: u } = l, d = s.attributes;
          for (const f in d) {
            const m = d[f], { array: _, itemSize: g } = m;
            _.copyWithin(t * g, h * g, (h + u) * g), m.addUpdateRange(t * g, u * g);
          }
          l.vertexStart = t;
        }
        t += l.reservedVertexCount, l.start = s.index ? l.indexStart : l.vertexStart, this._nextIndexStart = s.index ? l.indexStart + l.reservedIndexCount : 0, this._nextVertexStart = l.vertexStart + l.reservedVertexCount;
      }
    }
    return this;
  }
  // get bounding box and compute it if it doesn't exist
  getBoundingBoxAt(t, e) {
    if (t >= this._geometryCount)
      return null;
    const n = this.geometry, i = this._geometryInfo[t];
    if (i.boundingBox === null) {
      const s = new Le(), o = n.index, a = n.attributes.position;
      for (let c = i.start, l = i.start + i.count; c < l; c++) {
        let h = c;
        o && (h = o.getX(h)), s.expandByPoint(Ds.fromBufferAttribute(a, h));
      }
      i.boundingBox = s;
    }
    return e.copy(i.boundingBox), e;
  }
  // get bounding sphere and compute it if it doesn't exist
  getBoundingSphereAt(t, e) {
    if (t >= this._geometryCount)
      return null;
    const n = this.geometry, i = this._geometryInfo[t];
    if (i.boundingSphere === null) {
      const s = new De();
      this.getBoundingBoxAt(t, eo), eo.getCenter(s.center);
      const o = n.index, a = n.attributes.position;
      let c = 0;
      for (let l = i.start, h = i.start + i.count; l < h; l++) {
        let u = l;
        o && (u = o.getX(u)), Ds.fromBufferAttribute(a, u), c = Math.max(c, s.center.distanceToSquared(Ds));
      }
      s.radius = Math.sqrt(c), i.boundingSphere = s;
    }
    return e.copy(i.boundingSphere), e;
  }
  setMatrixAt(t, e) {
    const n = this._instanceInfo, i = this._matricesTexture, s = this._matricesTexture.image.data;
    return t >= n.length || n[t].active === !1 ? this : (e.toArray(s, t * 16), i.needsUpdate = !0, this);
  }
  getMatrixAt(t, e) {
    const n = this._instanceInfo, i = this._matricesTexture.image.data;
    return t >= n.length || n[t].active === !1 ? null : e.fromArray(i, t * 16);
  }
  setColorAt(t, e) {
    this._colorsTexture === null && this._initColorsTexture();
    const n = this._colorsTexture, i = this._colorsTexture.image.data, s = this._instanceInfo;
    return t >= s.length || s[t].active === !1 ? this : (e.toArray(i, t * 4), n.needsUpdate = !0, this);
  }
  getColorAt(t, e) {
    const n = this._colorsTexture.image.data, i = this._instanceInfo;
    return t >= i.length || i[t].active === !1 ? null : e.fromArray(n, t * 4);
  }
  setVisibleAt(t, e) {
    const n = this._instanceInfo;
    return t >= n.length || n[t].active === !1 || n[t].visible === e ? this : (n[t].visible = e, this._visibilityChanged = !0, this);
  }
  getVisibleAt(t) {
    const e = this._instanceInfo;
    return t >= e.length || e[t].active === !1 ? !1 : e[t].visible;
  }
  setGeometryIdAt(t, e) {
    const n = this._instanceInfo, i = this._geometryInfo;
    return t >= n.length || n[t].active === !1 || e >= i.length || i[e].active === !1 ? null : (n[t].geometryIndex = e, this);
  }
  getGeometryIdAt(t) {
    const e = this._instanceInfo;
    return t >= e.length || e[t].active === !1 ? -1 : e[t].geometryIndex;
  }
  getGeometryRangeAt(t, e = {}) {
    if (t < 0 || t >= this._geometryCount)
      return null;
    const n = this._geometryInfo[t];
    return e.vertexStart = n.vertexStart, e.vertexCount = n.vertexCount, e.reservedVertexCount = n.reservedVertexCount, e.indexStart = n.indexStart, e.indexCount = n.indexCount, e.reservedIndexCount = n.reservedIndexCount, e.start = n.start, e.count = n.count, e;
  }
  setInstanceCount(t) {
    const e = this._availableInstanceIds, n = this._instanceInfo;
    for (e.sort(_c); e[e.length - 1] === n.length; )
      n.pop(), e.pop();
    if (t < n.length)
      throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);
    const i = new Int32Array(t), s = new Int32Array(t);
    mi(this._multiDrawCounts, i), mi(this._multiDrawStarts, s), this._multiDrawCounts = i, this._multiDrawStarts = s, this._maxInstanceCount = t;
    const o = this._indirectTexture, a = this._matricesTexture, c = this._colorsTexture;
    o.dispose(), this._initIndirectTexture(), mi(o.image.data, this._indirectTexture.image.data), a.dispose(), this._initMatricesTexture(), mi(a.image.data, this._matricesTexture.image.data), c && (c.dispose(), this._initColorsTexture(), mi(c.image.data, this._colorsTexture.image.data));
  }
  setGeometrySize(t, e) {
    const n = [...this._geometryInfo].filter((a) => a.active);
    if (Math.max(...n.map((a) => a.vertexStart + a.reservedVertexCount)) > t)
      throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);
    if (this.geometry.index && Math.max(...n.map((c) => c.indexStart + c.reservedIndexCount)) > e)
      throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);
    const s = this.geometry;
    s.dispose(), this._maxVertexCount = t, this._maxIndexCount = e, this._geometryInitialized && (this._geometryInitialized = !1, this.geometry = new Vt(), this._initializeGeometry(s));
    const o = this.geometry;
    s.index && mi(s.index.array, o.index.array);
    for (const a in s.attributes)
      mi(s.attributes[a].array, o.attributes[a].array);
  }
  raycast(t, e) {
    const n = this._instanceInfo, i = this._geometryInfo, s = this.matrixWorld, o = this.geometry;
    Pe.material = this.material, Pe.geometry.index = o.index, Pe.geometry.attributes = o.attributes, Pe.geometry.boundingBox === null && (Pe.geometry.boundingBox = new Le()), Pe.geometry.boundingSphere === null && (Pe.geometry.boundingSphere = new De());
    for (let a = 0, c = n.length; a < c; a++) {
      if (!n[a].visible || !n[a].active)
        continue;
      const l = n[a].geometryIndex, h = i[l];
      Pe.geometry.setDrawRange(h.start, h.count), this.getMatrixAt(a, Pe.matrixWorld).premultiply(s), this.getBoundingBoxAt(l, Pe.geometry.boundingBox), this.getBoundingSphereAt(l, Pe.geometry.boundingSphere), Pe.raycast(t, no);
      for (let u = 0, d = no.length; u < d; u++) {
        const f = no[u];
        f.object = this, f.batchId = a, e.push(f);
      }
      no.length = 0;
    }
    Pe.material = null, Pe.geometry.index = null, Pe.geometry.attributes = {}, Pe.geometry.setDrawRange(0, 1 / 0);
  }
  copy(t) {
    return super.copy(t), this.geometry = t.geometry.clone(), this.perObjectFrustumCulled = t.perObjectFrustumCulled, this.sortObjects = t.sortObjects, this.boundingBox = t.boundingBox !== null ? t.boundingBox.clone() : null, this.boundingSphere = t.boundingSphere !== null ? t.boundingSphere.clone() : null, this._geometryInfo = t._geometryInfo.map((e) => ({
      ...e,
      boundingBox: e.boundingBox !== null ? e.boundingBox.clone() : null,
      boundingSphere: e.boundingSphere !== null ? e.boundingSphere.clone() : null
    })), this._instanceInfo = t._instanceInfo.map((e) => ({ ...e })), this._maxInstanceCount = t._maxInstanceCount, this._maxVertexCount = t._maxVertexCount, this._maxIndexCount = t._maxIndexCount, this._geometryInitialized = t._geometryInitialized, this._geometryCount = t._geometryCount, this._multiDrawCounts = t._multiDrawCounts.slice(), this._multiDrawStarts = t._multiDrawStarts.slice(), this._matricesTexture = t._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = t._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this;
  }
  dispose() {
    return this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null), this;
  }
  onBeforeRender(t, e, n, i, s) {
    if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects)
      return;
    const o = i.getIndex(), a = o === null ? 1 : o.array.BYTES_PER_ELEMENT, c = this._instanceInfo, l = this._multiDrawStarts, h = this._multiDrawCounts, u = this._geometryInfo, d = this.perObjectFrustumCulled, f = this._indirectTexture, m = f.image.data;
    d && (Ge.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), xc.setFromProjectionMatrix(
      Ge,
      t.coordinateSystem
    ));
    let _ = 0;
    if (this.sortObjects) {
      Ge.copy(this.matrixWorld).invert(), Ds.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ge), $h.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection(Ge);
      for (let y = 0, v = c.length; y < v; y++)
        if (c[y].visible && c[y].active) {
          const x = c[y].geometryIndex;
          this.getMatrixAt(y, Ge), this.getBoundingSphereAt(x, pi).applyMatrix4(Ge);
          let I = !1;
          if (d && (I = !xc.intersectsSphere(pi)), !I) {
            const E = u[x], C = sy.subVectors(pi.center, Ds).dot($h);
            yc.push(E.start, E.count, C, y);
          }
        }
      const g = yc.list, p = this.customSort;
      p === null ? g.sort(s.transparent ? ey : ty) : p.call(this, g, n);
      for (let y = 0, v = g.length; y < v; y++) {
        const x = g[y];
        l[_] = x.start * a, h[_] = x.count, m[_] = x.index, _++;
      }
      yc.reset();
    } else
      for (let g = 0, p = c.length; g < p; g++)
        if (c[g].visible && c[g].active) {
          const y = c[g].geometryIndex;
          let v = !1;
          if (d && (this.getMatrixAt(g, Ge), this.getBoundingSphereAt(y, pi).applyMatrix4(Ge), v = !xc.intersectsSphere(pi)), !v) {
            const x = u[y];
            l[_] = x.start * a, h[_] = x.count, m[_] = g, _++;
          }
        }
    f.needsUpdate = !0, this._multiDrawCount = _, this._visibilityChanged = !1;
  }
  onBeforeShadow(t, e, n, i, s, o) {
    this.onBeforeRender(t, null, i, s, o);
  }
}
class Ne extends Ue {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.color = new ut(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const oa = /* @__PURE__ */ new T(), aa = /* @__PURE__ */ new T(), Jh = /* @__PURE__ */ new Dt(), Us = /* @__PURE__ */ new ki(), io = /* @__PURE__ */ new De(), vc = /* @__PURE__ */ new T(), Kh = /* @__PURE__ */ new T();
class ii extends Zt {
  constructor(t = new Vt(), e = new Ne()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let i = 1, s = e.count; i < s; i++)
        oa.fromBufferAttribute(e, i - 1), aa.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += oa.distanceTo(aa);
      t.setAttribute("lineDistance", new St(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, s = t.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), io.copy(n.boundingSphere), io.applyMatrix4(i), io.radius += s, t.ray.intersectsSphere(io) === !1) return;
    Jh.copy(i).invert(), Us.copy(t.ray).applyMatrix4(Jh);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const f = Math.max(0, o.start), m = Math.min(h.count, o.start + o.count);
      for (let _ = f, g = m - 1; _ < g; _ += l) {
        const p = h.getX(_), y = h.getX(_ + 1), v = so(this, t, Us, c, p, y);
        v && e.push(v);
      }
      if (this.isLineLoop) {
        const _ = h.getX(m - 1), g = h.getX(f), p = so(this, t, Us, c, _, g);
        p && e.push(p);
      }
    } else {
      const f = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
      for (let _ = f, g = m - 1; _ < g; _ += l) {
        const p = so(this, t, Us, c, _, _ + 1);
        p && e.push(p);
      }
      if (this.isLineLoop) {
        const _ = so(this, t, Us, c, m - 1, f);
        _ && e.push(_);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function so(r, t, e, n, i, s) {
  const o = r.geometry.attributes.position;
  if (oa.fromBufferAttribute(o, i), aa.fromBufferAttribute(o, s), e.distanceSqToSegment(oa, aa, vc, Kh) > n) return;
  vc.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(vc);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Kh.clone().applyMatrix4(r.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    };
}
const jh = /* @__PURE__ */ new T(), Qh = /* @__PURE__ */ new T();
class pn extends ii {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let i = 0, s = e.count; i < s; i += 2)
        jh.fromBufferAttribute(e, i), Qh.fromBufferAttribute(e, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + jh.distanceTo(Qh);
      t.setAttribute("lineDistance", new St(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Yd extends ii {
  constructor(t, e) {
    super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class yl extends Ue {
  static get type() {
    return "PointsMaterial";
  }
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.color = new ut(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const tu = /* @__PURE__ */ new Dt(), zc = /* @__PURE__ */ new ki(), ro = /* @__PURE__ */ new De(), oo = /* @__PURE__ */ new T();
class qd extends Zt {
  constructor(t = new Vt(), e = new yl()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, s = t.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ro.copy(n.boundingSphere), ro.applyMatrix4(i), ro.radius += s, t.ray.intersectsSphere(ro) === !1) return;
    tu.copy(i).invert(), zc.copy(t.ray).applyMatrix4(tu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, o.start), f = Math.min(l.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++) {
        const g = l.getX(m);
        oo.fromBufferAttribute(u, g), eu(oo, g, c, i, t, e, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++)
        oo.fromBufferAttribute(u, m), eu(oo, m, c, i, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function eu(r, t, e, n, i, s, o) {
  const a = zc.distanceSqToPoint(r);
  if (a < e) {
    const c = new T();
    zc.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: o
    });
  }
}
class oy extends me {
  constructor(t, e, n, i, s, o, a, c, l) {
    super(t, e, n, i, s, o, a, c, l), this.isVideoTexture = !0, this.minFilter = o !== void 0 ? o : _e, this.magFilter = s !== void 0 ? s : _e, this.generateMipmaps = !1;
    const h = this;
    function u() {
      h.needsUpdate = !0, t.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const t = this.image;
    "requestVideoFrameCallback" in t === !1 && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
class ay extends me {
  constructor(t, e) {
    super({ width: t, height: e }), this.isFramebufferTexture = !0, this.magFilter = Te, this.minFilter = Te, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
class Ta extends me {
  constructor(t, e, n, i, s, o, a, c, l, h, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isCompressedTexture = !0, this.image = { width: e, height: n }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class cy extends Ta {
  constructor(t, e, n, i, s, o) {
    super(t, e, n, s, o), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = nn, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class ly extends Ta {
  constructor(t, e, n) {
    super(void 0, t[0].width, t[0].height, e, n, Vn), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = t;
  }
}
class hy extends me {
  constructor(t, e, n, i, s, o, a, c, l) {
    super(t, e, n, i, s, o, a, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class mn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, i = this.getPoint(0), s = 0;
    e.push(0);
    for (let o = 1; o <= t; o++)
      n = this.getPoint(o / t), s += n.distanceTo(i), e.push(s), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let o;
    e ? o = e : o = t * n[s - 1];
    let a = 0, c = s - 1, l;
    for (; a <= c; )
      if (i = Math.floor(a + (c - a) / 2), l = n[i] - o, l < 0)
        a = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break;
      }
    if (i = c, n[i] === o)
      return i / (s - 1);
    const h = n[i], d = n[i + 1] - h, f = (o - h) / d;
    return (i + f) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let i = t - 1e-4, s = t + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const o = this.getPoint(i), a = this.getPoint(s), c = e || (o.isVector2 ? new q() : new T());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new T(), i = [], s = [], o = [], a = new T(), c = new Dt();
    for (let f = 0; f <= t; f++) {
      const m = f / t;
      i[f] = this.getTangentAt(m, new T());
    }
    s[0] = new T(), o[0] = new T();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= t; f++) {
      if (s[f] = s[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(pe(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(c.makeRotationAxis(a, m));
      }
      o[f].crossVectors(i[f], s[f]);
    }
    if (e === !0) {
      let f = Math.acos(pe(s[0].dot(s[t]), -1, 1));
      f /= t, i[0].dot(a.crossVectors(s[0], s[t])) > 0 && (f = -f);
      for (let m = 1; m <= t; m++)
        s[m].applyMatrix4(c.makeRotationAxis(i[m], f * m)), o[m].crossVectors(i[m], s[m]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class Aa extends mn {
  constructor(t = 0, e = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(t, e = new q()) {
    const n = e, i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
    const a = this.aStartAngle + t * s;
    let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
      c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Zd extends Aa {
  constructor(t, e, n, i, s, o) {
    super(t, e, n, n, i, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function vl() {
  let r = 0, t = 0, e = 0, n = 0;
  function i(s, o, a, c) {
    r = s, t = a, e = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      i(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, h, u) {
      let d = (o - s) / l - (a - s) / (l + h) + (a - o) / h, f = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      d *= h, f *= h, i(o, a, d, f);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return r + t * s + e * o + n * a;
    }
  };
}
const ao = /* @__PURE__ */ new T(), Mc = /* @__PURE__ */ new vl(), bc = /* @__PURE__ */ new vl(), Sc = /* @__PURE__ */ new vl();
class $d extends mn {
  constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
  }
  getPoint(t, e = new T()) {
    const n = e, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * t;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = i[(a - 1) % s] : (ao.subVectors(i[0], i[1]).add(i[0]), l = ao);
    const u = i[a % s], d = i[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = i[(a + 2) % s] : (ao.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = ao), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(l.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), Mc.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, m, _, g), bc.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, m, _, g), Sc.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, m, _, g);
    } else this.curveType === "catmullrom" && (Mc.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), bc.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), Sc.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      Mc.calc(c),
      bc.calc(c),
      Sc.calc(c)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new T().fromArray(i));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function nu(r, t, e, n, i) {
  const s = (n - t) * 0.5, o = (i - e) * 0.5, a = r * r, c = r * a;
  return (2 * e - 2 * n + s + o) * c + (-3 * e + 3 * n - 2 * s - o) * a + s * r + e;
}
function uy(r, t) {
  const e = 1 - r;
  return e * e * t;
}
function dy(r, t) {
  return 2 * (1 - r) * r * t;
}
function fy(r, t) {
  return r * r * t;
}
function qs(r, t, e, n) {
  return uy(r, t) + dy(r, e) + fy(r, n);
}
function py(r, t) {
  const e = 1 - r;
  return e * e * e * t;
}
function my(r, t) {
  const e = 1 - r;
  return 3 * e * e * r * t;
}
function gy(r, t) {
  return 3 * (1 - r) * r * r * t;
}
function _y(r, t) {
  return r * r * r * t;
}
function Zs(r, t, e, n, i) {
  return py(r, t) + my(r, e) + gy(r, n) + _y(r, i);
}
class Ml extends mn {
  constructor(t = new q(), e = new q(), n = new q(), i = new q()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new q()) {
    const n = e, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Zs(t, i.x, s.x, o.x, a.x),
      Zs(t, i.y, s.y, o.y, a.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class Jd extends mn {
  constructor(t = new T(), e = new T(), n = new T(), i = new T()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new T()) {
    const n = e, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Zs(t, i.x, s.x, o.x, a.x),
      Zs(t, i.y, s.y, o.y, a.y),
      Zs(t, i.z, s.z, o.z, a.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class bl extends mn {
  constructor(t = new q(), e = new q()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new q()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new q()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Kd extends mn {
  constructor(t = new T(), e = new T()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new T()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new T()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Sl extends mn {
  constructor(t = new q(), e = new q(), n = new q()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new q()) {
    const n = e, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      qs(t, i.x, s.x, o.x),
      qs(t, i.y, s.y, o.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class wl extends mn {
  constructor(t = new T(), e = new T(), n = new T()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new T()) {
    const n = e, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      qs(t, i.x, s.x, o.x),
      qs(t, i.y, s.y, o.y),
      qs(t, i.z, s.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class El extends mn {
  constructor(t = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new q()) {
    const n = e, i = this.points, s = (i.length - 1) * t, o = Math.floor(s), a = s - o, c = i[o === 0 ? o : o - 1], l = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      nu(a, c.x, l.x, h.x, u.x),
      nu(a, c.y, l.y, h.y, u.y)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new q().fromArray(i));
    }
    return this;
  }
}
var ca = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Zd,
  CatmullRomCurve3: $d,
  CubicBezierCurve: Ml,
  CubicBezierCurve3: Jd,
  EllipseCurve: Aa,
  LineCurve: bl,
  LineCurve3: Kd,
  QuadraticBezierCurve: Sl,
  QuadraticBezierCurve3: wl,
  SplineCurve: El
});
class jd extends mn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new ca[n](e, t));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t, e) {
    const n = t * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const o = i[s] - n, a = this.curves[s], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c;
        return a.getPointAt(l, e);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const o = s[i], a = o.isEllipseCurve ? t * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? t * o.points.length : t, c = o.getPoints(a);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(new ca[i.type]().fromJSON(i));
    }
    return this;
  }
}
class or extends jd {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new q(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new bl(this.currentPoint.clone(), new q(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const s = new Sl(
      this.currentPoint.clone(),
      new q(t, e),
      new q(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, s, o) {
    const a = new Ml(
      this.currentPoint.clone(),
      new q(t, e),
      new q(n, i),
      new q(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new El(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, s, o) {
    const a = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      t + a,
      e + c,
      n,
      i,
      s,
      o
    ), this;
  }
  absarc(t, e, n, i, s, o) {
    return this.absellipse(t, e, n, n, i, s, o), this;
  }
  ellipse(t, e, n, i, s, o, a, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + l, e + h, n, i, s, o, a, c), this;
  }
  absellipse(t, e, n, i, s, o, a, c) {
    const l = new Aa(t, e, n, i, s, o, a, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class yr extends Vt {
  constructor(t = [new q(0, -0.5), new q(0.5, 0), new q(0, 0.5)], e = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: n,
      phiLength: i
    }, e = Math.floor(e), i = pe(i, 0, Math.PI * 2);
    const s = [], o = [], a = [], c = [], l = [], h = 1 / e, u = new T(), d = new q(), f = new T(), m = new T(), _ = new T();
    let g = 0, p = 0;
    for (let y = 0; y <= t.length - 1; y++)
      switch (y) {
        case 0:
          g = t[y + 1].x - t[y].x, p = t[y + 1].y - t[y].y, f.x = p * 1, f.y = -g, f.z = p * 0, _.copy(f), f.normalize(), c.push(f.x, f.y, f.z);
          break;
        case t.length - 1:
          c.push(_.x, _.y, _.z);
          break;
        default:
          g = t[y + 1].x - t[y].x, p = t[y + 1].y - t[y].y, f.x = p * 1, f.y = -g, f.z = p * 0, m.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), c.push(f.x, f.y, f.z), _.copy(m);
      }
    for (let y = 0; y <= e; y++) {
      const v = n + y * h * i, x = Math.sin(v), I = Math.cos(v);
      for (let E = 0; E <= t.length - 1; E++) {
        u.x = t[E].x * x, u.y = t[E].y, u.z = t[E].x * I, o.push(u.x, u.y, u.z), d.x = y / e, d.y = E / (t.length - 1), a.push(d.x, d.y);
        const C = c[3 * E + 0] * x, R = c[3 * E + 1], S = c[3 * E + 0] * I;
        l.push(C, R, S);
      }
    }
    for (let y = 0; y < e; y++)
      for (let v = 0; v < t.length - 1; v++) {
        const x = v + y * t.length, I = x, E = x + t.length, C = x + t.length + 1, R = x + 1;
        s.push(I, E, R), s.push(C, R, E);
      }
    this.setIndex(s), this.setAttribute("position", new St(o, 3)), this.setAttribute("uv", new St(a, 2)), this.setAttribute("normal", new St(l, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new yr(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class Ca extends yr {
  constructor(t = 1, e = 1, n = 4, i = 8) {
    const s = new or();
    s.absarc(0, -e / 2, t, Math.PI * 1.5, 0), s.absarc(0, e / 2, t, 0, Math.PI * 0.5), super(s.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: t,
      length: e,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(t) {
    return new Ca(t.radius, t.length, t.capSegments, t.radialSegments);
  }
}
class Ra extends Vt {
  constructor(t = 1, e = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: n,
      thetaLength: i
    }, e = Math.max(3, e);
    const s = [], o = [], a = [], c = [], l = new T(), h = new q();
    o.push(0, 0, 0), a.push(0, 0, 1), c.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= e; u++, d += 3) {
      const f = n + u / e * i;
      l.x = t * Math.cos(f), l.y = t * Math.sin(f), o.push(l.x, l.y, l.z), a.push(0, 0, 1), h.x = (o[d] / t + 1) / 2, h.y = (o[d + 1] / t + 1) / 2, c.push(h.x, h.y);
    }
    for (let u = 1; u <= e; u++)
      s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new St(o, 3)), this.setAttribute("normal", new St(a, 3)), this.setAttribute("uv", new St(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ra(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class Vi extends Vt {
  constructor(t = 1, e = 1, n = 1, i = 32, s = 1, o = !1, a = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: o,
      thetaStart: a,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let m = 0;
    const _ = [], g = n / 2;
    let p = 0;
    y(), o === !1 && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(h), this.setAttribute("position", new St(u, 3)), this.setAttribute("normal", new St(d, 3)), this.setAttribute("uv", new St(f, 2));
    function y() {
      const x = new T(), I = new T();
      let E = 0;
      const C = (e - t) / n;
      for (let R = 0; R <= s; R++) {
        const S = [], M = R / s, L = M * (e - t) + t;
        for (let D = 0; D <= i; D++) {
          const U = D / i, B = U * c + a, Y = Math.sin(B), H = Math.cos(B);
          I.x = L * Y, I.y = -M * n + g, I.z = L * H, u.push(I.x, I.y, I.z), x.set(Y, C, H).normalize(), d.push(x.x, x.y, x.z), f.push(U, 1 - M), S.push(m++);
        }
        _.push(S);
      }
      for (let R = 0; R < i; R++)
        for (let S = 0; S < s; S++) {
          const M = _[S][R], L = _[S + 1][R], D = _[S + 1][R + 1], U = _[S][R + 1];
          (t > 0 || S !== 0) && (h.push(M, L, U), E += 3), (e > 0 || S !== s - 1) && (h.push(L, D, U), E += 3);
        }
      l.addGroup(p, E, 0), p += E;
    }
    function v(x) {
      const I = m, E = new q(), C = new T();
      let R = 0;
      const S = x === !0 ? t : e, M = x === !0 ? 1 : -1;
      for (let D = 1; D <= i; D++)
        u.push(0, g * M, 0), d.push(0, M, 0), f.push(0.5, 0.5), m++;
      const L = m;
      for (let D = 0; D <= i; D++) {
        const B = D / i * c + a, Y = Math.cos(B), H = Math.sin(B);
        C.x = S * H, C.y = g * M, C.z = S * Y, u.push(C.x, C.y, C.z), d.push(0, M, 0), E.x = Y * 0.5 + 0.5, E.y = H * 0.5 * M + 0.5, f.push(E.x, E.y), m++;
      }
      for (let D = 0; D < i; D++) {
        const U = I + D, B = L + D;
        x === !0 ? h.push(B, B + 1, U) : h.push(B + 1, B, U), R += 3;
      }
      l.addGroup(p, R, x === !0 ? 1 : 2), p += R;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Vi(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class vr extends Vi {
  constructor(t = 1, e = 1, n = 32, i = 1, s = !1, o = 0, a = Math.PI * 2) {
    super(0, t, e, n, i, s, o, a), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: i,
      openEnded: s,
      thetaStart: o,
      thetaLength: a
    };
  }
  static fromJSON(t) {
    return new vr(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class ri extends Vt {
  constructor(t = [], e = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: n,
      detail: i
    };
    const s = [], o = [];
    a(i), l(n), h(), this.setAttribute("position", new St(s, 3)), this.setAttribute("normal", new St(s.slice(), 3)), this.setAttribute("uv", new St(o, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(y) {
      const v = new T(), x = new T(), I = new T();
      for (let E = 0; E < e.length; E += 3)
        f(e[E + 0], v), f(e[E + 1], x), f(e[E + 2], I), c(v, x, I, y);
    }
    function c(y, v, x, I) {
      const E = I + 1, C = [];
      for (let R = 0; R <= E; R++) {
        C[R] = [];
        const S = y.clone().lerp(x, R / E), M = v.clone().lerp(x, R / E), L = E - R;
        for (let D = 0; D <= L; D++)
          D === 0 && R === E ? C[R][D] = S : C[R][D] = S.clone().lerp(M, D / L);
      }
      for (let R = 0; R < E; R++)
        for (let S = 0; S < 2 * (E - R) - 1; S++) {
          const M = Math.floor(S / 2);
          S % 2 === 0 ? (d(C[R][M + 1]), d(C[R + 1][M]), d(C[R][M])) : (d(C[R][M + 1]), d(C[R + 1][M + 1]), d(C[R + 1][M]));
        }
    }
    function l(y) {
      const v = new T();
      for (let x = 0; x < s.length; x += 3)
        v.x = s[x + 0], v.y = s[x + 1], v.z = s[x + 2], v.normalize().multiplyScalar(y), s[x + 0] = v.x, s[x + 1] = v.y, s[x + 2] = v.z;
    }
    function h() {
      const y = new T();
      for (let v = 0; v < s.length; v += 3) {
        y.x = s[v + 0], y.y = s[v + 1], y.z = s[v + 2];
        const x = g(y) / 2 / Math.PI + 0.5, I = p(y) / Math.PI + 0.5;
        o.push(x, 1 - I);
      }
      m(), u();
    }
    function u() {
      for (let y = 0; y < o.length; y += 6) {
        const v = o[y + 0], x = o[y + 2], I = o[y + 4], E = Math.max(v, x, I), C = Math.min(v, x, I);
        E > 0.9 && C < 0.1 && (v < 0.2 && (o[y + 0] += 1), x < 0.2 && (o[y + 2] += 1), I < 0.2 && (o[y + 4] += 1));
      }
    }
    function d(y) {
      s.push(y.x, y.y, y.z);
    }
    function f(y, v) {
      const x = y * 3;
      v.x = t[x + 0], v.y = t[x + 1], v.z = t[x + 2];
    }
    function m() {
      const y = new T(), v = new T(), x = new T(), I = new T(), E = new q(), C = new q(), R = new q();
      for (let S = 0, M = 0; S < s.length; S += 9, M += 6) {
        y.set(s[S + 0], s[S + 1], s[S + 2]), v.set(s[S + 3], s[S + 4], s[S + 5]), x.set(s[S + 6], s[S + 7], s[S + 8]), E.set(o[M + 0], o[M + 1]), C.set(o[M + 2], o[M + 3]), R.set(o[M + 4], o[M + 5]), I.copy(y).add(v).add(x).divideScalar(3);
        const L = g(I);
        _(E, M + 0, y, L), _(C, M + 2, v, L), _(R, M + 4, x, L);
      }
    }
    function _(y, v, x, I) {
      I < 0 && y.x === 1 && (o[v] = y.x - 1), x.x === 0 && x.z === 0 && (o[v] = I / 2 / Math.PI + 0.5);
    }
    function g(y) {
      return Math.atan2(y.z, -y.x);
    }
    function p(y) {
      return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ri(t.vertices, t.indices, t.radius, t.details);
  }
}
class Pa extends ri {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      // (±1/φ, ±φ, 0)
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      0,
      // (±φ, 0, ±1/φ)
      -n,
      0,
      -i,
      n,
      0,
      -i,
      -n,
      0,
      i,
      n,
      0,
      i
    ], o = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(s, o, t, e), this.type = "DodecahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new Pa(t.radius, t.detail);
  }
}
const co = /* @__PURE__ */ new T(), lo = /* @__PURE__ */ new T(), wc = /* @__PURE__ */ new T(), ho = /* @__PURE__ */ new Ye();
class Tl extends Vt {
  constructor(t = null, e = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: t,
      thresholdAngle: e
    }, t !== null) {
      const i = Math.pow(10, 4), s = Math.cos(Li * e), o = t.getIndex(), a = t.getAttribute("position"), c = o ? o.count : a.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < c; m += 3) {
        o ? (l[0] = o.getX(m), l[1] = o.getX(m + 1), l[2] = o.getX(m + 2)) : (l[0] = m, l[1] = m + 1, l[2] = m + 2);
        const { a: _, b: g, c: p } = ho;
        if (_.fromBufferAttribute(a, l[0]), g.fromBufferAttribute(a, l[1]), p.fromBufferAttribute(a, l[2]), ho.getNormal(wc), u[0] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, u[1] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let y = 0; y < 3; y++) {
            const v = (y + 1) % 3, x = u[y], I = u[v], E = ho[h[y]], C = ho[h[v]], R = `${x}_${I}`, S = `${I}_${x}`;
            S in d && d[S] ? (wc.dot(d[S].normal) <= s && (f.push(E.x, E.y, E.z), f.push(C.x, C.y, C.z)), d[S] = null) : R in d || (d[R] = {
              index0: l[y],
              index1: l[v],
              normal: wc.clone()
            });
          }
      }
      for (const m in d)
        if (d[m]) {
          const { index0: _, index1: g } = d[m];
          co.fromBufferAttribute(a, _), lo.fromBufferAttribute(a, g), f.push(co.x, co.y, co.z), f.push(lo.x, lo.y, lo.z);
        }
      this.setAttribute("position", new St(f, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
class Di extends or {
  constructor(t) {
    super(t), this.uuid = je(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(t) {
    return {
      shape: this.getPoints(t),
      holes: this.getPointsHoles(t)
    };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(new or().fromJSON(i));
    }
    return this;
  }
}
const xy = {
  triangulate: function(r, t, e = 2) {
    const n = t && t.length, i = n ? t[0] * e : r.length;
    let s = Qd(r, 0, i, e, !0);
    const o = [];
    if (!s || s.next === s.prev) return o;
    let a, c, l, h, u, d, f;
    if (n && (s = Sy(r, t, s, e)), r.length > 80 * e) {
      a = l = r[0], c = h = r[1];
      for (let m = e; m < i; m += e)
        u = r[m], d = r[m + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - a, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return ar(s, o, e, a, c, f, 0), o;
  }
};
function Qd(r, t, e, n, i) {
  let s, o;
  if (i === Uy(r, t, e, n) > 0)
    for (s = t; s < e; s += n) o = iu(s, r[s], r[s + 1], o);
  else
    for (s = e - n; s >= t; s -= n) o = iu(s, r[s], r[s + 1], o);
  return o && Ia(o, o.next) && (lr(o), o = o.next), o;
}
function Bi(r, t) {
  if (!r) return r;
  t || (t = r);
  let e = r, n;
  do
    if (n = !1, !e.steiner && (Ia(e, e.next) || ue(e.prev, e, e.next) === 0)) {
      if (lr(e), e = t = e.prev, e === e.next) break;
      n = !0;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function ar(r, t, e, n, i, s, o) {
  if (!r) return;
  !o && s && Cy(r, n, i, s);
  let a = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? vy(r, n, i, s) : yy(r)) {
      t.push(c.i / e | 0), t.push(r.i / e | 0), t.push(l.i / e | 0), lr(r), r = l.next, a = l.next;
      continue;
    }
    if (r = l, r === a) {
      o ? o === 1 ? (r = My(Bi(r), t, e), ar(r, t, e, n, i, s, 2)) : o === 2 && by(r, t, e, n, i, s) : ar(Bi(r), t, e, n, i, s, 1);
      break;
    }
  }
}
function yy(r) {
  const t = r.prev, e = r, n = r.next;
  if (ue(t, e, n) >= 0) return !1;
  const i = t.x, s = e.x, o = n.x, a = t.y, c = e.y, l = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > c ? a > l ? a : l : c > l ? c : l;
  let m = n.next;
  for (; m !== t; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && fs(i, a, s, c, o, l, m.x, m.y) && ue(m.prev, m, m.next) >= 0) return !1;
    m = m.next;
  }
  return !0;
}
function vy(r, t, e, n) {
  const i = r.prev, s = r, o = r.next;
  if (ue(i, s, o) >= 0) return !1;
  const a = i.x, c = s.x, l = o.x, h = i.y, u = s.y, d = o.y, f = a < c ? a < l ? a : l : c < l ? c : l, m = h < u ? h < d ? h : d : u < d ? u : d, _ = a > c ? a > l ? a : l : c > l ? c : l, g = h > u ? h > d ? h : d : u > d ? u : d, p = kc(f, m, t, e, n), y = kc(_, g, t, e, n);
  let v = r.prevZ, x = r.nextZ;
  for (; v && v.z >= p && x && x.z <= y; ) {
    if (v.x >= f && v.x <= _ && v.y >= m && v.y <= g && v !== i && v !== o && fs(a, h, c, u, l, d, v.x, v.y) && ue(v.prev, v, v.next) >= 0 || (v = v.prevZ, x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== o && fs(a, h, c, u, l, d, x.x, x.y) && ue(x.prev, x, x.next) >= 0)) return !1;
    x = x.nextZ;
  }
  for (; v && v.z >= p; ) {
    if (v.x >= f && v.x <= _ && v.y >= m && v.y <= g && v !== i && v !== o && fs(a, h, c, u, l, d, v.x, v.y) && ue(v.prev, v, v.next) >= 0) return !1;
    v = v.prevZ;
  }
  for (; x && x.z <= y; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== o && fs(a, h, c, u, l, d, x.x, x.y) && ue(x.prev, x, x.next) >= 0) return !1;
    x = x.nextZ;
  }
  return !0;
}
function My(r, t, e) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Ia(i, s) && tf(i, n, n.next, s) && cr(i, s) && cr(s, i) && (t.push(i.i / e | 0), t.push(n.i / e | 0), t.push(s.i / e | 0), lr(n), lr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return Bi(n);
}
function by(r, t, e, n, i, s) {
  let o = r;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Iy(o, a)) {
        let c = ef(o, a);
        o = Bi(o, o.next), c = Bi(c, c.next), ar(o, t, e, n, i, s, 0), ar(c, t, e, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r);
}
function Sy(r, t, e, n) {
  const i = [];
  let s, o, a, c, l;
  for (s = 0, o = t.length; s < o; s++)
    a = t[s] * n, c = s < o - 1 ? t[s + 1] * n : r.length, l = Qd(r, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(Py(l));
  for (i.sort(wy), s = 0; s < i.length; s++)
    e = Ey(i[s], e);
  return e;
}
function wy(r, t) {
  return r.x - t.x;
}
function Ey(r, t) {
  const e = Ty(r, t);
  if (!e)
    return t;
  const n = ef(e, r);
  return Bi(n, n.next), Bi(e, e.next);
}
function Ty(r, t) {
  let e = t, n = -1 / 0, i;
  const s = r.x, o = r.y;
  do {
    if (o <= e.y && o >= e.next.y && e.next.y !== e.y) {
      const d = e.x + (o - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= s && d > n && (n = d, i = e.x < e.next.x ? e : e.next, d === s))
        return i;
    }
    e = e.next;
  } while (e !== t);
  if (!i) return null;
  const a = i, c = i.x, l = i.y;
  let h = 1 / 0, u;
  e = i;
  do
    s >= e.x && e.x >= c && s !== e.x && fs(o < l ? s : n, o, c, l, o < l ? n : s, o, e.x, e.y) && (u = Math.abs(o - e.y) / (s - e.x), cr(e, r) && (u < h || u === h && (e.x > i.x || e.x === i.x && Ay(i, e))) && (i = e, h = u)), e = e.next;
  while (e !== a);
  return i;
}
function Ay(r, t) {
  return ue(r.prev, r, t.prev) < 0 && ue(t.next, r, r.next) < 0;
}
function Cy(r, t, e, n) {
  let i = r;
  do
    i.z === 0 && (i.z = kc(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Ry(i);
}
function Ry(r) {
  let t, e, n, i, s, o, a, c, l = 1;
  do {
    for (e = r, r = null, s = null, o = 0; e; ) {
      for (o++, n = e, a = 0, t = 0; t < l && (a++, n = n.nextZ, !!n); t++)
        ;
      for (c = l; a > 0 || c > 0 && n; )
        a !== 0 && (c === 0 || !n || e.z <= n.z) ? (i = e, e = e.nextZ, a--) : (i = n, n = n.nextZ, c--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      e = n;
    }
    s.nextZ = null, l *= 2;
  } while (o > 1);
  return r;
}
function kc(r, t, e, n, i) {
  return r = (r - e) * i | 0, t = (t - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, r | t << 1;
}
function Py(r) {
  let t = r, e = r;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== r);
  return e;
}
function fs(r, t, e, n, i, s, o, a) {
  return (i - o) * (t - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (e - o) * (t - a) && (e - o) * (s - a) >= (i - o) * (n - a);
}
function Iy(r, t) {
  return r.next.i !== t.i && r.prev.i !== t.i && !Ly(r, t) && // dones't intersect other edges
  (cr(r, t) && cr(t, r) && Dy(r, t) && // locally visible
  (ue(r.prev, r, t.prev) || ue(r, t.prev, t)) || // does not create opposite-facing sectors
  Ia(r, t) && ue(r.prev, r, r.next) > 0 && ue(t.prev, t, t.next) > 0);
}
function ue(r, t, e) {
  return (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y);
}
function Ia(r, t) {
  return r.x === t.x && r.y === t.y;
}
function tf(r, t, e, n) {
  const i = fo(ue(r, t, e)), s = fo(ue(r, t, n)), o = fo(ue(e, n, r)), a = fo(ue(e, n, t));
  return !!(i !== s && o !== a || i === 0 && uo(r, e, t) || s === 0 && uo(r, n, t) || o === 0 && uo(e, r, n) || a === 0 && uo(e, t, n));
}
function uo(r, t, e) {
  return t.x <= Math.max(r.x, e.x) && t.x >= Math.min(r.x, e.x) && t.y <= Math.max(r.y, e.y) && t.y >= Math.min(r.y, e.y);
}
function fo(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Ly(r, t) {
  let e = r;
  do {
    if (e.i !== r.i && e.next.i !== r.i && e.i !== t.i && e.next.i !== t.i && tf(e, e.next, r, t)) return !0;
    e = e.next;
  } while (e !== r);
  return !1;
}
function cr(r, t) {
  return ue(r.prev, r, r.next) < 0 ? ue(r, t, r.next) >= 0 && ue(r, r.prev, t) >= 0 : ue(r, t, r.prev) < 0 || ue(r, r.next, t) < 0;
}
function Dy(r, t) {
  let e = r, n = !1;
  const i = (r.x + t.x) / 2, s = (r.y + t.y) / 2;
  do
    e.y > s != e.next.y > s && e.next.y !== e.y && i < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== r);
  return n;
}
function ef(r, t) {
  const e = new Vc(r.i, r.x, r.y), n = new Vc(t.i, t.x, t.y), i = r.next, s = t.prev;
  return r.next = t, t.prev = r, e.next = i, i.prev = e, n.next = e, e.prev = n, s.next = n, n.prev = s, n;
}
function iu(r, t, e, n) {
  const i = new Vc(r, t, e);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function lr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function Vc(r, t, e) {
  this.i = r, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Uy(r, t, e, n) {
  let i = 0;
  for (let s = t, o = e - n; s < e; s += n)
    i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
  return i;
}
class Mn {
  // calculate area of the contour polygon
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, s = 0; s < e; i = s++)
      n += t[i].x * t[s].y - t[s].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return Mn.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [], i = [], s = [];
    su(t), ru(n, t);
    let o = t.length;
    e.forEach(su);
    for (let c = 0; c < e.length; c++)
      i.push(o), o += e[c].length, ru(n, e[c]);
    const a = xy.triangulate(n, i);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function su(r) {
  const t = r.length;
  t > 2 && r[t - 1].equals(r[0]) && r.pop();
}
function ru(r, t) {
  for (let e = 0; e < t.length; e++)
    r.push(t[e].x), r.push(t[e].y);
}
class La extends Vt {
  constructor(t = new Di([new q(0.5, 0.5), new q(-0.5, 0.5), new q(-0.5, -0.5), new q(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    const n = this, i = [], s = [];
    for (let a = 0, c = t.length; a < c; a++) {
      const l = t[a];
      o(l);
    }
    this.setAttribute("position", new St(i, 3)), this.setAttribute("uv", new St(s, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let d = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, m = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, g = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const p = e.extrudePath, y = e.UVGenerator !== void 0 ? e.UVGenerator : Ny;
      let v, x = !1, I, E, C, R;
      p && (v = p.getSpacedPoints(h), x = !0, d = !1, I = p.computeFrenetFrames(h, !1), E = new T(), C = new T(), R = new T()), d || (g = 0, f = 0, m = 0, _ = 0);
      const S = a.extractPoints(l);
      let M = S.shape;
      const L = S.holes;
      if (!Mn.isClockWise(M)) {
        M = M.reverse();
        for (let K = 0, st = L.length; K < st; K++) {
          const P = L[K];
          Mn.isClockWise(P) && (L[K] = P.reverse());
        }
      }
      const U = Mn.triangulateShape(M, L), B = M;
      for (let K = 0, st = L.length; K < st; K++) {
        const P = L[K];
        M = M.concat(P);
      }
      function Y(K, st, P) {
        return st || console.error("THREE.ExtrudeGeometry: vec does not exist"), K.clone().addScaledVector(st, P);
      }
      const H = M.length, j = U.length;
      function G(K, st, P) {
        let Ct, tt, yt;
        const ot = K.x - st.x, It = K.y - st.y, gt = P.x - K.x, A = P.y - K.y, b = ot * ot + It * It, z = ot * A - It * gt;
        if (Math.abs(z) > Number.EPSILON) {
          const Z = Math.sqrt(b), Q = Math.sqrt(gt * gt + A * A), $ = st.x - It / Z, wt = st.y + ot / Z, lt = P.x - A / Q, _t = P.y + gt / Q, Yt = ((lt - $) * A - (_t - wt) * gt) / (ot * A - It * gt);
          Ct = $ + ot * Yt - K.x, tt = wt + It * Yt - K.y;
          const et = Ct * Ct + tt * tt;
          if (et <= 2)
            return new q(Ct, tt);
          yt = Math.sqrt(et / 2);
        } else {
          let Z = !1;
          ot > Number.EPSILON ? gt > Number.EPSILON && (Z = !0) : ot < -Number.EPSILON ? gt < -Number.EPSILON && (Z = !0) : Math.sign(It) === Math.sign(A) && (Z = !0), Z ? (Ct = -It, tt = ot, yt = Math.sqrt(b)) : (Ct = ot, tt = It, yt = Math.sqrt(b / 2));
        }
        return new q(Ct / yt, tt / yt);
      }
      const at = [];
      for (let K = 0, st = B.length, P = st - 1, Ct = K + 1; K < st; K++, P++, Ct++)
        P === st && (P = 0), Ct === st && (Ct = 0), at[K] = G(B[K], B[P], B[Ct]);
      const dt = [];
      let xt, Ot = at.concat();
      for (let K = 0, st = L.length; K < st; K++) {
        const P = L[K];
        xt = [];
        for (let Ct = 0, tt = P.length, yt = tt - 1, ot = Ct + 1; Ct < tt; Ct++, yt++, ot++)
          yt === tt && (yt = 0), ot === tt && (ot = 0), xt[Ct] = G(P[Ct], P[yt], P[ot]);
        dt.push(xt), Ot = Ot.concat(xt);
      }
      for (let K = 0; K < g; K++) {
        const st = K / g, P = f * Math.cos(st * Math.PI / 2), Ct = m * Math.sin(st * Math.PI / 2) + _;
        for (let tt = 0, yt = B.length; tt < yt; tt++) {
          const ot = Y(B[tt], at[tt], Ct);
          it(ot.x, ot.y, -P);
        }
        for (let tt = 0, yt = L.length; tt < yt; tt++) {
          const ot = L[tt];
          xt = dt[tt];
          for (let It = 0, gt = ot.length; It < gt; It++) {
            const A = Y(ot[It], xt[It], Ct);
            it(A.x, A.y, -P);
          }
        }
      }
      const Jt = m + _;
      for (let K = 0; K < H; K++) {
        const st = d ? Y(M[K], Ot[K], Jt) : M[K];
        x ? (C.copy(I.normals[0]).multiplyScalar(st.x), E.copy(I.binormals[0]).multiplyScalar(st.y), R.copy(v[0]).add(C).add(E), it(R.x, R.y, R.z)) : it(st.x, st.y, 0);
      }
      for (let K = 1; K <= h; K++)
        for (let st = 0; st < H; st++) {
          const P = d ? Y(M[st], Ot[st], Jt) : M[st];
          x ? (C.copy(I.normals[K]).multiplyScalar(P.x), E.copy(I.binormals[K]).multiplyScalar(P.y), R.copy(v[K]).add(C).add(E), it(R.x, R.y, R.z)) : it(P.x, P.y, u / h * K);
        }
      for (let K = g - 1; K >= 0; K--) {
        const st = K / g, P = f * Math.cos(st * Math.PI / 2), Ct = m * Math.sin(st * Math.PI / 2) + _;
        for (let tt = 0, yt = B.length; tt < yt; tt++) {
          const ot = Y(B[tt], at[tt], Ct);
          it(ot.x, ot.y, u + P);
        }
        for (let tt = 0, yt = L.length; tt < yt; tt++) {
          const ot = L[tt];
          xt = dt[tt];
          for (let It = 0, gt = ot.length; It < gt; It++) {
            const A = Y(ot[It], xt[It], Ct);
            x ? it(A.x, A.y + v[h - 1].y, v[h - 1].x + P) : it(A.x, A.y, u + P);
          }
        }
      }
      X(), nt();
      function X() {
        const K = i.length / 3;
        if (d) {
          let st = 0, P = H * st;
          for (let Ct = 0; Ct < j; Ct++) {
            const tt = U[Ct];
            Pt(tt[2] + P, tt[1] + P, tt[0] + P);
          }
          st = h + g * 2, P = H * st;
          for (let Ct = 0; Ct < j; Ct++) {
            const tt = U[Ct];
            Pt(tt[0] + P, tt[1] + P, tt[2] + P);
          }
        } else {
          for (let st = 0; st < j; st++) {
            const P = U[st];
            Pt(P[2], P[1], P[0]);
          }
          for (let st = 0; st < j; st++) {
            const P = U[st];
            Pt(P[0] + H * h, P[1] + H * h, P[2] + H * h);
          }
        }
        n.addGroup(K, i.length / 3 - K, 0);
      }
      function nt() {
        const K = i.length / 3;
        let st = 0;
        bt(B, st), st += B.length;
        for (let P = 0, Ct = L.length; P < Ct; P++) {
          const tt = L[P];
          bt(tt, st), st += tt.length;
        }
        n.addGroup(K, i.length / 3 - K, 1);
      }
      function bt(K, st) {
        let P = K.length;
        for (; --P >= 0; ) {
          const Ct = P;
          let tt = P - 1;
          tt < 0 && (tt = K.length - 1);
          for (let yt = 0, ot = h + g * 2; yt < ot; yt++) {
            const It = H * yt, gt = H * (yt + 1), A = st + Ct + It, b = st + tt + It, z = st + tt + gt, Z = st + Ct + gt;
            Ft(A, b, z, Z);
          }
        }
      }
      function it(K, st, P) {
        c.push(K), c.push(st), c.push(P);
      }
      function Pt(K, st, P) {
        Ut(K), Ut(st), Ut(P);
        const Ct = i.length / 3, tt = y.generateTopUV(n, i, Ct - 3, Ct - 2, Ct - 1);
        Kt(tt[0]), Kt(tt[1]), Kt(tt[2]);
      }
      function Ft(K, st, P, Ct) {
        Ut(K), Ut(st), Ut(Ct), Ut(st), Ut(P), Ut(Ct);
        const tt = i.length / 3, yt = y.generateSideWallUV(n, i, tt - 6, tt - 3, tt - 2, tt - 1);
        Kt(yt[0]), Kt(yt[1]), Kt(yt[3]), Kt(yt[1]), Kt(yt[2]), Kt(yt[3]);
      }
      function Ut(K) {
        i.push(c[K * 3 + 0]), i.push(c[K * 3 + 1]), i.push(c[K * 3 + 2]);
      }
      function Kt(K) {
        s.push(K.x), s.push(K.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return Oy(e, n, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let s = 0, o = t.shapes.length; s < o; s++) {
      const a = e[t.shapes[s]];
      n.push(a);
    }
    const i = t.options.extrudePath;
    return i !== void 0 && (t.options.extrudePath = new ca[i.type]().fromJSON(i)), new La(n, t.options);
  }
}
const Ny = {
  generateTopUV: function(r, t, e, n, i) {
    const s = t[e * 3], o = t[e * 3 + 1], a = t[n * 3], c = t[n * 3 + 1], l = t[i * 3], h = t[i * 3 + 1];
    return [
      new q(s, o),
      new q(a, c),
      new q(l, h)
    ];
  },
  generateSideWallUV: function(r, t, e, n, i, s) {
    const o = t[e * 3], a = t[e * 3 + 1], c = t[e * 3 + 2], l = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], d = t[i * 3], f = t[i * 3 + 1], m = t[i * 3 + 2], _ = t[s * 3], g = t[s * 3 + 1], p = t[s * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new q(o, 1 - c),
      new q(l, 1 - u),
      new q(d, 1 - m),
      new q(_, 1 - p)
    ] : [
      new q(a, 1 - c),
      new q(h, 1 - u),
      new q(f, 1 - m),
      new q(g, 1 - p)
    ];
  }
};
function Oy(r, t, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      e.shapes.push(s.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class Mr extends ri {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], s = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, s, t, e), this.type = "IcosahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new Mr(t.radius, t.detail);
  }
}
class br extends ri {
  constructor(t = 1, e = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, t, e), this.type = "OctahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new br(t.radius, t.detail);
  }
}
class Da extends Vt {
  constructor(t = 0.5, e = 1, n = 32, i = 1, s = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: o
    }, n = Math.max(3, n), i = Math.max(1, i);
    const a = [], c = [], l = [], h = [];
    let u = t;
    const d = (e - t) / i, f = new T(), m = new q();
    for (let _ = 0; _ <= i; _++) {
      for (let g = 0; g <= n; g++) {
        const p = s + g / n * o;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), c.push(f.x, f.y, f.z), l.push(0, 0, 1), m.x = (f.x / e + 1) / 2, m.y = (f.y / e + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let _ = 0; _ < i; _++) {
      const g = _ * (n + 1);
      for (let p = 0; p < n; p++) {
        const y = p + g, v = y, x = y + n + 1, I = y + n + 2, E = y + 1;
        a.push(v, x, E), a.push(x, I, E);
      }
    }
    this.setIndex(a), this.setAttribute("position", new St(c, 3)), this.setAttribute("normal", new St(l, 3)), this.setAttribute("uv", new St(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Da(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}
class Ua extends Vt {
  constructor(t = new Di([new q(0, 0.5), new q(-0.5, -0.5), new q(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: t,
      curveSegments: e
    };
    const n = [], i = [], s = [], o = [];
    let a = 0, c = 0;
    if (Array.isArray(t) === !1)
      l(t);
    else
      for (let h = 0; h < t.length; h++)
        l(t[h]), this.addGroup(a, c, h), a += c, c = 0;
    this.setIndex(n), this.setAttribute("position", new St(i, 3)), this.setAttribute("normal", new St(s, 3)), this.setAttribute("uv", new St(o, 2));
    function l(h) {
      const u = i.length / 3, d = h.extractPoints(e);
      let f = d.shape;
      const m = d.holes;
      Mn.isClockWise(f) === !1 && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        const y = m[g];
        Mn.isClockWise(y) === !0 && (m[g] = y.reverse());
      }
      const _ = Mn.triangulateShape(f, m);
      for (let g = 0, p = m.length; g < p; g++) {
        const y = m[g];
        f = f.concat(y);
      }
      for (let g = 0, p = f.length; g < p; g++) {
        const y = f[g];
        i.push(y.x, y.y, 0), s.push(0, 0, 1), o.push(y.x, y.y);
      }
      for (let g = 0, p = _.length; g < p; g++) {
        const y = _[g], v = y[0] + u, x = y[1] + u, I = y[2] + u;
        n.push(v, x, I), c += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes;
    return Fy(e, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let i = 0, s = t.shapes.length; i < s; i++) {
      const o = e[t.shapes[i]];
      n.push(o);
    }
    return new Ua(n, t.curveSegments);
  }
}
function Fy(r, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let e = 0, n = r.length; e < n; e++) {
      const i = r[e];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return t;
}
class Sr extends Vt {
  constructor(t = 1, e = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: o,
      thetaLength: a
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const c = Math.min(o + a, Math.PI);
    let l = 0;
    const h = [], u = new T(), d = new T(), f = [], m = [], _ = [], g = [];
    for (let p = 0; p <= n; p++) {
      const y = [], v = p / n;
      let x = 0;
      p === 0 && o === 0 ? x = 0.5 / e : p === n && c === Math.PI && (x = -0.5 / e);
      for (let I = 0; I <= e; I++) {
        const E = I / e;
        u.x = -t * Math.cos(i + E * s) * Math.sin(o + v * a), u.y = t * Math.cos(o + v * a), u.z = t * Math.sin(i + E * s) * Math.sin(o + v * a), m.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), g.push(E + x, 1 - v), y.push(l++);
      }
      h.push(y);
    }
    for (let p = 0; p < n; p++)
      for (let y = 0; y < e; y++) {
        const v = h[p][y + 1], x = h[p][y], I = h[p + 1][y], E = h[p + 1][y + 1];
        (p !== 0 || o > 0) && f.push(v, x, E), (p !== n - 1 || c < Math.PI) && f.push(x, I, E);
      }
    this.setIndex(f), this.setAttribute("position", new St(m, 3)), this.setAttribute("normal", new St(_, 3)), this.setAttribute("uv", new St(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Sr(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class Na extends ri {
  constructor(t = 1, e = 0) {
    const n = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ], i = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(n, i, t, e), this.type = "TetrahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new Na(t.radius, t.detail);
  }
}
class Oa extends Vt {
  constructor(t = 1, e = 0.4, n = 12, i = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: n,
      tubularSegments: i,
      arc: s
    }, n = Math.floor(n), i = Math.floor(i);
    const o = [], a = [], c = [], l = [], h = new T(), u = new T(), d = new T();
    for (let f = 0; f <= n; f++)
      for (let m = 0; m <= i; m++) {
        const _ = m / i * s, g = f / n * Math.PI * 2;
        u.x = (t + e * Math.cos(g)) * Math.cos(_), u.y = (t + e * Math.cos(g)) * Math.sin(_), u.z = e * Math.sin(g), a.push(u.x, u.y, u.z), h.x = t * Math.cos(_), h.y = t * Math.sin(_), d.subVectors(u, h).normalize(), c.push(d.x, d.y, d.z), l.push(m / i), l.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let m = 1; m <= i; m++) {
        const _ = (i + 1) * f + m - 1, g = (i + 1) * (f - 1) + m - 1, p = (i + 1) * (f - 1) + m, y = (i + 1) * f + m;
        o.push(_, g, y), o.push(g, p, y);
      }
    this.setIndex(o), this.setAttribute("position", new St(a, 3)), this.setAttribute("normal", new St(c, 3)), this.setAttribute("uv", new St(l, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Oa(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class Fa extends Vt {
  constructor(t = 1, e = 0.4, n = 64, i = 8, s = 2, o = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: n,
      radialSegments: i,
      p: s,
      q: o
    }, n = Math.floor(n), i = Math.floor(i);
    const a = [], c = [], l = [], h = [], u = new T(), d = new T(), f = new T(), m = new T(), _ = new T(), g = new T(), p = new T();
    for (let v = 0; v <= n; ++v) {
      const x = v / n * s * Math.PI * 2;
      y(x, s, o, t, f), y(x + 0.01, s, o, t, m), g.subVectors(m, f), p.addVectors(m, f), _.crossVectors(g, p), p.crossVectors(_, g), _.normalize(), p.normalize();
      for (let I = 0; I <= i; ++I) {
        const E = I / i * Math.PI * 2, C = -e * Math.cos(E), R = e * Math.sin(E);
        u.x = f.x + (C * p.x + R * _.x), u.y = f.y + (C * p.y + R * _.y), u.z = f.z + (C * p.z + R * _.z), c.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), l.push(d.x, d.y, d.z), h.push(v / n), h.push(I / i);
      }
    }
    for (let v = 1; v <= n; v++)
      for (let x = 1; x <= i; x++) {
        const I = (i + 1) * (v - 1) + (x - 1), E = (i + 1) * v + (x - 1), C = (i + 1) * v + x, R = (i + 1) * (v - 1) + x;
        a.push(I, E, R), a.push(E, C, R);
      }
    this.setIndex(a), this.setAttribute("position", new St(c, 3)), this.setAttribute("normal", new St(l, 3)), this.setAttribute("uv", new St(h, 2));
    function y(v, x, I, E, C) {
      const R = Math.cos(v), S = Math.sin(v), M = I / x * v, L = Math.cos(M);
      C.x = E * (2 + L) * 0.5 * R, C.y = E * (2 + L) * S * 0.5, C.z = E * Math.sin(M) * 0.5;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Fa(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
  }
}
class Ba extends Vt {
  constructor(t = new wl(new T(-1, -1, 0), new T(-1, 1, 0), new T(1, 1, 0)), e = 64, n = 1, i = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: n,
      radialSegments: i,
      closed: s
    };
    const o = t.computeFrenetFrames(e, s);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
    const a = new T(), c = new T(), l = new q();
    let h = new T();
    const u = [], d = [], f = [], m = [];
    _(), this.setIndex(m), this.setAttribute("position", new St(u, 3)), this.setAttribute("normal", new St(d, 3)), this.setAttribute("uv", new St(f, 2));
    function _() {
      for (let v = 0; v < e; v++)
        g(v);
      g(s === !1 ? e : 0), y(), p();
    }
    function g(v) {
      h = t.getPointAt(v / e, h);
      const x = o.normals[v], I = o.binormals[v];
      for (let E = 0; E <= i; E++) {
        const C = E / i * Math.PI * 2, R = Math.sin(C), S = -Math.cos(C);
        c.x = S * x.x + R * I.x, c.y = S * x.y + R * I.y, c.z = S * x.z + R * I.z, c.normalize(), d.push(c.x, c.y, c.z), a.x = h.x + n * c.x, a.y = h.y + n * c.y, a.z = h.z + n * c.z, u.push(a.x, a.y, a.z);
      }
    }
    function p() {
      for (let v = 1; v <= e; v++)
        for (let x = 1; x <= i; x++) {
          const I = (i + 1) * (v - 1) + (x - 1), E = (i + 1) * v + (x - 1), C = (i + 1) * v + x, R = (i + 1) * (v - 1) + x;
          m.push(I, E, R), m.push(E, C, R);
        }
    }
    function y() {
      for (let v = 0; v <= e; v++)
        for (let x = 0; x <= i; x++)
          l.x = v / e, l.y = x / i, f.push(l.x, l.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  static fromJSON(t) {
    return new Ba(
      new ca[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed
    );
  }
}
class nf extends Vt {
  constructor(t = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: t
    }, t !== null) {
      const e = [], n = /* @__PURE__ */ new Set(), i = new T(), s = new T();
      if (t.index !== null) {
        const o = t.attributes.position, a = t.index;
        let c = t.groups;
        c.length === 0 && (c = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let l = 0, h = c.length; l < h; ++l) {
          const u = c[l], d = u.start, f = u.count;
          for (let m = d, _ = d + f; m < _; m += 3)
            for (let g = 0; g < 3; g++) {
              const p = a.getX(m + g), y = a.getX(m + (g + 1) % 3);
              i.fromBufferAttribute(o, p), s.fromBufferAttribute(o, y), ou(i, s, n) === !0 && (e.push(i.x, i.y, i.z), e.push(s.x, s.y, s.z));
            }
        }
      } else {
        const o = t.attributes.position;
        for (let a = 0, c = o.count / 3; a < c; a++)
          for (let l = 0; l < 3; l++) {
            const h = 3 * a + l, u = 3 * a + (l + 1) % 3;
            i.fromBufferAttribute(o, h), s.fromBufferAttribute(o, u), ou(i, s, n) === !0 && (e.push(i.x, i.y, i.z), e.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new St(e, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
function ou(r, t, e) {
  const n = `${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;
  return e.has(n) === !0 || e.has(i) === !0 ? !1 : (e.add(n), e.add(i), !0);
}
var au = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: Gn,
  CapsuleGeometry: Ca,
  CircleGeometry: Ra,
  ConeGeometry: vr,
  CylinderGeometry: Vi,
  DodecahedronGeometry: Pa,
  EdgesGeometry: Tl,
  ExtrudeGeometry: La,
  IcosahedronGeometry: Mr,
  LatheGeometry: yr,
  OctahedronGeometry: br,
  PlaneGeometry: Wn,
  PolyhedronGeometry: ri,
  RingGeometry: Da,
  ShapeGeometry: Ua,
  SphereGeometry: Sr,
  TetrahedronGeometry: Na,
  TorusGeometry: Oa,
  TorusKnotGeometry: Fa,
  TubeGeometry: Ba,
  WireframeGeometry: nf
});
class sf extends Ue {
  static get type() {
    return "ShadowMaterial";
  }
  constructor(t) {
    super(), this.isShadowMaterial = !0, this.color = new ut(0), this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this;
  }
}
class rf extends fn {
  static get type() {
    return "RawShaderMaterial";
  }
  constructor(t) {
    super(t), this.isRawShaderMaterial = !0;
  }
}
class wr extends Ue {
  static get type() {
    return "MeshStandardMaterial";
  }
  constructor(t) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.color = new ut(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ut(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = si, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Qe(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class of extends wr {
  static get type() {
    return "MeshPhysicalMaterial";
  }
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new q(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return pe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(e) {
        this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ut(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ut(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ut(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class af extends Ue {
  static get type() {
    return "MeshPhongMaterial";
  }
  constructor(t) {
    super(), this.isMeshPhongMaterial = !0, this.color = new ut(16777215), this.specular = new ut(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ut(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = si, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Qe(), this.combine = pr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class cf extends Ue {
  static get type() {
    return "MeshToonMaterial";
  }
  constructor(t) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.color = new ut(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ut(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = si, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
class lf extends Ue {
  static get type() {
    return "MeshNormalMaterial";
  }
  constructor(t) {
    super(), this.isMeshNormalMaterial = !0, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = si, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this;
  }
}
class hf extends Ue {
  static get type() {
    return "MeshLambertMaterial";
  }
  constructor(t) {
    super(), this.isMeshLambertMaterial = !0, this.color = new ut(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ut(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = si, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Qe(), this.combine = pr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class uf extends Ue {
  static get type() {
    return "MeshMatcapMaterial";
  }
  constructor(t) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.color = new ut(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = si, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class df extends Ne {
  static get type() {
    return "LineDashedMaterial";
  }
  constructor(t) {
    super(), this.isLineDashedMaterial = !0, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  }
}
function Ci(r, t, e) {
  return !r || // let 'undefined' and 'null' pass
  !e && r.constructor === t ? r : typeof t.BYTES_PER_ELEMENT == "number" ? new t(r) : Array.prototype.slice.call(r);
}
function ff(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function pf(r) {
  function t(i, s) {
    return r[i] - r[s];
  }
  const e = r.length, n = new Array(e);
  for (let i = 0; i !== e; ++i) n[i] = i;
  return n.sort(t), n;
}
function Hc(r, t, e) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, o = 0; o !== n; ++s) {
    const a = e[s] * t;
    for (let c = 0; c !== t; ++c)
      i[o++] = r[a + c];
  }
  return i;
}
function Al(r, t, e, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let o = s[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = s[n], o !== void 0 && (t.push(s.time), e.push.apply(e, o)), s = r[i++];
      while (s !== void 0);
    else if (o.toArray !== void 0)
      do
        o = s[n], o !== void 0 && (t.push(s.time), o.toArray(e, e.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        o = s[n], o !== void 0 && (t.push(s.time), e.push(o)), s = r[i++];
      while (s !== void 0);
}
function By(r, t, e, n, i = 30) {
  const s = r.clone();
  s.name = t;
  const o = [];
  for (let c = 0; c < s.tracks.length; ++c) {
    const l = s.tracks[c], h = l.getValueSize(), u = [], d = [];
    for (let f = 0; f < l.times.length; ++f) {
      const m = l.times[f] * i;
      if (!(m < e || m >= n)) {
        u.push(l.times[f]);
        for (let _ = 0; _ < h; ++_)
          d.push(l.values[f * h + _]);
      }
    }
    u.length !== 0 && (l.times = Ci(u, l.times.constructor), l.values = Ci(d, l.values.constructor), o.push(l));
  }
  s.tracks = o;
  let a = 1 / 0;
  for (let c = 0; c < s.tracks.length; ++c)
    a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
  for (let c = 0; c < s.tracks.length; ++c)
    s.tracks[c].shift(-1 * a);
  return s.resetDuration(), s;
}
function zy(r, t = 0, e = r, n = 30) {
  n <= 0 && (n = 30);
  const i = e.tracks.length, s = t / n;
  for (let o = 0; o < i; ++o) {
    const a = e.tracks[o], c = a.ValueTypeName;
    if (c === "bool" || c === "string") continue;
    const l = r.tracks.find(function(p) {
      return p.name === a.name && p.ValueTypeName === c;
    });
    if (l === void 0) continue;
    let h = 0;
    const u = a.getValueSize();
    a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = l.getValueSize();
    l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const m = a.times.length - 1;
    let _;
    if (s <= a.times[0]) {
      const p = h, y = u - h;
      _ = a.values.slice(p, y);
    } else if (s >= a.times[m]) {
      const p = m * u + h, y = p + u - h;
      _ = a.values.slice(p, y);
    } else {
      const p = a.createInterpolant(), y = h, v = u - h;
      p.evaluate(s), _ = p.resultBuffer.slice(y, v);
    }
    c === "quaternion" && new Ie().fromArray(_).normalize().conjugate().toArray(_);
    const g = l.times.length;
    for (let p = 0; p < g; ++p) {
      const y = p * f + d;
      if (c === "quaternion")
        Ie.multiplyQuaternionsFlat(
          l.values,
          y,
          _,
          0,
          l.values,
          y
        );
      else {
        const v = f - d * 2;
        for (let x = 0; x < v; ++x)
          l.values[y + x] -= _[x];
      }
    }
  }
  return r.blendMode = ol, r;
}
const ky = {
  convertArray: Ci,
  isTypedArray: ff,
  getKeyframeOrder: pf,
  sortedArray: Hc,
  flattenJSON: Al,
  subclip: By,
  makeClipAdditive: zy
};
class Er {
  constructor(t, e, n, i) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex, i = e[n], s = e[n - 1];
    t: {
      e: {
        let o;
        n: {
          i: if (!(t < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (t < s) break i;
                return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (s = i, i = e[++n], t < i)
                break e;
            }
            o = e.length;
            break n;
          }
          if (!(t >= s)) {
            const a = e[1];
            t < a && (n = 2, s = a);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = s, s = e[--n - 1], t >= s)
                break e;
            }
            o = n, n = 0;
            break n;
          }
          break t;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          t < e[a] ? o = a : n = a + 1;
        }
        if (i = e[n], s = e[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = t * i;
    for (let o = 0; o !== i; ++o)
      e[o] = n[s + o];
    return e;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class mf extends Er {
  constructor(t, e, n, i) {
    super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ei,
      endingEnd: Ei
    };
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions;
    let s = t - 2, o = t + 1, a = i[s], c = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Ti:
          s = t, a = 2 * e - n;
          break;
        case er:
          s = i.length - 2, a = e + i[s] - i[s + 1];
          break;
        default:
          s = t, a = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ti:
          o = t, c = 2 * n - e;
          break;
        case er:
          o = 1, c = n + i[1] - i[0];
          break;
        default:
          o = t - 1, c = e;
      }
    const l = (n - e) * 0.5, h = this.valueSize;
    this._weightPrev = l / (e - a), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = o * h;
  }
  interpolate_(t, e, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = t * a, l = c - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - e) / (i - e), _ = m * m, g = _ * m, p = -d * g + 2 * d * _ - d * m, y = (1 + d) * g + (-1.5 - 2 * d) * _ + (-0.5 + d) * m + 1, v = (-1 - f) * g + (1.5 + f) * _ + 0.5 * m, x = f * g - f * _;
    for (let I = 0; I !== a; ++I)
      s[I] = p * o[h + I] + y * o[l + I] + v * o[c + I] + x * o[u + I];
    return s;
  }
}
class Cl extends Er {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = t * a, l = c - a, h = (n - e) / (i - e), u = 1 - h;
    for (let d = 0; d !== a; ++d)
      s[d] = o[l + d] * u + o[c + d] * h;
    return s;
  }
}
class gf extends Er {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class gn {
  constructor(t, e, n, i) {
    if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = Ci(e, this.TimeBufferType), this.values = Ci(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON)
      n = e.toJSON(t);
    else {
      n = {
        name: t.name,
        times: Ci(t.times, Array),
        values: Ci(t.values, Array)
      };
      const i = t.getInterpolation();
      i !== t.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = t.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new gf(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new Cl(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new mf(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case tr:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case ra:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case bo:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return tr;
      case this.InterpolantFactoryMethodLinear:
        return ra;
      case this.InterpolantFactoryMethodSmooth:
        return bo;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] += t;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] *= t;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(t, e) {
    const n = this.times, i = n.length;
    let s = 0, o = i - 1;
    for (; s !== i && n[s] < t; )
      ++s;
    for (; o !== -1 && n[o] > e; )
      --o;
    if (++o, s !== 0 || o !== i) {
      s >= o && (o = Math.max(o, 1), s = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(s, o), this.values = this.values.slice(s * a, o * a);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
    let o = null;
    for (let a = 0; a !== s; a++) {
      const c = n[a];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), t = !1;
        break;
      }
      if (o !== null && o > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o), t = !1;
        break;
      }
      o = c;
    }
    if (i !== void 0 && ff(i))
      for (let a = 0, c = i.length; a !== c; ++a) {
        const l = i[a];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), t = !1;
          break;
        }
      }
    return t;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === bo, s = t.length - 1;
    let o = 1;
    for (let a = 1; a < s; ++a) {
      let c = !1;
      const l = t[a], h = t[a + 1];
      if (l !== h && (a !== 1 || l !== t[0]))
        if (i)
          c = !0;
        else {
          const u = a * n, d = u - n, f = u + n;
          for (let m = 0; m !== n; ++m) {
            const _ = e[u + m];
            if (_ !== e[d + m] || _ !== e[f + m]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (a !== o) {
          t[o] = t[a];
          const u = a * n, d = o * n;
          for (let f = 0; f !== n; ++f)
            e[d + f] = e[u + f];
        }
        ++o;
      }
    }
    if (s > 0) {
      t[o] = t[s];
      for (let a = s * n, c = o * n, l = 0; l !== n; ++l)
        e[c + l] = e[a + l];
      ++o;
    }
    return o !== t.length ? (this.times = t.slice(0, o), this.values = e.slice(0, o * n)) : (this.times = t, this.values = e), this;
  }
  clone() {
    const t = this.times.slice(), e = this.values.slice(), n = this.constructor, i = new n(this.name, t, e);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
gn.prototype.TimeBufferType = Float32Array;
gn.prototype.ValueBufferType = Float32Array;
gn.prototype.DefaultInterpolation = ra;
class Hi extends gn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, n) {
    super(t, e, n);
  }
}
Hi.prototype.ValueTypeName = "bool";
Hi.prototype.ValueBufferType = Array;
Hi.prototype.DefaultInterpolation = tr;
Hi.prototype.InterpolantFactoryMethodLinear = void 0;
Hi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Rl extends gn {
}
Rl.prototype.ValueTypeName = "color";
class hr extends gn {
}
hr.prototype.ValueTypeName = "number";
class _f extends Er {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - e) / (i - e);
    let l = t * a;
    for (let h = l + a; l !== h; l += 4)
      Ie.slerpFlat(s, 0, o, l - a, o, l, c);
    return s;
  }
}
class Tr extends gn {
  InterpolantFactoryMethodLinear(t) {
    return new _f(this.times, this.values, this.getValueSize(), t);
  }
}
Tr.prototype.ValueTypeName = "quaternion";
Tr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gi extends gn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, n) {
    super(t, e, n);
  }
}
Gi.prototype.ValueTypeName = "string";
Gi.prototype.ValueBufferType = Array;
Gi.prototype.DefaultInterpolation = tr;
Gi.prototype.InterpolantFactoryMethodLinear = void 0;
Gi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ur extends gn {
}
ur.prototype.ValueTypeName = "vector";
class dr {
  constructor(t = "", e = -1, n = [], i = ga) {
    this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = je(), this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [], n = t.tracks, i = 1 / (t.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      e.push(Hy(n[o]).scale(i));
    const s = new this(t.name, t.duration, e, t.blendMode);
    return s.uuid = t.uuid, s;
  }
  static toJSON(t) {
    const e = [], n = t.tracks, i = {
      name: t.name,
      duration: t.duration,
      tracks: e,
      uuid: t.uuid,
      blendMode: t.blendMode
    };
    for (let s = 0, o = n.length; s !== o; ++s)
      e.push(gn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const s = e.length, o = [];
    for (let a = 0; a < s; a++) {
      let c = [], l = [];
      c.push(
        (a + s - 1) % s,
        a,
        (a + 1) % s
      ), l.push(0, 1, 0);
      const h = pf(c);
      c = Hc(c, 1, h), l = Hc(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), o.push(
        new hr(
          ".morphTargetInfluences[" + e[a].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(t, -1, o);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const i = t;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === e)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = t.length; a < c; a++) {
      const l = t[a], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const o = [];
    for (const a in i)
      o.push(this.CreateFromMorphTargetSequence(a, i[a], e, n));
    return o;
  }
  // parse the animation.hierarchy format
  static parseAnimation(t, e) {
    if (!t)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, m, _) {
      if (f.length !== 0) {
        const g = [], p = [];
        Al(f, g, p, m), g.length !== 0 && _.push(new u(d, g, p));
      }
    }, i = [], s = t.name || "default", o = t.fps || 30, a = t.blendMode;
    let c = t.length || -1;
    const l = t.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let m;
          for (m = 0; m < d.length; m++)
            if (d[m].morphTargets)
              for (let _ = 0; _ < d[m].morphTargets.length; _++)
                f[d[m].morphTargets[_]] = -1;
          for (const _ in f) {
            const g = [], p = [];
            for (let y = 0; y !== d[m].morphTargets.length; ++y) {
              const v = d[m];
              g.push(v.time), p.push(v.morphTarget === _ ? 1 : 0);
            }
            i.push(new hr(".morphTargetInfluence[" + _ + "]", g, p));
          }
          c = f.length * o;
        } else {
          const f = ".bones[" + e[u].name + "]";
          n(
            ur,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            Tr,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            ur,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, a);
  }
  resetDuration() {
    const t = this.tracks;
    let e = 0;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = this.tracks[n];
      e = Math.max(e, s.times[s.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++)
      t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Vy(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return hr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ur;
    case "color":
      return Rl;
    case "quaternion":
      return Tr;
    case "bool":
    case "boolean":
      return Hi;
    case "string":
      return Gi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Hy(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = Vy(r.type);
  if (r.times === void 0) {
    const e = [], n = [];
    Al(r.keys, e, n, "value"), r.times = e, r.values = n;
  }
  return t.parse !== void 0 ? t.parse(r) : new t(r.name, r.times, r.values, r.interpolation);
}
const Fn = {
  enabled: !1,
  files: {},
  add: function(r, t) {
    this.enabled !== !1 && (this.files[r] = t);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Pl {
  constructor(t, e, n) {
    const i = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const f = l[u], m = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return m;
      }
      return null;
    };
  }
}
const xf = /* @__PURE__ */ new Pl();
class Ze {
  constructor(t) {
    this.manager = t !== void 0 ? t : xf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(t, i, e, s);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
Ze.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Dn = {};
class Gy extends Error {
  constructor(t, e) {
    super(t), this.response = e;
  }
}
class Xn extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = Fn.get(t);
    if (s !== void 0)
      return this.manager.itemStart(t), setTimeout(() => {
        e && e(s), this.manager.itemEnd(t);
      }, 0), s;
    if (Dn[t] !== void 0) {
      Dn[t].push({
        onLoad: e,
        onProgress: n,
        onError: i
      });
      return;
    }
    Dn[t] = [], Dn[t].push({
      onLoad: e,
      onProgress: n,
      onError: i
    });
    const o = new Request(t, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Dn[t], u = l.body.getReader(), d = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), f = d ? parseInt(d) : 0, m = f !== 0;
        let _ = 0;
        const g = new ReadableStream({
          start(p) {
            y();
            function y() {
              u.read().then(({ done: v, value: x }) => {
                if (v)
                  p.close();
                else {
                  _ += x.byteLength;
                  const I = new ProgressEvent("progress", { lengthComputable: m, loaded: _, total: f });
                  for (let E = 0, C = h.length; E < C; E++) {
                    const R = h[E];
                    R.onProgress && R.onProgress(I);
                  }
                  p.enqueue(x), y();
                }
              }, (v) => {
                p.error(v);
              });
            }
          }
        });
        return new Response(g);
      } else
        throw new Gy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return l.arrayBuffer().then((m) => f.decode(m));
          }
      }
    }).then((l) => {
      Fn.add(t, l);
      const h = Dn[t];
      delete Dn[t];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = Dn[t];
      if (h === void 0)
        throw this.manager.itemError(t), l;
      delete Dn[t];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(l);
      }
      this.manager.itemError(t);
    }).finally(() => {
      this.manager.itemEnd(t);
    }), this.manager.itemStart(t);
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
class Wy extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, o = new Xn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(a) {
      try {
        e(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(t);
      }
    }, n, i);
  }
  parse(t) {
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const i = dr.parse(t[n]);
      e.push(i);
    }
    return e;
  }
}
class Xy extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, o = [], a = new Ta(), c = new Xn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(s.withCredentials);
    let l = 0;
    function h(u) {
      c.load(t[u], function(d) {
        const f = s.parse(d, !0);
        o[u] = {
          width: f.width,
          height: f.height,
          format: f.format,
          mipmaps: f.mipmaps
        }, l += 1, l === 6 && (f.mipmapCount === 1 && (a.minFilter = _e), a.image = o, a.format = f.format, a.needsUpdate = !0, e && e(a));
      }, n, i);
    }
    if (Array.isArray(t))
      for (let u = 0, d = t.length; u < d; ++u)
        h(u);
    else
      c.load(t, function(u) {
        const d = s.parse(u, !0);
        if (d.isCubemap) {
          const f = d.mipmaps.length / d.mipmapCount;
          for (let m = 0; m < f; m++) {
            o[m] = { mipmaps: [] };
            for (let _ = 0; _ < d.mipmapCount; _++)
              o[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + _]), o[m].format = d.format, o[m].width = d.width, o[m].height = d.height;
          }
          a.image = o;
        } else
          a.image.width = d.width, a.image.height = d.height, a.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (a.minFilter = _e), a.format = d.format, a.needsUpdate = !0, e && e(a);
      }, n, i);
    return a;
  }
}
class fr extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = this, o = Fn.get(t);
    if (o !== void 0)
      return s.manager.itemStart(t), setTimeout(function() {
        e && e(o), s.manager.itemEnd(t);
      }, 0), o;
    const a = sr("img");
    function c() {
      h(), Fn.add(t, this), e && e(this), s.manager.itemEnd(t);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(t), s.manager.itemEnd(t);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(t), a.src = t, a;
  }
}
class Yy extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = new _r();
    s.colorSpace = Be;
    const o = new fr(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function c(l) {
      o.load(t[l], function(h) {
        s.images[l] = h, a++, a === 6 && (s.needsUpdate = !0, e && e(s));
      }, void 0, i);
    }
    for (let l = 0; l < t.length; ++l)
      c(l);
    return s;
  }
}
class qy extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, o = new un(), a = new Xn(this.manager);
    return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(s.withCredentials), a.load(t, function(c) {
      let l;
      try {
        l = s.parse(c);
      } catch (h) {
        if (i !== void 0)
          i(h);
        else {
          console.error(h);
          return;
        }
      }
      l.image !== void 0 ? o.image = l.image : l.data !== void 0 && (o.image.width = l.width, o.image.height = l.height, o.image.data = l.data), o.wrapS = l.wrapS !== void 0 ? l.wrapS : nn, o.wrapT = l.wrapT !== void 0 ? l.wrapT : nn, o.magFilter = l.magFilter !== void 0 ? l.magFilter : _e, o.minFilter = l.minFilter !== void 0 ? l.minFilter : _e, o.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 && (o.colorSpace = l.colorSpace), l.flipY !== void 0 && (o.flipY = l.flipY), l.format !== void 0 && (o.format = l.format), l.type !== void 0 && (o.type = l.type), l.mipmaps !== void 0 && (o.mipmaps = l.mipmaps, o.minFilter = yn), l.mipmapCount === 1 && (o.minFilter = _e), l.generateMipmaps !== void 0 && (o.generateMipmaps = l.generateMipmaps), o.needsUpdate = !0, e && e(o, l);
    }, n, i), o;
  }
}
class Zy extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = new me(), o = new fr(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(a) {
      s.image = a, s.needsUpdate = !0, e !== void 0 && e(s);
    }, n, i), s;
  }
}
class oi extends Zt {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ut(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
class Il extends oi {
  constructor(t, e, n) {
    super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Zt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ut(e);
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const Ec = /* @__PURE__ */ new Dt(), cu = /* @__PURE__ */ new T(), lu = /* @__PURE__ */ new T();
class Ll {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new q(512, 512), this.map = null, this.mapPass = null, this.matrix = new Dt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new xr(), this._frameExtents = new q(1, 1), this._viewportCount = 1, this._viewports = [
      new Qt(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    cu.setFromMatrixPosition(t.matrixWorld), e.position.copy(cu), lu.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(lu), e.updateMatrixWorld(), Ec.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ec), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ec);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class $y extends Ll {
  constructor() {
    super(new Ee(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(t) {
    const e = this.camera, n = gs * 2 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = t.distance || e.far;
    (n !== e.fov || i !== e.aspect || s !== e.far) && (e.fov = n, e.aspect = i, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
class yf extends oi {
  constructor(t, e, n = 0, i = Math.PI / 3, s = 0, o = 2) {
    super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Zt.DEFAULT_UP), this.updateMatrix(), this.target = new Zt(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new $y();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
const hu = /* @__PURE__ */ new Dt(), Ns = /* @__PURE__ */ new T(), Tc = /* @__PURE__ */ new T();
class Jy extends Ll {
  constructor() {
    super(new Ee(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new q(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Qt(2, 1, 1, 1),
      // negative X
      new Qt(0, 1, 1, 1),
      // positive Z
      new Qt(3, 1, 1, 1),
      // negative Z
      new Qt(1, 1, 1, 1),
      // positive Y
      new Qt(3, 0, 1, 1),
      // negative Y
      new Qt(1, 0, 1, 1)
    ], this._cubeDirections = [
      new T(1, 0, 0),
      new T(-1, 0, 0),
      new T(0, 0, 1),
      new T(0, 0, -1),
      new T(0, 1, 0),
      new T(0, -1, 0)
    ], this._cubeUps = [
      new T(0, 1, 0),
      new T(0, 1, 0),
      new T(0, 1, 0),
      new T(0, 1, 0),
      new T(0, 0, 1),
      new T(0, 0, -1)
    ];
  }
  updateMatrices(t, e = 0) {
    const n = this.camera, i = this.matrix, s = t.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ns.setFromMatrixPosition(t.matrixWorld), n.position.copy(Ns), Tc.copy(n.position), Tc.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Tc), n.updateMatrixWorld(), i.makeTranslation(-Ns.x, -Ns.y, -Ns.z), hu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(hu);
  }
}
class vf extends oi {
  constructor(t, e, n = 0, i = 2) {
    super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Jy();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class Ky extends Ll {
  constructor() {
    super(new va(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Dl extends oi {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Zt.DEFAULT_UP), this.updateMatrix(), this.target = new Zt(), this.shadow = new Ky();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class Mf extends oi {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class bf extends oi {
  constructor(t, e, n = 10, i = 10) {
    super(t, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(t) {
    this.intensity = t / (this.width * this.height * Math.PI);
  }
  copy(t) {
    return super.copy(t), this.width = t.width, this.height = t.height, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.width = this.width, e.object.height = this.height, e;
  }
}
class Sf {
  constructor() {
    this.isSphericalHarmonics3 = !0, this.coefficients = [];
    for (let t = 0; t < 9; t++)
      this.coefficients.push(new T());
  }
  set(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].copy(t[e]);
    return this;
  }
  zero() {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].set(0, 0, 0);
    return this;
  }
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt(t, e) {
    const n = t.x, i = t.y, s = t.z, o = this.coefficients;
    return e.copy(o[0]).multiplyScalar(0.282095), e.addScaledVector(o[1], 0.488603 * i), e.addScaledVector(o[2], 0.488603 * s), e.addScaledVector(o[3], 0.488603 * n), e.addScaledVector(o[4], 1.092548 * (n * i)), e.addScaledVector(o[5], 1.092548 * (i * s)), e.addScaledVector(o[6], 0.315392 * (3 * s * s - 1)), e.addScaledVector(o[7], 1.092548 * (n * s)), e.addScaledVector(o[8], 0.546274 * (n * n - i * i)), e;
  }
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt(t, e) {
    const n = t.x, i = t.y, s = t.z, o = this.coefficients;
    return e.copy(o[0]).multiplyScalar(0.886227), e.addScaledVector(o[1], 2 * 0.511664 * i), e.addScaledVector(o[2], 2 * 0.511664 * s), e.addScaledVector(o[3], 2 * 0.511664 * n), e.addScaledVector(o[4], 2 * 0.429043 * n * i), e.addScaledVector(o[5], 2 * 0.429043 * i * s), e.addScaledVector(o[6], 0.743125 * s * s - 0.247708), e.addScaledVector(o[7], 2 * 0.429043 * n * s), e.addScaledVector(o[8], 0.429043 * (n * n - i * i)), e;
  }
  add(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].add(t.coefficients[e]);
    return this;
  }
  addScaledSH(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(t.coefficients[n], e);
    return this;
  }
  scale(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].multiplyScalar(t);
    return this;
  }
  lerp(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(t.coefficients[n], e);
    return this;
  }
  equals(t) {
    for (let e = 0; e < 9; e++)
      if (!this.coefficients[e].equals(t.coefficients[e]))
        return !1;
    return !0;
  }
  copy(t) {
    return this.set(t.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(t, e + i * 3);
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(t, e + i * 3);
    return t;
  }
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  static getBasisAt(t, e) {
    const n = t.x, i = t.y, s = t.z;
    e[0] = 0.282095, e[1] = 0.488603 * i, e[2] = 0.488603 * s, e[3] = 0.488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * s, e[6] = 0.315392 * (3 * s * s - 1), e[7] = 1.092548 * n * s, e[8] = 0.546274 * (n * n - i * i);
  }
}
class wf extends oi {
  constructor(t = new Sf(), e = 1) {
    super(void 0, e), this.isLightProbe = !0, this.sh = t;
  }
  copy(t) {
    return super.copy(t), this.sh.copy(t.sh), this;
  }
  fromJSON(t) {
    return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.sh = this.sh.toArray(), e;
  }
}
class za extends Ze {
  constructor(t) {
    super(t), this.textures = {};
  }
  load(t, e, n, i) {
    const s = this, o = new Xn(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(t, function(a) {
      try {
        e(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(t);
      }
    }, n, i);
  }
  parse(t) {
    const e = this.textures;
    function n(s) {
      return e[s] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", s), e[s];
    }
    const i = this.createMaterialFromType(t.type);
    if (t.uuid !== void 0 && (i.uuid = t.uuid), t.name !== void 0 && (i.name = t.name), t.color !== void 0 && i.color !== void 0 && i.color.setHex(t.color), t.roughness !== void 0 && (i.roughness = t.roughness), t.metalness !== void 0 && (i.metalness = t.metalness), t.sheen !== void 0 && (i.sheen = t.sheen), t.sheenColor !== void 0 && (i.sheenColor = new ut().setHex(t.sheenColor)), t.sheenRoughness !== void 0 && (i.sheenRoughness = t.sheenRoughness), t.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(t.emissive), t.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(t.specular), t.specularIntensity !== void 0 && (i.specularIntensity = t.specularIntensity), t.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(t.specularColor), t.shininess !== void 0 && (i.shininess = t.shininess), t.clearcoat !== void 0 && (i.clearcoat = t.clearcoat), t.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = t.clearcoatRoughness), t.dispersion !== void 0 && (i.dispersion = t.dispersion), t.iridescence !== void 0 && (i.iridescence = t.iridescence), t.iridescenceIOR !== void 0 && (i.iridescenceIOR = t.iridescenceIOR), t.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = t.iridescenceThicknessRange), t.transmission !== void 0 && (i.transmission = t.transmission), t.thickness !== void 0 && (i.thickness = t.thickness), t.attenuationDistance !== void 0 && (i.attenuationDistance = t.attenuationDistance), t.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(t.attenuationColor), t.anisotropy !== void 0 && (i.anisotropy = t.anisotropy), t.anisotropyRotation !== void 0 && (i.anisotropyRotation = t.anisotropyRotation), t.fog !== void 0 && (i.fog = t.fog), t.flatShading !== void 0 && (i.flatShading = t.flatShading), t.blending !== void 0 && (i.blending = t.blending), t.combine !== void 0 && (i.combine = t.combine), t.side !== void 0 && (i.side = t.side), t.shadowSide !== void 0 && (i.shadowSide = t.shadowSide), t.opacity !== void 0 && (i.opacity = t.opacity), t.transparent !== void 0 && (i.transparent = t.transparent), t.alphaTest !== void 0 && (i.alphaTest = t.alphaTest), t.alphaHash !== void 0 && (i.alphaHash = t.alphaHash), t.depthFunc !== void 0 && (i.depthFunc = t.depthFunc), t.depthTest !== void 0 && (i.depthTest = t.depthTest), t.depthWrite !== void 0 && (i.depthWrite = t.depthWrite), t.colorWrite !== void 0 && (i.colorWrite = t.colorWrite), t.blendSrc !== void 0 && (i.blendSrc = t.blendSrc), t.blendDst !== void 0 && (i.blendDst = t.blendDst), t.blendEquation !== void 0 && (i.blendEquation = t.blendEquation), t.blendSrcAlpha !== void 0 && (i.blendSrcAlpha = t.blendSrcAlpha), t.blendDstAlpha !== void 0 && (i.blendDstAlpha = t.blendDstAlpha), t.blendEquationAlpha !== void 0 && (i.blendEquationAlpha = t.blendEquationAlpha), t.blendColor !== void 0 && i.blendColor !== void 0 && i.blendColor.setHex(t.blendColor), t.blendAlpha !== void 0 && (i.blendAlpha = t.blendAlpha), t.stencilWriteMask !== void 0 && (i.stencilWriteMask = t.stencilWriteMask), t.stencilFunc !== void 0 && (i.stencilFunc = t.stencilFunc), t.stencilRef !== void 0 && (i.stencilRef = t.stencilRef), t.stencilFuncMask !== void 0 && (i.stencilFuncMask = t.stencilFuncMask), t.stencilFail !== void 0 && (i.stencilFail = t.stencilFail), t.stencilZFail !== void 0 && (i.stencilZFail = t.stencilZFail), t.stencilZPass !== void 0 && (i.stencilZPass = t.stencilZPass), t.stencilWrite !== void 0 && (i.stencilWrite = t.stencilWrite), t.wireframe !== void 0 && (i.wireframe = t.wireframe), t.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = t.wireframeLinewidth), t.wireframeLinecap !== void 0 && (i.wireframeLinecap = t.wireframeLinecap), t.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = t.wireframeLinejoin), t.rotation !== void 0 && (i.rotation = t.rotation), t.linewidth !== void 0 && (i.linewidth = t.linewidth), t.dashSize !== void 0 && (i.dashSize = t.dashSize), t.gapSize !== void 0 && (i.gapSize = t.gapSize), t.scale !== void 0 && (i.scale = t.scale), t.polygonOffset !== void 0 && (i.polygonOffset = t.polygonOffset), t.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = t.polygonOffsetFactor), t.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = t.polygonOffsetUnits), t.dithering !== void 0 && (i.dithering = t.dithering), t.alphaToCoverage !== void 0 && (i.alphaToCoverage = t.alphaToCoverage), t.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = t.premultipliedAlpha), t.forceSinglePass !== void 0 && (i.forceSinglePass = t.forceSinglePass), t.visible !== void 0 && (i.visible = t.visible), t.toneMapped !== void 0 && (i.toneMapped = t.toneMapped), t.userData !== void 0 && (i.userData = t.userData), t.vertexColors !== void 0 && (typeof t.vertexColors == "number" ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), t.uniforms !== void 0)
      for (const s in t.uniforms) {
        const o = t.uniforms[s];
        switch (i.uniforms[s] = {}, o.type) {
          case "t":
            i.uniforms[s].value = n(o.value);
            break;
          case "c":
            i.uniforms[s].value = new ut().setHex(o.value);
            break;
          case "v2":
            i.uniforms[s].value = new q().fromArray(o.value);
            break;
          case "v3":
            i.uniforms[s].value = new T().fromArray(o.value);
            break;
          case "v4":
            i.uniforms[s].value = new Qt().fromArray(o.value);
            break;
          case "m3":
            i.uniforms[s].value = new zt().fromArray(o.value);
            break;
          case "m4":
            i.uniforms[s].value = new Dt().fromArray(o.value);
            break;
          default:
            i.uniforms[s].value = o.value;
        }
      }
    if (t.defines !== void 0 && (i.defines = t.defines), t.vertexShader !== void 0 && (i.vertexShader = t.vertexShader), t.fragmentShader !== void 0 && (i.fragmentShader = t.fragmentShader), t.glslVersion !== void 0 && (i.glslVersion = t.glslVersion), t.extensions !== void 0)
      for (const s in t.extensions)
        i.extensions[s] = t.extensions[s];
    if (t.lights !== void 0 && (i.lights = t.lights), t.clipping !== void 0 && (i.clipping = t.clipping), t.size !== void 0 && (i.size = t.size), t.sizeAttenuation !== void 0 && (i.sizeAttenuation = t.sizeAttenuation), t.map !== void 0 && (i.map = n(t.map)), t.matcap !== void 0 && (i.matcap = n(t.matcap)), t.alphaMap !== void 0 && (i.alphaMap = n(t.alphaMap)), t.bumpMap !== void 0 && (i.bumpMap = n(t.bumpMap)), t.bumpScale !== void 0 && (i.bumpScale = t.bumpScale), t.normalMap !== void 0 && (i.normalMap = n(t.normalMap)), t.normalMapType !== void 0 && (i.normalMapType = t.normalMapType), t.normalScale !== void 0) {
      let s = t.normalScale;
      Array.isArray(s) === !1 && (s = [s, s]), i.normalScale = new q().fromArray(s);
    }
    return t.displacementMap !== void 0 && (i.displacementMap = n(t.displacementMap)), t.displacementScale !== void 0 && (i.displacementScale = t.displacementScale), t.displacementBias !== void 0 && (i.displacementBias = t.displacementBias), t.roughnessMap !== void 0 && (i.roughnessMap = n(t.roughnessMap)), t.metalnessMap !== void 0 && (i.metalnessMap = n(t.metalnessMap)), t.emissiveMap !== void 0 && (i.emissiveMap = n(t.emissiveMap)), t.emissiveIntensity !== void 0 && (i.emissiveIntensity = t.emissiveIntensity), t.specularMap !== void 0 && (i.specularMap = n(t.specularMap)), t.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(t.specularIntensityMap)), t.specularColorMap !== void 0 && (i.specularColorMap = n(t.specularColorMap)), t.envMap !== void 0 && (i.envMap = n(t.envMap)), t.envMapRotation !== void 0 && i.envMapRotation.fromArray(t.envMapRotation), t.envMapIntensity !== void 0 && (i.envMapIntensity = t.envMapIntensity), t.reflectivity !== void 0 && (i.reflectivity = t.reflectivity), t.refractionRatio !== void 0 && (i.refractionRatio = t.refractionRatio), t.lightMap !== void 0 && (i.lightMap = n(t.lightMap)), t.lightMapIntensity !== void 0 && (i.lightMapIntensity = t.lightMapIntensity), t.aoMap !== void 0 && (i.aoMap = n(t.aoMap)), t.aoMapIntensity !== void 0 && (i.aoMapIntensity = t.aoMapIntensity), t.gradientMap !== void 0 && (i.gradientMap = n(t.gradientMap)), t.clearcoatMap !== void 0 && (i.clearcoatMap = n(t.clearcoatMap)), t.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), t.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), t.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new q().fromArray(t.clearcoatNormalScale)), t.iridescenceMap !== void 0 && (i.iridescenceMap = n(t.iridescenceMap)), t.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(t.iridescenceThicknessMap)), t.transmissionMap !== void 0 && (i.transmissionMap = n(t.transmissionMap)), t.thicknessMap !== void 0 && (i.thicknessMap = n(t.thicknessMap)), t.anisotropyMap !== void 0 && (i.anisotropyMap = n(t.anisotropyMap)), t.sheenColorMap !== void 0 && (i.sheenColorMap = n(t.sheenColorMap)), t.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(t.sheenRoughnessMap)), i;
  }
  setTextures(t) {
    return this.textures = t, this;
  }
  createMaterialFromType(t) {
    return za.createMaterialFromType(t);
  }
  static createMaterialFromType(t) {
    const e = {
      ShadowMaterial: sf,
      SpriteMaterial: _l,
      RawShaderMaterial: rf,
      ShaderMaterial: fn,
      PointsMaterial: yl,
      MeshPhysicalMaterial: of,
      MeshStandardMaterial: wr,
      MeshPhongMaterial: af,
      MeshToonMaterial: cf,
      MeshNormalMaterial: lf,
      MeshLambertMaterial: hf,
      MeshDepthMaterial: pl,
      MeshDistanceMaterial: ml,
      MeshBasicMaterial: wn,
      MeshMatcapMaterial: uf,
      LineDashedMaterial: df,
      LineBasicMaterial: Ne,
      Material: Ue
    };
    return new e[t]();
  }
}
class Gc {
  static decodeText(t) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(t);
    let e = "";
    for (let n = 0, i = t.length; n < i; n++)
      e += String.fromCharCode(t[n]);
    try {
      return decodeURIComponent(escape(e));
    } catch {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return e === -1 ? "./" : t.slice(0, e + 1);
  }
  static resolveURL(t, e) {
    return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
  }
}
class Ef extends Vt {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(t) {
    return super.copy(t), this.instanceCount = t.instanceCount, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
  }
}
class Tf extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, o = new Xn(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(t, function(a) {
      try {
        e(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(t);
      }
    }, n, i);
  }
  parse(t) {
    const e = {}, n = {};
    function i(f, m) {
      if (e[m] !== void 0) return e[m];
      const g = f.interleavedBuffers[m], p = s(f, g.buffer), y = hs(g.type, p), v = new wa(y, g.stride);
      return v.uuid = g.uuid, e[m] = v, v;
    }
    function s(f, m) {
      if (n[m] !== void 0) return n[m];
      const g = f.arrayBuffers[m], p = new Uint32Array(g).buffer;
      return n[m] = p, p;
    }
    const o = t.isInstancedBufferGeometry ? new Ef() : new Vt(), a = t.data.index;
    if (a !== void 0) {
      const f = hs(a.type, a.array);
      o.setIndex(new oe(f, 1));
    }
    const c = t.data.attributes;
    for (const f in c) {
      const m = c[f];
      let _;
      if (m.isInterleavedBufferAttribute) {
        const g = i(t.data, m.data);
        _ = new Fi(g, m.itemSize, m.offset, m.normalized);
      } else {
        const g = hs(m.type, m.array), p = m.isInstancedBufferAttribute ? xs : oe;
        _ = new p(g, m.itemSize, m.normalized);
      }
      m.name !== void 0 && (_.name = m.name), m.usage !== void 0 && _.setUsage(m.usage), o.setAttribute(f, _);
    }
    const l = t.data.morphAttributes;
    if (l)
      for (const f in l) {
        const m = l[f], _ = [];
        for (let g = 0, p = m.length; g < p; g++) {
          const y = m[g];
          let v;
          if (y.isInterleavedBufferAttribute) {
            const x = i(t.data, y.data);
            v = new Fi(x, y.itemSize, y.offset, y.normalized);
          } else {
            const x = hs(y.type, y.array);
            v = new oe(x, y.itemSize, y.normalized);
          }
          y.name !== void 0 && (v.name = y.name), _.push(v);
        }
        o.morphAttributes[f] = _;
      }
    t.data.morphTargetsRelative && (o.morphTargetsRelative = !0);
    const u = t.data.groups || t.data.drawcalls || t.data.offsets;
    if (u !== void 0)
      for (let f = 0, m = u.length; f !== m; ++f) {
        const _ = u[f];
        o.addGroup(_.start, _.count, _.materialIndex);
      }
    const d = t.data.boundingSphere;
    if (d !== void 0) {
      const f = new T();
      d.center !== void 0 && f.fromArray(d.center), o.boundingSphere = new De(f, d.radius);
    }
    return t.name && (o.name = t.name), t.userData && (o.userData = t.userData), o;
  }
}
class jy extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, o = this.path === "" ? Gc.extractUrlBase(t) : this.path;
    this.resourcePath = this.resourcePath || o;
    const a = new Xn(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(c) {
      let l = null;
      try {
        l = JSON.parse(c);
      } catch (u) {
        i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + t + ".", u.message);
        return;
      }
      const h = l.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + t)), console.error("THREE.ObjectLoader: Can't load " + t);
        return;
      }
      s.parse(l, e);
    }, n, i);
  }
  async loadAsync(t, e) {
    const n = this, i = this.path === "" ? Gc.extractUrlBase(t) : this.path;
    this.resourcePath = this.resourcePath || i;
    const s = new Xn(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials);
    const o = await s.loadAsync(t, e), a = JSON.parse(o), c = a.metadata;
    if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry")
      throw new Error("THREE.ObjectLoader: Can't load " + t);
    return await n.parseAsync(a);
  }
  parse(t, e) {
    const n = this.parseAnimations(t.animations), i = this.parseShapes(t.shapes), s = this.parseGeometries(t.geometries, i), o = this.parseImages(t.images, function() {
      e !== void 0 && e(l);
    }), a = this.parseTextures(t.textures, o), c = this.parseMaterials(t.materials, a), l = this.parseObject(t.object, s, c, a, n), h = this.parseSkeletons(t.skeletons, l);
    if (this.bindSkeletons(l, h), this.bindLightTargets(l), e !== void 0) {
      let u = !1;
      for (const d in o)
        if (o[d].data instanceof HTMLImageElement) {
          u = !0;
          break;
        }
      u === !1 && e(l);
    }
    return l;
  }
  async parseAsync(t) {
    const e = this.parseAnimations(t.animations), n = this.parseShapes(t.shapes), i = this.parseGeometries(t.geometries, n), s = await this.parseImagesAsync(t.images), o = this.parseTextures(t.textures, s), a = this.parseMaterials(t.materials, o), c = this.parseObject(t.object, i, a, o, e), l = this.parseSkeletons(t.skeletons, c);
    return this.bindSkeletons(c, l), this.bindLightTargets(c), c;
  }
  parseShapes(t) {
    const e = {};
    if (t !== void 0)
      for (let n = 0, i = t.length; n < i; n++) {
        const s = new Di().fromJSON(t[n]);
        e[s.uuid] = s;
      }
    return e;
  }
  parseSkeletons(t, e) {
    const n = {}, i = {};
    if (e.traverse(function(s) {
      s.isBone && (i[s.uuid] = s);
    }), t !== void 0)
      for (let s = 0, o = t.length; s < o; s++) {
        const a = new Ea().fromJSON(t[s], i);
        n[a.uuid] = a;
      }
    return n;
  }
  parseGeometries(t, e) {
    const n = {};
    if (t !== void 0) {
      const i = new Tf();
      for (let s = 0, o = t.length; s < o; s++) {
        let a;
        const c = t[s];
        switch (c.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            a = i.parse(c);
            break;
          default:
            c.type in au ? a = au[c.type].fromJSON(c, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`);
        }
        a.uuid = c.uuid, c.name !== void 0 && (a.name = c.name), c.userData !== void 0 && (a.userData = c.userData), n[c.uuid] = a;
      }
    }
    return n;
  }
  parseMaterials(t, e) {
    const n = {}, i = {};
    if (t !== void 0) {
      const s = new za();
      s.setTextures(e);
      for (let o = 0, a = t.length; o < a; o++) {
        const c = t[o];
        n[c.uuid] === void 0 && (n[c.uuid] = s.parse(c)), i[c.uuid] = n[c.uuid];
      }
    }
    return i;
  }
  parseAnimations(t) {
    const e = {};
    if (t !== void 0)
      for (let n = 0; n < t.length; n++) {
        const i = t[n], s = dr.parse(i);
        e[s.uuid] = s;
      }
    return e;
  }
  parseImages(t, e) {
    const n = this, i = {};
    let s;
    function o(c) {
      return n.manager.itemStart(c), s.load(c, function() {
        n.manager.itemEnd(c);
      }, void 0, function() {
        n.manager.itemError(c), n.manager.itemEnd(c);
      });
    }
    function a(c) {
      if (typeof c == "string") {
        const l = c, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l) ? l : n.resourcePath + l;
        return o(h);
      } else
        return c.data ? {
          data: hs(c.type, c.data),
          width: c.width,
          height: c.height
        } : null;
    }
    if (t !== void 0 && t.length > 0) {
      const c = new Pl(e);
      s = new fr(c), s.setCrossOrigin(this.crossOrigin);
      for (let l = 0, h = t.length; l < h; l++) {
        const u = t[l], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m], p = a(g);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new un(p.data, p.width, p.height)));
          }
          i[u.uuid] = new Ai(f);
        } else {
          const f = a(u.url);
          i[u.uuid] = new Ai(f);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(t) {
    const e = this, n = {};
    let i;
    async function s(o) {
      if (typeof o == "string") {
        const a = o, c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a) ? a : e.resourcePath + a;
        return await i.loadAsync(c);
      } else
        return o.data ? {
          data: hs(o.type, o.data),
          width: o.width,
          height: o.height
        } : null;
    }
    if (t !== void 0 && t.length > 0) {
      i = new fr(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let o = 0, a = t.length; o < a; o++) {
        const c = t[o], l = c.url;
        if (Array.isArray(l)) {
          const h = [];
          for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u], m = await s(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new un(m.data, m.width, m.height)));
          }
          n[c.uuid] = new Ai(h);
        } else {
          const h = await s(c.url);
          n[c.uuid] = new Ai(h);
        }
      }
    }
    return n;
  }
  parseTextures(t, e) {
    function n(s, o) {
      return typeof s == "number" ? s : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", s), o[s]);
    }
    const i = {};
    if (t !== void 0)
      for (let s = 0, o = t.length; s < o; s++) {
        const a = t[s];
        a.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), e[a.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", a.image);
        const c = e[a.image], l = c.data;
        let h;
        Array.isArray(l) ? (h = new _r(), l.length === 6 && (h.needsUpdate = !0)) : (l && l.data ? h = new un() : h = new me(), l && (h.needsUpdate = !0)), h.source = c, h.uuid = a.uuid, a.name !== void 0 && (h.name = a.name), a.mapping !== void 0 && (h.mapping = n(a.mapping, Qy)), a.channel !== void 0 && (h.channel = a.channel), a.offset !== void 0 && h.offset.fromArray(a.offset), a.repeat !== void 0 && h.repeat.fromArray(a.repeat), a.center !== void 0 && h.center.fromArray(a.center), a.rotation !== void 0 && (h.rotation = a.rotation), a.wrap !== void 0 && (h.wrapS = n(a.wrap[0], uu), h.wrapT = n(a.wrap[1], uu)), a.format !== void 0 && (h.format = a.format), a.internalFormat !== void 0 && (h.internalFormat = a.internalFormat), a.type !== void 0 && (h.type = a.type), a.colorSpace !== void 0 && (h.colorSpace = a.colorSpace), a.minFilter !== void 0 && (h.minFilter = n(a.minFilter, du)), a.magFilter !== void 0 && (h.magFilter = n(a.magFilter, du)), a.anisotropy !== void 0 && (h.anisotropy = a.anisotropy), a.flipY !== void 0 && (h.flipY = a.flipY), a.generateMipmaps !== void 0 && (h.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (h.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (h.compareFunction = a.compareFunction), a.userData !== void 0 && (h.userData = a.userData), i[a.uuid] = h;
      }
    return i;
  }
  parseObject(t, e, n, i, s) {
    let o;
    function a(d) {
      return e[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), e[d];
    }
    function c(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m];
            n[g] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", g), f.push(n[g]);
          }
          return f;
        }
        return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
      }
    }
    function l(d) {
      return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
    }
    let h, u;
    switch (t.type) {
      case "Scene":
        o = new gl(), t.background !== void 0 && (Number.isInteger(t.background) ? o.background = new ut(t.background) : o.background = l(t.background)), t.environment !== void 0 && (o.environment = l(t.environment)), t.fog !== void 0 && (t.fog.type === "Fog" ? o.fog = new Sa(t.fog.color, t.fog.near, t.fog.far) : t.fog.type === "FogExp2" && (o.fog = new ba(t.fog.color, t.fog.density)), t.fog.name !== "" && (o.fog.name = t.fog.name)), t.backgroundBlurriness !== void 0 && (o.backgroundBlurriness = t.backgroundBlurriness), t.backgroundIntensity !== void 0 && (o.backgroundIntensity = t.backgroundIntensity), t.backgroundRotation !== void 0 && o.backgroundRotation.fromArray(t.backgroundRotation), t.environmentIntensity !== void 0 && (o.environmentIntensity = t.environmentIntensity), t.environmentRotation !== void 0 && o.environmentRotation.fromArray(t.environmentRotation);
        break;
      case "PerspectiveCamera":
        o = new Ee(t.fov, t.aspect, t.near, t.far), t.focus !== void 0 && (o.focus = t.focus), t.zoom !== void 0 && (o.zoom = t.zoom), t.filmGauge !== void 0 && (o.filmGauge = t.filmGauge), t.filmOffset !== void 0 && (o.filmOffset = t.filmOffset), t.view !== void 0 && (o.view = Object.assign({}, t.view));
        break;
      case "OrthographicCamera":
        o = new va(t.left, t.right, t.top, t.bottom, t.near, t.far), t.zoom !== void 0 && (o.zoom = t.zoom), t.view !== void 0 && (o.view = Object.assign({}, t.view));
        break;
      case "AmbientLight":
        o = new Mf(t.color, t.intensity);
        break;
      case "DirectionalLight":
        o = new Dl(t.color, t.intensity), o.target = t.target || "";
        break;
      case "PointLight":
        o = new vf(t.color, t.intensity, t.distance, t.decay);
        break;
      case "RectAreaLight":
        o = new bf(t.color, t.intensity, t.width, t.height);
        break;
      case "SpotLight":
        o = new yf(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay), o.target = t.target || "";
        break;
      case "HemisphereLight":
        o = new Il(t.color, t.groundColor, t.intensity);
        break;
      case "LightProbe":
        o = new wf().fromJSON(t);
        break;
      case "SkinnedMesh":
        h = a(t.geometry), u = c(t.material), o = new Wd(h, u), t.bindMode !== void 0 && (o.bindMode = t.bindMode), t.bindMatrix !== void 0 && o.bindMatrix.fromArray(t.bindMatrix), t.skeleton !== void 0 && (o.skeleton = t.skeleton);
        break;
      case "Mesh":
        h = a(t.geometry), u = c(t.material), o = new ye(h, u);
        break;
      case "InstancedMesh":
        h = a(t.geometry), u = c(t.material);
        const d = t.count, f = t.instanceMatrix, m = t.instanceColor;
        o = new rr(h, u, d), o.instanceMatrix = new xs(new Float32Array(f.array), 16), m !== void 0 && (o.instanceColor = new xs(new Float32Array(m.array), m.itemSize));
        break;
      case "BatchedMesh":
        h = a(t.geometry), u = c(t.material), o = new Xd(t.maxInstanceCount, t.maxVertexCount, t.maxIndexCount, u), o.geometry = h, o.perObjectFrustumCulled = t.perObjectFrustumCulled, o.sortObjects = t.sortObjects, o._drawRanges = t.drawRanges, o._reservedRanges = t.reservedRanges, o._visibility = t.visibility, o._active = t.active, o._bounds = t.bounds.map((_) => {
          const g = new Le();
          g.min.fromArray(_.boxMin), g.max.fromArray(_.boxMax);
          const p = new De();
          return p.radius = _.sphereRadius, p.center.fromArray(_.sphereCenter), {
            boxInitialized: _.boxInitialized,
            box: g,
            sphereInitialized: _.sphereInitialized,
            sphere: p
          };
        }), o._maxInstanceCount = t.maxInstanceCount, o._maxVertexCount = t.maxVertexCount, o._maxIndexCount = t.maxIndexCount, o._geometryInitialized = t.geometryInitialized, o._geometryCount = t.geometryCount, o._matricesTexture = l(t.matricesTexture.uuid), t.colorsTexture !== void 0 && (o._colorsTexture = l(t.colorsTexture.uuid));
        break;
      case "LOD":
        o = new Gd();
        break;
      case "Line":
        o = new ii(a(t.geometry), c(t.material));
        break;
      case "LineLoop":
        o = new Yd(a(t.geometry), c(t.material));
        break;
      case "LineSegments":
        o = new pn(a(t.geometry), c(t.material));
        break;
      case "PointCloud":
      case "Points":
        o = new qd(a(t.geometry), c(t.material));
        break;
      case "Sprite":
        o = new Hd(c(t.material));
        break;
      case "Group":
        o = new ds();
        break;
      case "Bone":
        o = new xl();
        break;
      default:
        o = new Zt();
    }
    if (o.uuid = t.uuid, t.name !== void 0 && (o.name = t.name), t.matrix !== void 0 ? (o.matrix.fromArray(t.matrix), t.matrixAutoUpdate !== void 0 && (o.matrixAutoUpdate = t.matrixAutoUpdate), o.matrixAutoUpdate && o.matrix.decompose(o.position, o.quaternion, o.scale)) : (t.position !== void 0 && o.position.fromArray(t.position), t.rotation !== void 0 && o.rotation.fromArray(t.rotation), t.quaternion !== void 0 && o.quaternion.fromArray(t.quaternion), t.scale !== void 0 && o.scale.fromArray(t.scale)), t.up !== void 0 && o.up.fromArray(t.up), t.castShadow !== void 0 && (o.castShadow = t.castShadow), t.receiveShadow !== void 0 && (o.receiveShadow = t.receiveShadow), t.shadow && (t.shadow.intensity !== void 0 && (o.shadow.intensity = t.shadow.intensity), t.shadow.bias !== void 0 && (o.shadow.bias = t.shadow.bias), t.shadow.normalBias !== void 0 && (o.shadow.normalBias = t.shadow.normalBias), t.shadow.radius !== void 0 && (o.shadow.radius = t.shadow.radius), t.shadow.mapSize !== void 0 && o.shadow.mapSize.fromArray(t.shadow.mapSize), t.shadow.camera !== void 0 && (o.shadow.camera = this.parseObject(t.shadow.camera))), t.visible !== void 0 && (o.visible = t.visible), t.frustumCulled !== void 0 && (o.frustumCulled = t.frustumCulled), t.renderOrder !== void 0 && (o.renderOrder = t.renderOrder), t.userData !== void 0 && (o.userData = t.userData), t.layers !== void 0 && (o.layers.mask = t.layers), t.children !== void 0) {
      const d = t.children;
      for (let f = 0; f < d.length; f++)
        o.add(this.parseObject(d[f], e, n, i, s));
    }
    if (t.animations !== void 0) {
      const d = t.animations;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        o.animations.push(s[m]);
      }
    }
    if (t.type === "LOD") {
      t.autoUpdate !== void 0 && (o.autoUpdate = t.autoUpdate);
      const d = t.levels;
      for (let f = 0; f < d.length; f++) {
        const m = d[f], _ = o.getObjectByProperty("uuid", m.object);
        _ !== void 0 && o.addLevel(_, m.distance, m.hysteresis);
      }
    }
    return o;
  }
  bindSkeletons(t, e) {
    Object.keys(e).length !== 0 && t.traverse(function(n) {
      if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
        const i = e[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
  bindLightTargets(t) {
    t.traverse(function(e) {
      if (e.isDirectionalLight || e.isSpotLight) {
        const n = e.target, i = t.getObjectByProperty("uuid", n);
        i !== void 0 ? e.target = i : e.target = new Zt();
      }
    });
  }
}
const Qy = {
  UVMapping: la,
  CubeReflectionMapping: Vn,
  CubeRefractionMapping: ni,
  EquirectangularReflectionMapping: Js,
  EquirectangularRefractionMapping: Ks,
  CubeUVReflectionMapping: ys
}, uu = {
  RepeatWrapping: js,
  ClampToEdgeWrapping: nn,
  MirroredRepeatWrapping: Qs
}, du = {
  NearestFilter: Te,
  NearestMipmapNearestFilter: Jc,
  NearestMipmapLinearFilter: ls,
  LinearFilter: _e,
  LinearMipmapNearestFilter: zs,
  LinearMipmapLinearFilter: yn
};
class tv extends Ze {
  constructor(t) {
    super(t), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(t) {
    return this.options = t, this;
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = this, o = Fn.get(t);
    if (o !== void 0) {
      if (s.manager.itemStart(t), o.then) {
        o.then((l) => {
          e && e(l), s.manager.itemEnd(t);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        e && e(o), s.manager.itemEnd(t);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const c = fetch(t, a).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return Fn.add(t, l), e && e(l), s.manager.itemEnd(t), l;
    }).catch(function(l) {
      i && i(l), Fn.remove(t), s.manager.itemError(t), s.manager.itemEnd(t);
    });
    Fn.add(t, c), s.manager.itemStart(t);
  }
}
let po;
class Ul {
  static getContext() {
    return po === void 0 && (po = new (window.AudioContext || window.webkitAudioContext)()), po;
  }
  static setContext(t) {
    po = t;
  }
}
class ev extends Ze {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, o = new Xn(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(c) {
      try {
        const l = c.slice(0);
        Ul.getContext().decodeAudioData(l, function(u) {
          e(u);
        }).catch(a);
      } catch (l) {
        a(l);
      }
    }, n, i);
    function a(c) {
      i ? i(c) : console.error(c), s.manager.itemError(t);
    }
  }
}
const fu = /* @__PURE__ */ new Dt(), pu = /* @__PURE__ */ new Dt(), gi = /* @__PURE__ */ new Dt();
class nv {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new Ee(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Ee(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  update(t) {
    const e = this._cache;
    if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
      e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep, gi.copy(t.projectionMatrix);
      const i = e.eyeSep / 2, s = i * e.near / e.focus, o = e.near * Math.tan(Li * e.fov * 0.5) / e.zoom;
      let a, c;
      pu.elements[12] = -i, fu.elements[12] = i, a = -o * e.aspect + s, c = o * e.aspect + s, gi.elements[0] = 2 * e.near / (c - a), gi.elements[8] = (c + a) / (c - a), this.cameraL.projectionMatrix.copy(gi), a = -o * e.aspect - s, c = o * e.aspect - s, gi.elements[0] = 2 * e.near / (c - a), gi.elements[8] = (c + a) / (c - a), this.cameraR.projectionMatrix.copy(gi);
    }
    this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(pu), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(fu);
  }
}
class Af {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = mu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const e = mu();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function mu() {
  return performance.now();
}
const _i = /* @__PURE__ */ new T(), gu = /* @__PURE__ */ new Ie(), iv = /* @__PURE__ */ new T(), xi = /* @__PURE__ */ new T();
class sv extends Zt {
  constructor() {
    super(), this.type = "AudioListener", this.context = Ul.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Af();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(t) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t);
    const e = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(_i, gu, iv), xi.set(0, 0, -1).applyQuaternion(gu), e.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      e.positionX.linearRampToValueAtTime(_i.x, i), e.positionY.linearRampToValueAtTime(_i.y, i), e.positionZ.linearRampToValueAtTime(_i.z, i), e.forwardX.linearRampToValueAtTime(xi.x, i), e.forwardY.linearRampToValueAtTime(xi.y, i), e.forwardZ.linearRampToValueAtTime(xi.z, i), e.upX.linearRampToValueAtTime(n.x, i), e.upY.linearRampToValueAtTime(n.y, i), e.upZ.linearRampToValueAtTime(n.z, i);
    } else
      e.setPosition(_i.x, _i.y, _i.z), e.setOrientation(xi.x, xi.y, xi.z, n.x, n.y, n.z);
  }
}
class Cf extends Zt {
  constructor(t) {
    super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
  }
  setMediaElementSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
  }
  setMediaStreamSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
  }
  setBuffer(t) {
    return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(t = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + t;
    const e = this.context.createBufferSource();
    return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop(t = 0) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + t), this.source.onended = null), this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].connect(this.filters[t]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++)
          this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else
        this.source.disconnect(this.getOutput());
      return this._connected = !1, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(t) {
    return t || (t = []), this._connected === !0 ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
  }
  setDetune(t) {
    return this.detune = t, this.isPlaying === !0 && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(t) {
    return this.setFilters(t ? [t] : []);
  }
  setPlaybackRate(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = t, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = t, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(t) {
    return this.loopStart = t, this;
  }
  setLoopEnd(t) {
    return this.loopEnd = t, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
}
const yi = /* @__PURE__ */ new T(), _u = /* @__PURE__ */ new Ie(), rv = /* @__PURE__ */ new T(), vi = /* @__PURE__ */ new T();
class ov extends Cf {
  constructor(t) {
    super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(t) {
    return this.panner.refDistance = t, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(t) {
    return this.panner.rolloffFactor = t, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(t) {
    return this.panner.distanceModel = t, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(t) {
    return this.panner.maxDistance = t, this;
  }
  setDirectionalCone(t, e, n) {
    return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(t) {
    if (super.updateMatrixWorld(t), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
    this.matrixWorld.decompose(yi, _u, rv), vi.set(0, 0, 1).applyQuaternion(_u);
    const e = this.panner;
    if (e.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      e.positionX.linearRampToValueAtTime(yi.x, n), e.positionY.linearRampToValueAtTime(yi.y, n), e.positionZ.linearRampToValueAtTime(yi.z, n), e.orientationX.linearRampToValueAtTime(vi.x, n), e.orientationY.linearRampToValueAtTime(vi.y, n), e.orientationZ.linearRampToValueAtTime(vi.z, n);
    } else
      e.setPosition(yi.x, yi.y, yi.z), e.setOrientation(vi.x, vi.y, vi.z);
  }
}
class av {
  constructor(t, e = 2048) {
    this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let t = 0;
    const e = this.getFrequencyData();
    for (let n = 0; n < e.length; n++)
      t += e[n];
    return t / e.length;
  }
}
class Rf {
  constructor(t, e, n) {
    this.binding = t, this.valueSize = n;
    let i, s, o;
    switch (e) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(t, e) {
    const n = this.buffer, i = this.valueSize, s = t * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a)
        n[s + a] = n[a];
      o = e;
    } else {
      o += e;
      const a = e / o;
      this._mixBufferRegion(n, s, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(t) {
    const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(t) {
    const e = this.valueSize, n = this.buffer, i = t * e + e, s = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const c = e * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - s,
        e
      );
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
    for (let c = e, l = e + e; c !== l; ++c)
      if (n[c] !== n[c + e]) {
        a.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
    t.getValue(e, i);
    for (let s = n, o = i; s !== o; ++s)
      e[s] = e[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const t = this.valueSize * 3;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize, e = t + this.valueSize;
    for (let n = t; n < e; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[e + n] = this.buffer[t + n];
  }
  // mix functions
  _select(t, e, n, i, s) {
    if (i >= 0.5)
      for (let o = 0; o !== s; ++o)
        t[e + o] = t[n + o];
  }
  _slerp(t, e, n, i) {
    Ie.slerpFlat(t, e, t, e, t, n, i);
  }
  _slerpAdditive(t, e, n, i, s) {
    const o = this._workIndex * s;
    Ie.multiplyQuaternionsFlat(t, o, t, e, t, n), Ie.slerpFlat(t, e, t, e, t, o, i);
  }
  _lerp(t, e, n, i, s) {
    const o = 1 - i;
    for (let a = 0; a !== s; ++a) {
      const c = e + a;
      t[c] = t[c] * o + t[n + a] * i;
    }
  }
  _lerpAdditive(t, e, n, i, s) {
    for (let o = 0; o !== s; ++o) {
      const a = e + o;
      t[a] = t[a] + t[n + o] * i;
    }
  }
}
const Nl = "\\[\\]\\.:\\/", cv = new RegExp("[" + Nl + "]", "g"), Ol = "[^" + Nl + "]", lv = "[^" + Nl.replace("\\.", "") + "]", hv = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Ol), uv = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", lv), dv = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ol), fv = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ol), pv = new RegExp(
  "^" + hv + uv + dv + fv + "$"
), mv = ["material", "materials", "bones", "map"];
class gv {
  constructor(t, e, n) {
    const i = n || jt.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, i);
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}
class jt {
  constructor(t, e, n) {
    this.path = e, this.parsedPath = n || jt.parseTrackName(e), this.node = jt.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup ? new jt.Composite(t, e, n) : new jt(t, e, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(cv, "");
  }
  static parseTrackName(t) {
    const e = pv.exec(t);
    if (e === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: e[2],
      objectName: e[3],
      objectIndex: e[4],
      propertyName: e[5],
      // required
      propertyIndex: e[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      mv.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (n !== void 0)
        return n;
    }
    if (t.children) {
      const n = function(s) {
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          if (a.name === e || a.uuid === e)
            return a;
          const c = n(a.children);
          if (c) return c;
        }
        return null;
      }, i = n(t.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  // Direct
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let t = this.node;
    const e = this.parsedPath, n = e.objectName, i = e.propertyName;
    let s = e.propertyIndex;
    if (t || (t = jt.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++)
            if (t[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (l !== void 0) {
        if (t[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[l];
      }
    }
    const o = t[i];
    if (o === void 0) {
      const l = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", t);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = t, t.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
jt.Composite = gv;
jt.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
jt.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
jt.prototype.GetterByBindingType = [
  jt.prototype._getValue_direct,
  jt.prototype._getValue_array,
  jt.prototype._getValue_arrayElement,
  jt.prototype._getValue_toArray
];
jt.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    jt.prototype._setValue_direct,
    jt.prototype._setValue_direct_setNeedsUpdate,
    jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    jt.prototype._setValue_array,
    jt.prototype._setValue_array_setNeedsUpdate,
    jt.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    jt.prototype._setValue_arrayElement,
    jt.prototype._setValue_arrayElement_setNeedsUpdate,
    jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    jt.prototype._setValue_fromArray,
    jt.prototype._setValue_fromArray_setNeedsUpdate,
    jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class _v {
  constructor() {
    this.isAnimationObjectGroup = !0, this.uuid = je(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const t = {};
    this._indicesByUUID = t;
    for (let n = 0, i = arguments.length; n !== i; ++n)
      t[arguments[n].uuid] = n;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const e = this;
    this.stats = {
      objects: {
        get total() {
          return e._objects.length;
        },
        get inUse() {
          return this.total - e.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return e._bindings.length;
      }
    };
  }
  add() {
    const t = this._objects, e = this._indicesByUUID, n = this._paths, i = this._parsedPaths, s = this._bindings, o = s.length;
    let a, c = t.length, l = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let m = e[f];
      if (m === void 0) {
        m = c++, e[f] = m, t.push(d);
        for (let _ = 0, g = o; _ !== g; ++_)
          s[_].push(new jt(d, n[_], i[_]));
      } else if (m < l) {
        a = t[m];
        const _ = --l, g = t[_];
        e[g.uuid] = m, t[m] = g, e[f] = _, t[_] = d;
        for (let p = 0, y = o; p !== y; ++p) {
          const v = s[p], x = v[_];
          let I = v[m];
          v[m] = x, I === void 0 && (I = new jt(d, n[p], i[p])), v[_] = I;
        }
      } else t[m] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_;
    for (let o = 0, a = arguments.length; o !== a; ++o) {
      const c = arguments[o], l = c.uuid, h = e[l];
      if (h !== void 0 && h >= s) {
        const u = s++, d = t[u];
        e[d.uuid] = h, t[h] = d, e[l] = u, t[u] = c;
        for (let f = 0, m = i; f !== m; ++f) {
          const _ = n[f], g = _[u], p = _[h];
          _[h] = g, _[u] = p;
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  // remove & forget
  uncache() {
    const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_, o = t.length;
    for (let a = 0, c = arguments.length; a !== c; ++a) {
      const l = arguments[a], h = l.uuid, u = e[h];
      if (u !== void 0)
        if (delete e[h], u < s) {
          const d = --s, f = t[d], m = --o, _ = t[m];
          e[f.uuid] = u, t[u] = f, e[_.uuid] = d, t[d] = _, t.pop();
          for (let g = 0, p = i; g !== p; ++g) {
            const y = n[g], v = y[d], x = y[m];
            y[u] = v, y[d] = x, y.pop();
          }
        } else {
          const d = --o, f = t[d];
          d > 0 && (e[f.uuid] = u), t[u] = f, t.pop();
          for (let m = 0, _ = i; m !== _; ++m) {
            const g = n[m];
            g[u] = g[d], g.pop();
          }
        }
    }
    this.nCachedObjects_ = s;
  }
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_(t, e) {
    const n = this._bindingsIndicesByPath;
    let i = n[t];
    const s = this._bindings;
    if (i !== void 0) return s[i];
    const o = this._paths, a = this._parsedPaths, c = this._objects, l = c.length, h = this.nCachedObjects_, u = new Array(l);
    i = s.length, n[t] = i, o.push(t), a.push(e), s.push(u);
    for (let d = h, f = c.length; d !== f; ++d) {
      const m = c[d];
      u[d] = new jt(m, t, e);
    }
    return u;
  }
  unsubscribe_(t) {
    const e = this._bindingsIndicesByPath, n = e[t];
    if (n !== void 0) {
      const i = this._paths, s = this._parsedPaths, o = this._bindings, a = o.length - 1, c = o[a], l = t[a];
      e[l] = n, o[n] = c, o.pop(), s[n] = s[a], s.pop(), i[n] = i[a], i.pop();
    }
  }
}
class Pf {
  constructor(t, e, n = null, i = e.blendMode) {
    this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
    const s = e.tracks, o = s.length, a = new Array(o), c = {
      endingStart: Ei,
      endingEnd: Ei
    };
    for (let l = 0; l !== o; ++l) {
      const h = s[l].createInterpolant(null);
      a[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ud, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(t) {
    return this._startTime = t, this;
  }
  setLoop(t, e) {
    return this.loop = t, this.repetitions = e, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(t) {
    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if (t.fadeOut(e), this.fadeIn(e), n) {
      const i = this._clip.duration, s = t._clip.duration, o = s / i, a = i / s;
      t.warp(1, o, e), this.warp(a, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return t !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(t) {
    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return this.timeScale = this._clip.duration / t, this.stopWarping();
  }
  syncWith(t) {
    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const i = this._mixer, s = i.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const c = a.parameterPositions, l = a.sampleValues;
    return c[0] = s, c[1] = s + n, l[0] = t / o, l[1] = e / o, this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return t !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(t, e, n, i) {
    if (!this.enabled) {
      this._updateWeight(t);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (t - s) * n;
      c < 0 || n === 0 ? e = 0 : (this._startTime = null, e = n * c);
    }
    e *= this._updateTimeScale(t);
    const o = this._updateTime(e), a = this._updateWeight(t);
    if (a > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case ol:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulateAdditive(a);
          break;
        case ga:
        default:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulate(i, a);
      }
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = e, e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopWarping(), e === 0 ? this.paused = !0 : this.timeScale = e);
      }
    }
    return this._effectiveTimeScale = e, e;
  }
  _updateTime(t) {
    const e = this._clip.duration, n = this.loop;
    let i = this.time + t, s = this._loopCount;
    const o = n === dd;
    if (t === 0)
      return s === -1 ? i : o && (s & 1) === 1 ? e - i : i;
    if (n === hd) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      t: {
        if (i >= e)
          i = e;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break t;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: t < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (t >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= e || i < 0) {
        const a = Math.floor(i / e);
        i -= e * a, s += Math.abs(a);
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = t < 0;
            this._setEndings(l, !l, o);
          } else
            this._setEndings(!1, !1, o);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: a
          });
        }
      } else
        this.time = i;
      if (o && (s & 1) === 1)
        return e - i;
    }
    return i;
  }
  _setEndings(t, e, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = Ti, i.endingEnd = Ti) : (t ? i.endingStart = this.zeroSlopeAtStart ? Ti : Ei : i.endingStart = er, e ? i.endingEnd = this.zeroSlopeAtEnd ? Ti : Ei : i.endingEnd = er);
  }
  _scheduleFading(t, e, n) {
    const i = this._mixer, s = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, c = o.sampleValues;
    return a[0] = s, c[0] = e, a[1] = s + t, c[1] = n, this;
  }
}
const xv = new Float32Array(1);
class yv extends En {
  constructor(t) {
    super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root, i = t._clip.tracks, s = i.length, o = t._propertyBindings, a = t._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let u = 0; u !== s; ++u) {
      const d = i[u], f = d.name;
      let m = h[f];
      if (m !== void 0)
        ++m.referenceCount, o[u] = m;
      else {
        if (m = o[u], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, c, f));
          continue;
        }
        const _ = e && e._propertyBindings[u].binding.parsedPath;
        m = new Rf(
          jt.create(n, f, _),
          d.ValueTypeName,
          d.getValueSize()
        ), ++m.referenceCount, this._addInactiveBinding(m, c, f), o[u] = m;
      }
      a[u].resultBuffer = m.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (t._cacheIndex === null) {
        const n = (t._localRoot || this._root).uuid, i = t._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          t,
          s && s.knownActions[0]
        ), this._addInactiveAction(t, i, n);
      }
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const s = e[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const s = e[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(t);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const t = this;
    this.stats = {
      actions: {
        get total() {
          return t._actions.length;
        },
        get inUse() {
          return t._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return t._bindings.length;
        },
        get inUse() {
          return t._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return t._controlInterpolants.length;
        },
        get inUse() {
          return t._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return e !== null && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const i = this._actions, s = this._actionsByClip;
    let o = s[e];
    if (o === void 0)
      o = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, s[e] = o;
    else {
      const a = o.knownActions;
      t._byClipCacheIndex = a.length, a.push(t);
    }
    t._cacheIndex = i.length, i.push(t), o.actionByRoot[n] = t;
  }
  _removeInactiveAction(t) {
    const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
    n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
    const s = t._clip.uuid, o = this._actionsByClip, a = o[s], c = a.knownActions, l = c[c.length - 1], h = t._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), t._byClipCacheIndex = null;
    const u = a.actionByRoot, d = (t._localRoot || this._root).uuid;
    delete u[d], c.length === 0 && delete o[s], this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = e[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(t) {
    const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  _takeBackAction(t) {
    const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(t, e, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let o = i[e];
    o === void 0 && (o = {}, i[e] = o), o[n] = t, t._cacheIndex = s.length, s.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings, n = t.binding, i = n.rootNode.uuid, s = n.path, o = this._bindingsByRootAndName, a = o[i], c = e[e.length - 1], l = t._cacheIndex;
    c._cacheIndex = l, e[l] = c, e.pop(), delete a[s], Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  _takeBackBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
    let n = t[e];
    return n === void 0 && (n = new Cl(
      new Float32Array(2),
      new Float32Array(2),
      1,
      xv
    ), n.__cacheIndex = e, t[e] = n), n;
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, s = e[i];
    t.__cacheIndex = i, e[i] = t, s.__cacheIndex = n, e[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(t, e, n) {
    const i = e || this._root, s = i.uuid;
    let o = typeof t == "string" ? dr.findByName(i, t) : t;
    const a = o !== null ? o.uuid : t, c = this._actionsByClip[a];
    let l = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = ga), c !== void 0) {
      const u = c.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], o === null && (o = l._clip);
    }
    if (o === null) return null;
    const h = new Pf(this, o, e, n);
    return this._bindAction(h, l), this._addInactiveAction(h, a, s), h;
  }
  // get an existing action
  existingAction(t, e) {
    const n = e || this._root, i = n.uuid, s = typeof t == "string" ? dr.findByName(n, t) : t, o = s ? s.uuid : t, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const t = this._actions, e = this._nActiveActions;
    for (let n = e - 1; n >= 0; --n)
      t[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(t) {
    t *= this.timeScale;
    const e = this._actions, n = this._nActiveActions, i = this.time += t, s = Math.sign(t), o = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      e[l]._update(i, t, s, o);
    const a = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      a[l].apply(o);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(t) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++)
      this._actions[e].time = 0;
    return this.update(t);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(t) {
    const e = this._actions, n = t.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const o = s.knownActions;
      for (let a = 0, c = o.length; a !== c; ++a) {
        const l = o[a];
        this._deactivateAction(l);
        const h = l._cacheIndex, u = e[e.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = h, e[h] = u, e.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(t) {
    const e = t.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, c = a[e];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, s = i[e];
    if (s !== void 0)
      for (const o in s) {
        const a = s[o];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class Fl {
  constructor(t) {
    this.value = t;
  }
  clone() {
    return new Fl(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let vv = 0;
class Mv extends En {
  constructor() {
    super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: vv++ }), this.name = "", this.usage = nr, this.uniforms = [];
  }
  add(t) {
    return this.uniforms.push(t), this;
  }
  remove(t) {
    const e = this.uniforms.indexOf(t);
    return e !== -1 && this.uniforms.splice(e, 1), this;
  }
  setName(t) {
    return this.name = t, this;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(t) {
    this.name = t.name, this.usage = t.usage;
    const e = t.uniforms;
    this.uniforms.length = 0;
    for (let n = 0, i = e.length; n < i; n++) {
      const s = Array.isArray(e[n]) ? e[n] : [e[n]];
      for (let o = 0; o < s.length; o++)
        this.uniforms.push(s[o].clone());
    }
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class bv extends wa {
  constructor(t, e, n = 1) {
    super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  clone(t) {
    const e = super.clone(t);
    return e.meshPerAttribute = this.meshPerAttribute, e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
  }
}
class Sv {
  constructor(t, e, n, i, s) {
    this.isGLBufferAttribute = !0, this.name = "", this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = s, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setBuffer(t) {
    return this.buffer = t, this;
  }
  setType(t, e) {
    return this.type = t, this.elementSize = e, this;
  }
  setItemSize(t) {
    return this.itemSize = t, this;
  }
  setCount(t) {
    return this.count = t, this;
  }
}
const xu = /* @__PURE__ */ new Dt();
class If {
  constructor(t, e, n = 0, i = 1 / 0) {
    this.ray = new ki(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new xa(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return xu.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(xu), this;
  }
  intersectObject(t, e = !0, n = []) {
    return Wc(t, this, n, e), n.sort(yu), n;
  }
  intersectObjects(t, e = !0, n = []) {
    for (let i = 0, s = t.length; i < s; i++)
      Wc(t[i], this, n, e);
    return n.sort(yu), n;
  }
}
function yu(r, t) {
  return r.distance - t.distance;
}
function Wc(r, t, e, n) {
  let i = !0;
  if (r.layers.test(t.layers) && r.raycast(t, e) === !1 && (i = !1), i === !0 && n === !0) {
    const s = r.children;
    for (let o = 0, a = s.length; o < a; o++)
      Wc(s[o], t, e, !0);
  }
}
class Xc {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(pe(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wv {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.theta = e, this.y = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.theta = e, this.y = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Bl {
  constructor(t, e, n, i) {
    Bl.prototype.isMatrix2 = !0, this.elements = [
      1,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i);
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  set(t, e, n, i) {
    const s = this.elements;
    return s[0] = t, s[2] = e, s[1] = n, s[3] = i, this;
  }
}
const vu = /* @__PURE__ */ new q();
class Ev {
  constructor(t = new q(1 / 0, 1 / 0), e = new q(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = vu.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y;
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, vu).distanceTo(t);
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Mu = /* @__PURE__ */ new T(), mo = /* @__PURE__ */ new T();
class Tv {
  constructor(t = new T(), e = new T()) {
    this.start = t, this.end = e;
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    Mu.subVectors(t, this.start), mo.subVectors(this.end, this.start);
    const n = mo.dot(mo);
    let s = mo.dot(Mu) / n;
    return e && (s = pe(s, 0, 1)), s;
  }
  closestPointToPoint(t, e, n) {
    const i = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const bu = /* @__PURE__ */ new T();
class Av extends Zt {
  constructor(t, e) {
    super(), this.light = t, this.matrixAutoUpdate = !1, this.color = e, this.type = "SpotLightHelper";
    const n = new Vt(), i = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (let o = 0, a = 1, c = 32; o < c; o++, a++) {
      const l = o / c * Math.PI * 2, h = a / c * Math.PI * 2;
      i.push(
        Math.cos(l),
        Math.sin(l),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new St(i, 3));
    const s = new Ne({ fog: !1, toneMapped: !1 });
    this.cone = new pn(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), this.parent ? (this.parent.updateWorldMatrix(!0), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
    const t = this.light.distance ? this.light.distance : 1e3, e = t * Math.tan(this.light.angle);
    this.cone.scale.set(e, e, t), bu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(bu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const ti = /* @__PURE__ */ new T(), go = /* @__PURE__ */ new Dt(), Ac = /* @__PURE__ */ new Dt();
class Cv extends pn {
  constructor(t) {
    const e = Lf(t), n = new Vt(), i = [], s = [], o = new ut(0, 0, 1), a = new ut(0, 1, 0);
    for (let l = 0; l < e.length; l++) {
      const h = e[l];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(o.r, o.g, o.b), s.push(a.r, a.g, a.b));
    }
    n.setAttribute("position", new St(i, 3)), n.setAttribute("color", new St(s, 3));
    const c = new Ne({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, c), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(t) {
    const e = this.bones, n = this.geometry, i = n.getAttribute("position");
    Ac.copy(this.root.matrixWorld).invert();
    for (let s = 0, o = 0; s < e.length; s++) {
      const a = e[s];
      a.parent && a.parent.isBone && (go.multiplyMatrices(Ac, a.matrixWorld), ti.setFromMatrixPosition(go), i.setXYZ(o, ti.x, ti.y, ti.z), go.multiplyMatrices(Ac, a.parent.matrixWorld), ti.setFromMatrixPosition(go), i.setXYZ(o + 1, ti.x, ti.y, ti.z), o += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Lf(r) {
  const t = [];
  r.isBone === !0 && t.push(r);
  for (let e = 0; e < r.children.length; e++)
    t.push.apply(t, Lf(r.children[e]));
  return t;
}
class Rv extends ye {
  constructor(t, e, n) {
    const i = new Sr(e, 4, 2), s = new wn({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = t, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const Pv = /* @__PURE__ */ new T(), Su = /* @__PURE__ */ new ut(), wu = /* @__PURE__ */ new ut();
class Iv extends Zt {
  constructor(t, e, n) {
    super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new br(e);
    i.rotateY(Math.PI * 0.5), this.material = new wn({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), o = new Float32Array(s.count * 3);
    i.setAttribute("color", new oe(o, 3)), this.add(new ye(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const t = this.children[0];
    if (this.color !== void 0)
      this.material.color.set(this.color);
    else {
      const e = t.geometry.getAttribute("color");
      Su.copy(this.light.color), wu.copy(this.light.groundColor);
      for (let n = 0, i = e.count; n < i; n++) {
        const s = n < i / 2 ? Su : wu;
        e.setXYZ(n, s.r, s.g, s.b);
      }
      e.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), t.lookAt(Pv.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class Lv extends pn {
  constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
    n = new ut(n), i = new ut(i);
    const s = e / 2, o = t / e, a = t / 2, c = [], l = [];
    for (let d = 0, f = 0, m = -a; d <= e; d++, m += o) {
      c.push(-a, 0, m, a, 0, m), c.push(m, 0, -a, m, 0, a);
      const _ = d === s ? n : i;
      _.toArray(l, f), f += 3, _.toArray(l, f), f += 3, _.toArray(l, f), f += 3, _.toArray(l, f), f += 3;
    }
    const h = new Vt();
    h.setAttribute("position", new St(c, 3)), h.setAttribute("color", new St(l, 3));
    const u = new Ne({ vertexColors: !0, toneMapped: !1 });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Dv extends pn {
  constructor(t = 10, e = 16, n = 8, i = 64, s = 4473924, o = 8947848) {
    s = new ut(s), o = new ut(o);
    const a = [], c = [];
    if (e > 1)
      for (let u = 0; u < e; u++) {
        const d = u / e * (Math.PI * 2), f = Math.sin(d) * t, m = Math.cos(d) * t;
        a.push(0, 0, 0), a.push(f, 0, m);
        const _ = u & 1 ? s : o;
        c.push(_.r, _.g, _.b), c.push(_.r, _.g, _.b);
      }
    for (let u = 0; u < n; u++) {
      const d = u & 1 ? s : o, f = t - t / n * u;
      for (let m = 0; m < i; m++) {
        let _ = m / i * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f;
        a.push(g, 0, p), c.push(d.r, d.g, d.b), _ = (m + 1) / i * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f, a.push(g, 0, p), c.push(d.r, d.g, d.b);
      }
    }
    const l = new Vt();
    l.setAttribute("position", new St(a, 3)), l.setAttribute("color", new St(c, 3));
    const h = new Ne({ vertexColors: !0, toneMapped: !1 });
    super(l, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Eu = /* @__PURE__ */ new T(), _o = /* @__PURE__ */ new T(), Tu = /* @__PURE__ */ new T();
class Uv extends Zt {
  constructor(t, e, n) {
    super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", e === void 0 && (e = 1);
    let i = new Vt();
    i.setAttribute("position", new St([
      -e,
      e,
      0,
      e,
      e,
      0,
      e,
      -e,
      0,
      -e,
      -e,
      0,
      -e,
      e,
      0
    ], 3));
    const s = new Ne({ fog: !1, toneMapped: !1 });
    this.lightPlane = new ii(i, s), this.add(this.lightPlane), i = new Vt(), i.setAttribute("position", new St([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new ii(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), Eu.setFromMatrixPosition(this.light.matrixWorld), _o.setFromMatrixPosition(this.light.target.matrixWorld), Tu.subVectors(_o, Eu), this.lightPlane.lookAt(_o), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(_o), this.targetLine.scale.z = Tu.length();
  }
}
const xo = /* @__PURE__ */ new T(), fe = /* @__PURE__ */ new ya();
class Nv extends pn {
  constructor(t) {
    const e = new Vt(), n = new Ne({ color: 16777215, vertexColors: !0, toneMapped: !1 }), i = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(m, _) {
      c(m), c(_);
    }
    function c(m) {
      i.push(0, 0, 0), s.push(0, 0, 0), o[m] === void 0 && (o[m] = []), o[m].push(i.length / 3 - 1);
    }
    e.setAttribute("position", new St(i, 3)), e.setAttribute("color", new St(s, 3)), super(e, n), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const l = new ut(16755200), h = new ut(16711680), u = new ut(43775), d = new ut(16777215), f = new ut(3355443);
    this.setColors(l, h, u, d, f);
  }
  setColors(t, e, n, i, s) {
    const a = this.geometry.getAttribute("color");
    a.setXYZ(0, t.r, t.g, t.b), a.setXYZ(1, t.r, t.g, t.b), a.setXYZ(2, t.r, t.g, t.b), a.setXYZ(3, t.r, t.g, t.b), a.setXYZ(4, t.r, t.g, t.b), a.setXYZ(5, t.r, t.g, t.b), a.setXYZ(6, t.r, t.g, t.b), a.setXYZ(7, t.r, t.g, t.b), a.setXYZ(8, t.r, t.g, t.b), a.setXYZ(9, t.r, t.g, t.b), a.setXYZ(10, t.r, t.g, t.b), a.setXYZ(11, t.r, t.g, t.b), a.setXYZ(12, t.r, t.g, t.b), a.setXYZ(13, t.r, t.g, t.b), a.setXYZ(14, t.r, t.g, t.b), a.setXYZ(15, t.r, t.g, t.b), a.setXYZ(16, t.r, t.g, t.b), a.setXYZ(17, t.r, t.g, t.b), a.setXYZ(18, t.r, t.g, t.b), a.setXYZ(19, t.r, t.g, t.b), a.setXYZ(20, t.r, t.g, t.b), a.setXYZ(21, t.r, t.g, t.b), a.setXYZ(22, t.r, t.g, t.b), a.setXYZ(23, t.r, t.g, t.b), a.setXYZ(24, e.r, e.g, e.b), a.setXYZ(25, e.r, e.g, e.b), a.setXYZ(26, e.r, e.g, e.b), a.setXYZ(27, e.r, e.g, e.b), a.setXYZ(28, e.r, e.g, e.b), a.setXYZ(29, e.r, e.g, e.b), a.setXYZ(30, e.r, e.g, e.b), a.setXYZ(31, e.r, e.g, e.b), a.setXYZ(32, n.r, n.g, n.b), a.setXYZ(33, n.r, n.g, n.b), a.setXYZ(34, n.r, n.g, n.b), a.setXYZ(35, n.r, n.g, n.b), a.setXYZ(36, n.r, n.g, n.b), a.setXYZ(37, n.r, n.g, n.b), a.setXYZ(38, i.r, i.g, i.b), a.setXYZ(39, i.r, i.g, i.b), a.setXYZ(40, s.r, s.g, s.b), a.setXYZ(41, s.r, s.g, s.b), a.setXYZ(42, s.r, s.g, s.b), a.setXYZ(43, s.r, s.g, s.b), a.setXYZ(44, s.r, s.g, s.b), a.setXYZ(45, s.r, s.g, s.b), a.setXYZ(46, s.r, s.g, s.b), a.setXYZ(47, s.r, s.g, s.b), a.setXYZ(48, s.r, s.g, s.b), a.setXYZ(49, s.r, s.g, s.b), a.needsUpdate = !0;
  }
  update() {
    const t = this.geometry, e = this.pointMap, n = 1, i = 1;
    fe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), ge("c", e, t, fe, 0, 0, -1), ge("t", e, t, fe, 0, 0, 1), ge("n1", e, t, fe, -n, -i, -1), ge("n2", e, t, fe, n, -i, -1), ge("n3", e, t, fe, -n, i, -1), ge("n4", e, t, fe, n, i, -1), ge("f1", e, t, fe, -n, -i, 1), ge("f2", e, t, fe, n, -i, 1), ge("f3", e, t, fe, -n, i, 1), ge("f4", e, t, fe, n, i, 1), ge("u1", e, t, fe, n * 0.7, i * 1.1, -1), ge("u2", e, t, fe, -n * 0.7, i * 1.1, -1), ge("u3", e, t, fe, 0, i * 2, -1), ge("cf1", e, t, fe, -n, 0, 1), ge("cf2", e, t, fe, n, 0, 1), ge("cf3", e, t, fe, 0, -i, 1), ge("cf4", e, t, fe, 0, i, 1), ge("cn1", e, t, fe, -n, 0, -1), ge("cn2", e, t, fe, n, 0, -1), ge("cn3", e, t, fe, 0, -i, -1), ge("cn4", e, t, fe, 0, i, -1), t.getAttribute("position").needsUpdate = !0;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function ge(r, t, e, n, i, s, o) {
  xo.set(i, s, o).unproject(n);
  const a = t[r];
  if (a !== void 0) {
    const c = e.getAttribute("position");
    for (let l = 0, h = a.length; l < h; l++)
      c.setXYZ(a[l], xo.x, xo.y, xo.z);
  }
}
const yo = /* @__PURE__ */ new Le();
class Ov extends pn {
  constructor(t, e = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(24), s = new Vt();
    s.setIndex(new oe(n, 1)), s.setAttribute("position", new oe(i, 3)), super(s, new Ne({ color: e, toneMapped: !1 })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
  }
  update(t) {
    if (t !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && yo.setFromObject(this.object), yo.isEmpty()) return;
    const e = yo.min, n = yo.max, i = this.geometry.attributes.position, s = i.array;
    s[0] = n.x, s[1] = n.y, s[2] = n.z, s[3] = e.x, s[4] = n.y, s[5] = n.z, s[6] = e.x, s[7] = e.y, s[8] = n.z, s[9] = n.x, s[10] = e.y, s[11] = n.z, s[12] = n.x, s[13] = n.y, s[14] = e.z, s[15] = e.x, s[16] = n.y, s[17] = e.z, s[18] = e.x, s[19] = e.y, s[20] = e.z, s[21] = n.x, s[22] = e.y, s[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
  setFromObject(t) {
    return this.object = t, this.update(), this;
  }
  copy(t, e) {
    return super.copy(t, e), this.object = t.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Fv extends pn {
  constructor(t, e = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new Vt();
    s.setIndex(new oe(n, 1)), s.setAttribute("position", new St(i, 3)), super(s, new Ne({ color: e, toneMapped: !1 })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(t) {
    const e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(t));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Bv extends ii {
  constructor(t, e = 1, n = 16776960) {
    const i = n, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], o = new Vt();
    o.setAttribute("position", new St(s, 3)), o.computeBoundingSphere(), super(o, new Ne({ color: i, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = t, this.size = e;
    const a = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], c = new Vt();
    c.setAttribute("position", new St(a, 3)), c.computeBoundingSphere(), this.add(new ye(c, new wn({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
  }
  updateMatrixWorld(t) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(t);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const Au = /* @__PURE__ */ new T();
let vo, Cc;
class zv extends Zt {
  // dir is assumed to be normalized
  constructor(t = new T(0, 0, 1), e = new T(0, 0, 0), n = 1, i = 16776960, s = n * 0.2, o = s * 0.2) {
    super(), this.type = "ArrowHelper", vo === void 0 && (vo = new Vt(), vo.setAttribute("position", new St([0, 0, 0, 0, 1, 0], 3)), Cc = new Vi(0, 0.5, 1, 5, 1), Cc.translate(0, -0.5, 0)), this.position.copy(e), this.line = new ii(vo, new Ne({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new ye(Cc, new wn({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, s, o);
  }
  setDirection(t) {
    if (t.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      Au.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Au, e);
    }
  }
  setLength(t, e = t * 0.2, n = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
  }
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class kv extends pn {
  constructor(t = 1) {
    const e = [
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      0,
      t
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], i = new Vt();
    i.setAttribute("position", new St(e, 3)), i.setAttribute("color", new St(n, 3));
    const s = new Ne({ vertexColors: !0, toneMapped: !1 });
    super(i, s), this.type = "AxesHelper";
  }
  setColors(t, e, n) {
    const i = new ut(), s = this.geometry.attributes.color.array;
    return i.set(t), i.toArray(s, 0), i.toArray(s, 3), i.set(e), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Vv {
  constructor() {
    this.type = "ShapePath", this.color = new ut(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(t, e) {
    return this.currentPath = new or(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
  }
  lineTo(t, e) {
    return this.currentPath.lineTo(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    return this.currentPath.quadraticCurveTo(t, e, n, i), this;
  }
  bezierCurveTo(t, e, n, i, s, o) {
    return this.currentPath.bezierCurveTo(t, e, n, i, s, o), this;
  }
  splineThru(t) {
    return this.currentPath.splineThru(t), this;
  }
  toShapes(t) {
    function e(p) {
      const y = [];
      for (let v = 0, x = p.length; v < x; v++) {
        const I = p[v], E = new Di();
        E.curves = I.curves, y.push(E);
      }
      return y;
    }
    function n(p, y) {
      const v = y.length;
      let x = !1;
      for (let I = v - 1, E = 0; E < v; I = E++) {
        let C = y[I], R = y[E], S = R.x - C.x, M = R.y - C.y;
        if (Math.abs(M) > Number.EPSILON) {
          if (M < 0 && (C = y[E], S = -S, R = y[I], M = -M), p.y < C.y || p.y > R.y) continue;
          if (p.y === C.y) {
            if (p.x === C.x) return !0;
          } else {
            const L = M * (p.x - C.x) - S * (p.y - C.y);
            if (L === 0) return !0;
            if (L < 0) continue;
            x = !x;
          }
        } else {
          if (p.y !== C.y) continue;
          if (R.x <= p.x && p.x <= C.x || C.x <= p.x && p.x <= R.x) return !0;
        }
      }
      return x;
    }
    const i = Mn.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new Di(), c.curves = a.curves, l.push(c), l;
    let h = !i(s[0].getPoints());
    h = t ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, _;
    d[m] = void 0, f[m] = [];
    for (let p = 0, y = s.length; p < y; p++)
      a = s[p], _ = a.getPoints(), o = i(_), o = t ? !o : o, o ? (!h && d[m] && m++, d[m] = { s: new Di(), p: _ }, d[m].s.curves = a.curves, h && m++, f[m] = []) : f[m].push({ h: a, p: _[0] });
    if (!d[0]) return e(s);
    if (d.length > 1) {
      let p = !1, y = 0;
      for (let v = 0, x = d.length; v < x; v++)
        u[v] = [];
      for (let v = 0, x = d.length; v < x; v++) {
        const I = f[v];
        for (let E = 0; E < I.length; E++) {
          const C = I[E];
          let R = !0;
          for (let S = 0; S < d.length; S++)
            n(C.p, d[S].p) && (v !== S && y++, R ? (R = !1, u[S].push(C)) : p = !0);
          R && u[v].push(C);
        }
      }
      y > 0 && p === !1 && (f = u);
    }
    let g;
    for (let p = 0, y = d.length; p < y; p++) {
      c = d[p].s, l.push(c), g = f[p];
      for (let v = 0, x = g.length; v < x; v++)
        c.holes.push(g[v].h);
    }
    return l;
  }
}
class Df extends En {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
class Hv extends dn {
  // @deprecated, r162
  constructor(t = 1, e = 1, n = 1, i = {}) {
    console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'), super(t, e, { ...i, count: n }), this.isWebGLMultipleRenderTargets = !0;
  }
  get texture() {
    return this.textures;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "170"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "170");
const Gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: $c,
  AddEquation: ei,
  AddOperation: nd,
  AdditiveAnimationBlendMode: ol,
  AdditiveBlending: $s,
  AgXToneMapping: ad,
  AlphaFormat: tl,
  AlwaysCompare: bd,
  AlwaysDepth: Ao,
  AlwaysStencilFunc: Uc,
  AmbientLight: Mf,
  AnimationAction: Pf,
  AnimationClip: dr,
  AnimationLoader: Wy,
  AnimationMixer: yv,
  AnimationObjectGroup: _v,
  AnimationUtils: ky,
  ArcCurve: Zd,
  ArrayCamera: zd,
  ArrowHelper: zv,
  AttachedBindMode: Dc,
  Audio: Cf,
  AudioAnalyser: av,
  AudioContext: Ul,
  AudioListener: sv,
  AudioLoader: ev,
  AxesHelper: kv,
  BackSide: Ve,
  BasicDepthPacking: fd,
  BasicShadowMap: kf,
  BatchedMesh: Xd,
  Bone: xl,
  BooleanKeyframeTrack: Hi,
  Box2: Ev,
  Box3: Le,
  Box3Helper: Fv,
  BoxGeometry: Gn,
  BoxHelper: Ov,
  BufferAttribute: oe,
  BufferGeometry: Vt,
  BufferGeometryLoader: Tf,
  ByteType: Kc,
  Cache: Fn,
  Camera: ya,
  CameraHelper: Nv,
  CanvasTexture: hy,
  CapsuleGeometry: Ca,
  CatmullRomCurve3: $d,
  CineonToneMapping: rd,
  CircleGeometry: Ra,
  ClampToEdgeWrapping: nn,
  Clock: Af,
  Color: ut,
  ColorKeyframeTrack: Rl,
  ColorManagement: qt,
  CompressedArrayTexture: cy,
  CompressedCubeTexture: ly,
  CompressedTexture: Ta,
  CompressedTextureLoader: Xy,
  ConeGeometry: vr,
  ConstantAlphaFactor: Qu,
  ConstantColorFactor: Ku,
  Controls: Df,
  CubeCamera: Id,
  CubeReflectionMapping: Vn,
  CubeRefractionMapping: ni,
  CubeTexture: _r,
  CubeTextureLoader: Yy,
  CubeUVReflectionMapping: ys,
  CubicBezierCurve: Ml,
  CubicBezierCurve3: Jd,
  CubicInterpolant: mf,
  CullFaceBack: Pc,
  CullFaceFront: Ou,
  CullFaceFrontBack: zf,
  CullFaceNone: Nu,
  Curve: mn,
  CurvePath: jd,
  CustomBlending: Fu,
  CustomToneMapping: od,
  CylinderGeometry: Vi,
  Cylindrical: wv,
  Data3DTexture: ll,
  DataArrayTexture: _a,
  DataTexture: un,
  DataTextureLoader: qy,
  DataUtils: jp,
  DecrementStencilOp: tp,
  DecrementWrapStencilOp: np,
  DefaultLoadingManager: xf,
  DepthFormat: Ii,
  DepthStencilFormat: Oi,
  DepthTexture: fl,
  DetachedBindMode: ld,
  DirectionalLight: Dl,
  DirectionalLightHelper: Uv,
  DiscreteInterpolant: gf,
  DodecahedronGeometry: Pa,
  DoubleSide: hn,
  DstAlphaFactor: Yu,
  DstColorFactor: Zu,
  DynamicCopyUsage: gp,
  DynamicDrawUsage: Sd,
  DynamicReadUsage: fp,
  EdgesGeometry: Tl,
  EllipseCurve: Aa,
  EqualCompare: xd,
  EqualDepth: Ro,
  EqualStencilFunc: op,
  EquirectangularReflectionMapping: Js,
  EquirectangularRefractionMapping: Ks,
  Euler: Qe,
  EventDispatcher: En,
  ExtrudeGeometry: La,
  FileLoader: Xn,
  Float16BufferAttribute: sm,
  Float32BufferAttribute: St,
  FloatType: qe,
  Fog: Sa,
  FogExp2: ba,
  FramebufferTexture: ay,
  FrontSide: bn,
  Frustum: xr,
  GLBufferAttribute: Sv,
  GLSL1: xp,
  GLSL3: Nc,
  GreaterCompare: yd,
  GreaterDepth: Io,
  GreaterEqualCompare: Md,
  GreaterEqualDepth: Po,
  GreaterEqualStencilFunc: hp,
  GreaterStencilFunc: cp,
  GridHelper: Lv,
  Group: ds,
  HalfFloatType: vs,
  HemisphereLight: Il,
  HemisphereLightHelper: Iv,
  IcosahedronGeometry: Mr,
  ImageBitmapLoader: tv,
  ImageLoader: fr,
  ImageUtils: Td,
  IncrementStencilOp: Qf,
  IncrementWrapStencilOp: ep,
  InstancedBufferAttribute: xs,
  InstancedBufferGeometry: Ef,
  InstancedInterleavedBuffer: bv,
  InstancedMesh: rr,
  Int16BufferAttribute: nm,
  Int32BufferAttribute: im,
  Int8BufferAttribute: Qp,
  IntType: ha,
  InterleavedBuffer: wa,
  InterleavedBufferAttribute: Fi,
  Interpolant: Er,
  InterpolateDiscrete: tr,
  InterpolateLinear: ra,
  InterpolateSmooth: bo,
  InvertStencilOp: ip,
  KeepStencilOp: Mi,
  KeyframeTrack: gn,
  LOD: Gd,
  LatheGeometry: yr,
  Layers: xa,
  LessCompare: _d,
  LessDepth: Co,
  LessEqualCompare: al,
  LessEqualDepth: Ui,
  LessEqualStencilFunc: ap,
  LessStencilFunc: rp,
  Light: oi,
  LightProbe: wf,
  Line: ii,
  Line3: Tv,
  LineBasicMaterial: Ne,
  LineCurve: bl,
  LineCurve3: Kd,
  LineDashedMaterial: df,
  LineLoop: Yd,
  LineSegments: pn,
  LinearFilter: _e,
  LinearInterpolant: Cl,
  LinearMipMapLinearFilter: Wf,
  LinearMipMapNearestFilter: Gf,
  LinearMipmapLinearFilter: yn,
  LinearMipmapNearestFilter: zs,
  LinearSRGBColorSpace: zi,
  LinearToneMapping: id,
  LinearTransfer: gr,
  Loader: Ze,
  LoaderUtils: Gc,
  LoadingManager: Pl,
  LoopOnce: hd,
  LoopPingPong: dd,
  LoopRepeat: ud,
  LuminanceAlphaFormat: il,
  LuminanceFormat: nl,
  MOUSE: Ri,
  Material: Ue,
  MaterialLoader: za,
  MathUtils: Ys,
  Matrix2: Bl,
  Matrix3: zt,
  Matrix4: Dt,
  MaxEquation: Vu,
  Mesh: ye,
  MeshBasicMaterial: wn,
  MeshDepthMaterial: pl,
  MeshDistanceMaterial: ml,
  MeshLambertMaterial: hf,
  MeshMatcapMaterial: uf,
  MeshNormalMaterial: lf,
  MeshPhongMaterial: af,
  MeshPhysicalMaterial: of,
  MeshStandardMaterial: wr,
  MeshToonMaterial: cf,
  MinEquation: ku,
  MirroredRepeatWrapping: Qs,
  MixOperation: ed,
  MultiplyBlending: Lc,
  MultiplyOperation: pr,
  NearestFilter: Te,
  NearestMipMapLinearFilter: Hf,
  NearestMipMapNearestFilter: Vf,
  NearestMipmapLinearFilter: ls,
  NearestMipmapNearestFilter: Jc,
  NeutralToneMapping: cd,
  NeverCompare: gd,
  NeverDepth: To,
  NeverStencilFunc: sp,
  NoBlending: Bn,
  NoColorSpace: Nn,
  NoToneMapping: zn,
  NormalAnimationBlendMode: ga,
  NormalBlending: Pi,
  NotEqualCompare: vd,
  NotEqualDepth: Lo,
  NotEqualStencilFunc: lp,
  NumberKeyframeTrack: hr,
  Object3D: Zt,
  ObjectLoader: jy,
  ObjectSpaceNormalMap: md,
  OctahedronGeometry: br,
  OneFactor: Gu,
  OneMinusConstantAlphaFactor: td,
  OneMinusConstantColorFactor: ju,
  OneMinusDstAlphaFactor: qu,
  OneMinusDstColorFactor: $u,
  OneMinusSrcAlphaFactor: Eo,
  OneMinusSrcColorFactor: Xu,
  OrthographicCamera: va,
  PCFShadowMap: qc,
  PCFSoftShadowMap: Zc,
  PMREMGenerator: Oc,
  Path: or,
  PerspectiveCamera: Ee,
  Plane: Un,
  PlaneGeometry: Wn,
  PlaneHelper: Bv,
  PointLight: vf,
  PointLightHelper: Rv,
  Points: qd,
  PointsMaterial: yl,
  PolarGridHelper: Dv,
  PolyhedronGeometry: ri,
  PositionalAudio: ov,
  PropertyBinding: jt,
  PropertyMixer: Rf,
  QuadraticBezierCurve: Sl,
  QuadraticBezierCurve3: wl,
  Quaternion: Ie,
  QuaternionKeyframeTrack: Tr,
  QuaternionLinearInterpolant: _f,
  RED_GREEN_RGTC2_Format: ia,
  RED_RGTC1_Format: rl,
  REVISION: "170",
  RGBADepthPacking: pd,
  RGBAFormat: ke,
  RGBAIntegerFormat: ma,
  RGBA_ASTC_10x10_Format: Ko,
  RGBA_ASTC_10x5_Format: Zo,
  RGBA_ASTC_10x6_Format: $o,
  RGBA_ASTC_10x8_Format: Jo,
  RGBA_ASTC_12x10_Format: jo,
  RGBA_ASTC_12x12_Format: Qo,
  RGBA_ASTC_4x4_Format: ko,
  RGBA_ASTC_5x4_Format: Vo,
  RGBA_ASTC_5x5_Format: Ho,
  RGBA_ASTC_6x5_Format: Go,
  RGBA_ASTC_6x6_Format: Wo,
  RGBA_ASTC_8x5_Format: Xo,
  RGBA_ASTC_8x6_Format: Yo,
  RGBA_ASTC_8x8_Format: qo,
  RGBA_BPTC_Format: Ws,
  RGBA_ETC2_EAC_Format: zo,
  RGBA_PVRTC_2BPPV1_Format: Oo,
  RGBA_PVRTC_4BPPV1_Format: No,
  RGBA_S3TC_DXT1_Format: Vs,
  RGBA_S3TC_DXT3_Format: Hs,
  RGBA_S3TC_DXT5_Format: Gs,
  RGBDepthPacking: $f,
  RGBFormat: el,
  RGBIntegerFormat: Xf,
  RGB_BPTC_SIGNED_Format: ta,
  RGB_BPTC_UNSIGNED_Format: ea,
  RGB_ETC1_Format: Fo,
  RGB_ETC2_Format: Bo,
  RGB_PVRTC_2BPPV1_Format: Uo,
  RGB_PVRTC_4BPPV1_Format: Do,
  RGB_S3TC_DXT1_Format: ks,
  RGDepthPacking: Jf,
  RGFormat: sl,
  RGIntegerFormat: pa,
  RawShaderMaterial: rf,
  Ray: ki,
  Raycaster: If,
  RectAreaLight: bf,
  RedFormat: fa,
  RedIntegerFormat: mr,
  ReinhardToneMapping: sd,
  RenderTarget: Ad,
  RepeatWrapping: js,
  ReplaceStencilOp: jf,
  ReverseSubtractEquation: zu,
  RingGeometry: Da,
  SIGNED_RED_GREEN_RGTC2_Format: sa,
  SIGNED_RED_RGTC1_Format: na,
  SRGBColorSpace: Be,
  SRGBTransfer: se,
  Scene: gl,
  ShaderChunk: Wt,
  ShaderLib: ln,
  ShaderMaterial: fn,
  ShadowMaterial: sf,
  Shape: Di,
  ShapeGeometry: Ua,
  ShapePath: Vv,
  ShapeUtils: Mn,
  ShortType: jc,
  Skeleton: Ea,
  SkeletonHelper: Cv,
  SkinnedMesh: Wd,
  Source: Ai,
  Sphere: De,
  SphereGeometry: Sr,
  Spherical: Xc,
  SphericalHarmonics3: Sf,
  SplineCurve: El,
  SpotLight: yf,
  SpotLightHelper: Av,
  Sprite: Hd,
  SpriteMaterial: _l,
  SrcAlphaFactor: wo,
  SrcAlphaSaturateFactor: Ju,
  SrcColorFactor: Wu,
  StaticCopyUsage: mp,
  StaticDrawUsage: nr,
  StaticReadUsage: dp,
  StereoCamera: nv,
  StreamCopyUsage: _p,
  StreamDrawUsage: up,
  StreamReadUsage: pp,
  StringKeyframeTrack: Gi,
  SubtractEquation: Bu,
  SubtractiveBlending: Ic,
  TOUCH: wi,
  TangentSpaceNormalMap: si,
  TetrahedronGeometry: Na,
  Texture: me,
  TextureLoader: Zy,
  TextureUtils: Vx,
  TorusGeometry: Oa,
  TorusKnotGeometry: Fa,
  Triangle: Ye,
  TriangleFanDrawMode: Zf,
  TriangleStripDrawMode: qf,
  TrianglesDrawMode: Yf,
  TubeGeometry: Ba,
  UVMapping: la,
  Uint16BufferAttribute: hl,
  Uint32BufferAttribute: ul,
  Uint8BufferAttribute: tm,
  Uint8ClampedBufferAttribute: em,
  Uniform: Fl,
  UniformsGroup: Mv,
  UniformsLib: ct,
  UniformsUtils: Pd,
  UnsignedByteType: Sn,
  UnsignedInt248Type: Ni,
  UnsignedInt5999Type: Qc,
  UnsignedIntType: Hn,
  UnsignedShort4444Type: ua,
  UnsignedShort5551Type: da,
  UnsignedShortType: ms,
  VSMShadowMap: xn,
  Vector2: q,
  Vector3: T,
  Vector4: Qt,
  VectorKeyframeTrack: ur,
  VideoTexture: oy,
  WebGL3DRenderTarget: Hp,
  WebGLArrayRenderTarget: Vp,
  WebGLCoordinateSystem: vn,
  WebGLCubeRenderTarget: Ld,
  WebGLMultipleRenderTargets: Hv,
  WebGLRenderTarget: dn,
  WebGLRenderer: kd,
  WebGLUtils: Bd,
  WebGPUCoordinateSystem: ir,
  WireframeGeometry: nf,
  WrapAroundEnding: er,
  ZeroCurvatureEnding: Ei,
  ZeroFactor: Hu,
  ZeroSlopeEnding: Ti,
  ZeroStencilOp: Kf,
  createCanvasElement: Ed
}, Symbol.toStringTag, { value: "Module" })), Wv = (r) => r.axis ?? (r.dimensions.width < 100 ? "z" : "x"), Cu = (r, t, e, n = 0) => Math.abs(r - e.position.x) < e.dimensions.width / 2 + n && Math.abs(t - e.position.z) < (e.type === "tree" ? e.dimensions.width : e.dimensions.depth) / 2 + n;
function Uf(r) {
  const t = [];
  for (const e of r.roads) {
    if (e.path) continue;
    const n = Wv(e) === "z", i = n ? e.dimensions.depth : e.dimensions.width, s = (n ? e.dimensions.width : e.dimensions.depth) / 2;
    for (let o = -i / 2 + 24; o < i / 2 - 20; o += 64)
      for (const a of [-1, 1]) {
        const c = a * (s + 3), l = e.position.x + (n ? c : o), h = e.position.z + (n ? o : c);
        Math.abs(l - r.water.position.x) < r.water.dimensions.width / 2 + 32 || r.roads.some((u) => u !== e && Cu(l, h, u, 10)) || [...r.buildings, ...r.trees, ...r.parks].some((u) => Cu(l, h, u, 6)) || t.push({
          x: l,
          z: h,
          dx: n ? -a : 0,
          dz: n ? 0 : -a,
          roadId: e.id
        });
      }
  }
  return t;
}
function Xv(r) {
  const t = r.roads.filter((s) => s.id.startsWith("road-v-")).map((s) => s.position.x).sort((s, o) => s - o), e = r.roads.filter((s) => s.id.startsWith("road-h-")).map((s) => s.position.z).sort((s, o) => s - o), n = [], i = [];
  for (let s = 0; s + 1 < t.length; s += 2)
    for (let o = 0; o + 1 < e.length; o += 2) {
      const a = t[s] + 3, c = t[s + 1] - 3, l = e[o] + 3, h = e[o + 1] - 3;
      n.push([
        [a, l],
        [c, l],
        [c, h],
        [a, h]
      ]);
    }
  for (const s of r.parks) {
    const { x: o, z: a } = s.position, { width: c, depth: l } = s.dimensions;
    for (const h of [-1, 1])
      i.push([
        [o, a + h * 13],
        [o, a + h * (l / 2 - 8)]
      ]), i.push([
        [o + h * 13, a],
        [o + h * (c / 2 - 8), a]
      ]);
  }
  return { cars: n, walkers: i };
}
function Yc(r) {
  return r.reduce((t, e, n) => {
    const i = r[(n + 1) % r.length];
    return t + Math.hypot(e[0] - i[0], e[1] - i[1]);
  }, 0);
}
function Ru(r, t) {
  const e = Yc(r);
  if (e <= 0)
    throw new Error("Invalid activity route");
  let n = (t % e + e) % e;
  for (let i = 0; i < r.length; i++) {
    const s = r[i], o = r[(i + 1) % r.length], a = o[0] - s[0], c = o[1] - s[1], l = Math.hypot(a, c);
    if (l) {
      if (n < l || i === r.length - 1)
        return {
          x: s[0] + a * n / l,
          z: s[1] + c * n / l,
          angle: Math.atan2(a, c)
        };
      n -= l;
    }
  }
}
const Pu = {
  off: [0, 0],
  low: [15, 12],
  normal: [30, 24],
  high: [60, 40]
};
class Yv {
  constructor(t) {
    this.view = t, this.time = 0, this.paused = !1, this.routes = Xv(t.state), this.dummy = new Zt(), this.meshes = [], this.carBodies = this.mesh(
      t.geometries.box,
      60,
      "#ffffff"
    ), this.carRoofs = this.mesh(
      t.geometries.box,
      60,
      "#748d92"
    ), this.peopleBodies = this.mesh(
      t.geometries.box,
      40,
      "#ffffff"
    ), this.peopleHeads = this.mesh(
      t.geometries.sphere,
      40,
      "#c99d7b"
    );
    const e = [
      "#b95c4e",
      "#d4d8d2",
      "#547a91",
      "#b7a160",
      "#557266",
      "#353e48"
    ];
    for (let n = 0; n < 60; n++)
      this.carBodies.setColorAt(
        n,
        new ut(e[n % e.length])
      );
    for (let n = 0; n < 40; n++)
      this.peopleBodies.setColorAt(
        n,
        new ut(
          e[(n + 2) % e.length]
        )
      );
    this.carBodies.instanceColor.needsUpdate = !0, this.peopleBodies.instanceColor.needsUpdate = !0, this.createLightPools(), this.createVehicleLights(), this.setLevel("normal");
  }
  mesh(t, e, n) {
    const i = new wr({
      color: n,
      roughness: 0.8
    }), s = new rr(
      t,
      i,
      e
    );
    return s.instanceMatrix.setUsage(
      Sd
    ), s.frustumCulled = !1, s.castShadow = !1, s.receiveShadow = !0, s.count = 0, this.view.scene.add(s), this.meshes.push(s), s;
  }
  createVehicleLights() {
    this.night = !1, this.headlights = this.mesh(
      this.view.geometries.box,
      120,
      "#fff1cb"
    ), this.taillights = this.mesh(
      this.view.geometries.box,
      120,
      "#ff3025"
    ), this.headlights.material.emissive.set("#fff1cb"), this.headlights.material.emissiveIntensity = 3, this.taillights.material.emissive.set("#ff3025"), this.taillights.material.emissiveIntensity = 2.5, this.headlightBeams = this.mesh(
      this.lightGeometry,
      60,
      "#ffffff"
    ), this.headlightBeams.material.dispose(), this.headlightBeams.material = new wn({
      map: this.lightTexture,
      color: "#fff4d9",
      transparent: !0,
      opacity: 0.75,
      depthWrite: !1,
      blending: $s,
      toneMapped: !1
    }), this.headlights.visible = !1, this.taillights.visible = !1, this.headlightBeams.visible = !1;
  }
  createLightPools() {
    const e = new Uint8Array(16384);
    for (let s = 0; s < 64; s++)
      for (let o = 0; o < 64; o++) {
        const a = Math.hypot(
          (o - 31.5) / 32,
          (s - 31.5) / 32
        ), c = Math.max(0, 1 - a) ** 2, l = (s * 64 + o) * 4;
        e[l] = 255, e[l + 1] = 210, e[l + 2] = 135, e[l + 3] = Math.round(c * 255);
      }
    this.lightTexture = new un(
      e,
      64,
      64
    ), this.lightTexture.magFilter = _e, this.lightTexture.minFilter = _e, this.lightTexture.needsUpdate = !0, this.lightGeometry = new Wn(
      1,
      1
    ).rotateX(-Math.PI / 2);
    const n = new wn({
      map: this.lightTexture,
      transparent: !0,
      opacity: 0.65,
      depthWrite: !1,
      blending: $s,
      toneMapped: !1
    }), i = Uf(this.view.state);
    this.pools = new rr(
      this.lightGeometry,
      n,
      i.length
    ), i.forEach((s, o) => {
      this.matrix(
        this.pools,
        o,
        s.x + s.dx * 6,
        4.48,
        s.z + s.dz * 6,
        24,
        1,
        24,
        0
      );
    }), this.pools.instanceMatrix.needsUpdate = !0, this.pools.computeBoundingSphere(), this.pools.visible = !1, this.view.scene.add(this.pools);
  }
  matrix(t, e, n, i, s, o, a, c, l) {
    this.dummy.position.set(n, i, s), this.dummy.scale.set(o, a, c), this.dummy.rotation.set(0, l, 0), this.dummy.updateMatrix(), t.setMatrixAt(e, this.dummy.matrix);
  }
  setNight(t) {
    this.pools.visible = t, this.night = t, this.headlights.visible = t, this.taillights.visible = t, this.headlightBeams.visible = t, this.update(0, !0), this.view.dirty = !0;
  }
  setLevel(t) {
    this.level = Object.hasOwn(Pu, t) ? t : "normal";
    let [e, n] = Pu[this.level];
    this.routes.cars.length || (e = 0), this.routes.walkers.length || (n = 0), this.carBodies.count = e, this.carRoofs.count = e, this.headlights.count = e * 2, this.taillights.count = e * 2, this.headlightBeams.count = e, this.peopleBodies.count = n, this.peopleHeads.count = n, this.view.dirty = !0, this.update(0, !0);
  }
  update(t, e = !1) {
    if (this.paused && !e) return !1;
    const n = this.carBodies.count, i = this.peopleBodies.count;
    if (!n && !i) return !1;
    this.time += t;
    const s = this.routes.cars;
    for (let a = 0; a < n; a++) {
      const c = a % s.length, l = s[c], h = Math.floor(
        a / s.length
      ) * Yc(l) / Math.ceil(n / s.length), u = 14 + c % 5, d = Ru(
        l,
        this.time * u + h
      );
      this.matrix(
        this.carBodies,
        a,
        d.x,
        5.6,
        d.z,
        3,
        2.2,
        6.2,
        d.angle
      ), this.matrix(
        this.carRoofs,
        a,
        d.x,
        7,
        d.z,
        2.4,
        1.1,
        3.4,
        d.angle
      );
      const f = Math.sin(d.angle), m = Math.cos(d.angle), _ = Math.cos(d.angle), g = -Math.sin(d.angle);
      if (this.night) {
        for (let p = 0; p < 2; p++) {
          const y = p === 0 ? -0.95 : 0.95, v = a * 2 + p;
          this.matrix(
            this.headlights,
            v,
            d.x + f * 3.15 + _ * y,
            5.8,
            d.z + m * 3.15 + g * y,
            0.65,
            0.5,
            0.25,
            d.angle
          ), this.matrix(
            this.taillights,
            v,
            d.x - f * 3.15 + _ * y,
            5.8,
            d.z - m * 3.15 + g * y,
            0.65,
            0.5,
            0.25,
            d.angle
          );
        }
        this.matrix(
          this.headlightBeams,
          a,
          d.x + f * 10,
          4.49,
          d.z + m * 10,
          8,
          1,
          19,
          d.angle
        );
      }
    }
    const o = this.routes.walkers;
    for (let a = 0; a < i; a++) {
      const c = a % o.length, l = o[c], h = Math.floor(
        a / o.length
      ) * Yc(l) / Math.ceil(i / o.length), u = Ru(
        l,
        this.time * (1.5 + c % 3 * 0.15) + h
      );
      this.matrix(
        this.peopleBodies,
        a,
        u.x,
        5.15,
        u.z,
        0.85,
        1.8,
        0.65,
        u.angle
      ), this.matrix(
        this.peopleHeads,
        a,
        u.x,
        6.3,
        u.z,
        0.28,
        0.28,
        0.28,
        u.angle
      );
    }
    for (const a of this.meshes)
      a.instanceMatrix.needsUpdate = !0;
    return !0;
  }
  dispose() {
    for (const t of this.meshes)
      this.view.scene.remove(t), t.material.dispose(), t.dispose();
    this.view.scene.remove(this.pools), this.pools.material.dispose(), this.pools.dispose(), this.lightGeometry.dispose(), this.lightTexture.dispose();
  }
}
class qv {
  constructor(t) {
    this.state = t >>> 0;
  }
  next() {
    let t = this.state += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  range(t, e) {
    return t + this.next() * (e - t);
  }
  pick(t) {
    return t[Math.floor(this.next() * t.length)];
  }
}
function Zv(r) {
  return { id: "terrain", type: "terrain", district: "Citywide", position: { x: 0, y: -8, z: 0 }, dimensions: { width: r.size, depth: r.size, height: 16 }, orientation: 0, visual: { color: "#abbc91" } };
}
function $v(r) {
  return { id: "river", type: "river", district: "Riverside Park", position: { x: r.river.centerX, y: 0, z: 0 }, dimensions: { width: r.river.width, depth: r.size, height: 1 }, orientation: 0, visual: { color: "#68a9ad" } };
}
function Jv(r) {
  var e;
  const t = [];
  for (const n of r.roadCoordinates) t.push({ id: `road-v-${n}`, type: Math.abs(n) === 180 ? "arterial" : "local", district: "Citywide", position: { x: n, y: 1, z: 0 }, dimensions: { width: Math.abs(n) === 180 ? 22 : 14, height: 1, depth: 1100 }, orientation: 0, visual: { color: "#697671" } });
  for (const n of r.rowCoordinates) t.push({ id: `road-h-${n}`, type: n === 0 ? "arterial" : "secondary", district: "Citywide", position: { x: 0, y: 1, z: n }, dimensions: { width: 1100, height: 1, depth: n === 0 ? 24 : 16 }, orientation: 0, visual: { color: "#697671" } });
  for (const n of ((e = r.roadNetwork) == null ? void 0 : e.collectors) ?? []) {
    const i = r.roadCoordinates.filter((s) => Math.sign(s) === Math.sign(n)).sort((s, o) => Math.abs(s) - Math.abs(o))[0];
    if (!Number.isFinite(i) || Math.abs(n) < 100 || Math.abs(n) >= Math.abs(i) - 25)
      throw new Error("Invalid riverside collector");
    t.push({
      id: `collector-${n}`,
      type: "collector",
      axis: "z",
      district: "Citywide",
      position: { x: n, y: 1, z: 0 },
      dimensions: { width: 12, height: 1, depth: 1100 },
      orientation: 0,
      visual: { color: "#697671" }
    });
    for (const s of r.roadNetwork.linksAt ?? []) {
      if (Math.abs(s) > 530 || r.rowCoordinates.some((o) => Math.abs(o - s) < 35))
        throw new Error("Invalid local connector");
      t.push({
        id: `link-${n}-${s}`,
        type: "local",
        axis: "x",
        district: "Citywide",
        position: { x: (n + i) / 2, y: 1, z: s },
        dimensions: {
          width: Math.abs(i - n),
          height: 1,
          depth: 10
        },
        orientation: 0,
        visual: { color: "#697671" }
      });
    }
  }
  return t;
}
const Kv = /* @__PURE__ */ new Set(["Garden Quarter", "Westbank Living", "Civic Commons", "Market Quarter", "Central Business District"]);
function jv(r) {
  const { roadCoordinates: t, rowCoordinates: e, layout: n } = r;
  if (!Array.isArray(t) || t.length < 4 || !Array.isArray(e) || e.length < 3) throw new Error("Layout needs road columns and rows.");
  for (const o of [t, e])
    if (o.some((a, c) => !Number.isFinite(a) || Math.abs(a) > 540 || c > 0 && a - o[c - 1] < 155)) throw new Error("Roads must be ordered, within ±540 m and at least 155 m apart.");
  if (t.some((o) => Math.abs(o) < 145)) throw new Error("Vertical roads must clear the riverside corridor.");
  if (!t.some((o) => o < 0) || !t.some((o) => o > 0)) throw new Error("Roads are required on both river banks.");
  const i = t.slice(0, -1).map((o, a) => [o, t[a + 1]]).filter(([o, a]) => o * a > 0);
  if (!Array.isArray(n.districtGrid) || n.districtGrid.length !== i.length || n.districtGrid.some((o) => !Array.isArray(o) || o.length !== e.length - 1 || o.some((a) => !Kv.has(a)))) throw new Error("District grid must match the buildable blocks.");
  if (!Array.isArray(n.parks) || n.parks.some((o) => !Array.isArray(o) || o.length !== 2 || !Number.isInteger(o[0]) || !Number.isInteger(o[1]) || o[0] < 0 || o[0] >= i.length || o[1] < 0 || o[1] >= e.length - 1)) throw new Error("Park coordinates must identify buildable blocks.");
  const s = new Set(n.parks.map((o) => o.join(":")));
  return i.flatMap(([o, a], c) => e.slice(0, -1).map((l, h) => ({ id: `block-${c}-${h}`, x: (o + a) / 2, z: (l + e[h + 1]) / 2, width: a - o, depth: e[h + 1] - l, district: n.districtGrid[c][h], park: s.has(`${c}:${h}`) })));
}
function Qv(r, t) {
  const e = [], n = [];
  if (r.layout) return tM(r, t);
  const i = [-450, -270, 270, 450], s = [-450, -270, -90, 90, 270, 450];
  for (const o of i) for (const a of s) {
    const c = o < 0 ? a < 0 ? "Garden Quarter" : o === -450 ? "Westbank Living" : "Civic Commons" : a < 0 ? "Central Business District" : "Market Quarter";
    if (o === 270 && a === 270 || o === -270 && a === 90) {
      n.push({ id: `park-${o}-${a}`, type: "park", district: "Riverside Park", position: { x: o, y: 1, z: a }, dimensions: { width: 140, depth: 140, height: 1 }, orientation: 0, visual: { color: "#96b77d" } });
      continue;
    }
    for (let l of [-48, 0, 48]) for (let h of [-46, 46]) {
      let u = c === "Garden Quarter" ? "house" : c === "Westbank Living" ? "apartment" : c === "Central Business District" ? t.next() > 0.4 ? "office" : "commercial" : c === "Civic Commons" ? "midrise" : "commercial";
      o === -270 && l === 0 && h === -46 && (u = a === 270 ? "hospital" : a === 450 ? "school" : "civic");
      const d = t.range(26, 36), f = t.range(27, 38), m = { house: t.range(10, 16), apartment: t.range(22, 32), midrise: t.range(40, 58), commercial: t.range(18, 32), office: t.range(65, 132), hospital: 30, school: 18, civic: 30 }[u], _ = u === "office" ? ["#b7c9c4", "#8faeb0", "#d8dfd2"] : u === "house" ? ["#ead6b4", "#d8d7bc", "#f0e2cc"] : ["#e2dfcc", "#d5c5af", "#c0cec0", "#ede4d3"];
      e.push({ id: `building-${String(e.length + 1).padStart(3, "0")}`, type: u, district: c, position: { x: o + l, y: 2, z: a + h }, dimensions: { width: d, depth: f, height: m }, orientation: 0, visual: { color: t.pick(_), roof: t.pick(["#937565", "#76877e", "#b2927d"]), roofForm: u === "house" ? "gable" : "flat" } });
    }
  }
  return { buildings: e, parks: n };
}
function tM(r, t) {
  const e = [], n = [];
  let i = 0;
  for (const s of jv(r)) {
    const { x: o, z: a, width: c, depth: l, district: h } = s;
    if (s.park) {
      n.push({ id: `park-${s.id}`, type: "park", district: "Riverside Park", position: { x: o, y: 1, z: a }, dimensions: { width: c - 48, depth: l - 48, height: 1 }, orientation: 0, visual: { color: "#96b77d" } });
      continue;
    }
    const u = c >= 180 ? 3 : 2, d = (c - 54) / u, f = (l - 54) / 2;
    for (let m = 0; m < u; m++) for (let _ = 0; _ < 2; _++) {
      let g = h === "Garden Quarter" ? "house" : h === "Westbank Living" ? "apartment" : h === "Central Business District" ? t.next() > 0.4 ? "office" : "commercial" : h === "Civic Commons" ? "midrise" : "commercial";
      h === "Civic Commons" && i < 3 && (g = ["civic", "hospital", "school"][i++]);
      const p = t.range(24, Math.min(36, d - 10)), y = t.range(27, Math.min(38, f - 10)), v = { house: t.range(10, 16), apartment: t.range(22, 32), midrise: t.range(40, 58), commercial: t.range(18, 32), office: t.range(65, 132), hospital: 30, school: 18, civic: 30 }[g], x = g === "office" ? ["#b7c9c4", "#8faeb0", "#d8dfd2"] : g === "house" ? ["#ead6b4", "#d8d7bc", "#f0e2cc"] : ["#e2dfcc", "#d5c5af", "#c0cec0", "#ede4d3"];
      e.push({ id: `building-${s.id}-${m}-${_}`, type: g, district: h, position: { x: o + (m - (u - 1) / 2) * d, y: 2, z: a + (_ - 0.5) * f }, dimensions: { width: p, depth: y, height: v }, orientation: 0, visual: { color: t.pick(x), roof: t.pick(["#937565", "#76877e", "#b2927d"]), roofForm: g === "house" ? "gable" : "flat" } });
    }
  }
  return { buildings: e, parks: n };
}
function eM(r, t, e) {
  const n = [], i = (s, o) => n.push({ id: `tree-${n.length + 1}`, type: "tree", district: "Landscape", position: { x: s, y: 2, z: o }, dimensions: { width: t.range(7, 11), depth: 8, height: t.range(14, 23) }, orientation: 0, visual: { color: t.pick(["#577c54", "#70925d", "#8aab6f", "#426d58"]) } });
  for (const s of [-137, -100, 100, 137]) for (let o = -550; o < 570; o += 30) r.rowCoordinates.every((a) => Math.abs(o - a) > 25) && i(s, o);
  for (const s of [-565, 565]) for (let o = -540; o < 550; o += 32) i(s, o);
  for (const s of e) for (let o = 0; o < 35; o++) {
    let a = t.range(r.layout ? -s.dimensions.width / 2 + 10 : -60, r.layout ? s.dimensions.width / 2 - 10 : 60), c = t.range(r.layout ? -s.dimensions.depth / 2 + 10 : -60, r.layout ? s.dimensions.depth / 2 - 10 : 60);
    Math.abs(a) > 10 && Math.abs(c) > 10 && i(s.position.x + a, s.position.z + c);
  }
  if (!r.layout) for (const s of [-450, -270, 270, 450]) for (let o = -510; o < 530; o += 180) for (const a of [-64, 64]) i(s + a, o);
  return n;
}
function nM(r) {
  if (!Number.isInteger(r.seed) || r.size !== 1200 || r.river.centerX !== 0 || r.river.width !== 110) throw new Error("Current engine requires a 1200 m boundary, straight 110 m river and integer seed.");
  const t = new qv(r.seed), { buildings: e, parks: n } = Qv(r, t), i = Jv(r), s = r.rowCoordinates.map((o) => ({ id: `bridge-${o}`, type: "bridge", district: "Citywide", position: { x: 0, y: 1, z: o }, dimensions: { width: 150, depth: o === 0 ? 24 : 16, height: 2 }, orientation: 0, visual: { color: "#c7c6ae" } }));
  return { version: iM(r), name: r.name, seed: r.seed, boundary: r.size, terrain: Zv(r), water: $v(r), roads: i, bridges: s, buildings: e, parks: n, trees: eM(r, t, n).filter((o) => !i.some((a) => a.axis && Math.abs(o.position.x - a.position.x) < (o.dimensions.width + a.dimensions.width) / 2 + 5 && Math.abs(o.position.z - a.position.z) < (o.dimensions.width + a.dimensions.depth) / 2 + 5)) };
}
function iM(r) {
  return r.roadNetwork || r.layout ? "U0.2-dev" : "U0.1";
}
const sM = {
  station: [70, 45, 18, "#bdc4c0"],
  busTerminal: [65, 45, 14, "#c4c5ae"],
  parking: [55, 45, 16, "#89958e"],
  fireStation: [45, 38, 18, "#b67661"],
  policeStation: [45, 38, 22, "#819da9"],
  library: [50, 42, 25, "#dac8a6"],
  powerStation: [70, 60, 28, "#a6ada8"],
  waterFacility: [65, 65, 15, "#a9bbc1"],
  solarFarm: [100, 80, 8, "#54738c"],
  warehouse: [85, 60, 18, "#9ea9a4"],
  factory: [80, 65, 24, "#a9a298"],
  stadium: [110, 85, 22, "#d2d1bc"],
  playground: [45, 45, 8, "#a5bd83"],
  sportsCourt: [55, 40, 8, "#8bab8f"]
};
function rM(r, t) {
  const { x: e, z: n } = t.position, {
    width: i,
    depth: s,
    height: o
  } = t.dimensions, a = t.id, c = t.visual.color, l = (u, d, f, m, _, g, p) => r.box(
    u,
    e + d,
    f,
    n + m,
    _,
    g,
    p,
    a
  ), h = (u, d, f, m, _, g) => r.part(
    "cylinder",
    u,
    e + d,
    f,
    n + m,
    _,
    g,
    _,
    a
  );
  switch (l("#c8c9b4", 0, 3, 0, i + 4, 1, s + 4), t.type) {
    case "station":
      l(c, 0, 4 + o * 0.35, 0, i, o * 0.7, s * 0.55), l("#748b91", 0, 4 + o * 0.8, 0, i + 2, 2, s * 0.7);
      for (const u of [-1, 1])
        l("#6c7777", 0, 4, u * s * 0.37, i, 0.5, 6), l("#d9ddd6", 0, 4.5, u * s * 0.37, i, 0.3, 1);
      break;
    case "busTerminal":
      l(c, 0, 4 + o * 0.25, -s * 0.3, i, o * 0.5, s * 0.3), l("#8a9697", 0, 5, 0, i, 1, s);
      for (let u = -2; u <= 2; u++)
        l("#d7bb68", u * i / 6, 7, s * 0.15, i / 9, 5, s * 0.4);
      break;
    case "parking":
      l(c, 0, 4 + o / 2, 0, i, o, s);
      for (let u = 8; u < 4 + o; u += 4)
        l("#dce1d7", 0, u, 0, i + 1, 0.8, s + 1);
      l("#666f6a", 0, 4 + o + 0.5, 0, i - 2, 1, s - 2);
      for (let u = -2; u <= 2; u++)
        l("#dddcc6", u * i / 6, 5 + o, 0, 0.5, 0.2, s * 0.7);
      break;
    case "solarFarm":
      l("#9cae83", 0, 3.7, 0, i, 1, s);
      for (let u = -2; u <= 2; u++)
        for (let d = -3; d <= 3; d++) {
          const f = d * i / 7, m = u * s / 5;
          l("#a6ada5", f, 4 + o * 0.2, m, 1, o * 0.4, 1), l(c, f, 4 + o * 0.45, m, i / 8, 0.8, s / 7), l("#c4d5d7", f, 4 + o * 0.45 + 0.5, m, 0.3, 0.15, s / 7);
        }
      break;
    case "waterFacility":
      l("#bdc8bc", 0, 4, 0, i, 2, s);
      for (const u of [-1, 1])
        h(
          "#dce0d9",
          u * i * 0.23,
          4 + o * 0.2,
          0,
          Math.min(i, s) * 0.19,
          o * 0.4
        ), h(
          "#77acb7",
          u * i * 0.23,
          4 + o * 0.4 + 0.2,
          0,
          Math.min(i, s) * 0.15,
          0.4
        );
      break;
    case "powerStation":
    case "factory":
      l(c, 0, 4 + o * 0.35, 0, i, o * 0.7, s), l("#89968f", 0, 4 + o * 0.7, 0, i + 2, 2, s + 2);
      for (const u of [-1, 1])
        h(
          "#c6c5ba",
          u * i * 0.3,
          4 + o * 0.65,
          -s * 0.3,
          Math.min(i, s) * 0.06,
          o * 1.3
        );
      break;
    case "warehouse":
      l(c, 0, 4 + o * 0.45, 0, i, o * 0.9, s), r.part(
        "roof",
        "#778780",
        e,
        4 + o * 0.9,
        n,
        i + 3,
        o * 0.2,
        s + 3,
        a
      );
      for (let u = -2; u <= 2; u++)
        l("#667875", u * i / 6, 8, s / 2 + 0.3, i / 9, 7, 0.6);
      break;
    case "stadium":
      l("#7eae76", 0, 4, 0, i * 0.72, 1, s * 0.72);
      for (const u of [-1, 1])
        l(c, u * i * 0.42, 4 + o * 0.25, 0, i * 0.16, o * 0.5, s), l(c, 0, 4 + o * 0.25, u * s * 0.42, i, o * 0.5, s * 0.16), l("#e2e0d5", u * i * 0.42, 4 + o * 0.5, 0, i * 0.18, 1, s);
      l("#e0ead8", 0, 4.7, 0, 0.8, 0.1, s * 0.65);
      break;
    case "sportsCourt":
    case "playground":
      if (l(c, 0, 3.8, 0, i, 1, s), l("#e6e6ce", 0, 4.5, 0, 0.6, 0.2, s * 0.8), t.type === "sportsCourt")
        for (const u of [-1, 1])
          l("#dbddd1", 0, 4 + o * 0.3, u * s * 0.4, 4, o * 0.6, 0.5);
      else
        for (const u of [-1, 1])
          l(
            "#d6ad6a",
            u * i * 0.22,
            4 + o * 0.3,
            0,
            i * 0.22,
            o * 0.6,
            s * 0.25
          );
      break;
    default:
      l(c, 0, 4 + o / 2, 0, i, o, s), l("#e2dfd2", 0, 4 + o, 0, i + 2, 1.5, s + 2);
      for (let u = -2; u <= 2; u++)
        l(
          "#6b858b",
          u * i / 6,
          4 + o * 0.65,
          s / 2 + 0.3,
          i / 10,
          o * 0.24,
          0.6
        );
      if (t.type === "fireStation")
        for (let u = -1; u <= 1; u++)
          l("#693e35", u * i / 4, 8, s / 2 + 0.5, i / 5, 7, 0.8);
      else
        l("#667a79", 0, 8, s / 2 + 0.5, i * 0.15, 7, 0.8);
  }
}
const Me = 40, oM = {
  residential: "#a7c59b",
  commercial: "#a0b7c7",
  public: "#d2c49b"
};
function Iu(r, t) {
  return Math.floor(r / Me) + ":" + Math.floor(t / Me);
}
function aM(r) {
  const [t, e] = r.split(":").map(Number);
  return {
    x: t * Me + Me / 2,
    z: e * Me + Me / 2
  };
}
function Lu(r, t) {
  var e;
  return ((e = r.landscape) == null ? void 0 : e[t]) ?? {
    height: 0,
    pond: !1,
    parcel: null
  };
}
function cM(r, t) {
  const e = t.boundary, n = e / 2, i = t.landscape ?? {};
  if (r.box(
    "#8d9c7f",
    0,
    -36,
    0,
    e + 10,
    26,
    e + 10
  ), !Object.values(i).some(
    (s) => s.height || s.pond
  ))
    r.box(
      "#b2c497",
      0,
      -1,
      0,
      e,
      8,
      e
    );
  else {
    let o = function(a, c, l, h) {
      const d = 3 + h - -23, f = h > 0 ? "#aabd8e" : h < 0 ? "#9aab84" : "#b2c497";
      r.box(
        f,
        a,
        -23 + d / 2,
        c,
        l,
        d,
        Me
      );
    };
    for (let a = -n; a < n; a += Me) {
      let c = -n, l = Lu(
        t,
        Iu(c, a)
      ).height;
      for (let h = -n + Me; h <= n; h += Me) {
        const u = h === n ? null : Lu(
          t,
          Iu(h, a)
        ).height;
        u !== l && (o(
          (c + h) / 2,
          a + Me / 2,
          h - c,
          l
        ), c = h, l = u);
      }
    }
  }
  for (const [s, o] of Object.entries(
    i
  )) {
    const { x: a, z: c } = aM(s);
    if (o.pond && r.box(
      "#78b2bb",
      a,
      0.1,
      c,
      Me,
      0.2,
      Me
    ), o.parcel && !o.pond) {
      r.box(
        oM[o.parcel],
        a,
        3 + o.height + 0.03,
        c,
        Me - 1,
        0.06,
        Me - 1
      );
      for (const l of [-1, 1])
        r.box(
          "#e5e1cc",
          a + l * (Me / 2 - 0.7),
          3 + o.height + 0.1,
          c,
          0.7,
          0.15,
          Me - 1
        ), r.box(
          "#e5e1cc",
          a,
          3 + o.height + 0.1,
          c + l * (Me / 2 - 0.7),
          Me - 1,
          0.15,
          0.7
        );
    }
  }
}
function lM(r) {
  const t = [];
  for (const e of r.parks) {
    const { x: n, z: i } = e.position, { width: s, depth: o } = e.dimensions, a = (l, h, u, d) => ![
      ...r.trees,
      ...r.roads,
      ...r.buildings
    ].some(
      (m) => Math.abs(l - m.position.x) < (u + m.dimensions.width) / 2 + 3 && Math.abs(h - m.position.z) < (d + (m.type === "tree" ? m.dimensions.width : m.dimensions.depth)) / 2 + 3
    ), c = (l, h, u, d, f, m, _, g) => {
      t.push({
        kind: l,
        color: h,
        parkId: e.id,
        x: n + u,
        y: d,
        z: i + f,
        width: m,
        height: _,
        depth: g
      });
    };
    for (const l of [-1, 1])
      for (const h of [-46, -28, 28, 46]) {
        const u = l * 8;
        if (!(Math.abs(h) + 4 > o / 2) && !(Math.abs(u) + 3 > s / 2) && a(n + u, i + h, 4, 7)) {
          c(
            "bench",
            "#a18160",
            u,
            5.5,
            h,
            2.5,
            0.65,
            6
          ), c(
            "bench-back",
            "#a18160",
            u + l * 1.1,
            7,
            h,
            0.45,
            2,
            6
          );
          for (const d of [-2, 2])
            c(
              "bench-leg",
              "#626c65",
              u,
              4.7,
              h + d,
              1.8,
              1.5,
              0.6
            );
        }
      }
    for (const l of [-1, 1])
      for (const h of [-53, 53]) {
        const u = l * 6;
        Math.abs(h) + 3 > o / 2 || Math.abs(u) + 2 > s / 2 || a(n + u, i + h, 3, 3) && (c(
          "lamp",
          "#596863",
          u,
          8,
          h,
          0.7,
          8,
          0.7
        ), c(
          "lamp-head",
          "#f0dfaf",
          u,
          12,
          h,
          1.8,
          1,
          1.8
        ));
      }
  }
  return t;
}
function hM(r) {
  const t = [], { position: e, dimensions: n } = r.water, i = n.width / 2, s = n.depth, o = (a, c, l, h, u, d, f, m) => {
    const _ = { kind: a, color: c, x: l, y: h, z: u, width: d, height: f, depth: m };
    r.roads.some(
      (p) => Math.abs(l - p.position.x) < (d + p.dimensions.width) / 2 + 5 && Math.abs(u - p.position.z) < (m + p.dimensions.depth) / 2 + 5
    ) || t.push(_);
  };
  for (const a of [-1, 1]) {
    const c = e.x + a * (i + 10), l = e.x + a * (i + 25);
    for (let h = -s / 2 + 12; h <= s / 2 - 12; h += 12)
      o(
        "rail",
        "#647674",
        c,
        7,
        h,
        0.65,
        0.65,
        12
      ), o(
        "rail-post",
        "#647674",
        c,
        5.5,
        h,
        0.8,
        3,
        0.8
      );
    for (let h = -s / 2 + 30; h < s / 2 - 20; h += 60) {
      o(
        "bench",
        "#947557",
        l,
        5.6,
        h,
        2.5,
        0.55,
        6
      ), o(
        "bench",
        "#947557",
        l + a * 1.1,
        7,
        h,
        0.45,
        2.2,
        6
      );
      for (const u of [-2, 2])
        o(
          "bench-leg",
          "#586460",
          l,
          4.7,
          h + u,
          2,
          0.95,
          0.6
        );
    }
    for (let h = -s / 2 + 48; h < s / 2 - 20; h += 72)
      o(
        "lamp",
        "#596863",
        l,
        8,
        h,
        0.65,
        8,
        0.65
      ), o(
        "lamp",
        "#596863",
        l - a * 1.3,
        12,
        h,
        3.2,
        0.55,
        0.65
      ), o(
        "lamp-head",
        "#f0dfaf",
        l - a * 2.5,
        11.5,
        h,
        1.6,
        0.65,
        1.4
      );
  }
  for (const a of r.bridges) {
    const { x: c, z: l } = a.position, { width: h, depth: u } = a.dimensions;
    for (const d of [-1, 1])
      t.push({
        kind: "bridge-cap",
        color: "#9baba5",
        x: c,
        y: 8.7,
        z: l + d * (u / 2 + 2),
        width: h + 2,
        height: 0.45,
        depth: 2.2
      });
  }
  return t;
}
function uM(r, t) {
  const { width: e, depth: n, height: i } = r.dimensions, s = [...r.id].reduce(
    (l, h) => Math.imul(l, 31) + h.charCodeAt(0) >>> 0,
    0
  ) % 3, o = [], a = (l, h, u, d, f, m, _) => o.push({ color: l, x: h, y: u, z: d, width: f, height: m, depth: _ }), c = t.at(-1);
  if (r.type === "apartment" || r.type === "midrise")
    for (const l of t)
      for (let h = l.bottom + 3; h + 4 < l.top; h += 8)
        for (const u of [-1, 1]) {
          const d = u * (l.depth / 2 + 1.25);
          a(
            "#ded8c7",
            0,
            h,
            d,
            l.width * 0.65,
            0.65,
            2.5
          ), a(
            "#81928c",
            0,
            h + 1.1,
            u * (l.depth / 2 + 2.3),
            l.width * 0.65,
            1.5,
            0.25
          );
        }
  if (r.type === "office")
    for (const l of t) {
      const h = l.top - l.bottom;
      for (const u of [-1, 1])
        for (const d of [-l.width * 0.37, l.width * 0.37])
          a(
            "#aabbb8",
            d,
            l.bottom + h / 2,
            u * (l.depth / 2 + 0.32),
            0.7,
            h,
            0.3
          );
    }
  if (["office", "apartment", "midrise"].includes(r.type)) {
    for (const l of [-1, 1])
      a(
        "#ded8c7",
        0,
        i + 2,
        l * (c.depth / 2 - 0.6),
        c.width,
        2,
        0.5
      ), a(
        "#ded8c7",
        l * (c.width / 2 - 0.6),
        i + 2,
        0,
        0.5,
        2,
        c.depth
      );
    s === 0 && a(
      "#81928c",
      -c.width * 0.2,
      i + 2.2,
      0,
      3,
      1.4,
      3
    );
  }
  if (r.type === "commercial")
    for (const l of [-1, 1])
      a(
        "#526e70",
        l * e * 0.27,
        4.5,
        n / 2 + 0.35,
        e * 0.3,
        5,
        0.35
      );
  return {
    parts: o,
    roofRotation: r.type === "house" && s === 1 ? Math.PI / 2 : 0,
    roofHeight: s === 2 ? 7 : 9,
    officeGlass: s === 0 ? "#42636b" : s === 1 ? "#526e70" : "#597c80"
  };
}
function dM(r) {
  const { width: t, depth: e, height: n } = r.dimensions, s = [...r.id].reduce(
    (a, c) => Math.imul(a, 31) + c.charCodeAt(0) >>> 0,
    0
  ) % 3, o = (a, c, l = 1, h = 1) => ({
    bottom: a,
    top: c,
    width: t * l,
    depth: e * h
  });
  if (r.type === "office")
    return s === 0 ? [
      o(0, 16),
      o(16, n, 0.72, 0.76)
    ] : s === 1 ? [
      o(0, n * 0.46),
      o(n * 0.46, n * 0.78, 0.82, 0.84),
      o(n * 0.78, n, 0.62, 0.66)
    ] : [
      o(0, 12),
      o(12, n, 0.9, 0.62)
    ];
  if (r.type === "midrise" || r.type === "apartment") {
    if (s === 0) return [
      o(0, n * 0.67),
      o(n * 0.67, n, 0.76, 0.82)
    ];
    if (s === 1) return [
      o(0, n * 0.8),
      o(n * 0.8, n, 0.86, 0.7)
    ];
  }
  return [o(0, n)];
}
function fM(r) {
  const t = new Il(
    16185319,
    8689027,
    2.5
  );
  r.add(t);
  const e = new Dl(16773333, 3.2);
  return e.position.set(-400, 850, 350), e.castShadow = !0, e.shadow.mapSize.set(1024, 1024), Object.assign(e.shadow.camera, { left: -850, right: 850, top: 850, bottom: -850, near: 10, far: 1800 }), e.shadow.bias = -4e-4, e.shadow.normalBias = 1.5, r.add(e), { hemisphere: t, sun: e };
}
function pM(r, t) {
  const { hemisphere: e, sun: n } = r;
  e.color.setHex(
    t ? 7441848 : 16185319
  ), e.groundColor.setHex(
    t ? 3753822 : 8689027
  ), e.intensity = t ? 0.65 : 2.5, n.color.setHex(
    t ? 10402285 : 16773333
  ), n.intensity = t ? 0.85 : 3.2, n.castShadow = !t;
}
class mM {
  constructor(t, e) {
    this.state = e, this.scene = new gl(), this.scene.background = new ut("#e9eee7"), this.camera = new Ee(38, 1, 2, 6500), this.renderer = new kd({ antialias: !0, powerPreference: "high-performance" }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1)), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.autoUpdate = !1, this.renderer.shadowMap.needsUpdate = !0, this.renderer.shadowMap.type = Zc, this.renderer.outputColorSpace = Be, this.renderer.toneMapping = $c, t.appendChild(this.renderer.domElement), this.geometries = { front: new Wn(1, 1), side: new Wn(1, 1).rotateY(Math.PI / 2), box: new Gn(1, 1, 1), cone: new vr(1, 1, 7), sphere: new Mr(1, 1), cylinder: new Vi(1, 1, 1, 8) };
    const n = new Vt();
    n.setAttribute("position", new St([-0.5, 0, -0.5, 0.5, 0, -0.5, 0, 1, -0.5, -0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, 0, 1, -0.5, 0, 1, 0.5, -0.5, 0, -0.5, 0, 1, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0, -0.5, 0, 1, 0.5, 0, 1, -0.5], 3)), n.computeVertexNormals(), this.geometries.roof = n, this.batches = /* @__PURE__ */ new Map(), this.pickables = [], this.lights = fM(this.scene), this.build(), this.flush(), this.observer = new ResizeObserver(() => this.resize(t)), this.observer.observe(t), this.resize(t);
  }
  part(t, e, n, i, s, o, a, c, l = null, h = 0) {
    const u = this.buildingTransform;
    if (u) {
      const f = n - u.x, m = s - u.z, _ = Math.cos(u.angle), g = Math.sin(u.angle);
      n = u.x + f * _ + m * g, s = u.z - f * g + m * _, h += u.angle;
    }
    const d = `${t}:${e}`;
    this.batches.has(d) || this.batches.set(d, { shape: t, color: e, items: [] }), this.batches.get(d).items.push({ x: n, y: i, z: s, w: o, h: a, d: c, id: l, rotation: h });
  }
  box(t, e, n, i, s, o, a, c = null) {
    this.part("box", t, e, n, i, s, o, a, c);
  }
  build() {
    const t = this.state, e = t.boundary;
    cM(this, t), this.box("#68a9ad", 0, 3, 0, 110, 1, e);
    for (const n of [-59, 59]) this.box("#c6c7ac", n, 4, 0, 8, 5, e);
    for (const n of [-74, 74]) this.box("#dbd7bf", n, 3, 0, 20, 2, e);
    for (let n = -e / 2 + 30; n < e / 2; n += 52) this.box("#92c1bd", 0, 3.6, n, 65, 0.1, 1.2);
    for (const n of hM(t))
      this.box(
        n.color,
        n.x,
        n.y,
        n.z,
        n.width,
        n.height,
        n.depth
      );
    for (const n of Uf(t))
      this.box(
        "#596863",
        n.x,
        8,
        n.z,
        0.65,
        8,
        0.65
      ), this.box(
        "#596863",
        n.x + n.dx * 1.5,
        12,
        n.z + n.dz * 1.5,
        n.dx ? 3.6 : 0.65,
        0.55,
        n.dz ? 3.6 : 0.65
      ), this.box(
        "#f0dfaf",
        n.x + n.dx * 3,
        11.7,
        n.z + n.dz * 3,
        1.5,
        0.65,
        1.5
      );
    for (const n of t.roads) {
      if (n.path) {
        this.drawPathRoad(n);
        continue;
      }
      const { x: i, z: s } = n.position, { width: o, depth: a } = n.dimensions;
      this.box("#d4d2bc", i, 3, s, o + 9, 2, a + 9), this.box("#6f7b75", i, 4.1, s, o, 0.3, a);
      const c = n.axis ?? (o < 100 ? "z" : "x"), l = c === "z" ? a : o, h = c === "z" ? s : i;
      for (let u = h - l / 2 + 15; u < h + l / 2 - 10; u += 25) {
        const d = c === "z" ? i : u, f = c === "z" ? u : s;
        t.roads.some(
          (m) => m !== n && (m.axis ?? (m.dimensions.width < 100 ? "z" : "x")) !== c && Math.abs(d - m.position.x) < m.dimensions.width / 2 + 7 && Math.abs(f - m.position.z) < m.dimensions.depth / 2 + 7
        ) || this.box(
          "#d8d7ba",
          d,
          4.4,
          f,
          c === "z" ? 1 : 10,
          0.1,
          c === "z" ? 10 : 1
        );
      }
    }
    for (const n of t.bridges) {
      const i = n.position.z, s = n.dimensions.depth;
      for (const o of [-s / 2 - 2, s / 2 + 2]) {
        this.box("#e6dfc8", 0, 7, i + o, 152, 3, 2);
        for (const a of [-48, 48]) this.box("#b9baa6", a, 2, i + o, 5, 8, 5);
      }
    }
    for (const n of t.parks) {
      const { x: i, z: s } = n.position, { width: o, depth: a } = n.dimensions;
      this.box(n.visual.color, i, 3, s, o + 5, 1, a + 5), this.box("#ded5b6", i, 4, s, o, 0.5, 7), this.box("#ded5b6", i, 4, s, 7, 0.5, a), i < 0 ? (this.part(
        "cylinder",
        "#d5d7c3",
        i,
        4.5,
        s,
        13,
        2,
        13
      ), this.part(
        "cylinder",
        "#7fb4b2",
        i,
        5.7,
        s,
        10,
        0.5,
        10
      )) : (this.box("#d7cab0", i, 4.4, s, 16, 0.6, 16), this.box("#c3b59a", i, 4.8, s, 8, 0.2, 8));
    }
    for (const n of [-e / 2 + 20, e / 2 - 20]) for (const i of [-400, -100, 200, 420]) this.part("sphere", "#a7bd8d", n, 0, i, 20, 9, 65);
    for (const n of lM(t))
      this.box(
        n.color,
        n.x,
        n.y,
        n.z,
        n.width,
        n.height,
        n.depth
      );
    for (const n of t.buildings) this.building(n);
    for (const n of t.trees) {
      const { x: i, z: s } = n.position, o = n.dimensions.height, a = n.dimensions.width;
      this.part("cylinder", "#8b8164", i, 6, s, 1.5, 8, 1.5), this.part("sphere", n.visual.color, i, o * 0.65 + 5, s, a, o * 0.48, a);
    }
  }
  building(t) {
    const e = t.orientation || 0, n = Math.round(
      e / (Math.PI / 2)
    ), i = {
      ...t,
      dimensions: {
        ...t.dimensions
      }
    };
    if (Math.abs(n) % 2) {
      const s = i.dimensions;
      [s.width, s.depth] = [s.depth, s.width];
    }
    this.buildingTransform = {
      x: t.position.x,
      z: t.position.z,
      angle: e
    };
    try {
      this.buildLocalBuilding(i);
    } finally {
      this.buildingTransform = null;
    }
  }
  buildLocalBuilding(t) {
    if (Object.hasOwn(sM, t.type)) {
      rM(this, t);
      return;
    }
    const { x: e, z: n } = t.position, { width: i, depth: s, height: o } = t.dimensions, a = t.id, c = 4;
    this.box("#c9c7ad", e, 3, n, i + 7, 1, s + 7, a);
    const l = dM(t), h = l[l.length - 1], u = uM(t, l);
    for (const f of l)
      this.box(
        t.visual.color,
        e,
        c + (f.bottom + f.top) / 2,
        n,
        f.width,
        f.top - f.bottom,
        f.depth,
        a
      );
    t.type === "house" ? (this.part(
      "roof",
      t.visual.roof,
      e,
      c + o,
      n,
      u.roofRotation ? s + 4 : i + 4,
      u.roofHeight,
      u.roofRotation ? i + 4 : s + 4,
      a,
      u.roofRotation
    ), this.box("#eee2c9", e + i * 0.25, c + o + 4, n, 3, 9, 3, a)) : (this.box(
      "#f1ead8",
      e,
      c + o,
      n,
      h.width + 2,
      1.6,
      h.depth + 2,
      a
    ), this.box(
      t.visual.roof,
      e,
      c + o + 1,
      n,
      h.width - 3,
      1,
      h.depth - 3,
      a
    ), this.box("#b6b5a4", e + 3, c + o + 3, n, 8, 4, 7, a));
    const d = t.type === "office" ? u.officeGlass : "#687d79";
    for (const f of l) {
      const m = f.width, _ = f.depth;
      for (let g = c + f.bottom + 5; g + 2 <= c + f.top; g += t.type === "office" ? 9 : 8) {
        for (const p of [-1, 1])
          for (let y = -m / 2 + 5; y < m / 2 - 2; y += 7)
            this.part(
              "front",
              d,
              e + y,
              g,
              n + p * (_ / 2 + 0.15),
              t.type === "office" ? 5.2 : 3.7,
              3.8,
              1,
              a
            );
        for (const p of [-1, 1])
          for (let y = -_ / 2 + 5; y < _ / 2 - 2; y += 8)
            this.part(
              "side",
              d,
              e + p * (m / 2 + 0.15),
              g,
              n + y,
              1,
              3.8,
              t.type === "office" ? 5.2 : 4,
              a
            );
      }
    }
    for (const f of u.parts)
      this.box(
        f.color,
        e + f.x,
        c + f.y,
        n + f.z,
        f.width,
        f.height,
        f.depth,
        a
      );
    if (this.box("#536960", e, 7, n + s / 2 + 0.3, 4, 6, 0.6, a), t.type === "commercial" && this.box("#b47c55", e, 9, n + s / 2 + 2, i, 2, 5, a), t.type === "hospital" && (this.box("#b65d4c", e, c + o + 2, n, 12, 1, 3, a), this.box("#b65d4c", e, c + o + 2, n, 3, 1, 12, a)), t.type === "school" && this.box("#ceab60", e, c + o + 2, n, i * 0.7, 2, s * 0.65, a), t.type === "civic") {
      for (let f = -i / 2 + 3; f < i / 2; f += 6) this.part("cylinder", "#f5ecd9", e + f, 12, n + s / 2 + 2, 1.5, 16, 1.5, a);
      this.box("#e8dfca", e, 21, n + s / 2 + 2, i + 3, 3, 6, a);
    }
  }
  drawPathRoad(t) {
    const { points: e, width: n, bridge: i } = t.path;
    for (let s = 1; s < e.length; s++) {
      const o = e[s - 1], a = e[s], c = a[0] - o[0], l = a[1] - o[1], h = Math.hypot(c, l), u = Math.atan2(c, l), d = (o[0] + a[0]) / 2, f = (o[1] + a[1]) / 2, m = h + n * 0.3;
      if (this.part(
        "box",
        "#d4d2bc",
        d,
        3.6,
        f,
        n + 6,
        1.8,
        m,
        t.id,
        u
      ), this.part(
        "box",
        t.visual.color || "#697671",
        d,
        4.8,
        f,
        n,
        0.5,
        m,
        t.id,
        u
      ), this.part(
        "box",
        "#e0ddc3",
        d,
        5.1,
        f,
        0.6,
        0.1,
        Math.min(h * 0.55, 8),
        t.id,
        u
      ), i && Math.abs(d) < 80) {
        const _ = Math.cos(u), g = -Math.sin(u);
        for (const p of [-1, 1]) {
          const y = p * (n / 2 + 1);
          this.part(
            "box",
            "#e6dfc8",
            d + _ * y,
            7,
            f + g * y,
            1.2,
            3,
            m,
            t.id,
            u
          );
        }
        s % 3 === 0 && this.box(
          "#b9baa6",
          d,
          1.7,
          f,
          4,
          6,
          4,
          t.id
        );
      }
      s < e.length - 1 && this.part(
        "cylinder",
        "#697671",
        a[0],
        4.8,
        a[1],
        n / 2,
        0.5,
        n / 2,
        t.id
      );
    }
  }
  flush() {
    const t = new Zt();
    for (const e of this.batches.values()) {
      const n = new wr({ color: e.color, roughness: 0.85, side: ["roof", "front", "side"].includes(e.shape) ? hn : bn });
      n.userData.nightGlow = ["front", "side"].includes(e.shape) ? "window" : e.color === "#f0dfaf" ? "lamp" : null;
      const i = new rr(this.geometries[e.shape], n, e.items.length);
      i.userData.ids = [], e.items.forEach((s, o) => {
        t.position.set(s.x, s.y, s.z), t.scale.set(s.w, s.h, s.d), t.rotation.set(0, s.rotation, 0), t.updateMatrix(), i.setMatrixAt(o, t.matrix), i.userData.ids[o] = s.id;
      }), i.castShadow = !["front", "side"].includes(e.shape), i.receiveShadow = !0, i.computeBoundingSphere(), this.scene.add(i), i.userData.ids.some(Boolean) && this.pickables.push(i);
    }
    this.batches.clear();
  }
  setDayNight(t) {
    var e;
    this.scene.background.set(
      t ? "#111c30" : "#e9eee7"
    ), pM(this.lights, t), this.scene.traverse((n) => {
      var o;
      const i = n.material, s = (o = i == null ? void 0 : i.userData) == null ? void 0 : o.nightGlow;
      s && (i.emissive.set(
        t ? s === "lamp" ? "#ffcf80" : "#ffd393" : "#000000"
      ), i.emissiveIntensity = t ? s === "lamp" ? 1.8 : 0.8 : 0);
    }), this.renderer.shadowMap.needsUpdate = !0, this.dirty = !0, (e = this.onInvalidate) == null || e.call(this);
  }
  highlight(t) {
    var o;
    if (this.dirty = !0, (o = this.onInvalidate) == null || o.call(this), this.outline && (this.scene.remove(this.outline), this.outline.geometry.dispose(), this.outline.material.dispose(), this.outline = null), !t) return;
    const { width: e, depth: n, height: i } = t.dimensions, s = new Gn(e + 10, i + 12, n + 10);
    this.outline = new pn(new Tl(s), new Ne({ color: "#e49b42" })), s.dispose(), this.outline.position.set(t.position.x, 4 + i / 2, t.position.z), this.scene.add(this.outline);
  }
  resize(t) {
    var s;
    const e = t.getBoundingClientRect(), n = Math.floor(e.width), i = Math.floor(e.height);
    n <= 0 || i <= 0 || n === this.viewportWidth && i === this.viewportHeight || (this.viewportWidth = n, this.viewportHeight = i, this.camera.aspect = n / i, this.camera.updateProjectionMatrix(), this.renderer.setSize(n, i), this.dirty = !0, (s = this.onInvalidate) == null || s.call(this));
  }
  render() {
    this.renderer.render(this.scene, this.camera), this.dirty = !1;
  }
  dispose() {
    this.observer.disconnect(), this.highlight(null), this.scene.traverse((t) => {
      t.isMesh && (t.material.dispose(), t.isInstancedMesh && t.dispose());
    }), Object.values(this.geometries).forEach((t) => t.dispose()), this.renderer.dispose();
  }
}
const Du = { type: "change" }, zl = { type: "start" }, Nf = { type: "end" }, Mo = new ki(), Uu = new Un(), gM = Math.cos(70 * Ys.DEG2RAD), ve = new T(), We = 2 * Math.PI, re = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, Rc = 1e-6;
class _M extends Df {
  constructor(t, e = null) {
    super(t, e), this.state = re.NONE, this.enabled = !0, this.target = new T(), this.cursor = new T(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ri.ROTATE, MIDDLE: Ri.DOLLY, RIGHT: Ri.PAN }, this.touches = { ONE: wi.ROTATE, TWO: wi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new T(), this._lastQuaternion = new Ie(), this._lastTargetPosition = new T(), this._quat = new Ie().setFromUnitVectors(t.up, new T(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Xc(), this._sphericalDelta = new Xc(), this._scale = 1, this._panOffset = new T(), this._rotateStart = new q(), this._rotateEnd = new q(), this._rotateDelta = new q(), this._panStart = new q(), this._panEnd = new q(), this._panDelta = new q(), this._dollyStart = new q(), this._dollyEnd = new q(), this._dollyDelta = new q(), this._dollyDirection = new T(), this._mouse = new q(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = yM.bind(this), this._onPointerDown = xM.bind(this), this._onPointerUp = vM.bind(this), this._onContextMenu = AM.bind(this), this._onMouseWheel = SM.bind(this), this._onKeyDown = wM.bind(this), this._onTouchStart = EM.bind(this), this._onTouchMove = TM.bind(this), this._onMouseDown = MM.bind(this), this._onMouseMove = bM.bind(this), this._interceptControlDown = CM.bind(this), this._interceptControlUp = RM.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Du), this.update(), this.state = re.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    ve.copy(e).sub(this.target), ve.applyQuaternion(this._quat), this._spherical.setFromVector3(ve), this.autoRotate && this.state === re.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += We : n > Math.PI && (n -= We), i < -Math.PI ? i += We : i > Math.PI && (i -= We), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let s = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = o != this._spherical.radius;
    }
    if (ve.setFromSpherical(this._spherical), ve.applyQuaternion(this._quatInverse), e.copy(this.target).add(ve), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = ve.length();
        o = this._clampDistance(a * this._scale);
        const c = a - o;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), s = !!c;
      } else if (this.object.isOrthographicCamera) {
        const a = new T(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = c !== this.object.zoom;
        const l = new T(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(a), this.object.updateMatrixWorld(), o = ve.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (Mo.origin.copy(this.object.position), Mo.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Mo.direction)) < gM ? this.object.lookAt(this.target) : (Uu.setFromNormalAndCoplanarPoint(this.object.up, this.target), Mo.intersectPlane(Uu, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), s = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, s || this._lastPosition.distanceToSquared(this.object.position) > Rc || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Rc || this._lastTargetPosition.distanceToSquared(this.target) > Rc ? (this.dispatchEvent(Du), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? We / 60 * this.autoRotateSpeed * t : We / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    ve.setFromMatrixColumn(e, 0), ve.multiplyScalar(-t), this._panOffset.add(ve);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? ve.setFromMatrixColumn(e, 1) : (ve.setFromMatrixColumn(e, 0), ve.crossVectors(this.object.up, ve)), ve.multiplyScalar(t), this._panOffset.add(ve);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      ve.copy(i).sub(this.target);
      let s = ve.length();
      s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * s / n.clientHeight, this.object.matrix), this._panUp(2 * e * s / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), i = t - n.left, s = e - n.top, o = n.width, a = n.height;
    this._mouse.x = i / o * 2 - 1, this._mouse.y = -(s / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(We * this._rotateDelta.x / e.clientHeight), this._rotateUp(We * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(We * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(-We * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(We * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(-We * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, s = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, s);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + n.x), s = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(i, s);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(We * this._rotateDelta.x / e.clientHeight), this._rotateUp(We * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, s = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (t.pageX + e.x) * 0.5, a = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  // pointers
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new q(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  //
  _customWheelEvent(t) {
    const e = t.deltaMode, n = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function xM(r) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(r.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(r) && (this._addPointer(r), r.pointerType === "touch" ? this._onTouchStart(r) : this._onMouseDown(r)));
}
function yM(r) {
  this.enabled !== !1 && (r.pointerType === "touch" ? this._onTouchMove(r) : this._onMouseMove(r));
}
function vM(r) {
  switch (this._removePointer(r), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(r.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Nf), this.state = re.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function MM(r) {
  let t;
  switch (r.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case Ri.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(r), this.state = re.DOLLY;
      break;
    case Ri.ROTATE:
      if (r.ctrlKey || r.metaKey || r.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(r), this.state = re.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(r), this.state = re.ROTATE;
      }
      break;
    case Ri.PAN:
      if (r.ctrlKey || r.metaKey || r.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(r), this.state = re.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(r), this.state = re.PAN;
      }
      break;
    default:
      this.state = re.NONE;
  }
  this.state !== re.NONE && this.dispatchEvent(zl);
}
function bM(r) {
  switch (this.state) {
    case re.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(r);
      break;
    case re.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(r);
      break;
    case re.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(r);
      break;
  }
}
function SM(r) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== re.NONE || (r.preventDefault(), this.dispatchEvent(zl), this._handleMouseWheel(this._customWheelEvent(r)), this.dispatchEvent(Nf));
}
function wM(r) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(r);
}
function EM(r) {
  switch (this._trackPointer(r), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case wi.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(r), this.state = re.TOUCH_ROTATE;
          break;
        case wi.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(r), this.state = re.TOUCH_PAN;
          break;
        default:
          this.state = re.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case wi.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(r), this.state = re.TOUCH_DOLLY_PAN;
          break;
        case wi.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(r), this.state = re.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = re.NONE;
      }
      break;
    default:
      this.state = re.NONE;
  }
  this.state !== re.NONE && this.dispatchEvent(zl);
}
function TM(r) {
  switch (this._trackPointer(r), this.state) {
    case re.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(r), this.update();
      break;
    case re.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(r), this.update();
      break;
    case re.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(r), this.update();
      break;
    case re.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(r), this.update();
      break;
    default:
      this.state = re.NONE;
  }
}
function AM(r) {
  this.enabled !== !1 && r.preventDefault();
}
function CM(r) {
  r.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function RM(r) {
  r.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function PM(r, t, e = 650) {
  const n = Ys.clamp(t.x, -e, e), i = Ys.clamp(t.y, 0, 150), s = Ys.clamp(t.z, -e, e);
  return n === t.x && i === t.y && s === t.z ? !1 : (r.position.x += n - t.x, r.position.y += i - t.y, r.position.z += s - t.z, t.set(n, i, s), !0);
}
class IM {
  constructor(t, e) {
    this.camera = t, this.controls = new _M(t, e), this.controls.enableDamping = !0, this.controls.zoomSpeed = 0.65, this.controls.rotateSpeed = 0.6, this.controls.panSpeed = 0.9, this.controls.zoomToCursor = !1, this.controls.listenToKeyEvents(window), this.controls.dampingFactor = 0.12, this.controls.minDistance = 80, this.controls.maxDistance = 6e3, this.controls.maxPolarAngle = Math.PI / 2.12, this.controls.screenSpacePanning = !1, this.reset();
  }
  reset() {
    this.top = !1, this.controls.target.set(0, 0, 0), this.camera.position.set(1250, 1250, 1500).multiplyScalar(Math.max(1, 1.3 / this.camera.aspect)), this.controls.update();
  }
  toggleTop() {
    if (this.top) {
      this.reset();
      return;
    }
    this.top = !0, this.controls.target.set(0, 0, 0), this.camera.position.set(0, 2100 * ((this.worldSize || 1200) / 1200) / Math.min(1, this.camera.aspect), 0.1), this.controls.update();
  }
  update(t) {
    const e = this.controls.update(t), n = PM(
      this.camera,
      this.controls.target,
      this.worldSize ? this.worldSize / 2 + 50 : 650
    );
    return e || n;
  }
  dispose() {
    this.controls.dispose();
  }
}
class LM {
  constructor(t, e) {
    this.view = t, this.onSelect = e, this.raycaster = new If(), this.pointers = /* @__PURE__ */ new Set(), this.hitPoint = new T(), this.targets = t.state.buildings.map((i) => {
      const { x: s, z: o } = i.position, { width: a, depth: c, height: l } = i.dimensions;
      return { building: i, bounds: new Le(
        new T(s - a / 2 - 2, 3, o - c / 2 - 2),
        new T(s + a / 2 + 2, l + (i.type === "house" ? 13 : 9), o + c / 2 + 3)
      ) };
    });
    const n = t.renderer.domElement;
    this.down = (i) => {
      this.pointers.add(i.pointerId), this.pointers.size > 1 ? this.cancelled = !0 : (this.start = { x: i.clientX, y: i.clientY }, this.cancelled = i.button !== 0 || i.shiftKey || i.ctrlKey || i.metaKey || i.altKey);
    }, this.move = (i) => {
      this.start && Math.hypot(i.clientX - this.start.x, i.clientY - this.start.y) > 5 && (this.cancelled = !0);
    }, this.up = (i) => {
      this.pointers.delete(i.pointerId);
      const s = this.start;
      if (this.pointers.size === 0 && (this.start = null), i.button !== 0 || this.cancelled || !s) return;
      const o = n.getBoundingClientRect();
      if (o.width <= 0 || o.height <= 0) return;
      t.camera.updateMatrixWorld(), this.raycaster.setFromCamera(new q(
        (i.clientX - o.left) / o.width * 2 - 1,
        -(i.clientY - o.top) / o.height * 2 + 1
      ), t.camera);
      let a, c = 1 / 0;
      for (const l of this.targets)
        if (this.raycaster.ray.intersectBox(l.bounds, this.hitPoint)) {
          const h = this.hitPoint.distanceToSquared(this.raycaster.ray.origin);
          h < c && (c = h, a = l.building);
        }
      t.highlight(a), e(a);
    }, this.cancel = () => {
      this.cancelled = !0, this.start = null, this.pointers.clear();
    }, this.handlers = { pointerdown: this.down, pointermove: this.move, pointerup: this.up, pointercancel: this.cancel };
    for (const [i, s] of Object.entries(this.handlers)) n.addEventListener(i, s);
  }
  dispose() {
    for (const [t, e] of Object.entries(this.handlers)) this.view.renderer.domElement.removeEventListener(t, e);
  }
}
class DM {
  constructor(t, e = (i) => globalThis.requestAnimationFrame(i), n = (i) => globalThis.cancelAnimationFrame(i)) {
    this.step = t, this.request = e, this.cancel = n, this.pending = null, this.disposed = !1, this.tick = (i) => {
      this.pending = null, !this.disposed && this.step(i) && this.invalidate();
    };
  }
  invalidate() {
    !this.disposed && this.pending === null && (this.pending = this.request(this.tick));
  }
  suspend() {
    this.pending !== null && this.cancel(this.pending), this.pending = null;
  }
  dispose() {
    this.suspend(), this.disposed = !0;
  }
}
class GM {
  constructor(t, e, n) {
    this.state = nM(e), this.view = new mM(t, this.state), this.camera = new IM(this.view.camera, this.view.renderer.domElement), this.selection = new LM(this.view, n), this.activity = new Yv(this.view);
    let i = null;
    this.scheduler = new DM((s) => {
      if (document.hidden)
        return i = null, !1;
      const o = i === null ? 1 / 60 : Math.min((s - i) / 1e3, 0.1);
      i = s;
      const a = this.camera.update(o), c = this.activity.update(o);
      (a || c || this.view.dirty) && this.view.render();
      const l = a || c || this.camera.controls.autoRotate;
      return l || (i = null), l;
    }), this.invalidate = () => {
      this.view.dirty = !0, this.scheduler.invalidate();
    }, this.view.onInvalidate = this.invalidate, this.camera.controls.addEventListener("change", this.invalidate), this.visibility = () => {
      document.hidden ? (i = null, this.scheduler.suspend()) : this.invalidate();
    }, document.addEventListener("visibilitychange", this.visibility), this.invalidate();
  }
  dispose() {
    this.scheduler.dispose(), document.removeEventListener("visibilitychange", this.visibility), this.camera.controls.removeEventListener("change", this.invalidate), this.view.onInvalidate = null, this.selection.dispose(), this.camera.dispose(), this.activity.dispose(), this.view.dispose();
  }
}
const UM = "Riverbend", NM = 4201, OM = 1200, FM = { centerX: 0, width: 110 }, BM = [-540, -360, -180, 180, 360, 540], zM = [-540, -360, -180, 0, 180, 360, 540], kM = ["Garden Quarter", "Westbank Living", "Civic Commons", "Market Quarter", "Central Business District", "Riverside Park"], VM = { collectors: [-118, 118], linksAt: [-270, 270] }, WM = {
  name: UM,
  seed: NM,
  size: OM,
  river: FM,
  roadCoordinates: BM,
  rowCoordinates: zM,
  districts: kM,
  roadNetwork: VM
};
function HM(r, t, { requestFrame: e = ((s) => (s = globalThis.requestAnimationFrame) == null ? void 0 : s.bind(globalThis))(), cancelFrame: n = ((o) => (o = globalThis.cancelAnimationFrame) == null ? void 0 : o.bind(globalThis))(), now: i = () => globalThis.performance.now() } = {}) {
  var S, M, L;
  if (!((S = r == null ? void 0 : r.view) != null && S.scene) || !((M = r == null ? void 0 : r.view) != null && M.camera) || !((L = r == null ? void 0 : r.camera) != null && L.controls)) throw new TypeError("Expected a UUE CityEngine instance");
  const a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = new t.Group();
  d.name = "Project-owned scene", r.view.scene.add(d);
  let f = !1, m = null, _ = null, g = !1;
  const p = () => {
    if (f) throw new Error("Project API disposed");
  }, y = () => r.invalidate(), v = { on(D, U) {
    if (p(), typeof U != "function") throw new TypeError("Listener required");
    return a.has(D) || a.set(D, /* @__PURE__ */ new Set()), a.get(D).add(U), () => {
      var B;
      return (B = a.get(D)) == null ? void 0 : B.delete(U);
    };
  }, emit(D, U) {
    p();
    const B = [];
    for (const Y of [...a.get(D) || []]) try {
      Y(U);
    } catch (H) {
      B.push(H);
    }
    if (B.length) throw new AggregateError(B, `Listeners failed: ${D}`);
  } }, x = (D, U, B) => {
    if (p(), typeof U != "string" || !U || D.has(U)) throw new Error(`Invalid or duplicate ID: ${U}`);
    return D.set(U, B), B;
  };
  function I() {
    if (!m) return;
    const D = m;
    m = null, n == null || n(D.id), D.controls.enabled = D.enabled, D.controls.minDistance = D.min, D.controls.update(), y(), D.resolve(!1);
  }
  const E = { cancel: I, move({ target: D, position: U, seconds: B = 1.2, minDistance: Y = 0 }) {
    if (p(), !Array.isArray(D) || !Array.isArray(U) || D.length !== 3 || U.length !== 3 || ![...D, ...U, B, Y].every(Number.isFinite) || B < 0 || Y < 0) throw new TypeError("Finite camera vectors and nonnegative duration required");
    if (B > 0 && (!e || !n)) throw new Error("Animation frame API unavailable");
    I();
    const H = r.view.camera, j = r.camera.controls, G = H.position.clone(), at = j.target.clone(), dt = new t.Vector3(...U), xt = new t.Vector3(...D);
    if (B === 0)
      return H.position.copy(dt), j.target.copy(xt), j.update(), y(), Promise.resolve(!0);
    const Ot = i();
    return new Promise((Jt) => {
      const X = { controls: j, enabled: j.enabled, min: j.minDistance, resolve: Jt, id: null };
      m = X, j.enabled = !1, j.minDistance = Y;
      const nt = (bt) => {
        if (m !== X) return;
        const it = Math.min(1, Math.max(0, (bt - Ot) / (B * 1e3))), Pt = it * it * (3 - 2 * it);
        H.position.copy(G.clone().lerp(dt, Pt)), j.target.copy(at.clone().lerp(xt, Pt)), j.update(), y(), it < 1 ? X.id = e(nt) : (m = null, j.enabled = X.enabled, j.minDistance = X.min, j.update(), y(), Jt(!0));
      };
      X.id = e(nt);
    });
  } }, C = { root: d, add(D, U, B) {
    if (p(), !(U != null && U.isObject3D) || U.parent) throw new TypeError("A detached Three.js Object3D is required");
    return x(u, D, { object: U, cleanup: B }), d.add(U), y(), U;
  }, remove(D) {
    var B;
    p();
    const U = u.get(D);
    if (!U) return !1;
    u.delete(D), d.remove(U.object);
    try {
      (B = U.cleanup) == null || B.call(U, U.object);
    } finally {
      y();
    }
    return !0;
  }, get(D) {
    var U;
    return (U = u.get(D)) == null ? void 0 : U.object;
  } }, R = {
    raw: r,
    THREE: t,
    camera: E,
    scene: C,
    events: v,
    invalidate: y,
    get renderer() {
      return r.view.renderer;
    },
    get world() {
      return r.view.scene;
    },
    get state() {
      return r.state;
    },
    lighting: { setNight(D) {
      p(), r.view.setDayNight(!!D), r.activity.setNight(!!D), y();
    } },
    activity: { setLevel(D) {
      p(), r.activity.setLevel(D), y();
    } },
    assets: { register(D, U) {
      if (typeof U != "function") throw new TypeError("Asset factory required");
      x(c, D, U);
    }, create(D, U) {
      p();
      const B = c.get(D);
      if (!B) throw new Error(`Unknown asset: ${D}`);
      return B(U, R);
    } },
    behaviours: { register(D, U) {
      if (typeof U != "function") throw new TypeError("Behaviour callback required");
      return x(l, D, U), () => l.delete(D);
    }, tick(D) {
      if (p(), !Number.isFinite(D) || D < 0) throw new TypeError("Nonnegative seconds required");
      for (const U of [...l.values()]) U(D, R);
    } },
    extensions: { install(D, U) {
      if (p(), typeof U != "function" || h.has(D) || typeof D != "string" || !D) throw new Error("Invalid extension");
      h.set(D, null);
      try {
        const B = U(R);
        if (B != null && typeof B != "function") throw new TypeError("Extension must return cleanup function or nothing");
        return h.set(D, B), () => R.extensions.remove(D);
      } catch (B) {
        throw h.delete(D), B;
      }
    }, remove(D) {
      if (p(), !h.has(D)) return !1;
      const U = h.get(D);
      return h.delete(D), U == null || U(), !0;
    } },
    simulation: { connect(D) {
      if (p(), g) throw new Error("Simulation step in progress");
      if (typeof (D == null ? void 0 : D.step) != "function" || typeof (D == null ? void 0 : D.snapshot) != "function") throw new TypeError("Simulation adapter needs step and snapshot");
      return _ = D, () => {
        _ === D && (_ = null);
      };
    }, snapshot() {
      return p(), _ == null ? void 0 : _.snapshot();
    }, async step(D) {
      if (p(), !_ || g) throw new Error("No adapter or simulation busy");
      g = !0;
      const U = _;
      try {
        const B = await U.step(D);
        return f || v.emit("simulation:step", { input: D, result: B, state: U.snapshot() }), B;
      } finally {
        g = !1;
      }
    } },
    dispose({ disposeEngine: D = !1 } = {}) {
      if (f) return;
      const U = [], B = (Y) => {
        try {
          Y();
        } catch (H) {
          U.push(H);
        }
      };
      B(I);
      for (const Y of [...h.keys()].reverse()) B(() => R.extensions.remove(Y));
      for (const Y of [...u.keys()]) B(() => C.remove(Y));
      if (d.removeFromParent(), a.clear(), l.clear(), c.clear(), _ = null, f = !0, B(D ? () => r.dispose() : y), U.length) throw new AggregateError(U, "Project cleanup failed");
    }
  };
  return R;
}
const XM = "1.6.0-rc.1", YM = (r, t) => HM(r, Gv, t);
export {
  GM as CityEngine,
  Gv as THREE,
  YM as createProjectAPI,
  WM as defaultCity,
  XM as version
};
