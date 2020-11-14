import Pokerouter from './pokemon/pokerouter';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Pixel from './../assets/pixel.png';

export default function Details() {
    return (
      <div className="container-fluid page" style={{backgroundColor: '#48d1b0'}}>
        <div className="header">
          <div className="row">
            <div className="col-6 text-left">
              <a href="/list">
                <KeyboardBackspaceIcon variant="contained" color="action"></KeyboardBackspaceIcon>
              </a>
            </div>
            <div className="col-6 text-right">
              <FavoriteBorderIcon variant="contained" color="action"></FavoriteBorderIcon>
            </div>
          </div>
          <div className="row name">
            <div className="col-10 text-left">
              <h2 style={{color: 'white'}}>Bulbasaur</h2>
            </div>
            <div className="col-2 text-right">
              <p style={{color: 'white', fontWeight: 'bold'}}>#001</p>
            </div>
          </div>
          <div className="row chips">
            <div className="col-8 text-left">
              <button className="chip">
                Grass
              </button>
              <button className="chip">
                Poison
              </button>
            </div>
            <div className="col-4 text-right">
              <p style={{color: 'white', fontSize: '14px'}}>Seed Pokemon</p>
            </div>
          </div>
          <div className="row img">
            <p id="bigbulbasaur"><img src={Pixel} /></p>
          </div>
        </div>
        <div className="footer">
          <Pokerouter/>
        </div>
      </div>
    );
  }  