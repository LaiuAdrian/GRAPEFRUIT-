
import React, { useEffect,useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Chart from 'react-apexcharts';
import {useDispatch,useSelector} from 'react-redux';
import _ from "lodash";
import {getWheaterApi,getWheaterApi2} from '../redux/reduxWeatherSlice'
import Header from '../components/Header';
import imgW25 from '../img/imgW25.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'
import nori from '../img/nori.png'
import point from '../img/2point.png'
import './Dashboard.css';
const Dashboard =()=>{    
const [dataWheater, setDataWheater]= useState({})

     const dispatch =useDispatch();

     const weather=useSelector(state=>state.wheater_slice.wheater)

     const weather2=useSelector(state=>state.wheater_slice.wheater2)
     const error=useSelector(state=>state.wheater_slice.error)

     useEffect(()=>{
        dispatch(getWheaterApi('Madrid'))
     },[dispatch])

     useEffect(()=>{
      dispatch(getWheaterApi2('Madrid'))
   },[weather])



     const data = {
        series: [
          {
            name: 't °C',
            data: [90,112,132,90,140],
          },
        ],
        options: {
          chart: {
            type: 'area',
            height: 'auto',
            parentHeightOffset: 0,
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          fill: {
            colors: ['red'],
            type: '#FFFFFF',
          },
    
          dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            offsetY: -5,
            style: {
              fontSize: '14px',
              colors: ['#B3B3B3', '#B3B3B3'],
            },
            background: {
              enabled: false,
            },
          },
          stroke: {
            curve: 'smooth',
            colors: ['#EDEDED'],
            width: 2,
          },
    
          legend: {
            show: false,
          },
          grid: {
            show: true,
          },
          tooltip: {
            x: {
              show: false,
            },
    
            fixed: {
              enabled: true,
            },
          },
          xaxis: {
            type: 'numeric ',  
            categories: ['Apr','May','Jun','Jul','Aug','Sep'],
            crosshairs: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          yaxis: {
            show: true,
            max: (weatherTemp) => {
              return weatherTemp + 10;
            },
            min: (weatherTemp) => {
              return weatherTemp - 1;
            },
            labels: {
              offsetX: -10,
            },
          },
        },
      };
   
     if(_.isEmpty({weather}) !== true && _.isEmpty({weather2}) !== true){
      console.log(weather)
      console.log(weather2)
     }
      
    return(
        (_.isEmpty({weather}) !== true && _.isEmpty({weather2}) !== true)
        ?
          <>
          <Header />
          <div className='Widgets_Div'>
                <p>
                  WIDGETS
                </p>
          </div>
          <div className='box1'>
            <div className='col50 mobilHide tablet_hide'>
                <div className='imgW25' style={{ backgroundImage: `url(${imgW25})` }}>
                    <div className='box1_1'>
                        <h1>
                        Astronauts could land on <br />
                        Planet by 2039
                      </h1>
                        <div className='dflex'>
                            <div className='dflex'>
                                    <img className='wIcon' src={icon3} alt="img" />
                                    <p>
                                      SPACE.com
                                    </p>
                            </div>
                            <div className='dflex timeIcon'>
                                    <img className='wIcon' src={icon4} alt="img" />
                                    <p>
                                      20m ago
                                    </p>
                            </div>
                            <div className='dflex last'>
                                  
                                    <p>
                                      SCIENTE
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col50 '>
                    <div className='YellowBg'>
                            <div className='flexTabs'>
                              <Tabs>
                                  <div className='flexTabs mobilHide'>
                                      <TabList>
                                          <Tab>TODAY</Tab>
                                          <Tab>TOMORROW</Tab>
                                          <Tab>WEEK</Tab>
                                        </TabList>
                                        <div>
                                            <img className='nori' src={nori} alt="img" />
                                        </div>
                                  </div>
                                    {
                                      error === true
                                      ?
                                      <>
                                      <TabPanel>                       
                                      <div className='contentInfo'>
                                          <h2>da</h2> 
                                          
                                          <p className='grade'>
                                            76
                                          </p>
                                      </div>
                                  </TabPanel>
                                  <TabPanel>                       
                                      <div className='contentInfo'>
                                          <h2>da</h2> 
                                          
                                          <p className='grade'>
                                            dsd
                                          </p>
                                      </div>
                                  </TabPanel>
                                  <TabPanel>                       
                                      <div className='contentInfo'>
                                          <h2>da</h2> 
                                          
                                          <p className='grade'>
                                            dsd
                                          </p>
                                      </div>
                                  </TabPanel>
                                  </>
                                      :

                                    
                                    

                                  
                                    weather?.forecast?.map((item,index)=>
                                  
                                      <TabPanel key={index}>
                                        {console.log(index)}
                                        <div className='contentInfo'>
                                            <div>
                                            <h2>{weather?.description}<br />
                                            <span className='gray'>Madrid</span> 
                                            </h2> 
                                          
                                            </div>
                                            
                                            <p className='grade'>
                                            {item?.temperature}
                                            </p>
                                        </div>
                                      </TabPanel>
                                    )
                                  }
                                </Tabs>
                            </div>
                            <div className='Grade_and_houres'>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>

                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                                      <p className='pGrade'>
                                          25 °C<br />
                                          <span className='houres'>
                                          6 AM
                                         </span>
                                      </p>
                            </div>
                    </div>
            </div>
          </div>
          <div className='box1 '>
              <div className='col20 mobilHide'>
                   <div className='info4'>
                      <div className='flex2'>
                          <p className='blackNr'>
                            NASDAQ
                            <br />
                                <span className='grayCol'>
                                  5,055.55
                                </span>
                          </p>
                          <p className='valNR redNegative'>
                            -0.85%
                          </p>
                      </div>
                      <div className='flex2 active'>
                          <p className='blackNr'>
                            APPL
                            <br />
                                <span className='grayCol'>
                                126.67
                                </span>
                          </p>
                          <p className='valNR greenPozitive'>
                            +0.51%
                          </p>
                      </div>
                      <div className='flex2'>
                          <p className='blackNr'>
                            DOW J
                            <br />
                                <span className='grayCol'>
                                19,926.02
                                </span>
                          </p>
                          <p className='valNR redNegative'>
                            -0.34%
                          </p>
                      </div>
                      <div className='flex2 borderT'>
                          <p className='blackNr'>
                            GOOG
                            <br />
                                <span className='grayCol'>
                               534,53
                                </span>
                          </p>
                          <p className='valNR greenPozitive'>
                            +0.75%
                          </p>
                      </div>
                  </div>               
              </div>
              <div className='mobilShow flexSec'>
                <div className='col50M' >
                      <div className='flexM'>
                        <p className='blackNr'>
                           NASDAQ
                        </p>
                        <img className='wIcon20' src={point} alt="img" />
                      </div>    
                      <p className='valNR greenPozitive noM'>
                            +0.51%<br />
                            <span className='grayCol'>
                                  5,055.55
                            </span>
                      </p>             
                </div>
                <div className='col50M' >
                      <div className='flexM'>
                        <p className='blackNr'>
                           DOW JONES
                        </p>
                        <img className='wIcon20' src={point} alt="img" />
                      </div>    
                      <p className='valNR redNegative noM'>
                            -0.31%<br />
                            <span className='grayCol'>
                                  4,055.55
                            </span>
                      </p>             
                </div>                
              </div>
              <div className='col80'>
                <div className='infoRight'>
                </div>
                <div>
                    <Chart options={data.options} series={data.series} type='area' height={350} />
                </div>
              </div>
          </div>
     
          </>
        :
        null
      
    )
} 

export default Dashboard