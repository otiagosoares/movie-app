import styled from 'styled-components';

export const ContainerFormSearch = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    input[type='search']:focus,
    input[type='search']
    {   background-color: #fff;
        box-shadow: none;
        height: 50px;
        width: 70%;
        border: none;
        padding: 1em .5em;
        color: #c3c3c3;
        font-size: 1em;
    }

    button{
        border:none;
        background-color: var(--color-theme);
        font-weight: 400;
        color: #fff;
        padding: 0 1em;
        transition: all .2s;
    }
    button:hover{
        border:none;
        background-color: var(--color-theme);
        font-weight: 400;
        color: #fff;
        padding: 0 1em;
        transition: all .2s;
    }

    @media(max-width: 450px){
        input[type='search']:focus,
        input[type='search']{
            width: 90%;
        }
        button{
            width: 90%;
            height: 40px;
            margin-top: 10px;
        }
    }
`;