module.exports = {
  
  name: "drink",
  code: `
$description[Uhh... This is so refreshing!]
$setGlobalUserVar[drink;$sub[$getGlobalUserVar[drink];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];3]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];2]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];5]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hungry level is 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirsty level is 100%]
$onlyIf[$getGlobalUserVar[drink]>=1;Not enough drink!]
$image[https://media.discordapp.net/attachments/805701726497800217/872697774381092864/hk.gif]
`
}