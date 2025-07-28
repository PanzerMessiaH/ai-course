# SDG Rules - Optimization Guidelines

## SDG-03 Series - Performance Optimization
- SDG-03.2: Lightweight models (e.g., SD 1.5) SHOULD be preferred for performance.
- SDG-03.3: Environment variables MUST control all key optimization parameters.
- SDG-03.4: Generation parameters SHOULD be logged for debugging/reproducibility.

## SDG-04 Series - System Reliability
- SDG-04.1: All image generation services MUST implement health checks with verification.
- SDG-04.2: Error handling MUST capture/log specific error types with fallbacks.
- SDG-04.3: Database asset records MUST match actual file paths/extensions.
- SDG-04.4: APIs MUST return consistent response formats with defined paths/statuses.

## Optimization Strategies
- OPT-01: Use Just-In-Time (JIT) rule loading to reduce context window usage (~15-20% vs. ~70%).
- OPT-02: Navigate decision trees with directed graphs, modeling phase/component relationships.
- OPT-03: Scale documentation progressively: Minimal for Level 1, detailed for Level 4.
- OPT-04: Preserve context across modes via unified transfer (e.g., @memory-bank/activeContext.md).
- OPT-05: Load only resources needed for each step.
- OPT-06: Identify parallelizable tasks via graph structure.

## Application Guidelines
- Prefer lightweight solutions with environmental configuration
- Implement comprehensive error handling with specific logging
- Ensure data consistency between records and actual assets
- Use progressive complexity based on task levels
