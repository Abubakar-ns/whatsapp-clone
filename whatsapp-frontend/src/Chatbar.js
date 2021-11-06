import { Avatar, IconButton } from '@material-ui/core';
import {AttachFile, InsertEmoticon, Mic, MicOff, MoreVert, RecordVoiceOver, SearchOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import './Chatbar.css';
import axios from './axios';
function Chatbar({messages}) {
  const [input,setInput]=useState("");
  const sendMessage= async (e)=>{
    e.preventDefault();
    await axios.post('/messages/new',{
      message: input,
      name: "Abubakar",
      timeStamp: "Just Now!",
      received: true,
    })
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat-header">
      <Avatar src="https://64.media.tumblr.com/6f81e67cf96b12202c5cbff7c55f4e39/3174cc7179b350ea-df/s500x750/c2b261a5718187e745327e34638fa9d693ac9472.jpg"></Avatar>
      <div className="ch-info">
            <h2>Room Name</h2>
            <p>Last Seen Fri,30 Oct 2021</p>
      </div>
      <div className="ch-icons">
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFile/>
            </IconButton>
            <IconButton>
              <MoreVert/>
            </IconButton>
      </div>
      </div>
      <div className="chat-body">
        {messages.map((message)=>(
          <p className={`chat-message ${message.received && "chat-receiver"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {new Date().toUTCString()}
            </span>
          </p>
          
        ))}
        

      </div>
      <div className="chat-footer">
        <InsertEmoticon/>
        <form>
        <input 
          value={input}
          onChange={(e)=>setInput(e.target.value)}  
          type="text" placeholder="type a message"
        />
        <button
          onClick={sendMessage}
          type="submit"
        >
          Send a Message
        </button>
        </form>
        <Mic/>
      </div>
    </div>
  );
}

export default Chatbar;