import styled from "styled-components";

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const UserInfo = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #1c8eff;
        font-size: 15px;
        text-decoration: none;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const Messages = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
    overflow: auto;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
        div {
            flex: 1;
            margin-left: 15px;

            strong {
                font-size: 16px;

                span {
                    color: #999;
                    border-radius: 12px;
                    font-weight: 600;
                    height: 16px;
                    padding: 3px 4px;
                }
            }

            p {
                margin-top: 5px;
                font-size: 16px;
                color: #333;
            }
        }
    }
`;
