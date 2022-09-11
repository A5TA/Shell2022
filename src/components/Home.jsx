import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

const StyledLink = styled(Link)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'inherit' 
  }))

const Home = () => {
  return (
    <>
        <h1>What's up, Doc?</h1>
        <p>
        Wondering what your symptoms might point to? Want to quickly know whether you should go to the doctor or not?
        We can help. Leveraging machine learning, we are able to better predict what your symptoms might say about you.
        </p>
        <button className='home-btn'>
            <StyledLink to='/symptoms'>Enter Symptoms</StyledLink>
        </button>
    </>
  )
}

export default Home