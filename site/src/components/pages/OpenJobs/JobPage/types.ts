interface SocialLinks extends Record<string, string> {}

export interface ApplicationData extends SocialLinks {
    name: string
    surname: string
    email: string
}