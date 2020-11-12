import { Link } from 'react-router-dom';
import Pokedex from './../assets/logo.png';
import DevOff from './../assets/devoff.png';

export default function Home() {
    return (
      <div className="container-fluid section">
          <img width="100" height="100" src={Pokedex} alt="Logo Pokedex" />
          <h1 style={{fontWeight: 'bold'}} >Pokedex</h1>
          <i style={{fontFamily: 'Homemade Apple'}}>
            <a href="https://nataya.dev/" className="by">
              ---by Nataya---
            </a>
          </i>
          <Link to="/list">
            <button className="btn">
              ¡Comenzar!
            </button>
          </Link>
          <a href="https://github.com/devoffarg/DevOff-Desafio-5" className="by">
            <img width="50" height="50" src={DevOff} alt="Logo Dev Off" />
            <p style={{fontSize: '14px', paddingTop: '0.4em'}}>
              Desafío Nº 5
            </p>
          </a>
      </div>
    );
  }
  