import React, { useState, useContext } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";

import { UserContext } from "../../pages/_app";

import * as ga from "../../lib/ga";

import { client } from "../../api";

type userObject = {
    [key: string]: any;
};

const SaveWardOverlay = ({ closeModal, ward }) => {
    const [emailInput, setEmailInput] = useState<string>("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const userContext: userObject = useContext(UserContext);

    const onChange = (e) => {
        setEmailInput(e.target.value);
    };

    const saveWithEmail = async () => {
        console.log(emailInput);
        console.log(ward);
        if (emailInput.length > 0) {
            // TODO: Check if email is valid
            // const response = await client.post('/residents/ward-resident', { email, ward })
            // console.log(response.data)
            // Cookies.set('kyv-resident-id', response.data)
            // closeModal()
            userContext.updateUserWard({
                email: emailInput,
                ward: ward,
                toggle1: check1,
                toggle2: check2,
                toggle3: check3,
            });

            ga.event({
                action: "Saved Ward-" + ward,
                params: {},
            });
            alert(
                "Thank you for signing up — we’ve just sent you a confirmation email from info@knowyourvote.to. If you don’t see it, check your spam folder."
            );
            closeModal();
        } else {
            alert("Please enter a valid email address.");
        }
    };

    const saveWithoutEmail = async () => {
        userContext.updateUserWard({
            email: emailInput,
            ward: ward,
        });
        closeModal();
    };

    return (
        <OverlayBG>
            <Inner>
                <Top>
                    <H1>Save My Ward</H1>
                    <Close src={"/images/times.png"} onClick={() => closeModal(false)} />
                </Top>
                <Btm>
                    <H2>
                        We'll save {ward} as your ward. Would you like to be notified about updates
                        in your ward?
                        <br />
                        <br />
                        Would you like to receive a reminder three days before the election to
                        review the Canadidate information listed on this website?
                    </H2>

                    <RadioRow>
                        <Radio
                            type="checkbox"
                            id="updates"
                            value={check1}
                            checked={check1}
                            onChange={() => setCheck1(!check1)}
                        />
                        <RadioText htmlFor="updates">
                            I would like to be notified about updates in my ward
                        </RadioText>
                    </RadioRow>
                    <RadioRow>
                        <Radio
                            type="checkbox"
                            id="events"
                            value={check2}
                            checked={check2}
                            onChange={() => setCheck2(!check2)}
                        />
                        <RadioText htmlFor="events">
                            I would like to be notified about Know Your Vote T.O. events
                        </RadioText>
                    </RadioRow>
                    <RadioRow>
                        {/* <Radio type="checkbox" id="reminder"/> */}
                        <Radio
                            type="checkbox"
                            id="reminder"
                            value={check3}
                            checked={check3}
                            onChange={() => setCheck3(!check3)}
                        />
                        <RadioText htmlFor="reminder">
                            I would like to receive a reminder three-days before the final election
                            day to review this candidate information website
                        </RadioText>
                    </RadioRow>

                    <Input
                        placeholder="email@email.com"
                        name="email"
                        value={emailInput}
                        onChange={onChange}
                        type="text"
                    />

                    <Btn onClick={saveWithEmail}>Save with email</Btn>
                    <Btn2 onClick={saveWithoutEmail}>Save without email</Btn2>
                </Btm>
            </Inner>
        </OverlayBG>
    );
};

export default SaveWardOverlay;

const OverlayBG = styled.div`
    background-color: #333333bb;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Inner = styled.div`
    background-color: white;
    width: 50%;
    max-width: 500px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border: 2px solid #393535;
    box-shadow: 8px 8px #393535;

    @media (max-width: 1040px) {
        width: 95%;
        box-shadow: 5px 5px #393535;
    }
`;

const Top = styled.div`
    background-color: #a849ca;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: 8px;
    padding: 20px;
`;

const H1 = styled.h1`
    color: white;
`;

const Close = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const Btm = styled.div`
    padding: 20px;

    @media (max-width: 1040px) {
        padding: 10px;
    }
`;

const H2 = styled.p`
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
`;

const Input = styled.input`
    width: 100%;
    outline: none;
    border: 2px solid #393535;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    color: #393535;
`;

const Btn = styled.button`
    width: 100%;
    border: 2px solid #393535;
    padding: 10px;
    background: #a849ca;
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    border-radius: 5px;
    margin-top: 12px;
    cursor: pointer;
`;

const Btn2 = styled(Btn)`
    background-color: #1f2e53;
`;

const RadioRow = styled.div`
    display: flex;
    align-items: flex-start;
`;

const Radio = styled.input`
    margin-right: 10px;
`;

const RadioText = styled.label`
    text-align: left;
    font-size: 14px;
    line-height: 120%;
    margin-bottom: 10px;
    font-weight: 300;
`;
