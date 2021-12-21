import React, {useRef, useEffect, useState} from 'react';
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import { ChatEngine } from 'react-chat-engine'; 
import { auth } from "../firebase"; 

import { useAuth } from "../contexts/AuthContext"; 

function Chats() {
    const navigate = useNavigate()
    const { user } = useAuth();

    //Loading state
    const [loading, setLoading] = useState(true); 

    //Logout function
    const handleLogout = async () => { 
        await auth.signOut(); 
        navigate('/'); 
    }

    //Get image from user 
    const getFile = async (url) => { 
        const response = await fetch(url); 
        const data = await response.blob(); 

        return new File([data], "userImage.jpg", {type: "image/jpeg"})
    }

    //Fetch for users 
    useEffect(() => { 
        if(!user) { 
            navigate('/'); 
            return; 
        } 
        axios.get('https://api.chatengine.io/users/me', 
        { 
            headers: { 
                "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                "user-name": user.email,
                "user-secret": user.uid, 
            } 
        })
        .then(() => { 
            setLoading(false); 
        })
        .catch(() => { 
            let formData = new FormData(); 
            formData.append('email', user.email); 
            formData.append('username', user.email); 
            formData.append('secret', user.uid); 

            getFile(user.photoURL)
                .then((avatar) => { 
                    formData.append('avatar', avatar, avatar.name);
                    axios.post("https://api.chatengine.io/users", 
                        formData, 
                        {headers: {"private-key": process.env.REACT_APP_CHAT_ENGINE_KEY}}
                    )
                    .then(() => setLoading(false))
                    .then ((error) => console.log(error))
                })
        })
    }, [user, navigate])

    if(!user || loading) return <div><h1>Please wait..</h1><h3>Loading...</h3></div>

    return (
        <main className = "chat-page">
            <nav className = "nav-bar">
                <div id = "nav-logo">
                    KlumpsyChat
                </div>
                <div className = "nav-links">
                    <button
                    id = "nav-logout-button"
                    onClick = {handleLogout}
                    >Logout
                    </button>
                </div>
            </nav>
            <ChatEngine
            height="calc(100vh - 66px)"
            projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
            userName = {user.email}
            userSecret= {user.uid}
            />
        </main>
    )
}

export default Chats
