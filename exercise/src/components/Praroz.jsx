export default function Praroz(){

    const nav={
        display:"flex",
    }

    const AA={
        display:"flex",
        textDecoration:"non",
        marginTop:"20px",
        color:"white",


    }
    const BB={
        marginLeft:"200px",
        textDecoration:"non",
    }
    const CC={
        marginTop:"20px",
        color:"#ff5c33"
    }
    const DD={
        backgroundColor:"#ff5c33",
         borderColor:"#ff5c33"
    }
    const EE={
        display:"flex",
        marginLeft:"200px",
        
    }
    const FF={
        borderColor:"#ff5c33"
    }
    const A={
        fontSize:"50px",
        fontWeight:"200px"
    }

      
     return(
        <div>
            <div style={nav}>
                <div>
                    <div style={CC}>PraRoz</div>
                    <div style={AA}>
                        <ul style={AA}>
                            <li style={BB}><a href="#">HOME</a></li>
                            <li style={BB}><a href="#">ABOUT</a></li>
                            <li style={BB}><a href="#">SERVICE</a></li>
                            <li style={BB}><a href="#">DESIGN</a></li>
                            <li style={BB}><a href="#">CONTACT</a></li>
                            <div style={EE}>
                                <div><label></label>
                                <input type="text" placeholder="Type to search" style={FF}></input> </div>
                                <div><button style={DD}>Search</button>
                                </div>
                            </div>
                        </ul>
                    </div>
                   
                </div>
            </div>
            <div>
                <div>
                    <p style={A}>Web Design &</p>
                    <p>Development</p>
                    <p>Course</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum quae doloremque vitae fugiat hic sint aut porro, ipsa quos fuga accusantium in molestiae est iusto possimus enim.</p>
                    <button>JOIN US</button>
                    
                </div>
                <div>
                    <form>
                        <button>Login Here</button>
                        <label></label>
                        <input type="text" placeholder="Enter Email here"></input>
                        <label></label>
                        <input type="text" placeholder="Enter Password Here"></input>
                        <button>Login</button>
                        <p>Don't have an account?</p>
                        <p><a href="#">Sign in</a>here</p>
                        <p>Log in with</p>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>





          );
};