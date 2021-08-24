module.exports = {
  
  name: "del",
  code: `$title[delete Cash!]
$description[<:miu_amano1:799075354094338049> You just delete <@$mentioned[1]> $$message[2] Cash!]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$mentioned[1]];$message[2]];$mentioned[1]]
$onlyIf[$message[2]>=1;**You can only delete more than $1.**
$argsCheck[2;To Use: \`$getServerVar[prefix]give <@user> <ammount>\`]]
$color[$random[0;999999;]]
`
}