module.exports = {
  
  name: "profile",
  aliases: ['pf'],
  code: `$author[profile.;https://media.discordapp.net/attachments/872700345388773396/873052319334412298/v.gif] 
$title[Your Profile $username]
$thumbnail[$userAvatar[$authorID]]
$description[💵 **| Cash**
$$getGlobalUserVar[money]
💳 **| Bank**
$$getGlobalUserVar[banks]

**Health**: $getGlobalUserVar[health]% 
**Hunger Level**: $getGlobalUserVar[hungry]%
**Level of thirst**: $getGlobalUserVar[thirsty]%
]
$image[https://media.discordapp.net/attachments/805701726497800217/872471164063186954/bunny1.gif]
$color[$random[0;999999]]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp
`
}