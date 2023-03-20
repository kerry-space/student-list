import {React,useState} from 'react';
import TableAction from './TableAction';

const TableRow = ({studentList,details}) => {
   
  const  pass = details;
   
  return (
    <tbody>
       {
        studentList.map((student) => {
            return(
                <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td><TableAction details={{pass, student}}/></td>
            </tr>
            )
        })
       }
    </tbody>
  );
}

export default TableRow;
