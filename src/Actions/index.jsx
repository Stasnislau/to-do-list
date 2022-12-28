export  const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};
export const removeNote = (id) => {
  return {
    type: "REMOVE_NOTE",
    payload: id,
  };
};
