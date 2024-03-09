import "./locations.css"
import Nav from "../nav.js";
import { useEffect, useState } from "react";
import EditSvg from "./edit.svg";

function Locations() {

    const [locations, setLocations] = useState([]);
    const [title, setTitle] = useState(null);

    const fetchLocations = async () => {
        const response = await fetch('http://localhost:4000/locations');
        const data = await response.json();
        setTimeout(() => {
            if(data.length === 0) {
                setLocations(['Loading...']);
                fetchLocations();
            }
            else {
                setLocations(data[0].locations);
                setTitle(data[0].movieTitle);
            }
        }, 200)
        // console.log(data);
    };

    useEffect(() => {
        fetchLocations();
    }, []);
      
    return (
        <div className='content'>
            <Nav />
            <div className="movieDetails">
                <h1 id="movieTitle">{title}</h1>
                <a href="">
                    <img
                    src={EditSvg}
                    alt="Request button"
                    id = "editButton"
                    />
                </a>
            </div>
            <div className='content2'>
                <div className='locations'>
                    {locations.map((item, index) => {
                        return <a key={index}><h3 className="locationList">{item}</h3></a>
                    })}
                </div>
                <div className='request'>
                    <a className="links"><h3>+</h3></a>
                    <a><h3>+</h3></a>
                    <a><h3>+</h3></a>
                    <a><h3>+</h3></a>
                </div>
                <div className='request'>
                    <a><h3>-</h3></a>
                    <a><h3>-</h3></a>
                    <a><h3>-</h3></a>
                    <a><h3>-</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Locations;