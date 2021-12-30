export const useTable = (props) => {
  const { characterData, removeCharacter } = props;
  const TableHeader = () => { 
    return (
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
    );
  }
  const TableBody = (props) => { 
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      );
    });
  
    return <tbody>{rows}</tbody>;
  }
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  );
}