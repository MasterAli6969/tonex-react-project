import { feedbackSlider } from "../data";
import styles from "./feedback_slider.module.scss";
function FeedbackSlider() {
  return (
    <>
      <div className="col-12 mt-5 mb-5">
        <div className={styles.div_title}>
          <h1 className="fw-bolder">Отзывы о нас</h1>
        </div>
        <div
          id="carouselExampleDark1"
          className="carousel carousel-dark slide mb-5"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {feedbackSlider.length !== 0 &&
              feedbackSlider.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className={`carousel-item ${item.activeClass} bg-accent-colors`}
                      data-bs-interval="10000"
                    >
                      <div className="container d-flex justify-content-center flex-wrap my-5">
                        {item.sledes.map((item) => {
                          return (
                            <>
                              <div key={item.id} className={styles.div}>
                                <div className={styles.sub_div}>
                                  <div className={styles.div_title}>
                                    <h3>{item.name}</h3>
                                    <p>{item.date}</p>
                                  </div>
                                  <div className={styles.div_description}>
                                    <p>{item.feedback}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark1"
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
            data-bs-target="#carouselExampleDark1"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          <a href="/" className="btn btn-primary btn-lg rounded-5">
            Посмотреть все отзывы на bestchange.ru
          </a>
        </div>
      </div>
    </>
  );
}
export default FeedbackSlider;
