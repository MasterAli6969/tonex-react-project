import React from "react";
import { feedbackSlider } from "../data";
import styles from "./feedback_slider.module.scss";
function FeedbackSlider() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container flex-wrap mb-5">
          <h3 class="fw-bolder">Отзывы о нас</h3>
        </div>
        <div
          id="carouselExampleDark1"
          class="carousel carousel-dark slide mb-5"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            {feedbackSlider.length !== 0 &&
              feedbackSlider.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      class={`carousel-item ${item.activeClass} bg-accent-colors`}
                      data-bs-interval="10000"
                    >
                      <div class="container d-flex justify-content-center flex-wrap my-5">
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
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="container d-flex justify-content-around flex-wrap">
          <a
            href="/"
            class="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
          >
            Читать другие отзывы
          </a>
        </div>
      </div>
    </>
  );
}
export default FeedbackSlider;
