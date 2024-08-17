import React, { useState } from 'react';

const Flags = () => {
    const [clubs, setClubs] = useState([]); // State to hold leagues data
    const [nation, setNation] = useState(""); // Controlled input for the country
    const [loading, setLoading] = useState(false); // Loading state

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        setLoading(true); // Start loading before fetching
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${nation}&s=soccer`);
            const data = await response.json();

            console.log("Fetched data: ", data); // Log the raw API response

            if (data.countries) {
                // Filter leagues based on the country input
                const filteredLeagues = data.countries.filter((league) =>
                    league.strCountry.toLowerCase() === nation.toLowerCase()
                );
                console.log("Filtered leagues: ", filteredLeagues); // Log the filtered leagues
                setClubs(filteredLeagues); // Set filtered leagues to the state
            } else {
                console.log("No leagues found"); // Log if no leagues are found
                setClubs([]); // Clear state if no leagues are found
            }
        } catch (error) {
            console.error('Error fetching leagues:', error);
            setClubs([]); // Clear state on error
        }
        setLoading(false); // Stop loading after fetching
        };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="mb-6 flex space-x-4">
                <input
                    type="text"
                    value={nation} // Controlled input value
                    onChange={(e) => setNation(e.target.value)} // Controlled input handler
                    placeholder="Country"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Search
                </button>
            </form>

            {/* Display loading indicator */}
            {loading && <p className="text-center text-blue-500">Loading...</p>}

            {/* Display message when no leagues are found */}
            {!loading && clubs.length === 0 && nation && (
                <p className="text-center text-red-500">No leagues found for {nation}.</p>
            )}

            {/* Display the leagues in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {clubs.length > 0 && clubs.map((club) => (
                    <div
                        key={club.idLeague} // Ensure unique key
                        className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center"
                    >
                        {club.strBadge ? (
                            <img className="h-40 object-cover rounded-t-lg" src={club.strBadge} alt={`${club.strLeague} logo`} />
                        ) : (
                            <p>No badge available</p>
                        )}
                        <p className="mt-2">{club.strLeague ? club.strLeague : "League name not available"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Flags;
