module.exports = {
  
  name: "daily",
  code: `
$title[Daily Salary.]
$thumbnail[$userAvatar[$authorID]]
$description[You have received **$getServerVar[daily]** of your daily allowance! The money is already in cash!]
$color[$random[0;999999]]
$addTimestamp

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getServerVar[daily]]]
$globalCooldown[1d;**⏰ Wait for %time% to claim daily salary again!**]
$image[https://media.discordapp.net/attachments/805701726497800217/872698968956616744/money.gif]
`
}