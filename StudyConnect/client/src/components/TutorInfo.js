import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/TutorInfo.css";

/**
 * 
 * TutorInfo component
 * @param {props} tutorProfile is the object prop of tutor data, returnToSearch is a function that returns to search component
 * @returns JSX rendering of tutor personal profile
 */
function TutorInfo({ tutorProfile, returnToSearch, handleModal }) {
  /**
   * function that generates number of stars in tutor profile
   * @param {int} num of stars
   * @returns star icon JSX element
   */
  const starReview = (num) => {
    let s = [];
    for (let i = 0; i < num; i++) {
      s.push(<i key={i} className="fa-solid fa-star" />);
    }
    return s;
  };
  

  //function that handles click (returns to search)
  const handleClick = () => {
    returnToSearch();
  };

  

  return (
    <>
      <div className="card-group2" id="cardGroup2">
        <div className="card2 container-xl" id="cardimage2">
          <div className="card-body2">
            <div className="row rowDiv">
              <div className="col div1">
                <h5 className="card-title2">
                  {" "}
                  Репетитор : {tutorProfile.first_name} {tutorProfile.last_name}
                </h5>
                <img
                  className="imgs2"
                  src={tutorProfile.image}
                  alt="изображение профиля репетитора"
                />
                <div className="card-text-div2">
                  <p className="card-text2">
                    Предмет: {tutorProfile.subjects}
                    <br />
                    Оценки: {starReview(tutorProfile.stars)} от{" "}
                    {tutorProfile.num_of_ratings} учасников
                    <br />
                    Образование: {tutorProfile.education}
                  </p>
                </div>
                <div className="cardlink2"></div>
              </div>
              <div className="col div2">
                <h4 className="student">Оценки студентов</h4>
                {tutorProfile.reviews.map((review, idx) => {
                  const regex = /Tutor/i;
                  const r = review.replace(regex, `${tutorProfile.first_name}`);
                  return (
                    <div className="innerDiv" key={`tutor_${idx}`}>
                      <section className="rectangle">
                        <div className="wrapper">
                          <div className="review">
                            <div className="review-base">
                              <blockquote
                                className={
                                  idx % 2 === 0 ? "review-text" : "review-text2"
                                }
                              >
                                {r}
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <span className="btnSpan">
            <button
              className="bookBtn"
              onClick={() => {
                handleModal();
              }}
            >
              Зарезервировать занятие с {tutorProfile.first_name}
            </button>
          </span>
        </div>
        <div className="backDiv">
          <span className="back">
            <button className="backBtn" onClick={handleClick}>
              <i className="fa-solid fa-arrow-left-long" /> Назад к поиску
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

TutorInfo.propTypes = {
  tutorProfile: PropTypes.object,
  returnToSearch: PropTypes.func,
  handleModal: PropTypes.func,
};
export default TutorInfo;
