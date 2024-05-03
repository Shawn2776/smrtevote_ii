"use client";
import { SignIn, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    <div className="flex items-center justify-between w-full h-20 mx-auto max-w-7xl">
      <div>welcome to Clerk</div>
      <div>
        <SignIn />
      </div>
    </div>;
  }

  return (
    <div className="flex items-center justify-between w-full h-20 mx-auto max-w-7xl">
      <div>Hello, {user?.firstName} welcome to Clerk</div>
      <div>
        <UserButton />
        <a href="/sign-in">Sign In</a>
      </div>
    </div>
  );
}
