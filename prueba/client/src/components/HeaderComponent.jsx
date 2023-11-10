const headerComponent = () => {
  return (
    <header>
      <div>
        <div>
          <nav
            className="navbar bg-dark border-bottom border-body"
            data-bs-theme="dark"
          >
            <a className="navbar-brand" href="#">
              <h1>TV MAJITO</h1>
            </a>
            <div className="mt-3">
              <button className="btn btn-outline-success align-right mr-2">
                <h4>Login in</h4>
                
              </button>
              <button className="btn btn-outline-danger">
                <h4>Strart your free trial</h4>
              </button>
            </div>
          </nav>

          <nav
            className="navbar bg-dark border-bottom border-body"
            data-bs-theme="dark"
          >
            <a className="navbar-brand" href="#">
              <h4>Popular Tv Majo</h4>
            </a>
          </nav>


        </div>
      </div>
    </header>
  );
};

export default headerComponent;
