1. team index
  a list of my teams
2. when i click on a team
  it will show me the top 3 players with the most points
3. click on specific player
  shows a dropdown  of that players info
    hometown
    points
    year of birth
4. Each player has x box, remove player
5. Each team has x box, remove team

store = {teams:[],players[]}
  team
    has many players
  player
    belongs to team

team
  id (private)
  name
  city

new Team('sixers','philly')
  store is updated
  auto
    view displays the team
