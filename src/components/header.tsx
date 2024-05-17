import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex gap-2 justify-center items-center">
        <Image src="/logomakerapp.png" alt="logo" width={64} height={64} />
        <h1 className="font-bold">LOGGO MAKER</h1>
      </div>
      <div className="flex items-center justify-between gap-6">
        <ModeToggle />
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="sm">Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
