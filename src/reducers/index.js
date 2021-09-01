
const stateInit = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const addReducer = (state = stateInit, action) => {

    switch (action.type) {
        case "ADDZEROCROSS":
            let index = action.arrayIndex;
            let playerType = action.playerName;
            //  using map method we are setting the desired index value to "X" or "O" and returning the rest value as it is           
            let finalState = state.map((element, index1) => {
                if (index === index1) {
                    if (playerType === "O") {
                        return "O";
                    }
                    else {
                        return "X";
                    }
                }
                else {
                    return element;
                }
            });

            return finalState;

            break;

        case "DELETEZEROCROSS": return [" ", " ", " ", " ", " ", " ", " ", " ", " "];
            


        default: return state;

    }

}

export default addReducer;