class Player {
  static playerCount = 0;

  constructor() {
      Player.playerCount++;
  }

  static getPlayerCount() {
      return Player.playerCount;
  }
}
