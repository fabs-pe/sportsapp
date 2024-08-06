import React, {useEffect, useState } from 'react'
import { getCountries } from '../services/sportsService'

const Countries = ()=>{
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        const fetchCountries = async () =>{
            try{
                const countriesData = await getCountries();
                setCountries(countriesData);
            }catch(error){
                console.error('Error fetching countries', error);
            }
        };

        fetchCountries();
    }, []);

    return(
        <div>
            <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Countries</h2>
            <ul>
                {countries.map((country) =>(
                    <li key={country.name_en}>
                    <img src={country.flag_url_32} alt={`${country.name_en} flag`} />
                    {country.name_en}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
