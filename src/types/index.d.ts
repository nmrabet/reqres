import { Url } from "url";

export interface AllUsers {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ListUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
    url: string;
    text: string;
  };
}

