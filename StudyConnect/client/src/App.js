import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Landing from "./pages/Landing";
import Profile from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import AccountSettingPage from "./pages/AccountSettingPage";
import NotFound from "./pages/NotFound";
import BookClass from "./pages/BookClass";
import { AuthProvider } from "./utils/auth";
import TutorProfile from "./components/TutorProfile";
import ManageBookingPage from "./pages/ManageBookingPage";
import ClassHistoryPage from "./pages/ClassHistoryPage";
const LazySearch = React.lazy(() => import("./components/SearchTutor"));
const LazySearch2 = React.lazy(() => import("./components/TutorInfo"));

//
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/book" element={<BookClass />}>
          <Route path=":subject" element={<TutorProfile />} />
          <Route
            path=":tutorId"
            element={
              <React.Suspense fallback="Поиск...">
                <LazySearch2 />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/profile/editProfile"
          element={<EditProfilePage />}
        ></Route>
        <Route
          path="/profile/manageBooking"
          element={<ManageBookingPage />}
        ></Route>
        <Route
          path="/profile/classHistory"
          element={<ClassHistoryPage />}
        ></Route>
        <Route path="/bookclass" element={<BookClass />}></Route>
        {/* lazy loading source: https://www.youtube.com/watch?v=MJn4W7pR6RU&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG&index=14 */}
        <Route
          path="/searchTutor"
          element={
            <React.Suspense fallback="Поиск...">
              <LazySearch />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/profile/accountSettings"
          element={<AccountSettingPage />}
        ></Route>
        <Route path="/" element={<Landing />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
