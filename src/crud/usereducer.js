import { createSlice } from '@reduxjs/toolkit'
import { userList } from './data'

const userSlice = createSlice(
    {
        name : "user",
        initialState: userList,
        reducers:{
            addUser : (state,action)=>{
                state.push(action.payload)

            },
            updateUser : (state,action)=>{
                const {id , name, email } = action.payload;
                const updateUser = state.find((user)=> user.id == id);
                if(updateUser){
                    updateUser.name = name;
                    updateUser.email = email;
                    
                }
            },
            deleteUser : (state,action)=>{
                const { id } = action.payload;
                const uu = state.find((user)=>user.id==id);
                if (uu){
                    return state.filter((f)=>(f.id!==id));
                }
            }

        }
    }
)
export const { addUser,updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;