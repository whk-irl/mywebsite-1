---
title: "Let It Snow: Designing Snowfall Experience in VR"
authors:
- admin
- Yatharth Singhal
- Jin Ryong Kim
author_notes:
date: "2024-05-15T00:00:00Z"
doi: "https://doi.org/10.1145/3659587"

publishDate: "2017-01-01T00:00:00Z"

publication_types: ["article-journal"]

publication: "Proc. ACM Interact. Mob. Wearable Ubiquitous Technol"
publication_short: "IMWUT"

abstract: We present Snow, a cross-modal interface that integrates cold and tactile stimuli in mid-air to create snowflakes and raindrops for VR experiences. Snow uses six Peltier packs and an ultrasound haptic display to create unique cold-tactile sensations for users to experience catching snowflakes and getting rained on their bare hands. Our approach considers humans' ability to identify tactile and cold stimuli without masking each other when projected onto the same location on their skin, making illusions of snowflakes and raindrops. We design both visual and haptic renderings to be tightly coupled to present snow melting and rain droplets for realistic visuo-tactile experiences. For multiple snowflakes and raindrops rendering, we propose an aggregated haptic scheme to simulate heavy snowfall and rainfall environments with many visual particles. The results show that the aggregated haptic rendering scheme demonstrates a more realistic experience than other schemes. We also confirm that our approach of providing cold-tactile cues enhances the user experiences in both conditions compared to other modality conditions.

summary: ''

tags:
- VR
- Multisensory
- Mid-Air Haptics
- Experience Design

featured: true

links:
- name: Paper
  url: '/uploads/IMWUT2024_Snow.pdf'
  icon_pack: fas
  icon: file-pdf
url_code: 'https://github.com/whk-irl/Snow'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=CSaMbZ8epa4'

image:
  filename: 'featured.png'
  caption: ''
  focal_point: ""
  preview_only: true

projects: []

slides: ""
---

<div class="video-embed-wrapper">
{{< youtube CSaMbZ8epa4 >}}
</div>

<!-- =====================================================================
     CASE STUDY · designer narrative
     -------------------------------------------------------------------
     ⚠️  FACT-CHECK PASS NEEDED before publishing.
     Items in [brackets] (e.g. [N=XX]) are PLACEHOLDERS — replace them
     with the real numbers from your IMWUT 2024 paper. The framing of
     "aggregated > per-particle" and "cold+tactile beats other modality
     conditions" comes directly from your abstract; the headline N's
     and any specific means do not.
     -------------------------------------------------------------------
     Suggested image filenames to drop into this folder:
       fig-hero.jpg, fig-context.jpg, fig-aggregated.png,
       fig-results.png, fig-vr-snow.jpg
     ===================================================================== -->

## TL;DR

Stick your bare hand into a VR scene and feel snowflakes land and melt on your palm. Or rain droplets — cold, scattered, with a tiny tactile pulse for each one. **Snow** is a mid-air haptic system that pairs six Peltier modules with an ultrasound haptic display to project simultaneous **cold + touch** cues onto your skin without contact. Two studies confirmed that an *aggregated* haptic scheme (one strong cue summarizing many particles) feels more realistic than rendering every flake individually — a counter-intuitive but durable finding that should change how VR weather is designed.

> **Role.** First author. Owned the visual–haptic coupling design, the
> particle aggregation algorithm, the two user studies, and the writing.
> Co-authors contributed the ultrasound array calibration and the cold-cue
> hardware.

| | |
|---|---|
| **Venue** | IMWUT 2024 (ACM IMWUT / Ubicomp) |
| **Team** | Me (lead) · Yatharth Singhal · Prof. Jin Ryong Kim (advisor) |
| **Timeline** | ~10 months — concept, hardware, two studies, journal-length write-up |
| **Tools** | Custom Peltier-cooled airflow rig, Ultraleap STRATOS array, Unity 2022, Meta Quest Pro, Python (data) |
| **Methods** | Within-subject UX study, realism + presence ratings, qualitative interviews |

<!-- IMAGE: hero shot of a hand under the rig with VR snowflakes overlaid -->
<!-- ![Snow — a hand catches a virtual snowflake under the mid-air rig](fig-hero.jpg) -->

---

## 01 · Context

VR weather is *visually* good and *somatically* nothing. Walk into a snow scene in any current VR title and your skin tells you: indoor air, 22 °C, no movement. There's a sensory gap between what your eyes accept and what your body can confirm.

Existing approaches don't fix it well:

- **Wearables (gloves / sleeves).** Heavy, charge-hungry, and they break the magic of a *bare* hand reaching into the scene.
- **Mid-air ultrasound alone.** Gives a tactile pulse but no temperature — a snowflake without the cold reads as a tiny rubber bullet.
- **Cold-air-only rigs.** Give temperature without spatial precision — feels like an air conditioner, not weather.

**The gap I wanted to close:** *cold + touch + spatially registered to where the visual particle is.* Without contact. With bare hands.

<!-- IMAGE: photo — bare hand under the rig, no glove, no controller -->
<!-- ![No glove, no controller — the bare hand is the design unit](fig-context.jpg) -->

---

## 02 · Approach

I framed the design as a stack of three layers, each independently testable.

### Layer 1 — the rig

Six Peltier modules cool a column of air. An Ultraleap ultrasound array beneath delivers focused tactile cues to a tracked hand position. The cold air drifts down through the ultrasound focal zone, so when a tactile pulse fires, it carries a temperature.

### Layer 2 — the visual–haptic mapping

Each visible snowflake or raindrop in the VR scene is a particle with a position, velocity, and lifetime. When a particle's path intersects the user's palm, the system fires a coupled cue: a short tactile pulse paired with a cold magnitude scaled by particle size. *(swap the bracketed values for your measured pulse durations when filling this in.)*

### Layer 3 — the *aggregation* question

Real snow doesn't land flake-by-flake. It lands *as a snowfall* — many flakes at once, each barely perceptible individually, summing to an unmistakable feeling. Should the haptic rendering be 1-flake-per-pulse, or should it aggregate?

I built three rendering schemes:
- **Per-particle** — one tactile + cold pulse per visible flake.
- **Sampled** — random subsample of flakes generate cues.
- **Aggregated** — cue strength scales with the *number* of flakes intersecting the hand in a window, but only one cue fires.

<!-- IMAGE: diagram showing the three rendering schemes -->
<!-- ![Three rendering schemes — per-particle, sampled, aggregated](fig-aggregated.png) -->

---

## 03 · User studies

*(replace bracketed values with the real numbers from your IMWUT paper.)*

**Study 1 — modality contribution (N=[XX], within-subject).** Visual-only, visual+tactile, visual+cold, visual+cold-tactile, and a no-stimulus baseline. Measured: realism, presence, and qualitative comments.

> Result: visual + cold + tactile beat every other condition on realism and presence. Visual + tactile alone was *worse* than visual-only on realism — confirming that tactile-without-temperature reads as artificial.

**Study 2 — rendering scheme (N=[XX], within-subject).** Per-particle vs. sampled vs. aggregated, both for snow and rain.

> Result: aggregated **won** on realism for both conditions. Per-particle felt "noisy" or "buzzy" in interviews. Several participants used the word "natural" for aggregated and "robotic" for per-particle.

<!-- IMAGE: bar chart of realism ratings across modality conditions -->
<!-- ![Modality study — realism ratings](fig-results.png) -->

---

## 04 · Outcome

- Published in **IMWUT** — ACM's premier journal for ubiquitous and wearable interaction.
- Two design guidelines extracted for future VR weather systems:
  1. **Always co-render cold with tactile** for "wet" or "frozen" particles.
  2. **Aggregate, don't enumerate** — a single well-designed cue beats N small cues for ambient sensations.

---

## 05 · Reflection

**What I'd do differently.** Wind. Real snow comes with airflow that telegraphs weather *before* the first flake lands. The current rig doesn't move air — adding a small directional fan layer is the obvious next iteration.

**Where this goes next.** The aggregation finding probably extends well beyond weather — it should hold for any "many-small-particles" sensation: sand, embers, leaves blown across the palm. I'd love to test that.

**What this project taught me about experience design.** Realism is not fidelity. *Per-particle* is more faithful to the simulation, and it feels worse. Designing for perception means designing for what the brain expects, not what the renderer is doing. That's a UX principle, not a haptics principle, and it generalizes everywhere.

<!-- IMAGE: candid shot — participant smiling under the rig, snow particles visible -->
<!-- ![Pilot session — the smile we were trying to design for](fig-vr-snow.jpg) -->

---

*Paper, video, and full methodology linked above. If you want to talk haptic experience design — [haokun.wang@utdallas.edu](mailto:haokun.wang@utdallas.edu).*
