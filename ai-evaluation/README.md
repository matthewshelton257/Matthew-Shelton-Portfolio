# Evaluating AI for Lifecycle Marketing

**Research question:** Which tested tool produces a more accurate, usable activation campaign from the same evidence?

**Status: ready to run. No model outputs collected or scored.** Prepared October 8, 2026. This is an evaluation kit, not a completed benchmark or evidence of campaign lift.

This project extends [AI Lifecycle Studio](../ai-lifecycle-studio/README.md) from deterministic samples toward documented evaluation of real AI outputs.

## Start here

1. Choose two tools you can access without paying. Record the displayed model name or “not disclosed”.
2. Copy the complete [test prompt](prompt.md) into a fresh conversation in each tool. Use the same settings where possible. Disable browsing and memory if those controls are available; record any difference.
3. Run three fresh conversations per tool, alternating tools. Save all six first responses, including failures. Do not retry until you get a better answer.
4. Record conditions in the [run log](runs.csv). Preserve raw text using the [output template](output-template.md).
5. Assign outputs neutral IDs and score them with the [rubric](rubric.md) before looking at tool names when feasible.
6. Choose one output for a documented [before-and-after review](editing-review.md).
7. Complete the [results report](results.md) with evidence and limitations.

Free-tier limits may prevent matched conditions. If that happens, report the limitation rather than upgrading or describing the test as controlled.

## Evidence to publish

| Artifact | Purpose | Current state |
| :--- | :--- | :--- |
| Fixed brief and prompt | Hold the task constant | Prepared |
| Six unedited outputs | Show what tools actually produced | Not collected |
| Run log | Record models, settings and conditions | Header only |
| Scoring rubric | Define judgment before seeing outputs | Prepared |
| Before-and-after review | Show marketing judgment and editing | Template only |
| Findings | Explain a narrow, supported conclusion | Not available |

## What this can demonstrate

Evidence-grounded prompting, lifecycle logic, evaluation design and the ability to distinguish a polished answer from a usable one. Results will describe only the tested task, versions and conditions. Six runs are exploratory and cannot establish that one tool is universally better.

[Back to portfolio](../README.md)
