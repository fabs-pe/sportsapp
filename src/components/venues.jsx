import React, { useState } from 'react';

const Stadiums = () => {
    const [field, setField] = useState([]); // State to hold venues data
    const [loading, setLoading] = useState(false); // Loading state
    const [venue, setVenue] = useState(""); // Controlled input for venue

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true); // Start loading before fetching
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchvenues.php?t=${venue}`);
            const data = await response.json();

            console.log("Fetched data: ", data); // Log API data

            if (data.venues) {
                setField(data.venues); // Set the venues directly without filtering
            } else {
                setField([]); // Clear the state if no venues are found
                console.log("No venues found");
            }
        } catch (error) {
            console.error('Error fetching venues:', error);
            setField([]); // Clear state on error
        }
        setLoading(false); // Stop loading after fetching
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className='mb-7 text-2xl text-center'>Pick a venue to display all with the same name and find the sport it is used for.</h1>

            <form onSubmit={handleSubmit} className="mb-6 flex space-x-4">
                <input
                    type="text"
                    value={venue} // Controlled input value
                    onChange={(e) => setVenue(e.target.value)} // Controlled input handler
                    placeholder="Venue"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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

            {/* Display message when no venues are found */}
            {!loading && field.length === 0 && venue && (
                <p className="text-center text-red-500">No venues found named {venue}.</p>
            )}

            {/* Display search results in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {field.length > 0 && field.map((venue) => (
                    <div
                        key={venue.idVenue} // Unique key
                        className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center"
                    >
                        <h2 className="mb-4 text-2xl text-blue-600">{venue.strVenue ? venue.strVenue : "Venue name not available"}</h2>
                        {venue.strLogo ? (
                            <img className='h-40 objevt-cover rounded-t-lg' src={venue.strLogo} alt={`${venue.strVenue} logo`} />
                        ) :(
                            <p>No badge available</p>
                    
                        )}
                        <p>Sports played: {venue.strSport ? venue.strSport: ""}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Stadiums;
