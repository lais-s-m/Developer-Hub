export interface TechsProps {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface WorksProps {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

export interface UserProps {
  user: {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    created_at: string;
    updated_at: string;
    techs: TechsProps[];
    works: WorksProps[];
    avatar_url: string | null;
  };
}

export interface ITech {
  title?: string;
  status?: string;
}

export interface IEditTechSubmit {
  status?: string;
}
