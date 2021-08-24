module.exports = {
  
  name: "remover",
  aliases: ['re','r'],
  code: `
$description[
$username Successfully Remover Cash 💵 $$getGlobalUserVar[bank].]

$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message]]
$argsCheck[>1;Use: \`$getServerVar[prefix] Cash 💵 <Ammount>\`]
$onlyIf[$message<=$getGlobalUserVar[bank];**The deposit should not exceed the money you have!**]
$onlyIf[$message>=0;**You can only deposit more than $1.**]
`
}