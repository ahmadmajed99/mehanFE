function reducer(state = { currentLanguage: "en", isLogin: false }, action) {
  switch (action.type) {
    case "currentLanguageChange":
      return {
        ...state,
        currentLanguage: action.currentLanguage,
      };
    case "loginHandling":
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
}
export default reducer;
