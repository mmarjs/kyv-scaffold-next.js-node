import styled from "styled-components";

type Props = {
  name: string;
  imageURL?: string;
};

const CandidateImage = ({ name, imageURL }: Props) => {
  const getCandidateInitials = (fullname) => {
    const nameArray = fullname?.split(" ") || [];
    const initials = [];
    for (var i = 0; i < nameArray.length; i++) {
      initials.push(nameArray[i].charAt(0));
    }

    return initials;
  };

  return (
    <div>
      {imageURL ? (
        <CImgHolder
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: "fill",
            width: "100%",
            paddingBottom: "125%",
          }}
        ></CImgHolder>
      ) : (
        <CImgHolder>
          <div style={{ width: "100%", paddingBottom: "125%" }}></div>
          <div className="circle">
            <p>{getCandidateInitials(name)}</p>
          </div>
        </CImgHolder>
      )}
    </div>
  );
};

export default CandidateImage;

const CImgHolder = styled.div`
  width: 100%;
  height: auto;
  background-color: #0577c8;
  border: 1px solid #393535;
  border-radius: 7px;
  border-top-left-radius: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

  .circle {
    width: 45px;
    height: 45px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-weight: 600;
    text-align: center;
  }
`;
