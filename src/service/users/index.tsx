import request from "../config";
import { Request } from "../../interface/user";

const auth: Request = {
    get_users: (params) => request.get("/users", {params}),
    create_user: (data) => request.post("/user", data),
    delete_user: (id) => request.delete(`/user/${id}`),
}

export default auth