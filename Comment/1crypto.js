module.exports = {
  
  name: "1",
  aliases: ['1Crypto', 'buy-1crypto','1 crypto'],
  code: `
  
  $title[__** 1 Crypto ₿ 1000 Cash 💵 **__]
$color[00ff59]
$description[
**@$username Successfully buy 1 Crypto ₿ 1000 Cash 💵.**]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];1000]]
$setGlobalUserVar[crypto1;$sum[$getGlobalUserVar[crypto1];1]]
$onlyIf[$getGlobalUserVar[money]>=1000;Not enough cash!]
$image[https://media.discordapp.net/attachments/805701726497800217/872694776678465566/bitcoin.gif?width=745&height=559]
`
 
}