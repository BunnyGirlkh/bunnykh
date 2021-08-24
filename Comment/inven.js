module.exports = {
  
  name: "inven",
  code: `$title[Your Inventory $username]
$thumbnail[$userAvatar[$authorID]]
$description[**❤Health**
**Health**: $getGlobalUserVar[health]% 
**Hunger Level**: $getGlobalUserVar[hungry]%
**Level of thirst**: $getGlobalUserVar[thirsty]%

**🗃Inventory:**
**Pizza**: $getGlobalUserVar[pizza] 🍕
**Drink**: $getGlobalUserVar[drink] 🥛
**Health Medicine**: $getGlobalUserVar[hm]
**Fish**: $getGlobalUserVar[fish] Kg
**Fishing equipment**: $getGlobalUserVar[fishrod] 🎣
**Diamond**: $getGlobalUserVar[diamond] 💎
**Laptop**: $getGlobalUserVar[laptop] 💻
**Car**: $getGlobalUserVar[car] 🚗
**House**: $getGlobalUserVar[house] 🏡

**1 Crypto**: $getGlobalUserVar[crypto1] ₿
**2 Crypto**: $getGlobalUserVar[crypto2] ₿
**3 Crypto**: $getGlobalUserVar[crypto3] ₿

**⛽Fuel:**
**Fuel of Car**: $getGlobalUserVar[fuel]L]

$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp`
}