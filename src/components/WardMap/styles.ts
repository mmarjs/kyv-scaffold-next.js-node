import styled from 'styled-components';

export const WardMapContainer = styled.div`
 height: 560px;
`

export const WardSearchContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  font-size: 16px;
  background: #00B5E2;
  // color: #fff;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px 20px;
  }

  p {
    margin-right: 15px;
    flex: 4;
  }

  > div {
    flex: 3;

    @media (max-width: 600px) {
      width: 100%;
      margin-top: 10px;
    }
  }

  input {
    border-radius: 5px;
    border: 1px solid grey;
    width: 100%;
    height: 52px;
    padding: 0 14px;
  }

  #geocoder_input {
    position: static;
  }

  .suggestions-wrapper {
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 400px;
  }

  .suggestions-wrapper > ul {
    border: 2px solid #393535;
  }
`
export const WardSearchInputContainer = styled.div`

`

export const SearchInput = styled.div`

`

export const ErrorMessage = styled.div`
    font-size: 16px;
    margin-bottom: 8px;
    color: #f45d5d;
`