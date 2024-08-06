import React, {useEffect, useState } from 'react'
import { getSports } from '../services/sportsService'

const Sports = ()=> {
    const [sports, setSports]= useState([]);

    useEffect(() =>{
        const fetchSports = async () =>{
            try{
                const sportsData = await getSports();
                setSports(sportsData);
            }catch(error) {
                console.error('Error fetching leagues', error);
            }
        };

        fetchSports();
    
    }, []);

    return (
        <div>
            <h1>Sports</h1>
            <ul>
                {sports.map((sport)=>(
                    <li key={sport.idSport}>{sport.strSport}
                    
                    </li>
                    
                ))}
            </ul>
        </div>
    );

};

export default Sports;