export type RegisterPaylod = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponce = {
  email: string;
  username: string;
  id: number;
};
