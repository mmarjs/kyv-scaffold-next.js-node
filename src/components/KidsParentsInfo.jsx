import React from "react";
import styled from "styled-components";

const KidsParentsInfo = () => {
    return (
        <Main>
            <Top>
                <H2>Kids Can Vote</H2>
                <Logo
                    src="/images/tpl-logo-2.png"
                    width="130"
                    height="45"
                    alt="Toronto Public Library"
                />
            </Top>

            <Bottom>
                <H3Row>
                    <Icon
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fkids-icons-tpl%2Ficon-2.png?alt=media&token=c5939b90-ba25-4de8-af3d-a9dc5f780827"
                        }
                    />
                    <H3>What is this all about?</H3>
                </H3Row>
                <P>
                    Why should adults get to have all the fun of voting? This is a chance for kids
                    to choose who you want to be the mayor of Torontoville!
                </P>
                <P>
                    Read through the four profiles of fictional candidates for mayor of
                    Torontoville. See how each of the people who want to be mayor feel about some of
                    the biggest issues facing this city and its residents. Think about whose answers
                    connect with the things you care about and then decide who you think should be
                    running our city!
                </P>
                <P>
                    The results from the Kids Can Vote activity will be counted and the next Mayor
                    of Torontoville will be announced right here on October 27.{" "}
                </P>

                <H3Row>
                    <Icon
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fkids-icons-tpl%2Ficon-1.png?alt=media&token=ddc2a0eb-11c7-4ef9-9abe-f4523b817108"
                        }
                    />
                    <H3>How you can vote for the Mayor of Torontoville</H3>
                </H3Row>
                <P>You can vote in-person at select branches or through this site.</P>

                <FunFact>
                    <H3>Fun Fact</H3>
                    <P>
                        Did you know that these four personalities were put together based on the
                        answers that actual candidates for mayor shared on knowyourvote.to? We used
                        a cool computer program called Artificial Intelligence to take everything we
                        heard from candidates and put it together. Then we made their answers
                        kid-friendly so that you can have the same experience your adults get to
                        have: Voting!
                    </P>
                </FunFact>

                <H3Row>
                    <Icon
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fkids-icons-tpl%2Ficon-3.png?alt=media&token=314de2f1-65f2-425a-8a54-c5100387cf54"
                        }
                    />
                    <H3>Tips for Parents and Caregivers</H3>
                </H3Row>
                <P>
                    There is lots of evidence that shows that introducing kids early in life to
                    elections and voting has a positive impact on lifelong voting habits. Talking to
                    your kids about the importance of voting, what it means to live in a democracy
                    (and that many people around the world aren’t lucky enough to be in this
                    position), and how their voice matters helps kids appreciate the value of voting
                    and civic engagement.
                </P>
                <P>
                    If you can, bring your kid(s) with you when you go to vote and let them see what
                    it’s all about!
                </P>

                <H3Row>
                    <Icon
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fkids-icons-tpl%2Ficon-4.png?alt=media&token=65c3bcb8-960b-40dc-bb55-b848df1007e6"
                        }
                    />
                    <H3>Links for Parents</H3>
                </H3Row>
                <Links>
                    <Link
                        href="https://www.psychologytoday.com/ca/blog/peaceful-parents-happy-kids/202011/how-talk-your-child-about-the-election"
                        target="_blank"
                    >
                        <p>How to Talk With Your Child About the Election</p>{" "}
                    </Link>
                    <Link
                        href="https://www.cbc.ca/kidsnews/post/watch-how-elections-work-canada-2021"
                        target="_blank"
                    >
                        <p>How do Canadian Elections Work</p>
                    </Link>
                    <Link
                        href="https://ca.care.com/articles/children/how-to-talk-to-kids-about-politics/"
                        target="_blank"
                    >
                        <p>How to Talk to Kids About Politics</p>
                    </Link>
                    <Link
                        last={true}
                        href="https://studentvote.ca/canada/resources/"
                        target="_blank"
                    >
                        <p>Student Vote Canada Resources</p>
                    </Link>

                    {/* <a
                        href="https://www.psychologytoday.com/ca/blog/peaceful-parents-happy-kids/202011/how-talk-your-child-about-the-election"
                        target="_blank"
                    >
                        <Link>
                            <p>How to Talk With Your Child About the Election</p>{" "}
                        </Link>
                    </a>
                    <a
                        href="https://www.cbc.ca/kidsnews/post/watch-how-elections-work-canada-2021"
                        target="_blank"
                    >
                        <Link>
                            <p>How do Canadian Elections Work</p>
                        </Link>
                    </a>
                    <a
                        href="https://ca.care.com/articles/children/how-to-talk-to-kids-about-politics/"
                        target="_blank"
                    >
                        <Link>
                            <p>How to Talk to Kids About Politics</p>
                        </Link>
                    </a>
                    <a href="https://studentvote.ca/canada/resources/" target="_blank">
                        <Link last={true}>
                            <p>Student Vote Canada Resources</p>
                        </Link>
                    </a> */}
                </Links>

                <H3Row>
                    <Icon
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fkids-icons-tpl%2Ficon-5.png?alt=media&token=68f7a07f-0655-44f7-b3ce-d4d0676882fe"
                        }
                    />
                    <H3>Celebrate Democracy with TPL</H3>
                </H3Row>
                <P>
                    In the run up to the Toronto city election, TPL is running some free programs
                    and activities related to voting, democracy, and civic engagement.
                </P>
                <UL>
                    <li>
                        Check out the{" "}
                        <a href="http://www.tpl.ca/celebrate-democracy" target="_blank">
                            Celebrate Democracy
                        </a>{" "}
                        page for a full list of in-person and online programs and events for all
                        ages
                    </li>
                    <li>
                        Take a look at our themed Reading Lists (
                        <a
                            href="https://account.torontopubliclibrary.ca/shared/celebrate-democracy-books-for-adults/2boG7rKYz103QxvvTdFKSs4phgAFtAqtitbFrOtxatYAZcdEfg"
                            target="_blank"
                        >
                            Adults
                        </a>
                        ,{" "}
                        <a
                            href="https://account.torontopubliclibrary.ca/shared/celebrate-democracy-books-for-young-adults/I2OLgvrb9agJFIkzcwtZ38k8KCmgcUw9S2a3RKjEaSaUggWRqA"
                            target="_blank"
                        >
                            Youth
                        </a>
                        ,{" "}
                        <a
                            href="https://account.torontopubliclibrary.ca/shared/celebrate-democracy-books-for-children/NvgyELOZOZiasVWlUqH4NvK9LwvQU1a9dawyVrpe7X5Ckr58q8"
                            target="_blank"
                        >
                            Children
                        </a>
                        )
                    </li>
                </UL>
            </Bottom>
        </Main>
    );
};

export default KidsParentsInfo;

const BaseContainer = styled.div`
    background-color: white;
    border: 2px solid #393535;
    border-radius: 0px 20px 20px 20px;
    box-shadow: 8px 8px #393535;
`;

const Main = styled(BaseContainer)`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 40px 10%;
    border-bottom: 2px solid grey;

    @media (max-width: 700px) {
        flex-direction: column;
        padding: 20px 10%;
        padding-top: 30px;
        align-items: start;
    }
`;

const H2 = styled.h2`
    font-size: 32px;
    font-weight: 600;

    @media (max-width: 700px) {
        font-size: 28px;
    }
`;

const Logo = styled.img`
    @media (max-width: 700px) {
        width: 100px;
        object-fit: contain;
        margin-left: auto;
    }
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 10%;
    padding-top: 10px;
`;

const H3Row = styled.div`
    display: flex;
    margin-top: 70px;
    width: 100%;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
        margin-top: 40px;
    }
`;

const H3 = styled.h3`
    font-size: 28px;
    margin-bottom: 10px;

    @media (max-width: 700px) {
        font-size: 24px;
    }
`;

const Icon = styled.img`
    width: 120px;
    height: 120px;
    margin-right: 10px;

    @media (max-width: 700px) {
        width: 60px;
        height: 60px;
        margin-right: 0px;
        margin-bottom: 10px;
    }
`;

const P = styled.p`
    margin: 14px 0;
    font-size: 18px;
`;

const FunFact = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    margin-top: 60px;
    padding: 0 5%;
    padding-top: 30px;
    padding-bottom: 30px;

    @media (max-width: 700px) {
        padding: 0 25px;
        padding-bottom: 20px;

        h3 {
            margin-top: 30px;
        }
    }
`;

const Links = styled.div`
    display: flex;
    margin: 20px 0;

    a {
        text-decoration: none;
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Link = styled.a`
    background-color: white;
    border: 2px solid #393535;
    border-radius: 0px 20px 20px 20px;
    box-shadow: 8px 8px #393535;

    border-radius: 15px;
    border-top-left-radius: 0;
    margin-right: ${({ last }) => (last ? "0" : "25px")};
    padding: 10px;
    padding-bottom: 20px;

    p {
        font-size: 18px;
        color: black;
    }

    @media (max-width: 700px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

const UL = styled.ul`
    margin: 20px 0px 20px 20px;

    li {
        list-style: initial;
        margin: 5px 0;
        font-size: 18px;
    }
`;
