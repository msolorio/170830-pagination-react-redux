export const togglePreviousPage = (currentPageNumber) => ({
  type: 'TOGGLE_PREVIOUS_PAGE',
  currentPageNumber
});

export const toggleNextPage = (currentPageNumber) => ({
  type: 'TOGGLE_NEXT_PAGE',
  currentPageNumber
});
