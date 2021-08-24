module.exports = {
  
  name: "buy-laptop",
  code: `
$description[**@$username Success in buying a Laptop💻 !!**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];13000]]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]
$onlyIf[$getGlobalUserVar[money]>=13000;Not enough cash!]`
}