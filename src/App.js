import logo from './logo.svg';
import './App.css';
import React , { useState, useEffect }from "react";
import { db } from './firebase'; 
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';




function App() {
  const [books, setBooks] = useState([]);

  // useEffect(  ()  => {
  //   async function fetchData() {
      
  //     const unsub = await db.collection('pedidos') .onSnapshot(querySnapshot => {
  //       querySnapshot.docChanges().forEach(change => {
  //         if (change.type === 'added') {
  //           console.log('New city: ', change.doc.data());
  //           setBooks(change.doc.data());
  //         }
  //         if (change.type === 'modified') {
  //           console.log('Modified city: ', change.doc.data());
  //           setBooks(change.doc.data());
  //         }
  //         if (change.type === 'removed') {
  //           console.log('Removed city: ', change.doc.data());
  //           setBooks(change.doc.data());
  //         }
  //       });
  //     });
  //   }
  //   fetchData()
    
    
  // }, []);

  return (
    <div className="wrapper">
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
