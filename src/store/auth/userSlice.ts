import { createSlice } from "@reduxjs/toolkit";
import { UserProps } from "@types";

const defaultProfile: UserProps = {
  fullname: "John Doe",
  username: "guest01",
  auth: [{ role: "guest" }],
  email: "guest@test.com",
  phone: "012345678",
  dob: "Jun 20, 2001",
};

export interface UserInitialProps {
  profile: UserProps | null;
}

const initialState: UserInitialProps = {
  profile: defaultProfile,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
