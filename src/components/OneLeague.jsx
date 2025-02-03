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
        <div>
            <h2>{strLeague}</h2>
            {teams.length > 0 ? (
                teams.map((team) => (
                    <div key={team.idTeam}>
                        <h4>{team.strTeam}</h4>
                        <img className="h-32 object-cover rounded-t-m" src={team.strBadge} alt={team.strTeam} />
                    </div>
                ))
            ) : (
                <p>No teams found for this league.</p>
            )}
        </div>
    );
};

export default OneLeague;
