import React, { Component } from 'react'

const TableHeader=()=>{
    const row1 = (
        <tr>
            <td>Name</td>
            <td>Job</td>
        </tr>
    )
    return(
        <thead>{row1}</thead>
    )
}


   
 
  
  const TableBody = props=>{
    const row = props.characterData.map((row,index)=>{
      return(<tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
      )
    
  })
  return <tbody>{row}</tbody>
  }
  
  
  class Table extends Component {
    render() {
      const { characterData, removeCharacter } = this.props
  
      return (
        <table>
    <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      )
    }
  }
  
  
  export default Table;