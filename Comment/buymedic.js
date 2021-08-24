module.exports = {
  
  name: "buy-medic",
  code: `
$description[**@$username Success in buying a Medicine💊 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];125]]
$setGlobalUserVar[hm;$sum[$getGlobalUserVar[hm];1]]
$onlyIf[$getGlobalUserVar[money]>=125;Not enough cash!]`
}