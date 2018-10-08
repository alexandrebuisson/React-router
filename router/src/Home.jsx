import React, { Component } from 'react';
import NavBar from './NavBar';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                Bienvenue sur l'accueil
            </div>

         );
    }
}
 
export default Home;