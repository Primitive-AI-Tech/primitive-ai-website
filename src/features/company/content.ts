type Milestone = {
  title: string;
  text: string;
  year?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
};

export const journey: Milestone[] = [
  {
    year: "2023",
    title: "Primitive AI is founded",
    text: "Primitive AI is founded to turn practical AI experience into useful solutions for organizations.",
  },
  {
    title: "VisionHub",
    text: "Early computer-vision work applies AI to real settings where people need better visibility into operations.",
    image: {
      src: "/vision-hub.png",
      alt: "Factory production line with computer vision detection markers.",
      caption: "Computer vision in an operating environment",
      width: 692,
      height: 494,
    },
  },
  {
    title: "SupportHub",
    text: "Customer-facing language models raise a central question: how can teams get useful, consistent responses they can trust?",
  },
  {
    title: "KnowledgeHub",
    text: "Work with knowledge and memory explores how an AI system can use relevant organizational information as part of a task.",
  },
  {
    title: "Custom AI development",
    text: "Custom AI work connects models and software to the specific workflows, information and constraints of each project.",
  },
  {
    title: "LegalHub, FamilyHub and EduAssess",
    text: "Distinct product experiences extend the team's work across documents, family knowledge and English assessment.",
  },
  {
    title: "Core Agentic",
    text: "The platform brings knowledge, agents, tools and review together so organizations can shape AI around their work.",
  },
];

export const companyValues = [
  {
    icon: "chat",
    title: "Customer First",
    text: "Start with a real need and shape the work around the people who will use the result.",
  },
  {
    icon: "deliver",
    title: "Excellence",
    text: "Take care with the quality of the product, engineering and collaboration.",
  },
  {
    icon: "plan",
    title: "Innovation",
    text: "Explore new approaches when they can make a practical difference.",
  },
  {
    icon: "approval",
    title: "Responsibility",
    text: "Build with clear boundaries, thoughtful review and respect for the people affected.",
  },
];
