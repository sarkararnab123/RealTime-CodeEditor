import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [roomId , setRoomId] = useState("");
    const [userName , setuserName]  = useState("")
    const navigate = useNavigate()

    const createNewRoom = (e)=>{
        e.preventDefault()
        const id = uuidv4();
        setRoomId(id)
        toast.success('Created a new Room')
}

    const joinRoom = ()=>{
        if(!roomId || !userName){
            toast.error('ROOM ID & username is required');
            return;
        }
        navigate(`/editor/${roomId}`,{
            state:{
                userName
            }
        })

    }

    const handleInputEnter = ()=>{
        if(e.code ==="Enter"){
            joinRoom()

        }
    }


    return (
        <div className='homepageWrapper'>
            <div className='formWrapper'>
                <h2>Code-Sync</h2>
                <h3>Paste invitation ROOM ID</h3>
                <div className='inputgroup'>
                    <input type='text' placeholder='ROOMID' value={roomId} onChange={(e)=> setRoomId(e.target.value)} onKeyUp={handleInputEnter}></input>
                    <input type='text' placeholder='username' value={userName} onChange={(e)=>setuserName(e.target.value)} onKeyUp={handleInputEnter}></input>
                    <button className='btn joinBtn' 
                        onClick={joinRoom}
                    >Join</button>

                    <span className='createInfo'>
                        If you dont have an invite then create <a href='' className='createnewRoomId'
                            onClick={createNewRoom}
                        >New Room</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home