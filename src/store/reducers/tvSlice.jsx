import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null,
}

export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        loadtv:(state,action)=>{
            state.info=action.payload;
        },
        removetv:(state,action)=>{
            state.info=null;
        },
        
    },
   
  })
  
  // Action creators are generated for each case reducer function
  export const { loadtv,removetv } = tvSlice.actions
  
  export default tvSlice.reducer





// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   info: null,
//   loading: false,
// };

// export const tvSlice = createSlice({
//   name: 'tv',
//   initialState,
//   reducers: {
//     loadtv: (state, action) => {
//       state.info = action.payload;
//       state.loading = false;
//     },
//     removetv: (state) => {
//       state.info = null;
//       state.loading = true; 
//     },
//   },
// });

// export const { loadtv, removetv } = tvSlice.actions;
// export default tvSlice.reducer;






// export const tvSlice = createSlice({
//     name: 'tv',
//     initialState: {
//         info: null,
//     },
//     reducers: {
//         loadtv: (state, action) => {
//             console.log("Dispatched loadtv Action with Data:", action.payload);  // ✅ Debug Action Payload
//             state.info = action.payload;
//         },
//         removetv: (state) => {
//             console.log("Dispatched removetv Action - Clearing Data");  // ✅ Debug Removal
//             state.info = null;
//         },
//     },
// });

// export const { loadtv, removetv } = tvSlice.actions;
// export default tvSlice.reducer;





