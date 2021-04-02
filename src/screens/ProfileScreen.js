import React from 'react'
import "./ProfileScreen.css";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice"
import { auth } from  "../Firebase"

function ProfileScreen() {
    const user = useSelector(selectUser);


    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body" >
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img className="avatarImage" src="https://lh3.googleusercontent.com/proxy/Bvd1zDDfLF3-gSo0ATRu9MC3dYABcYquIIJ80wEGqnCJVk7CdLjeOPX-QVeWwPryUqMrTjVDJZIurOGYqzMB7G-Ph_9ghaCrwhDuE9HJr8yTI9Bdgn6JreUqGEmr" alt="Avatar" />
                    <div className="profileScreen__details" >
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <p></p>
                            <button onClick={()=> auth.signOut()} className="profileScreen__signOut">Sign Out</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
