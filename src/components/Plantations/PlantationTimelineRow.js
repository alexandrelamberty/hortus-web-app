import React from "react";

export const PlantationTimelineRow = ({ name, events }) => {
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
      return null;
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
  