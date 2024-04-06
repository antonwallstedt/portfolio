import { Metadata } from "next";
import LoginForm from "../ui/loginForm";
import AntonLogo from "../ui/antonLogo";

export const metadata: Metadata = {
  title: "Login",
};

export default function AdminPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-16 w-full items-end rounded-lg from-blue-400 to-blue-500 bg-gradient-to-tr p-3 md:h-16">
          <div className="w-32 text-white md:w-36">
            <AntonLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
