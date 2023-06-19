export interface User {
  id: number;
  email: string;
  password: string;
}

const data: User[] = [];

export const AddUser = (user: User) => {
  data.push(user);
};

export const FindUser = (user: User): User | undefined => {
  const searchedUser = data.find((u) => u.email === user.email);

  return searchedUser;
};
