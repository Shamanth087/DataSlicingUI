import React from 'react';
import '../App.scss';
import {Line } from 'react-chartjs-2';
import {HiOutlineScissors} from 'react-icons/hi';

//Graph
const state ={
    labels:['10:00','10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55','11:00'],
    datasets:[
        {
            
            data:[
                
                0.75,0.85,0.75,0.75,0.75,0.75,0.65,0.75,0.85,0.95,0.85,0.85,0.85
                  ],
                  
            borderWidth:2,
            borderColor:"rgb(235, 161, 65)",
            fill:false,
            pointRadius:0,
            label:"Speed"
        },
        {
            data: [0.8,0.8,0.7,0.7,0.7,0.7,0.6,0.7,0.8,0.9,0.8,0.8,0.8],
            fill:false,
            borderColor:"rgb(199, 104, 120)",
            borderWidth:2,
            pointRadius:0,
            label:"Channel A"

        },
        {
            data: [0.8,0.8,0.7,0.7,0.9,0.7,0.7,0.7,0.8,0.9,0.8,0.8,0.8],
            fill:false,
            borderColor:"rgb(148, 72, 148)",
            borderWidth:2,
            pointRadius:0,
            label:"Channel B"
    
   
        },
        {
            data: [0.82,0.82,0.72,0.72,0.92,0.72,0.72,0.72,0.82,0.92,0.82,0.82,0.82],
            fill:false,
            borderColor:"rgb(80, 134, 80)",
            borderWidth:2,
            pointRadius:0, 
            label:"Channel C"

           
        }
        
    ],
    
}



export default class Slicing extends React.Component {
    render(){
        return(
            <>
            
                <div className="firstcomp">
                    <div className="scissor">
                            <HiOutlineScissors size={25}/>
                    </div>
                    <p className="select">Selected Channel</p>
                    <div className="graph">
                    <Line
                    data={state}
                    height='230px'
                    width='1150px'
                    
                    
                    />
                    </div>
                    <div className="selectedchannel1">
                        
                    </div>
                    <div className="unselectedchannel1">
                        
                    </div>
                    <div className="unselectedchannel2">
                        
                    </div>
                    <div className="unselectedchannel3">
                        
                    </div>
                    <div className="unselectedchannel4">
                        
                        </div>
                        <div className="unselectedchannel5">
                        
                        </div>

                </div>
                
           
            </>

        );
    }
    
    

}