


function Charts(props)
{
   
    console.log(props);
    return(
        <>
             <div className="container-fluid">


<h1 className="h3 mb-2 text-gray-800">Charts</h1>
<p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
    The charts below have been customized - for further customization options, please visit the <a
        target="_blank" href="https://www.chartjs.org/docs/latest/" rel="noreferrer">official Chart.js
        documentation</a>.</p>


<div className="row">

    <div className="col-xl-8 col-lg-7">

    
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div className="card-body">
                <div className="chart-area">
                    <canvas id="myAreaChart"></canvas>
                </div>
                <hr/>
                Styling for the area chart can be found in the
                <code>/js/demo/chart-area-demo.js</code> file.
            </div>
        </div>

        
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
            </div>
            <div className="card-body">
                <div className="chart-bar">
                    <canvas id="myBarChart"></canvas>
                </div>
                <hr/>
                Styling for the bar chart can be found in the
                <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
        </div>

    </div>

 
    <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
         
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
         
            <div className="card-body">
                <div className="chart-pie pt-4">
                    <canvas id="myPieChart"></canvas>
                </div>
                <hr/>
                Styling for the donut chart can be found in the
                <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
        </div>
    </div>
</div>

</div>
        </>
    );
}
export default Charts;