import { useState } from "react";
export default function Student() {
  const [sorted, setSorted] = useState([
    { id: 1, name: "M.Ajenthini", nic:200327423993, birth:"2003.07.23", dis:"Batticaloa",dad:"Makenthiran",contact:94779695748 },
    { id: 2, name: "M.Asini", nic:200372132903, birth:"2003.08.23", dis:"Batticaloa",dad:"Dilaxshan",contact:94774673901 },
    { id: 3, name: "M.Harishma", nic:200373400593, birth:"2003.07.19", dis:"Batticaloa",dad:"Rjeevan",contact:94756783451 },
    { id: 4, name: "V.Dilani", nic:200367760593, birth:"2003.06.21", dis:"Colombo",dad:"Varuyuthan",contact:94718953420 },
    { id: 5, name: "A.Monika", nic:200355550593, birth:"2003.05.15", dis:"Jaffna",dad:"Aingaran",contact: 9410945673 },
    { id: 6, name: "M.Kabilshini", nic:200370500593, birth:"2003.03.14", dis:"Mannar",dad:"Thisenthira",contact: 947567834562 },
    { id: 7, name: "R.Sajithra", nic:200370500593, birth:"2003.07.23", dis:"Batticaloa",dad:"Patkunam",contact: 94779789032},
    { id: 8, name: "S.Suwanja", nic:200367894593, birth:"2003.07.23", dis:"Batticaloa",dad:"Rajeswaran",contact: 94779087632 },
    { id: 9, name: "M.Sumeka", nic:200370500593, birth:"2003.04.26", dis:"Nuwara Eliya",dad:"Senthil",contact: 94778923421 },
    { id: 10, name: "P.Kaviya", nic:200370674578, birth:"2003.09.23", dis:"Puttalam",dad:"Vijayakumar",contact: 94776734211 },
    { id: 11, name: "K.Kayalvizhi", nic:2003705459087, birth:"2003.01.23", dis:"Jaffna",dad:"Makenthiran",contact: 94767898765 },
    { id: 12, name: "K.Jasmin", nic:200372134568, birth:"2003.06.15", dis:"Colombo",dad:"Suhendar",contact: 9479695748 },
    { id: 13, name: "O.Ajanda", nic:200370500593, birth:"2003.09.15", dis:"Batticaloa",dad:"Stephan",contact: 94712348658 },
    { id: 14, name: "A.Sheymughe", nic:2003778564393, birth:"2003.02.23", dis:"Batticaloa",dad:"Baskar",contact: 94745673082 },
    { id: 15, name: "K.Karunja", nic:200370500593, birth:"2003.03.04", dis:"Batticalo",dad:"Surendar",contact: 94719045783 },
    { id: 16, name: "L.Rukashana", nic:2003896743593, birth:"2003.07.23", dis:"Batticaloa",dad:"Eswaran",contact: 94745783210},
    { id: 17, name: "N.Sarjana", nic:200370500593, birth:"2003.10.20", dis:"Batticaloa",dad:"Elango",contact: 94712312345 },
    { id: 18, name: "M.Minerva", nic:2003748382993, birth:"2003.07.21", dis:"Batticaloa",dad:"Mayilavan",contact: 94779805462},
    { id: 19, name: "W.Sasmini", nic:2003705758343, birth:"2003.12.11", dis:"Batticaloa",dad:"Suthakar",contact: 94772341567 },
    { id: 20, name: "T.Yogarani", nic:200378906493, birth:"2003.06.03", dis:"Batticaloa",dad:"Rednam",contact: 94778956321 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = sorted.filter((item) => {
    const values = Object.values(item).join("").toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });
  const fieldNames = Object.keys(sorted[0]);
  return (
    <>
    <div style={{backgrondColor:"#c2ab80ff",marginLeft:"550px",color:"#800000",marginTop:"80px"}}>
      <input
      style={{marginLeft:"100px"}}
        type="text"
        placeholder="Search anything..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table cellPadding="8" style={{ marginTop:"10px", borderCollapse: "collapse",backgrondColor:"white",border:"1px solid #800000", }}>
        <thead>
          <tr>
            {fieldNames.map((field) => (
              <th key={field}>{field.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                {fieldNames.map((field) => (
                  <td key={field}>{item[field]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={fieldNames.length} style={{ textAlign: "center" }}>
                No matching results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
}