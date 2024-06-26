/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { React, useState,useEffect } from 'react'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
// import Sidebar from '../component/sidebar'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DeleteItemComponent from '../component/DeleteItemComponent';
import { CgImport } from "react-icons/cg";
import { TiExport } from "react-icons/ti";


function employee() {


 
  const id = localStorage.getItem("id");
  const Link = `https://garnishment-backend.onrender.com/User/ExportEmployees/${id}/`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [data, setData] = useState([]);
  
  useEffect(()=>{
  // const name = localStorage.getItem("name");
    const fetchData = async () => {
      try {
        // const id = localStorage.getItem("id");
      // const response = await fetch(`https://garnishment-backend.onrender.com/User/getemployeedetails/${id}/`); // Replace with your API URL
        // const jsonData = await response.json();
        // setData(jsonData.data) ;
      
        // console.log(jsonData)    
        // console.log(Data)
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (display error message, etc.)
      }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    
    fetchData(); // Call the function
    toast.success('All Employee Data !!');
  },[])
    // eslint-disable-next-line no-unused-vars
   
   

  return (
    <div>


<div className="min-h-full">
        
        <div className="container main ml-auto">
        {/* <div className='sidebar'><Sidebar/></div> */}
        
        <div className=' contant content ml-auto'>
            <Headertop />
            <ProfileHeader/>
            
            <hr />
            <div className='items-right text-right mt-4 mb-4 customexport'>
            <a href={Link} className=" border inline-flex items-right rounded-md bg-white px-3 py-2 text-sm font-semibold text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><TiExport />
        Export
        </a>
        <a href="#" className=" border inline-flex ml-2 items-right rounded-md bg-white px-3 py-2 text-sm font-semibold text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><CgImport />
       Import
       </a>
       </div>
            <table className="border-separate border-spacing-2 border border-slate-500 ...">
              
               <thead>
                 <tr>
                 <th className="text-center border border-slate-300 p-2 uppercase text-xs">Sr</th>
                   <th className="text-center border border-slate-300  p-2 uppercase text-xs">Employee</th>
                   <th className="border p-2 border-slate-300 uppercase text-xs">Employee Id</th>
                   <th className="border border-slate-300 p-2 uppercase  text-xs">Employer Id</th>
                   <th className="border border-slate-300 p-2 uppercase text-xs">Location</th>
                   <th className="border border-slate-300p-2 uppercase text-xs">Department</th>
                   <th className="border border-slate-300 p-2  uppercase text-xs">Minimum Wages</th>
                   <th className="border border-slate-300 p-2 uppercase text-xs">Netpay</th>
                   <th className="border border-slate-300 p-2 uppercase text-xs">Number Garnihsment</th>
                   <th className="border border-slate-300 p-2 uppercase text-xs">Pay Cycle</th>
                   <th className="border border-slate-300 p-2 uppercase text-xs">Action</th>
                   <th className="border border-slate-300 p-2 uppercase text-xs">Action</th>
                 </tr>
               </thead>
               
           
              
                 <tbody> 
                
             </tbody>
            
               
      
  
  </table>
        </div>  
       
      </div>
      </div>
    
      
    </div>
  )
}

export default employee