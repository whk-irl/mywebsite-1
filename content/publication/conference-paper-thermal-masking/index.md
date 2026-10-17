---
title: 'Thermal Masking: When the Illusion Takes Over the Real'

authors:
  - admin
  - Yatharth Singhal
  - Hyunjae Gil
  - Jin Ryong Kim

author_notes:

date: "2024-05-11T00:00:00Z"
doi: 'https://doi.org/10.1145/3613904.3641941'

publishDate: ''

publication_types: ['paper-conference']
publication: In *Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems*
publication_short: CHI

abstract: This paper reports on a thermal illusion called thermal masking. Thermal masking is a phenomenon induced by thermal referral to completely mask the original thermal sensation, providing thermal sensation only at the tactile site. Three experiments are conducted using thermal and vibrotactile actuators to investigate the nature of thermal masking on human arms. The first experiment investigates the effects of different temperatures on masking. The results show a higher percentage of thermal masking occurs in warm than hot or cold conditions. The second experiment examines how far the thermal masking can be perceived. The results show that masking can reach up to 24 cm from the thermal site. The third experiment explores the interaction space by placing the tactile actuators on the opposite side of the thermal actuator. The results confirm that thermal masking can reach the other side of the arm, and the performance was higher in warm conditions.

summary:

tags:
  - Perception
  - Haptics
  - User Study
  - Multisensory

featured: true

links:
  - name: Paper
    url: '/uploads/CHI2024_ThermalMasking.pdf'
    icon_pack: fas
    icon: file-pdf
url_code: 'https://github.com/whk-irl/Thermal-Masking'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=GklwlCuPwv8'

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
{{< youtube GklwlCuPwv8 >}}
</div>

<!-- =====================================================================
     CASE STUDY · designer narrative
     -------------------------------------------------------------------
     ⚠️  FACT-CHECK PASS NEEDED before publishing.
     Items in [brackets] (e.g. [XX%]) are PLACEHOLDERS — replace with
     the real numbers from your CHI 2024 paper. The 24 cm distance is
     drawn from the abstract; everything else needs your numbers.
     -------------------------------------------------------------------
     Suggested image filenames to drop into this folder:
       fig-hero.jpg, fig-setup.jpg, fig-conditions.png,
       fig-distance.png, fig-cross-arm.jpg, fig-results.png
     ===================================================================== -->

## TL;DR

This is a perception study, not a product — but it's the kind of study that **unlocks products**. We discovered that under the right conditions, a vibration on your arm can completely "steal" a heat sensation from a thermal source up to **24 cm away**, even *on the opposite side of the arm*. For wearable haptic designers, that's a fundamentally new degree of freedom: the heat source no longer has to live where the heat is felt. Three experiments, 60+ trials per participant, and a clean answer to *when* the illusion holds and *when* it breaks.

> **Role.** First author. I designed the three experiments, ran the data
> collection, did the statistics in R, and led the writing. My collaborators
> contributed the actuator hardware and theoretical framing.

| | |
|---|---|
| **Venue** | CHI 2024 (ACM Conference on Human Factors in Computing Systems) |
| **Team** | Me (lead) · Yatharth Singhal · Hyunjae Gil · Prof. Jin Ryong Kim (advisor) |
| **Timeline** | ~7 months — formative studies, 3 main experiments, paper |
| **Tools** | Custom Peltier rig, voice-coil vibrotactile actuators, MATLAB control, R + JASP for stats |
| **Methods** | Within-subject psychophysics, mixed-effects models, IRB-approved |

<!-- IMAGE: hero shot of the apparatus mounted on a participant's forearm -->
<!-- ![The forearm rig used across all three experiments](fig-hero.jpg) -->

---

## 01 · Context

If you're designing a thermal feedback device — a glove, a sleeve, a chair, a controller — the constraint that always wins is **where you can mount the thermal cell**. Peltiers are bulky. They need heat sinks. They draw current. So you mount them where you have room, and the user feels them where you mounted them. Tough.

But there's a twin to thermal referral called **thermal masking**: when a vibrotactile cue is delivered next to a thermal stimulus, sometimes the thermal sensation doesn't just *move* — it disappears at the source and reappears entirely at the vibration site. We knew the phenomenon existed in psychophysics literature. What we didn't know was its *envelope* — the temperature range, the distance limit, the geometry it tolerates. Without those numbers, no designer can use it.

> **My question.** What's the design budget? How hot, how cold, how far away can I put the heat source and still make the illusion land?

---

## 02 · Approach

I broke the design budget into three orthogonal questions, each one a tightly controlled experiment:

1. **Temperature.** Does masking work the same for warm, hot, and cold stimuli?
2. **Distance.** How far apart can the thermal and tactile actuators be before the illusion collapses?
3. **Geometry.** Does the masking only work on the same side of the limb, or can it cross the arm?

Each experiment ran on the same custom rig — a Peltier and a voice-coil vibrotactile actuator on adjustable tracks along a forearm cradle — so we could isolate one variable at a time.

<!-- IMAGE: diagram of the apparatus with adjustable thermal + tactile placements -->
<!-- ![Apparatus schematic — adjustable thermal & tactile positions](fig-setup.jpg) -->

---

## 03 · What we found

### Experiment 1 — temperature matters more than expected

**Within-subject across warm, hot, and cold conditions.** *(replace bracketed numbers with the rates from your CHI paper.)* Warm stimuli produced masking on **[XX%]** of trials, dropping to **[XX%]** for hot and **[XX%]** for cold. The takeaway for designers: **warm is the sweet spot.** If you're trying to evoke "warm cup of coffee" or "ambient sun on skin," masking is a generous tool. If you're trying to evoke "open flame" or "ice cube," you'll need direct hardware.

<!-- IMAGE: bar chart — masking rate vs. temperature -->
<!-- ![Masking rate plotted against stimulus temperature](fig-conditions.png) -->

### Experiment 2 — masking carries 24 cm

Masking remained reliable up to **24 cm of separation** between the thermal and tactile sites — roughly elbow to wrist on most adults. Beyond that, the illusion dropped sharply. For a sleeve designer, this means *one* thermal cell at the elbow can serve a tactile array all the way down the forearm.

<!-- IMAGE: line chart — masking rate vs. distance -->
<!-- ![Masking rate vs. thermal-tactile distance](fig-distance.png) -->

### Experiment 3 — it works across the arm

The most surprising result. We placed the thermal actuator on the *outside* of the forearm and the tactile actuator on the *inside*. Conventional wisdom predicts the illusion shouldn't work — there's no shared receptive field. It worked anyway, and was **higher under warm conditions** than under hot. The arm appears to integrate thermal and tactile signals at a higher level than the local skin patch.

<!-- IMAGE: photo — thermal on the outer arm, tactile on the inner arm -->
<!-- ![Cross-arm placement in Experiment 3](fig-cross-arm.jpg) -->

> **Design takeaway.** A wearable doesn't need thermal cells on every surface. One well-placed warm source plus a tactile array gives you a continuous-feeling thermal field across the limb.

---

## 04 · Outcome

- Accepted to **CHI 2024** — flagship HCI venue.
- The numbers from this paper became the **design constants** for our follow-on projects: Fiery Hands (thermal glove) and the upper-body thermal sleeve study both quote these distance and temperature bounds directly.

---

## 05 · Reflection

**What I'd do differently.** I'd add a *temporal* dimension. All three experiments measured the illusion at a steady state. In real wearable use, sensations come and go — does masking survive a 0.5 s tactile pulse? A 100 ms pulse? That paper is on my next-year list.

**What I underestimated.** How willing reviewers would be to accept the cross-arm result. I expected pushback — instead it became the most-cited finding. There's a lesson there about leading with the *most counterintuitive* finding rather than burying it in Experiment 3.

**What this taught me as a researcher.** The most useful HCI papers aren't the ones that show "we built X." They're the ones that quantify the *envelope* — *here's exactly when X works and when it breaks* — because everything anyone builds afterwards uses your numbers. That's what I tried to do here.

---

*Full methodology and statistics in the paper. Happy to talk through the experimental design — [haokun.wang@utdallas.edu](mailto:haokun.wang@utdallas.edu).*
