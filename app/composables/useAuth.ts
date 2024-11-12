
type User = {
    name?: string
    avatar?: string
    email?: string
    password?: string
}
const _useAuth = () => {
    const user = ref<User>()
    const router = useRouter()

    function signin(u: User) {
        user.value = u
        router.push('/')
    }

    function signup(u: User) {
        user.value = u
        router.push('/signin')
    }

    function signout() {
        user.value = undefined
        router.push('/signin')
    }

    return {
        user,
        signin,
        signup,
        signout
    }
}

export const useAuth = createSharedComposable(_useAuth)