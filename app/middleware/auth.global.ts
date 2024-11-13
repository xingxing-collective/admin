export default defineNuxtRouteMiddleware((to, _from) => {
    const { loggedIn } = useUserSession()
    const excludePath = ['/signin', '/signup', '/signin/email'];

    if (!loggedIn.value && !excludePath.includes(to.path)) {
        return navigateTo('/signin')
    }
})
