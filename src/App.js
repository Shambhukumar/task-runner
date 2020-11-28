import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Contact from "./Components/ContactUs/Contact";
import AddressBook from "./Components/AddressBook/AddressBook";
import TaskManeger from "./Components/TaskManeger/TaskManeger";
import Footer from "./Components/Footer/Footer";

const App=()=> {
  return (
    <React.Fragment>
      <Header/>
    <div className="App">
    
     <TaskManeger/>
      <AddressBook/>
     <Contact/>
    </div>
     <Footer/>
     </React.Fragment>
  );
}

export default App;
