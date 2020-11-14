import { Link } from 'react-router-dom';
import '../apidex';
import Pixel from './../assets/pixel.png';

export default function Card() {
    return (
      <div className="card pokecard">
        <Link to="/about" className="pokecard">
          <div className="card-body">
            <div className="col-8" style={{display: 'flex', flexDirection: 'column'}}>
              <b>Bulbasaur</b>
              <button className="chip" style={{fontSize: '12px', width: '80px'}}>
                Grass
              </button>
              <button className="chip" style={{fontSize: '12px', width: '80px'}}>
                Poison
              </button>
            </div>
            <div className="col-4">
              <p className="pokemoncito" id="bulbasaur"><img src={Pixel} /></p>
            </div>
          </div>
        </Link>
      </div>
    );
  }