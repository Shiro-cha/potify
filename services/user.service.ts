import { ENDPOINT } from "@/constants/spotify"
import { buildUrl, fetcher } from "@/utils/fetcher"


export const UserService = {
    async getProfile(){
        const uri=buildUrl(ENDPOINT,"/me")
        return await fetcher(uri)
    },

    async getStat(){

    }
    
}