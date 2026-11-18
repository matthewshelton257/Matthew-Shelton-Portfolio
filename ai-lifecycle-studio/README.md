# AI Lifecycle Studio

A browser demo for reviewing a three-email activation campaign before export. Built for Matthew Shelton's portfolio with AI-assisted development.

The emails are predefined samples for fictional products. This version uses rules, not a live AI model.

## Try it

Download this folder and open **index.html** in a browser. No installation, account or API key is needed.

1. Choose a sample product and read its brief.
2. Review the activation emails.
3. Introduce an unsupported claim, broken reference or missing consent check.
4. Inspect the findings, restore the clean sample and confirm review.
5. Export the draft as JSON or Markdown.

Blocking findings prevent approval. Changing inputs resets approval. Nothing is sent to a customer.

## What to look at

The useful part is the review process: a brief connects to a draft, checks surface problems and a person reviews the result before export. The sample content makes that process repeatable without paying for model calls.

The rules have limits. A valid source ID does not prove a claim is supported, and the small claim-pattern list will miss some problems. Consent flags illustrate a workflow rather than production eligibility logic. There is no CRM connection, live model evaluation or campaign-performance result.

## Files and checks

- `engine.js`: sample campaigns, validation and export logic
- `app.js`: interactions and approval state
- `index.html` and `style.css`: browser interface
- `tests/engine.test.cjs`: tests for the review rules and exports

With Node.js installed:

```sh
node --test tests/engine.test.cjs
```

[Evaluation notes](docs/evaluation.md) · [Proposed AI integration](docs/architecture.md) · [Portfolio](../README.md)
