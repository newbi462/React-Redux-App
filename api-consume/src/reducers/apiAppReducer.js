//export
const initialState = {
  pricePair: [
    {symKey: "symValue", priceKey: 0.145578},
    {symKey: "symValue2", priceKey: 1.25548}
  ]
};

//Step 7
// due to REDUX state limitations must hard coe start value
export const apiAppReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "RETURN_API_DATA":
      let payloadSym = Object.keys(action.payload);
      let payloadPrice = Object.values(action.payload);
      let newPricePair = [];

      for (let i = 0; i < payloadSym.length; i++) {
        newPricePair.push({symKey: payloadSym[i], priceKey: payloadPrice[i]})
      }

      return {
        pricePair: newPricePair
      };
    // NEW CASE HERE
    default:
      return state;
  }
};
