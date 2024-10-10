import { createSlice } from '@reduxjs/toolkit'

export const downloadSlice = createSlice({
    name: 'downloads',
    initialState: {
        countDownloads: 0,
    },
    reducers: {
        addDownloadCount: (state) => {
            state.countDownloads += 1
        },
        removeDownloadCount: (state) => {
            state.countDownloads -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { addDownloadCount, removeDownloadCount } = downloadSlice.actions

export default downloadSlice.reducer