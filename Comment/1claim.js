module.exports = {
  
  name: "1claim",
  aliases: ['1cm', '1Claim','1c'],
   code: `$thumbnail[$userAvatar[$authorID]]
$title[__** 1 Crypto ₿ 1000 Cash 💵 **__]
$color[00ff59]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[45;800]]]
$description[
**@$username Successfully Claim 1 Crypto ₿ **And you get **$$random[45;800]** Cash 💵.]

$globalCooldown[25m;**⏰ Wait for %time% to Claim again!**]


$onlyIf[$getGlobalUserVar[crypto1]>=1;Not enough 1 Crypto ₿ Please Buy Now !]
$image[https://media.discordapp.net/attachments/805701726497800217/872698968956616744/money.gif]
`
   

}