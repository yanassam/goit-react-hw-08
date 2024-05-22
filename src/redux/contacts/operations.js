import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);

      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
