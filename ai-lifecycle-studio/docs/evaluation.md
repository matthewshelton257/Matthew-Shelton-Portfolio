# Evaluation notes

## Current tests

The suite tests two fictional product fixtures, three failure injections for each, explicit human review, missing CTA/suppression handling, subject-length warnings, fixture isolation, export disclosures and unknown-product rejection.

These tests validate application behavior. They do not measure language-model quality because no language model runs in the application.

## Known blind spots

- A valid source ID can still accompany unsupported text.
- Claim patterns detect selected phrases and percentages, not all factual errors.
- Passing rules cannot establish audience relevance, deliverability or business impact.
- Visual concepts need review on actual devices and email-client validation before a future production campaign.
- Browser approval state is illustrative. It is not a secure server-side authorization mechanism.

## Future model evaluation set

Include sparse briefs, contradictory sources, malicious instructions embedded in a source, unsupported product benefits, ambiguous targeting and missing eligibility data. Expected behavior includes asking for missing inputs or refusing to invent a fact. Score outputs using a written rubric and preserve failures, not just the best examples.

Report test-set size, prompt version, model version, run date, repeated runs, reviewer criteria and uncertainty. Measure actual token cost and latency only after live integration. Measure campaign outcomes only in an authorized live experiment with baseline and cohort definitions.
