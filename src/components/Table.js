
const Table = ({ data }) => {
    console.log("table", data);
    if (data.length === 0) {
        return <p>No data.</p>;
    }    
    const keys = Object.keys(data[0]);
    console.log("keys", keys);
    return (
        <table>
            <thead>
                <tr>
                    {keys.map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {keys.map((key, index) => (
                            <td key={index}>{JSON.stringify(item[key])}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;