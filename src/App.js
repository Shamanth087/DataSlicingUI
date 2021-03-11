import React from 'react'
import './App.scss';
import { AiFillEye } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { MdChatBubble } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import Slicing from './components/slicing';
import Channels from './components/channels';
import Timeline from './components/timeline';

export default class App extends React.Component {
   render() {
    return (
      
      //Hearder icons
      <div className="App">
        <div className="icons">
           <AiFillEye className="eye" size={25}/>
          <HiLightBulb className="bulb" size={25}/>
          <MdChatBubble className="chat" size={20}/>
          <BiDotsVerticalRounded className="dots" size={25}/> 
          
         
        </div>
        <div className="close" >
          <IoIosClose className="close" size={30}/>
        </div>
        
        <Channels/>
        <Slicing/>
        <Timeline/>
        
        
      
            
        
         
      </div>
    );
  }

  }
  


