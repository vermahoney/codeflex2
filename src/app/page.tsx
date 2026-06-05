"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";

const HomePage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      HomePage

      {isSignedIn ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default HomePage;
