import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-5 mb-5">
        <div className="container-fluid d-flex justify-content-center flex-wrap">
          <img src={CryptoneXNavLogo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Проверить
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  Правила
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  Помощь
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/contacts">
                  Контакты
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  KYC/AML
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="btn-group">
              <div
                className="btn btn-sm border border-dark rounded d-flex align-items-center mx-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  <img src="/img/Vector-lang.svg" alt="" />
                </div>
                <div>RU</div>
              </div>
              <ul className="dropdown-menu">...</ul>
            </div>
          </div>
          <div>
            <button
              className="btn btn-sm border border-primary rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
