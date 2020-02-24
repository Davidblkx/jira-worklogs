import { JiraSprint, JiraUser } from '../../jira';

export interface MainState {
  server: string;
  user: string;
  token: string;
  projects: string[];
  users: JiraUser[];
  sprints: JiraSprint[];
}

export interface MainStateCollection {
  [key: string]: MainState | undefined;
}
