const headCheckBox = {
  analyst: true,
  author: false,
  doi: false,
  participants: false,
  researchQuestion: true,
  researchResult: false,
  seMethod: true,
  seMethodology: true,
  title: true,
  type: false,
  year: true,
};

const field = [
  {
    id: 0,
    name: "Select Category",
  },
  {
    id: 1,
    name: "Author",
  },
  {
    id: 2,
    name: "DOI",
  },
  {
    id: 3,
    name: "SE Method",
    option: [
      { name: "BDD", value: "BDD" },
      { name: "Burn down charts", value: "Burn down charts" },
      { name: "Code sharing", value: "Code sharing" },
      { name: "Continuous integration", value: "Continuous integration" },
      { name: "Daily standup", value: "Daily standup" },
      { name: "Meeting", value: "Meeting" },
      { name: "Pair programming", value: "Pair programming" },
      { name: "Planning poker", value: "Planning poker" },
      {
        name: "Requirements prioritisation",
        value: "Requirements prioritisation",
      },
      { name: "Restrospectives", value: "Restrospectives" },
      { name: "Storyboards", value: "Storyboards" },
      { name: "TDD", value: "TDD" },
      { name: "User story mapping", value: "User story mapping" },
      { name: "Version control", value: "Version control" },
    ],
  },
  {
    id: 4,
    name: "SE Methodology",
    option: [
      { name: "Agile", value: "Agile" },
      {
        name: "Aspect Oriented Development",
        value: "Aspect Oriented Development",
      },
      { name: "Clean Room", value: "Clean Room" },
      { name: "Cloud computing", value: "Cloud computing" },
      { name: "Crystal", value: "Crystal" },
      {
        name: "Domain Driven Development",
        value: "Domain Driven Development",
      },
      {
        name: "Feature Driven Development",
        value: "Feature Driven Development",
      },
      { name: "Formal methods", value: "Formal methods" },
      {
        name: "Model Driven Development",
        value: "Model Driven Development",
      },
      {
        name: "Problem Driven Development",
        value: "Problem Driven Development",
      },
      {
        name: "Product Driven Development",
        value: "Product Driven Development",
      },
      { name: "Scrum", value: "Scrum" },
      {
        name: "Service Oriented Development",
        value: "Service Oriented Development",
      },
      {
        name: "Spiral Rational Unified Process",
        value: "Spiral Rational Unified Process",
      },
      {
        name: "Values Driven Development",
        value: "Values Driven Development",
      },
      { name: "Waterfall", value: "Waterfall" },
      { name: "XP", value: "XP" },
    ],
  },
  {
    id: 5,
    name: "Title",
  },
  {
    id: 6,
    name: "Type",
    option: [
      { name: "Article", value: "Article" },
      { name: "Book", value: "Book" },
      { name: "Master thesis", value: "Master thesis" },
      { name: "Misc", value: "Misc" },
      { name: "Phd thesis", value: "Phd thesis" },
      { name: "Conference", value: "Conference" },
      { name: "Journal", value: "Journal" },
    ],
  },
];

export { headCheckBox, field };
