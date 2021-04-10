import React,{useEffect,useRef} from 'react'
import * as ChartJs from 'chart.js';

ChartJs.Chart.register.apply(null, Object.values(ChartJs).filter((chartClass) => (chartClass.id)));

function Linegraph() {
    const chartRef = useRef();
    // console.log(chartRef.current.getContext("2d"));
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new ChartJs.Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
 
    },[])
    // useEffect(() => {         
    //     const myChartRef = chartRef.current.getContext("2d");
    //     new Chart(myChartRef, {
    //         type: "line",
    //         data: {
    //             //Bring in data
    //             labels: ["Jan", "Feb", "March"],
    //             datasets: [
    //                 {
    //                     label: "Sales",
    //                     data: [86, 67, 91],
    //                 }
    //             ]
    //         },
    //         options: {
    //             //Customize chart options
    //         }
    //     });
       
    // })
    

    
    return (
        <div>
            <canvas
                    id="myChart"
                    ref={chartRef}
                />
        </div>
    )
}

export default Linegraph;
