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
    if (statusbar.value <= 90) {
        info.changeScoreBy(2)
    } else {
        info.changeScoreBy(1)
    }
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
