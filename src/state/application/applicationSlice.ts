import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application } from "../../utils/mockDataGenerator";

interface ApplicationState {
    applications: Application[] | [];
}

const initialState: ApplicationState = {
    applications: [],
};

const applicationSlice = createSlice({
    name: "applications",
    initialState,
    reducers: {
        setApplications(state, action: PayloadAction<Application[]>) {
            state.applications = action.payload;
        },
    },
});

export const { setApplications } = applicationSlice.actions;

export default applicationSlice.reducer;
