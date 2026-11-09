import {
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  FileText,
  Laptop,
  Layers3,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
} from "lucide-react";

export const delivery = [
  {
    title: "Find the opportunity",
    short: "Find the opportunity",
    icon: Search,
    description:
      "Work with you to identify a valuable bottleneck with clear business impact.",
    deliverable: "Focused problem statement",
    summary: "A focused, high-value use case.",
  },
  {
    title: "Define the proof",
    short: "Define the proof",
    icon: FileText,
    description: "Agree the scope, approach and how we will evaluate success.",
    deliverable: "Scope and evaluation plan",
    summary: "A clear scope and success measures.",
  },
  {
    title: "Build alongside your team",
    short: "Build together",
    icon: Layers3,
    description:
      "Design, build and test a solution together using your approved data and expertise.",
    deliverable: "Working proof",
    summary: "A working solution with your team.",
  },
  {
    title: "Evaluate the result",
    short: "Evaluate",
    icon: CircleCheck,
    description:
      "Review the outcome against the agreed measures and decide next steps.",
    deliverable: "Proceed, refine, or stop",
    summary: "Results against your success measures.",
  },
  {
    title: "Put it into operation",
    short: "Put into operation",
    icon: Rocket,
    description:
      "Prepare for operational use, with the right training, ownership and support.",
    deliverable: "Training, ownership and support",
    summary: "A controlled, governed rollout.",
  },
  {
    title: "Expand from evidence",
    short: "Expand",
    icon: ChartNoAxesColumnIncreasing,
    description:
      "Build on what works and apply it to adjacent workflows and teams.",
    deliverable: "Adjacent workflows and teams",
    summary: "Apply and grow what proves useful.",
  },
];

export const training = [
  { icon: Laptop, title: "Useful instructions" },
  { icon: Layers3, title: "Check sources and outputs" },
  { icon: ShieldCheck, title: "Protect sensitive information" },
  { icon: MessageSquare, title: "Know when to escalate" },
];
