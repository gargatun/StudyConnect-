import React, { useEffect, useState } from "react";
import "../assets/styles/ManageBook.css";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

/**
 * component that renders booking schedule of student
 * @returns JSX of manage booking UI
 */
function ManageBook() {
  const auth = useAuth();
  const [schedule, setSchedule] = useState([]);
  const [remove, setRemove] = useState(false);
  const navigate = useNavigate();

  //This function gets the user in session
  useEffect(() => {
    const getCurrentUser = async () => {
      await fetch("/api/getUser")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.user === null) {
            alert("пожалуйста, войдите в систему");
            navigate("/login");
          }
        });
    };

    getCurrentUser();
  }, [auth]);

  /**Yian
   * this function gets the schedule of the user and makes a copy to schedule
   */
  useEffect(() => {
    try {
      const fetchSchedule = async () => {
        const res = await fetch("/api/getSchedule");
        const resSchedule = await res.json();
        const sched = resSchedule.data.schedule;
        setSchedule([...sched]);
      };
      //only fetch schedule if user is logged in
      if (auth.user) {
        fetchSchedule();
      }
    } catch (err) {
      console.error(err);
    }
  }, [remove, auth]);

  /**
   * Yian Chen
   * function that removes class from database
   * @param {String} date
   * @param {String} time
   * @param {String} tutor
   */
  const removeClass = async (date, time, tutor) => {
    try {
      let scheduleObj = {};
      scheduleObj.user = auth.user;
      scheduleObj.date = date;
      scheduleObj.time = time;
      scheduleObj.tutor = tutor;

      const res = await fetch("/deleteClass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scheduleObj),
      });
      const resMsg = await res.json();
      setRemove(true);
      alert(resMsg.msg);
    } catch (err) {
      console.error(err);
      alert(`Произошла ошибка, пожалуйста, обратитесь в службу поддержки`);
    }
  };

  /**
   * function that renders delete button
   * @param {String} date
   * @param {String} time
   * @param {String} tutor
   * @returns
   */
  const renderDeleteBtn = (date, time, tutor) => {
    return (
      <button
        className="deleteBtnBook"
        onClick={() => removeClass(date, time, tutor)}
      >
        отменить занятие
      </button>
    );
  };
  return (
    <div className="mainDivBook">
      <div className="innerDivBook">
        <h2 className="titleBook">Мое Расписание</h2>
        {schedule.map((i, idx) => {
          return (
            <div className="line1" key={`${i.date}_${idx}`}>
              <div className="scheduleDivBook">
                <p className="datep">
                  <strong>Дата :</strong> {i.date}
                </p>
                <p className="timep">
                  <strong>Время :</strong> {i.time}
                </p>
                <p className="tutorp">
                  <strong>Репетитор :</strong> {i.tutor}
                </p>
                <p className="subjectp">
                  <strong>Предмет :</strong> {i.subject}
                </p>
                <span className="deleteBtnSpanBook">
                  {renderDeleteBtn(i.date, i.time, i.tutor)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ManageBook.propTypes = {};
export default ManageBook;
