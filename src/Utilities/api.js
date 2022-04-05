import axios from "axios";

let baseURL = "http://localhost:7000/voxturba/";
if (process.env.NODE_ENV === "production") {
    baseURL = "https://vox-express.herokuapp.com/voxturba/";
    // baseURL = "https://express.voxturba.com/voxturba/"

}

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});


export const getReviews = async () => {
    return await axiosInstance
        .post(`get_client_reviews/`, {
            visit_details: {
                visitor_id: localStorage.getItem("visitor_id"),
                request_url: window.location.href,
            },
        })
        .then((response) => {
            // console.log(response.data);
            localStorage.setItem(
                "visitor_id",
                response.data["visit_details"]["visitor_id"]
            );
            localStorage.setItem(
                "visit_id",
                response.data["visit_id"]
            );

            return (response.data);
        })
        .catch((error) => console.error(error));
}


