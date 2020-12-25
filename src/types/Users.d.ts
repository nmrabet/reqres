export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: Url;

  support: {
    url: Url;
    text: string;
  };
}
