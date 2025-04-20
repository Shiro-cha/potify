import { DASHBOARD, HOME, LOGIN } from "@/constants/routes";
import Link from "next/link";
import { NavButton } from "@/components/ui/nav-button";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card">
      <h1 className="text-3xl font-bold text-white-800">
        Welcome to the <span className="text-green-500">Potify</span>!
      </h1>
      

    <div className="inline-flex rounded-md  shadow-xs" role="group">
      <NavButton href={LOGIN} tag="left">
        Login
      </NavButton>
      <NavButton href={DASHBOARD} tag="center">
        Dashboard
      </NavButton>
      <NavButton href={HOME} tag="right">
        Back to home
      </NavButton>
    </div>

      </div>
    </div>
  );
}
