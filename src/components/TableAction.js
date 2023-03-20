import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

const TableAction = ({details}) => {
    const {pass , student} = details;
   
   console.log(pass.showDetails);


   const cardClick = ( key) => {

    console.log(key);
      pass.setShowDetails({ ...pass.showDetails, status: !pass.showDetails.status, id: key});
   
    }


  return (
    <>
      <button className="btn btn-primary" key={student.id} onClick={() => cardClick(student.id)} type='button'>Details</button>
    </>
  );
}

export default TableAction;
