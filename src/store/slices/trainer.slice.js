import { createSlice } from "@reduxjs/toolkit";

const trainer = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (_value, action) => {
            const name = action.payload;
            return name
        }
    }
});

export const { setTrainer } = trainer.actions;

export default trainer.reducer;