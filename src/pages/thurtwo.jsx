import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OldFetch = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [whose, setWhose] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
  const base64ApiKey = btoa(api_key);

  const fetchData = async () => {
    setLoading(true);

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
  };

  return (
    <div>
      <h1>Employee In/Out Data</h1>
      <label>
        Enter whose Attendance record is needed
        <input 
        type="text"
        value={whose}
        onChange={(e) => setWhose(e.target.value)}/>
      </label>
      <label>
        Enter Start Date (format: DD/MM/YYYY):
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        Enter End Date (format: DD/MM/YYYY):
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Submit</button>
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
  );
};

export default OldFetch;
