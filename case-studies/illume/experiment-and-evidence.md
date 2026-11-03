# Illume · Evidence log and activation experiment

Independent research snapshot from October 29, 2026. Based on one account walkthrough, Matthew's observations and saved project notes. Health values, phone numbers and raw personal messages are not reproduced.

## What was observed

| Observation | Interpretation to explore | Boundary |
| :--- | :--- | :--- |
| A proactive personalized text arrived without a preceding question | The insight can create an opportunity for a first reply | The exact trigger was not verified |
| Wearable history appeared in the product | Import and display had worked in this account | Older data was visibly flagged; a reported WHOOP-side issue should not be labeled an Illume sync defect |
| Dashboard guidance appeared generic despite connected history elsewhere | Account-state guidance could be clearer | Remaining setup requirements and analysis triggers were unknown |
| Signals explained that charts begin in a Taro conversation | An example prompt and action could help someone start | Other onboarding surfaces had not been fully audited |
| The visible first text did not introduce its sender | Recognition could be tested | An earlier introduction might exist elsewhere; the phone's unknown-sender notice is not a delivery failure |
| Taro acknowledged a chart request | The conversation continued successfully | Acknowledgment is not completion |
| No chart was seen in Signals after repeated refreshes during the walkthrough | Make the waiting state observable | Final completion and total latency remain unknown; no confirmed product failure is claimed |

## Chart-request test record

The request asked for a comparison using connected workout and recovery history, including the date range, observation count and where to find the chart.

- Request acknowledgment: observed.
- Completion message: not verified in the saved research.
- Chart visible in Signals: not verified.
- Exact total wait: unknown.
- Follow-up evidence needed: record completion-message time and first observed chart time separately.

## Experiment prepared

**Hypothesis:** a short sender introduction and a relevant reply prompt help more eligible new users make a meaningful first reply without increasing unwanted messaging.

**Control:** existing first automatic insight.

**Treatment:** the same insight with the introduction and reply prompt. Keep insight content, timing and eligibility comparable. Chart-status improvements are a separate test.

**Eligibility:** newly registered, messaging-enabled users with successfully imported wearable data who qualify for a first proactive insight. Exclude staff/test accounts and users already in a conversation. Verify plan eligibility.

**Primary measure:** unique users making a meaningful reply within 48 hours divided by eligible users with confirmed first-insight delivery. If the system only records sent events, label the denominator as sent.

A meaningful reply is a relevant question or context contribution. Exclude opt-outs, delivery errors and simple acknowledgments.

**Supporting measures:**

- Useful response following the first reply.
- Second meaningful interaction within seven days.
- For chart requesters: completion rate, request-to-ready time and ready-to-first-view time.
- Qualitative ability to identify Taro, understand the next action and locate a completed chart.

**Guardrails:** opt-outs, negative feedback, duplicate requests, chart errors and support requests. Review by access tier.

**Decision approach:** establish baseline and a practical improvement threshold with the team. Select sample size and duration using actual volume. If volume is low, begin with five moderated walkthroughs and report observations rather than statistical significance. Those interviews have not been conducted.

## Four-week plan prepared

| Week | Proposed work | Dependency |
| :--- | :--- | :--- |
| 1 | Complete audit, reconcile existing messages and define events | Product access, current flows and baseline data |
| 2 | Finalize copy, trigger rules and the experiment brief | Confirmed supported actions and implementation owner |
| 3 | QA and review an approved pilot | Deployment agreement and eligible users |
| 4 | Readout with denominators, limits and keep/revise/stop recommendation | Sufficient observation time |

The four-week period begins after scope agreement. No pilot has launched.

## Founder discovery questions

1. What defines an activated user today?
2. What introduces Taro and triggers the first proactive message?
3. How should the dashboard, messages and Signals relate?
4. Which pending, completion and error events exist?
5. Which plan and audience should a pilot include?
6. Which changes can Matthew own and which need engineering?

[Message and interface drafts](message-and-interface-copy.md) · [Back to case study](../illume.md)
