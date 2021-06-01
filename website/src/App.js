import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { createContext, useState } from "react";
import Home from './components/Home/Home/Home'
import BookAppointment from "./components/Dashboard/BookAppointment/BookAppointment";
import PrivateRoute from "./components/Login/PrivateRoute";
import AddTestimonial from "./components/AddTestimonial/AddTestimonial";
import Login from "./components/Login/Login";


export const UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addBooking">
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <PrivateRoute path="/addTestimonial">
              <AddTestimonial></AddTestimonial>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
