import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    menu: [
        {id: 1, name: 'main'},
        {id: 2, name: 'education'},
        {id: 3, name: 'skills'},
        {id: 4, name: 'experiences'},
        {id: 5, name: 'contacts'},
    ]
}

const menuSlice = createSlice({
    name: 'menu',
    initialState
})

export default menuSlice.reducer