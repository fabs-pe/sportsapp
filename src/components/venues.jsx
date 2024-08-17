import React, { useState } from 'react'

const Stadiums = () =>{
    const [loading, setLoading] = useState(false);
    const [venue, setVenue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true); //Start loading before fetching
        try{
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchvenues.php?t=${venue}`);
            const data = await response.json();

            console.log("Fetched data: ", data); // Log API data

            if (data.venues){
                const filteredVenues = data.venues.filter((stadium)=>
                    stadium.strVenue.toLowerCase()=== venue.toLocaleLowerCase()
            );
                    setVenue(filteredVenues); //set filtered venues
            } else {
                setVenue([]);
                console.log("No Venues found");
            } 
        } catch(error) {
            console.error('Error fetching venues:', error);
            setVenue([]); //clear state on error
        }
        setLoading(false); //stop loading after fetching
        };
    
        return(
            <div>

            </div>
        )
    
};

export default Stadiums;