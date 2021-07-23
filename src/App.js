import logo from './logo.svg';
import './App.css';
import React , { useState, useEffect }from "react";
import { db } from './firebase'; 
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Koinonia from './components/Koinonia/Koinonia';




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
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/preferences">
          <Preferences />
        </Route>
        <Route exact path="/koinonia">
          <Koinonia />
        </Route>
      </Switch>
    </HashRouter>
  </div>
  );
}

export default App;
