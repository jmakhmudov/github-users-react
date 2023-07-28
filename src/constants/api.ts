export const getUserByIdUrl = 'https://api.github.com/search/users';

export interface GitHubUser {
    id: number,
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string
}
