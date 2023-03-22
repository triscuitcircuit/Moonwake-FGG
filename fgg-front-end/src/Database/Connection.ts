// This file establishes the connection with the back end

import axios from "axios";

interface Data {
    [key: string]: any;
}

export class Connection {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }

    public async getPage(page: number): Promise<Data> {
        try {
            const res =
                await axios.get(this.baseURL +
                    "?page=" + page);
            return res.data;
        } catch (error) {
            console.error(error)
            return {}
        }
    }

    public async getById(id: number ): Promise<Data>{
        try {
            const res =
                await axios.get(this.baseURL + "/" + id);
            return res.data;
        } catch (error) {
            console.error(error)
            return {}
        }
    }

    public async getData(): Promise<Data> {
        try {
            const res = await axios.get(this.baseURL);
            return res.data;
        } catch (error) {
            console.error(error)
            return {}
        }
    }
}