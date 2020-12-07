import React, { useState } from 'react';
import { BattlePlayers, StyledBattleField } from '../styled'
import { BattleImage, BattleName, BattleInfo, Health, Mana, CurrentHealth, HealthTxt  } from '../styled'
import { PlayerSide, OpponentSide, BattleSkills, StyledButton, Comment  } from '../styled'


function BattleField( { player, opponent } ) {
    const [currentPlayer, setCurrentPlayer ] = useState({
        name: player.name,
        health: player.health,
        mana: player.mana,
    });
    const [currentOpponent, setCurrentOpponent ] = useState({
        name: opponent.name,
        health: opponent.health,
        mana: opponent.mana,
    });
    const [message, setMessage] = useState("");
    const [dmg, setDmg] = useState("");

    const handleAttack = (damage, mana, skill) => {
        const newDamage = Math.floor(Math.random() * (damage[1] - damage[0])) + damage[0];
        const newHealth = currentOpponent.health - newDamage;
        const newMana = currentPlayer.mana - mana;
        setCurrentOpponent({
            ...currentOpponent,
            health: newHealth <= 0 ? 0 : newHealth,
        });
        setCurrentPlayer({
            ...currentPlayer,
            mana: newMana <= 0 ? 0 : newMana,
        });
        setMessage(`${currentPlayer.name} used ${skill}`);
        setDmg(`${newDamage} DAMAGE`);
    }

    const handleOpponentAttack = (damage, mana, skill) => {
        const newDamage = Math.floor(Math.random() * (damage[1] - damage[0])) + damage[0];
        const newHealth = currentPlayer.health - newDamage;
        const newMana = currentPlayer.mana - mana;
        setCurrentPlayer({
            ...currentPlayer,
            health: newHealth <= 0 ? 0 : newHealth,
        });
        setCurrentOpponent({
            ...currentOpponent,
            mana: newMana <= 0 ? 0 : newMana,
        });
        
        setMessage(`${currentOpponent.name} used ${skill}!`);
        setDmg(`${newDamage} DAMAGE`);
    }

    const updateHealth = (num) => {
        return num/10;
    }

    console.log(updateHealth(currentPlayer.health));
    return (
        <StyledBattleField>
            <Comment>
                {message}
                <br />
                {dmg}
            </Comment>
            <BattlePlayers>
                {/* PLAYER  */}
                <PlayerSide giyu>
                    <BattleInfo giyu >
                        <BattleName> {player.name} </BattleName>
                        <Health> 
                            <CurrentHealth
                                style={{ width: `${updateHealth(currentPlayer.health)}%` }}
                            > 
                            </CurrentHealth>
                            <HealthTxt>
                                {currentPlayer.health} / {player.health}
                            </HealthTxt>
                        </Health>
                        <Mana> 
                            {currentPlayer.mana}/{player.mana}
                        </Mana>
                    </BattleInfo>
                    <BattleImage src={player.image} />
                    <BattleSkills>
                        {
                            player.skills.map((skill, index) => {
                            return (
                                <StyledButton giyu 
                                    key={index}
                                    onClick={() => handleAttack(skill.skill_damage, skill.mana, skill.skill_name)}
                                > 
                                    {skill.skill_name} 
                                </StyledButton>
                            )})
                        } 
                    </BattleSkills>
                </PlayerSide>

                {/* OPPONENT  */}
                <OpponentSide shinobu>
                    <BattleInfo shinobu>
                        <BattleName> {opponent.name} </BattleName>
                        <Health> {currentOpponent.health}/{opponent.health} </Health>
                        <Mana> {currentOpponent.mana}/{opponent.mana} </Mana>
                    </BattleInfo>
                    <BattleImage src={opponent.image} /> 
                    <BattleSkills>
                        {
                            opponent.skills.map((skill, index) => {
                            return (
                                <StyledButton shinobu 
                                    key={index}
                                    onClick={() => handleOpponentAttack(skill.skill_damage, skill.mana, skill.skill_name)}
                                > 
                                    {skill.skill_name} 
                                </StyledButton>
                            )})
                        } 
                    </BattleSkills>
                </OpponentSide>
            </BattlePlayers>
        </StyledBattleField>
    )
}

export default BattleField;
