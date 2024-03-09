import React from 'react'
import Home from './homePage/Home'
import Services from './homePage/Services'
import Capability from './homePage/Capability'
import Testimonials from './homePage/Testimonials'
import Blog from './homePage/Blogs'
import TestimonialsData from './homePage/TestimonialsData'

function index() {
    return (
        <>
            <Home />
            <Services />
            <Capability />
            {/* <OurTeam /> */}
            <Blog />
            <Testimonials reviews={TestimonialsData} />
        </>
    )
}

export default index