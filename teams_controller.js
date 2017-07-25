function CreateTeamsController(){
  return class {

    static teamsHTML(){
      return store.teams.map(function(team){
        return team.teamHTML()
      }).join(' ')
    }
    static show(){
      render(teamsController.teamsHTML(),'table.teams tbody')
    }
  }
}


let teamsController = CreateTeamsController()
