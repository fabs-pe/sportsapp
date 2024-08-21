import React, { useState } from "react"


const Teams = () => {
    const [loading, setLoading] = useState(false);
    const [teams, setTeams] =useState([]); //State to hold team data
    const [team, setTeam] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setLoading(true);
        try{
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${team}`);
            const data = await response.json()

            console.log ("Fetched data:", data); //Log API data

            if (data.teamData){
                setTeams(data.teamData);
            } else {
                setTeams([]);
                console.log("No Teams Found");
            }

        } catch (error) {
            console.error('Error Fetchinf Teams: ', error);
            setTeam([]);
        }
        setLoading(false); //stop loading after fetching
    };

    return(
        <div className="p-6 max-w-6xl mx-auto">
            
        </div>
    )
}