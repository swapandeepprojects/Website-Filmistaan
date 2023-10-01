import axios from "axios";



// website  from which data through apitoken  is being fetched.
const fetching_URL ="https://api.themoviedb.org/3";  

const movie_Token =import.meta.env.VITE_APP_MOVIEBOX;

const headers ={
    Authorization:"bearer " + movie_Token,
}

export const fetchDataFromApi = async (url,params) => {
    try {
        const {data} =await axios.get(fetching_URL + url,{
                                        headers,
                                        params,
        })
        return data;
        
    } catch (error) {
        console.log(error);
        return error;
        
    }
}
