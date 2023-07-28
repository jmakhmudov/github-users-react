import axios, { AxiosResponse, AxiosError } from "axios";
import { getUserByIdUrl, GitHubUser } from "../constants/api";

export const getUserById = async (login: string): Promise<GitHubUser[]> => {

    const list = await axios.get(getUserByIdUrl, {
        params: {
            q: login
        }
    })
        .then((response: AxiosResponse) => {
            const { items } = response.data;
            console.log(items)
            return items;
        })
        .catch((error: AxiosError) => {
            console.log("Error in getting users: " + error);
        });

    return list;
}
