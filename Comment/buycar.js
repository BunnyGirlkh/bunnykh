module.exports = {
  
  name: "buy-car",
  code: `
$description[**@$username Success in buying a Car 🚗 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];65000]]
$setGlobalUserVar[car;$sum[$getGlobalUserVar[car];1]]
$onlyIf[$getGlobalUserVar[money]>=65000;Not enough cash!]
$image[https://media.discordapp.net/attachments/805701726497800217/872692692595920926/car.gif?width=745&height=559]
`
}