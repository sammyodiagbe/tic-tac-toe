import { useContext } from "react";
import { dataContext } from "../context/context";
import { getLocation } from "../helper/helper";
import IconO from "./icono";
import IconOOutline from "./icono_outline";
import IconX from "./iconx";
import IconXOutline from "./iconx_outline";

const Entry = ({ location }) => {
  const { play, board, currentPlayer } = useContext(dataContext);
  const pos = getLocation(location);

  const playToLocation = (event) => {
    const { dataset } = event.target;
    const { location } = dataset;
    play(pos);
  };
  return (
    <button className="entry" data-location={location} onClick={playToLocation}>
      {board[pos[0]][pos[1]] !== 0 ? (
        currentPlayer === 1 ? (
          <IconX />
        ) : (
          <IconO></IconO>
        )
      ) : currentPlayer === 1 ? (
        <IconXOutline />
      ) : (
        <IconOOutline />
      )}
    </button>
  );
};

export default Entry;
