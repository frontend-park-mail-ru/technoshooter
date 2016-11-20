import React from 'react'
import Form from '../../components/Form/Form'
import Paper from 'material-ui/Paper';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router'

import './Signin.scss';

const Signin = () => (
  <div className="signin">
    <Logo />
    <h1 className="signin__title">Sign in to TechnoShooter</h1>
    <Paper zDepth={3} className="signin__form">
      <Form
        data={
          {
            fields: [
              {
                id: 1,
                name: 'login',
                type: 'text',
                label: 'Username',
                required: true,
              }, {
                id: 2,
                name: 'password',
                type: 'password',
                label: 'Password',
                required: true,
              },
            ],
            controls: {
                name: 'Sign in'
            }
          }
        }
      />
    </Paper>
    <Paper zDepth={3} className="signin__link">
      <span>New to TechnoShooter?&nbsp;
        <Link to={`/signup/`} className="signin__link__a">
          Create an account.
        </Link>
      </span>
    </Paper>
  </div>
);

export default Signin