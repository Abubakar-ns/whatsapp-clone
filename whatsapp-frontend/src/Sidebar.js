import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="shl">
          <Avatar src="https://64.media.tumblr.com/6f81e67cf96b12202c5cbff7c55f4e39/3174cc7179b350ea-df/s500x750/c2b261a5718187e745327e34638fa9d693ac9472.jpg"></Avatar>
        </div>
          <div className="shr">
            <IconButton>
              <DonutLarge/>
            </IconButton>
            <IconButton>
              <Chat/>
            </IconButton>
            <IconButton>
              <MoreVert/>
            </IconButton>
          </div>
        </div>
        <div className="search">
            <div className="search-container">
              <SearchOutlined/>
              <input type="text" placeholder="Type a name to start chat"></input>
            </div>

          </div>
          <div className="Sidebar-chat">
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
          </div>
    </div>
  );
}

export default Sidebar;