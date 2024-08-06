import React, {useEffect, useState } from 'react'
import { getLeagues } from '../services/sportsService'

const Leagues = ()=> {
    const [leagues, setLeagues]= useState([]);

    useEffect(() =>{
        const fetchLeagues = async () =>{
            try{
                const leaguesData = await getLeagues();
                setLeagues(leaguesData);
            }catch(error) {
                console.error('Error fetching leagues', error);
            }
        };

        fetchLeagues();
    
    }, []);

    return (
        <div>
            <h1>Leagues</h1>
            <ul>
                {leagues.map((league)=>(
                    <li key={league.idLeague}>{league.strLeague}
                    ~{league.strSport}
                    </li>
                    
                ))}
            </ul>
        </div>
    );

};

export default Leagues;