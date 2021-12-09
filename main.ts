namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Info = SpriteKind.create()
    export const Dummy = SpriteKind.create()
    export const TrueButton = SpriteKind.create()
    export const TrueButton2 = SpriteKind.create()
    export const Mark = SpriteKind.create()
    export const Mark2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    pause(500)
    if (_1F == 2) {
        _1F = 3
        _2F = 1
    } else if (_2F == 2) {
        _2F = 3
        _3F = 1
    } else {
    	
    }
    mySprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dummy, function (sprite, otherSprite) {
    if (_2F == 2) {
        if (pins.P1.analogRead() > 1000) {
            otherSprite.setImage(img`
                b b b b b b b b b b b b b b b b 
                b c b b b b b b b b b b b b c b 
                b b b a 3 3 3 3 3 3 3 3 a b b b 
                b b a 3 3 3 3 3 3 3 3 3 3 a b b 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
                b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
                b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
                b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
                b b c 3 1 1 1 1 1 1 1 1 3 c b b 
                b b b c c c c c c c c c c b b b 
                b c b b b b b b b b b b b b c b 
                b b b b b b b b b b b b b b b b 
                `)
            ButtonJudgeF += 1
            pause(1000)
        }
        if (ButtonJudgeF >= 2 && ButtonJudgeF < 100) {
            for (let 値 of sprites.allOfKind(SpriteKind.Dummy)) {
                値.setImage(assets.image`ButtonA`)
            }
            for (let 値 of sprites.allOfKind(SpriteKind.TrueButton)) {
                値.setImage(assets.image`ButtonA`)
            }
            if (HintOpen == false) {
                HintOpen = true
            }
            ButtonJudgeF = 0
            ButtonJudgeT = 0
            ButtonJudgeT2 = 0
        }
        if ((ButtonJudgeT == 1 || ButtonJudgeT2 == 1) && (ButtonJudgeF >= 1 && ButtonJudgeF < 100)) {
            for (let 値 of sprites.allOfKind(SpriteKind.Dummy)) {
                値.setImage(assets.image`ButtonA`)
            }
            for (let 値 of sprites.allOfKind(SpriteKind.TrueButton)) {
                値.setImage(assets.image`ButtonA`)
            }
            for (let 値 of sprites.allOfKind(SpriteKind.TrueButton2)) {
                値.setImage(assets.image`ButtonA`)
            }
            if (HintOpen == false) {
                HintOpen = true
            }
            ButtonJudgeF = 0
            ButtonJudgeT = 0
            ButtonJudgeT2 = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrueButton2, function (sprite, otherSprite) {
    if (_2F == 2) {
        if (pins.P1.analogRead() > 1000) {
            if (ButtonJudgeT2 == 0) {
                otherSprite.setImage(assets.image`TrueOn`)
                ButtonJudgeT2 = 1
                pause(1000)
            }
        }
        if (ButtonJudgeT2 == 1) {
            if (ButtonJudgeT == 0 && ButtonJudgeF >= 1) {
                for (let 値 of sprites.allOfKind(SpriteKind.Dummy)) {
                    値.setImage(assets.image`ButtonA`)
                }
                for (let 値 of sprites.allOfKind(SpriteKind.TrueButton2)) {
                    値.setImage(assets.image`ButtonA`)
                }
                ButtonJudgeF = 0
                ButtonJudgeT = 0
                ButtonJudgeT2 = 0
            }
            if (ButtonJudgeT2 == 1 && ButtonJudgeT == 1 && ButtonJudgeF == 0) {
                for (let 値 of sprites.allOfKind(SpriteKind.TrueButton)) {
                    値.setImage(assets.image`Open`)
                }
                for (let 値 of sprites.allOfKind(SpriteKind.TrueButton2)) {
                    値.setImage(assets.image`Open`)
                }
                RockedDoor.destroy()
                tiles.setWallAt(tiles.getTileLocation(13, 2), false)
                ButtonJudgeF = 100
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrueButton, function (sprite, otherSprite) {
    if (_2F == 2) {
        if (pins.P1.analogRead() > 1000) {
            if (ButtonJudgeT == 0) {
                otherSprite.setImage(assets.image`TrueOn`)
                ButtonJudgeT = 1
                pause(1000)
            }
        }
        if (ButtonJudgeT == 1) {
            if (ButtonJudgeT2 == 0 && ButtonJudgeF >= 1) {
                for (let 値 of sprites.allOfKind(SpriteKind.Dummy)) {
                    値.setImage(assets.image`ButtonA`)
                }
                for (let 値 of sprites.allOfKind(SpriteKind.TrueButton)) {
                    値.setImage(assets.image`ButtonA`)
                }
                ButtonJudgeF = 0
                ButtonJudgeT = 0
                ButtonJudgeT2 = 0
            }
            if (ButtonJudgeT == 1 && ButtonJudgeT2 == 1 && ButtonJudgeF == 0) {
                for (let 値 of sprites.allOfKind(SpriteKind.TrueButton)) {
                    値.setImage(assets.image`Open`)
                }
                for (let 値 of sprites.allOfKind(SpriteKind.TrueButton2)) {
                    値.setImage(assets.image`Open`)
                }
                RockedDoor.destroy()
                tiles.setWallAt(tiles.getTileLocation(13, 2), false)
                ButtonJudgeF = 100
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mark, function (sprite, otherSprite) {
    if (_3F == 2) {
        if (otherSprite == A) {
            if (pins.P0.analogRead() >= 0 && pins.P0.analogRead() < 200) {
                Meter1.setImage(assets.image`Mater1-1`)
            } else if (pins.P0.analogRead() >= 200 && pins.P0.analogRead() < 400) {
                Meter1.setImage(assets.image`Mater1-2`)
            } else if (pins.P0.analogRead() >= 400 && pins.P0.analogRead() < 600) {
                Meter1.setImage(assets.image`Mater1-3`)
            } else if (pins.P0.analogRead() >= 600 && pins.P0.analogRead() < 800) {
                Meter1.setImage(assets.image`Mater1-4`)
            } else {
                Meter1.setImage(assets.image`Mater1-5`)
            }
        } else if (otherSprite == B) {
            if (pins.P0.analogRead() >= 0 && pins.P0.analogRead() < 200) {
                Meter2.setImage(assets.image`Mater1-1`)
            } else if (pins.P0.analogRead() >= 200 && pins.P0.analogRead() < 400) {
                Meter2.setImage(assets.image`Mater1-2`)
            } else if (pins.P0.analogRead() >= 400 && pins.P0.analogRead() < 600) {
                Meter2.setImage(assets.image`Mater1-3`)
            } else if (pins.P0.analogRead() >= 600 && pins.P0.analogRead() < 800) {
                Meter2.setImage(assets.image`Mater1-4`)
            } else {
                Meter2.setImage(assets.image`Mater1-5`)
            }
        } else if (otherSprite == C) {
            if (pins.P0.analogRead() >= 0 && pins.P0.analogRead() < 200) {
                Meter3.setImage(assets.image`Mater1-1`)
            } else if (pins.P0.analogRead() >= 200 && pins.P0.analogRead() < 400) {
                Meter3.setImage(assets.image`Mater1-2`)
            } else if (pins.P0.analogRead() >= 400 && pins.P0.analogRead() < 600) {
                Meter3.setImage(assets.image`Mater1-3`)
            } else if (pins.P0.analogRead() >= 600 && pins.P0.analogRead() < 800) {
                Meter3.setImage(assets.image`Mater1-4`)
            } else {
                Meter3.setImage(assets.image`Mater1-5`)
            }
        } else if (otherSprite == HintPoint) {
            mySprite.destroy()
            HintPoint.destroy()
            CardIconA = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f . 
                . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 f f f f f f f f 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                . f f f f f f f f f f f f f f . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Info)
            tiles.placeOnTile(CardIconA, tiles.getTileLocation(2, 11))
            MakePlayer(1, 11)
        } else {
        	
        }
    }
})
function MakePlayer (TileX: number, TileY: number) {
    mySprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        .....c111cbfbfc111c.....
        .....1b1b1ffff1b1b1.....
        .....bfbffffffbfbfb.....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(TileX, TileY))
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    if (otherSprite == Exit) {
        mySprite.y = mySprite.y - 5
        game.showLongText("出られない", DialogLayout.Bottom)
    }
    if (_3F == 2) {
        if (otherSprite == Cannon) {
            if (OpenC == 0) {
                CardC.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f f . 
                    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                    . f 1 1 f f 1 1 1 1 1 1 1 1 f . 
                    . f 1 1 f f 1 1 1 1 1 1 1 1 f . 
                    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                    . f 1 f f f f 1 1 1 1 f f 1 f . 
                    . f 1 1 1 1 1 1 f f 1 f f 1 f . 
                    . f 1 f f f f 1 1 1 1 f f 1 f . 
                    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                    . f f f f f f f f f f f f f f . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
                CardC.setVelocity(200, 0)
                OpenC = 1
            }
        }
    }
})
function Delete2F () {
    for (let 値 of sprites.allOfKind(SpriteKind.Dummy)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.Info)) {
        値.destroy()
    }
    ButtonTrue.destroy()
    ButtonTrue2.destroy()
    Smog.destroy()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Title == 0) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        tiles.setTilemap(tilemap`レベル1`)
        Title = 1
        _1F = 1
    }
    if (_1F == 2) {
        if (mySprite.overlapsWith(Board)) {
            game.showLongText("１Ｆ", DialogLayout.Bottom)
            game.showLongText("迷路を抜けろ", DialogLayout.Bottom)
            game.showLongText("・・・", DialogLayout.Bottom)
            game.showLongText("・・・．．．", DialogLayout.Bottom)
            game.showLongText("違和感には違和感たる理由がある", DialogLayout.Bottom)
        }
    }
    if (_2F == 2) {
        if (mySprite.overlapsWith(Board)) {
            game.showLongText("２Ｆ", DialogLayout.Bottom)
            game.showLongText("正しいボタンを２つ連続で押せ", DialogLayout.Bottom)
            game.showLongText("・・・", DialogLayout.Bottom)
            game.showLongText("・・・・・・", DialogLayout.Bottom)
            game.showLongText("失敗から得られる物もある", DialogLayout.Bottom)
        } else if (mySprite.overlapsWith(Display)) {
            game.showLongText("Ｖ", DialogLayout.Bottom)
            game.showLongText("１６ ファイト ベリリウム 火星", DialogLayout.Bottom)
            game.showLongText("・・・", DialogLayout.Bottom)
            game.showLongText("・・・・・・", DialogLayout.Bottom)
            game.showLongText("Ｈ", DialogLayout.Bottom)
            game.showLongText("にし　+　？　＝　とり", DialogLayout.Bottom)
        } else if (mySprite.overlapsWith(Smog)) {
            if (Smog.kind() == SpriteKind.Object) {
                game.showLongText("なんだコレは・・・", DialogLayout.Bottom)
                game.showLongText("ジャマだ・・・", DialogLayout.Bottom)
            } else {
                game.showLongText("ネコ　モ", DialogLayout.Bottom)
                game.showLongText("サカナ　モ", DialogLayout.Bottom)
                game.showLongText("サイショ　ガ", DialogLayout.Bottom)
                game.showLongText("ジュウヨウ　ダ", DialogLayout.Bottom)
            }
        } else {
        	
        }
    }
    if (_3F == 2) {
        if (mySprite.overlapsWith(Board)) {
            game.showLongText("３Ｆ", DialogLayout.Bottom)
            game.showLongText("色を正しく並べろ", DialogLayout.Bottom)
        } else if (mySprite.overlapsWith(CalendarIcon)) {
            if (LookCale == 0) {
                Calendar = sprites.create(img`
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddd555555555ddddddddffdddddddddddddffddddddddddddddd7dddddddddddddddfdddddddddfdddddddddddddddddddddddddd
                    dddddddddddddddddddddddddd5555555555555ddddddfffdddddddddddfffdddddd7dddddddd7dddddddd7dddddffdddddddddffddddddddddddddddddddddddd
                    ddddddddddddddddddddddddd555555555555555dddddffffdddddddddffffdddddd7ddddddd777ddddddd7dddddfffdddddddfffddddddddddddddddddddddddd
                    dddddddddddddddddddddddd55555555555555555dddddffffdddddddffffddddddd77dddddd777dddddd77dddddffffdddddffffddddddddddddddddddddddddd
                    dddddddddddddddddddddddd55555555555555555ddddddffffdddddffffdddddddd77ddddd77777ddddd77dddddffffdddddffffddddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddffffdddffffddddddddd777dddd77777dddd777dddddfdfffdddfffdfddddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555dddddddffffdffffdddddddddd777ddd7777777ddd777dddddfddfffdfffddfddddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddddfffffffddddddddddd7777dd7777777dd7777dddddfddfffdfffddfddddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555dddddddddfffffdddddddddddd7777d777777777d7777ddddffdddfffffdddffdddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddddddfffddddddddddddd7777777777777777777ddddffddddfffddddffdddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddddddfffddddddddddddd7777777777777777777ddddffdddddfdddddffdddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddddddfffddddddddddddd7777777777777777777ddddffdddddddddddffdddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddddddfffddddddddddddd7777777777777777777ddddffdddddddddddffdddddddddddddddddddddddd
                    ddddddddddddddddddddddd5555555555555555555ddddddddddfffddddddddddddd7777777777777777777dddfffdddddddddddfffddddddddddddddddddddddd
                    dddddddddddddddddddddddd55555555555555555dddddddddddfffddddddddddddd7777777777777777777dddfffdddddddddddfffddddddddddddddddddddddd
                    dddddddddddddddddddddddd55555555555555555dddddddddddfffddddddddddddd7777777777777777777dddfffdddddddddddfffddddddddddddddddddddddd
                    ddddddddddddddddddddddddd555555555555555ddddddddddddfffddddddddddddd7777777777777777777dddffdddddddddddddffddddddddddddddddddddddd
                    dddddddddddddddddddddddddd5555555555555dddddddddddddfffddddddddddddd7777777777777777777dddffdddddddddddddffddddddddddddddddddddddd
                    dddddddddddddddddddddddddddd555555555dddddddddddddddfffddddddddddddd7777777777777777777dddffdddddddddddddffddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111ffff1111111111111ffff1111111111111f2221111111111111faaa1111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111ffff1111111111111ffff1111111111111f2221111111111111faaa1111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111ffff1111111111111ffff1111111111111f2221111111111111faaa1111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111f2221111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111f2221111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf2221111111111111ffff1111111111111ffff1111111111111ffff1111111111111f2221111111111111ffff1111111111111faaa1111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd
                    dddddf2221111111111111ffff1111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf2221111111111111ffff1111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf2221111111111111ffff1111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddf1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111f1111111111111111fddddd
                    dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    `, SpriteKind.Info)
                Calendar.setPosition(mySprite.x, mySprite.y)
                controller.moveSprite(mySprite, 0, 0)
                LookCale = 1
            } else {
                Calendar.destroy()
                controller.moveSprite(mySprite, 100, 100)
                LookCale = 0
            }
        } else if (mySprite.overlapsWith(SubBoard)) {
            game.showLongText("「１Ｆ」とだけ書かれている", DialogLayout.Bottom)
            game.showLongText("ここは１階じゃないが", DialogLayout.Bottom)
            game.showLongText("何か意味があるのだろうか", DialogLayout.Bottom)
        } else if (mySprite.overlapsWith(CardIconA)) {
            if (LookA == 0) {
                CardA = sprites.create(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f33333333333333333333333333333333333333333333333333333333333333333333f
                    f33333333333333333333333333333333333333333333333333333333333333333333f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f1111111111111111fffffffffff1111fffffffffff11111111111111111111111111f
                    f1111111111111111fffffffffff1111fffffffffff11111111111111111111111111f
                    f1111111111111111ff1111111111111111111111ff11111111111111111111111111f
                    f1111111111111111ff1111111111111111111111ff11111111111111111111111111f
                    f1111111111111111ff1111111111111111111111ff1111ffffffff11111111111111f
                    f1111111111111111ff1111111111111111111111ff1111f111111f11111111111111f
                    f1111111111111111ff1111111111111111111111ff11111f1111f111111111111111f
                    f1111111111111111fffffffffff1111fffffffffff11111f1111f111111111111111f
                    f1111111111111111fffffffffff1111fffffffffff111111f11f1111111111111111f
                    f1111111111111111ff1111111111111ff111111111111111f11f1111111111111111f
                    f1111111111111111ff1111111111111ff1111111111111111ff11111111111111111f
                    f1111111111111111ff1111111111111ff1111111111111111ff11111111111111111f
                    f1111111111111111ff1111111111111ff11111111111111111111111111111111111f
                    f1111111111111111ff1111111111111ff11111111111111111111111111111111111f
                    f1111111111111111fffffffffff1111fffffffffff11111111111111111111111111f
                    f1111111111111111fffffffffff1111fffffffffff11111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `, SpriteKind.Info)
                CardA.setPosition(mySprite.x + 10, mySprite.y - 10)
                controller.moveSprite(mySprite, 0, 0)
                LookA = 1
            } else {
                CardA.destroy()
                controller.moveSprite(mySprite, 100, 100)
                LookA = 0
            }
        } else if (mySprite.overlapsWith(CardIconB)) {
            if (LookB == 0) {
                CardB = sprites.create(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111151111111111111111111111f
                    f11111111111111111111111111111111111111111111155111111111111111111111f
                    f11111111111111111111111111111111111111111111155511111111111111111111f
                    f11111111111111111111111111111111111111111111155551111111111111111111f
                    f11111111111111111111111111111111111111111111155555111111111111111111f
                    f11111111111111111111111111111111111111111111155555511111111111111111f
                    f11111111111111111111111111111111111111111111155555551111111111111111f
                    f11111111111111111111111111111111111111111111155555551111111111111111f
                    f11111111111111111111111111111111111111111111155555555111111111111111f
                    f11111111111111111111111111111111111111111111155555555111111111111111f
                    f11111111111111111111111111111111111111111111555555555511111111111111f
                    f11111111111111111111111111111111111111111111555555555511111111111111f
                    f11111111111111111111111111111111111111111111555555555511111111111111f
                    f11111111111111111111111111111111111111111115555555555551111111111111f
                    f11111111111111111111111111111111111111111115555555555551111111111111f
                    f11111111111111111111111111111111111111111115555555555551111111111111f
                    f11111111111111111111111111111111111111111155555555555551111111111111f
                    f11111111111111111111111111111111111111111155555555555551111111111111f
                    f11111111111111111111111111111111111111111555555555555551111111111111f
                    f11111111111111111111111111111111111111115555555555555551111111111111f
                    f11111111111111111111111111111111111111115555555555555551111111111111f
                    f11111111111111111111111111111111111111155555555555555551111111111111f
                    f1111111111111111111111111111111111111155ffff555555555551111111111111f
                    f11111111111111111111111111111111111115555555ff5555555551111111111111f
                    f1111111111111111111111111111111111115555555555f555555551111111111111f
                    f1111111111111111111111111111111111155555555555f555555551111111111111f
                    f1111111111111111111111111111111111555555555555f555555511111111111111f
                    f1111111111111111111111111111111155555555555555f555555511111111111111f
                    f11111111111111111111111111111115555555555555ff5555555511111111111111f
                    f1111111111111111111111111111155555555555ffff555555555111111111111111f
                    f11111111111111111111111111555555555555555555ff5555555111111111111111f
                    f1111111111111111111111155555555555555555555555f555551111111111111111f
                    f1111111111155555555555555555555555555555555555f555551111111111111111f
                    f1111111111115555555555555555555555555555555555f555511111111111111111f
                    f1111111111111555555555555555555555555555555555f555111111111111111111f
                    f1111111111111155555555555555555555555555555555f551111111111111111111f
                    f11111111111111155555555555555555555555555555ff5511111111111111111111f
                    f1111111111111111555555555555555555555555ffff555111111111111111111111f
                    f11111111111111111555555555555555555555555555551111111111111111111111f
                    f11111111111111111155555555555555555555555555511111111111111111111111f
                    f11111111111111111111555555555555555555555551111111111111111111111111f
                    f11111111111111111111115555555555555555555111111111111111111111111111f
                    f11111111111111111111111115555555555555111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f33333333333333333333333333333333333333333333333333333333333333333333f
                    f33333333333333333333333333333333333333333333333333333333333333333333f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `, SpriteKind.Info)
                CardB.setPosition(mySprite.x + 10, mySprite.y - 10)
                controller.moveSprite(mySprite, 0, 0)
                LookB = 1
            } else {
                CardB.destroy()
                controller.moveSprite(mySprite, 100, 100)
                LookB = 0
            }
        } else if (mySprite.overlapsWith(CardC)) {
            if (LookC == 0) {
                CardC = sprites.create(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f111111111111111ffffff11111111111111111111111111111111111111111111111f
                    f1111111111111ff111111ff111111111111111111111111111111111111111111111f
                    f111111111111f1111111111f11111111111111111111111111111111111111111111f
                    f111111111111f1111111111f11111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f11111111111f11111111111111111111111111111111111111111111111111111111f
                    f111111111111f1111111111f11111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f1111fffffff11111f111f11111111fffffff11111111111111111111111111111111f
                    f1111111111f11111f111f11111111f11111111111111111111111111111111111111f
                    f1111111111f11111f111f11111111f11111111111111111111111111111111111111f
                    f1111111111f11111f111f11111111f11111111111111111111111111111111111111f
                    f1111fffffff11111f111f11111111fffffff11111111111111111111111111111111f
                    f1111f11111111111ffffffff11111f11111f11111111111111111111111111111111f
                    f1111f111111111111111f11111111f11111f11111111111111111ff1111111ff1111f
                    f1111f1111111ff111111f1111ff11f11111f1ff11111111111111fff11111fff1111f
                    f1111fffffff1ff111111f1111ff11fffffff1ff11111111f111111fff111fff11111f
                    f1111111111111f111111111111f11111111111f111111111f111111fff1fff111111f
                    f1111111111111111111111111111111111111111111111111f111111fffff1111111f
                    f11111111111111111111111111111111111111111ffffffffff111111fff11111111f
                    f1111111111111111111111111111111111111111111111111f111111fffff1111111f
                    f111111111111111111111111111111111111111111111111f111111fff1fff111111f
                    f1111111111fffffff11111f11111f111111111111111111f111111fff111fff11111f
                    f1111111111f11111f11111f11111f111111111111111111111111fff11111fff1111f
                    f1111111111f11111f11111f11111f111111111111111111111111ff1111111ff1111f
                    f1111111111f11111f11111f11111f111111111111111111111111111111111111111f
                    f1111111111fffffff11111f11111f111111111111111111111111111111111111111f
                    f1111111111111111f11111f11111f111111111111111111111111111111111111111f
                    f1111111111111111f11111f11111f111111111111111111111111111111111111111f
                    f1111111111111111f1ff11f11111f111111111111111111111111111111111111111f
                    f1111111111fffffff1ff11f11111f111111111111111111111111111111111111111f
                    f1111111111111111111f111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f11111111111111111111111111111111111111111111111111111111111111111111f
                    f33333333333333333333333333333333333333333333333333333333333333333333f
                    f33333333333333333333333333333333333333333333333333333333333333333333f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `, SpriteKind.Info)
                CardC.setPosition(mySprite.x - 13, mySprite.y)
                controller.moveSprite(mySprite, 0, 0)
                LookC = 1
            } else {
                CardC.destroy()
                controller.moveSprite(mySprite, 100, 100)
                LookC = 0
            }
        }
    }
})
let HintText2: Sprite = null
let HintText1: Sprite = null
let Fish: Sprite = null
let Cat: Sprite = null
let ButtonA: Sprite = null
let LookC = 0
let CardB: Sprite = null
let LookB = 0
let CardA: Sprite = null
let LookA = 0
let Calendar: Sprite = null
let LookCale = 0
let CardIconB: Sprite = null
let SubBoard: Sprite = null
let CalendarIcon: Sprite = null
let Display: Sprite = null
let Board: Sprite = null
let Smog: Sprite = null
let ButtonTrue2: Sprite = null
let ButtonTrue: Sprite = null
let CardC: Sprite = null
let OpenC = 0
let Cannon: Sprite = null
let Exit: Sprite = null
let CardIconA: Sprite = null
let Meter3: Sprite = null
let Meter2: Sprite = null
let Meter1: Sprite = null
let HintPoint: Sprite = null
let C: Sprite = null
let B: Sprite = null
let A: Sprite = null
let RockedDoor: Sprite = null
let ButtonJudgeT2 = 0
let ButtonJudgeT = 0
let HintOpen = false
let ButtonJudgeF = 0
let mySprite: Sprite = null
let _3F = 0
let _2F = 0
let _1F = 0
let Title = 0
Title = 0
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
    fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
    fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
    ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
    fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
    fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
    fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
    fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
    fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
    fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
    ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
    fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
    ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
    fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
    ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
    ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
    fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
    fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
    cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
    ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
    ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
    fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
    fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
    ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
    fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
    ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
    ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
    ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
    ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
    fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
    fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
    ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
    ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
    dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
    dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
    dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
    dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
    dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
    dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
    ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
    ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
    ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
    dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
    dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
    dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
    ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
    ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
    ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
    ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
    ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
    ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
    dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
    dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
    ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
    bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
    bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
    bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
    bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
    bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
    bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
    ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
    dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
    ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
    ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
    dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
    ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
    bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
    dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
    dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
    ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
    dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
    bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
    ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
    dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
    dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
    bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
    dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
    dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
    bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
    cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
    ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
    ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
    ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
    cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
    ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
    cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
    cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
    ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
    cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
    fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
    fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
    ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
    fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
game.splash("Mystery Tower")
forever(function () {
    if (_1F == 1) {
        Board = sprites.create(assets.image`Board`, SpriteKind.Object)
        Board.setPosition(120, 210)
        Exit = sprites.create(img`
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            77777777777777777777777777777777................
            77777777777777777777777777777777................
            `, SpriteKind.Object)
        tiles.placeOnTile(Exit, tiles.getTileLocation(8, 14))
        MakePlayer(8, 13)
        _1F = 2
    }
})
forever(function () {
    if (_3F == 1) {
        tiles.setTilemap(tilemap`レベル5`)
        Delete2F()
        Board.setPosition(184, 210)
        SubBoard = sprites.create(assets.image`BoardSub`, SpriteKind.Info)
        SubBoard.setPosition(232, 210)
        tiles.placeOnTile(Exit, tiles.getTileLocation(13, 14))
        A = sprites.create(assets.image`A`, SpriteKind.Mark)
        tiles.placeOnTile(A, tiles.getTileLocation(6, 7))
        B = sprites.create(assets.image`B`, SpriteKind.Mark)
        tiles.placeOnTile(B, tiles.getTileLocation(10, 7))
        C = sprites.create(assets.image`C`, SpriteKind.Mark)
        tiles.placeOnTile(C, tiles.getTileLocation(14, 7))
        Meter1 = sprites.create(assets.image`Mater1-1`, SpriteKind.Info)
        tiles.placeOnTile(Meter1, tiles.getTileLocation(6, 3))
        Meter2 = sprites.create(assets.image`Mater2-1`, SpriteKind.Info)
        tiles.placeOnTile(Meter2, tiles.getTileLocation(10, 3))
        Meter3 = sprites.create(assets.image`Mater3-1`, SpriteKind.Player)
        tiles.placeOnTile(Meter3, tiles.getTileLocation(14, 3))
        CalendarIcon = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d d f 
            f d d d d f f f f f f d d d d f 
            f d d d d d d d d d d d d d d f 
            f d f f f f f f f f f f f f d f 
            f d d d d d d d d d d d d d d f 
            f d f f f f f f f f f f f f d f 
            f d d d d d d d d d d d d d d f 
            f d f f f f f f f f f f f f d f 
            f d d d d d d d d d d d d d d f 
            f d f f f f f f f f f f f f d f 
            f d d d d d d d d d d d d d d f 
            f d f f f f f f f f f f f f d f 
            f d d d d d d d d d d d d d d f 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Info)
        CalendarIcon.setPosition(88, 188)
        CardIconB = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 f 1 1 1 1 f . 
            . f 1 1 1 1 1 f f 1 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
            . f 1 1 f 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Info)
        tiles.placeOnTile(CardIconB, tiles.getTileLocation(1, 14))
        HintPoint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Mark)
        tiles.placeOnTile(HintPoint, tiles.getTileLocation(1, 11))
        Cannon = sprites.create(assets.image`Cannon`, SpriteKind.Object)
        Cannon.setPosition(28, 135)
        CardC = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Info)
        tiles.placeOnTile(CardC, tiles.getTileLocation(2, 8))
        MakePlayer(13, 13)
        _3F = 2
    }
})
forever(function () {
    if (_2F == 1) {
        tiles.setTilemap(tilemap`レベル2`)
        HintOpen = false
        for (let 値 of tiles.getTilesByType(assets.tile`ButtonPoint`)) {
            ButtonA = sprites.create(assets.image`ButtonA`, SpriteKind.Dummy)
            tiles.placeOnTile(ButtonA, 値)
        }
        // 正解
        // ↑4-→1
        // ↓3-←2   　
        ButtonTrue = sprites.create(assets.image`ButtonTrue`, SpriteKind.TrueButton)
        tiles.placeOnTile(ButtonTrue, tiles.getTileLocation(1, 3))
        ButtonTrue2 = sprites.create(assets.image`ButtonTrue2`, SpriteKind.TrueButton2)
        tiles.placeOnTile(ButtonTrue2, tiles.getTileLocation(7, 5))
        Cat = sprites.create(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `, SpriteKind.Info)
        Cat.setPosition(160, 216)
        Cat.setVelocity(0, 10)
        Cat.setFlag(SpriteFlag.BounceOnWall, true)
        Fish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c c . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c b b b b 1 b b c c . . 
            . . . . c 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 b b c c 
            . . c c d 1 1 1 b 1 b 1 5 5 5 c 
            . . c c d 1 c 1 1 1 b 1 b b 5 c 
            . c c d d 1 1 1 1 1 b 1 f b 5 c 
            f d d d 1 1 1 1 1 b b b f . c c 
            f f f f f 1 1 1 b b 5 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `, SpriteKind.Info)
        Fish.setPosition(208, 224)
        Fish.setVelocity(10, 0)
        Fish.setFlag(SpriteFlag.BounceOnWall, true)
        HintText1 = sprites.create(img`
            ................
            .77777777777777.
            .75555555555557.
            .75555f55f55557.
            .75555f55f55557.
            .75555f55f55557.
            .7555f5555f5557.
            .7555f5555f5557.
            .7555f5555f5557.
            .7555f5555f5557.
            .755f555555f557.
            .755f555555f557.
            .755f555555f557.
            .75f55555555f57.
            .75555555555557.
            .75555555555557.
            .75555555555557.
            .75555f55555557.
            .755555f5555557.
            .7555555f555557.
            .755ffffffff557.
            .755555555f5557.
            .75555555f55557.
            .7555555f555557.
            .755555ff5f5557.
            .75555f5f55ff57.
            .75fff55f555557.
            .7555555f555557.
            .7555555f555557.
            .75555555555557.
            .77777777777777.
            ................
            `, SpriteKind.Info)
        HintText1.setPosition(136, 224)
        HintText2 = sprites.create(img`
            ................................
            .777777777777777777777777777777.
            .755555555555555555555555555557.
            .755f5555555555555555555555f557.
            .755f5555555555555555555555f557.
            .755f555555555555555555555f5557.
            .755f55555555555555f555555f5557.
            .755ff55555555555555f5555f55557.
            .755f5f55555555555555ff55f55557.
            .755f55f555555555555555ff555557.
            .755f555f555555555555ff5f555557.
            .755f5555f555555555ff5555ff5557.
            .755f555555555555ff55555555f557.
            .755555555555555555555555555557.
            .777777777777777777777777777777.
            ................................
            `, SpriteKind.Info)
        tiles.placeOnTile(HintText2, tiles.getTileLocation(13, 12))
        Display = sprites.create(assets.image`Monitor`, SpriteKind.Info)
        Display.setPosition(232, 125)
        Smog = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Object)
        animation.runImageAnimation(
        Smog,
        [img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . c c c c . . 
            . c c c c c . c c c c c f c c . 
            c c a c c c c c 8 f f c f f c c 
            c a f a a c c a f f c a a f f c 
            c a 8 f a a c a c c c a a a a c 
            c b c f a a a a a c c c c c c c 
            c b b a a c f 8 a c c c 8 c c c 
            . c b b a b c f a a a 8 8 c c . 
            . . . . a a b b b a a 8 a c . . 
            . . . . c b c a a c c b . . . . 
            . . . . b b c c a b b a . . . . 
            . . . . b b a b a 6 a . . . . . 
            . . . . c b b b 6 6 c . . . . . 
            . . . . . c a 6 6 b c . . . . . 
            . . . . . . . c c c . . . . . . 
            `,img`
            . . . . . . . c c c a c . . . . 
            . . c c b b b a c a a a c . . . 
            . c c a b a c b a a a b c c . . 
            . c a b c f f f b a b b b a . . 
            . c a c f f f 8 a b b b b b a . 
            . c a 8 f f 8 c a b b b b b a . 
            c c c a c c c c a b c f a b c c 
            c c a a a c c c a c f f c b b a 
            c c a b 6 a c c a f f c c b b a 
            c a b c 8 6 c c a a a b b c b c 
            c a c f f a c c a f a c c c b . 
            c a 8 f c c b a f f c b c c c . 
            . c b c c c c b f c a b b a c . 
            . . a b b b b b b b b b b b c . 
            . . . c c c c b b b b b c c . . 
            . . . . . . . . c b b c . . . . 
            `,img`
            . . . . . . c c c . . . . . . . 
            . . . . . a a a c c c . . . . . 
            . . . c a c f a a a a c . . . . 
            . . c a c f f f a f f a c . . . 
            . c c a c c f a a c f f a c . . 
            . a b a a c 6 a a c c f a c c c 
            . a b b b 6 a b b a a c a f f c 
            . . a b b a f f b b a a c f f c 
            c . a a a c c f c b a a c f a c 
            c c a a a c c a a a b b a c a c 
            a c a b b a a 6 a b b 6 b b c . 
            b a c b b b 6 b c . c c a c . . 
            b a c c a b b a c . . . . . . . 
            b b a c a b a a . . . . . . . . 
            a b 6 b b a c . . . . . . . . . 
            . a a b c . . . . . . . . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(Smog, tiles.getTileLocation(6, 14))
        RockedDoor = sprites.create(img`
            c b b b b b b b b b b b b b b c 
            c b b b b b b b b b b b b b b c 
            c d d d d d d d d d d d d d d c 
            c d d d d d d d d d d d d d d c 
            c c c c c c c c c c c c c c c c 
            c b b c b b b b b b b b c b b c 
            c d d c b b b b b b b b c d d c 
            c d d c 4 b b 5 5 b b 4 c d d c 
            c d d c b e 5 b b 5 e b c d d c 
            c d d c b e 4 5 5 4 e b c d d c 
            c b b c 4 b 5 4 f 5 b 4 c b b c 
            c d d c b b 4 4 e 4 b b c d d c 
            c d d c b b e 4 4 e b b c d d c 
            c d d c b b b e e b b b c d d c 
            c d d c b b b b b b b b c d d c 
            a c c c c c c c c c c c c c c a 
            `, SpriteKind.Info)
        tiles.placeOnTile(RockedDoor, tiles.getTileLocation(13, 2))
        Board.setPosition(56, 210)
        tiles.placeOnTile(Exit, tiles.getTileLocation(2, 14))
        MakePlayer(1, 13)
        _2F = 2
    }
})
forever(function () {
    if (_2F == 2) {
        if (Fish.vx > 0) {
            Fish.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . c c c c c c . . . . . . . 
                . . c c 5 5 5 5 5 c . . . . . . 
                . c 5 5 5 5 5 5 5 5 c . . . . . 
                . c 5 5 5 b b b b b b c . . . . 
                . . c c b b 1 b b b b c . . . . 
                . . . c 1 1 1 b b 1 1 c . . . . 
                . . . c 1 1 1 b 1 1 1 1 c . . . 
                c c b b 1 1 1 b 1 1 1 1 c . . . 
                c 5 5 5 1 b 1 b 1 1 1 d c c . . 
                c 5 b b 1 b 1 1 1 c 1 d c c . . 
                c 5 b f 1 b 1 1 1 1 1 d d c c . 
                c c . f b b b 1 1 1 1 1 d d d f 
                . . f 5 5 5 b b 1 1 1 f f f f f 
                . . f 5 5 5 5 5 f f f . . . . . 
                . . f f f f f f . . . . . . . . 
                `)
        } else {
            Fish.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c c c c . . . 
                . . . . . . c 5 5 5 5 5 c c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c b b b b b b 5 5 5 c . 
                . . . . c b b b b 1 b b c c . . 
                . . . . c 1 1 b b 1 1 1 c . . . 
                . . . c 1 1 1 1 b 1 1 1 c . . . 
                . . . c 1 1 1 1 b 1 1 1 b b c c 
                . . c c d 1 1 1 b 1 b 1 5 5 5 c 
                . . c c d 1 c 1 1 1 b 1 b b 5 c 
                . c c d d 1 1 1 1 1 b 1 f b 5 c 
                f d d d 1 1 1 1 1 b b b f . c c 
                f f f f f 1 1 1 b b 5 5 5 f . . 
                . . . . . f f f 5 5 5 5 5 f . . 
                . . . . . . . . f f f f f f . . 
                `)
        }
        if (HintOpen == true) {
            Smog.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . 4 5 f f f f f 5 f f f f 5 4 . 
                . 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . 4 5 f f f f 5 f f 5 f f 5 4 . 
                . 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . 4 5 f f f 5 f f f f f f 5 4 . 
                . 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . 4 5 f f 5 f f 5 f f f 5 5 4 . 
                . 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Smog.setKind(SpriteKind.Info)
            animation.stopAnimation(animation.AnimationTypes.All, Smog)
        }
    }
})
