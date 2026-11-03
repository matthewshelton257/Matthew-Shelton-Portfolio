# Illume · Message and interface copy

Prepared recommendations from the October 29, 2026 product walkthrough. AI-assisted drafts for an independent proposal, not deployed Illume communications. Product states, supported actions and links require confirmation before implementation.

## First automatic insight: sender introduction and reply prompt

Combine with the existing insight rather than sending an additional message.

> Hi, I'm Taro, your Illume companion. This observation uses your connected wearable history. Want to explore it? Reply with a question or ask me to chart the comparison.

Preserve the actual insight and relevant date range. Confirm supported requests. Treat patterns as observations to explore, not proof of causation. The hypothesis is that a recognizable introduction and a concrete reply invitation will make the first useful response easier.

## Signals: empty-state recommendation

> **Your charts start with a conversation**
>
> Ask Taro to visualize something in your connected data. Try: “Chart my recent sleep history and show the dates used.” Completed charts appear here.

**Proposed action:** Open Taro conversation.

The link behavior needs verification. A desktop fallback should explain how to locate the conversation on the user's phone. This is a copy and interaction recommendation, not a shipped button or a finished interface mockup.

## Chart request: pending state

> Your chart request is being prepared. You can leave this page.

Use only when the backend confirms preparation. Do not invent a completion estimate or promise a notification unless that behavior exists.

## Chart request: ready state

> Your chart is ready in Signals. Open it to see the comparison, date range and observations included.

Use only after verified completion, with a supported chart link.

## Chart request: failure state

> We couldn't complete this chart. Try again or contact support.

Use after a confirmed failure. Verify that retry and support actions exist and prevent retries from creating duplicate requests.

## Dashboard guidance

The recommendation is to distinguish missing setup, awaiting analysis, an available insight and no eligible data. An empty dashboard does not prove that no insight was delivered through messaging.

The project intentionally stops short of writing definitive copy for unverified states. First confirm event availability and the intended relationship between the dashboard, text messages and Signals.

## Why these assets belong together

The introduction explains who is speaking. The reply prompt explains what to do. The empty state connects a conversation to a chart. The status messages explain what happens after a request. Together they address the transition from receiving information to using it.

[Back to the Illume case study](../illume.md)
