import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Main from './components/Main';
import styled from 'styled-components';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage';
import News from './components/News';
import ProfilePage from './components/ProfilePage';
import Context from './components/Context';

const AppWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  background: #eeee;
  padding-top: 20px;
`;

function App() {

  const [state, setState] = useState([
    {username: 'Admin', password: '12345', rememberMe: false},
    // {usernameEnter: '', passwordEnter: '12345', rememberMe: false},
  ])

  const [usernameEnter, setUsernameEnter] = useState('')
  const [passwordEnter, setPasswordEnter] = useState('')
  const [rememberMeEnter, setRememberMeEnter] = useState(false)
  const [logged, setLogged] = useState(false)

  // const onHandleChange = (text) => {
  //   console.log(text)
  // }

  const onHandleCheck = (e) => {
    e.preventDefault()
    state.map((item) => {
      if(item.username === usernameEnter && item.password === passwordEnter) {
        if(rememberMeEnter){
          setLogged(true)
          localStorage.setItem('username', usernameEnter)
          localStorage.setItem('password', passwordEnter)
          localStorage.setItem('rememberMe', rememberMeEnter)
          localStorage.setItem('logged', logged)
          setUsernameEnter('')
          setPasswordEnter('')
        } else {
          setLogged(true)
          setUsernameEnter('')
          setPasswordEnter('')
        }

      } else {
        alert('Login or Password is wrong')
      }
    })
  }

  return (
    <React.Fragment>
      <Context.Provider value={{
        state, usernameEnter, setPasswordEnter, 
        setUsernameEnter, passwordEnter, onHandleCheck,
        logged, rememberMeEnter, setRememberMeEnter
      }}>
        <AppWrapper>
          <Header />
        </AppWrapper>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/news" component={News} />
          {
            localStorage.getItem('rememberMe') 
            ?  <Route path="/profile" component={() => localStorage.getItem('logged') ? <ProfilePage /> : <Redirect to="/login" />} />
            :  <Route path="/profile" component={() => logged ? <ProfilePage /> : <Redirect to="/login" />} />
          }
        </Switch>
      </Context.Provider>
    </React.Fragment>
  );
}

export default App;
