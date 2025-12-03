import img4 from "../assets/Vector.png";
import img1 from "../assets/Ellipse 1.png";
import img2 from "../assets/Ellipse 2.png"; 
import img3 from "../assets/image 1.png";   

export default function Portfolio() {
  return (
    <div
      style={{
        position: "relative",
        background: `url(${img4}) no-repeat center`,
        backgroundSize: "cover",
        color: "#fff",
        backgroundColor: "#000840",
        minHeight: "940px",
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

     
      <div style={{ position: "relative", zIndex: 2, padding: "20px 20px" }}>
       
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ color: "#D45C7B", marginLeft:"140px",marginTop:"10px",fontSize:"40px" }}>Archana.Me</h3>
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "120px",
                color: "#D45C7B",
                margin: 0,
                padding: 0,
                flexWrap: "wrap"
                ,marginRight:"100px",
                fontWeight:"bold",
                fontSize:"22px"
              }}
            >
              <li style={{ cursor: "pointer" }}>Home</li>
              <li style={{ cursor: "pointer" }}>Project</li>
              <li style={{ cursor: "pointer" }}>Contact</li>
              <li style={{ cursor: "pointer" }}>Skills</li>
            </ul>
          </nav>
        </header>

       
        <main
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "60px",
            flexWrap: "wrap",
          }}
        >
         
          <div style={{ flex: 1, minWidth: "250px", marginBottom: "200px",marginTop:"100px",marginLeft:"150px" }}>
            <p style={{fontSize:"30px"}}>Hello!</p>
            <p
              style={{
                color: "#D45C7B",
                fontSize: "50px",
                fontWeight: "bold",
                margin: "5px 0",
              }}
            >
              I am Archana
            </p>
            <p style={{fontSize:"30px"}}>I am a student of full stack development</p>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#D45C7B",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "10px",
                width:"150px",
                fontSize:"20px"
              }}
            >
              About Me
            </button>
          </div>

          
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              minWidth: "250px",
            }}
          >
            <img src={img1} alt="Ellipse 1" style={{ width: "50px", height: "50px" }} />
            <img src={img2} alt="Ellipse 2" style={{ width: "50px", height: "50px" }} />
            <img src={img3} alt="Main" style={{ width: "150px", height: "150px" }} />
          </div>
        </main>
      </div>
    </div>
  );
}
