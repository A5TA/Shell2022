import React, { useEffect, useState }  from 'react'
import { Box, Grid, Paper, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {data} from '../assets/symptomData'
import axios from "axios"

const animatedComponents = makeAnimated()

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  fontFamily: 'Spline Sans Mono, monospace',
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: '1.3rem',
  borderRadius: 15,
  transition: '1s',
  
  "&:hover":{
    border: '1px solid rgba(255, 255, 255, 0.8)',
    transform: 'translateY(-5px)',
  }
}))
  
const Title = styled('h1')(({ theme }) => ({
  fontWeight: 'bold',
  fontFamily: 'Spline Sans Mono, monospace',
  fontSize: '70px',
  margin: '2rem',
  pointerEvents: 'auto',
  textShadow:'0 10px 30px rgba(0, 0, 0, 0.5)',
}))


const StyledSubmit = styled('button')(({theme}) => ({
  
    background: 'rgba(0, 0, 0, 0.2)',
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
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [illness, setIllness] = useState('flu') // MAke call to backend and set this to that return value
    const [sicknews, setSickNews] = useState([])

    const handleChange = (e) => {
      const options =[]
      const selectedOptions = e

      selectedOptions.forEach((option) => {options.push(option.value)})

      setSymptoms(options)
      console.log('updated symptoms to', options)
    }

    useEffect( () => { 
      let url = 'http://127.0.0.1:5000/?symptoms='
      for(let i = 0; i < symptoms.length; i++) {
        if (i + 1 == symptoms.length) {
          url = url.concat(symptoms[i])
        } else {
          url = url.concat(symptoms[i]+',')
        }
      }
      // console.log(url)
      async function fetchData() {
          try {
              const res = await axios.get(url); 
              // console.log(res.data);
              setIllness(res?.data)

          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
    },[formSubmitted]);

    useEffect( () => { 
      const options = {
        method: 'GET',
        url: `https://bing-news-search1.p.rapidapi.com//news/search?q=${illness}&safeSearch=Off&textFormat=Raw&freshness=Day&count=5`,
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
        }
      };
      async function fetchData() {
          try {
              const res = await axios.get(`https://bing-news-search1.p.rapidapi.com//news/search?q=${illness}&safeSearch=Off&textFormat=Raw&freshness=Day&count=3`, options); 
              // console.log(res.data);
              setSickNews(res?.data)
            
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
    },[illness]);
    
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
      {value: sym, label: sym.split('_').join(' ')}
    ))
    
  return (
    <>  
        {formSubmitted === false ?
        <div style={{}}>
          <Title style={{maxWidth: '500px'}}>Please Complete to Calculate Your Illness</Title>
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
              <StyledSubmit onClick={() => setFormSubmitted(true)}>Calculate</StyledSubmit>
          </Box>
        </div>
        :
        <div>
          <Title style={{fontSize: '60px', display: 'flex', justifyContent: 'center'}}>You may have {illness}</Title>

          <Title style={{fontSize: '30px', display: 'flex', justifyContent: 'center'}}>Here are some useful News on {illness}</Title>
          <Grid container spacing={3} style={{marginLeft: '10%', marginRight: '10%'}}>
              {sicknews.value.map((news, index) => (
                <Grid item xs={3}>
                  <Item square elevation={7} style={{height: '220px', position: 'relative'}} key={index}>
                    <div style={{marginBottom: 10}}>
                      <Typography gutterBottom variant="subtitle1" component="div" display={'flex'} padding={1}>
                        {news.name}
                        <img src={news?.image?.thumbnail?.contentUrl} alt='thumbnail' style={{maxHeight: 350, borderRadius: 10, border: '2px solid #0e1129'}}/>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {news.description > 150 
                          ? `${news.description.substring(0,155)}...`
                          : news.description
                        }
                      </Typography>
                    </div>

                    <div style={{display: 'flex', gap: 200 ,position: 'absolute', bottom:5, color: '#0e1129'}}>
                      <Button  size="small" onClick={(e) =>  window.open(`${news.url}`,'_blank')}>View Article</Button>
                      
                    </div> 
                  </Item>
                </Grid>
              ))}   
          </Grid>
        </div>
        }    
    </>
  )
}

export default Form