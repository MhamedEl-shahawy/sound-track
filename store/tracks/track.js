import {createSlice} from '@reduxjs/toolkit';

  
const trackPlayer = createSlice({
    name:"trackPlayer",
    initialState:{track:"",trackIndex:"",allTracks: ["always with me","ambiant relax","love song","childhood memories","cinematic fairy","fading of the day","forest story acoustic","inspiring cinematic","in the cave","melody of nature","mindfulness relaxation","motivated","soft daydream","stylish lofi chill"],status: null},
    reducers:{
       getTrackName(state,action){
        if(action.payload === "next"){
            state.trackIndex += 1;
            if(state.trackIndex < state.allTracks.length){
                state.track = state.allTracks[state.trackIndex];  
            }else{
                state.track = ""; 
                state.trackIndex = 0;
             }
        }else if(action.payload === "previous"){
            state.trackIndex -= 1;
            if(state.trackIndex >= 0){
                state.track = state.allTracks[state.trackIndex];
            }else{
                state.track = ""; 
                state.trackIndex = 0;
             }
        }else{
            state.track = action.payload.name;  
            state.trackIndex = action.payload.index;
        }
       } 
    },
    
    
});
export const {getTrackName} = trackPlayer.actions;

export default trackPlayer.reducer;