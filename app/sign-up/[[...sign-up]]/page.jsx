import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen bg-red-500">
      <div>test</div>
      <div className="w-full h-screen flex justify-center align-middle">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
}
