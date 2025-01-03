import Link from "next/link";

// "use client";


// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className=" fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex items-center justify-between px-4 h-45"
    >
      <div className="py-2 text-center text-md ">
        <h1 className="font-bold">Ai tecnology Blog</h1>
      </div>
      <nav className="flex gap-7 text-md font-bold m-4">
        <Link href='/' className="hover:text-red-500 ">Home</Link>
        <Link href='/about' className="hover:text-red-500 ">About</Link>
        <Link href='/contact' className="hover:text-red-500 ">Contact</Link>
      </nav>
    </div>
  );
}
