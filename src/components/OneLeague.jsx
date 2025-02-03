import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeams } from "../services/sportsService";

const OneLeague = () => {
    const { strLeague } = useParams();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const teamsData = await getTeams(strLeague); // Pass strLeague as an argument
                setTeams(teamsData);
            } catch (error) {
                console.error("Error fetching teams", error);
            }
        };

        if (strLeague) {
            fetchTeams();
        }
    }, [strLeague]); // Depend on strLeague

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{strLeague}</h2>
    
            <div className="grid grid-cols-1 gap-4">
                {teams.length > 0 ? (
                    teams.map((team) => (
                        <div 
                            key={team.idTeam} 
                            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md"
                        >
                            {/* Image on the Left */}
                            <img 
                                className="w-32 h-32 object-cover rounded-lg" 
                                src={team.strBadge} 
                                alt={team.strTeam} 
                            />
    
                            {/* Text Content */}
                            <div className="flex-1">
                                {/* Team Name */}
                                <h4 className="text-xl font-semibold mb-2">{team.strTeam}</h4>
    
                                {/* Team Description */}
                                <p className="text-gray-700">{team.strDescriptionEN || "No description available."}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-red-500">No teams found for this league.</p>
                )}
            </div>
        </div>
    );
    
};

export default OneLeague;
