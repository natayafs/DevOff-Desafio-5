export default function Stats() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">HP</div>
        <div className="col-3">45</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">Attack</div>
        <div className="col-3">49</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">Defense</div>
        <div className="col-3">49</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "48%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">Sp. Atk</div>
        <div className="col-3">65</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">Sp. Def</div>
        <div className="col-3">65</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">Speed</div>
        <div className="col-3">45</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">Total</div>
        <div className="col-3">318</div>
        <div className="col-6">
          <div className="progress">
            {" "}
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>{" "}
          </div>
        </div>
      </div>

      <div
        className="row pt-4"
        style={{ color: "#404851", fontWeight: "bold" }}
      >
        Type denfense
      </div>
      <div className="row">The effectiveness of each type on Bulbasaur</div>
    </div>
  );
}
