export interface ContentSection {
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  magnification: string;
  locations: string[];
  diagnosisTip: string;
  microscopeNote: string;
  imageUrl: string;
  sections?: ContentSection[];
  professorNote?: string;
}

export enum GeminiMode {
  ANALYZE = 'analyze',
  EDIT = 'edit',
  GENERATE = 'generate',
  ASK = 'ask'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string;
  isThinking?: boolean;
}