const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter: filter
  }
});

export const visibilityFilter = (state = "SHOW_ALL", { type, payload }) => {
  switch (type) {
    case "SET_VISIBILITY_FILTER":
      return payload.filter;
    default:
      return state;
  }
};
