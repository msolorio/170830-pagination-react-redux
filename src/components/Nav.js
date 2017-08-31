import React from 'react';
import {connect} from 'react-redux';
import {
  togglePreviousPage,
  toggleNextPage
} from '../actions';

export function Nav(props) {
  return (
    <div className="Nav">

      <button className="togglePageButton"
        type="button"
        onClick={() => props.dispatch(togglePreviousPage(props.pageNumber))}>
        {`<`}
      </button>
      &nbsp;&nbsp;

      <span className="pageNumber">Page {props.pageNumber}</span>
      &nbsp;&nbsp;

      <button className="togglePageButton"
        type="button"
        onClick={() => props.dispatch(toggleNextPage(props.pageNumber))}>
        {`>`}
      </button>

    </div>
  );
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Nav);
