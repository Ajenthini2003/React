import img1 from '../assets/AJHEN.jpg'
import img2 from '../assets/wed.jpg'
import img3 from '../assets/study.jpg'
import img4 from '../assets/notification-log-svgrepo-com.svg'
import img5 from '../assets/calender-svgrepo-com(1).svg'
import img6 from '../assets/waving-hand-svgrepo-com(1).svg'
import img7 from '../assets/plans-planning-svgrepo-com.svg'
import img8 from '../assets/sunrise-evening-svgrepo-com.svg'
import img9 from '../assets/alarm-clock-svgrepo-com.svg'
import img10 from '../assets/books-svgrepo-com.svg'
import img11 from '../assets/brain-svgrepo-com.svg'
import img12 from '../assets/couple-with-heart-woman-man-light-skin-tone-medium-skin-tone-svgrepo-com.svg'
import img13 from '../assets/night-moon-svgrepo-com.svg'
import img14 from '../assets/person-taking-bath-medium-skin-tone-svgrepo-com.svg'
import img15 from '../assets/sunrise-evening-svgrepo-com.svg'
import img16 from '../assets/sunset-afternoon-dusktwilight-svgrepo-com.svg'
import img17 from '../assets/teacher-light-skin-tone-svgrepo-com.svg'
import img18 from '../assets/task-svgrepo-com.svg'
import img19 from '../assets/books-svgrepo-com.svg'
import img20 from '../assets/important-details-1434-svgrepo-com.svg'
import img21 from '../assets/complete-svgrepo-com.svg'
import img22 from '../assets/help-svgrepo-com.svg'
import img23 from '../assets/setting-5-svgrepo-com.svg'
import img24 from '../assets/trash-bin-minimalistic-2-svgrepo-com.svg'
import img25 from '../assets/summary-svgrepo-com.svg'
import img26 from '../assets/task-svgrepo-com(1).svg'
import img27 from '../assets/person-svgrepo-com.svg'
import img28 from '../assets/plan-svgrepo-com.svg'

export const ToDolist = () => {
    
    const A= {
        display:"flex",
        justifyContent:"space-between",
       
        

    }
  return ( 
    <div style={{backgroundColor:"#f8f1d9ff"}}>
        <div style={{ backgroundColor: "#EF1459",color: "#fff",position: "sticky",height:"140px"}}>
            <div style={A}>
                <p style={{marginLeft:"80px",marginTop:"50px",fontSize:"50px",color:"#000000",fontWeight:"bold"}}> Pheonix</p>
                <input type="text" placeholder="search your Tasks here..." style={{alignItems:"center",height:"43px",width:"500px",marginTop:"44px",marginRight:"320px",fontSize:"20px",borderRadius:"8px",borderColor:"whitesmoke"}}></input>
                <img style={{width:"48px",height:"48px",marginTop:"45px",marginRight:"-300px"}} src={img4}></img>
                <img  style={{width:"48px",height:"48px",marginTop:"45px",marginRight:"1000px"}}  src={img5}></img>
            </div>
           
        </div>
        <div style={{display:'flex'}}>
             <div>
                <div style={{backgroundColor:"#EF1459",width:"400px",height:"1430px",marginTop:"90px"}}>
                    <img style={{width:"100px",height:"100px",borderRadius:"55px",marginLeft:"140px",marginTop:"-45px"}}  src={img1}></img>
                    <p style={{marginLeft:"145px",marginTop:"-2px",fontSize:"28px",color:"#ffff"}}>Pheonix</p>
                    <p style={{marginTop:"-20px",marginLeft:"110px",color:"#ffff"}}>ajenthini@gmail.com</p>
                    <div style={{display:"flex",width:"200px",borderRadius:"10px",borderColor:"black",height:"30px",margiLeft:"40px"}}>
                       <button style={{display:"flex",borderColor:"white",backgroundColor:"white",width:"400px",height:"35px",borderColor:"white",borderRadius:"10px",marginLeft:"80px",marginTop:"30px"}}>
                         <a href="#"></a>
                    <p style={{color:"black",marginTop:"6px",marginLeft:"40px"}}>Dashboard</p></button>
                    </div>
                    <div style={{display:'flex',marginTop:"20px"}}>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img18}></img>
                        <p style={{color:"#ffff",marginLeft:"10px",fontSize:"20px",marginTop:"30px"}}>My Task</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img26}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Task categaries</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img27}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Assigned to you</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img20}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Important</p>
                    </div>
                    <div>
                      <img  style={{width:"32px",height:"32px",marginLeft:"30px",marginTop:"25px"}}src={img28}></img>
                        <p style={{color:"#ffff",marginLeft:"6px",fontSize:"20px",marginTop:"-30px"}}>Planned</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img21}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Completed</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img22}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}  >Help</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img23}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Settings</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img24}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Trash</p>
                    </div>
                    <div>
                      <img  style={{width:"30px",height:"30px",marginLeft:"30px",marginTop:"25px"}}src={img25}></img>
                        <p style={{color:"#ffff",marginLeft:"60px",fontSize:"20px",marginTop:"-30px"}}>Summary</p>
                    </div>
                </div>
            </div>
            <div>
                <div style={{display:"flex"}}>
                    <p style={{color:"black",fontSize:"45px",fontWeight:"bold",marginLeft:"100px"}}> Welcome back,<b style={{color:"#EF1459"}}>Ajenthini....</b> </p>
                    <img style={{width:"60px",height:"60px",marginTop:"35px",marginLeft:"10px"}} src={img6}></img>
                </div>
                <div style={{display:"flex",borderColor:"black",width:"1400px",backgroundColor:"#f6f3f3ff",marginLeft:"100px",height:"930px"}}>
                    <div style={{backgroundColor:"#ffff",width:"680px",marginLeft:"20px",marginTop:"20px",borderRadius:"20px",height:"900px",border:"2px solid #EF1459",marginRight:"20px"}} >
                        <div style={{display:"flex"}}>
                            <p style={{fontWeight:"bolder",marginLeft:"60px",fontSize:"25px"}}>Today</p>
                            <p style={{fontWeight:"bolder",marginLeft:"10px",fontSize:"25px"}}> plans</p>
                            <img style={{marginLeft:"10px",width:"40px"}} src={img7}></img>

                            <p style={{marginLeft:"210px",fontSize:"20px",fontWeight:"bolder"}}><b style={{fontSize:"25px",fontWeight:"bolder",color:"#EF1459"}}>+</b>Edit</p>
                            <p style={{marginLeft:"50px",marginRight:"50px",fontSize:"20px",fontWeight:"bolder"}}><b style={{fontSize:"25px",color:"#EF1459",fontWeight:"bolder"}}>+</b>Add</p>
                            
                        </div>
                        <div style={{display:"flex",borderRadius:"30px",border: "3px solid #b8aaaaff",width:"600px",height:"120px",backgroundColor:"#ffffffff",marginLeft:"40px",marginRight:"40px"}}>
                           <div style={{marginLeft:"px"}}> <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"10px"}}src={img8}></img><p style={{marginLeft:"80px",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>Morning</p>
                             <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img9}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Get</p><p style={{marginLeft:"4px"}}>Ready</p><p style={{marginLeft:"4px"}}>for</p><p style={{marginLeft:"4px"}}>the</p><p style={{marginLeft:"4px"}}>day</p></div>
                              <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img19}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Get</p><p style={{marginLeft:"4px"}}>Ready</p><p style={{marginLeft:"4px"}}>for</p><p style={{marginLeft:"4px"}}>the</p><p style={{marginLeft:"4px"}}>day</p></div>
                            </div>
                            <div style={{marginLeft:"250px"}}>
                                <p style={{color:"blue"}}>7.00-9.00</p>
                                <p style={{color:"#0cb656ff",fontSize:"20px",marginLeft:"-15px",marginTop:"40px"}}>Completed</p>
                            </div>
                        </div>
                        <div style={{display:"flex",borderRadius:"30px",border: "3px solid #b8aaaaff",width:"600px",height:"120px",backgroundColor:"#ffffffff",marginLeft:"40px",marginRight:"40px",marginTop:"40px"}}>
                           <div style={{marginLeft:"px"}}> <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"10px"}}src={img8}></img><p style={{marginLeft:"80px",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>Morning</p>
                             <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img9}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Attend</p><p style={{marginLeft:"4px"}}>Ready</p></div>
                              <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img19}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Special</p><p style={{marginLeft:"4px"}}>meeting </p><p style={{marginLeft:"4px"}}>with</p><p style={{marginLeft:"4px"}}>teacher</p></div>
                            </div>
                            <div style={{marginLeft:"175px"}}>
                                <p style={{color:"blue"}}>9.00-12.00</p>
                                <p style={{color:"#0cb656ff",fontSize:"20px",marginLeft:"-15px",marginTop:"40px"}}>Completed</p>
                            </div>
                        </div>
                        <div style={{display:"flex",borderRadius:"30px",border: "3px solid #b8aaaaff",width:"600px",height:"120px",backgroundColor:"#ffffffff",marginLeft:"40px",marginRight:"40px",marginTop:"40px"}}>
                           <div style={{marginLeft:"px"}}> <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"10px"}}src={img8}></img><p style={{marginLeft:"80px",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>Evening</p>
                             <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img9}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Attend</p><p style={{marginLeft:"4px"}}>class</p></div>
                              <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img19}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Meet </p><p style={{marginLeft:"4px"}}>Boyfriend</p></div>
                            </div>
                            <div style={{marginLeft:"280px"}}>
                                <p style={{color:"blue"}}>13.00-15.30</p>
                                <p style={{color:"#0cb656ff",fontSize:"20px",marginLeft:"-15px",marginTop:"40px"}}>Completed</p>
                            </div>
                        </div>
                        <div style={{display:"flex",borderRadius:"30px",border: "3px solid #b8aaaaff",width:"600px",height:"120px",backgroundColor:"#ffffffff",marginLeft:"40px",marginRight:"40px",marginTop:"40px"}}>
                           <div style={{marginLeft:"px"}}> <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"10px"}}src={img8}></img><p style={{marginLeft:"80px",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>Morning</p>
                             <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img10}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Get</p><p style={{marginLeft:"4px"}}>Ready</p><p style={{marginLeft:"4px"}}>for</p><p style={{marginLeft:"4px"}}>the</p><p style={{marginLeft:"4px"}}>day</p></div>
                              <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img12}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Get</p><p style={{marginLeft:"4px"}}>Ready</p><p style={{marginLeft:"4px"}}>for</p><p style={{marginLeft:"4px"}}>the</p><p style={{marginLeft:"4px"}}>day</p></div>
                            </div>
                            <div style={{marginLeft:"230px"}}>
                                <p style={{color:"blue"}}>16.00-17.30</p>
                                <p style={{color:"#d81515ff",fontSize:"20px",marginLeft:"30px",marginTop:"40px"}}>Failed</p>
                            </div>
                        </div>
                         <div style={{display:"flex",borderRadius:"30px",border: "3px solid #b8aaaaff",width:"600px",height:"120px",backgroundColor:"#ffffffff",marginLeft:"40px",marginRight:"40px",marginTop:"40px",marginBottom:"100px"}}>
                           <div style={{marginLeft:"px"}}> <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"10px"}}src={img13}></img><p style={{marginLeft:"80px",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>Night</p>
                             <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img11}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>Self</p><p style={{marginLeft:"4px"}}>study</p><p style={{marginLeft:"4px"}}>time</p></div>
                              <img style={{width:"30px",height:"30px",marginLeft:"40px",marginTop:"-10px"}}src={img14}></img><div style={{display:"flex",marginLeft:"80px",marginTop:"-48px",fontWeight:"bold",fontSize:"20px"}}><p style={{fontSize:"bold"}}>fresh</p><p style={{marginLeft:"4px"}}>up</p></div>
                            </div>
                            <div style={{marginLeft:"290px"}}>
                                <p style={{color:"blue"}}>19.00-21.30</p>
                                <p style={{color:"#1123a6ff",fontSize:"20px",marginLeft:"-15px",marginTop:"40px"}}>In progress</p>
                            </div>
                        </div>
                           
                        
                    </div>
                    <div>

                        <div style={{width:"630px",backgroundColor:"#ffff",marginLeft:"15px",marginTop:"23px",height:"530px",borderRadius:"30px",border:"2px solid #EF1459"}}>
                            <div style={{display:"flex"}}>
                                <p style={{marginLeft:"50px",fontSize:"25px"}}>Task status</p>
<svg style={{marginLeft:"10px",marginTop:"20px"}}
  width="34px"
  height="34px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.63 18.15C7.63 18.56 7.29 18.9 6.88 18.9C6.47 18.9 6.13 18.56 6.13 18.15V16.08C6.13 15.67 6.47 15.33 6.88 15.33C7.29 15.33 7.63 15.67 7.63 16.08V18.15ZM12.75 18.15C12.75 18.56 12.41 18.9 12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15ZM17.87 18.15C17.87 18.56 17.53 18.9 17.12 18.9C16.71 18.9 16.37 18.56 16.37 18.15V11.93C16.37 11.52 16.71 11.18 17.12 11.18C17.53 11.18 17.87 11.52 17.87 11.93V18.15ZM17.87 8.77C17.87 9.18 17.53 9.52 17.12 9.52C16.71 9.52 16.37 9.18 16.37 8.77V7.8C13.82 10.42 10.63 12.27 7.06 13.16C7 13.18 6.94 13.18 6.88 13.18C6.54 13.18 6.24 12.95 6.15 12.61C6.05 12.21 6.29 11.8 6.7 11.7C10.07 10.86 13.07 9.09 15.45 6.59H14.2C13.79 6.59 13.45 6.25 13.45 5.84C13.45 5.43 13.79 5.09 14.2 5.09H17.13C17.17 5.09 17.2 5.11 17.24 5.11C17.29 5.12 17.34 5.12 17.39 5.14C17.44 5.16 17.48 5.19 17.53 5.22C17.56 5.24 17.59 5.25 17.62 5.27C17.63 5.28 17.63 5.29 17.64 5.29C17.68 5.33 17.71 5.37 17.74 5.41C17.77 5.45 17.8 5.48 17.81 5.52C17.83 5.56 17.83 5.6 17.84 5.65C17.85 5.7 17.87 5.75 17.87 5.81C17.87 5.82 17.88 5.83 17.88 5.84V8.77H17.87Z"
    fill="#EF1459"
  />
</svg>

                            </div>
                            <div style={{display:"flex"}}>
                                <svg style={{marginLeft:"50px",marginTop:"-20px"}}
  xmlns="http://www.w3.org/2000/svg"
  width="165px"
  height="165px"
  viewBox="0 0 32 32"
  fill="none"
>
  <g>
    <path
      d="M2,12.785v-1.414L4.371,9h1.414L2,12.785z M9.785,9H8.371L2,15.371v1.414L9.785,9z M10.371,23h1.414 L14,20.785v-1.414L10.371,23z M14,16.785v-1.414L6.371,23h1.414L14,16.785z M13.785,9h-1.414L2,19.371v1.414L13.785,9z M14,12.785 v-1.414L2.371,23h1.414L14,12.785z"
      fill="#26AD14"
    />
    <path
      d="M30,12h-2V9c0-0.552-0.448-1-1-1H2C1.448,8,1,8.448,1,9v14c0,0.552,0.448,1,1,1h25c0.552,0,1-0.448,1-1 v-3h2c0.552,0,1-0.448,1-1v-6C31,12.448,30.552,12,30,12z M2,9h12v14H2V9z M27,23H15V9h12V23z M30,19h-2v-6h2V19z"
      fill="#26AD14"
    />
  </g>
</svg>

                                <p style={{marginTop:"50px",marginLeft:"40px",fontSize:"25px"}}>Completed</p>

                            </div>
                            <div>
                                <svg style={{marginLeft:"50px",marginTop:"-20px"}}
  width="165px"
  height="165px"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      fill="#FF2C19"
      d="M2,12.785v-1.414L4.371,9h1.414L2,12.785z M9.785,9H8.371L2,15.371v1.414L9.785,9z M10.371,23h1.414
         L14,20.785v-1.414L10.371,23z M14,16.785v-1.414L6.371,23h1.414L14,16.785z M13.785,9h-1.414L2,19.371v1.414L13.785,9z
         M14,12.785v-1.414L2.371,23h1.414L14,12.785z"
    />
    <path
      fill="#FF2C19265AA5"
      d="M30,12h-2V9c0-0.552-0.448-1-1-1H2C1.448,8,1,8.448,1,9v14c0,0.552,0.448,1,1,1h25c0.552,0,1-0.448,1-1
         v-3h2c0.552,0,1-0.448,1-1v-6C31,12.448,30.552,12,30,12z M2,9h12v14H2V9z M27,23H15V9h12V23z M30,19h-2v-6h2V19z"
    />
  </g>
</svg>

                                <p style={{marginLeft:"280px",marginTop:"-100px",fontSize:"25px"}}>Failed</p>
                            </div>
                            <div>
                                <svg style={{marginLeft:"50px",marginTop:"50px"}}
  width="165px"
  height="165px"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  fill="#3647BA"
>
  <g>
    <path
      fill="#3647BA"
      d="M2,12.785v-1.414L4.371,9h1.414L2,12.785z M9.785,9H8.371L2,15.371v1.414L9.785,9z M10.371,23h1.414 L14,20.785v-1.414L10.371,23z M14,16.785v-1.414L6.371,23h1.414L14,16.785z M13.785,9h-1.414L2,19.371v1.414L13.785,9z M14,12.785 v-1.414L2.371,23h1.414L14,12.785z"
    />
    <path
      fill="#3647BA265AA5"
      d="M30,12h-2V9c0-0.552-0.448-1-1-1H2C1.448,8,1,8.448,1,9v14c0,0.552,0.448,1,1,1h25c0.552,0,1-0.448,1-1 v-3h2c0.552,0,1-0.448,1-1v-6C31,12.448,30.552,12,30,12z M2,9h12v14H2V9z M27,23H15V9h12V23z M30,19h-2v-6h2V19z"
    />
  </g>
</svg>

                                <p style={{marginTop:"-100px",marginLeft:"280px",fontSize:"25px"}}>In progress</p>
                            </div>
                           
                        </div>
                        <div style={{borderRadius:"20px",border:"3px solid #EF1459",width:"630px",marginLeft:"20px",height:"345px",marginTop:"10px",backgroundColor:"#ffff"}}>
                            <div style={{display:"flex"}}>
                                <p style={{marginLeft:"60px",fontSize:"25px"}}>Reminders</p>
<svg style={{marginLeft:"20px",marginTop:"20px"}}
  fill="#EF1459"
  width="30px"
  height="30px"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  stroke="#EF1459"
>
  <g>
    <title>reminder</title>
    <path d="M30,23.3818l-2-1V20a6.0046,6.0046,0,0,0-5-5.91V12H21v2.09A6.0046,6.0046,0,0,0,16,20v2.3818l-2,1V28h6v2h4V28h6ZM28,26H16V24.6182l2-1V20a4,4,0,0,1,8,0v3.6182l2,1Z" />
    <path d="M28,6a2,2,0,0,0-2-2H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h4V26H6V6h4V8h2V6h8V8h2V6h4v6h2Z" />
    <rect
      width="32"
      height="32"
      fill="none" // replaced invalid style with a proper prop
    />
  </g>
</svg>

                            </div>
                            <div style={{display:"flex",border:"3px solid #958f8fff",borderRadius:"20px",marginTop:"20px",height:"120px",width:"600px",marginLeft:"10px",marginTop:"-10px"}}>
                                <div>
                                    <p style={{marginLeft:"20px",fontSize:"20px"}}>Saturday-weddings</p>
                                    <p style={{marginLeft:"30px",fontSize:"20px"}}>29 Oct 2025</p>
                                </div>
                                <div>
                                    <img style={{width:"100px",height:"100px",marginLeft:"300px",marginTop:"10px",borderRadius:"20px"}}  src={img2}></img>
                                </div>
                            </div>
                             <div style={{display:"flex",border:"3px solid #958f8fff",borderRadius:"20px",marginTop:"10px",height:"120px",width:"600px",marginLeft:"10px",}}>
                                <div>
                                    <p style={{marginLeft:"20px",fontSize:"20px"}}>Sunday-Weekly review</p>
                                    <p style={{marginLeft:"20px",fontSize:"20px"}}>30 Oct 2025</p>
                                </div>
                                <div>
                                    <img style={{width:"140px",width:"100px",borderRadius:"20px",marginLeft:"270px",marginTop:"30px"}} src={img3}></img>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     )
}

