---
author: Mark Opalski
pubDatetime: 2026-08-25T00:00:00Z
title: Applying the Fogg Behavior Model to CIO Engagement
draft: false
tags:
- human-factors
- behavior-design
- cio-advisory
description: 'B = MAP: behavior only occurs when motivation and ability clear a threshold at the exact moment a prompt arrives. Plotted against four CIO advisory jobs to be done, the model tells you what kind of prompt each one actually needs.'
---

<p>BJ Fogg's behavior model states a simple condition: a behavior occurs only when motivation, ability, and a prompt converge at the same moment, formalized as <strong>B&nbsp;=&nbsp;MAP</strong>. Below a threshold curve that trades motivation for ability, no prompt will trigger the behavior no matter how well-timed it is. Above the curve, the right prompt does the rest.</p>
<p>The chart below plots four CIO-facing advisory "jobs to be done" against that threshold, using Motivation and Ability estimates for each job and reading off which prompt archetype, facilitator, signal, or spark, fits the gap that remains. It's a reference case for a broader point: engagement design is a diagnosis problem before it's a content or channel problem. The wrong prompt for a high-motivation, low-ability audience adds urgency nobody needed. The wrong prompt for a low-motivation audience tries to remove friction that was never the obstacle.</p>

<div class="postviz">
<style>
.postviz { background: var(--page); color: var(--text-primary); font-family: "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif; -webkit-font-smoothing: antialiased; border-radius: 14px; padding: 1px; }
.postviz, .postviz * { box-sizing: border-box; }
.postviz .mono { font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace; }
.postviz .wrap { max-width: 1040px; margin: 0 auto; padding: 40px 28px 56px; }
.postviz header.masthead { border-bottom: 1px solid var(--border); padding-bottom: 28px; margin-bottom: 36px; }
.postviz .eyebrow { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.11em; text-transform: uppercase; color: var(--accent-ink); margin: 0 0 12px; }
.postviz h1 { font-size: clamp(24px, 4vw, 32px); line-height: 1.15; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.postviz .dek { font-size: 16px; line-height: 1.6; color: var(--text-secondary); max-width: 640px; margin: 0; }
.postviz .dek strong { color: var(--text-primary); font-weight: 600; }
.postviz .mechanism { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 14px; }
.postviz .mech-cell { background: var(--surface); padding: 18px 20px; }
.postviz .mech-label { font-family: "IBM Plex Mono", monospace; font-size: 11px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); margin: 0 0 6px; }
.postviz .mech-body { font-size: 14px; line-height: 1.55; color: var(--text-secondary); margin: 0; }
.postviz .mech-eq { font-size: 13px; color: var(--accent-ink); margin: 3px 0 0; }
.postviz .archetypes { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 44px; }
.postviz .archetype { flex: 1 1 260px; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; }
.postviz .archetype .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); margin-top: 6px; flex: none; }
.postviz .archetype .name { font-size: 13px; font-weight: 600; margin: 0 0 2px; }
.postviz .archetype .desc { font-size: 12.5px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
.postviz .section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin: 0 0 18px; flex-wrap: wrap; }
.postviz .section-title { font-size: 20px; font-weight: 700; margin: 0; letter-spacing: -0.005em; }
.postviz .section-note { font-family: "IBM Plex Mono", monospace; font-size: 11.5px; color: var(--text-muted); margin: 0; }
.postviz .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 48px; }
@media (max-width: 720px) { .postviz .grid { grid-template-columns: 1fr; } .postviz .mechanism { grid-template-columns: 1fr; } }
.postviz .panel { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 20px 20px 18px; }
.postviz .panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 4px; }
.postviz .panel-num { font-family: "IBM Plex Mono", monospace; font-size: 11px; color: var(--text-muted); letter-spacing: 0.06em; }
.postviz .panel-title { font-size: 16.5px; font-weight: 600; margin: 2px 0 3px; letter-spacing: -0.005em; }
.postviz .panel-sub { font-size: 12.5px; color: var(--text-secondary); margin: 0 0 12px; line-height: 1.5; }
.postviz .badge { flex: none; font-family: "IBM Plex Mono", monospace; font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent-ink); background: var(--accent-wash); border: 1px solid var(--border); border-radius: 5px; padding: 4px 8px; white-space: nowrap; }
.postviz svg.chart { display: block; width: 100%; height: auto; }
.postviz .axis-label { font-family: "IBM Plex Mono", monospace; font-size: 9.5px; fill: var(--text-muted); letter-spacing: 0.04em; }
.postviz .tick-label { font-family: "IBM Plex Mono", monospace; font-size: 9px; fill: var(--text-muted); }
.postviz .zone-label { font-family: "IBM Plex Mono", monospace; font-size: 9px; letter-spacing: 0.05em; fill: var(--text-muted); }
.postviz .point-label { font-family: "IBM Plex Mono", monospace; font-size: 10.5px; font-weight: 500; fill: var(--text-primary); }
.postviz .readout { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 14px 0 14px; }
.postviz .stat { border-top: 1px solid var(--gridline-strong); padding-top: 8px; }
.postviz .stat-label { font-family: "IBM Plex Mono", monospace; font-size: 9.5px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--text-muted); margin: 0 0 3px; }
.postviz .stat-value { font-size: 14.5px; font-weight: 600; margin: 0; font-variant-numeric: tabular-nums; }
.postviz .stat-value .num { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 500; color: var(--text-secondary); }
.postviz .prompts { margin: 0; }
.postviz .prompts-label { font-family: "IBM Plex Mono", monospace; font-size: 9.5px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--text-muted); margin: 0 0 8px; }
.postviz .chip-row { display: flex; flex-wrap: wrap; gap: 6px; }
.postviz .chip { font-size: 12px; color: var(--text-secondary); background: var(--chip-bg); border: 1px solid var(--chip-border); border-radius: 100px; padding: 4px 10px; }
.postviz .table-scroll { overflow-x: auto; margin-bottom: 8px; }
.postviz table.spec { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 680px; }
.postviz table.spec caption { text-align: left; font-family: "IBM Plex Mono", monospace; font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--text-muted); padding-bottom: 10px; }
.postviz table.spec th { text-align: left; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); font-weight: 500; padding: 0 14px 10px 0; border-bottom: 1px solid var(--gridline-strong); }
.postviz table.spec td { padding: 12px 14px 12px 0; border-bottom: 1px solid var(--gridline); color: var(--text-secondary); vertical-align: top; line-height: 1.5; }
.postviz table.spec td:first-child, .postviz table.spec th:first-child { padding-left: 2px; }
.postviz table.spec td.strong { color: var(--text-primary); font-weight: 600; }
.postviz table.spec td .num { font-family: "IBM Plex Mono", monospace; font-size: 12.5px; }
.postviz footer.method { border-top: 1px solid var(--border); padding-top: 20px; font-size: 12.5px; line-height: 1.65; color: var(--text-muted); }
.postviz footer.method p { margin: 0 0 8px; }
</style>

<div class="wrap">
  <header class="masthead">
    <p class="eyebrow">Fogg Behavior Model &middot; B = MAP</p>
    <h1>Where four CIO advisory jobs sit relative to the action line</h1>
    <p class="dek">Every behavior a CIO advisory practice is hired to trigger requires <strong>Motivation</strong> and <strong>Ability</strong> to meet at the moment a <strong>Prompt</strong> arrives. Plot each job's position and the prompt design either lands above the curve, and the behavior fires, or it doesn't.</p>
  </header>

  <div class="mechanism">
    <div class="mech-cell">
      <p class="mech-label">Motivation</p>
      <p class="mech-body">How much the CIO wants the outcome right now, driven by role pressure, tenure, and stakes.</p>
    </div>
    <div class="mech-cell">
      <p class="mech-label">Ability</p>
      <p class="mech-body">How easy the advisory relationship makes it to act: time, cognitive load, and how close the insight is to decision-ready.</p>
    </div>
    <div class="mech-cell">
      <p class="mech-label">Prompt</p>
      <p class="mech-body">The trigger that has to land inside the same moment; its design must match where the CIO sits on M &times; A.</p>
      <p class="mech-eq mono">Action occurs only when M &times; A clears the curve <em>and</em> a Prompt fires</p>
    </div>
  </div>

  <div class="archetypes">
    <div class="archetype">
      <span class="dot"></span>
      <div>
        <p class="name">Facilitator prompt</p>
        <p class="desc">High motivation, moderate ability. The prompt's job is to remove friction, not add urgency.</p>
      </div>
    </div>
    <div class="archetype">
      <span class="dot"></span>
      <div>
        <p class="name">Signal prompt</p>
        <p class="desc">High motivation and high ability. The prompt only needs to remind, at the right moment.</p>
      </div>
    </div>
    <div class="archetype">
      <span class="dot"></span>
      <div>
        <p class="name">Spark prompt</p>
        <p class="desc">Ability is there but motivation lags; the prompt has to raise the stakes before it can work. Not in play below: all four jobs start motivated.</p>
      </div>
    </div>
  </div>

  <div class="section-head">
    <h2 class="section-title">The four jobs, plotted</h2>
    <p class="section-note mono">Axis scale 0-100 &middot; dashed curve = action-line threshold</p>
  </div>

  <div class="grid" id="panel-grid"></div>

  <div class="section-head">
    <h2 class="section-title">Summary</h2>
  </div>
  <div class="table-scroll">
    <table class="spec">
      <thead>
        <tr>
          <th>Job type</th>
          <th>Motivation</th>
          <th>Ability</th>
          <th>Prompt type</th>
          <th>Typical prompts</th>
        </tr>
      </thead>
      <tbody id="table-body"></tbody>
    </table>
  </div>

  <footer class="method">
    <p><strong style="color:var(--text-secondary)">Reading the curve.</strong> The dashed line is the action-line: the minimum motivation needed at each ability level for a well-timed prompt to trigger the behavior. All four jobs clear it comfortably here, because this population is pre-qualified as motivated, so the curve's real work is showing how much room each job has, and which prompt archetype fits the ability gap that remains.</p>
    <p><strong style="color:var(--text-secondary)">Scale used.</strong> Low = 25, Medium = 50, Medium-High = 72, High = 80, Very High = 92, on a 0-100 axis, to make the four jobs comparable on one chart. The threshold curve follows Fogg's published shape: motivation needed falls as ability rises, never reaching zero.</p>
  </footer>
</div>
</div>

<script src="/js/cio-chart.js" defer></script>

<p>The pattern generalizes past this one chart: before writing a prompt, plot the audience. A facilitator prompt aimed at someone who is already at signal-level ability reads as condescending. A signal aimed at someone still below the facilitator threshold gets ignored, because reminding someone of something they don't yet have the ability to act on isn't a reminder, it's noise.</p>
