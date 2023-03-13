export type LoginCredentials = {
  userName: string;
  password: string;
};

export type AuthContextData = {
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
};
