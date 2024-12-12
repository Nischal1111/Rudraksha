export interface AuthResponse {
  jwt: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}