"use client";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="w-full flex justify-between max-w-7xl mx-auto h-20 items-center">
      <div>Hello, {user.firstName} welcome to Clerk</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
