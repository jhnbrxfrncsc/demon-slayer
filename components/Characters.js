import React, { useState, useEffect } from 'react';
import BattleField from './BattleField';
import { CardInfo, CardWrapper, Image, Title } from '../styled';

function Characters( { playableCharacters } ) {
    const [battleField, setBattleField] = useState(false);
    const [player, setPlayer] = useState({
        id: 0,
        name: "",
        image: "",
        health: 0,
        mana: 0,
        combat: "",
        skills: [],
    });

    const [opponent, setOpponent] = useState({
        id: 0,
        name: "",
        image: "",
        health: 0,
        mana: 0,
        combat: "",
        skills: [],
    });

    useEffect(() => {
        const op1 = playableCharacters[14];
        setOpponent({
            id: op1.id,
            name: `${op1.first_name} ${op1.last_name}`,
            image: op1.image,
            health: op1.health,
            mana: op1.mana,
            combat: op1.breath_style,
            skills: op1.skills,
        })
    }, [])
    

    const choosePlayer = (id, name, image, health, mana, combat, skills) => {
        setPlayer({
            id,
            name,
            image,
            health,
            mana,
            combat,
            skills,
        });
        setBattleField(!battleField);
    }

    return (
        <CardWrapper>
        {
            playableCharacters.map( char => {
            const { id, first_name, last_name, image, image_thumbnail, breath_style, health, mana, skills } = char;
            const fullname = `${first_name} ${last_name}`
            return (
                <CardInfo key={id} onClick={() => choosePlayer(id, fullname, image, health, mana, breath_style, skills) }>
                    <Image src={image_thumbnail} alt={first_name}/>
                    <Title> {first_name} {last_name} </Title>
                    <p> {breath_style} </p>
                </CardInfo>
            )
            })
        }

        {battleField ? <BattleField player={player} opponent={opponent} /> : null}  
        {/* <BattleField player={player} opponent={opponent} /> */}

        </CardWrapper>
    )
}

export default Characters;
