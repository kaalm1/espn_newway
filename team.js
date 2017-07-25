function CreateTeam(){
  let id = 0

  return class{
    constructor(name,city){
      this.id = ++id
      this.name = name
      this.city = city
      store.teams.push(this)
      teamsController.show()
    }
    static find(id){
      return store.teams.filter(function(team){
        return team.id === id
      })[0]
    }
    destroy(){
      store.players.forEach((player)=>{
        if(player.teamId === this.id){
          player.destroy()
        }
      })
      store.teams.forEach((team,idx)=>{
        if (team.id === this.id){
          store.teams.splice(idx,1)
        }
      })
    }

    teamHTML(){
     return `<tr id=team-${this.id}>
       <td>${this.name}</td>
       <td>${this.city}</td>
       <td class="delete-team">X</td>
     </tr>`
   }

   players(){
     return store.players.filter((player)=>{
       return player.teamId === this.id
     }).sort(function(a,b){
       return b.points - a.points
     })
   }
  }
}

let Team = CreateTeam()
