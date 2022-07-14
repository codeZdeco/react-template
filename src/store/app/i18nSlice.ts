import { createSlice } from "@reduxjs/toolkit";
import { i18nConfig } from "@cozde/config";
import { LangaugeSettingProps } from "@types";

const initialState: LangaugeSettingProps = i18nConfig;

const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default i18nSlice.reducer;
