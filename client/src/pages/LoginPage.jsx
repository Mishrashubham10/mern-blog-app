import { SignIn } from '@clerk/clerk-react';

export default function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
}