import { BookOpen, Layers3, MessagesSquare, Search } from "lucide-react";

export const scenarios = [
  {
    id: "inbound-sales",
    label: "Inbound sales",
    icon: MessagesSquare,
    title: "Turn incoming inquiries into prepared next steps.",
    teaser: "Handle inquiries with context and consistency.",
    description:
      "Bring customer requests, approved service knowledge and the right follow-up into one coordinated process.",
    request: "Prepare a response to this new service inquiry.",
    sources: ["Customer inquiry", "Service knowledge", "CRM"],
    agent: [
      "Gather inquiry details",
      "Retrieve approved service information",
      "Prepare a response and next steps",
    ],
    human: [
      "Confirm customer requirements",
      "Review quotation inputs",
      "Approve consequential actions",
    ],
    output: "Inquiry brief",
    outputs: [
      "Customer requirements",
      "Suggested response",
      "Next steps to review",
    ],
    information: [
      "Customer requirements and inquiry history",
      "Approved product or service information",
      "Relevant account records",
    ],
    controls: [
      "Approved channels and information",
      "Quotation and response rules",
      "Review and escalation points",
    ],
    measures: [
      "Response and preparation time",
      "Inquiry completeness",
      "Successful handoffs",
    ],
  },
  {
    id: "outbound-research",
    label: "Outbound research",
    icon: Search,
    title: "From account research to a relevant next step.",
    teaser: "Prepare better account research with less manual effort.",
    description:
      "Combine permitted sources and account context into a concise, reviewable brief for your sales team.",
    request: "Research this organization and prepare an account brief.",
    sources: ["Approved research", "Company records", "CRM"],
    agent: [
      "Gather permitted account information",
      "Organize relevant evidence",
      "Draft a brief and proposed next step",
    ],
    human: [
      "Validate account fit",
      "Review supporting evidence",
      "Approve outreach and record changes",
    ],
    output: "Account brief",
    outputs: [
      "Organization overview",
      "Relevant account context",
      "Proposed next step",
    ],
    information: [
      "Target organization and research scope",
      "Approved sources and existing records",
      "Your qualification criteria",
    ],
    controls: [
      "Permitted research sources",
      "Data quality and source checks",
      "Outreach and update approvals",
    ],
    measures: [
      "Research time per account",
      "Accepted account briefs",
      "Information quality",
    ],
  },
  {
    id: "internal-operations",
    label: "Internal operations",
    icon: Layers3,
    title: "From scattered data to a reviewable operations report.",
    teaser: "Ask across your operational systems.",
    description:
      "Bring warehouse records, finance information and operating guidance into one investigation.",
    request: "Prepare a stock and finance exception report.",
    sources: ["Warehouse", "Finance", "Documents"],
    agent: [
      "Gather authorized information",
      "Apply agreed rules",
      "Prepare reviewable outputs",
    ],
    human: [
      "Validate findings",
      "Resolve exceptions",
      "Approve consequential changes",
    ],
    output: "Operations review",
    outputs: ["Stock movements", "Finance exceptions", "Questions to review"],
    information: [
      "Warehouse records (e.g. stock movements)",
      "Finance information (e.g. transactions, accruals)",
      "Operating guidance (e.g. policies, thresholds)",
    ],
    controls: [
      "Authorized data sources and access",
      "Exception rules and scope",
      "Review and approval steps",
    ],
    measures: [
      "Report preparation time",
      "Completeness and rework",
      "Exception-resolution time",
    ],
  },
  {
    id: "research-knowledge",
    label: "Research & knowledge",
    icon: BookOpen,
    title: "Turn distributed evidence into a useful research brief.",
    teaser: "Build research around evidence your team can inspect.",
    description:
      "Collect, compare and enrich information across approved sources, with a clear path back to the evidence.",
    request:
      "Investigate this organization and prepare an evidence-backed brief.",
    sources: ["Research databases", "Documents", "Approved sources"],
    agent: [
      "Coordinate approved research tools",
      "Compare information and relationships",
      "Prepare a structured brief",
    ],
    human: [
      "Review evidence and coverage",
      "Resolve conflicting information",
      "Accept the research output",
    ],
    output: "Research brief",
    outputs: ["Key findings", "Supporting evidence", "Open questions"],
    information: [
      "Research question and scope",
      "Approved information sources",
      "Required output and acceptance criteria",
    ],
    controls: [
      "Source permissions and provenance",
      "Evidence and completeness checks",
      "Review of incomplete findings",
    ],
    measures: [
      "Time per accepted brief",
      "Coverage and evidence quality",
      "Review effort and turnaround",
    ],
  },
];

export type Scenario = (typeof scenarios)[number];
