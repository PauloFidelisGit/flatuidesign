const initialState = {
  keyA: 'valueA',
  keyB: 'valueB',
};
// eslint-disable-next-line default-param-last
const nomeAReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_KEYA':
      return { ...state, keyA: action.payload.keyA };
    case 'SET_KEYB':
      return { ...state, keyB: action.payload.keyB };
    default:
      return state;
  }
};
export default nomeAReducer;
