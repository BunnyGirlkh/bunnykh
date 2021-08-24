module.exports = {
  
  name: "buy-house",
  code: `
$description[**@$username Success in buying a House 🏡 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];2000000]]
$setGlobalUserVar[house;$sum[$getGlobalUserVar[house];1]]
$onlyIf[$getGlobalUserVar[money]>=2000000;Not enough cash!]
$image[https://media.discordapp.net/attachments/805701726497800217/872692690112876594/home.gif?width=745&height=559]
`
}