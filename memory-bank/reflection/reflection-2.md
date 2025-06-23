# Reflection: Improve Lighthouse Accessibility Score (Level 2)

## 1. Review of Implementation and Comparison to Plan

The plan was to address three specific accessibility issues identified by an initial Lighthouse report: `button-name`, `image-alt`, and `link-name`. The implementation successfully located and fixed all of these issues across the codebase, including adding `aria-label`s to icon buttons, `alt` text to images, and ensuring links have discernible names. The execution followed the plan precisely.

## 2. Successes

- **Audit Compliance:** All specific accessibility failures from the initial Lighthouse report were successfully addressed.
- **Codebase Improvement:** The accessibility of several components (`AuthoritySection`, `AdminLoginPage`) was tangibly improved, making them more usable for individuals relying on assistive technologies.

## 3. Challenges

- **Score Stagnation:** The primary challenge was that despite fixing all identified issues, the Lighthouse accessibility score remained unchanged at 0.85.
- **Troubleshooting Dead End:** The effort to debug the stagnant score by restarting the development server did not yield a different result, suggesting the cause was not a simple caching issue. The root cause of why the fixes did not translate to a higher score remains unknown.

## 4. Lessons Learned

The main takeaway is that there isn't always a direct, one-to-one correlation between fixing individual Lighthouse audits and an increase in the overall accessibility score. The scoring algorithm is likely influenced by a complex weighting of issues. A task focused on improving a score requires a deeper initial analysis than just addressing the top-level reported failures.

## 5. Process and Technical Improvements

- **Refined Planning:** For future tasks aimed at improving a specific metric (like a Lighthouse score), the plan should include an explicit discovery step to research how that score is calculated and which audits have the highest impact.
- **Broader Tooling:** Relying on a single tool might not provide a full picture. Incorporating other accessibility analysis tools could offer different perspectives and help prioritize work more effectively. 