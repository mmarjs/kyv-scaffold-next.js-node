import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Cookies from "js-cookie";
import mbxClient from "@mapbox/mapbox-sdk";
import mbxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import mbxTilesets from "@mapbox/mapbox-sdk/services/tilequery";

import { client } from "../../api";
import { wards } from "../../mock-and-seed-data/wards";
import ThemeContainer from "./ThemeContainer";

export const UserContext = React.createContext({});

const UserInfo = ({ children }) => {
    const [userWardSelected, setUserWardSelected] = useState(false);
    const [userWardName, setUserWardName] = useState("");
    const [userWardSlug, setUserWardSlug] = useState("");

    const getUserWard = async (cookieId) => {
        const userData = await client.get("/residents/ward-resident/" + cookieId);
        const tempWard = wards.find((ward) => ward.slug == userData.data);
        setUserWardSlug(userData.data);
        setUserWardName(tempWard?.officialName);
        setUserWardSelected(true);
      };

      useEffect(() => {
        const localCookie = Cookies.get("kyv-resident-id");
        getUserWard(localCookie);
      }, []);

    return  (
      <>
        <UserContext.Provider value={{userWardName: 1}}
        >
            {children}
        </UserContext.Provider>
      </>
    )
}

export default UserInfo;