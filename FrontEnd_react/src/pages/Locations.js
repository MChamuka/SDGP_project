import "./locations.css"
import { useEffect, useState, useMemo } from "react";
import {
    GoogleMap,
    Marker,
} from "@react-google-maps/api";
import EditSvg from "./edit.svg";
import Nav from "./navbar.js";
import { useLoadScript } from "@react-google-maps/api";
    

function Locations() {

    const [locations, setLocations] = useState([]);
    const [title, setTitle] = useState(null);
    const [addButton, setAddButton] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const [geoCodes, setGeoCodes] = useState([]);

    const toggleEditMode = () => {
        setVisibility(!visibility)
    }

    const fetchLocations = async () => {
        const response = await fetch('http://localhost:4000/locations');
        const data = await response.json();
        setTimeout(() => {
            if(data.length === 0) {
                setLocations(['']);
                fetchLocations();
            }
            else {
                setLocations(data[0].locations);
                setTitle(data[0].movieTitle);
                setAddButton('+ Add new locations')
                setMarkers(data[0].locations)
            }
        }, 200)
        
    };

    function setMarkers(locations) {
        locations.map(async (item) => {
            const address = item
            const geoCode = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyC4n7_ORPNi9IX92JwMRA4ytShJs_9mi0k');
            const geoCodeData = await geoCode.json()
            if (typeof geoCodeData.results[0] === 'undefined'){
                console.log("no geo location found");
                setGeoCodes(geoCodes => [...geoCodes, "No marker found for this location"])
            } else {
                let latAndLng = geoCodeData.results[0].geometry.location
                setGeoCodes(geoCodes => [...geoCodes, latAndLng])
            }
        })
        console.log(geoCodes);
    }

    useEffect(() => {
        setAddButton('Loading...');
        fetchLocations();
    }, []);

    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapId: "978c73dfa5d33f13"
    }), []);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyC4n7_ORPNi9IX92JwMRA4ytShJs_9mi0k',
    })

    if (!isLoaded) return <div>Loading</div>
      
    return (
        <div className='content'>
            <Nav />
            <div className="movieDetails">
                <h1 id="movieTitle">{title}</h1>
                <a onClick={toggleEditMode}>
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
                        if(item != "" && geoCodes[index] != "No marker found for this location"){
                            console.log(geoCodes[index]);
                            return (
                            <div>
                                <a key={index} href="#" className="locationList"><h3>{item}</h3></a>
                                <div className="details-grid"> 
                                    <div className="detail span map">
                                        <GoogleMap 
                                        zoom={13} 
                                        center={geoCodes[index]} 
                                        mapContainerClassName="map-container" 
                                        options={options}>
                                        <Marker position={geoCodes[index]}/>
                                        </GoogleMap>
                                    </div>                                   
                                    <div className="detail addScene1 scenes">
                                        <p>Add movie scene image here</p>
                                    </div>
                                    <div className="detail addScene2 scenes">
                                        <p>Add real scene image here</p>
                                    </div>
                                    {visibility && (
                                        <div className="detail editLocation">
                                            <p>Edit Location</p>
                                        </div>
                                    )}
                                    {visibility && (
                                        <div className="detail removeLocation">
                                            <p>Remove Location</p>
                                        </div>                                       
                                    )}
                                    
                                </div>
                            </div>
                            )
                        }
                        else if (item == 'No locations found for this movie: click here to submit a location.'){
                            return(
                                <div>
                                    <a key={index} href="#" className="locationList"><h3>{item}</h3></a>
                                </div>
                            )    
                        }
                        else if (item != "" && geoCodes[0] == "No marker found for this location"){
                            return(
                                <div>
                                    <a key={index} href="#" className="locationList"><h3>{item}</h3></a>
                                    <div className="details-grid">
                                        <div className="detail span map">
                                            <p>{geoCodes[0]}</p>
                                        </div>        
                                    </div>
                                </div>
                            )
                            
                        }
                        
                    })}
                    <div className="content3"><a href="submit" className="button-add">{addButton}</a></div>
                </div>
            </div>
                    
        </div>
    )
}

export default Locations;
