import React from 'react';
import {IoCloseCircleSharp} from 'react-icons/io5';
import {GoPlus} from 'react-icons/go';
import '../App.scss';

export default class Timeline extends React.Component{
    render(){
        return(
            //Time component
            <>
            <div className="timelinecomponent">
                <div className="firstbox">
                    <p className="id">ID</p>
                    <div className="inputid"><p className="idnum">01</p>
                    </div>

                    <p className="start">START</p>
                    <div className="startbox"><p className="startTime">10:00</p>
                    </div>

                    <p className="end">END</p>
                    <div className="endbox"><p className="endTime">10:06</p>
                    </div>

                    <p className="minstart">MIN START</p>
                    <div className="minstartbox"><p className="minstartTime">10%</p>
                    </div>

                    <p className="minend">MIN END</p>
                    <div className="minendbox"><p className="minendTime">90%</p>
                    </div>

                    <IoCloseCircleSharp className="closetime" size={20}></IoCloseCircleSharp>
             
                    </div>
                <div className="firstbox">
                    <p className="id">ID</p>
                    <div className="inputid"><p className="idnum">02</p>
                    </div>

                    <p className="start">START</p>
                    <div className="startbox"><p className="startTime">10:12</p>
                    </div>

                    <p className="end">END</p>
                    <div className="endbox"><p className="endTime">10:18</p>
                    </div>

                    <p className="minstart">MIN START</p>
                    <div className="minstartbox"><p className="minstartTime">10%</p>
                    </div>

                    <p className="minend">MIN END</p>
                    <div className="minendbox"><p className="minendTime">90%</p>
                    </div>

                    <IoCloseCircleSharp className="closetime" size={20}></IoCloseCircleSharp>
             
                    </div>

                <div className="firstbox">
                    <p className="id">ID</p>
                    <div className="inputid"><p className="idnum">03</p>
                    </div>

                    <p className="start">START</p>
                    <div className="startbox"><p className="startTime">10:20</p>
                    </div>

                    <p className="end">END</p>
                    <div className="endbox"><p className="endTime">10:26</p>
                    </div>

                    <p className="minstart">MIN START</p>
                    <div className="minstartbox"><p className="minstartTime">10%</p>
                    </div>

                    <p className="minend">MIN END</p>
                    <div className="minendbox"><p className="minendTime">90%</p>
                    </div>

                    <IoCloseCircleSharp className="closetime" size={20}></IoCloseCircleSharp>
             
                    </div>

                <div className="firstbox">
                    <p className="id">ID</p>
                    <div className="inputid"><p className="idnum">04</p>
                    </div>

                    <p className="start">START</p>
                    <div className="startbox"><p className="startTime">10:29</p>
                    </div>

                    <p className="end">END</p>
                    <div className="endbox"><p className="endTime">10:35</p>
                    </div>

                    <p className="minstart">MIN START</p>
                    <div className="minstartbox"><p className="minstartTime">10%</p>
                    </div>
                    
                    <p className="minend">MIN END</p>
                    <div className="minendbox"><p className="minendTime">90%</p>
                    </div>

                    <IoCloseCircleSharp className="closetime" size={20}></IoCloseCircleSharp>
             
                    </div>

                <div className="firstbox">
                    <p className="id">ID</p>
                    <div className="inputid"><p className="idnum">05</p>
                    </div>

                    <p className="start">START</p>
                    <div className="startbox"><p className="startTime">10:37</p>
                    </div>
                    <p className="end">END</p>
                    <div className="endbox"><p className="endTime">10:43</p>
                    </div>

                    <p className="minstart">MIN START</p>
                    <div className="minstartbox"><p className="minstartTime">10%</p>
                    </div>

                    <p className="minend">MIN END</p>
                    <div className="minendbox"><p className="minendTime">90%</p>
                    </div>

                    <IoCloseCircleSharp className="closetime" size={20}></IoCloseCircleSharp>
             
                    </div>

                <div className="firstbox">
                    <p className="id">ID</p>
                    <div className="inputid"><p className="idnum">06</p>
                    </div>

                    <p className="start">START</p>
                    <div className="startbox"><p className="startTime">10:47</p>
                    </div>

                    <p className="end">END</p>
                    <div className="endbox"><p className="endTime">10:53</p>
                    </div>

                    <p className="minstart">MIN START</p>
                    <div className="minstartbox"><p className="minstartTime">10%</p>
                    </div>

                    <p className="minend">MIN END</p>
                    <div className="minendbox"><p className="minendTime">90%</p>
                    </div>

                    <IoCloseCircleSharp className="closetime" size={20}></IoCloseCircleSharp>
             
                    </div>
                <div className="addbox">
                    <GoPlus className="goplus" size={30}></GoPlus>
                   
             </div>
                
                
                
            </div>

            </>

        )
    }
}