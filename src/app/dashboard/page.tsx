import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-4xl flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="mx-auto max-w-4xl mt-10 text-sm text-black/70">
        You are signed in.
      </div>
    </div>
  );
}
