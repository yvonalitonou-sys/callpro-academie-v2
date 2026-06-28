export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface KPICompareItem {
  item?: string;
  type?: string;
  cas?: string;
  details?: string;
  corriger?: string;
  exemple?: string;
  utilite?: string;
  cab?: string;
}

export interface ObjectionItem {
  objection: string;
  freinType: string;
  remedes: string[];
}

export interface CRMField {
  label: string;
  key: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  options?: string[];
  required: boolean;
  value: string;
}

export interface CRMScenario {
  scenario: string;
  fields: CRMField[];
  expectedKeywords?: { key: string; keywords: string[]; hint: string }[];
}

export interface DialogueExample {
  title: string;
  badText: string;
  goodText: string;
}

export interface ScriptExample {
  title: string;
  context: string;
  dialogue: { speaker: string; text: string; comment: string }[];
}

export interface TrainingModule {
  id: number;
  title: string;
  duration: string;
  description: string;
  coursText: string;
  extraHTMLTable?: KPICompareItem[] | any; // Specific structured content
  objectionsList?: ObjectionItem[];
  dialoguesList?: DialogueExample[];
  scriptsList?: ScriptExample[];
  crmFields?: CRMField[];
  crmScenarios?: CRMScenario[];
  questionsRHList?: { question: string; answer: string; criteria?: string }[];
  retractionText: string; // "À retenir"
  quiz: QuizQuestion[];
}

export interface UserProgressList {
  [moduleId: number]: {
    completed: boolean;
    quizScore: number;
    quizDone: boolean;
  };
}

export interface WrittenNote {
  [moduleId: number]: string;
  }
