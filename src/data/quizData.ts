export interface quizProps {
  name: string;
  type: string;
  image: string;
  gameId: string | number;
}
export const quizData: quizProps[] = [
  {
    name: "Heart Anatomy and Function",
    type: "Multiple Choice Quiz",
    image: "/images/HeartAnatomyFunction.jpg",
    gameId: "123sdsd",
  },
  {
    name: "Hypertension Facts",
    type: "True or False Quiz",
    image: "/images/HypertensionFacts.jpg",
    gameId: "sdsd343s",
  },
  {
    name: "Risk Factors and Complications",
    type: "Fill-in-the-Blank Quiz",
    image: "/images/RiskFactorsComplications.jpg",
    gameId: "s23dsdsd",
  },
  {
    name: "Treatment and Prevention Strategies",
    type: "Matching Quiz",
    image: "/images/PreventHighBloodPressure_share.jpg",
    gameId: "23sdsd23",
  },
];

export interface optionsProps {
  name: string;
  type: string;
  isSelected?: boolean;
  isAnswer?:boolean
}
export interface questionsProps {
  question: string;
  options: optionsProps[];
}
export interface quizBody {
  quiz: quizProps;
  questions: questionsProps[];
}
