import React, { useState, useEffect } from 'react'
import { LineChart, Line } from "recharts";
import './Newgraph.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


function Newgraph() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, [])
    return (
        <div className="graphContainer">
        <div className="graphDiv">
            <div className="topDiv"><h4>Weekly Perfomance</h4>
            </div>
            <LineChart width={windowDimensions.width * 0.25} height={200} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
            <div className="statsDiv">
                <div className="statElement">
                    <p className="topText">95%</p>
                    <p className="bottomText">Usage</p>
                </div>
                <div className="statElement">
                    <p className="topText">75%</p>
                    <p className="bottomText">Perfomance Index</p>
                </div>
                <div className="statElement">
                    <p className="topText">90%</p>
                    <p className="bottomText">CPU</p>
                </div>
            </div>
          
        </div>
          <div>
              
          </div>
          </div>
    )
}

export default Newgraph
