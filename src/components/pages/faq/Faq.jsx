import { faqDataAccor } from "./data";
import styles from "./faq.module.scss";
function Faq() {
  return (
    <>
      <div className={styles.div}>
        <div className="row">
          <div className="col-12">
            <div className={styles.div_title}>
              <h1>Часто задаваемые вопросы</h1>
            </div>
            <div className={styles.sub_div}>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {faqDataAccor.length !== 0 &&
                  faqDataAccor.map((item) => {
                    return (
                      <>
                        <div
                          key={item.id}
                          className={`accordion-item mb-5 ${styles.accordion_item}`}
                        >
                          <h2>
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${item.idDataBsParent}`}
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <span>{item.number}</span>
                              {item.title}
                            </button>
                          </h2>
                          <div
                            id={item.idDataBsParent}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body p-5">
                              <p>{item.text}</p>
                              {item.id === 5 && (
                                <div>
                                  <p>{item.titleList}</p>
                                  <ul className={styles.accordion_list}>
                                    {item.list.map((subItem, index) => (
                                      <li key={index}>
                                        <p>{subItem}</p>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
