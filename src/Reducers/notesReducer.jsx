const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      if (state.length === 0) {
        action.payload.id = 1;
      } else {
        action.payload.id = state[state.length - 1].id + 1;
      }
        return [...state, action.payload];
    }
    case "REMOVE_NOTE":
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};
export default notesReducer;
