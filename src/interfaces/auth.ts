export interface Auth {
  email: string;
  name: string;
  role?: 'admin' | 'guest';
  password: string;
}
