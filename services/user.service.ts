export const UserService = {
    async getProfile(){
        return await fetch("/profile")
    }
}