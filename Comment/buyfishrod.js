module.exports = {
  
  name: "buy-fishrod",
  code: `
$description[**@$username Success in buying a Fishing equipment🎣 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];75]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[money]>=75;Not enough cash!]`
}