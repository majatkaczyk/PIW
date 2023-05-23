import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux_files/basketSlice";

export default configureStore({
    reducer: { basket: basketReducer }
});