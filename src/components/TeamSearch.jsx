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
            console.error('Error Fetching Teams: ', error);
            setTeams([]);
        }
        setLoading(false); //stop loading after fetching
    };

    return(
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="mb-7 text-2xl text-center"> Pick a Team to read about.</h1>

            <form onSubmit={handleSubmit} className="mb-6 flex space-x-4">
                <input
                    type= "text"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    placeholder="Team"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue400"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Search
                </button>   
            </form>
            {/* Loading indicator */}
            {loading && <p className="text-center text-blue-500">Loading...</p>}

            {/* Display message when no team is found */}
            {!loading && teams.length === 0 && team && (
                <p className="text-center text-red-500">No Teams found named {team}.</p>
            )}

            {/* display search results in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teams.length > 0 && teams.map((team) => (
                    <div
                        key = {team.idTeam}
                        className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center"
                    >
                        <h2 className="mb-4 text-2xl text-blue-600">{team.strTeam ? team.strTeam : 'Team name not available'}</h2>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teams;