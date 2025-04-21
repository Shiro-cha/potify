
export default function UserStats(){
    return(
      <>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-2xl font-bold text-white mb-1">1,234</p>
            <p className="text-sm text-gray-400">Minutes Listened</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-2xl font-bold text-white mb-1">567</p>
            <p className="text-sm text-gray-400">Liked Songs</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-2xl font-bold text-white mb-1">89</p>
            <p className="text-sm text-gray-400">Following</p>
          </div>
        </div>
      </>
    )
}