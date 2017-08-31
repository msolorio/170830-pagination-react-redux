const initialState = {
  pageNumber: 1
};

export const paginationReducer = (state=initialState, action) => {


  if (action.type === 'TOGGLE_PREVIOUS_PAGE') {
    const pageNumber = action.currentPageNumber - 1;

    return Object.assign({}, state, {
      pageNumber
    });
  }


  if (action.type === 'TOGGLE_NEXT_PAGE') {
    const pageNumber = action.currentPageNumber + 1;

    return Object.assign({}, state, {
      pageNumber
    });
  }


  return state;
}
