import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
    <Card className="container bg-secondary text-light">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Login</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line mt-4">
        <h5>Email:</h5>
          <input
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div className="field-line mt-2">
        <h5>Password:</h5>
          <input
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <button className="btn btn-success mt-4" type="submit" label="Log in" primary>Log In </button>
        </div>

        <CardText>Don't have an account? <Link className="navStyle" to={'/signup'}>Create one</Link>.</CardText>
      </form>
    </Card>
  );

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
