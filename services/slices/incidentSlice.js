import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../apiClient";
import { router } from "expo-router";

export const reportIncident = createAsyncThunk(
  "reportIncident",
  async (reportData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("reports/report", reportData);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue("Unexpected error");
    }
  }
);

const initialState = {
  entity: "",
  dateAndTime: "",
  location: "",
  incidentType: [],
  anyOneInjured: false,
  anyPropertyDamaged: false,
  reportedToPolice: false,
  behavior: [],
  contactMethod: [],
};

const incidentSlice = createSlice({
  name: "incident",
  initialState,
  reducers: {
    setEntity: (state, action) => {
      state.entity = action.payload;
    },
    setDateAndTime: (state, action) => {
      state.dateAndTime = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setIncidentType: (state, action) => {
      state.incidentType = action.payload;
    },
    setAnyOneInjured: (state, action) => {
      state.anyOneInjured = action.payload;
    },
    setAnyPropertyDamaged: (state, action) => {
      state.anyPropertyDamaged = action.payload;
    },
    setReportedToPolice: (state, action) => {
      state.reportedToPolice = action.payload;
    },
    setBehavior: (state, action) => {
      state.behavior = action.payload;
    },
    setContactMethod: (state, action) => {
      state.contactMethod = action.payload;
    },
    resetIncident: () => initialState, // Reset to initial state
  },
  extraReducers: (builder) => {
    builder
      .addCase(reportIncident.pending, (state) => {
        state.loading = true;
      })
      .addCase(reportIncident.fulfilled, (state, action) => {
        state.loading = false;
        router.push("/reportSubmitted");
      })
      .addCase(reportIncident.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setEntity,
  setDateAndTime,
  setLocation,
  setIncidentType,
  setAnyOneInjured,
  setAnyPropertyDamaged,
  setReportedToPolice,
  setBehavior,
  setContactMethod,
  resetIncident,
} = incidentSlice.actions;

export default incidentSlice.reducer;
