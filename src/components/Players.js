import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Player from "./Player";
const Players = () => {
  console.log(data);
  const [sorted, setSorted] = useState(false);
  const [sortedData, setSortedData] = useState(data);
  useEffect(() => {
    sortData();
  }, []);

  function sortData() {
    let data = sortedData;
    data = data.filter((entry) => entry.ECR != "");
    console.log(data);
    data.map((theData) => {
      theData["round"] = theData.ECR.split("|")[0];
      theData["pick"] = theData.ECR.split("|")[1];
    });
    data.map((theData) => {
      let ranking = theData.ECR;
      console.log(theData.ECR);
      ranking = ranking.split("|");
      theData.ECR = parseInt(ranking[0]) * parseInt(ranking[1]);
    });
    data = data.sort((a, b) => a.round - b.round);

    console.log(data);
    setSortedData(data);
    setSorted(true);
  }
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Round</th>
          <th>Pick</th>
          <th>Position</th>
          <th>TmBye</th>
          <th>Average</th>
          <th>Stdev</th>
          <th>Rank</th>
          <th>Tier</th>
          <th>ECR</th>
          <th>ECR Avg</th>
          <th>ADP</th>
          <th>ECRvADP</th>
          <th>PS</th>
          <th>Baseline</th>
        </tr>
        {sorted ? (
          sortedData.map((player) => {
            let thePlayer = [];
            thePlayer.push(player);
            return <Player data={thePlayer} />;
          })
        ) : (
          <></>
        )}
      </table>
    </>
  );
};
export default Players;
