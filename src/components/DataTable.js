import { React, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./table.css";
import CardInfo from "./CardInfo";

const DataTable = () => {
  const [studentList, setStudentList] = useState([
    {
      id: "1",
      firstName: "Kerry",
      lastName: "Space",
      age: 27,
      birthdate: "1995-10-30",
      country: "sweden",
      city: "dalarna",
    },
    {
      id: "2",
      firstName: "sandra",
      lastName: "love",
      age: 24,
      birthdate: "1998-01-14",
      country: "sweden",
      city: "area",
    },
    {
      id: "3",
      firstName: "space",
      lastName: "one",
      age: 27,
      birthdate: "1995-10-30",
      country: "sweden",
      city: "dalarna",
    },
  ]);

  const [showDetails, setShowDetails] = useState({status: false, id: 0});



  return (
    <div className="m-3 ">
      <div className=" p-3 mb-5 border rounded shadow-lg  ">
        <div className="m-2 p-3 shadow-lg  title-student">
          <h3 className="text-dark  bg">Student List</h3>
        </div>
        <table className="table container  shadow-lg table-striped ">
          <TableHeader />
          <TableRow
            studentList={studentList}
            details={{ showDetails, setShowDetails }}
          />
        </table>
      </div>
      <div className="d-flex justify-content-center">
         {showDetails.status &&
          <CardInfo details={{showDetails, setShowDetails}} studentData={studentList} />
         }
         
      </div>
    
    </div>
  );
};

export default DataTable;
