import Pixel from '../../assets/pixel.png';

export default function Evolution() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-4">
            <p id="bulbasaur"><img src={Pixel} /></p>
          </div>
          <div className="col-4">
            Lvl 16
          </div>
          <div className="col-4">
            <p id="ivysaur"><img src={Pixel} /></p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-4">
            <p id="ivysaur"><img src={Pixel} /></p>
          </div>
          <div className="col-4">
            Lvl 36
          </div>
          <div className="col-4">
            <p id="venusaur"><img src={Pixel} /></p>
          </div>
        </div>
      </div>
    );
  }