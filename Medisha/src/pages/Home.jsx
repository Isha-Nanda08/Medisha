import React from 'react'
import Navbar from "../components/Navbar";
import Searchdiv from "../components/Searchdiv";
import SearchByConditions from '../components/SearchByConditions';
import Slider from '../components/Slider';


const Home = () => {
    
  return (
    <div >
        <Navbar/>
        <Searchdiv/>
        <SearchByConditions/>
        <Slider/>
    </div>
  )
}

export default Home