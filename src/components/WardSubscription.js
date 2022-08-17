import { useState, useEffect, useContext } from "react";

import styled from "styled-components";

import mbxClient from "@mapbox/mapbox-sdk";
import mbxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import mbxTilesets from "@mapbox/mapbox-sdk/services/tilequery";

import AsyncSelect from "react-select/async";

import LeftHeaderContainer from "./LeftHeaderContainer";

import { UserContext } from "../../pages/_app";

// type Props = {
//   title?: string;
//   children?: JSX.Element;
// };

// type userObject = {
//   [key: string]: any;
// };

const WardSubscription = ({ children }) => {
  const [emailInput, setEmailInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [address, setAddress] = useState([]);

  const userContext = useContext(UserContext);

  //Create Mapbox Instances
  let baseClient = mbxClient({
    accessToken:
      "pk.eyJ1IjoieWFzaC1wcyIsImEiOiJjbDFkc3MzdnMwMDI1M2JtaWM3bjQ2cGgwIn0.GZ3p3cUa0oeQWoyStDS4pQ",
  });
  const tilesetsService = mbxTilesets(baseClient);
  const geocodeService = mbxGeocode(baseClient);

  const handleEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleAddressSelect = (value) => {
    console.log(value)
    if (value) {
      setAddressInput(value.value);
    } else {
      setAddressInput("");
    }
  };

  const handleAddressInput = (inputValue, action) => {
    if (action.action === "input-change") {
      setAddressInput(inputValue);
    }
  };

  const getAutocomplete = async (inputValue) => {
    if (inputValue && inputValue.length >= 3) {
      return geocodeService
        .forwardGeocode({
          query: inputValue,
          autocomplete: true,
          limit: 10,
          bbox: [-79.7, 43.5, -79.1, 43.9],
        })
        .send()
        .then(function (response) {
          const addressArray = [];

          if (
            response.body.features.length &&
            response.body.features.length > 0
          ) {
            for (let i = 0; i < response.body.features.length; i++) {
              addressArray.push({
                value: response.body.features[i].place_name,
                label: response.body.features[i].place_name,
              });
            }

            return addressArray;
          } else {
            return addressArray;
          }
        });
    }
  };

  useEffect(() => {
    console.log("addressInput", addressInput);
  }, [addressInput]);

  const fillAddress = (e) => {
    e.preventDefault();
    const text = e.target.innerHTML;

    setAddress(text);

    console.log(text);
  };

  const renderAutocomplete = () => {
    if (address && address.length > 0) {
      return (
        <ul>
          {address.map((address, index) => {
            return (
              <li key={index} onClick={fillAddress}>
                {address}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/—/g, "-")
      .replace(/'/g, "")
      .replace(/\./g, "");
  };

  const subscribeToWard = (e) => {
    e.preventDefault();

    geocodeService
      .forwardGeocode({
        query: addressInput,
        autocomplete: false,
        limit: 1,
        bbox: [-79.7, 43.5, -79.1, 43.9],
      })
      .send()
      .then(function (response) {
        tilesetsService
          .listFeatures({
            mapIds: ["masslbp.04toge3c"],
            coordinates: response.body.features[0].geometry.coordinates,
          })
          .send()
          .then(async (response) => {
            const ward = slugify(
              response.body.features[0].properties.AREA_NAME
            );
            userContext.updateUserWard({
              ward: response.body.features[0].properties.AREA_NAME,
              email: emailInput,
            });
          });
      });
  };

  //   const findWard = async () => {
  //     const coords = await getCoords();

  //     console.log("promCoords", coords);

  //     tilesetsService
  //       .listFeatures({
  //         mapIds: ["masslbp.04toge3c"],
  //         coordinates: coords,
  //       })
  //       .send()
  //       .then(async (response) => {
  //         //console.log(slugify(response.body.features[0].properties.AREA_NAME));
  //         const ward = slugify(response.body.features[0].properties.AREA_NAME);
  //         console.log("1", ward);
  //         return ward;
  //       });
  //   };

  const renderTitle = () => {
    if (userContext?.userWardSelected) {
      return `Stay updated on ${userContext?.userWardName}`;
    } else {
      return `Find your ward`;
    }
  };

  const renderComponent = () => {
    if (!userContext.userEmail) {
      return (
        <LeftHeaderContainer title={renderTitle()}>
          <div id="find-ward">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sed
            adipiscing egestas fusce eget aliquet diam varius egestas. Sit
            posuere sed elementum iaculis blandit nec tristique augue facilisi.
            {renderForm()}
          </div>
        </LeftHeaderContainer>
      );
    } else {
      //   return (
      //     <LeftHeaderContainer>
      //       <WardSelectedContainer>
      //         <WardCircle>
      //           <FontAwesomeIcon icon={faHome} />
      //         </WardCircle>
      //         <Link href={`/candidates/${userContext.userWardSlug}`}>
      //             {userContext.userWardName}
      //         </Link>
      //       </WardSelectedContainer>
      //     </LeftHeaderContainer>
      //   );
      return null;
    }
  };

  const renderForm = () => {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        fontSize: "16px"
      }),
      control: (provided, state) => ({
        // none of react-select's styles are passed to <Control />
        ...provided,
        border: '2px solid #393535',
        borderRadius: "5px",
        fontSize: "14px",
        fontFamily: "inherit",
        maxHeight: "62px",
        padding: "0 0 0 20px"
      }),
      valueContainer: (provided, state) => ({
        ...provided,
        padding: "0"
      }),
      indicatorSeparator: (provided, state) => ({
        display: "none"
      }),
      input: (provided, state) => ({
        ...provided,
        margin: "0",
        padding: "0"
      }),
      menu: (provided, state) => ({
        ...provided,
        boxShadow: "none",
        border: '2px solid #393535',
        borderRadius: "5px",
        padding: "0"
      }),
    }

    if (!userContext.userEmail) {
      if (userContext?.userWardSelected) {
        return (
          <form onSubmit={subscribeToWard}>
            <InputRow>
              <InputContainer className="single-row">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailInput}
                  onChange={handleEmail}
                />
              </InputContainer>
            </InputRow>
            <ButtonRow>
              <button type="submit">Submit</button>
            </ButtonRow>
          </form>
        );
      } else {
        return (
          <form onSubmit={subscribeToWard}>
            <InputRow>
              <InputContainer>
                {/* <label>Address</label>
                <br />
                <input
                  type="text"
                  placeholder="Toronto Address"
                  value={addressInput}
                  onChange={handleAddressInput}
                /> 

                {renderAutocomplete()} */}
                <label>Address</label>
                <AsyncSelect
                  cacheOptions
                  defaultOptions={[]}
                  loadOptions={getAutocomplete}
                  instanceId="addressAutocomplete"
                  onInputChange={handleAddressInput}
                  onChange={handleAddressSelect}
                  isClearable
                  noOptionsMessage={() => null}
                styles={customStyles}
                  // value={addressInput}
                />
              </InputContainer>
              <InputContainer>
                <label>Email Address</label>
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailInput}
                  onChange={handleEmail}
                />
              </InputContainer>
            </InputRow>
            <ButtonRow>
              <button>Submit</button>
            </ButtonRow>
          </form>
        );
      }
    }
  };

  return (
    <>
      {children}
      {renderComponent()}
    </>
  );
};

export default WardSubscription;

const WardSelectedContainer = styled.div`
  display: flex;
  font-size: 32px;
  align-items: center;

  a {
    color: #393535;
    font-weight: 600;
  }

  a:visited {
    color: #393535;
  }
`;

const WardCircle = styled.div`
  width: 75px;
  height: 75px;
  background: #0577c8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  svg {
    width: 30px;
    height: 30px;
    color: #fff;
  }
`;

const InputContainer = styled.div`
  width: 49%;
  position: relative;
  margin-top: 16px;

  &.single-row {
    width: 100%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    outline: none;
    border: 2px solid #393535;
    height: 60px;
    padding: 0 20px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    color: #393535;
  }

  ul {
    display: none;
    position: absolute;
    top: 86px;
    left: 0;
    width: 100%;
    background: #fff;
    border: 2px solid #393535;
    border-radius: 5px;
    z-index: 3;
  }

  li {
    padding: 10px;
    cursor: pointer;
  }

  li:hover {
    background: #ccc;
  }

  input:focus + ul {
    display: block;
  }
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
const ButtonRow = styled.div`
  width: 100%;
  margin-top: 16px;
  cursor: pointer;

  button {
    width: 100%;
    border: 2px solid #393535;
    padding: 10px;
    background: #b456d6;
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    border-radius: 5px;
  }
`;
