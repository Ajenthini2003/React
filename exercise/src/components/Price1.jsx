import { useState } from "react";

export default function Price1() {
    const detail = [
        { name: "Lavender", price: "100", qut: "", tprice: "" },
        { name: "Rose", price: "120", qut: "", tprice: "" },
        { name: "Milk & Honey", price: "130", qut: "", tprice: "" },
        { name: "Rosemary", price: "100", qut: "", tprice: "" },
        { name: "Mint", price: "140", qut: "", tprice: "" },
        { name: "Sweet orange", price: "110", qut: "", tprice: "" },
    ];

    const[data,setData]=useState(detail);
   


    return (
        <>
            <h2>Online Soap Purchasing</h2>
            <input
                type="text"
                value={searchDetail}
                onChange={(event) => setSearchDetail(event.target.value)}
                placeholder="Search Flavors..."
                style={{ marginBottom: "10px", padding: "5px" }}
            />

            <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Flavour</th>
                        <th>Price for each</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPrice.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><input value={quantity}
            onChange={(e) => setQuantity(e.target.value)}></input></td>
                            <td></td>
                        
                        </tr>
                    ))}
                </tbody>

            </table>
            <button onClick={() => handleClick(item)}>Calculate total</button>
        </>
    );

}

import { useState } from "react";

export default function Price1() {
  const initialData = [
    { name: "Lavender", price: 100, qut: "", tprice: "" },
    { name: "Rose", price: 120, qut: "", tprice: "" },
    { name: "Milk & Honey", price: 130, qut: "", tprice: "" },
    { name: "Rosemary", price: 100, qut: "", tprice: "" },
    { name: "Mint", price: 140, qut: "", tprice: "" },
    { name: "Sweet orange", price: 110, qut: "", tprice: "" },
  ];

  const [data, setData] = useState(initialData);
  const [searchDetail, setSearchDetail] = useState("");

  
  const filteredPrice = data.filter((item) =>
    item.name.toUpperCase().includes(searchDetail.toUpperCase())
  );

  
  const handleQuantityChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].qut = value;
    updatedData[index].tprice = value ? updatedData[index].price * value : "";
    setData(updatedData);
  };

  const handleBuy = (item) => {
    alert(`${item.name} purchased! Total: ₹${item.tprice || 0}`);
  };

  return (
    <>
      <h2>Online Soap Purchasing</h2>

      <input
        type="text"
        value={searchDetail}
        onChange={(event) => setSearchDetail(event.target.value)}
        placeholder="Search Flavors..."
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Flavour</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price </th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredPrice.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.qut}
                  min="0"
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  style={{ width: "60px" }}
                />
              </td>
              <td>{item.tprice}</td>
              <td>
                <button onClick={() => handleBuy(item)}>Buy now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

