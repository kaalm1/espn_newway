function CreatePlayers(){
  let id = 0
  return class {
    constructor(name,hometown,age,points,team){
      this.name = name
      this.hometown = hometown
      this.age = age
      this.points = points
      this.id = ++id
      this.teamId = team.id
      store.players.push(this)
    }
    destroy(){
      store.players.forEach((player,idx)=>{
        if (player.id === this.id){
          store.players.splice(idx,1)
        }
      })
    }
    static find(id){
      return store.players.filter(function(player){
        return player.id == id
      })[0]
    }

    playerHTML(){
      return `<tr id=${this.id}>
        <td>${this.name}</td>
        <td>${this.hometown}</td>
        <td>${this.age}</td>
        <td>${this.points}</td>
        <td class="delete-player">X</td>
      </tr>`
    }

  }
}

let Player = CreatePlayers()
