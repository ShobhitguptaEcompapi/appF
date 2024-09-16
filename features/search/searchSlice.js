import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchKeyword } from './searchApi';

const initialState = {
  status: 'idle',
  result: {},
  error : null,
  isResultRecieved : false,
  topics : [],
  lessonData : [],
  mediaData : []
};

export const searchKeywordAsync = createAsyncThunk(
  'search/searchKeyword',
  async (keyword, { rejectWithValue } ) => {
    try{
      const response = await searchKeyword(keyword);
    return response.data;
    }catch(error){
      console.log("slice error" ,error);
      return rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchKeywordAsync.pending, (state) => {
        state.status = 'loading';
        state.result= {},
        state.topics = []
      })
      .addCase(searchKeywordAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.result = action.payload;
        // console.log(action.payload)
        state.error = null;
        isResultRecieved = true;
  const { lessonData, mediaData } = action.payload;
        state.lessonData = lessonData;
        state.mediaData = mediaData;
  const uniqueCategories = [...new Set(mediaData.map(media => media.category))];

  if (lessonData && lessonData.length > 0) {
    uniqueCategories.push("ARP Videos");
  }
  const finalCategories = [...new Set(["All", ...uniqueCategories])];
  state.topics = finalCategories;

  // console.log(finalCategories); // Optional: To check the final array
  // console.log(Array.isArray(finalCategories)); // Output: true

  // console.log(typeof finalCategories)
  
        // console.log([...new Set(action.payload.mediaData.map((item,i)=>(item.category)))])
        // const topic = [...new Set(action.payload.mediaData.map((item,i)=>( categ =item.category)))]
        // console.log(topic)
        // state.topics = topic;

      })
      .addCase(searchKeywordAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
        state.result = {};
        state.lessonData = [];
        state.mediaData = [];
        state.topics = []
        isResultRecieved = false;
      });
  },
});



export const selectResult = (state)=>state.search.result;
export const selectTopics = (state)=>state.search.topics;
export const selectlessonData = (state)=>state.search.lessonData;
export const selectmediaData = (state)=>state.search.mediaData;
export const selectisResultRecieved = (state)=>state.search.isResultRecieved;


export default searchSlice.reducer;