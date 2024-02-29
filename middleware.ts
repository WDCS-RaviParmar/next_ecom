import { NextRequest } from "next/server"

const middleware = (request: NextRequest) => {
    const currentUser:any = request.cookies.get("currentUser")?.value
    let parseCurrentUser = undefined 
    if(currentUser){
        parseCurrentUser = JSON.parse(currentUser)
    }
    if(parseCurrentUser?.role != "admin" && request.nextUrl.pathname.startsWith('/admin')){
        return Response.redirect(new URL('/restricted-user', request.url))
    }
    
}

export const config = {matcher: ["/admin/:path*"]}

export default middleware
