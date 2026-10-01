# AI integration design

## Implemented now

The browser copies an authored fixture, applies a selected failure scenario and checks the result locally. There is no agent, model adapter, retrieval service or remote execution. Input is restricted to known sample products. Output is rendered with textContent rather than HTML interpolation. The workflow can export drafts regardless of findings, with the findings included in JSON. Only passing drafts with explicit reviewer confirmation can receive the human-reviewed-demo status.

## Proposed live version

1. **Input contract:** product brief, approved source excerpts, audience hypothesis, tone and desired action. Keep personal customer data out of the brief unless explicitly needed and authorized.
2. **Research boundary:** fetch only approved destinations through a server-side tool with URL validation. Treat retrieved content as untrusted evidence, never as instructions. Record source URL, retrieval date and exact supporting excerpt.
3. **Model adapter:** request a structured campaign object through a provider-neutral interface. Model outputs are proposals. A tool call is a request that application code must authorize and execute; it is not permission by itself.
4. **Validation:** parse the schema, check source IDs and inspect claimed capabilities against the evidence. A semantic reviewer may help flag errors but must not be treated as an oracle.
5. **Execution control:** set timeouts, token and cost budgets, bounded retries and an explicit failure state. Do not silently substitute fabricated copy when the model fails.
6. **Human review:** show source evidence, proposed targeting and exact final content. Input or output changes invalidate prior approval. A production system would persist approval against a content hash and enforce it server-side.
7. **Export first:** introduce CRM delivery only after independent authorization and idempotency, recipient eligibility and suppression handling are implemented. This project has no sending code.

## Evaluation before choosing a model

Use the same briefs, evidence and output schema across candidates. Compare instruction adherence, unsupported claims, missing fields, reviewer edits, latency and measured cost. Repeat runs to expose variance. Keep evaluation briefs separate from prompt-development examples and record prompt/model versions. Do not call a model better based on a single polished result.

## Why no multi-agent system yet?

The task has a small number of explicit steps. A single generation stage followed by deterministic validation and human review would be a useful baseline. Additional agents would need to demonstrate a measurable improvement that justifies their latency, cost and coordination failure modes.
