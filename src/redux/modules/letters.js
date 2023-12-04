import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../../fakeData.json";

const initialState = fakeData;

const lettersSlice = createSlice({
    name: 'letters',
    initialState: fakeData,
    reducers: {
        addLetter: (state, action) => {
            return [...state, action.payload];
        },
        deleteLetter: (state, action) => {
            return state.filter(letter => letter.id !== action.payload);
        },
        editLetter: (state, action) => {
            const {id, editingText} = action.payload
            return state.map(letter => {
                if (letter.id === id) {
                    return {...letter, content: editingText}
                }
                return letter;
            }); 
        }
    }
});

export const {addLetter, deleteLetter, editLetter} = lettersSlice.actions;
export default lettersSlice.reducer;

