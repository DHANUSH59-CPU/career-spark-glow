import { UserProfile } from "@clerk/clerk-react";

export default function UserProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <UserProfile
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white dark:bg-gray-800 shadow-xl",
          },
        }}
      />
    </div>
  );
}
