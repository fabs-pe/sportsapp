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
                {leagues.map((league)=>(
                    <div key={league.idLeague} className='bg-gray shadow-lg rounded p-2'>
                    <img className='w-full h-32 object-cover rounded-t-m' src={league.strLogo} alt="" />
        
                    </div>
                    
                ))}
            </div>
        </div>
    );

};

export default Leagues;
