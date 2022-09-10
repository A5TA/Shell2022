import React, { useState }  from 'react'
import { Box } from '@mui/material'
import { styled} from '@mui/material/styles'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

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

// const StyledCard = styled('div')(({ theme }) => ({
//     background: '#111531ef',
//     minWidth: '50%',
//     minHeight: '80%',
//     border: '1px solid transparent',
//     borderRadius: '1rem',
//     padding: '2rem',
//     textAlign: 'center',
//     transition:'all 400ms ease'
//   }))

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
    }

    const data = ['skin_rash',
      'nodal_skin_eruptions',
      'continuous_sneezing',
      'shivering',
      'chills',
      ]
    
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
        <div style={{display: 'flex'}}>
          <Title>Please Complete to Calculate Your Illness</Title>
          <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              >
              <div style={{display: 'flex', alignContent: 'center'}}>
              <label style={{paddingTop: '7px', paddingRight: '10px'}}>Age:</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={ageRanges}
                styles={customStyles}
                menuColor='green'
              />
              </div>
              
              <div style={{display: 'flex', alignContent: 'center'}}>
              <label style={{paddingTop: '7px', paddingRight: '10px'}}>Symptoms:</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={formatedData}
                styles={customStyles}
                onChange={handleChange}
                menuColor='green'
              />
              </div>
          </Box>
        </div>    
    </>
  )
}

export default Form