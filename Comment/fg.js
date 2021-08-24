module.exports = {
  
  name: "fg",
code: `$color[RANDOM]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[50;100]]]
$title[$username is fishing]
$description[Pescaste un $randomText[:womans_flat_shoe:;:high_heel:;:sandal:;:boot:;:mans_shoe:;:athletic_shoe:;:hiking_boot:;:crab:;:squid:;:octopus:;:lobster:;:shrimp:;:tropical_fish:;:fish:;:blowfish:;:dolphin:;:shark:;:whale:;:whale2:;:crocodile:;:swan:;:duck:] and you get $$random[50;100]]
$globalCooldown[10s;**:hourglass_flowing_sand: Puedes volver a pescar en %time%**]`
}