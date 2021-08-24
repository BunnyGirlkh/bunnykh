module.exports = {
  
  name: "game",
  aliases: ['game', 'Game'],
  code: `$title[ $username ]
$thumbnail[$userAvatar[$authorID]]
$description[**🎮 Game Play**

** 1 Crypto ₿ ** : 1000 Cash 💵
** 2 Crypto ₿ ** : 100000 Cash 💵
** 3 Crypto ₿ ** : 10000000 Cash 💵

__**  What you need to buy **__

** $buy-1crypto **
** $buy-2crypto**
** $buy-3crypto **

__**  That you have Crypto ₿  **__

** 1 Crypto **: $getGlobalUserVar[crypto1] ₿
** 2 Crypto **: $getGlobalUserVar[crypto2] ₿
** 3 Crypto **: $getGlobalUserVar[crypto3] ₿

__**  When you get Crypto ₿ **__

** $1claim  **
** $2claim  **
** $3claim  **

]
$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp`
}