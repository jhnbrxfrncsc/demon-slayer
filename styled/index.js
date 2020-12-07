import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`

export const MainContainer = styled.section`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    background-color: gray;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

// Regular Button
export const Btn = styled.button`
    padding: 5px;
    color: #333;
    border: none;
    background-color: #fff;
    cursor: pointer;
    padding: .5rem;
    margin: 5px;
    height: 40%;
    width: 40%;
    border-radius: 5px;
    border: 1px #333 solid;
    animation: 2s ${FadeIn} ease-in;
    font-size: 11px;
    font-weight: bold;
`;


// Styled Button
export const StyledButton = styled(Btn)`
    color: ${ ( { dark, giyu, shinobu, tomato} ) => (
        shinobu ? '#fff' : 
        giyu ? 'blue': 
        dark ? 'gray' :
        tomato ? 'tomato' :
        '#333'
    )};

    background-color: ${ ( {dark, shinobu} ) => (
        dark ? 'black' :
        shinobu ? '#9000FF' :
        '#fff'
    )};

    border-color: ${ ( { dark, giyu, shinobu, tomato} ) => (
        shinobu ? 'violet' : 
        giyu ? 'blue': 
        dark ? 'gray' :
        tomato ? 'tomato' :
        '#333'
    )};

    &:hover{
        color: ${ ( { dark } ) => (
        dark ? 'black' :
        '#fff'
        )};

        background-color: ${ ( {dark, shinobu, giyu, tomato} ) => (
        shinobu ? 'violet' : 
        giyu ? 'blue': 
        dark ? 'gray' :
        tomato ? 'tomato' :
        '#333'
        )};
        
        border-color: ${ ( { dark } ) => (
        dark ? 'black' :
        '#fff'
        )};
    }
`;

// Image
export const Image = styled.img`
    height: 100px;
    width: 100px;
`
export const Logo = styled.img`
    height: 80px;
    width: 80px;
`

// Title
export const Title = styled.h1`
    margin-top: .5rem;
    text-align: center;
`

// HEADER
export const StyledHeader = styled.header`
    height: 15%;
    width: 100%;
    background-color: darkred;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

// Card
export const Card = styled.div`
    height: 100% ;
    width: 100% ;
    margin: 1rem;
    padding: 1rem;
    background-color: gray;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

export const CardInfo = styled.div`
    height: 210px ;
    width: 250px ;
    margin: .5rem;
    padding: 5px;
    background-color: darkgreen;
    box-shadow: 2px;
    animation: 2s ${FadeIn} ease-in;
    border-radius: 2px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:hover {
        background-color: darkgreen;
        color: white;
        border: 2px darkred solid;
        cursor: pointer;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const BtnWrapper = styled.div`
    display:flex;
    margin:2px;
`

// BATTLE FIELD
export const StyledBattleField = styled.div`
    position: absolute;
    height: 150%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.6);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
`
export const BattlePlayers = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    // background-image: url('img/battle_field.jpg');

    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const BattleImage = styled.img`
    height: 200px;
    width: 150px;
`

export const BattleInfo = styled.div`
    margin: 1rem;
    color: white;
    background-color: ${ ( {giyu, shinobu} ) => 
        giyu ? "darkblue" : 
        shinobu ? '#9000FF' :
        "#fff"
    };
    padding: 2px 5rem;
    width: 80%;
`

export const BattleName = styled.h2`
    font-size: 1.3em;
    text-align: center;
`

export const Health = styled.div`
    height: 20px;
    width: 100%;
    border: 1px red solid ;
    background-color: #fff;
    margin-bottom: 2px;
`

export const CurrentHealth = styled.div`
    display: absolute;
    height: 18px;
    background-color: red;
    text-align: center;
`

export const HealthTxt = styled.p`
    color: #333;
    width: 100px;

    font-size: 11px;
    font-weight: bold;
    background-color: rgba(255,255,255,0.1);
`

export const Mana = styled.div`
    height: 20px;
    width: 100%;
    border: 2px blue solid ;
    background-color: blue;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    margin-bottom: 1rem;
`

export const BattleSkills = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items:center;
`

export const Comment = styled.h1`
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
`

// PLAYER
export const PlayerSide = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    align-items:center;
    margin-left: 1rem;
    height: 80%;
    width: 50%;
    
    border: 2px white solid;
    border-color: ${ ( {giyu, shinobu} ) => 
        giyu ? "darkblue" : 
        shinobu ? "#9000FF" :
        "#fff"
    };
`

// Opponent
export const OpponentSide = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    align-items:center;
    margin-right: 1rem;
    height: 80%;
    width: 50%;

    border: 2px white solid;
    border-color: ${ ( {giyu, shinobu} ) => 
        giyu ? "darkblue" : 
        shinobu ? "#9000FF" :
        "#fff"
    };
    background-color: #3D006B;
`

