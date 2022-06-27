export type RegisterPaylod = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  email: string;
  username: string;
  id: number;
};

export type ActivatePayload = {
  isActivated: boolean;
};

export type LoginPayload = Omit<RegisterPaylod, "username">;

export type LoginResponse = {
  access: string;
  refresh: string;
};

export type RefreshResponse = {
  access: string;
};
