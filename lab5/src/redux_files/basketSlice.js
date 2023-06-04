import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        data: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.data.push(action.payload);
        },
        setList: (state, action) => {
            state.data = action.payload;
        },
        findVilla: (state, action) => {
            const city = action.payload;
            state.data = state.data.filter((villa) => villa.address.includes(city));
        },
        changeFollowedToTrue: (state, action) => {
            const id = state.data.findIndex((villa) => villa.id === action.payload);
            if (id !== -1) {
                state.data[id].followed = true;
            }

        },
        changeFollowedToFalse: (state, action) => {
            const id = state.data.findIndex((villa) => villa.id === action.payload);
            if (id !== -1) {
                state.data[id].followed = false;
            }

        },

    }

});
export const { changeFollowedToFalse, changeFollowedToTrue, addItem, setList, findVilla } = basketSlice.actions;
export default basketSlice.reducer;