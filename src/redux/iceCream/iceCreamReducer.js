import { BUY_ICE_CREAM } from "./iceCreamActionTypes";
const initialState = {
  numOfIceCream: 1000,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
