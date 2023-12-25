import {ContactList} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {bookfetchData} from "./bookThunks";
import {RootState} from "../app/store";

interface BookState {
  contactList: ContactList[];
  fetchLoading: boolean;
}

const initialState: BookState = {
  contactList: [],
  fetchLoading: false,
}

export const bookSlice = createSlice({
  name: 'contack',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookfetchData.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(bookfetchData.fulfilled, (state,action: PayloadAction<ContactList[]>) => {
      state.fetchLoading = false;
      state.contactList = action.payload;
    });
    builder.addCase(bookfetchData.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const bookReducer = bookSlice.reducer;

export const  contactListData = (state: RootState) => state.contack.fetchLoading;
export const  fetchLoadingData = (state: RootState) => state.contack.fetchLoading;