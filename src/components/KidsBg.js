import React from "react";

import styled from "styled-components";

const KidsBg = () => {
    return <BgDots src={"/images/bg-dots-white.png"} />;
};

export default KidsBg;

const BgDots = styled.img`
    position: absolute;
    z-index: 0;
    width: 100%;
    top: 80px;
`;
