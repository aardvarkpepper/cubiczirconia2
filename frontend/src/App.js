//DEPENDENCIES
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CONTEXTS
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";

//COMPONENTS
import Navbar from "./components/Navbar.jsx";

//PAGES
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";

import BadgeCreate from "./pages/badges/BadgeCreate.jsx";
import BadgeDetails from "./pages/badges/BadgeDetails.jsx";
import BadgeEdit from "./pages/badges/BadgeEdit.jsx";
import BadgesIndex from "./pages/badges/BadgesIndex.jsx";
import BadgesUsers from "./pages/badges/BadgesUsers.jsx";
import BadgeUsers from "./pages/badges/BadgeUsers.jsx";

import ThemeCreate from "./pages/themes/ThemeCreate.jsx";
import ThemeDetails from "./pages/themes/ThemeDetails.jsx";
import ThemeEdit from "./pages/themes/ThemeEdit.jsx";
import ThemesIndex from "./pages/themes/ThemesIndex.jsx";

import UserBadges from "./pages/users/UserBadges.jsx";
import UserCreate from "./pages/users/UserCreate.jsx";
import UserLogin from "./pages/users/UserLogin.jsx";
import UserShow from "./pages/users/UserShow.jsx";
import UsersIndex from "./pages/users/UsersIndex.jsx";
import UserSettings from "./pages/users/UserSettings.jsx";

import PrngHome from "./pages/prng/PrngHome.jsx";

/*
Create single component that serves for both edit and new.
Link calls the component with state.
Future: Set (data structure to reduce time).

Retrieve data and store in state, to prevent additional axios calls.
Experiment with className and css.
Create UserContext and ThemeContext.js.  Within, define UserContext nd UserProvider etc.
Wrap Routes within UserProvider then ThemeProvider.  Components within wrap may use UserContext etc.

getAllUsersSortByUserId, /users
getOneUser, /users/:id ==> sub-component renders only if enough access privileges.
createUser, /users/new  ==> form template
deleteUser, /users/:id/edit ==> on form below
updateUser, /users/:id/edit ==> form template

getAllBadgesSortByBadgeId, /badges
getOneBadge, /badges/:id
createBadge, /badges/new
deleteBadge, /badges/:id/edit
updateBadge, /badges/:id/edit

getAllJASUsersBadgesSortByDate, /badges/users/
getAllJASUsersBadgesByUserSortByDate, /users/:id/badges (map to sub-component)
getAllJASUsersBadgesByBadgeSortByDate, /badges/:id/users

==
Renders as a separate subcomponent wherever individual badges may be accessed?  Regardless,
doesn't receive its own route.

getOneJASUserBadge, /users/:id (rendered as sub-component from map) (How would be called using user id and badge id instead of userbadge id?  Covered in class.)
createJASUserBadge, /users/:id (sub-component, form can award to multiple users)
deleteJASUserBadge, /users/:id (sub-component, specify specific badge.  This is technically awkward for real use cases.)
updateJASUserBadge, /users/:id (sub-component, specify specific badge.  As above.)
==

getAllThemesSortByThemeId, /themes
getAllThemesByUserSortByThemeId, /users/:id/themes
getOneTheme, /themes/:id
createTheme, /themes/new (as before, form template)
deleteTheme, /themes/:id/edit (as before, on form below)
updateTheme, /themes/:id/edit (as before, form template)
*/

const App = () => {

  return (
    <Router>
      <UserProvider>
        <ThemeProvider>

          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/users" element={<UsersIndex />} />
              <Route path="/users/new" element={<UserCreate />} />
              <Route path="/user/login" element={<UserLogin />} />
              <Route exact path="/users/:id" element={<UserShow />} />
              <Route path="/users/:id/badges" element={<UserBadges />} />
              <Route path="/users/:id/settings" element={<UserSettings />} />

              <Route path="/badges" element={<BadgesIndex />} />
              <Route path="/badges/new" element={<BadgeCreate />} />
              <Route path="/badges/users" element={<BadgesUsers />} />
              <Route path="/badges/:id" element={<BadgeDetails />} />
              <Route path="/badges/:id/edit" element={<BadgeEdit />} />
              <Route path="/badges/:id/users" element={<BadgeUsers />} />

              <Route path="/themes" element={<ThemesIndex />} />
              <Route path="/themes/new" element={<ThemeCreate />} />
              <Route exact path="/themes/:id" element={<ThemeDetails />} />
              <Route path="/themes/:id/edit" element={<ThemeEdit />} />

              <Route path="/prnghome" element={<PrngHome />} />

              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          
        </ThemeProvider>
      </UserProvider>
    </Router>
  );
};
export default App;