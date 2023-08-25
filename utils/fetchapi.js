import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9bba6ee130msh589672b9853675ap1e04bfjsnd67d547a9b45',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}