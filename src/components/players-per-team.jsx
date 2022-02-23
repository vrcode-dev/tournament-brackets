import { useState } from "react";
import "./players-per-team.less";
const PlayersPerTeam = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [value, setValue] = useState(2);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <div className="player-per-team">
      <label>Number of players per team: </label>
      <select onChange={handleOnChange} value={value}>
        {data.map((el, idx) => (
          <option key={idx}> {el} </option>
        ))}
      </select>
    </div>
  );
};
export default PlayersPerTeam;
