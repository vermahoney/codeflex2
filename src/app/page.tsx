"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";

const HomePage = () => {
  const { isSignedIn } = useAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-4xl font-bold">HomePage</h1>
      <p className="text-lg text-slate-300">
        {isSignedIn ? "You are signed in." : "Please sign in to continue."}
      </p>
      {isSignedIn ? (
        <SignOutButton>
          <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Sign out
          </button>
        </SignOutButton>
      ) : (
        <SignInButton>
          <button className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Sign in
          </button>
        </SignInButton>
      )}
    </main>
  );
};

export default HomePage;
