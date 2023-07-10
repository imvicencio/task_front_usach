const HeaderComponents = () => {
  return (
    <header>
      <div className="carousel-block">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco.jpg"
                    className="d-flex crop"
                    alt="..."
                    width="100%"
                    height="auto"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="images/lindo-perrito-haciendose-pasar-persona-negocios.jpg"
                    className="d-flex crop"
                    alt="..."
                    width="100%"
                    height="auto"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="images/perrito-joven-posando-alegre.jpg"
                    className="d-flex crop"
                    alt="..."
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponents;
