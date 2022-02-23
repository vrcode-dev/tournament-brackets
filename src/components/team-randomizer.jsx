import { useEffect, useState } from "react";
import PlayersPerTeam from "./players-per-team";
import DefaultPlayers from "./default-players";
import "./team-randomizer.less";
import { formatTeams, shuffle } from "../helper/helper";
import { getFullName } from "../readers";
import AddPlayerModal from "./modals/add-player-modal";

const TeamRandomizer = () => {
  const [players, setPlayers] = useState("");
  const [defaultPlayers, setDefaultPlayers] = useState([]);
  const [randomizedTeam, setRandomizedTeam] = useState([]);
  const [numOfPlayersPerTeam, setNumOfPlayersPerTeam] = useState(2);
  const [names, setNames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addedPlayerData, setAddedPlayerData] = useState([]);
  const [clearVals, setClearVals] = useState(false);
  const playerList = players;

  useEffect(() => {
    const combinedPlayers = [...defaultPlayers, ...addedPlayerData]; //currently can only add 1 name
    const processedNames = combinedPlayers
      ?.map((player) => getFullName(player))
      .join(",")
      .split(",")
      .filter((name) => name.trim())
      .join("\n");
    // add add player functionality
    setNames(processedNames); //for view in textarea
    setPlayers(combinedPlayers); // maybe move this to a different useEffect,
  }, [defaultPlayers, addedPlayerData]);
  useEffect(() => {}, []);

  const onNumberOfPlayerChange = (e) => {
    setNumOfPlayersPerTeam(+e);
  };

  const onDefaultPlayersChange = (defaultPlayerList) => {
    setDefaultPlayers(defaultPlayerList);
    setClearVals(false);
  };

  const randomizeTeam = (e) => {
    e.preventDefault();
    let randomizedList = shuffle(playerList);
    let result = formatTeams(numOfPlayersPerTeam, randomizedList);
    setRandomizedTeam(result);
  };
  const handleClear = () => {
    // onDefaultPlayersClear()
    setClearVals(true);
    setPlayers(null);
    setNames("");
  };

  return (
    <>
      <PlayersPerTeam onChange={onNumberOfPlayerChange} />

      <DefaultPlayers onChange={onDefaultPlayersChange} clearVals={clearVals} />

      <form id="namesForm" onSubmit={randomizeTeam}>
        <div className="form-group">
          <textarea
            readOnly
            placeholder={`Select players from the above default list and/or add new players using "Add Player" button`}
            value={names}
          />
        </div>
      </form>

      <div className="control">
        <button id="formButton" form="namesForm" type="submit">
          Randomize
        </button>
        <button onClick={() => setShowModal(true)}>Add Player</button>
        <AddPlayerModal //needs to refactor to a global modal management
          show={showModal}
          onClose={() => setShowModal(!showModal)}
          onSubmit={(data) => setAddedPlayerData((prev) => [...prev, data])}
        ></AddPlayerModal>
        <button onClick={handleClear}>Clear</button>
        <span>Total number of players: {playerList?.length || 0}</span>
      </div>
      <div className="team-randomizer__result">
        <ul>
          {randomizedTeam &&
            randomizedTeam.map((team, index) => (
              <li key={index}>
                <div>
                  {" "}
                  {index + 1}. {team}{" "}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TeamRandomizer;
