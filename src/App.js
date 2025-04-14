
import React from 'react'
import './commonResource/css/bootstrap.css';
import './commonResource/css/styles.css';
import Header from './components/header.js'
import Footer  from './components/footer.js';	
import Section1 from './components/section1';
import Section2 from './components/section2.js';
import Section3 from './components/section3.js';
import Section4 from './components/section4.js';
import Section5 from './components/section5.js';
import Section6 from './components/section6.js';




function App() {
  return (
		<>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
		<Footer/>
		</>
  )
}

export default App


