import React, { useEffect } from 'react';
import './App.css';
import Homescreen from "./screens/Homescreen";
import LoginScreen from "./screens/LoginScreen"
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from './Firebase';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from "./screens/ProfileScreen";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //Logged in 
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        // Logged out
          dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
    <Router>
      {!user ? ( <LoginScreen /> 
      ): (
     <Switch>
        <Route path="/profile">
          <ProfileScreen />
        </Route>
          <Route exact path="/">
            <Homescreen />
          </Route>
        </Switch>
        )}
    </Router>

    </div>
  );
}

export default App;
