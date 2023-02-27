import { useContext } from "react";
import { dataContext } from "../context/context";
import { getLocation } from "../helper/helper";
import IconO from "./icono";
import IconOOutline from "./icono_outline";
import IconX from "./iconx";
import IconXOutline from "./iconx_outline";

const Entry = ({ location }) => {
  const { play, board, currentPlayer, gameEnded } = useContext(dataContext);
  const pos = getLocation(location);

  const playToLocation = (_) => {
    play(pos);
  };
  const anchor = board[pos[0]][pos[1]];

  const Marker = () => {
    if (anchor === 0) {
      if (currentPlayer === 1) {
        return <IconXOutline />;
      }
      return <IconOOutline />;
    }
    if (anchor === "W") {
      if (currentPlayer == 1) return <IconX />;
      return <IconO />;
    }

    if (anchor === 1) {
      return <IconX />;
    }

    return <IconO />;
  };
  return (
    <button
      className={`entry ${gameEnded ? "ended" : ""} ${
        anchor === "W" ? (currentPlayer === 1 ? "p-1" : "p-2") : ""
      } ${anchor !== 0 ? "filled" : ""}`}
      data-location={location}
      onClick={playToLocation}
    >
      <Marker />
    </button>
  );
};

export default Entry;
