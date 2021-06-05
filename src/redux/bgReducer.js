const INITIAL_STATE = null;

//selector
export const bgSelector = state => state.bgState;

export const SET_BG = 'bg/set';

export const setBg = color => {
  return {
    type: SET_BG,
    payload: {
      color,
    },
  };
};

export const bgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BG:
      return action.payload.color;

    default:
      return state;
  }
};
