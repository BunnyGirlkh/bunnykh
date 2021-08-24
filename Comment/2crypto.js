module.exports = {
  
  name: "2",
  aliases: ['2Crypto', 'buy-2crypto','2 crypto'],
  code: `
  
  $title[__** 2 Crypto ₿ 100000 Cash 💵 **__]
$color[00ff59]
$description[
**@$username Successfully buy 2 Crypto ₿ 100000 Cash 💵.**]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];100000]]

$setGlobalUserVar[crypto2;$sum[$getGlobalUserVar[crypto2];1]]
$onlyIf[$getGlobalUserVar[money]>=100000;Not enough cash!]
$image[https://media.discordapp.net/attachments/805701726497800217/872694776678465566/bitcoin.gif?width=745&height=559]
`
}