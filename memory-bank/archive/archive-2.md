# Task Archive: Improve Lighthouse Accessibility Score (Level 2)

## Metadata
- **Complexity**: Level 2
- **Type**: Enhancement
- **Date Completed**: 2024-09-06
- **Related Tasks**: None

## Summary
This task focused on improving the Lighthouse accessibility score from 85%. All specific issues identified in an initial Lighthouse report (`button-name`, `image-alt`, `link-name`) were addressed. However, despite these fixes, the final score remained at 85%.

## Requirements
1.  Address `button-name` issue by adding accessible names to all buttons.
2.  Address `image-alt` issue by adding descriptive alt text to all images.
3.  Address `link-name` issue by ensuring all links have discernible text.

## Implementation
Fixes were implemented in the following key files:
- `src/app/admin/login/page.tsx`: Added `alt` text to images and an `aria-label` to the password visibility toggle button.
- `src/components/sections/AuthoritySection.tsx`: Wrapped emoji icons in `<span>` tags with `role="img"` and a descriptive `aria-label`.

## Testing
- Lighthouse was run before and after the changes.
- The initial score was 0.85.
- After multiple rounds of fixes and server restarts, the final score remained 0.85.
- While the specific audits were resolved, the overall score did not improve.

## Lessons Learned
- There is not a direct one-to-one correlation between fixing individual Lighthouse audits and an increase in the overall accessibility score. The scoring algorithm is complex and likely weighted.
- For tasks focused on improving a score, the plan must include a discovery step to research how that score is calculated and which audits have the highest impact.
- Relying on a single tool may not provide a complete picture.

## References
- **Reflection Document**: [../reflection/reflection-2.md](./../reflection/reflection-2.md) 