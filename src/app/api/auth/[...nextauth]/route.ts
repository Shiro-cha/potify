// app/api/auth/[...nextauth]/route.ts

import authOptions from "./authOptions";



const handler = authOptions

export { handler as GET, handler as POST };
