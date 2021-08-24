module.exports = {
  
  name: "buy-pizza",
  code: `
$description[**@$username Success in buying a Pizza🍕 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];95]]
$setGlobalUserVar[pizza;$sum[$getGlobalUserVar[pizza];1]]
$onlyIf[$getGlobalUserVar[money]>=95;Not enough Cash!]`
}