import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from '../Firebase/Firebase';
import loginBg from '../../images/loginBg.jpg';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }
  
      return (
          <div style={{marginTop: '50px'}} className="container">
              <div className="row align-items-center">
                  <div className="col-md-6 shadow p-5">
                      <button style={{color: 'white', height: '50px', width: '130px', backgroundColor: 'gray', borderRadius: '10px', fontSize: '18px'}} className="" onClick={handleGoogleSignIn}><b>Google Sign in</b> </button>
                  </div>
                  <div className="col-md-6 d-none d-md-block align-self-end">
                      <img className="img-fluid" src={loginBg} alt="" />
                  </div>
              </div>
          </div>
      );
  };
  
  export default Login;