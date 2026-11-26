# Products handoff · Vietnamese product preview

[Open Products](products.html) · [Desktop board](images/products-vi-desktop.webp) · [Mobile board](images/products-vi-mobile.webp)

Products opens with what Core Agentic does, shows concrete workflows and observed test runs, then explains how teams configure agents for their work. Integration and specialist products follow. The page closes with the Earth sunrise invitation.

| Section | Anchors | Layout and behavior |
| --- | --- | --- |
| Core Agentic | `#execution`, `#core-agentic-product` | Place the product name, promise and two chapter links beside the responsive HTML architecture diagram. Use consistent line icons on the cards. Follow the cyan arrows from work channels through API, Worker and executor to business systems. Route customer configuration separately into Worker, which groups the agent and workflow modes. Keep permissions, approvals and the execution log inside the labeled Core Agentic boundary. Link to `#architecture` for integration details. On smaller screens, stack the diagram below the copy. |
| One solution to rule them all | `#applications`, `#order-example`, `#research`, `#warehouse-example`, `#company-profile`, `#finance-example`, `#buyer-screening`, `#your-use-case` | One seven-slide carousel. Each slide shows the request, the configuration and the output to review. The evidence labels accompany the six examples. **Your use case** shares the workflow layout, icon sizing and output panel with the other example cards. The legacy `#evidence` link opens Research. |
| Cấu hình tác nhân theo công việc | `#roles` | Give the three configuration decisions equal weight in a full snap chapter. Show task, data and tools, and permissions and approvals side by side on desktop and stacked on small screens. |
| Integration | `#architecture` | Show work channels, the Core Agentic Worker, the controlled executor and business systems of record. Keep the AI model below the main flow. Work channels, Core Agentic and business systems read from top to bottom on smaller screens. |
| Specialist products | `#specialist-products` | Give VisionHub, FamilyHub and EduAssess AI separate picture cards in a single section. The custom AI development link continues to the Services page. |
| Closing invitation | `#next-step` | Mount the same Earth sunrise contact invitation used on the homepage. The footer links to rollout and pricing on the homepage and to the original Vietnamese deck. |

The sequence opens with a customer request and an open research question, proceeds to read-only reconciliation and a repeatable Workflow Studio recipe, and closes with scheduled reporting and an agent-started scoring workflow. The three sample workflows use **Ví dụ minh họa**. The three observed runs use **Kết quả chạy thử** and retain their isolated test context. Keep the 400 needed, 300 available and 100 to request in the materials example. In the measured runs, five profile fields missed their length targets and two buyer records carried eligibility warnings requiring review. The [source review](source-review.md) records the evidence and qualifications.

Swipe, use the previous and next buttons, or select a card in the tab row. Auto-advance runs by default every 10 seconds while the controls and card are visible and idle. Direct links and manual selections hold the chosen card while it is in view. Hover, keyboard focus and reduced motion pause automatic movement. The carousel keeps the page's vertical scroll position.

The homepage and Products use the current React navigation. The preview language selector changes the navigation labels. Chapter content follows the approved Vietnamese review. The full [Vietnamese deck](slides-vi.html) remains available for comparison.

Edit [the layout](products-layout.html), [the applications and results](products-sections.html) or [the technical chapters](products-technical.html), then run `python3 mockup/v5/build-deck-website.py` to regenerate the review page. Product styling is in [products.css](products.css). [The homepage handoff](homepage-handoff.md) describes the shared chapter styling and contact invitation.
