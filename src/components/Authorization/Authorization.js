import React, { Component } from 'react';
import LogInForm from '../LogInForm/LogInForm';
import * as authActions from '../../redux/actions/authorization';
import { connect } from 'react-redux';

class Authorization extends Component {
  handleSubmit = values => {
    const { history, login } = this.props;
    if (values.username === 'admin' && values.password === '123') {
      login();
    }
    history.push('/');
  };
  render() {
    return (
      <>
        <div className="form">
          <div className="container">
            <h2 className="form__logan">LOG IN</h2>
            <LogInForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ admin }) => ({
  admin,
});
export default connect(
  mapStateToProps,
  authActions
)(Authorization);
