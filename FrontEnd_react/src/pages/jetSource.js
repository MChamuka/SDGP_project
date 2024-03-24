import React from "react"
import './jetSource.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import Nav from "./navbar.js";

export default function JetSource() {

  const [logs, setLogs] = useState([])
  let id = ''
  let index = 0

  const fetchCrowdLogs = async () => {
    const response = await fetch('http://localhost:4000/crowdData');
    const data = await response.json();
    console.log(data);
    setLogs(data)
  }

  const sendId = (func) => {
    const logMovieData = {id, index, func}
    axios.post("http://localhost:4000/updateCrowdData", logMovieData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    fetchCrowdLogs()
  }, [])

  const add = (event) => {
    id = event.target.getAttribute('movieid')
    let buttonFunction = event.target.textContent
    // index = event.target.getAttribute('index')
    console.log(id);
    sendId(buttonFunction)
    setTimeout(() => {
      window.location.reload()
    },1000)
  }

  const remove = (event) => {
    id = event.target.getAttribute('movieid')
    let buttonFunction = event.target.textContent
    sendId(buttonFunction)
    window.location.reload()
  }

  return(
    <div>
      <Nav/>
      <h1 className="title">JetSource Log</h1>
      {logs.map((item, index) => {
          return(
          <div key={index}>
            <ol className="alternating-colors">
            <div className="logs">
              <div>
                <li className="log">
                  <h2>{item.movieName}</h2>
                  <p className="locationName">{item.movieLocation[0]}</p>
                  <p className="sceneDescription">({item.movieScene[0]})</p>  
                </li>
              </div>
              <div className="vote-buttons">
                <a className='add' movieid={item.movieName} index={index} onClick={add}>Publish to JetViaLense</a>
                <a className='remove' movieid={item.movieName} index={index} onClick={remove}>Remove from Log</a>
              </div>
            </div>
          </ol>
          </div>
          )
      })}
    </div>
  )}

