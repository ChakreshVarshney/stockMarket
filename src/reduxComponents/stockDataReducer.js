const initialState = [];

const stockDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STOCK_DATA':
            return action.payload;
        default:
            return state;
    }
};

export default stockDataReducer;
