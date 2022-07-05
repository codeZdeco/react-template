import axios from "@axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "@types";

const defaultProfile: UserProps = {
  fullname: "John Doe",
  username: "guest01",
  auth: [{ role: "guest", group: "development" }],
  email: "guest@test.com",
  phone: "012345678",
  dob: "Jun 20, 2001",
};

export interface UserInitialProps {
  information: UserProps | null;
}

const initialState: UserInitialProps = {
  information: defaultProfile,
};

export const getProfileInfo = createAsyncThunk(
  `profile/getProfileInfo`,
  async () => {
    const response = await axios.get("/");

    return response;
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default profileSlice.reducer;
