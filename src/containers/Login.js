import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import EmailValidationEnum from '../enums/EmailValidationEnum';
import ToastEnum from '../enums/ToastEnum';
import Validator from '../helpers/Validators';
import UserService from '../helpers/UserService';
import { emailChange, passwordChange, emailValidationChange, loginRequest, loginSuccess, loginFailure } from '../actions/LoginAction';
import { withRouter } from 'react-router-dom';

import wg1 from '../assets/images/wg1.png';

class Login extends Component {
  constructor(props) {
    super();
  }

  notify (notice, type) {
    if (!toast.isActive(this.toastId)) {
      if(type === ToastEnum.ERROR) toast.error(notice);
      if(type === ToastEnum.SUCCESS) toast.success(notice);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var emailValidator = Validator.isEmail(this.props.login.email);
    if(!emailValidator.validation) {
      return this.props.emailValidationChange(EmailValidationEnum.NOT_VALID);
    }

    this.props.loginRequest();
    UserService.login(this.props.login.email, this.props.login.password).then((resp) =>{
      if(resp.statusCode === 200) {
        this.props.loginSuccess();
        this.props.history.push('/browse');
      }
      else {
        this.props.loginFailure();
        this.notify(resp.message, ToastEnum.ERROR);
      }
    });
  }

  handleEmailOnBlur(event) {
    if(!Validator.isEmail(this.props.login.email).validation) {
      this.props.emailValidationChange(EmailValidationEnum.NOT_VALID);
      this.notify(Validator.isEmail(this.props.login.email).error, ToastEnum.ERROR);
    } else {
        this.props.emailValidationChange(EmailValidationEnum.VALID);
    }
  }

  handleEmailChange(event) {
    this.props.emailChange(event.target.value);
  }

  handlePWChange(event) {
    this.props.passwordChange(event.target.value);
  }

  render() {
    return (
        <div className="login container">
          <div className="login-wrap">
              <img src={wg1}/>
              <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className={"input " +(this.props.login.emailValidation === "NOT_VALID" ? "is-danger" : "") + (this.props.login.emailValidation === "VALID" ? "is-success" : "") }
                           type="email"
                           placeholder="Email"
                           value={this.props.login.email}
                           onChange={this.handleEmailChange.bind(this)}
                           onBlur={this.handleEmailOnBlur.bind(this)}/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className={(this.props.login.emailValidation === "VALID" ? "fa fa-check" : "") + (this.props.login.emailValidation === "NOT_VALID" ? "fa fa-warning" : "")}></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input"
                           type="password"
                           placeholder="Password"
                           value={this.props.login.password}
                           onChange={this.handlePWChange.bind(this)}/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button type="submit" className="button">
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
            />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ emailChange, passwordChange, emailValidationChange, loginRequest, loginSuccess, loginFailure }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
