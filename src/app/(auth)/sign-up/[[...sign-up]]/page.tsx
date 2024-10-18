import { ClerkLoaded, ClerkLoading, SignIn, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center h-screen'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <div className='text-center space-y-4 pt-16'>
          <h1 className='font-bold text-3xl text-gray-800'>Welcome Back!</h1>
          <p className='text-base text-gray-600'>
            Login or Create an account to get started
          </p>
        </div>
        <div className='flex items-center justify-center mt-8'>
          <ClerkLoaded>
            <SignUp path='/sign-up' />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 size={32} className='animate-spin text-muted-foreground' />
          </ClerkLoading>
        </div>
      </div>
      <div className='hidden md:flex lg:flex justify-center items-center'>
        <Image
          src='/logomakerapp.png'
          alt='project management logo'
          className='object-cover rounded-full'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
