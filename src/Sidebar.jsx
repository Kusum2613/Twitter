import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import { Twitter } from '@mui/icons-material';
import "./Sidebar.css"
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Twitter className="sidebar__twitterIcon"/>
        <SidebarOption active Icon = {HomeIcon} text = "Home" />
        <SidebarOption Icon = {SearchIcon} text = "Explore" />
        <SidebarOption Icon = {NotificationsNoneOutlinedIcon} text = "Notifications " />
        <SidebarOption Icon = {MailOutlineOutlinedIcon} text = "Messages " />
        <SidebarOption Icon = {BookmarkBorderIcon} text = "Bookmarks " />
        <SidebarOption Icon = {PermIdentityIcon} text = "Profile " />
        <SidebarOption Icon = {MoreHorizIcon} text = "More.." />
            
        <Button variant = "outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        
       
    </div>
  )
}

export default Sidebar