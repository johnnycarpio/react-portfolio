import React from 'react'
import Flight from '../../assets/flight.jpeg'

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div class="workimage2">
        <a href="https://johnnycarpio.github.io/flight-weather-app/">
          <img src={Flight} alt="flight tracker image" />
        </a>
        <div class="workimagedescription2">
          <h4>Flight Tracker</h4>
          <p>With weather and COVID info</p>
        </div>
      </div>
    </div>


  )
}

export default Projects
