module.exports = {
  
  name: "buy-drink",
  code: `
$description[**@$username Success in buying a Drink🥛 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];45]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];1]]
$onlyIf[$getGlobalUserVar[money]>=45;Not enough cash!]`
}