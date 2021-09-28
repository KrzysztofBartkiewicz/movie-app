import styled from 'styled-components';

export const StyledSearchBox = styled.form`
  display: flex;
  align-items: center;
  width: 35rem;
  height: 5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 4px;
`;

export const StyledTextInput = styled.input`
  outline: 0;
  line-height: 42px;
  padding: 0 16px;
  color: #212121;
  border-radius: 4px 0 0 4px;
  border: 4px solid #fe6d8e;
  font-size: 2rem;
`;

export const StyledSubmitButton = styled.button`
  width: 100%;
  height: 100%;
  border: 4px solid #fe6d8e;
  border-radius: 0 4px 4px 0;
  background-color: #fe6d8e;
  img {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
