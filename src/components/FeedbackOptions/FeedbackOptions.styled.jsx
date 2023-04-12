import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-right: 12px;
  }

  .feedbackBtn {
    padding: 4px;
    width: 80px;
    background-color: #fff;
    border: 1px solid #757575;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:first-letter {
      text-transform: uppercase;
    }

    &:hover {
      background-color: #6c9fec;
    }

    &:active {
      background-color: #5b86c7;
    }
  }
`;
