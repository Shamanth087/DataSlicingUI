import React from 'react';
import '../App.scss';
import {IoIosCloseCircleOutline} from "react-icons/io";
import {ImPlus} from "react-icons/im";




export default class Channels extends React.Component {
    render(){
        return(
            //buttons to switch between channels
            <>
            <p className="selectchannel">Selected Channels</p>
            <div className="channelborder">
                <div>
                    <button  className="first"> 
                    <IoIosCloseCircleOutline className="speedicon" size={20}></IoIosCloseCircleOutline>
                    <div className="speedtext">
                    Speed 
                    </div>
                    </button> 

                    <button  className="channelA"> 
                    <IoIosCloseCircleOutline className="resticon" size={20}></IoIosCloseCircleOutline>
                    <div className="speedtext">
                    Channel A 
                    </div>
                    </button>

                    <button  className="channelB"> 
                    <IoIosCloseCircleOutline className="resticon" size={20}></IoIosCloseCircleOutline>
                    <div className="speedtext">
                    Channel B 
                    </div>
                    </button>

                    <button  className="channelC"> 
                    <IoIosCloseCircleOutline className="resticon" size={20}></IoIosCloseCircleOutline>
                    <div className="speedtext">
                    Channel C 
                    </div>
                    </button>
                    
                    <button className="pluschannel" color="grey"><ImPlus className="plusicon" size={20}></ImPlus>

                    </button>
                </div>
                
                    

            </div>
            </>
           

        );
    }
    
    

}
