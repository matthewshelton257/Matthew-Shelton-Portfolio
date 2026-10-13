# Frameplay · From a still image to a first motion study

**Speculative product-marketing exercise for a fictional AI video tool. AI-generated copy and strategy prepared at Matthew Shelton's direction. No claim of sole human authorship, client work, product implementation or measured results. Not affiliated with Runway.**

## The brief

**Audience hypothesis:** designers and small creative teams who have a visual direction but need to explore how it could move.

**Communication problem:** “AI video generation” describes a capability. The copy needs to explain a useful first action without promising exact control or production-ready results.

**Objective:** help a new user generate and review a first motion study.

**Invented product specification for this exercise:** Frameplay accepts one JPG or PNG, a motion prompt and a choice of 5- or 10-second duration. It generates a silent video preview. Users can revise the prompt and save versions to a project. Outputs vary and may not follow every instruction. No pricing, generation speed, commercial rights or quality guarantee is assumed.

Every capability below belongs to this fictional brief. None describes Runway's actual product.

## 01 · Landing page

**Eyebrow**  
Image-to-video exploration

**Headline**  
See where your still could go.

**Supporting copy**  
Start with an image. Describe the movement you have in mind, then generate a short video to explore the direction.

**Primary CTA:** Create a motion study  
**Secondary CTA:** See an example

*Proposed example caption:* One image. Three motion prompts. Three directions to compare.  
*Production note:* This placement needs an actual labeled example before use. No output is supplied or claimed here.

### Start with your visual.

Upload a JPG or PNG to give your motion study a starting point.

### Put the movement into words.

Describe a camera move, a change in the scene or a little of both. Start with one clear instruction.

### Try another direction.

Review the preview. Revise the prompt. Save the versions you want to return to.

**Expectation-setting copy**  
Each generation is an interpretation. Results may vary from your image or instructions.

**Closing headline**  
Have a still in mind?

**Closing CTA:** Create a motion study

**Editorial rationale:** “motion study” sets an exploratory expectation. The three sections name actual actions in the invented brief. The copy avoids promising a finished film, perfect consistency or a specific turnaround time.

## 02 · First-use onboarding

| Placement | Selected copy | Reason |
| :--- | :--- | :--- |
| Empty project heading | Give your image a next frame. | Connects an existing asset to the next action |
| Empty project body | Upload an image to begin your first motion study. | Explains what is missing |
| Upload button | Upload image | Uses a direct verb |
| Upload helper | JPG or PNG. Use an image you have permission to upload. | States format and user responsibility without promising rights |
| Prompt label | Describe the movement | Names the input |
| Prompt placeholder | e.g. The camera slowly moves toward the window. | Demonstrates a single clear instruction |
| Prompt helper | Start with one movement. You can revise the prompt after seeing the result. | Makes iteration concrete |
| Duration label | Clip length | Uses familiar language |
| Duration options | 5 seconds / 10 seconds | Reflects the fictional specification |
| Generate button | Generate preview | Makes clear what the action produces |
| Processing state | Your preview is generating. | Avoids an unverified wait time |
| Result heading | Your first direction is ready. | Describes a result without judging its quality |
| Result actions | Revise prompt / Save version | Gives the user two useful next steps |

### Recovery states

**Unsupported file**  
This file type isn't supported. Choose a JPG or PNG.  
**Action:** Choose another image

**Missing motion prompt**  
Describe how you'd like the image to move.

**Generation failure**  
We couldn't generate this preview. Try again.  
**Action:** Try again

**Save failure**  
This version hasn't been saved to your project. Try saving it again.  
**Action:** Try again

**Output does not match the intention**  
Want a different direction? Try changing one part of the prompt.  
**Action:** Revise prompt

**Implementation boundary:** failure copy assumes the interface can distinguish generation failure from save failure. A retry must not imply free credits, preserved inputs or recovery of an unsaved version unless engineering confirms those behaviors. Error text should appear beside the relevant control and be announced accessibly.

## 03 · Activation email

**Audience:** a hypothetical opted-in user who uploaded an image but has not generated a preview.  
**Proposed trigger:** 24 hours after upload, suppressed immediately after a successful generation. Timing is a test assumption.

**Subject:** Give that image a little movement  
**Preheader:** Start with one camera move.

> **You have a starting frame.**
>
> What happens next?
>
> Try one simple instruction: “The camera slowly moves toward the window.”
>
> Describe a movement that fits your image, then generate a preview. You can revise the prompt when you see the result.
>
> **Create a motion study**
>
> Each generation is an interpretation. Results may vary.

**Why this approach:** the email teaches the missing behavior. It does not imply the uploaded image contains a window. The destination must open the correct project; otherwise use a generic project selector and adjust the message.

**Required production elements:** sender identity, working preference and unsubscribe links plus applicable company information. These are a copy exercise, not an email ready for deployment.

## 04 · Feature-launch email

**Fictional launch scenario:** saving versions becomes available to existing users who have already generated a preview.

**Subject:** Keep the versions you want to revisit  
**Preheader:** Save a motion study to your project.

> **That direction is worth keeping.**
>
> A slower camera move. A different scene instruction. A version you want to come back to.
>
> You can now save generated previews to your project. Explore another direction without losing track of the ones you've chosen to keep.
>
> Open a preview and select **Save version**.
>
> **Open my projects**

**Decision:** specific instructions carry the launch. “Chosen to keep” avoids implying automatic saving. The invented feature is saved versions, not collaboration or side-by-side comparison.

## 05 · Paid-social message routes

| Route | Headline | Body | CTA |
| :--- | :--- | :--- | :--- |
| Existing asset | Your still has a next frame. | Upload an image and describe a movement. Generate a short video to explore what could happen next. | Create a motion study |
| Iteration | Try the scene another way. | A different camera move can suggest a different direction. Revise the prompt and generate another preview. | Create a motion study |

**Proposed experiment:** compare the two complete message routes with the same audience, placement and landing page. This tests the message package, not the headline alone. Use successful first-generation rate per assigned eligible visitor as the primary outcome. Report cost per activated user alongside it. Monitor failures and subsequent return to the project. No test has run.

## 06 · Product-film script

**Proposed length:** 30 seconds. Storyboard only, not a produced film. Timing needs a read-through. All interface and generated-video shots must be created and labeled as concept visuals.

| Time | Visual direction | Voiceover / on-screen copy |
| :--- | :--- | :--- |
| 0–4s | A still image of a window. A subtle frame surrounds it. | VO: “You have an image in mind.” |
| 4–8s | The still enters the upload area. The prompt field appears. | VO: “Now give it a direction.” |
| 8–13s | Type the prompt. Show a separate generating state before the preview. | On screen: “The camera slowly moves toward the window.” |
| 13–18s | Play a concept preview, clearly separated from the still. | VO: “See what the movement brings to the scene.” |
| 18–24s | Revise one instruction. Show a second generation with an edit indicating elapsed time. | VO: “Change the prompt. Explore another possibility.” |
| 24–30s | Save a version. End card with product name and CTA. | VO: “Frameplay. See where your still could go.” On screen: “Create a motion study.” |

**Production decision:** editing must not imply instant generation. The film demonstrates the same sequence as onboarding. Avoid showing precise changes that the fictional brief does not guarantee.

## 07 · Editorial decisions and measurement

| Tempting draft | Selected direction | Why |
| :--- | :--- | :--- |
| Turn any idea into a perfect film. | See where your still could go. | Removes universal capability and perfection claims |
| Animate instantly. | Generate preview. | Avoids inventing speed |
| Bring your vision to life. | Upload an image. Describe the movement. | Replaces a generic promise with product behavior |
| Never lose a great idea. | Save the versions you want to return to. | Avoids implying automatic saving |

These are AI-generated editorial examples, not a record of Matthew's personal revisions.

**Measurement proposal:** assign eligible new accounts to onboarding variants before exposure. Compare the share with a successful first preview within 24 hours. Use successful generation rather than button clicks. Check preview playback and a second session within seven days as supporting behaviors. Track generation errors as a guardrail. Define exclusions, attribution and the decision threshold before launch; the sample size would depend on an actual baseline.

**What remains unknown:** whether this audience wants image-to-video exploration, which terms users understand and how actual model limitations affect expectations. User interviews and product review would precede production copy.

[Back to selected copy](README.md)
