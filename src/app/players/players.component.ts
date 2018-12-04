import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // player property is now of type Player
  player: Player = {
    id: 1,
    name: 'INnoVation'
  };
  constructor() { }

  ngOnInit() {
  }

  // adding "player" property
  // player = 'INnoVation';

  players = PLAYERS; // define a component property "players"
}
