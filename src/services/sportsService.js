import axios from 'axios'

const API_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export const getLeagues = async () => {
    try{
        const response = await axios.get(`${API_URL}/all_leagues.php`);
        return response.data.leagues;

    }catch (error){
        console.error("Error fetching leagues", error);
        throw error;
    }
};

export const getCountries = async () =>{
    try{
        const response = await axios.get(`${API_URL}/all_countries.php`);
        return response.data.countries;
    }catch(error){
        console.error("Error fetching countries", error);
        throw error;
    }
};

export const getSports = async () => {
    try{
        const response = await axios.get(`${API_URL}/all_sports.php`);
        return response.data.countries;
    }catch(error){
        console.error("Error fetching Sports", error);
        throw error;
    }
};
