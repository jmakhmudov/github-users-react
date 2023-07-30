import axios, { AxiosResponse, AxiosError } from "axios";
import { getUserByIdUrl, GitHubUser, getReposUrl } from "../constants/api";


const axiosInstance = axios.create({
    headers: {
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
    }
})


export const getUserById = async (login: string, order: string): Promise<GitHubUser[]> => {

    const list = await axiosInstance.get(getUserByIdUrl, {
        params: {
            q: login,
            sort: 'repositories',
            order: order,
            per_page: 100,
        }
    })
        .then((response: AxiosResponse) => {
            const { items } = response.data;
            return items;
        })
        .catch((error: AxiosError) => {
            console.log("Error in getting users: " + error);
        });

    return list;
}

export const getNumberRepos = async (login: string) => {
    const repos = await axiosInstance.get(getReposUrl + `${login}/repos`, {
        params: {
            per_page: 100
        }
    })
        .then((response: AxiosResponse) => {
            const { data } = response;
            return data;
        })
        .catch((error: AxiosError) => {
            console.log("Error in getting users: " + error);
        });

    return repos;
}
