import React from 'react'
import Navbar from "../components/Navbar";
import Searchdiv from "../components/Searchdiv";
import SearchByConditions from '../components/SearchByConditions';
import Slider from '../components/Slider';
// import Slider2 from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
    
  return (
    <div >
        <Navbar/>
        <Searchdiv/>
        <SearchByConditions/>
        <Slider/>
        <Products/>
        <Slider/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home