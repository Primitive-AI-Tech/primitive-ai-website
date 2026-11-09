import {
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  FileText,
  Headset,
  UsersRound,
  Search,
  type LucideIcon,
} from "lucide-react";

export type ApplicationArea = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  request: string;
  sources: string;
  agentWork: string;
  review: string;
  output: string;
};

export const applicationAreas: ApplicationArea[] = [
  {
    id: "outbound-research",
    title: "Account research & outbound sales",
    icon: Search,
    summary:
      "Prepare an evidence-backed account brief so a sales team can decide whether and how to reach out.",
    request: "Research this organization and prepare an account brief.",
    sources: "Approved research sources, qualification criteria and existing account records.",
    agentWork: "Gather relevant evidence, summarize fit and draft a possible next step.",
    review: "A sales owner validates the evidence and approves any outreach or record changes.",
    output: "A reviewable account brief with evidence and suggested next steps.",
  },
  {
    id: "sales-support",
    title: "Sales & customer support",
    icon: Headset,
    summary:
      "Qualify an inquiry, prepare account context, draft a grounded response and route the next action.",
    request: "Prepare a response to a new customer inquiry.",
    sources: "The inquiry, approved product information and relevant account records.",
    agentWork: "Gather context, draft a response and suggest a next step.",
    review: "A team member checks customer commitments before a response is sent.",
    output: "An inquiry brief and a response draft for review.",
  },
  {
    id: "knowledge-research",
    title: "Knowledge & research",
    icon: BookOpen,
    summary:
      "Find approved information, compare sources and prepare an evidence-linked brief.",
    request: "Prepare a brief from the information this team is allowed to use.",
    sources: "Approved knowledge collections, business records and source documents.",
    agentWork: "Find relevant evidence, compare findings and identify open questions.",
    review: "A subject owner checks the supporting sources and any conflicting details.",
    output: "A structured brief with references back to its sources.",
  },
  {
    id: "internal-operations",
    title: "Internal operations",
    icon: BriefcaseBusiness,
    summary:
      "Coordinate a request, check its status and prepare actions across approved business tools.",
    request: "Show the status of this request and prepare its next steps.",
    sources: "The request, its approved workflow and connected operational records.",
    agentWork: "Gather the latest context, update a draft plan and flag exceptions.",
    review: "The process owner handles exceptions and approves consequential changes.",
    output: "A current request summary and actions ready for review.",
  },
  {
    id: "finance-reconciliation",
    title: "Finance & reconciliation",
    icon: Calculator,
    summary:
      "Compare authorized records, surface discrepancies and prepare a review queue.",
    request: "Compare these records and identify the items to investigate.",
    sources: "Authorized transaction records, reference documents and agreed rules.",
    agentWork: "Compare entries, group differences and gather the supporting evidence.",
    review: "A finance owner resolves discrepancies and approves any adjustment.",
    output: "A reconciliation queue with matched items and exceptions.",
  },
  {
    id: "people-hr",
    title: "People & HR",
    icon: UsersRound,
    summary:
      "Answer approved policy questions and prepare structured onboarding steps.",
    request: "Prepare the onboarding steps for this new team member.",
    sources: "Current approved policies, role information and onboarding materials.",
    agentWork: "Find relevant steps and organize tasks for the right owners.",
    review: "An authorized HR owner checks access, exceptions and personal details.",
    output: "A role-specific onboarding checklist ready to confirm.",
  },
  {
    id: "documents-legal",
    title: "Documents & legal",
    icon: FileText,
    summary:
      "Compare documents, draft from approved material and route expert review.",
    request: "Compare this document with the approved template.",
    sources: "The submitted document, approved templates and relevant guidance.",
    agentWork: "Identify differences, gather context and prepare a marked-up draft.",
    review: "A qualified reviewer checks interpretation and approves the next action.",
    output: "A comparison summary with questions and changes to review.",
  },
];
