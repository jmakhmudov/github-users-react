import axios, { AxiosResponse, AxiosError } from "axios";
import { getUserByIdUrl, GitHubUser, getReposUrl } from "../constants/api";

const axiosInstance = axios.create({
    headers: {
      Authorization: `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`,
    },
  });

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
            console.log(data)
            return data;
        })
        .catch((error: AxiosError) => {
            console.log("Error in getting users: " + error);
        });

    return repos;
}
