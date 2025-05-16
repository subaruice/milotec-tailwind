import axios from "axios";

type Params = {
    limit?:number,
    page?: number,
    search?: string
}

export default class PostService {
    static async GetAll(params: Params={}) {
        const {
            limit = 20,
            page = 1,
            search
          } = params;
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/",
            {
                params: {
                    _limit:limit,
                    _page:page,
                    q: search
                },
            }
        );
        return response;
    }
}
