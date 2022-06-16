import React from "react";
import "./Section.css";

const Section = ({ users }) => {
  console.log(users);
  return (
    <div className="tabble">
      <table className="table">
        <tr>
          <td>name:</td>
          <td>last name:</td>
          <td>age:</td>
          <td>id:</td>
        </tr>
        {users.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;
