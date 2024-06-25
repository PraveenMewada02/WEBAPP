// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
import { format } from 'date-fns';
import { toast } from 'react-toastify';

// function getLastDateOfMonth(date = new Date()) {
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   let lastDay = date.getDate() - 1; // Get the previous day (assuming non-December)

//   // December is a special case: set month to 0 (January) and adjust year if necessary
//   if (month === 11) {
//     lastDay = 31; // December always has 31 days
//     year;
//   }

//   return new Date(year, month, lastDay);
// }
const today = new Date();
// const formattedDate = format(today, 'dd/MM/yyyy');
// const formattedDatelast = format(today, 'dd/MM/yyyy');
const lastDay = new Date(today);
// eslint-disable-next-line no-unused-vars
lastDay.setDate(today.getDate() - 1);

const dd = lastDay.getDate();
const ddd = dd.toString().padStart(2, '0');

const mm = lastDay.getMonth()+1; //January is 0!
const mmm = mm.toString().padStart(2, '0');

const yyyy = lastDay.getFullYear();
// eslint-disable-next-line no-unused-vars
const lastDay1 = ddd +'/'+mmm+'/'+yyyy;
console.log(lastDay1) 
// console.log(lastDay) 

// Example usage

// const lastDay = getLastDateOfMonth(today);

const OldFetch = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [whose, setWhose] = useState("ALL");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedlast, setIsCheckedlast] = useState(false);
  const currentDate = new Date();
  // const lastate = new Date(y, m + 1, 0);
  // const formattedDate1 = format(lastate, 'dd/MM/yyyy');
  const formattedDate = format(currentDate, 'dd/MM/yyyy');

  const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
  const base64ApiKey = btoa(api_key);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
    if (isChecked) {
      setWhose("");
    } else {
      setWhose("ALL");
      setStartDate(formattedDate)
      setEndDate(formattedDate)
      
     
      
    }
  };
// this is anothoer funtion 
  const handleCheckboxChangelast = (event) => {
    setIsCheckedlast(event.target.checked);
    console.log(isCheckedlast);
    
    if (isCheckedlast) {
      setWhose("");
      console.log(lastDay)
      console.log('from function') 
    } else {
      setWhose("ALL");
      setStartDate(lastDay1)
      setEndDate(lastDay1)
      
     
      
    }
  };

  const fetchData = async () => {
    setLoading(true);
    console.log(startDate)
    if(startDate){
    const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&&FromDate=${startDate}&&ToDate=${endDate}`;
    try {
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Basic ${base64ApiKey}`,
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
    }
    else{
      toast.warning('need feel values in field')
    }
  };

  return (
    <div>
         <header className="bg-white bg-gray-800 shadow">
        </header>
        <div className="container main">
        {/* <div className='sidebar'><Sidebar/></div> */}
        <div className="contant content ml-auto">
        <Headertop />
        <ProfileHeader/>
          <hr />
    <div className="form_data">
      <h4 className='mt-6 '>Employee In/Out Data</h4>
      <p className='text-sm mt-4'>
        <input type="checkbox" id="today" name="today" checked={isChecked} onChange={handleCheckboxChange} /> Today</p>

      <p className='text-sm mt-4'>
        <input type="checkbox" id="lastday" name="lastday" checked={isCheckedlast} onChange={handleCheckboxChangelast} /> Yesterday</p>
      
      
      <label className='mr-2'>
        Enter whose Attendance record is needed
        <input className=''
        type="text"
        value={whose}
        onChange={(e) => setWhose(e.target.value)} required/>
      </label >
      <label className='mr-2'>
        Enter Start Date (format: DD/MM/YYYY) * :
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label className='mr-2'>
        Enter End Date (format: DD/MM/YYYY) * :
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Filter</button>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <table>
          <thead>
            <tr>
              <th>Employee Code</th>
              <th>Name</th>
              <th>Date</th>
              <th>IN Time</th>
              <th>OUT Time</th>
              <th>Work Time</th>
              <th>Over Time</th>
              <th>Break Time</th>
              <th>Status</th>
              <th>Remark</th>
              <th>Erl_Out</th>
              <th>Late_In</th>
            </tr>
          </thead>
          <tbody>
            {data.InOutPunchData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.Empcode}</td>
                <td>{entry.Name}</td>
                <td>{entry.DateString}</td>
                <td>{entry.INTime}</td>
                <td>{entry.OUTTime}</td>
                <td>{entry.WorkTime}</td>
                <td>{entry.OverTime}</td>
                <td>{entry.BreakTime}</td>
                <td>{entry.Status}</td>
                <td>{entry.Remark}</td>
                <td>{entry.Erl_Out}</td>
                <td>{entry.Late_In}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
    </div>
    </div>
    </div>
  );
};

export default OldFetch;
