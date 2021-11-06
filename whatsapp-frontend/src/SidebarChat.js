import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
function SidebarChat() {
  return (
    <div className="sidebarchat">
        <Avatar src="https://64.media.tumblr.com/6f81e67cf96b12202c5cbff7c55f4e39/3174cc7179b350ea-df/s500x750/c2b261a5718187e745327e34638fa9d693ac9472.jpg"></Avatar>
        <div className="sidebarchat-info">
            <h2>Room Name</h2>
            <p>Hii! How are you?</p>
        </div>
    </div>
  );
}

export default SidebarChat;
