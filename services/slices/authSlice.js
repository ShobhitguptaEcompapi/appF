import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { router } from "expo-router";
import { storeAccessToken } from "@/services/asyncStorage";

const initialState = {
  registerParent: [],
  loggedUser: [],
  forgetPassword: [],
  islogout: false
};

export const registerParent = createAsyncThunk(
  "registerParent",
  async (registerData, { rejectWithValue }) => {
    try {
      const parentData = {
        studentId: registerData.uniqueId,
        email: registerData.email,
        password: registerData.confirmPassword,
      };
      const response = await axios.post(
        "http://192.168.1.32:8080/api/v1/register/parent",
        parentData
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.error);
      }
      // Fallback error message
      return rejectWithValue("Unexpected error");
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ userInput, deviceToken }, { rejectWithValue }) => {
    console.log("=======userInput, deviceToken======" ,userInput, deviceToken)
    try {
      console.log("signup clicked",{...userInput,deviceToken})
      const response = await axios.post(
        "http://192.168.1.33:8080/api/v1/app/login",
        { ...userInput, deviceToken },
        { withCredentials: true }
      );
      const data = response.data;
      console.log("=====login data====", data)

      const token = response.headers["set-cookie"][0]
        .split(";")
        .find((cookiePart) => cookiePart.trim().startsWith("access-token="))
        .split("=")[1];

      console.log("==========token========", token)
      storeAccessToken(token);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.error);
      }
      // Fallback error message
      return rejectWithValue("Unexpected error");
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "forgetPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.1.32:8080/api/v1/forgetPassword",
        { email: email }
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.error);
      }
      // Fallback error message
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (deviceToken, { rejectWithValue }) => {
    console.log("==========device token==", deviceToken)
    try {
      const response = await axios.post(
        "http://192.168.1.12:8000/api/v1/app/logout",
        { deviceToken: deviceToken }
      );
      const data = response.data;
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // loginUser: (state, action) => {
    //   state.books.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   state.books = state.books.filter((book) => book.id !== action.payload);
    // },
    resetError(state) {
      state.error = null;
    },
    resetRegisterParent(state) {
      state.registerParent = [];
    },
    resetForgetPassResponse(state) {
      state.forgetPassword = [];
    },
    setLogout(state) {
      state.islogout = true
      state.loggedUser = []
    },
    setLogin(state) {
      state.islogout = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedUser = action.payload;
        console.log(action.payload)
        // router.replace("/(tabs)/Helpline");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerParent.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerParent.fulfilled, (state, action) => {
        state.loading = false;
        state.registerParent = action.payload;
        router.push("/registerSuccess");
      })
      .addCase(registerParent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgetPassword = action.payload;
        router.push("/passwordEmailSent");
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.islogout = true
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export const { resetError, resetRegisterParent, resetForgetPassResponse, setLogout, setLogin } =
  authSlice.actions;

export default authSlice.reducer;
