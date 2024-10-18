import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='px-5 py-2 text-white bg-red-500 hover:bg-red-700 rounded-full transition duration-300 ease-in-out'
    onClick={logoutHandler}
  >
    Logout
  </button>
  
  )
}

export default LogoutBtn