import { FaEdit, FaRegCalendarCheck, FaHistory } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

/**
 *
 * exports sidebar data, including title, path, icon, className
 */
export const sidebarData = [
  {
    title: (
      <>
        Редактировать
        <br />
        профиль
      </>
    ),
    path: "/profile/editProfile",
    icon: <FaEdit />,
    cName: "sidenav__list-item",
  },
  {
    title: (
      <>
        Управление
        <br />
        бронированием
      </>
    ),
    path: "/profile/manageBooking",
    icon: <FaRegCalendarCheck />,
    cName: "sidenav__list-item",
  },
  {
    title: (
      <>
        История
        <br />
        занятий
      </>
    ),
    path: "/profile/classHistory",
    icon: <FaHistory />,
    cName: "sidenav__list-item",
  },
  {
    title: (
      <>
        Настройки
        <br />
        аккаунта
      </>
    ),
    path: "/profile/accountSettings",
    icon: <BsFillGearFill />,
    cName: "sidenav__list-item",
  },
];
