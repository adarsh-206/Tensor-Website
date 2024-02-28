import React from 'react'
import Home from './homePage/Home'
import Services from './homePage/Services'
import Capability from './homePage/Capability'
import OurTeam from './homePage/OurTeam'
import Testimonials from './homePage/Testimonials'
import Blog from './homePage/Blogs'

function index() {
    return (
        <>
            <Home />
            <Services />
            <Capability />
            <OurTeam />
            <Blog />
            <Testimonials />
        </>
    )
}

export default index