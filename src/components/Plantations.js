import React from "react";
import { plantationsData, getAllUsers, createUser } from '../services/PlantService'

export const Plantations = () => {

	// The months in the calendar.
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // getAllUsers = () => {
  //   getAllUsers()
  //     .then(users => {
  //       console.log(users)
  //       //this.setState({users: users, numberOfUsers: users.length})
  //     });
  // }

  return (
    <>
      <div className="plantations-container">
        <div className="table-legend">
          <ul className="legend">
            <li>
              <span class="seeding"></span> Seeding
            </li>
            <li>
              <span class="transplanting"></span> Transplanting
            </li>
            <li>
              <span class="planting"></span> Planting
            </li>
            <li>
              <span class="harvesting"></span> Harvesting
            </li>
          </ul>
        </div>
        <table>
          <tbody>
            <tr>
              <th>
                <h5>Name</h5>
              </th>
              {months.map((value, index) => {
                return (
                  <th key={index} colspan="2" className="month">
                    <h5>{value}</h5>
                  </th>
                );
              })}
            </tr>
            {plantationsData.map((data, key) => {
              return (
                <tr key={key}>
                  <Plantation key={key} name={data.name} events={data.events} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Plants Tracker</h2>
      <a href="calendar">Calendar</a>
      <a href="plantations">My Plantations</a>
    </header>
  );
};

const Plantation = ({ name, events }) => {
  let a = new Array(24);
  if (Object.seal) {
    a.fill("");
    Object.seal(a);
  }

  events.map(function (event) {
    var i;
    for (i = event.start - 1; i <= event.end - 1; i++) {
      a.splice(i, 1, event.name);
    }
  });

  console.log(a);

  if (!name) return <div />;
  return (
    <>
      <td className="plant">
        <h5>{name}</h5>
      </td>
      {a.map((data, key) => {
        return <td key={key} className={data}></td>;
      })}
    </>
  );
};
