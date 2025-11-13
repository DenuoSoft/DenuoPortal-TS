import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, CredentialsPayload } from '../../models/authSliceModel'

const initialState = {
  token: null,
  user: null,
  status: 'idle',
}
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
      const { token, user} = action.payload
      state.token = token
      state.user = user
      
    },
    logout: (state) => {
      state.token = null
      state.user = null
    },
  },
})
export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state: { auth: AuthState }) => state.auth.token
