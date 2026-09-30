# Physiotherapy website

Responsive React/Vite homepage using locally hosted Barlow fonts, GSAP and original generated WebP photography.

## Run

```sh
npm install
npm run dev
```

## Verify

```sh
npm run build
npm test
node scripts/check-doctors.mjs
```

The browser smoke test requires Google Chrome. It starts its own local Vite server on port 4173 and checks ten widths from 320 to 1920 pixels, all eight program dialogs, enquiry download, mobile navigation, reduced motion, image loading and browser errors. Screenshots and the results are saved in `artifacts/`.

## Content and launch configuration

- Replace `[PHYSIOTHERAPY BRAND]` in `src/components/Header.jsx` and `src/components/Footer.jsx`.
- Replace contact placeholders in `src/components/Footer.jsx` and `src/components/DetailDialog.jsx`.
- Program content is in `src/data.js`; section content is in `src/sections/`.
- The appointment interface prepares a WhatsApp message with visitor details and preferences, or downloads a local draft. The visitor sends the message in WhatsApp; the clinic must confirm the appointment.
- `/doctors/` shows twelve user-supplied example profiles, with AI-generated illustrative portraits. These are explicitly labelled as examples, not verified clinic staff. Replace the example names and qualifications with verified information before presenting them as an actual team.
- Doctor names, qualifications, specialties and four-sentence descriptions are in `src/doctors.js`. The incomplete Manual Therapy description was completed with general specialty information.
- Doctor portraits are stored in `src/assets/therapists/`; the built-in image generation prompts and filenames are recorded in that directory's `provenance.json`.
- Doctor descriptions reveal on hover, keyboard focus, or tap; Escape dismisses a reveal. The doctor-page check covers all twelve profiles, responsive widths, touch/keyboard interaction, navigation and booking access.
- Generated images are illustrative and do not represent actual clinic staff or patients. Their prompts and local paths are recorded in `src/assets/provenance.json`.

## Reference and motion

The supplied reference captures (`reference/hero.png`, `overview.png`, `mobile.png` and saved HTML/style data) informed the Barlow typography, right-aligned hero copy with a subject at left, brown introduction, warm assessment area, sage treatment section and staggered photographic programs.

The live website returned a fetch error and timed out in Chrome during this continuation. Exact entrance timings and mobile-menu transitions could not be confirmed. The implementation deliberately uses conservative motion rather than claiming a frame-exact reproduction:

| Element | Trigger | Motion | Timing |
| --- | --- | --- | --- |
| Hero photograph | Mount | Scale 1.035 to 1 | 1.6s, power3.out |
| Hero headings | Mount + 0.2s | Masked 110% vertical reveal | 1s, 0.16s stagger |
| Hero supporting copy | Mount + 0.65s | Fade and 15px rise | 0.9s |
| Section copy | Top reaches 90% viewport | Fade and 22px rise | 0.95s |
| Assessment/treatment images | Top reaches 92% viewport | Scale 1.035 and opacity 0.5 to 1 | 1.25s |
| Dividers | Top reaches 95% viewport | ScaleX 0 to 1 | 1s |
| Program hover | Hover/focus | Scale 1.035, dark overlay, caption rise | 0.4–0.7s |
| Mobile navigation | Open | 20px rise and fade | 0.55s, 0.07s stagger |

Reduced motion removes GSAP animation and CSS transitions. Native scrolling is retained; no unverified pinning, parallax or scroll interception was added. Native modal dialogs supply focus containment and Escape support. Close returns focus to the trigger.
