export const createAppStore = (props) => {
  return {
    marks: props.marks || [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player: props.player || 1,
    end: props.player || false,
    win: props.win || ["", "", "", "", "", "", "", "", ""],
    setMarks: function (arg) {
      this.marks = arg;
    },
    setPlayer: function (arg) {
      this.player = arg;
    },
    setEnd: function (arg) {
      this.end = arg;
    },
    setWin: function (arg) {
      this.win = arg;
    }
  };
};


