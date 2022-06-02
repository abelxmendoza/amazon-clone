import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";



// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBb7Dc_Ql_Q8lG98MTVU3ylF4YcC-ZviNk",

  authDomain: "clone-9fa80.firebaseapp.com",

  projectId: "clone-9fa80",

  storageBucket: "clone-9fa80.appspot.com",

  messagingSenderId: "629907794621",

  appId: "1:629907794621:web:16edf0eda74f25ca0f25d4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);





function App() {
  return (

    <Router>
      <div className="App">
        
        <Switch>
          <Route path = "/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            
            <Header />
            <Home />
            

          </Route>
       
        </Switch>
        
      
      </div>

    </Router>
    
    


  );
}

export default App;
