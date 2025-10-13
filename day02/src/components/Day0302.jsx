export default function Day0302(){
   
    const styles={
        container:{
            backgroundColor:"#f0f0f0",
            padding:"20px",
            borderRadius:"8px",
            textAlign:"center"

        },
        title:{
            color:"#236969",
            fontSize:"28px",
        },
        button:{
            backgroundColor:"#236969",
            color:"white",
            border:"non",
            padding:"10px 20px",
            borderRadius:"6px",
            cursor:"pointer",
        },
        
    };
        


    
      return(
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to React</h1>
            <button style={styles.button}>Click Me</button>
        </div>
    );
};