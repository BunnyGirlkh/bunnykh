module.exports = {
  
  name: "sdgfewr67",
  code: `$author[ Successfully.;https://media.discordapp.net/attachments/872700345388773396/873052319334412298/v.gif] 
$addCmdReactions[✅]
$title[Code Random.]
$thumbnail[$userAvatar[$authorID]]
$description[You have received **$getServerVar[random]**  Redeem Code Successfully  Thanks!]
$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getServerVar[random]]]
$globalCooldown[7d;**⏰ Wait for %time% Redeem Code again!**]
`
}