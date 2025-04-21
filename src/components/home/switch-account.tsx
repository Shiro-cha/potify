import { LOGIN } from "@/constants/routes";
import { NavButton } from "../ui/nav-button";
import { signIn } from "next-auth/react";

type PropsType ={
    username:string | null
}
export default function SwitchAccount({username}:PropsType){
    return(
      <>
        <div className="text-center pt-4">
        <button 
            onClick={() => signIn('spotify')}
            className="text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
        >
            Not {username}? Switch account
        </button>
        </div>
      </>
    )
}