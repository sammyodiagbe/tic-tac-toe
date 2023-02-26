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

  const playToLocation = (_) => {
    play(pos);
  };

  const Marker = () => {
    const anchor = board[pos[0]][pos[1]];
    if (anchor === 0) {
      if (currentPlayer === 1) {
        return <IconXOutline />;
      }
      return <IconOOutline />;
    }
    if (anchor === 1) {
      return <IconX />;
    }
    return <IconO />;
  };
  return (
    <button className="entry" data-location={location} onClick={playToLocation}>
      <Marker />
    </button>
  );
};

export default Entry;
