import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import JobListing from '../components/jobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
