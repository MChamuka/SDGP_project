import './App.css';
import { Link } from 'react-router-dom';

const nav = () => {
    return (  
        <div className="app">
          <ul>
            <li><Link to ="/App">Search</Link></li>
            <li><Link to ="/profile">Profile</Link></li>
            <li><Link to ="/locations">Locations</Link></li>
            <li><Link to ="/form">Submit</Link></li>
            <li><Link to ="/signUp">Login</Link></li>
          </ul>
        </div>
    )
}

export default nav;