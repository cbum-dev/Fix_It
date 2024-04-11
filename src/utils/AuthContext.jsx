import { createContext, useState, useEffect, useContext} from "react";
import { COLLECTION_ID_USERS, DATABASE_ID, account, databases } from "../config";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../store/Slicer/authSlice";
import { useNavigate } from "react-router";
import { ID} from 'appwrite';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        getUserOnLoad()
    }, [])

    const getUserOnLoad = async () => {
        try{
            let accountDetails = await account.get();
            dispatch(setUser(accountDetails))
        }catch(error){
            console.error(error)
            
        }
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()
        console.log('CREDS:', credentials)

        try{
            let response = await account.createEmailSession(credentials.email, credentials.password)
            let accountDetails = await account.get();
            dispatch(setUser(accountDetails))
            navigate('/')
        }catch(error){
            console.error(error)
        }
    }

    const handleLogout = async () => {
        const response = await account.deleteSession('current');
        dispatch(logout())
        navigate('/')
    }

    const handleRegister = async (e, credentials) => {
        e.preventDefault()
        console.log('Handle Register triggered!', credentials)

        if(credentials.password1 !== credentials.password2){
            alert('Passwords did not match!')
            return 
        }

        try{
            
            let response = await account.create(ID.unique(), credentials.email, credentials.password1, credentials.name);
            console.log('User registered!', response)
            const payload = {
                username: response.name, // Adjust this based on your data structure
                user: response.$id, // Assuming response.$id contains the user ID
                // Add other user-related data as needed
              };
              await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID_USERS,
                ID.unique(),
                payload,
                );
            await account.createEmailSession(credentials.email, credentials.password1)
            let accountDetails = await account.get();
            dispatch(setUser(accountDetails))
            navigate('/')
        }catch(error){
            console.error(error)
        }
    }
    return loading ? <p className="text-white">Loading...</p> : children;
}

export default AuthContext;