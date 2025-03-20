import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="text-2xl font-bold">
        Todo Application
      </div>

      <div className="mt-4 flex flex-col">
        <Link className="border p-1 rounded mb-2" href="/signin">Sign in to Todo app</Link>
        <Link className="border p-1 rounded" href="/signup">Sign up to Todo app</Link>
      </div>
    </div>
  );
}
