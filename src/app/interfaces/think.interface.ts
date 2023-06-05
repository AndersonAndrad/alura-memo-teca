export interface Thinking {
  id: string;
  content: string;
  model: ModelThinking;
  autor: string;
}

export enum ModelThinking {
  MODEL1 = 'modelo1',
  MODEL2 = 'modelo3',
  MODEL3 = 'modelo2',
  DEFAULT = '',
}
