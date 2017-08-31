import React from 'react';
import {connect} from 'react-redux';
import cityNames from '../data/city-names.json';

// console.log(cityNames);

export function ItemDisplay(props) {

  // takes in a page number
  // returns 10 names based on page number
  function getNamesPerPage(pageNumber) {
    const startingNameIndex = (pageNumber - 1) * 10;

    const namesToDisplay = [];
    for (let i=startingNameIndex, j=startingNameIndex+10; i<j; i++) {
      namesToDisplay.push(cityNames[i]);
    }

    return namesToDisplay;
  }

  function renderNames(names) {
    return names.map((name, index) => {
      return (
        <li className="name"
          key={index}>
          {name.name}
        </li>
      );
    });
  }

  return (

    <div className="ItemDisplay">
      {renderNames(getNamesPerPage(props.pageNumber))}
    </div>
  );
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(ItemDisplay);
