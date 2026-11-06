# The City Is an Instrument

A stand-alone, visualization-led, audio-first urban design installation for a static portfolio. No build process, backend, accounts, microphone, remote audio files, or third-party assets required.

## Local viewing

From the repository root:

```sh
python3 -m http.server 8001
```

Open `http://127.0.0.1:8001/portfolio/51/` in a desktop or mobile browser. Audio will begin **only after** a click/tap on **Listen to the city**, as required by browser autoplay restrictions. Headphones recommended at moderate volume.

## Experience

- **Five imaginary soundscapes**: Crossroads, Pocket Park, Night Market, Canal Walk, Rail Junction.
- **Four times of day**: dawn, day, dusk, night; each adjusts the synthesizer's relative mix and the animated skyline.
- **Six mixer channels**: traffic, footsteps, birdsong, market murmur, water, transit. Sliders control each channel, and beacons in the artwork can solo the associated audio source. Reset and Surprise Me are available.
- **Four design interventions**: pedestrianize the road, add tree canopy, add transit, uncover water. These alter the generated mix and sometimes the city drawing.
- **Live sonic fingerprint**: frequency bars from an `AnalyserNode` (or non-measurement placeholder before audio begins).

## Audio method

`script.js` synthesizes the entire soundtrack with the Web Audio API. Four ambient noise beds are filtered and modulated to suggest traffic, market murmur, running water and rail ambience; synthesized event envelopes suggest footsteps, birdsong and a tram bell. Six channel gain nodes feed a master gain/compressor/analyser. Scene, time and intervention controls apply relative multipliers and smooth gain changes. All audio is original generated material, not copied samples or recordings. No audio is uploaded.

The visualization is a graphic artwork drawn on a 2D canvas with illustrated skyline, celestial disc, changing light, sound rings, moving vehicles and selected environmental features. Canvas strokes, frequency bars and user-interface controls are **not calibrated sound-pressure-level measurements** or a geographic acoustic model.

## Scientific limitations and integrity

This project is about **urban sound awareness and creative sonic composition**, not empirical acoustic exposure, soundscape epidemiology, accessibility evaluation, or measured urban noise. The interventions are speculative artistic changes, not quantified claims about noise reductions or public-health outcomes. The frequency bars derive from synthesizer output when audio is running, but have no decibel calibration, octave-band standardization, weighting or spatial propagation. Sound layer names are expressive metaphors for synthesis, not authentic field recordings.

## Accessibility and technical notes

- Controls are native buttons and range inputs with accessible labels and visible keyboard focus.
- The page responds to `prefers-reduced-motion` by freezing decorative motion.
- Responsive layout for desktop and phone; no horizontal scrolling in tested viewport.
- Audio remains off until the first explicit user gesture. A pause button suspends the AudioContext.
- Requires a modern browser with Web Audio.
- No analytics, fonts, tracking scripts, external JavaScript, APIs, or online dependencies.
- Page file names are intentionally `index.html`, `styles.css`, `script.js` to match portfolio structure.

## Files

- `index.html` — accessible static page and interactive controls.
- `styles.css` — responsive visual language.
- `script.js` — state, procedural audio synthesis and canvas drawing.
- Screenshot used in the portfolio gallery is stored at `../images/previews/51.webp` and was cropped from the **actual running interface** in a headless browser.

## Manual changes

All user experience text is in `index.html`. Scenario parameters, channel multipliers and time-of-day assumptions are grouped in `SCENES`, `TIMES` and `levelsForState()` near the top of `script.js`. There are no external assets to update.
