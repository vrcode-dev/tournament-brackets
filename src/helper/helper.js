import { getFullName } from "../readers";
import Immutable from "immutable";

export const formatTeams = (numOfPlayersPerTeam, playerplayerList) => {
  let result = [];

  if (!numOfPlayersPerTeam || !playerplayerList) return;

  if (numOfPlayersPerTeam === 1) {
    return playerplayerList.map((profile) => getFullName(profile));
  } else if (numOfPlayersPerTeam === 2) {
    for (let i = 0; i < playerplayerList.length; i += 2) {
      result.push(
        playerplayerList
          .slice(i, i + 2)
          .map((profile) => getFullName(profile))
          .join(" / ")
      );
    }
  } else {
    for (let i = 0; i < playerplayerList.length; i += numOfPlayersPerTeam) {
      result.push(
        playerplayerList
          .slice(i, i + numOfPlayersPerTeam)
          .map((profile) => getFullName(profile))
          .join(",")
      );
    }
  }

  return result;
};
export const shuffle = (playerList) => {
  //https://bost.ocks.org/mike/shuffle/
  if (!playerList) return;

  let m = playerList.length;
  let t;
  let i;
  // let result = new Array(m);

  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = playerList[m];
    playerList[m] = playerList[i];
    playerList[i] = t;
  }
  return playerList;
};

export const sortArrayByFirstName = (x, y) => {
  return x.firstname.localeCompare(y.firstname);
};
