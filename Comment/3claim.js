module.exports = {
  
  name: "3claim",
  aliases: ['3cm', '3Claim','3c'],
   code: `$thumbnail[$userAvatar[$authorID]]
$title[__** 3 Crypto ₿ 10000000 Cash 💵 **__]
$color[00ff59]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[450000;1000000]]]
$description[
**@$username Successfully Claim 3 Crypto ₿ **And you get **$$random[450000;1000000]** Cash 💵.]

$globalCooldown[25m;**⏰ Wait for %time% to Claim again!**]


$onlyIf[$getGlobalUserVar[crypto3]>=1;Not enough 3 Crypto ₿ Please Buy Now !]
$image[https://media.discordapp.net/attachments/805701726497800217/872698968956616744/money.gif]
`
   

}