import img1 from "../assets/background.jpeg";
import img2 from "../assets/headphone.jpeg";
import img3 from "../assets/lap.jpeg";
import img4 from "../assets/phone.jpeg";
import img5 from "../assets/watch.jpeg";

export default function Webpage() {
  return (
    <div>
      <div style={{display:"flex",backgroundColor:"white",color:"purple"}}>
        <div style={{marginLeft:"100px",marginTop:"40px",fontSize:"20px"}}>ElectroHub</div>

        <div>
          <ul style={{ display:"flex",textDecoration:"non",marginLeft:"700px"}}>
            <li style={{margin:"30px"}}>Home</li>
            <li style={{margin:"30px"}}>Products</li>
            <li style={{margin:"30px"}}>Categories</li>
            <li style={{margin:"30px"}}>About</li>
            <li style={{margin:"30px"}}>Testimonials</li>
            <li style={{margin:"30px"}}>Contact</li>
          </ul>
        </div>

        <div>
          <button style={{borderRadius:"20px",width:"100px",marginLeft:"50px",marginTop:"40px",backgroundColor:"purple",color:"white",borderColor:"purple",width:"100px",height:"30px"}}>Shop Now</button>
        </div>
      </div>

      
      <div  style={{justifyContent:"center",marginLeft:"650px"}}>
        <h1 style={{fontSize:"50px"}}>Discover the future of Tech</h1>
        <p style={{marginLeft:"50px",fontWeight:"bold"}}>
          Explore our curated selection of the latest and greatest electronic</p>
          <p style={{marginLeft:"70px",fontWeight:"bold"}}>
          gadgets, from smartphones to smart home devices.
        </p>
        <button style={{borderRadius:"20px",width:"100px",marginLeft:"200px",marginTop:"40px",backgroundColor:"purple",color:"white",borderColor:"purple",width:"160px",height:"30px",fontSize:"15px",fontWeight:"bold"}}>Explore Products</button>
      </div>

     
      <div style={{backgroundColor:"gray"}}>
        <h2 style={{marginLeft:"800px",marginTop:"100px"}}>Featured Products</h2>

        <div style={{display:"flex",marginLeft:"250px"}}>

          
          <div style={{borderRadius:"20px",backgroundColor:"white",width:"300px",margin:"30px"}}>
            <img src={img4} alt="SmartPhone X" style={{margin:"30px",borderRadius:"20px",width:"150px",heigth:""}}/>
            <h3 style={{marginLeft:"60px"}}>SmartPhone X</h3>
            <p style={{marginLeft:"10px",marginRight:"10px"}}>Lorem ipsum dolor hfhs hdk sit amet consectetur adipisicing elit.</p>
            <h3 style={{color:"purple",marginLeft:"120px"}}>$999</h3>
            <button style={{backgroundColor:"orange",borderRadius:"10px",width:"150px",marginLeft:"50px",mar:}}>TBuy Now</button>
          </div>

          
          <div style={{borderRadius:"20px",backgroundColor:"white",width:"300px",margin:"30px"}}>
            <img src={img3} alt="Laptop Pro" style={{margin:"30px",borderRadius:"20px"}}/>
            <h3 style={{marginLeft:"60px"}}>Laptop Pro</h3>
            <p style={{marginLeft:"10px",marginRight:"10px"}}>Lorem ipsum dolor sit amet sjk fdhg consectetur adipisicing elit.</p>
            <h3 style={{color:"purple",marginLeft:"120px"}}>$1499</h3>
            <button>Buy Now</button>
          </div>

          
          <div style={{borderRadius:"20px",backgroundColor:"white",width:"300px",margin:"30px"}}>
            <img src={img5} alt="SmartWatch S" style={{margin:"30px",borderRadius:"20px"}} />
            <h3 style={{marginLeft:"60px"}}>SmartWatch S</h3>
            <p style={{marginLeft:"10px",marginRight:"10px"}}>Lorem ipsum dolor sit amet  kdjh consectetur adipisicing elit.</p>
            <h3 style={{color:"purple",marginLeft:"120px"}}>$299</h3>
            <button>Buy Now</button>
          </div>

          
          <div style={{borderRadius:"20px",backgroundColor:"white",width:"300px",margin:"30px"}}>
            <img src={img2} alt="Headphones Z" style={{margin:"30px",borderRadius:"20px"}}/>
            <h3 style={{marginLeft:"60px"}}>Headphones Z</h3>
            <p style={{marginLeft:"10px",marginRight:"10px"}}>Lorem ipsum dolor sit  ahehjv amet consectetur adipisicing elit.</p>
            <h3 style={{color:"purple",marginLeft:"120px"}}>$199</h3>
            <button>Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  );
}
