export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  objective: string;
  process: string;
  result: string;
  clientType: string;
}

export interface Tool {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  category: 'core' | 'design' | 'prototyping';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}
