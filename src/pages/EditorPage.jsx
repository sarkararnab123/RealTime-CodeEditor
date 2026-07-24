import React, { useState } from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'
import './EditorPage.css'

const EditorPage = () => {
    const [clients, setClients] = useState([
        { socketId: 1, username: "rakesh" },
        { socketId: 2, username: "John" }
    ])

    return (
        <div className='mainWrap'>
            <div className='aside'>
                <div className='asideInner'>
                    <div className='logo'>
                        <h2 className='logo-text'>Code-Sync</h2>
                    </div>
                    <h3>Connected</h3>
                    <div className='clientsList'>
                        {clients.map(client => (
                            <Client key={client.socketId} username={client.username} />
                        ))}
                    </div>
                </div>
                <button className='btn copyBtn'>Copy ROOM ID</button>
                <button className='btn leaveBtn'>Leave</button>
            </div>
            <div className='editorWrap'>
                <Editor />
            </div>
        </div>
    )
}

export default EditorPage