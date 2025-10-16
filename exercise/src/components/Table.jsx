export default function Table()

{

const details=[

    {Empid:'E001',Name:'Harini T.',Department:'HR',Position:'HR Assistant',Salary:'65 000',JoiningDate:'6/12/2023'},

    {Empid:'E002',Name:'Ruwan S.',Department:'IT',Position:'Software Enginner',Salary:'120 000',JoiningDate:'10/5/2022'},

    {Empid:'E003',Name:'Divya P.',Department:'Marketing',Position:'Digital Marketer',Salary:'95 000',JoiningDate:'2/14/2023'},

    {Empid:'E004',Name:'Manoj K.',Department:'Finance',Position:'Accountant',Salary:'110 000',JoiningDate:'9/25/2021'},

    {Empid:'E005',Name:'Anjali R.',Department:'Design',Position:'UI/UX Designer',Salary:'105 000',JoiningDate:'4/1/2023'},

   

]

    return(

<>

<table border={1} style={{height:'300px',width:'600px',color:'black',fontSize:'17px',textAlign:'center'}}>

    <tr>

        <td>Emp ID</td>

        <td>Name</td>

        <td>Department</td>

        <td>Position</td>

        <td>Salary</td>

        <td>Joining Date</td>

    </tr>

   <tr style={{color:'black'}}>

        <td>{details[0].Empid}</td>

        <td>{details[0].Name} </td>

        <td>{details[0].Department} </td>

        <td>{details[0].Position} </td>

        <td>{details[0].Salary} </td>

        <td>{details[0].JoiningDate}</td>

    </tr>

     

    <tr style={{color:'black'}}>
         <td>{details[1].Empid}</td>

        <td>{details[1].Name} </td>

        <td>{details[1].Department} </td>

        <td>{details[1].Position} </td>

        <td>{details[1].Salary} </td>

        <td>{details[1].JoiningDate}</td>

        
    </tr>

    

    <tr style={{color:'black'}}>

         <td>{details[2].Empid}</td>

        <td>{details[2].Name} </td>

        <td>{details[2].Department} </td>

        <td>{details[2].Position} </td>

        <td>{details[2].Salary} </td>

        <td>{details[2].JoiningDate}</td>

    </tr>

    

    <tr style={{color:'black'}}>

        <td>{details[3].Empid}</td>

        <td>{details[3].Name} </td>

        <td>{details[3].Department} </td>

        <td>{details[3].Position} </td>

        <td>{details[3].Salary} </td>

        <td>{details[3].JoiningDate}</td>

    </tr>

    <tr style={{color:'black'}}>

        <td>{details[4].Empid}</td>

        <td>{details[4].Name} </td>

        <td>{details[4].Department} </td>

        <td>{details[4].Position} </td>

        <td>{details[4].Salary} </td>

        <td>{details[4].JoiningDate}</td>
    </tr>

 

    

    
       
    

</table>

</>

    );

}

