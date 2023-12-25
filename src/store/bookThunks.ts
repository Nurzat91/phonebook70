import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ContactList} from "../types";

export const bookfetchData = createAsyncThunk(
'contack/fetchData',
  async (data: ContactList, thunkAPI) => {
    try {
      const response = await axiosApi.post('contact.json', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

