import React from 'react';
import {connect} from 'react-redux';
import cityNames from '../data/city-names.json';

export function ItemDisplay(props) {

  function getNamesPerPage(pageNumber) {
    const startingNameIndex = (pageNumber - 1) * 10;

    const namesToDisplay = [];
    for (let i=startingNameIndex, j=startingNameIndex+10; i<j; i++) {
      if (!cityNames[i]) break;
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
