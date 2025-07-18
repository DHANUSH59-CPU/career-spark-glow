import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-gray-800 dark:bg-white p-6 rounded-lg shadow-xl",
          },
        }}
      />
    </div>
  );
}
