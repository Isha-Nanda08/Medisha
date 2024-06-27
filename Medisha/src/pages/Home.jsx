import React from 'react'
import Navbar from "../components/Navbar";
import Searchdiv from "../components/Searchdiv";
import SearchByConditions from '../components/SearchByConditions';


const Home = () => {
    
  return (
    <div >
        <Navbar/>
        <Searchdiv/>
        <SearchByConditions/>
    </div>
  )
}

export default Home