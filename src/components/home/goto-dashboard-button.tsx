import { DASHBOARD } from "@/constants/routes";
import { NavButton } from "../ui/nav-button";


export default function GoToDashboard(){
    return(
      <>
        <NavButton 
                      href={DASHBOARD}
                      className="w-full bg-gray-800/20 hover:bg-gray-800/30 border border-white/10 backdrop-blur-md 
                                text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 
                                hover:shadow-md hover:shadow-gray-500/10 hover:ring-2 hover:ring-gray-500/30
                                inline-flex items-center justify-center gap-3"
                      
                    >
                      <svg 
                        className="w-5 h-5 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-base">
                        Continue to Dashboard
                      </span>
                    </NavButton>
      </>
    )
}