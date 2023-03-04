export const questionList = [
  {
    questionName: "question_1",
    questionMessage: "Which country is KillJoy from?\n",
    options: ["Russia", "Germany", "USA", "Mexico"],
    ans: "Germany",
  },
  {
    questionName: "question_2",
    questionMessage:
      "What Agent can flash Opponents, even if they are looking away?\n",
    options: ["Yoru", "Reyna", "Breach", "Omen"],
    ans: "Omen",
  },
  {
    questionName: "question_3",
    questionMessage: "What is Viper's real name?\n",
    options: ["Sabine", "Lilly", "Spher", "Lissandra"],
    ans: "Sabine",
  },
  {
    questionName: "question_4",
    questionMessage: "Who is the oldest Valorant agent?\n",
    options: ["Reyna", "Breach", "Harbor", "Brimstone"],
    ans: "Brimstone",
  },
  {
    questionName: "question_5",
    questionMessage:
      'Which Agent says: "We have one job. Save the Earth. No Excuses."?\n',
    options: ["Kay/o", "Raze", "Neon", "Phoenix"],
    ans: "Kay/o",
  },
  {
    questionName: "question_6",
    questionMessage: "When was the Deathmatch mode introduced?\n",
    options: ["2019", "2020", "2021", "2022"],
    ans: "2020",
  },
  {
    questionName: "question_7",
    questionMessage: "What is Chamber's real name?\n",
    options: [
      "Pierre Gasly",
      "Vincent Fabron",
      "Charles Le Clerc",
      "Jean Luc Picard",
    ],
    ans: "Vincent Fabron",
  },
  {
    questionName: "question_8",
    questionMessage: "How much damage, each blast of Sova's Ultimate does?\n",
    options: ["70", "80", "90", "100"],
    ans: "80",
  },
  {
    questionName: "question_9",
    questionMessage: "Which agent is from Turkey?\n",
    options: ["Reyna", "Fade", "Raze", "Neon"],
    ans: "Fade",
  },
  {
    questionName: "question_10",
    questionMessage:
      "Which Agent alludes to having a family who they have at some point lost?\n",
    options: ["Reyna", "Sova", "Viper", "Cypher"],
    ans: "Cypher",
  },
];

export interface iQuestionList {
  questionName: string;
  questionMessage: string;
  options: string[];
  ans: string;
}
