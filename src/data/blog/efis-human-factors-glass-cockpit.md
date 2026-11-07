---
author: Mark Opalski
pubDatetime: 2026-08-11T00:00:00Z
title: The Glass Cockpit as a Human Factors Case Study
draft: false
tags:
  - human-factors
  - aviation
  - safety-critical-systems
description: Electronic flight instrument systems didn't just digitize the cockpit. They replaced a monitoring model built on mechanical failure with one built on data validity, and every design decision inside that replacement is a human factors decision.
---

## From electromechanical to electronic

An electronic flight instrument system (EFIS) replaces electromechanical flight instruments with electronic displays: a primary flight display (PFD) for attitude, airspeed, altitude, heading, and vertical speed; a multi-function display (MFD) for navigation and weather; and an engine indicating and crew alerting system (EICAS, or ECAM on Airbus aircraft) for aircraft systems status. Early implementations used cathode ray tubes; liquid crystal displays are now standard, running cooler, lighter, and smaller than the CRTs they replaced.

The attitude director indicator and horizontal situation indicator were the first electromechanical instruments EFIS replaced, but by now there are few cockpit instruments without an electronic equivalent. A light aircraft might carry a single display unit; a wide-body airliner is likely to carry six or more. Boeing and Airbus made EFIS standard equipment by the late 1980s, and business aircraft followed through the 1990s. Falling sensor and LCD costs later brought it to general aviation and, at the low end, to experimental and sport-pilot aircraft for as little as $1,000 per system, outside FAA certification.

That's the systems description. The interesting part is what changed underneath it: not the instruments, but the failure model.

## Monitoring had to be reinvented, not digitized

Traditional electromechanical displays used synchro mechanisms to transmit each instrument's actual pitch, roll, and heading to a comparator, which flagged excessive disagreement between the captain's and first officer's instruments. A fault as far downstream as a jammed roll mechanism would still trigger a warning, because the comparator checked the physical output, not the input.

An electronic display can't be checked that way. There's no mechanical output to re-transmit, so a wrong pixel and a correct pixel look identical to any system watching from outside the screen. EFIS solved this by moving the monitoring function upstream, into the symbol generator that drives the display, and duplicating it. Each symbol generator runs two channels: an internal channel that recomputes what the display should be showing from the same sensor inputs and flags any mismatch, and an external channel that performs the identical check on the _other_ side of the flight deck, so the captain's symbol generator checks the first officer's and vice versa. Whichever one detects a fault posts the warning on its own display.

This is a clean example of a rule that generalizes past aviation: when you replace a mechanism whose failures are physically visible with one whose failures are computationally invisible, you don't get to keep the old monitoring strategy. You have to build a new one that checks the computation itself, from at least two independent vantage points, because a system is not allowed to be the sole judge of its own correctness.

## Clutter, de-cluttering, and what the pilot is allowed to not see

An electromechanical instrument has to stay visible whether or not its data is currently relevant, which is why ADIs and HSIs relied on intricate mechanisms just to hide a glide slope scale when it wasn't in use. EFIS inverts the default: information appears when it's relevant and disappears when it isn't. Engine vibration might not be displayed at all under normal conditions, only surfacing when a limit is exceeded. The glideslope scale is programmed to appear only during an ILS approach.

The same logic runs in reverse under high workload. A de-clutter mode activates automatically when the pilot's attention needs to narrow, for instance when pitch exceeds roughly 30 to 60 degrees, stripping secondary indications from the display until attitude returns to a normal range. The design premise is explicit: when aircraft control is the only thing that matters, the display should show only what serves aircraft control, and nothing that competes for attention with it.

Color carries the same discipline. Electromechanical instruments used color strictly for identification; there was no mechanism to change a component's color in response to state. EFIS made color a live channel: a caption might read blue while the glideslope is armed and switch to green on capture, and navigation needles are color-coded by source (green for ground-based VOR/localizer/ILS, magenta for GPS). None of this is decorative. Color-coding by data source and by state is a way of pre-attentively answering "what kind of information is this, and has anything changed" before the pilot has consciously parsed a single number.

## Failure has to announce itself, correctly

When an electromechanical instrument's input failed, the traditional response was to add another indicator: a bar dropped across the bad data, layered onto a display that still showed the original (now-wrong) reading underneath. EFIS instead removes the invalid data outright and substitutes an explicit warning in its place. This is a small change with a large consequence: it eliminates the failure mode where a pilot glances at an instrument, sees a plausible number, and has no way to know from the display alone that the number is a lie.

That single decision, that a display should never show a value it cannot vouch for, is the same principle now showing up in a completely different domain: interfaces built on top of generative AI face the identical design problem, a system that can produce plausible output it cannot itself verify, and most of them have not yet adopted the aviation industry's answer.

## Why this holds up as more than aviation trivia

EFIS is a useful case study precisely because none of its constraints were arbitrary. Every decision, cross-checked symbol generators, de-clutter thresholds tied to specific pitch angles, color reserved for state rather than decoration, invalid data removed rather than flagged, was made under a regulatory and safety regime that required the designers to justify it against measurable outcomes. That's a rarer discipline than it should be. Most software interfaces make analogous decisions, what to show, what to hide, what to flag as untrustworthy, without ever being required to prove the choice was correct. Aviation had to prove it. That's most of why the glass cockpit is worth studying even for people who will never sit in front of one.

## Source

This piece draws on and substantially rewrites the factual content of the Wikipedia article ["Electronic flight instrument system"](https://en.wikipedia.org/wiki/Electronic_flight_instrument_system), used under CC BY-SA 4.0, with additional framing and analysis original to this post. See also FAA Advisory Circular AC 25-11A, _Electronic Flight Deck Displays_.
