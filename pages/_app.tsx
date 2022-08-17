import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import Cookies from "js-cookie";
import { client } from "../api";
import { wards } from "../mock-and-seed-data/wards";

import Layout from "../src/components/Layout";

import "../src/styles/mainStyles.css";

export const UserContext = React.createContext<unknown>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [userWardSelected, setUserWardSelected] = useState(false);
  const [userWardName, setUserWardName] = useState("");
  const [userWardSlug, setUserWardSlug] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const getUserWard = async (cookieId) => {
    const userData = await client.get("/residents/ward-resident/" + cookieId);
    const tempWard = wards.find((ward) => ward.slug == userData.data.ward);

    console.log(userData);

    setUserWardSlug(userData.data.ward);
    setUserWardName(tempWard?.officialName);
    setUserWardSelected(true);
    setUserEmail(userData.data.email);
  };

  const updateUserWard = async (value) => {
    console.log("testestest");
    console.log("value", value);

    const slugify = (text) => {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/—/g, "-")
        .replace(/'/g, "")
        .replace(/\./g, "");
    };

    //Update Client
    setUserWardSlug(slugify(value.ward));
    setUserWardName(value.ward);
    setUserWardSelected(true);
    setUserEmail(value.email);

    //Update Server
    const response = await client.post("/residents/ward-resident", {
      email: value.email,
      ward: slugify(value.ward),
    });
    console.log("data", response.data);

    //Update Cookie
    Cookies.set("kyv-resident-id", response.data);
  };

  useEffect(() => {
    const localCookie = Cookies.get("kyv-resident-id");
    getUserWard(localCookie);
  }, []);

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>
          Know Your Vote 2022 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>

      <UserContext.Provider
        value={{
          userWardName,
          userWardSlug,
          userWardSelected,
          userEmail,
          updateUserWard: updateUserWard,
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  };
};
export default MyApp;
