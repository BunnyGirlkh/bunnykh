module.exports = {
  
  name: "3",
  aliases: ['3Crypto', 'buy-3crypto','3 crypto'],
  code: `
  
  $title[__** 3 Crypto ₿ 10000000 Cash 💵 **__]
$color[00ff59]
$description[
**@$username Successfully buy 1 Crypto ₿ 10000000 Cash 💵.**]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];10000000]]

$setGlobalUserVar[crypto3;$sum[$getGlobalUserVar[crypto3];1]]
$onlyIf[$getGlobalUserVar[money]>=10000000;Not enough cash!]
$image[https://media.discordapp.net/attachments/805701726497800217/872694776678465566/bitcoin.gif?width=745&height=559]
`
}