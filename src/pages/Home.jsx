import React from 'react';
import '../App.css';



const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24">
        <h1 className='text-black-900 md:text-8xl lg:text-6xl text-center'>Sports</h1>
        <p className='w-4/6 antialiased align-middle text-center pt-12'>
        This app utilizes the SportsDB API for all its data. It's a project designed to showcase my React
        skills and practice Tailwind CSS.</p>
      
   </div>
  );
};

export default Home;
