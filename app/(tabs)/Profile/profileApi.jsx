import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export async function fetchProfile() {
    try {
        console.log("fetch api called");
        const response = await axios.get("http://192.168.1.12:8000/api/v1/profile/getProfile/fetchData", {
            withCredentials: true,
        });
        console.log("=== after fetch===", response);
        return response.data;  // Return the data directly if the request is successful
    } catch (error) {
        console.error("=== Error fetching profile ===", error);

        return error;
    }
}
