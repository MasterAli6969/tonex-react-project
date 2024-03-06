import styles from "./nav_bar.module.scss";
function NavBar({
  classColorText,
  classColorButtonSelect,
  classColorButtonLogin,
  logo,
}) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-transparent pt-5  ${classColorText} ${styles.navBar}`}
      >
        <div className="container-fluid ">
          <img src={logo} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${styles.menu_link}`}
            id="navbarDefault"
          >
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Проверить
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="/">
                  Правила
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="/">
                  Помощь
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="/contacts">
                  Контакты
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="/contacts">
                  Контакты
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="/">
                  KYC/AML
                </a>
              </li>
            </ul>
            <div>
              <div className="btn-group">
                <div
                  className={`btn btn-sm border border-dark rounded d-flex align-items-center mx-3 ${classColorButtonSelect}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>
                    <img src="/img/Vector-lang.svg" alt="" />
                  </div>
                  <div>RU</div>
                </div>
                <ul className="dropdown-menu tog">...</ul>
              </div>
            </div>
            <div>
              <button
                className={`btn btn-sm border border-primary rounded px-3 ${classColorButtonLogin}`}
                type="submit"
              >
                Вход
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
