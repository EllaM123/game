namespace SpriteKind {
    export const Food2 = SpriteKind.create()
    export const Food3 = SpriteKind.create()
}
function sentries () {
    sentry = sprites.create(img`
        . . . . c b b b b b b c . . . . 
        . . . . b c b b b b c b . . . . 
        . . . . b f c b b c f b . . . . 
        . . . . b f b b b b f b . . . . 
        . . . . b f b b b b f b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b f f f f b b . . . . 
        . . . . b b f f f f b b . . . . 
        . . . . b b f f f f b b . . . . 
        . . . . b b f f f f b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(sentry, sprites.dungeon.floorLight2)
}
function speech () {
    pause(2000)
    Otto.sayText(list, 5000, false)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Chest3)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Chest)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Chest2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sentry)
    statusbar.value += -5
    sentries()
    info.changeScoreBy(1)
})
let sentry: Sprite = null
let statusbar: StatusBarSprite = null
let Chest3: Sprite = null
let Chest2: Sprite = null
let Chest: Sprite = null
let Otto: Sprite = null
let list: number[] = []
list = [game.askForNumber("Give 6 Numbers", 6)]
game.splash("Get Ready!")
tiles.setCurrentTilemap(tilemap`level3`)
Otto = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff2222ff........
    .......f52222225f.......
    .......f22222222f.......
    ......f4222222224f......
    ......f4222222224f......
    ......f4442222444f......
    ......f545f44f545f......
    ......fd4df22fd4df......
    .......f52222225f.......
    ......fffd45254ffff.....
    ....fd222d5f5fd222df....
    ....f25252ffff25252f....
    ....f5f5ffffff5f5f5f....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Otto)
scene.cameraFollowSprite(Otto)
tiles.placeOnRandomTile(Otto, sprites.dungeon.floorMixed)
info.startCountdown(20)
Chest = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f e e e e e e e f . . . 
    . . . f e e 5 5 5 5 5 e e f . . 
    . . . f f f 5 f f f 5 f f f . . 
    . . . f e e 5 5 5 5 5 e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Chest2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f e e e e e e e f . . . 
    . . . f e e 5 5 5 5 5 e e f . . 
    . . . f f f 5 f f f 5 f f f . . 
    . . . f e e 5 5 5 5 5 e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food2)
Chest3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f e e e e e e e f . . . 
    . . . f e e 5 5 5 5 5 e e f . . 
    . . . f f f 5 f f f 5 f f f . . 
    . . . f e e 5 5 5 5 5 e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food3)
tiles.placeOnRandomTile(Chest, sprites.dungeon.floorLight2)
tiles.placeOnRandomTile(Chest2, sprites.dungeon.floorLight2)
tiles.placeOnRandomTile(Chest3, assets.tile`myTile`)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Otto)
statusbar.value = 100
statusbar.setColor(7, 2)
sentries()
speech()
pause(3000)
if (info.score() >= 3) {
    Otto.sayText(":)")
} else if (info.score() < 3) {
    Otto.sayText(":(")
}
while (controller.anyButton.isPressed()) {
    music.play(music.createSong(hex`0078000408020800001c00010a006400f401640000040000000000000000000000000005000004600004000800031d2a2c08000c0001250c001000011d1000140002222914001800012718001c00011e1c002000031e252924002800031d202728002c0002242a2c003000021d2c30003400012234003800021e2738003c00012a3c004000031d242901001c000f05001202c102c201000405002800000064002800031400060200045d0004000800031e202408000c0002192a0c001000031b222a10001400011d14001800031b222718001c000222291c002000011e20002400021b2424002800041d22292c2c00300002202730003400011934003800031e242c38003c00012403001c0001dc00690000045e01000400000000000000000000056400010400035a0004000800012208000c00021d250c0010000219201000140002192714001800031d252a1c002000031b1d252000240002272924002800021e2a28002c00021b242c003000012730003400012938003c00021d2a3c00400002242a04001c00100500640000041e000004000000000000000000000000000a040004640000000400012404000800012708000c0001190c001000012a10001400031b222914001800011d18001c00031b2429200024000319222c24002800012a28002c000220272c003000012530003400021e2c34003800011b38003c0001253c0040000319202c05001c000f0a006400f4010a0000040000000000000000000000000000000002480000000400021d2908000c0002202c0c001000012710001400012c1400180001201c00200002222c24002800011b2c0030000319242a34003800012938003c000219203c004000012706001c00010a006400f401640000040000000000000000000000000000000002300000000400031e252c0c00100001251000140002202c18001c00031e252c2400280002202528002c00012a2c003000012207001c00020a006400f401640000040000000000000000000000000000000003210004000800011e0c00100002202214001800031e252718001c00012720002400012208001c000e050046006603320000040a002d00000064001400013200020100022c0008000c0001220c00100001241000140002222518001c0001241c002000011d28002c00021d242c0030000129`), music.PlaybackMode.UntilDone)
}
