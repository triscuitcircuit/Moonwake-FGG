import axios from "axios";

interface Data {
    [key: string]: any;
}

export class Connection{
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }
    public async getData(): Promise<Data>{
        try {
            const res = await axios.get(this.baseURL);
            return res.data;
        }catch(error){
            console.error(error)
            return {}
        }
    }
}