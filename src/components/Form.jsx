import React, { useState }  from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {data} from '../assets/symptomData'

const animatedComponents = makeAnimated()
  
const Title = styled('h1')(({ theme }) => ({
  fontWeight: 'bold',
  fontFamily: 'Spline Sans Mono, monospace',
  fontSize: '70px',
  margin: '2rem',
  maxWidth: '500px',
  pointerEvents: 'auto',
  textShadow:'0 10px 30px rgba(0, 0, 0, 0.5)',
}))


const StyledSubmit = styled('button')(({theme}) => ({
  
    background: 'rgba(0, 0, 0, 0.2)',
    border: '1px',
    fontSize: '16px',
    padding: '12px 30px',
    borderRadius: '14px',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '280px',
    backdropFilter: 'blur(20px)',
    fontWeight: '600',
    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.2)',
    transition: '1s',
    cursor: 'pointer',
    pointerEvents: 'auto',

    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',

    "&:hover":{
      border: '1px solid rgba(255, 255, 255, 0.8)',
      transform: 'translateY(-5px)',
    }
  
}))


const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px solid black',
    color:'black',
    padding: 0
  }),  
}

const Form = () => {
    const [symptoms, setSymptoms] = useState([])

    const handleChange = (e) => {
      const options =[]
      const selectedOptions = e

      selectedOptions.forEach((option) => {options.push(option.value)})

      setSymptoms(options)
      console.log('updated symptoms to', options)
    }

    
    const ageRanges = [
      {value: 'below 5', label: 'below 5'},
      {value: '5-10', label: '5-10'},
      {value: '10-13', label: '10-13'},
      {value: '13-18', label: '13-18'},
      {value: '18-25', label: '18-25'},
      {value: '25-35', label: '25-35'},
      {value: '35-40', label: '35-40'},
      {value: '40+', label: '40+'}
    ]
    
    const formatedData = data.map(sym => (
      {value: sym, label: sym}
    ))
    
  return (
    <>  
        <div style={{}}>
          <Title>Please Complete to Calculate Your Illness</Title>
          <Box
              
              sx={{
                  '& > :not(style)': { m: 4, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              >
              <label style={{paddingTop: '7px', paddingRight: '10px'}}>Age:</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={ageRanges}
                styles={customStyles}
              />
              <label style={{paddingTop: '7px', paddingRight: '10px'}}>Symptoms:</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={formatedData}
                styles={customStyles}
                onChange={handleChange}
              />
              <StyledSubmit onClick={() => console.log(symptoms)}>Calculate</StyledSubmit>
          </Box>
        </div>    
    </>
  )
}

export default Form