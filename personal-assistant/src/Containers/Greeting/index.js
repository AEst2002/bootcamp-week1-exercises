import React, { useState, useEffect } from 'react'
import { Page } from './styles'
import Title from '../../Components/Title'
import Nav from '../../Components/Nav'

const Greeting = () => {
    const [weather, setWeather] = useState('')
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=kissimmee&appid=886705b4c1182eb1c69f28eb8c520e20')
          const data = await res.json()
          setWeather(data.weather[0].description)
        }
        fetchData()
    }, [])
    
    return(
        <Page>
            <Nav></Nav>
            <Title text='Welcome to your.... PERSONAL ASSISTANT!'></Title><br/>
            <h3>Today's weather: {weather}</h3>
        </Page>
    )
}

export default Greeting