import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center">
      <SignUp signInUrl="/login" />
    </div>
  );
}