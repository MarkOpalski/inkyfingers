---
author: Mark Opalski
pubDatetime: 2026-07-28T00:00:00Z
title: Origins of the Agile Manifesto
draft: false
tags:
  - computing-history
  - systems-design
  - process-design
description: How seventeen competing methodologists converged on four values at a Utah ski lodge in 2001, and which specific problems in waterfall development each value was built to fix.
---

## Historical and industry context (1980s–1990s)

During the 1980s and 1990s, waterfall-style software development was the dominant paradigm. The waterfall model, derived from manufacturing and defense contracting practices, prescribed sequential phases (requirements, design, implementation, testing, deployment) with heavy up-front planning and documentation. This industrial, assembly-line approach to software wasn't working by the '90s. Projects often ran for years before users saw any working software, and a 1995 Standish Group CHAOS Report found that only about 16% of software projects were completed on time and on budget, while roughly 31% were canceled outright before completion.

Rigid waterfall processes made it difficult to accommodate changing requirements or early feedback, because all planning and specification happened up front and any learning during the project arrived too late. Ken Schwaber, co-creator of Scrum, later said waterfall "literally ruined our profession" by treating developers as interchangeable cogs and locking teams into inflexible plans. It was common to see an entire bookshelf of requirements documentation that was obsolete by the time software shipped.

By the early 1990s, firms began experimenting with iterative and incremental approaches. Research from the period found that companies built better products when they could change specifications, get customer feedback, and continually test components as the product evolved. The U.S. Department of Defense, which had once mandated waterfall via DOD-STD-2167, observed high failure rates and formally endorsed iterative development in 1994. Frameworks like Barry Boehm's Spiral Model (1988), Rapid Application Development, and the Rational Unified Process introduced iterative elements into otherwise heavy methodologies.

By the late 1990s, Scrum (first presented in 1995) and Extreme Programming (developed in the late 1990s) had demonstrated that short, iterative cycles with close customer involvement dramatically improved outcomes, but these approaches were not yet mainstream. As Jim Highsmith, author of Adaptive Software Development, later put it: "we were all sort of seeking legitimacy... doing similar things, but it hadn't really taken off big-time in the community." That was the backdrop against which the Agile Manifesto was written.

## The 2001 Snowbird meeting

In February 2001, seventeen software methodologists met at the Snowbird ski resort in Utah. Each represented a "lightweight" iterative approach that had gained ground in the '90s:

- **Kent Beck** — creator of Extreme Programming, which stressed short cycles, continuous testing, and embracing change.
- **Ken Schwaber and Jeff Sutherland** — co-creators of Scrum.
- **Alistair Cockburn** — founder of the Crystal family of methodologies, which argued that software is a cooperative game and prioritized communication and team dynamics over process steps.
- **Jim Highsmith** — author of Adaptive Software Development, focused on rapid adaptation to change.
- **Mike Beedle** — an early Scrum adopter blending Scrum and XP practices in the field.
- **Ward Cunningham** — an XP pioneer known for his work on patterns and wikis.
- **Martin Fowler** — design expert and author who argued for fitting methodology to people rather than the reverse.
- **Andrew Hunt and Dave Thomas** — authors of _The Pragmatic Programmer_.
- **Ron Jeffries** — the first full-time XP coach.
- **Brian Marick** — a testing expert who framed a project as an ongoing conversation about quality.
- **Arie van Bennekum** — co-founder of the Dynamic Systems Development Method (DSDM) Consortium.
- **Jon Kern** — a contributor to Feature-Driven Development.
- **Steve Mellor** — a proponent of model-driven development, who introduced himself at Snowbird as "a spy" from the tools-centric camp.
- **Robert C. "Uncle Bob" Martin** — a veteran consultant who organized the meeting.

The meeting grew out of ongoing conversations among these "lightweight methodologists" through the late 1990s, including an initial mini-summit of XP practitioners in Oregon in spring 2000. Later that year, Martin sent an email proposing "a small (two day) conference... to get all the lightweight method leaders in one room." The group disliked the term "lightweight" (Cockburn joked it sounded like "a bunch of skinny, feebleminded people trying to remember what day it is") but hadn't settled on an alternative.

They met at Snowbird's Aspen Room, February 11–13, 2001, in an informal atmosphere, with a serious purpose: identifying the common ground across their otherwise competing methods. As participant James Grenning put it, "We were focusing on what we agreed on, not what we disagreed on." They converged on four value statements and, eventually, twelve supporting principles, word-smithed to unanimity: if anyone's thumb was even slightly tilted sideways in uncertainty, the wording was revisited until all agreed. They chose the word "Agile," suggested by Cockburn, and called themselves the Agile Alliance. Ward Cunningham uploaded the result to agilemanifesto.org shortly after.

## The methodologies that shaped the values

**Scrum** introduced fixed-length sprints and daily stand-ups, treating software development as closer to new product development than to predictable manufacturing, an insight drawn from a 1986 paper comparing flexible product teams to a rugby scrum. Its emphasis on cross-functional collaboration and empowered, self-organizing teams fed directly into "individuals and interactions over processes and tools," and its sprint-based delivery cadence fed "working software over comprehensive documentation."

**Extreme Programming (XP)** contributed short iterations, continuous integration, test-driven development, pair programming, and an always-available on-site customer. Kent Beck's stated goal was "to make the world safe for programmers." XP's rapid feedback loops, continuous testing, and Planning Game (constant re-prioritization) map directly onto "customer collaboration over contract negotiation" and "responding to change over following a plan."

**Crystal**, from Alistair Cockburn's study of dozens of software teams, concluded that people factors and communication outweigh specific process steps. This is close to a direct source for "individuals and interactions over processes and tools": Cockburn had observed that the best projects succeeded through good people collaborating well even with an informal process, while failed projects often followed rigid process but suffered from poor communication.

**Dynamic Systems Development Method (DSDM)**, the earliest formal iterative framework (UK, 1994), fixed time and resources while flexing scope, and mandated continuous end-user engagement through techniques like facilitated workshops and prototyping. This is the clearest ancestor of "customer collaboration over contract negotiation" and the principle of delivering working software frequently, in short, fixed time periods.

**Feature-Driven Development (FDD)** measured progress by working features delivered rather than phase completion, captured in Jon Kern's mantra of delivering "frequent, tangible, working results." This directly informed the principle that working software is the primary measure of progress.

**Lean**, rooted in the Toyota Production System, was not explicitly named at Snowbird but was familiar to several participants. Its emphasis on eliminating waste, deciding as late as possible, and respecting people parallels Agile's "simplicity, maximizing the amount of work not done" and its rejection of speculative up-front specification. Martin Fowler later wrote that "lean manufacturing and agile software methods have a very similar philosophy. Both place a lot of stress on adaptive planning and a people-focused approach."

## What Agile was built to fix

**Long delivery cycles.** Waterfall projects often ran for years before producing usable software, so feedback arrived only at the end, when it was too late to change course. Agile's short iterations and frequent releases were designed to get stakeholders real feedback in weeks rather than years.

**Lack of customer feedback.** Traditional methodologies treated requirements as a fixed contract handed off once, with the customer reappearing only at acceptance testing. "Customer collaboration over contract negotiation" formalizes continuous involvement instead: regular demos, embedded business representatives, ongoing prioritization.

**Overemphasis on documentation and process formality.** Many of the Snowbird signatories had seen projects where teams spent more time updating specification documents than writing code, documents that then went unmaintained. "Working software over comprehensive documentation" doesn't reject documentation; it right-sizes it and prioritizes executable software as the artifact of record.

**Poor adaptability to change.** If market conditions or requirements shifted mid-project under waterfall, the standard response was either "stick to the plan" or a change-request process everyone dreaded. "Responding to change over following a plan" treats change as the expected condition, not the exception, and every Agile practice, short cycles, continuous reprioritization, iterative design, is built to make changing course cheap rather than catastrophic.

## Sources

1. Highsmith, J. et al., _History: The Agile Manifesto_ (agilemanifesto.org)
2. Martin, R.C. (ed.), _Agile Manifesto Signatories Biography_ (agilemanifesto.org)
3. Castillo, M. (2017), "Agile Software Development: A History," _The Atlantic_
4. Boyce, R. (2024), "The day Agile came to town: Remembering Utah's Agile Manifesto," KSL.com
5. Larman, C. and Basili, V. (2003), "Iterative and Incremental Development: A Brief History," _IEEE Computer_
6. Fowler, M. (2005), "Agile versus Lean," martinfowler.com
7. Beck, K. et al. (2001), _Manifesto for Agile Software Development_ (agilemanifesto.org/principles)
