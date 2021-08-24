module.exports = {
    name: "mail",
    code: `$dm[$mentioned[1]]
$addCmdReactions[✅]
$title[:diamonds:__Bunny Girl__:diamonds:]
$description[
👤┇**Me**: <@$authorID>
📧┇**Msg**: \`$noMentionMessage\`]
$addTimestamp
$color[RANDOM]
$argsCheck[>1;{title:▸ :x:┇ERROR} {description::warning:  <@$authorID> \`\`\`diff
-Menciona a alguien para que le llegue el mensaje un ejemplo: $getServerVar[prefix]mail <@user o ID> <mensaje> :D\`\`\`} {color:ff1000} {footer:$username:$authorAvatar} {delete:20s}]
`
}