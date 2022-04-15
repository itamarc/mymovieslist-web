import { ACCESS_TOKEN } from "../constants";

export default function authHeader() {
    var token = localStorage.getItem(ACCESS_TOKEN);
    if(!token) {
        return {};
    } else {
        return { Authorization: "Bearer " + token };
    }
}
