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
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">Countries</h2>
        <div className="grid grid-cols-8 gap-4">
          {countries.map((country) => (
            <div key={country.name_en} className="bg-white shadow-lg rounded-lg p-4">
              <img className="w-full h-32 object-cover rounded-t-lg" src={country.flag_url_32} alt={`${country.name_en} flag`} />
              <div className="mt-2 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{country.name_en}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Countries;
