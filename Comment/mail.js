module.exports = {
    name: "mail",
    code: `$dm[$mentioned[1]]
$addCmdReactions[â]
$title[:diamonds:__Bunny Girl__:diamonds:]
$description[
ð¤â**Me**: <@$authorID>
ð§â**Msg**: \`$noMentionMessage\`]
$addTimestamp
$color[RANDOM]
$argsCheck[>1;{title:â¸ :x:âERROR} {description::warning:  <@$authorID> \`\`\`diff
-Menciona a alguien para que le llegue el mensaje un ejemplo: $getServerVar[prefix]mail <@user o ID> <mensaje> :D\`\`\`} {color:ff1000} {footer:$username:$authorAvatar} {delete:20s}]
`
}