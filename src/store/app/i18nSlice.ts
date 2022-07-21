import { createSlice } from "@reduxjs/toolkit";
import { LangConfig } from "@cozde/config";
import { LangaugeSettingProps } from "@types";

const initialState: LangaugeSettingProps = LangConfig;

const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default i18nSlice.reducer;
