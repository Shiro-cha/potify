'use client'
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { DASHBOARD, HOME, LOGIN } from "@/constants/routes";
import { NavButton } from "@/components/ui/nav-button";
import PageLoader from "@/components/shared/page-loader";
import WelcomeText from "@/components/home/welcom-text";

import logo from "./favicon.ico";
import SignInButton from "@/components/home/signin-button";
import GoToDashboard from "@/components/home/goto-dashboard-button";
import SwitchAccount from "@/components/home/switch-account";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <PageLoader/>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src={logo}
              alt="Potify Logo"
              width={120}
              height={120}
              className="animate-float"
              priority
            />
          </div>
          
          <WelcomeText username={session?session.user?.name as string :null}/>
        </div>

        <div className="bg-gray-800/20 px-6 py-4 border-t border-white/5 backdrop-blur-lg">
          <div className="grid grid-cols-1 gap-4">
            {!session && (
              <SignInButton/>
            )}

            {session && <GoToDashboard />}

            {session && (
              <SwitchAccount username={session.user?.name as string}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}