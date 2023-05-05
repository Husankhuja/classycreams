import React from 'react';

const Table = ({ data, deleteItem = () => {}}) => {
    console.log("table", data);
    if (data.length === 0) {
        return <p>No data.</p>;
    }
  
    const keys = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
          {/* <th>Edit</th> */}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {keys.map((key, index) => (
              <td key={index}>
                {typeof item[key] === 'object'
                  ? JSON.stringify(item[key])
                  : item[key]}
              </td>
            ))}
            {/* <td>
              <button onClick={() => handleEdit(Object.values(item)[0])}>Edit</button>
            </td> */}
            <td>
              <button onClick={() => deleteItem(Object.values(item)[0])}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
