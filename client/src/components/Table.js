import React from 'react';

const Table = ({ data, deleteItem, editItem}) => {
    console.log("table", data);
    if (data.length === 0) {
        return <p>No data.</p>;
    }
  
    const keys = Object.keys(data[0]);

  return (
    <div  className='table_container'>
    <table>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
          { 
            editItem && <th>Edit</th> 
          }
          {
            deleteItem && <th>Delete</th>
          }

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

            {
              editItem && <td>
                <button onClick={() =>{ console.log(item);editItem(item)}}>Edit</button>
              </td>
            }
            {
              deleteItem && <td>
                <button onClick={() => deleteItem(Object.values(item)[0])}>Delete</button>
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
