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
            <h2 className='mb-4 text-4xl font-extrabold text-black-900 md:text-5xl lg:text-6xl'>Leagues</h2>
            <div className='grid grid-cols-5 gap-2'>
                {leagues.filter((league) => league.strSport === "Soccer") 
            .map((league)  => (
                    <div key={league.idLeague} className='bg-gray shadow-lg rounded p-2'>
                    <a className='w-full h-32 object-cover rounded-t-m' href={`/OneLeague/${league.strLeague}`} src={league.strLeague}>{league.strLeague}</a>
        
                    </div>
                    
                ))}
            </div>
        </div>
    );

};

export default Leagues;
