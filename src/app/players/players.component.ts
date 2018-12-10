import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // player property is now of type Player
//  player: Player = {
//    id: 0,
//    name: 'INnoVation'
//  };

  selectedPlayer: Player;

  players: Player[];
  
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  getPlayers() : void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  // adding "player" property
  // player = 'INnoVation';

  //players = PLAYERS; // define a component property "players"


}
