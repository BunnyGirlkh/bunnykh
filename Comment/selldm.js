module.exports = {
  
  name: "selldiamond",
  code: `
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];1000]]
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond];1]]
$title[__**SELLING DIAMOND💎**__]
$color[00ff59]
$description[
**@$username Successfully selling 1 diamond for $1000.**]
$onlyIf[$getGlobalUserVar[diamond]>=1;You don't have that many diamonds!.]
$image[https://media.discordapp.net/attachments/805701726497800217/872698968956616744/money.gif]
`
}