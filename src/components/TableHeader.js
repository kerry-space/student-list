import React from 'react';

const TableHeader = () => {
  return (
    <thead>
        <tr className='text-dark rounded'>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>action</th>
        </tr>
    </thead>
  );
}

export default TableHeader;
