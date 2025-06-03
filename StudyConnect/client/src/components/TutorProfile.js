import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../assets/styles/TutorProfile.css";

/**
 * 
 * @param {props} searchData object and query string
 * @returns JSX of tutor profiles
 */
function TutorProfile({ searchData, query, handleReturn, searchProfile }) {
  const [displayPairs, setDisplayPairs] = useState([]);

  /**
   * This function creates the tutor profiles in pairs
   */
  useEffect(() => {
    try {
      //push a new copy to pairs array each time
      let pairs = [];
      let i = 0;
      while (i < searchData.length) {
        if (searchData.length && 1) {
          pairs.push(searchData.slice(i, (i += 2)));
        }
      }
      setDisplayPairs(pairs);
    } catch (err) {
      console.error(err);
    }
  }, [searchData]);

  //This function handles the back button
  const handleClick = () => {
    window.localStorage.removeItem("Current_Query");
    handleReturn();
  };

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

  return (
    <div>
      <h3 className="searchRes">Результаты поиска для &quot;{query}&quot;</h3>
      <div className="backDiv">
        <span className="back" onClick={handleClick}>
          <i className="fa-solid fa-arrow-left-long" /> Назад к поиску
        </span>
      </div>
      <div className="imgRender">
        {displayPairs.map((tutorData, idx) => (
          <div className="card-group " id="cardGroup" key={idx}>
            {tutorData.map((tutorProfile) => (
              <div
                className="card container"
                id="cardimage"
                key={tutorProfile._id}
                onClick={(evt) => {
                  evt.preventDefault();
                  searchProfile(tutorProfile);
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    Репетитор : {tutorProfile.first_name} {tutorProfile.last_name}
                  </h5>
                  <img
                    className="imgs"
                    src={tutorProfile.image}
                    alt="изображение репетитора"
                  />
                  <div className="card-text-div">
                    <p className="card-text">
                      Предмет: {tutorProfile.subjects}
                      <br />
                      Оценки: {starReview(tutorProfile.stars)} от{" "}
                      {tutorProfile.num_of_ratings} учасников
                      <br />
                      Образование: {tutorProfile.education}
                    </p>
                  </div>
                  <div className="cardlink"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
TutorProfile.propTypes = {
  searchData: PropTypes.array,
  query: PropTypes.string,
  handleReturn: PropTypes.func,
  searchProfile: PropTypes.func,
};
export default TutorProfile;
