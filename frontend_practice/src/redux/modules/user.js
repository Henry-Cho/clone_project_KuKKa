import { createAction, handleActions } from "redux-actions";
// 불변성 관리 위한 친구
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// actions
//const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// initialState

const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: "anna",
};

// middleware actions
const loginInfo = [];

const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    //실험
    loginInfo.push(user);
    console.log(loginInfo);
    history.push("/");
  };
};

const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    //     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
    //       auth
    //         .signInWithEmailAndPassword(id, pwd)
    //         .then((user) => {
    //           console.log(user);
    //           dispatch(
    //             setUser({
    //               user_name: user.user.displayName,
    //               id: id,
    //               user_profile: "",
    //               uid: user.user.uid,
    //             })
    //           );
    //           history.push("/");
    //         })
    //         .catch((error) => {
    //           var errorCode = error.code;
    //           var errorMessage = error.message;
    //           console.log(errorCode, errorMessage);
    //         });
    //     });
    //   };
  };
};

const signupDB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    // auth
    //       .createUserWithEmailAndPassword(id, pwd)
    //       .then((user) => {
    //         console.log(user);
    //         auth.currentUser
    //           .updateProfile({
    //             displayName: user_name,
    //           })
    //           .then(() => {
    //             dispatch(
    //               setUser({
    //                 user_name: user_name,
    //                 id: id,
    //                 user_profile: "",
    //                 uid: user.user.uid,
    //               })
    //             );
    //             history.push("/");
    //           });
    //       })
    //       .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorCode, errorMessage);
    //       });
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    //const user = getState().user.user;
    const user = loginInfo.pop();

    if (user) {
      dispatch(
        setUser({
          user_id: user.user_id,
          user_pwd: user.user_pwd,
        })
      );
    } else return;
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     dispatch(
    //       setUser({
    //         user_name: user.displayName,
    //         user_profile: "",
    //         id: user.email,
    //         uid: user.uid,
    //       })
    //     );
    //   } else {
    //     dispatch(logOut());
    //   }
    // });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    // auth.signOut().then(() => {
    //   dispatch(logOut());
    //   history.replace("/");
    // });
  };
};

// actionCreators

//const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// reducer

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export

const actionCreators = {
  //logIn,
  loginAction,
  logOut,
  setUser,
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logOutDB,
};

export { actionCreators };