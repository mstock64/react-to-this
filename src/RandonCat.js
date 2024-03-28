import React, { useState, useEffect } from 'react';

function RandonCat() {
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div>
      {data.length > 0 ? (
        // Display fetched data
        <ul>
          {data.map(item => (
            <li key={item.id}> {/* Use a unique identifier for each item */}
              <img width='1280' height='720' src={item.url} alt='cat'/>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default RandonCat;
