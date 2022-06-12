import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import FailConfirmRegistrationPage from './Pages/FailConfirmRegistrationPage';
import SuccessRegistrationPage from './Pages/SuccessRegistrationPage';
import Error404Page from './Pages/Error404Page';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import RegistrationConfirmationPage from './Pages/RegistrationConfirmationPage';
import SignInPage from './Pages/SignInPage';
import AdminPage from './Pages/AdminPage';
import MainLayout from './UI/Templates/Layouts/MainLayout';
import SearchPage from './Pages/SearchPage';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route exact path="/success/:username/:email" component={SuccessRegistrationPage} />
          <Route exact path="/reset-password/:token" component={ResetPasswordPage} />
          <Route path="/confirm-register/:userName" component={RegistrationConfirmationPage} />
          <Route path="/fail-confirm-register/:userName?" component={FailConfirmRegistrationPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </MainLayout>
    </Router>
  );
}
