export default function Day03(){

    const style={
        color:'pink',
        fontSize:'50px',
        backgroundColor:'lightblue'
    }
    const AA={
        color:'blue',
        backgroundColor:"maroon"
    }
    const BB={color:'red',
        backgroundColor:"blue"}

        const CC={color:'green',
            backgroundColor:"maroon"}

            const DD={color:'maroon',
                backgroundColor:"yellow"}

    const Varshini={
        color:'black',
        fontSize:'70px',
        backgroundColor:'maroon',
        borderRadius:'20px',
        

    }  
    const Ajenthini={
        color:'blue',
        fontSize:'70px',
        backgroundColor:'pink',
        borderRadius:'20px'


    }  
    const Dilani={
        color:'green',
        fontSize:'70px',
        backgroundColor:'yellow',
        borderRadius:'20px'

    }  
    const Sajithra={
        color:'maroon',
        fontSize:'70px',
        backgroundColor:'lightblue',
        borderRadius:'20px'


    }  
    const Dilujan={
        color:'purple',
        fontSize:'70px',
        backgroundColor:'green',
        borderRadius:'20px'

    }  
    const Mukilan={
        color:'pink',
        fontSize:'70px',
        backgroundColor:'black',
        borderRadius:'20px'

    }  
    const Kabi={
        color:'black',
        fontSize:'70px',
        backgroundColor:'darkblue',
        borderRadius:'20px'

    }  
    


    return(

        <>
        <div>
            <h1 style={style}>Archana</h1>
            <h1 style={AA}>Course: Full stack development course</h1>
            <p style={BB}>No-of students:9</p>
            <p style={CC}>subject:React</p>
            <p style={DD}>teacher:Varshini</p>
        </div>

        <div>
            <h1 style={Varshini}>Varshini</h1>
            <h1 style={Ajenthini}>Ajenthini</h1>
            <h1 style={Dilani}>Dilani</h1>
            <h1 style={Sajithra}>Sajithra</h1>
            <h1 style={Dilujan}>Dilujan</h1>
            <h1 style={Mukilan}>Mukilan</h1>
            <h1 style={Kabi}>Kabi</h1>
        </div>

        
        <div>
            <h1 style={{color:'blue',backgroundColor:"maroon"}}>Course: Full stack development course</h1>
            <p style={{color:'red',backgroundColor:"blue"}}>No-of students:9</p>
            <p tyle={{color:'green',backgroundColor:"maroon"}}>subject:React</p>
            <p style={{color:'maroon',backgroundColor:"yellow"}}>teacher:Varshini</p>
        </div>

        
        
        </>
              
    )
};