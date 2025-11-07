import { useState } from "react";

export default function Booking() {
    const hotel = [
        { name: "OceanView Resort", city: "Galle", price: "$85" },
        { name: "Mountain Retreat", city: "Nuwara Eliya", price: "$72" },
        { name: "City Central Hostel", city: "Colombo", price: "$110" },
        { name: "Lakeside Village", city: "Kandy", price: "$95" },

    ]
    

    let handleClick = (item) => {

       alert(`${item.name} booked`)

    }
   
    //useEffect(AlertSys, [click]);


    const [searchDetail, setSearchDetail] = useState("");
    const filteredHotel = hotel.filter((item) =>
        item.name.toUpperCase().includes(searchDetail.toUpperCase()));


    return (
        <>
            <h2 style={{ marginLeft: "700px" }}>Travel Booking App</h2>
            <input style={{ marginLeft: "500px", width: "500px", marginBottom: "40px",height:"20px" ,borderRadius:"5px",justifyContent:"center"}} type="text" value={searchDetail} onChange={(event) => setSearchDetail(event.target.value)} placeholder="Search hotels.."></input>
            <div style={{ display: "flex",textAlign:"center",justifyContent:"center"}}>
                {
                    filteredHotel.map((item) => (
                        <div style={{ border: "1px solid gray", width: "200px", height: "200px", marginLeft: "50px", borderRadius: "10px" }}>
                            <span style={{ fontSize: "25px", fontWeight: "bold", marginLeft: "60px" }}>{item.name}</span><br></br><br></br>
                            <span style={{ marginLeft: "50px" }}>City:{item.city}</span><br></br><br></br>
                            <span style={{ marginLeft: "50px" }}>Price per night:{item.price}</span><br></br><br></br>
                            <hr />
                            <button style={{backgroundColor:"green",borderColor:"green",marginLeft:"50px",borderRadius:"5px",color:"white"}} onClick={() => handleClick(item)}>Book Now</button>

                        </div>
                    )
                    )
                }
            </div>


        </>
    )

}