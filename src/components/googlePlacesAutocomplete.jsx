// import axios from 'axios';
import React, { useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import './stylus.css';
import Loc from '../pages/settings/assets/location.svg'

const AutoComplete = ({
  vehicleData,
  setCoordinates,
  setCoordinates2,
  setPickUpAd,
  setDestAd,
  pickUpAd,
  destAd,
  setAddress,
  address
}) => {
//   const [address, setAddress] = useState("");

  const [address2, setAddress2] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    // console.log("address", ll);
    console.log(results);
    setAddress(value);
    // setCoordinates(ll);
  };

  const handleSelect2 = async (value) => {
    const results2 = await geocodeByAddress(value);
    const ll2 = await getLatLng(results2[0]);
    console.log("destination coordinates", ll2);
    setAddress2(value);
    setDestAd(value);
    setCoordinates2(ll2);
  };

  return (
    <div className="auto-complete">
      <div className="field-div">
        {/* <label htmlFor="Pickup-Address">
          Pickup Address <span style={{ color: "crimson" }}>*</span>
        </label> */}
        <PlacesAutoComplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          searchOptions={{
            componentRestrictions: {
              country: "nga",
            },
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div key={suggestions.description}>
                <div style={{position: "relative"}}>
              <input
                {...getInputProps({
                  placeholder: "Enter and select an address",
                  className: "location-search-input",
                })}
              />
              <img style={{position: "absolute", top: "25%", right: "2%"}} src={Loc} alt="loc" />
              </div>
              <div style={{marginTop: ".5rem"}} className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? {
                        cursor: "pointer",
                        transition: "250ms ease",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#fff",
                        backgroundColor: "#E66F15",
                        padding: "5px 0 5px 3px",
                        display: "flex",
                        borderRadius: "10px"
                      }
                    : {
                        backgroundColor: "#ffffff",
                        transition: "250ms ease",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "2px 4px 8px #ffffff",
                        padding: "5px 0 5px 3px",
                        display: "flex",
                        borderRadius: "10px"
                      };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={suggestions.description}
                    >
                      <i
                        style={{
                          margin: "auto 10px auto 0",
                          paddingLeft: "5px",
                          fontSize: ".8em",
                        }}
                        className="fas fa-map-marker-alt"
                      ></i>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutoComplete>
      </div>

      {/* <div className="field-div">
        <label htmlFor="Pickup-Address">
          Destination Address <span style={{ color: "crimson" }}>*</span>
        </label>
        <PlacesAutoComplete
          value={address2}
          onChange={setAddress2}
          onSelect={handleSelect2}
          searchOptions={{
            componentRestrictions: {
              country: "nga",
            },
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div key={suggestions.description}>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? {
                        cursor: "pointer",
                        transition: "250ms ease",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#fff",
                        backgroundColor: "#113E82",
                        padding: "5px 0",
                        display: "flex",
                      }
                    : {
                        backgroundColor: "#ffffff",
                        transition: "250ms ease",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "2px 4px 8px #ffffff",
                        padding: "5px 0",
                        display: "flex",
                      };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={suggestion.description}
                    >
                      <i
                        style={{
                          margin: "auto 10px auto 0",
                          paddingLeft: "5px",
                          fontSize: ".8em",
                        }}
                        className="fas fa-map-marker-alt"
                      ></i>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutoComplete>
      </div> */}

      {/* <div className="trip-estimate">
          <p>pickup address: {address}</p>
          <p>destination address: {address2}</p>
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
          <p>Estimated fare: {vehicleData ? (vehicleData.wehaulConstantValue * vehicleData.pricePerKilometer * (distanceVal/1000)).toLocaleString() : 'error getting fare'}</p>
      </div>
        <button onClick={getDistance}>get km</button> */}
    </div>
  );
};

export default AutoComplete;
