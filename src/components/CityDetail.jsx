import React from "react";
import parse from "html-react-parser";

const CityDetail = ({ selectedCity, cityDetail }) => {
  // console.log(selectedCity);
  if (!cityDetail) {
    return <div></div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h3 className="ui header">{selectedCity.name}</h3>
        {parse(cityDetail.summary)}
        <p>Ratings</p>
        <ul>
          <li>
            Housing: {Math.floor(cityDetail.categories[0].score_out_of_10)} of
            10
          </li>
          <li>
            Cost of Living:{" "}
            {Math.floor(cityDetail.categories[1].score_out_of_10)} of 10
          </li>
          <li>
            Safety: {Math.floor(cityDetail.categories[7].score_out_of_10)} of 10
          </li>
          <li>
            Economy: {Math.floor(cityDetail.categories[11].score_out_of_10)} of
            10
          </li>
          <li>
            Education: {Math.floor(cityDetail.categories[9].score_out_of_10)} of
            10
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CityDetail;
