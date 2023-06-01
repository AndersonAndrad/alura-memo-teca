export interface Think {
  id: string;
  content: string;
  model: ModelThink;
  autor: string;
}

export enum ModelThink {
  MODEL1 = 'modelo1',
  MODEL2 = 'modelo3',
  MODEL3 = 'modelo2',
  DEFAULT = '',
}
