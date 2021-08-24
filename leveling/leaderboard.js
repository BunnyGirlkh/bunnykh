module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check the money leaderboard",
    usage: "",
    category: "economy",
    code: `$author[Top Cash .;https://media.discordapp.net/attachments/872700345388773396/873052319334412298/v.gif] 
    $title[Cash Leaderboard]
    $color[RANDOM]
    $description[$globalUserLeaderBoard[money;asc; {top}. {username} - {value}💵]]
    
    $cooldown[2s;{description:A bit too fast there. Wait for **time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})