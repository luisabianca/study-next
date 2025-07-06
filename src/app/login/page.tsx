import LoginPage from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login',
  description: 'A page Login the site'
}

export default function Login() {
  return (
    <main>
      <h1>Login</h1>
      <LoginPage />
    </main>
  );
}
