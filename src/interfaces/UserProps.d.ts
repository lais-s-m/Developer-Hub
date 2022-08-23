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
    techs: TechsProps[] | null[];
    works: WorksProps[] | null[];
    avatar_url: string | null;
  };
}

const user: UserProps[] = [{ user: {} }];
