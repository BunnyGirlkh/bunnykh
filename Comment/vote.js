module.exports = {
  
  name: "vote",
  code: `$author[Vote .;https://media.discordapp.net/attachments/872700345388773396/873052319334412298/v.gif] 
  
  $title[__** Vote for me @ Discords.com:**__]
  $description[Url : https://top.gg/bot/870541117106577458/vote
  
  You will receive 5000 Cash 💵  as reward!

  ]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];5000]]
$color[RANDOM]

$image[https://media.discordapp.net/attachments/805701726497800217/872877582603915334/by.gif]
$globalCooldown[12h;**⏰ Wait for %time% to Vote for me  again!**]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp`
 
}