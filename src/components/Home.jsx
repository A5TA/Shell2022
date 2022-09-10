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
            Instead of utilizing Google's Related health conditions to determine what your illness is, 
            utilize our deep learning model. We at What's up, Doc? make every effort to provide 
            everyone with a doctor's diagnosis of your potential illness.
        </p>
        <button className='home-btn'>
            <StyledLink to='/symptoms'>Enter Symptoms</StyledLink>
        </button>
    </>
  )
}

export default Home