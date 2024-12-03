export type User = {
  name: string;
  username: string;
  id: string;
};
export type Post = { title: string; body: string; user: User };
