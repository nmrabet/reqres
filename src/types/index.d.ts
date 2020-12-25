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

interface AllResources {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

interface ListResourcesResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [];
  support: {
    url: string;
    text: string;
  };
}
