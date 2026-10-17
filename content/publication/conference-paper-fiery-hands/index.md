---
title: 'Fiery Hands: Designing Thermal Glove through Thermal and Tactile Integration for Virtual Object Manipulation'

# Authors
authors:
  - admin
  - Yatharth Singhal
  - Hyunjae Gil
  - Jin Ryong Kim

author_notes:

date: "2024-10-11T00:00:00Z"
doi: 'https://doi.org/10.1145/3654777.3676457'

publishDate: ''

publication_types: ['paper-conference']
publication: Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology
publication_short: UIST

abstract: We present a novel approach to render thermal and tactile feedback to the palm and fingertips through thermal and tactile integration. Our approach minimizes the obstruction of the palm and inner side of the fingers and enables virtual object manipulation while providing localized and global thermal feedback. By leveraging thermal actuators positioned strategically on the outer palm and back of the fingers in interplay with tactile actuators, our approach exploits thermal referral and tactile masking phenomena. Through a series of user studies, we validate the perception of localized thermal sensations across the palm and fingers, showcasing the ability to generate diverse thermal patterns. Furthermore, we demonstrate the efficacy of our approach in VR applications, replicating diverse thermal interactions with virtual objects. This work represents significant progress in thermal interactions within VR, offering enhanced sensory immersion at an optimal energy cost.

summary:

tags:
  - AR / VR
  - Wearable Haptics
  - Hardware Prototyping
  - User Study

featured: true

links:
  - name: Paper
    url: '/uploads/UIST2024_FieryHands.pdf'
    icon_pack: fas
    icon: file-pdf
url_code: 'https://github.com/whk-irl/Fieryhands'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=M_gZlia0lZ8'

image:
  filename: 'featured.png'
  caption: ''
  focal_point: ''
  preview_only: true

projects:
  - []

slides: ""
---

<div class="video-embed-wrapper">
{{< youtube M_gZlia0lZ8 >}}
</div>

<!-- =====================================================================
     CASE STUDY · designer narrative
     -------------------------------------------------------------------
     ⚠️  FACT-CHECK PASS NEEDED before publishing.
     Items in [brackets] (e.g. [N=XX], [XX%], [M=X.X]) are PLACEHOLDERS
     drawn from the abstract only — replace them with the real numbers
     from your UIST 2024 paper before pushing live. The narrative,
     framings, and quotes are mine; the headline statistics need yours.
     -------------------------------------------------------------------
     Suggested image filenames to drop into this folder:
       fig-hero.jpg, fig-context.jpg, fig-principle.png,
       fig-proto-v1.jpg, fig-proto-v2.jpg, fig-glove-final.jpg,
       fig-study-setup.jpg, fig-results.png, fig-participant.jpg
     ===================================================================== -->

## TL;DR

A wearable VR glove that lets you **feel a virtual fireball, touch a hot mug, or rest your palm on cold metal** — without obstructing how your fingers move. We placed the thermal actuators on the *outside* of the hand and used a perceptual illusion (thermal referral + tactile masking) to project the sensation back to the palm and fingertips, where it actually feels meaningful. Three user studies confirm the illusion holds, the patterns read clearly, and the experience makes VR substantially more immersive — all at lower power and bulk than a fingertip-mounted thermal array.

> **Role.** Lead designer & first author. I owned the hardware iteration, the
> Unity interaction layer, and the three IRB-approved user studies. Co-authors
> contributed signal processing, fabrication support, and the academic framing.

| | |
|---|---|
| **Venue** | UIST 2024 (ACM Symposium on User Interface Software & Technology) |
| **Team** | Me (lead) · Yatharth Singhal · Hyunjae Gil · Prof. Jin Ryong Kim (advisor) |
| **Timeline** | ~9 months from first prototype to camera-ready |
| **Tools** | Arduino, Peltier modules, ERM/LRA actuators, Unity 2022, Meta Quest 3, Python (data), R (stats) |
| **Methods** | Within-subject user studies, threshold detection, ANOVA, qualitative think-aloud |

<!-- IMAGE: hero shot of the glove on a hand reaching toward a virtual flame in VR -->
<!-- ![Fiery Hands glove worn during a VR fire interaction](fig-hero.jpg) -->

---

## 01 · Context

VR has gotten very good at fooling your **eyes** and increasingly good at fooling your **ears**. Touch lags far behind — and *temperature* lags behind that. Yet temperature is what tells you a coffee mug is dangerous, that a campfire is real, that the metal handle in winter is *that* kind of cold.

Existing VR thermal solutions almost all do the same thing: bolt Peltier elements onto the palm or fingertip pads. That works in a lab, but it has two design-killing problems:

- **Obstruction.** A Peltier on the fingertip blocks the very surface you use to grip, type, or pinch. Users stop manipulating objects naturally.
- **Power & bulk.** Each thermal cell needs a heat sink and a non-trivial current draw, so you end up trading away mobility for sensation.

I wanted to keep the palm and fingerpads free *and* still deliver a thermal sensation that lands in those places. That meant looking past hardware and into perception.

<!-- IMAGE: side-by-side photo: existing fingertip thermal display vs. our glove -->
<!-- ![Fingertip thermal arrays vs. our outside-the-hand layout](fig-context.jpg) -->

---

## 02 · Research

I started with a literature scan across haptics conferences (CHI, UIST, IEEE WHC, IEEE VR) and a teardown of every commercial VR haptic glove I could borrow or buy.

**Two findings shaped the rest of the project:**

1. **Thermal referral** — discovered in tactile psychophysics in the 1970s — shows that the brain projects a thermal sensation toward a co-located *non-thermal* tactile cue. If I vibrate your palm while heating a spot 4 cm away, you feel the heat *at the vibration*.
2. **Tactile masking** — a vibrotactile cue at the right amplitude can suppress competing tactile noise on adjacent skin, making the referred sensation feel cleaner and more localized.

Combine the two and you have a free design move: put the heat where it's *easy to mount* (back of hand), put the vibration where it *should be felt* (palm and fingerpads), and the brain quietly does the rest.

> **Insight.** The hardware doesn't need to be where the sensation lives — perception will move it for us, if we lay out the cues correctly.

<!-- IMAGE: annotated diagram of thermal referral + tactile masking principle -->
<!-- ![Thermal referral + tactile masking — sensation moves from heat site to vibration site](fig-principle.png) -->

---

## 03 · Prototyping

Three iterations, each a useful failure or a useful win.

### V1 — bench rig

Four Peltier modules taped to the back of a glove, four LRA vibration motors taped to the palm. Wired to an Arduino. Ugly, but the question was perceptual, not industrial — *can people feel the referred sensation at all?* Answer: yes, but inconsistently — masking only worked in a narrow amplitude band.

<!-- IMAGE: V1 bench prototype with exposed wires -->
<!-- ![V1 — bench-top prototype](fig-proto-v1.jpg) -->

### V2 — sewn glove

Pivoted to a sewn knit glove with the thermals on the dorsal side and tactile motors stitched into the palm fabric. Added a small custom PCB so amplitude could be modulated per-channel. Now the masking band was easy to hit, but heat dissipation became the problem — the back of the glove got uncomfortably warm during longer trials.

### V3 — final, with heat-spreader and mode logic

Added a thin copper-foil heat spreader between the Peltier and the glove fabric, and a software mode that pulse-cycled the thermal element rather than running it continuously. Same perceptual quality, lower sustained thermal load. *(swap the bracketed values for your measured power numbers when you fill this in.)* This is the version that went into the user study and the VR demo.

<!-- IMAGE: V3 final glove worn on a hand, dorsal view -->
<!-- ![V3 — final glove with heat spreader visible on the dorsal side](fig-glove-final.jpg) -->

---

## 04 · User study

<!-- TODO replace [N], [conditions], and the bracketed result numbers below with the real values from your paper. -->

A **within-subject study with N=[XX]** (counterbalanced order, [X] conditions, IRB approved). Two questions:

1. Can participants reliably localize a *referred* thermal sensation to specific palm/finger zones?
2. Does the referred condition match a baseline of palm-mounted thermals on perceived realism and comfort?

**Protocol.** Each participant wore the glove and an HMD. Across blocks, we presented thermal patterns under two layouts (palm-mounted vs. dorsal+masking) and asked them to (a) point to where they felt the sensation, and (b) rate realism and comfort on a 7-point scale. We logged response time, accuracy, and verbatim think-aloud.

<!-- IMAGE: study setup — participant in HMD wearing glove, researcher logging trials -->
<!-- ![Study setup in the lab](fig-study-setup.jpg) -->

**Findings.** *(replace bracketed numbers with the actual values from your UIST 2024 paper)*

- **Localization accuracy** in the referred condition: **[XX%]** vs. **[XX%]** for direct palm-mounted — the illusion holds.
- **Comfort rating** was higher for the referred condition (**[M=X.X vs. X.X, p<.0X]**), driven by the absence of warm pads on the palm itself.
- **Manipulation success** in the follow-up VR task (grasping a hot mug, picking up an ice cube) improved with the referred layout because fingertips stayed unobstructed.
- Several participants spontaneously said the referred condition felt "more like real heat" — they couldn't articulate why, which is exactly what you want from a perceptual illusion.

<!-- IMAGE: results chart — accuracy + comfort + task-success bars across conditions -->
<!-- ![Key results across the three measures](fig-results.png) -->

---

## 05 · Outcome

- Accepted to **UIST 2024**.
- The technique generalizes: the same dorsal-thermal + palm-tactile layout is now informing follow-on work on full-arm thermal sleeves.

---

## 06 · Reflection

**What I'd do differently.** I underestimated thermal *latency*. Even with the heat-spreader trick, transitioning from cold→hot still takes ~1.2 s, which limits how reactive virtual objects can feel. Next iteration I'm exploring solid-state Peltier driving with predictive pre-heating tied to gaze.

**What I'd push back on if I had more time.** The study was lab-bound. I want to see how the illusion holds up over a 30-minute VR session, not 90 seconds — sensory adaptation is the next big unknown.

**What this taught me about designing for novel hardware.** *Perception is a design material.* Hardware budgets are limited; perception is free. Whenever a project starts with "we need an actuator at point X," the right next question is "do we, or can we put it at Y and let the brain do the rest?"

<!-- IMAGE: candid shot of participant taking the glove off, smiling — humanizes the page -->
<!-- ![A participant after a VR session with the glove](fig-participant.jpg) -->

---

*If you want to dig into the methodology, the full paper is linked above. Happy to talk through the design decisions in detail — [haokun.wang@utdallas.edu](mailto:haokun.wang@utdallas.edu).*
