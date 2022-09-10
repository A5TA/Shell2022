import React from 'react'
import styled from 'styled-components'
import SickIcon from '@mui/icons-material/Sick'
import { Link } from 'react-router-dom'

const Nav = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 50px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 10px 20px;
      border-radius: 14px;
      border: 1.5px solid rgba(255, 255, 255, 0);
      transition: 0.7s;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;



const Navbar = () => {
  return (
    <Nav>
          <li>
            <SickIcon sx={{ fontSize: 60 }}/>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/">Mission</a>
          </li>
          <li>
            <a href="/">Feedback</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <Link to='/symptoms'>Enter Symptoms</Link>
          </li>
    </Nav>
  )
}

export default Navbar