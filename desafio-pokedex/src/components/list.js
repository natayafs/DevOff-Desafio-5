import Card from './card';

export default function List() {
    return (
      <div className="container-fluid page">
        <div className="footer">
          <div className="row">
            <div className="col-12">
              <a href="/" className="back">Back</a>
            </div>
            <div className="row">
              <div className="col-10 text-left">
                <h2>Pokedex</h2>
              </div>
              <div className="col-2 text-right">
                <p style={{color: 'white', fontWeight: 'bold'}}>#001</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="col-6">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }