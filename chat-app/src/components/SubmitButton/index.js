import styled from "styled-components";

const SubmitButton = styled.button.attrs(props => ({
    type: "submit"
}))`
    background: #1c8eff;
    border: 0;
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default SubmitButton;
