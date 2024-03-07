import styles from "./nav_bar.module.scss";
function NavBar({
  classColorText,
  classColorButtonSelect,
  classColorButtonLogin,
  logo,
  logoStyle,
}) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-transparent pt-5 ${classColorText} ${styles.navBar}`}
      >
        <div className="container-fluid ">
          <img className={logoStyle} src={logo} />
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
            className={`collapse navbar-collapse ${styles.menu_links}`}
            id="navbarDefault"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li
                className={`${classColorText ? "" : "nav-item"} ${
                  styles.menu_link
                }`}
              >
                <a
                  className={`${classColorText ? "" : "nav-link active"}`}
                  aria-current="page"
                  href="/"
                >
                  Проверить
                </a>
              </li>
              <li
                className={`${classColorText ? "" : "nav-item"} ${
                  styles.menu_link
                }`}
              >
                <a
                  className={`${classColorText ? "" : "nav-link active"}`}
                  href="/"
                >
                  Правила
                </a>
              </li>
              <li
                className={`${classColorText ? "" : "nav-item"} ${
                  styles.menu_link
                }`}
              >
                <a
                  className={`${classColorText ? "" : "nav-link active"}`}
                  href="/"
                >
                  Помощь
                </a>
              </li>
              <li
                className={`${classColorText ? "" : "nav-item"} ${
                  styles.menu_link
                }`}
              >
                <a
                  className={`${classColorText ? "" : "nav-link active"}`}
                  href="/contacts"
                >
                  Контакты
                </a>
              </li>
              <li
                className={`${classColorText ? "" : "nav-item"} ${
                  styles.menu_link
                }`}
              >
                <a
                  className={`${classColorText ? "" : "nav-link active"}`}
                  href="/contacts"
                >
                  Контакты
                </a>
              </li>
              <li
                className={`${classColorText ? "" : "nav-item"} ${
                  styles.menu_link
                }`}
              >
                <a
                  className={`${classColorText ? "" : "nav-link active"}`}
                  href="/"
                >
                  KYC/AML
                </a>
              </li>
            </ul>
            <div>
              <div className="btn-group">
                <div
                  className={`btn btn-sm border ${
                    classColorButtonSelect && classColorButtonLogin
                      ? "border-light"
                      : "border-primary"
                  }  rounded d-flex align-items-center m-2 ${classColorButtonSelect}`}
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
                className={`btn btn-sm border ${
                  classColorButtonSelect && classColorButtonLogin
                    ? "border-light"
                    : "border-primary"
                }  rounded d-flex align-items-center m-2 ${classColorButtonLogin}`}
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
