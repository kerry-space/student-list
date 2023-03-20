import React from "react";
import "./table.css";

const CardInfo = ({ studentData, details }) => {
  const { showDetails, setShowDetails } = details;

  return (
    <>
      {studentData.map((student) => {
        return (
          <>
           {
            student.id === showDetails.id && (
              <div key={student.id} className="  col-md-4 card-bg card-title-wrapper  shadow-lg border border-1 rounded  ">
            <div className="card-title p-2 ml-2">
              <h4 className=""> Student Information</h4>
            </div>
            <div className="card-body p-3 mb-2 text-dark bg-white">
              {student.country} {student.city}
              <br />
              Id: {student.id}
              <br />
              Name: {student.firstName} {student.lastName}
              <br />
              birthdate: {student.birthdate}
              <br />
              <button
                className="border border-2 border-info my-2 shadow-lg rounded btn btn-primary"
                onClick={() => {
                  setShowDetails({ ...showDetails, status: false });
                }}
              >
                Hide
              </button>
            </div>
          </div>
            )
           }
          </>
        );
      })}
    </>
  );
};

export default CardInfo;
