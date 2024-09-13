import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-24 flex items-center justify-between">
        {/* LEFT */}
        <div className="md:hidden lg:block w-[20%]">
          <Link href="/" className="font-bold text-xl text-blue-600">
            LINVRSOCIAL
          </Link>
        </div>
        {/* CENTER */}
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
          {/* LINKS */}
          <div className="flex gap-6 text-gray-600">
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/home.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>HOME</span>
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/friends.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>FRIENDS</span>
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/stories.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>STORIES</span>
            </Link>
          </div>
          <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
            <input
              type="search"
              placeholder="search..."
              className="bg-transparent outline-none"
            />
            <Image src="/search.png" alt="search" width={14} height={14} />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
          <ClerkLoading>
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/people.png" alt="people" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/messages.png"
                  alt="messages"
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/notifications.png"
                  alt="notifications"
                  width={20}
                  height={20}
                />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2 text-sm">
                <Image
                  src="/noAvatar.png"
                  alt="avatar"
                  width={20}
                  height={20}
                />
                <Link href="/sign-in">Login/Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
