import { alertConstants } from '../constants/alertCnstants';
import { userConstants } from '../constants/userConstants';
import { userService } from '../services/userService';
import { episodesService } from '../services/episodesService';

const success = message => ({ type: alertConstants.SUCCES, message });
const error = message => ({ type: alertConstants.ERROR, message });
const clear = message => ({ type: alertConstants.CLEAR, message });

export const alertAction = {
  success,
  error,
  clear
};

const login = (username, password) => {
  const request = user => ({ type: userConstants.LOGIN_REQUEST, user });
  const success = user => ({ type: userConstants.LOGIN_SUCCESS, user });
  const failure = user => ({ type: userConstants.LOGIN_FAILURE, user });

  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertAction.error(error.toString()));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

export const userAction = {
  login,
  logout
};
