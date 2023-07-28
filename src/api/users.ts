import axios, { AxiosResponse, AxiosError } from "axios";
import { getUserByIdUrl, GitHubUser } from "../constants/api";

export const getUserById = async (login: string, order: string): Promise<GitHubUser[]> => {

    const list = await axios.get(getUserByIdUrl, {
        params: {
            q: login,
            sort: 'repositories',
            order: order,
            per_page: 100,
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
