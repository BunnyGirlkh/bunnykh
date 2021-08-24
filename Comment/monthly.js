module.exports = {
  
  name: "monthly",
  code: `
$title[Monthly Salary.]
$thumbnail[$userAvatar[$authorID]]
$description[You have received **$getServerVar[monthly]** of your daily allowance! The money is already in money!]
$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getServerVar[monthly]]]
$globalCooldown[30day;**⏰ Wait for %time% to claim monthly salary again!**]
$image[https://media.discordapp.net/attachments/805701726497800217/872698968956616744/money.gif]
`
}