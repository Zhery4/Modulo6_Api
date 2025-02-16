import { css } from '@emotion/css';


export const CharacterContent = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    border-radius: 10px;
`;

export const CharacterContentHeader = css`
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
    // background: rgb(25,241,4);
    // background: linear-gradient(90deg, rgba(25,241,4,1) 0%, rgba(17,121,9,1) 35%, rgba(0,6,8,1) 100%);
    img {
        width: 200px;
        height: 200px;
        border-radius: 5%;
    }
`;

export const CharacterContentDetails = css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1rem;
`;