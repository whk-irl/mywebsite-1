---
title: 'Mid-Air Thermo-Tactile Feedback using Ultrasound Haptic Display'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Yatharth Singhal
  - admin
  - Hyunjae Gil 
  - Jin Ryong Kim

# Author notes (optional)
author_notes:

date: "2021-09-01T00:00:00Z"
doi: 'https://doi.org/10.1145/3489849.3489889'

# Schedule page publish date (NOT publication's date).
publishDate: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Proceedings of the 27th ACM Symposium on Virtual Reality Software and Technology
publication_short: VRST

abstract: This paper presents a mid-air thermo-tactile feedback system using an ultrasound haptic display. We design a proof-of-concept thermo-tactile feedback system with an open-top chamber, heat modules, and an ultrasound display. Our approach is to provide heated airflow along the path to the focused pressure point created from the ultrasound display to generate thermal and vibrotactile cues in mid-air simultaneously. We confirm that our system can generate the thermo-tactile stimuli up to 54.2°C with 3.43 mN when the ultrasonic haptic signal was set to 100 Hz with a 12 mm radius of the cue size. We also confirm that our system can provide a stable temperature (mean error=0.25\%). We measure the warm detection threshold (WDT) and the heat-pain detection threshold (HPDT). The results show that the mean WDT was 32.8°C (SD=1.12), and the mean HPDT was 44.6°C (SD=1.64), which are consistent with the contact-based thermal thresholds. We also found that the accuracy of haptic pattern identification is similar for non-thermal (98.1\%) and thermal conditions (97.2\%), showing a non-significant effect of high temperature. We finally confirmed that thermo-tactile feedback further enhances the user experiences.

# Summary. An optional shortened abstract.
summary:

tags:
  - Mid-Air Haptics
  - Ultrasound
  - VR
  - Hardware Prototyping

# Display this page in the Featured widget?
featured: true
# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

links:
- name: Paper
  url: '/uploads/VRST2021_Fire.pdf'
  icon_pack: fas
  icon: file-pdf
url_code: 'https://github.com/whk-irl/Fire'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=CKSEIOUzGK0'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  filename: 'featured.png'
  caption: ''
  focal_point: ''
  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<div class="video-embed-wrapper">
{{< youtube CKSEIOUzGK0 >}}
</div>

## Overview

This paper presents a mid-air thermo-tactile feedback system using an ultrasound haptic display. A proof-of-concept open-top chamber with heat modules generates thermal and vibrotactile cues simultaneously in mid-air — confirmed up to 54.2°C with pattern identification accuracy matching contact-based thresholds. Published in **VRST 2021**.
