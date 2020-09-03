import React, { useState, useEffect } from "react";
import data from "../data/data.json";
const Player = ({ data }) => {
  const [picked, setPicked] = useState(false);

  return (
    <>
      {data.map((player) => {
        return (
          <tr
            onClick={() => setPicked(true)}
            className={picked ? "picked" : <></>}
          >
            {/* <td>{player.Picked}</td> */}
            <td>{player.Name}</td>
            <td>{player.round}</td>
            <td>{player.pick}</td>

            <td>{player.Pos}</td>
            <td>{player.TmBye}</td>
            <td>{player.Average}</td>
            <td>{player.Stdev}</td>
            <td>{player.Rank}</td>
            <td>{player.Tier}</td>
            <td>{player.ECR}</td>
            <td>{player.ECRAvg}</td>
            <td>{player.ADP}</td>
            <td>{player.ECRvADP}</td>
            <td>{player.PS}</td>
            <td>{player.Baseline}</td>
          </tr>
        );
      })}
    </>
  );
};
export default Player;
