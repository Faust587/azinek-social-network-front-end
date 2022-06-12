const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
  SET_REFRESH_TOKEN: 'SET_REFRESH_TOKEN',
  REMOVE_USER: 'SET_USER',
  SIGN_IN_USER: 'SIGN_IN_USER',
};

const defaultState = { };

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER: {
      return { ...state, user: action.payload };
    }
    case ACTIONS.REMOVE_USER: {
      return { ...state, user: defaultState };
    }
    case ACTIONS.SET_ACCESS_TOKEN: {
      return { ...state, accessToken: action.payload };
    }
    case ACTIONS.SET_REFRESH_TOKEN: {
      return { ...state, refreshToken: action.payload };
    }
    case ACTIONS.SIGN_IN_USER: {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    }
    default:
      return state;
  }
};

export const setUserAction = (payload) => ({ type: ACTIONS.SET_USER, payload });

export const setAccessTokenAction = (payload) => ({ type: ACTIONS.SET_ACCESS_TOKEN, payload });

export const setRefreshTokenAction = (payload) => ({ type: ACTIONS.SET_REFRESH_TOKEN, payload });

export const removeUserAction = () => ({ type: ACTIONS.REMOVE_USER, payload: null });

export const signInAction = (payload) => ({ type: ACTIONS.SIGN_IN_USER, payload });
