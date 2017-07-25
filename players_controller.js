function createPlayersController(){
  return class {

    static playersHTML(team){
      if (team !== undefined){
      return team.players().map(function(player){
        return player.playerHTML()
      }).slice(0,4).join(' ')
    }
    }
    static show(obj){
      let id = obj.id.replace('team-','')
      let team = Team.find(parseInt(id))
      render(playersController.playersHTML(team),'table.players tbody')
    }

  }

}

let playersController = createPlayersController()
