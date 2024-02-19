import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4  " style={{boxShadow:'black 5px'}}>
                         Welcome to ReadersStore – Your Haven for Literary Delights! 

Indulge your love for books at ReadersStore, where every page opens a new chapter of discovery. Our virtual shelves are stocked with a diverse collection of books spanning genres from captivating fiction to insightful non-fiction. Whether you're an avid reader or just starting your literary journey, ReadersStore is your go-to destination. Explore the latest releases, timeless classics, and hidden gems that await your perusal. Immerse yourself in the world of words, where each title tells a unique story. Join us in celebrating the joy of reading at ReadersStore, where every book is an adventure waiting to unfold. Happy reading!                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default About
