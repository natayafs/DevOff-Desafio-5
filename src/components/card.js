import { Link } from 'react-router-dom';

export default function Card() {
    return (
      <div className="card pokecard">
        <Link to="/about" className="pokecard">
          <div className="card-body">
            <div className="col-8" style={{display: 'flex', flexDirection: 'column'}}>
              <b>Balbasaur</b>
              <button className="chip" style={{fontSize: '12px', width: '80px'}}>
                Grass
              </button>
              <button className="chip" style={{fontSize: '12px', width: '80px'}}>
                Poison
              </button>
            </div>
            <div className="col-4">
              <p className="pokemoncito">IMG</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }