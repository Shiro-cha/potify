

type PropsType ={
    username:string | null
}
export default function WelcomeText({username=null}:PropsType){
    return(
      <>
        <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to <span className="text-green-400">Potify</span>
          </h1>
          <p className="text-gray-300 mb-8">
            {username ? `Welcome back, ${username}` : 'Discover your perfect music experience'}
          </p>
      </>
    )
}