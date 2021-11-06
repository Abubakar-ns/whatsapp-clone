import React,{useEffect,useState} from 'react';
import './App.css';
import Chatbar from './Chatbar';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {
  const [messages,setMessages]=useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response=>{
        setMessages(response.data); 
      })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('9fec16a8c13a6657df52', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=>{
      setMessages([...messages,newMessage]);
    }); 
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])
  console.log(messages);
  return (
      <div className="app">
          <Sidebar/>
          <Chatbar messages={messages}/>
      </div>
  );
}

export default App;
