import img1 from '../assets/1000s.jpg'

export default function Day0302(){

    const AA={
        display:"flex",
    }
    const BB={
        width:"400px",
        height:"400px",
        margin: "30px",
        marginLeft:"300px"
    }
    const CC={
        marginTop:"150px",
        marginLeft:"300px"
        
    }
     const Main={
        backgroundColor:"darkblue",
     }
     const KK={
        color:"white"
     }
     const NN={
        backgroundColor:"green",
        borderColor:"green",
        color:"white"
     }
     return(

        <div style={Main}>
            <div style={AA}>
                <div>
                    <img src={img1} style={BB}></img>
                </div>
                <div style={CC}>
                    <h1 style={KK}>Social is your superpower.</h1>
                    <p style={KK}>Easily manage your social media and get result with</p>
                    <button style={NN}>start your free 30 days trial</button>
                    <p style={KK}><a href="#" style={KK}>compare plans</a></p>
                </div>
            </div>
            

        </div>


            );
};