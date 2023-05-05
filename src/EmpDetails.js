import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="card container py-4" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2 style={{ margin: "16px" }}>Employee Details</h2>
        </div>
        <div className="card-body"></div>

        {empdata && (
          <div className="ms-3">
            <h4>
              The Employee name is : <b>{empdata.name}</b> ({empdata.id})
            </h4>
            <h5><b>Contact Details</b></h5>
            <h5>Email is : {empdata.email}</h5>
            <h5>Phone is : {empdata.phone}</h5>
            <Link to="/" className="btn btn-danger my-3">Back to Listing</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpDetails;
