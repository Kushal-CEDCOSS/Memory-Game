import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { matchNumber: "1", image: "https://i.pinimg.com/originals/fd/09/f7/fd09f7c5093408bcdd7510347301920f.png", isRotated: false },
    { matchNumber: "5", image: "https://www.seekpng.com/png/detail/333-3335904_coolest-cartoon-compass-pass-clipart-the-arts-image.png", isRotated: false },
    { matchNumber: "2", image: "https://i.pinimg.com/736x/58/a6/5f/58a65fd028350363334c41c497fbe841.jpg", isRotated: false },
    { matchNumber: "3", image: "https://static.vecteezy.com/system/resources/previews/001/998/896/original/house-in-cartoon-style-isolated-free-vector.jpg", isRotated: false },
    { matchNumber: "2", image: "https://i.pinimg.com/736x/58/a6/5f/58a65fd028350363334c41c497fbe841.jpg", isRotated: false },
    { matchNumber: "6", image: "https://thumbs.dreamstime.com/b/heart-thumbs-up-vector-illustration-72945795.jpg", isRotated: false },
    { matchNumber: "3", image: "https://static.vecteezy.com/system/resources/previews/001/998/896/original/house-in-cartoon-style-isolated-free-vector.jpg", isRotated: false },
    { matchNumber: "1", image: "https://i.pinimg.com/originals/fd/09/f7/fd09f7c5093408bcdd7510347301920f.png", isRotated: false },
    { matchNumber: "4", image: "https://static.vecteezy.com/system/resources/previews/002/047/085/original/brown-cartoon-monster-vector.jpg", isRotated: false },
    { matchNumber: "5", image: "https://www.seekpng.com/png/detail/333-3335904_coolest-cartoon-compass-pass-clipart-the-arts-image.png", isRotated: false },
    { matchNumber: "6", image: "https://thumbs.dreamstime.com/b/heart-thumbs-up-vector-illustration-72945795.jpg", isRotated: false },
    { matchNumber: "4", image: "https://static.vecteezy.com/system/resources/previews/002/047/085/original/brown-cartoon-monster-vector.jpg", isRotated: false },
  ],
  numberOfFlips: 0,
};

export const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    showCard: (state, action) => {
      state.data[action.payload].isRotated = true;
    },

    hideCard: (state, action) => {
      state.data[action.payload].isRotated = false;
    },

    addStep: (state) => {
      state.numberOfFlips += 1;
    }
  },
});

export const { showCard, hideCard, addStep } = memorySlice.actions;

export default memorySlice.reducer;
