import React from 'react'
import Navbar from "../components/Navbar";
import Searchdiv from "../components/Searchdiv";
import SearchByCategory from '../components/SearchByCategory';


const Home = () => {
    
  return (
    <div >
        <Navbar/>
        <Searchdiv/>
        <SearchByCategory/>
    </div>
  )
}

export default Home