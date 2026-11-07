---
author: Mark Opalski
pubDatetime: 2026-08-26T00:00:00Z
title: What Don Norman Named, and What AI Makes Non-Negotiable
draft: false
tags:
  - human-factors
  - usability-research
  - ai-research
description: Don Norman's 1988 claim that usability failures are diagnosable, not user failings, was a methodological argument, not a design preference. AI doesn't change that diagnosis. It changes the speed, scale, and opacity at which ignoring it becomes dangerous.
---

In 1988, Don Norman wrote a sentence that human factors practitioners have been quietly repeating ever since: when a person struggles to use something, the fault sits with the design, not the user. It read at the time as a reframe of blame. It was actually a methodological claim. Norman was arguing that usability failures are measurable, diagnosable, and traceable to specific design decisions — not vague deficits in the person holding the device.

That claim only holds if someone is willing to look. Norman's entire body of work, from _The Psychology of Everyday Things_ through the multiple editions of _The Design of Everyday Things_, is a record of what happens when organizations build for what is easy to measure rather than for how people actually think, decide, and coordinate. The gap between those two things is not new. It has existed since the first mainframe operator was blamed for a system's opaque error state. What has changed is the cost of ignoring it.

## The diagnosis has not changed

Norman's core observations were made against command-line systems, then early GUIs, then the web, then mobile and voice. The technology stack underneath his examples has been replaced completely at least four times. The principles have not moved:

- Visibility: users should be able to see what actions are possible
- Feedback: every action should produce a legible response
- Mapping: controls should correspond naturally to their effects
- Constraints: the design should make the wrong action hard to take
- Conceptual models: users need an accurate mental model of how the system behaves
- Error tolerance: mistakes should be anticipated, not punished

None of this is design philosophy. It is an empirical claim about cognition — that human thought proceeds by approximation and pattern recognition, not formal logic, and that systems built on the assumption of formal logic will fail predictably. Norman's later distinction between affordances (what an object actually permits) and signifiers (what an object indicates is permitted) sharpened the same point for the touch era, when physical affordances disappeared and interfaces had to communicate through convention alone.

The persistence of the diagnosis across four technology generations is itself the evidence. If Norman's framework were a style preference, it would have aged out with skeuomorphism. It has not, because it was never about style. It was about the durable mismatch between designed systems and human cognition.

## Where the stakes change

Norman's own trajectory anticipated where this was going. His later work, and the direction of human factors research more broadly, extended the original human-artifact relationship into a longer chain: human, interface, automation, organization, society. That extension was already underway in aviation and process control decades before generative AI existed — supervisory control, automation bias, and situation awareness are human factors problems from the 1980s and 1990s, not new ones.

What AI changes is not the category of problem. It changes the operating conditions:

- Speed: a probabilistic system can act on a flawed mental model faster than a human can catch it
- Scale: a single unvisualized failure mode can propagate across every user simultaneously, not one workstation at a time
- Opacity: the system's own confidence is not visible, so the constraint that used to catch human error — hesitation, a second look — has nothing to attach to
- Delegation: users are being asked to supervise a system whose internal state they cannot inspect, which is precisely the condition under which automation bias is worst documented

This is the mechanism behind the thesis: systems fail when they are built around what is easy to measure rather than how people actually think, decide, and coordinate. That gap has always existed. AI is what makes it operationally dangerous, because AI systems are deployed at a speed and scale where the old failure mode — a confused user, a support ticket, a bad review — is replaced by a failure mode with no visible signal until the damage has already compounded.

## The evidence standard

None of this is an argument for caution as an aesthetic. It is an argument for treating human factors the way Norman treated it originally: as an empirical discipline with testable claims, not a design sensibility applied after the fact. An organization that wants the appearance of rigor will commission a usability pass at the end of a build cycle and treat the findings as optional. An organization that wants the discipline of it will let the evidence change the decision before the system ships.

Norman's diagnosis was correct in 1988 and it is correct now. What has changed is the price of not testing it.
