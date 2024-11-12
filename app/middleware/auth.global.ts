export default defineNuxtRouteMiddleware((to, _from) => {
    const { user } = useAuth()
    if (!user.value?.email && to.path !== '/signin') {
        return navigateTo('/signin')
    }
})
