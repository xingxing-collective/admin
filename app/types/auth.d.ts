declare module '#auth-utils' {
    interface User {
        login?: string,
        id?: number,
        avatar_url?: string,
        url?: string,
        name?: string,
        location?: string,
        email?: string,
        twitter_username?: string,
        created_at?: Date,
        updated_at?: Date
    }
}
export {}