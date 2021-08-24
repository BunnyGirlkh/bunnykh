module.exports = {
  
  name: "buy-fuel",
  code: `
$description[**@$username Success in buying a Fuel ⛽ !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];2500]]
$setGlobalUserVar[fuel;$sum[$getGlobalUserVar[fuel];1]]
$onlyIf[$getGlobalUserVar[money]>=2500;Not enough cash!]`
}