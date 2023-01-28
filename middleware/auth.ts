export default defineNuxtRouteMiddleware(async (to) =>{
    const user = useSupabaseUser()
    
        
    if(!user.value && to.path == "/about"){
        navigateTo("/")
    }
    else if (user.value && to.path == "/"){
        navigateTo("/about")
    }
})