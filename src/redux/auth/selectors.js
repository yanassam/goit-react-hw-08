export const selectIsLoggedIn = (state) => {
  console.log(state);
  return state.auth.isLoggedIn;
};
export const selectUserEmail = (state) => state.auth.user.email;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
