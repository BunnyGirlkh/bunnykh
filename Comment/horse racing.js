module.exports = ({
    name: "horse",
    aliases: ['hr','horseracing'],
    description: "Play the Horse Racing.",
    usage: "Horse Racing <amount> <red/black/orange/yellow>",
    category: "economy",
    code: `$color[RANDOM]
   $title[__Horse Racing Game__]
   $thumbnail[$authorAvatar]
   $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black;orange;yellow;blue;white]];true;$message[1]];false;-$message[1]]]]
   
   $description[Your choice: **$replaceText[$replaceText[$toLowercase[$message[2]];red;red;blue;blue (🔵🏇)];black;black;yellow;yellow (🟡🏇);orange;orange (🟠🏇);white;white (⚪🏇)]**.
Testing your luck, please wait...]
   $editIn[5s;{color:RANDOM}{description: The horse landed on __**$randomText[red;black;orange;yellow;blue;white]**__!
   
   $replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black;orange;yellow;blue;white]];true;You Win **$message[1]** 💵!];false;You Lost **$message[1]** 💵.] 
   
   Now you have: **$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black;orange;yellow;blue;white]];true;$message[1]];false;-$message[1]]]** 💵.}]
   $addTimestamp
   $onlyIf[$getGlobalUserVar[money]>=$message[1];{description:description:You can't bet more than what you have!}{color:RANDOM}]
   $onlyIf[$isNumber[$message[1]]==true;{description: Argument must be a number!}{color:RANDOM}]
   $onlyIf[$checkContains[$message[2];red;black;orange;yellow;blue;white]==true;{description:Choose between 
   
   ** red 🔴 🏇 **  
   
   ** black ⚫ 🏇 ** 
   
   ** orange 🟠 🏇 ** 
   
   ** yellow 🟡 🏇 **
   
   ** blue 🔵 🏇 **
   
   ** white ⚪ 🏇 **
   
   ** How To play 👇 **
   
   ** $hr <Ammount 💵> <Color Name > **!}{color:RANDOM}]
   
   $onlyIf[$message[1]!=;{description: You need to specify the amount of 💵 to play the Horse Racing!}{color:RANDOM}]
   $globalCooldown[5s;{description: You can play the Horse Racing again in **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
   });
