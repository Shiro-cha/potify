import { LOGIN } from "@/constants/routes";
import Link from "next/link";

type PropsType ={
    username:string | null
}
export default function SwitchAccount({username}:PropsType){
    return(
      <>
        <div className="text-center pt-4">
        <Link 
            href={LOGIN}
            className="text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
        >
            Not {username}? Switch account
        </Link>
        </div>
      </>
    )
}