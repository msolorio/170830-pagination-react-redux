import React from 'react';
import {connect} from 'react-redux';
import {
  togglePreviousPage,
  toggleNextPage
} from '../actions';
import cityNames from '../data/city-names.json';

export function Nav(props) {

  const lastPageNumber = Math.ceil(cityNames.length / 10);


  function prevPageClicked() {
    if (props.pageNumber <= 1) return;

    props.dispatch(togglePreviousPage(props.pageNumber));
  }


  function nextPageClicked() {
    if (props.pageNumber >= lastPageNumber) return;

    props.dispatch(toggleNextPage(props.pageNumber));
  }


  return (
    <div className="Nav">

      <button className="togglePageButton"
        type="button"
        onClick={prevPageClicked}>
        {`<`}
      </button>
      &nbsp;&nbsp;

      <span className="pageNumber">Page {props.pageNumber}</span>
      &nbsp;&nbsp;

      <button className="togglePageButton"
        type="button"
        onClick={nextPageClicked}>
        {`>`}
      </button>

    </div>
  );
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Nav);
