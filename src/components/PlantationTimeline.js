import React from "react";
import { plantationsData, getAllUsers, createUser } from '../services/PlantService'
import { PlantationTimelineRow } from "./PlantationTimelineRow";

export const PlantationTimeline = () => {

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
                  <PlantationTimelineRow key={key} name={data.name} events={data.events} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};