import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1'  title = 'Up Coming' fetchURL = {requests.requestUpcoming}/>
        <Row rowID='2'  title = 'Popular' fetchURL = {requests.requestPopular}/>
        <Row rowID='3'  title = 'Trending ' fetchURL = {requests.requestTrending}/>
        <Row rowID='1'  title = 'Horror' fetchURL = {requests.requestHorror}/>
        <Row rowID='1'  title = 'Top Rated' fetchURL = {requests.requestTopRated}/>


    </div>
  )
}

export default Home