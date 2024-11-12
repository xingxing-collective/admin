export default defineNuxtRouteMiddleware((to, _from) => {
    const { user } = useAuth()
    const excludePath = ['/signin', '/signup'];

    if (!user.value?.email && !excludePath.includes(to.path)) {
        return navigateTo('/signin')
    }
})
