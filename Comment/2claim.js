module.exports = {
  
  name: "2claim",
  aliases: ['2cm', '2Claim','2c'],
   code: `$thumbnail[$userAvatar[$authorID]]
$title[__** 1 Crypto ₿ 100000 Cash 💵 **__]
$color[00ff59]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[4500;10000]]]
$description[
**@$username Successfully Claim 2 Crypto ₿ **And you get **$$random[4500;10000]** Cash 💵.]

$globalCooldown[25m;**⏰ Wait for %time% to Claim again!**]


$onlyIf[$getGlobalUserVar[crypto2]>=1;Not enough 2 Crypto ₿ Please Buy Now !]
$image[https://media.discordapp.net/attachments/805701726497800217/872698968956616744/money.gif]
`
   

}