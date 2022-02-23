import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { sortArrayByFirstName } from "../helper/helper";
import { defaultPlayerData } from "../data/default-players-data";
import Immutable from "immutable";
import "./default-players.less";

const DefaultPlayers = (props) => {
  const [value, setValue] = useState([]);
  const [defaultPlayers, setDefaultPlayers] = useState([]);

  useEffect(() => {
    let sortedDefaultPlayers = defaultPlayerData.sort(sortArrayByFirstName);

    setDefaultPlayers(
      sortedDefaultPlayers.map((players) => ({
        ...players,
        isChecked: false,
        id: uuidv4()
      }))
    );
  }, []);
  useEffect(() => {
    console.log(props.clearVals);
    console.log("default players", defaultPlayers);
    if (props.clearVals) {
    }
  }, [props.clearVals]);
  useEffect(() => {
    props.onChange(Immutable.fromJS(value));
    console.log(value);
  }, [value]);

  // useEffect(() => console.log("default players", defaultPlayers), [defaultPlayers]);

  const onPlayerToggle = (e) => {
    if (e.target.checked) {
      const profile = defaultPlayers.filter(
        (profile) => profile.id === e.target.id
      );
      defaultPlayers.forEach((player) => (player.isChecked = true));
      setValue((prevValue) => [...prevValue, ...profile]);
    } else {
      setValue((prevValue) =>
        prevValue.filter((profile) => profile.id !== e.target.id)
      );
    }
  };
  return (
    <>
      <div className="default-players">
        <details>
          <summary>Select players from a default list</summary>
          <div className="default-players__list">
            {defaultPlayers.map(({ firstname, lastname, id }) => (
              <div key={id} className="default-players__player">
                <label>
                  <input id={id} type="checkbox" onChange={onPlayerToggle} />
                  {firstname} {lastname}
                </label>
              </div>
            ))}
          </div>
        </details>
      </div>
    </>
  );
};

export default DefaultPlayers;
