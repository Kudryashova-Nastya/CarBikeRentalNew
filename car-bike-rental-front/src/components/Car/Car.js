import React, { Component } from 'react'
import ListItem from '../ListItem'

import './style.sass'

import PlayerAPI from "./PlayerAPI";
const Player = (props) => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>{player.position}</h2>
    </div>
  );
};
