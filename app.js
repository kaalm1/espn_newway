
store = {teams:[],players:[]}

$('document').ready(function(){

  renderPlayers()
  deletePlayer()
  deleteTeam()
})

function render(html,into){

  $(into).empty()
  $(into).append(html)
}


function renderPlayers(){
  $('body').on('click', 'table.teams tr', function(){
    playersController.show(this)
  })
}

function deletePlayer(){
  $('body').on('click','.delete-player', function(){
    let id = this.parentElement.id
    let player = Player.find(parseInt(id))
    let teamId = player.teamId
    let team = Team.find(parseInt(teamId))
    player.destroy()
    render(playersController.playersHTML(team),'table.players tbody')
  })
}



function deleteTeam(){
  $('body').on('click','.delete-team',function(){
    let id = this.parentElement.id.replace("team-","")
    let team = Team.find(parseInt(id))
    team.destroy()
    teamsController.show()
  })
}
