import { observer } from "mobx-react-lite";
import { useAppStore } from "./AppStore/AppStoreProvider";
import { useEffect } from "react";
import { autorun } from "mobx";

export const Board = observer(() => {
  const appStore = useAppStore();
  useEffect(() => autorun(() => {
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    for (let a of winComb) {
      if (
        appStore.marks[a[0]] === 1 &&
        appStore.marks[a[1]] === 1 &&
        appStore.marks[a[2]] === 1
      ) {
        const wn = appStore.win;
        wn[a[0]] = "win";
        wn[a[1]] = "win";
        wn[a[2]] = "win";
        appStore.setWin(wn);
        appStore.setEnd(true);
        appStore.setPlayer(1);
      }
      if (
        appStore.marks[a[0]] === 2 &&
        appStore.marks[a[1]] === 2 &&
        appStore.marks[a[2]] === 2
      ) {
        const wn = appStore.win;
        wn[a[0]] = "win";
        wn[a[1]] = "win";
        wn[a[2]] = "win";
        appStore.setWin(wn);
        appStore.setEnd(true);
        appStore.setPlayer(2); 
      }
    }
  }, [appStore]));

  const markChange = (arg) => {
    console.log(appStore.marks);
    const mrk = [...appStore.marks];
    if (!appStore.end) {
      if (mrk[arg] === 0) {
        mrk[arg] = appStore.player;
        appStore.setMarks(mrk);
        if (appStore.player === 1) {
          appStore.setPlayer(2);
        } else {
          appStore.setPlayer(1);
        }
      } else {
        alert("Click on empty cell!");
      }
    } else {
      alert(`Player ${appStore.player} won! Reload page for regame!`);
    }
  };
  return (
    <div className="Board">
      <div>
        <Block
          mark={appStore.marks[0]}
          markChange={markChange}
          position={0}
          winCls={appStore.win[0]}
        ></Block>
        <Block
          mark={appStore.marks[1]}
          markChange={markChange}
          position={1}
          winCls={appStore.win[1]}
        ></Block>
        <Block
          mark={appStore.marks[2]}
          markChange={markChange}
          position={2}
          winCls={appStore.win[2]}
        ></Block>
      </div>
      <div>
        <Block
          mark={appStore.marks[3]}
          markChange={markChange}
          position={3}
          winCls={appStore.win[3]}
        ></Block>
        <Block
          mark={appStore.marks[4]}
          markChange={markChange}
          position={4}
          winCls={appStore.win[4]}
        ></Block>
        <Block
          mark={appStore.marks[5]}
          markChange={markChange}
          position={5}
          winCls={appStore.win[5]}
        ></Block>
      </div>
      <div>
        <Block
          mark={appStore.marks[6]}
          markChange={markChange}
          position={6}
          winCls={appStore.win[6]}
        ></Block>
        <Block
          mark={appStore.marks[7]}
          markChange={markChange}
          position={7}
          winCls={appStore.win[7]}
        ></Block>
        <Block
          mark={appStore.marks[8]}
          markChange={markChange}
          position={8}
          winCls={appStore.win[8]}
        ></Block>
      </div>
    </div>
  );
});

const Block = ({ mark, position, markChange, winCls }) => {
  return (
    <div
      className={`Block mark${mark} ${winCls}`}
      onClick={(e) => markChange(position)}
    ></div>
  );
};
