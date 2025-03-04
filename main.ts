namespace SpriteKind {
    export const Food2 = SpriteKind.create()
    export const Food3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Chest3)
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
let Chest3: Sprite = null
let Chest2: Sprite = null
let Chest: Sprite = null
tiles.setCurrentTilemap(tilemap`level3`)
let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
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
Chest.setPosition(randint(0, 120), randint(0, 120))
Chest2.setPosition(randint(0, 120), randint(0, 120))
Chest3.setPosition(randint(0, 120), randint(0, 120))
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 100
statusbar.setColor(7, 2)
