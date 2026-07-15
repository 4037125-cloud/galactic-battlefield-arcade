namespace SpriteKind {
    export const EnemyProjectile = SpriteKind.create()
    export const EnemyRammer = SpriteKind.create()
    export const BossEnemy = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BossEnemy, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    sprites.destroy(Projectile_1, effects.fire, 100)
    BossHealth += -1
    scene.cameraShake(5, 200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    if (BossHealth == 0) {
        Lord_of_the_Red_Star.setPosition(85, 50)
        Lord_of_the_Red_Star.setVelocity(0, 0)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        sprites.destroy(Lord_of_the_Red_Star, effects.fire, 2000)
        scene.cameraShake(8, 2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        pause(2300)
        info.player1.setScore(100000)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.setScore(100000)
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    
    sprites.destroy(otherSprite2, effects.coolRadial, 500)
    if (Is_Invincible == false) {
        if (sprite2 == SkyStryker) {
            info.player1.changeLifeBy(-1)
        } else {
            info.player2.changeLifeBy(-1)
        }
        
        scene.cameraShake(6, 200)
        if (info.life() >= 1) {
            music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
        }
        
        Is_Invincible = true
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life) < 30) {
        if (game.runtime() >= NextBUse) {
            Projectile_4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 5 5 5 c b b . . .
                    . . . . b 5 5 5 1 5 5 5 b . . .
                    . . . c c 5 5 5 1 5 5 5 c c . .
                    . . b b 5 5 5 1 1 1 5 5 5 b b .
                    . . d d 5 1 1 1 1 1 1 1 5 d d .
                    . . b b 5 5 5 1 1 1 5 5 5 b b .
                    . . . c c 5 5 5 1 5 5 5 c c . .
                    . . . . b 5 5 5 1 5 5 5 b . . .
                    . . . . b b c 5 5 5 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 150, -70)
            Projectile_4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 5 5 5 c b b . . .
                    . . . . b 5 5 5 1 5 5 5 b . . .
                    . . . c c 5 5 5 1 5 5 5 c c . .
                    . . b b 5 5 5 1 1 1 5 5 5 b b .
                    . . d d 5 1 1 1 1 1 1 1 5 d d .
                    . . b b 5 5 5 1 1 1 5 5 5 b b .
                    . . . c c 5 5 5 1 5 5 5 c c . .
                    . . . . b 5 5 5 1 5 5 5 b . . .
                    . . . . b b c 5 5 5 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 150, 0)
            Projectile_4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 5 5 5 c b b . . .
                    . . . . b 5 5 5 1 5 5 5 b . . .
                    . . . c c 5 5 5 1 5 5 5 c c . .
                    . . b b 5 5 5 1 1 1 5 5 5 b b .
                    . . d d 5 1 1 1 1 1 1 1 5 d d .
                    . . b b 5 5 5 1 1 1 5 5 5 b b .
                    . . . c c 5 5 5 1 5 5 5 c c . .
                    . . . . b 5 5 5 1 5 5 5 b . . .
                    . . . . b b c 5 5 5 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 150, 70)
            Projectile_4.setKind(SpriteKind.Projectile)
            scene.cameraShake(3, 100)
            music.play(music.createSoundEffect(WaveShape.Sine, 2000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        
        NextBUse = game.runtime() + 4000
        info.startCountdown(4)
    } else if (controller.player1.isPressed(ControllerButton.B)) {
        Projectile_4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 8 8 8 c b b . . .
                    . . . . b 8 8 5 1 5 8 8 b . . .
                    . . . c c 8 5 2 1 2 5 8 c c . .
                    . . b b 8 5 2 1 1 1 2 5 8 b b .
                    . . d d 8 1 1 1 1 1 1 1 8 d d .
                    . . b b 8 5 2 1 1 1 2 5 8 b b .
                    . . . c c 8 5 2 1 2 5 8 c c . .
                    . . . . b 8 8 5 1 5 8 8 b . . .
                    . . . . b b c 8 8 8 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 150, -70)
        Projectile_4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 8 8 8 c b b . . .
                    . . . . b 8 8 5 1 5 8 8 b . . .
                    . . . c c 8 5 2 1 2 5 8 c c . .
                    . . b b 8 5 2 1 1 1 2 5 8 b b .
                    . . d d 8 1 1 1 1 1 1 1 8 d d .
                    . . b b 8 5 2 1 1 1 2 5 8 b b .
                    . . . c c 8 5 2 1 2 5 8 c c . .
                    . . . . b 8 8 5 1 5 8 8 b . . .
                    . . . . b b c 8 8 8 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 150, 0)
        Projectile_4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 8 8 8 c b b . . .
                    . . . . b 8 8 5 1 5 8 8 b . . .
                    . . . c c 8 5 2 1 2 5 8 c c . .
                    . . b b 8 5 2 1 1 1 2 5 8 b b .
                    . . d d 8 1 1 1 1 1 1 1 8 d d .
                    . . b b 8 5 2 1 1 1 2 5 8 b b .
                    . . . c c 8 5 2 1 2 5 8 c c . .
                    . . . . b 8 8 5 1 5 8 8 b . . .
                    . . . . b b c 8 8 8 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 150, 70)
        scene.cameraShake(3, 100)
        music.play(music.createSoundEffect(WaveShape.Sine, 2000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        pause(50)
    }
    
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function on_player2_button_b_pressed() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life) < 30) {
        if (game.runtime() >= NextBUse_2) {
            Projectile_5 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 6 4 4 c b b . . .
                    . . . . b 6 6 6 1 4 4 4 b . . .
                    . . . c c 6 6 6 1 4 4 4 c c . .
                    . . b b 6 6 6 1 1 1 4 4 4 b b .
                    . . d d 4 1 1 1 1 1 1 1 4 d d .
                    . . b b 4 4 4 1 1 1 6 6 6 b b .
                    . . . c c 4 4 4 1 6 6 6 c c . .
                    . . . . b 4 4 4 1 6 6 6 b . . .
                    . . . . b b c 4 4 6 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 150, -70)
            Projectile_5 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 6 4 4 c b b . . .
                    . . . . b 6 6 6 1 4 4 4 b . . .
                    . . . c c 6 6 6 1 4 4 4 c c . .
                    . . b b 6 6 6 1 1 1 4 4 4 b b .
                    . . d d 4 1 1 1 1 1 1 1 4 d d .
                    . . b b 4 4 4 1 1 1 6 6 6 b b .
                    . . . c c 4 4 4 1 6 6 6 c c . .
                    . . . . b 4 4 4 1 6 6 6 b . . .
                    . . . . b b c 4 4 6 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 150, 0)
            Projectile_5 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 6 4 4 c b b . . .
                    . . . . b 6 6 6 1 4 4 4 b . . .
                    . . . c c 6 6 6 1 4 4 4 c c . .
                    . . b b 6 6 6 1 1 1 4 4 4 b b .
                    . . d d 4 1 1 1 1 1 1 1 4 d d .
                    . . b b 4 4 4 1 1 1 6 6 6 b b .
                    . . . c c 4 4 4 1 6 6 6 c c . .
                    . . . . b 4 4 4 1 6 6 6 b . . .
                    . . . . b b c 4 4 6 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 150, 70)
            Projectile_5.setKind(SpriteKind.Projectile2)
            scene.cameraShake(3, 100)
            music.play(music.createSoundEffect(WaveShape.Sine, 2000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        
        NextBUse_2 = game.runtime() + 4000
        info.startCountdown(4)
    } else if (controller.player2.isPressed(ControllerButton.B)) {
        Projectile_5 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 6 8 4 c b b . . .
                    . . . . b 6 6 6 1 4 4 4 b . . .
                    . . . c c 6 6 6 1 4 4 4 c c . .
                    . . b b 6 6 6 1 8 1 4 4 4 b b .
                    . . d d 8 1 1 8 8 8 1 1 8 d d .
                    . . b b 4 4 4 1 8 1 6 6 6 b b .
                    . . . c c 4 4 4 1 6 6 6 c c . .
                    . . . . b 4 4 4 1 6 6 6 b . . .
                    . . . . b b c 4 8 6 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 150, -70)
        Projectile_5 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 6 8 4 c b b . . .
                    . . . . b 6 6 6 1 4 4 4 b . . .
                    . . . c c 6 6 6 1 4 4 4 c c . .
                    . . b b 6 6 6 1 8 1 4 4 4 b b .
                    . . d d 8 1 1 8 8 8 1 1 8 d d .
                    . . b b 4 4 4 1 8 1 6 6 6 b b .
                    . . . c c 4 4 4 1 6 6 6 c c . .
                    . . . . b 4 4 4 1 6 6 6 b . . .
                    . . . . b b c 4 8 6 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 150, 0)
        Projectile_5 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . b d b c . . . . .
                    . . . . b b c 6 8 4 c b b . . .
                    . . . . b 6 6 6 1 4 4 4 b . . .
                    . . . c c 6 6 6 1 4 4 4 c c . .
                    . . b b 6 6 6 1 8 1 4 4 4 b b .
                    . . d d 8 1 1 8 8 8 1 1 8 d d .
                    . . b b 4 4 4 1 8 1 6 6 6 b b .
                    . . . c c 4 4 4 1 6 6 6 c c . .
                    . . . . b 4 4 4 1 6 6 6 b . . .
                    . . . . b b c 4 8 6 c b b . . .
                    . . . . . . c b d b c . . . . .
                    . . . . . . . b d b . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 150, 70)
        scene.cameraShake(3, 100)
        music.play(music.createSoundEffect(WaveShape.Sine, 2000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        pause(50)
    }
    
})
info.player1.onLifeZero(function on_player1_life_zero() {
    sprites.destroy(SkyStryker, effects.hearts, 100)
    SkyStryker.setStayInScreen(false)
    SkyStryker.x += 1000
    SkyStryker.setVelocity(0, 1000)
    if (!mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        game.gameOver(false)
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life) == 0 && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life) == 0) {
        game.gameOver(false)
    }
    
})
controller.combos.attachCombo("U+D L+R U+D", function on_combos_attach_combo() {
    
    LifeUp_Heart = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . b c c c b . . b c c c b . .
            . c 3 1 1 1 3 c c 3 1 1 1 3 c .
            b 1 3 1 1 1 3 3 3 3 1 1 1 3 1 b
            c 1 3 3 3 1 1 3 3 1 1 3 3 3 1 c
            c 1 1 1 3 c c 3 3 c c 3 1 1 1 c
            c 1 1 1 c 2 2 c c 2 2 c 1 1 1 c
            c 3 1 1 c 2 2 2 2 2 2 c 1 1 3 c
            c 3 3 3 3 c 2 2 2 2 c 3 3 3 3 c
            b 1 1 1 1 3 c 2 2 c 3 1 1 1 1 b
            . c 1 1 3 3 1 c c 1 3 3 1 1 c .
            . . b 3 3 1 1 3 3 1 1 3 3 b . .
            . . . c 1 1 1 3 3 1 1 1 c . . .
            . . . . b 1 1 3 3 1 1 b . . . .
            . . . . . c c 3 3 c c . . . . .
            . . . . . . b c c b . . . . . .
            `, SpriteKind.Food)
    LifeUp_Heart.setPosition(randint(30, 100), randint(30, 100))
})
sprites.onOverlap(SpriteKind.EnemyRammer, SpriteKind.Projectile2, function on_on_overlap3(sprite3: Sprite, otherSprite3: Sprite) {
    sprites.destroy(sprite3, effects.fire, 100)
    sprites.destroy(Projectile_2)
    info.player2.changeScoreBy(10)
    scene.cameraShake(4, 200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.EnemyRammer, SpriteKind.Projectile, function on_on_overlap4(sprite4: Sprite, otherSprite4: Sprite) {
    sprites.destroy(sprite4, effects.fire, 100)
    sprites.destroy(Projectile_1)
    info.player1.changeScoreBy(10)
    scene.cameraShake(4, 200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyRammer, function on_on_overlap5(sprite5: Sprite, otherSprite5: Sprite) {
    
    sprites.destroy(otherSprite5, effects.fire, 500)
    if (Is_Invincible == false) {
        if (sprite5 == SkyStryker) {
            info.player1.changeLifeBy(-1)
        } else {
            info.player2.changeLifeBy(-1)
        }
        
        scene.cameraShake(6, 200)
        if (info.life() >= 1) {
            music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
        }
        
        Is_Invincible = true
    }
    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life) < 30) {
        if (controller.player1.isPressed(ControllerButton.A)) {
            Projectile_1 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . 7 . . . . . . . . .
                    . . . . . . 7 7 . . . . . . . .
                    . . . . . . 7 7 7 . . . . . . .
                    . . . . 2 2 f f f f 7 . . . . .
                    . . . 2 4 4 f f f f 7 7 . . . .
                    . . 2 4 4 5 f f f f 7 7 7 . . .
                    . . . 2 4 4 f f f f 7 7 . . . .
                    . . . . 2 2 f f f f 7 . . . . .
                    . . . . . . 7 7 7 . . . . . . .
                    . . . . . . 7 7 . . . . . . . .
                    . . . . . . 7 . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 220, 0)
            Projectile_1.setKind(SpriteKind.Projectile)
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(50)
        }
        
    } else if (controller.player1.isPressed(ControllerButton.A)) {
        Projectile_7 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . 5 . . . . . . . . .
                    . . . . . . 5 5 . . . . . . . .
                    . . . . 2 2 5 5 5 . . . . . . .
                    . . . 2 4 4 f f f f f 5 . . . .
                    . . 2 4 4 5 f 9 9 9 f 5 5 5 . .
                    . . . 2 4 4 f f f f f 5 . . . .
                    . . . . 2 2 5 5 5 . . . . . . .
                    . . . . . . 5 5 . . . . . . . .
                    . . . . . . 5 . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, SkyStryker, 280, 0)
        Projectile_7.setKind(SpriteKind.Projectile)
        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(50)
    }
    
})
info.onCountdownEnd(function on_countdown_end() {
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossEnemy, function on_on_overlap6(sprite6: Sprite, otherSprite6: Sprite) {
    
    if (Is_Invincible == false) {
        if (sprite6 == SkyStryker) {
            info.player1.changeLifeBy(-1)
        } else {
            info.player2.changeLifeBy(-1)
        }
        
        scene.cameraShake(6, 200)
        if (info.life() >= 1) {
            music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
        }
        
        Is_Invincible = true
    }
    
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player2_button_a_pressed() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life) < 30) {
        if (controller.player2.isPressed(ControllerButton.A)) {
            Projectile_2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . 2 . . . . . . . . .
                    . . . . . . a 2 . . . . . . . .
                    . . . . . . a a 2 . . . . . . .
                    . . . . 9 9 f f f f 2 . . . . .
                    . . . 9 6 6 f f f f a 2 . . . .
                    . . 9 6 6 8 f f f f a a 2 . . .
                    . . . 9 6 6 f f f f a 2 . . . .
                    . . . . 9 9 f f f f 2 . . . . .
                    . . . . . . a a 2 . . . . . . .
                    . . . . . . a 2 . . . . . . . .
                    . . . . . . 2 . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 220, 0)
            Projectile_2.setKind(SpriteKind.Projectile2)
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(50)
        }
        
    } else if (controller.player2.isPressed(ControllerButton.A)) {
        Projectile_8 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . a . . . . . . . . . . .
                    . . . . a a . . . . . . . . . .
                    . . 9 9 a a a . . . . . . . . .
                    . 9 6 6 f f f f f a . . . . . .
                    9 6 6 8 f 7 7 7 f a a a . . . .
                    . 9 6 6 f f f f f a . . . . . .
                    . . 9 9 a a a . . . . . . . . .
                    . . . . a a . . . . . . . . . .
                    . . . . a . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, Executioner, 280, 0)
        Projectile_8.setKind(SpriteKind.Projectile2)
        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(50)
    }
    
})
controller.combos.attachCombo("UUDD LRLR A+B", function on_combos_attach_combo2() {
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.confetti, 200)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.confetti, 200)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.confetti, 200)
    info.player1.changeScoreBy(100)
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        info.player2.changeScoreBy(100)
    }
    
    info.player1.changeLifeBy(-1)
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        info.player2.changeLifeBy(-1)
    }
    
})
controller.combos.attachCombo("A+B URDL A+B", function on_combos_attach_combo3() {
    
    info.stopCountdown()
    info.player1.setLife(100)
    sprites.destroy(SkyStryker, effects.none, 100)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        ...cc..............................cc.....
        ..c55c..bbbb...bbbbb...bbbbb......c55c....
        .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
        b555555bbfffb111b777b111bfffb111b555555b..
        bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
        cb5555bcfff1111177711111fff11111cb5555bc..
        .c5bb5c1111f11171117111f111f11111c5bb5c...
        .cbbbbc11111111111111111111111111cbbbbc...
        ..b1111111111111111111111111111111711bb...
        ..b111111111111111111111111111111117bb7b..
        ..bb11111111111111111111111111111117b77b..
        .bb7b1711111111111111111111111111117777b..
        .b7777111111111111111111111111111171b7bb..
        .b77b71111111111111111111111111111111bb...
        .b7b1711111111111111111111111111111111b...
        .bb11171111111111111111111111111111111b...
        ..b1111111111111111111111111111111f111bb..
        ..b11111111111111111111111111111111f1bfb..
        ..bb1111111111111111111111111111111fbffb..
        .bbfb1f1111111111111111111111111111ffffb..
        .bffff1111111111111111111111111111f1bfbb..
        .bffbf1111111111111111111111111111111bb...
        .bfb1f11111111111111111111111111111111b...
        .bb111f1111111111111111111111111111111b...
        ..b11111111111111111111111111111117111bb..
        ..b1111111111111111111111111111111171b7b..
        ..bb11111111111111111111111111111117b77b..
        .bb7b1711111111111111111111111111117777b..
        .b7777111111111111111111111111111171b7bb..
        .b77b71111111111111111111111111111111bb...
        .b7bb111111111111111111111111111111111b...
        .bbb1111111111111111111111111111111111b...
        ..bcc111111111111111111111111111111cc1b...
        ..c55c1117111f111f11171117111f1111c55cb...
        .cb55bc7711111fff1111177711111fffcb55bc...
        b555555b11111bfb11111b7b11111bfbb555555b..
        bb5555bbb111bfffb111b777b111bfffbb5555bb..
        cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
        .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
        .cbbbbc..........................cbbbbc...
        ..........................................
        ..........................................
        `)
    if (!mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        game.showLongText("SUPER STRYKER PROTOCOL ENGAGED", DialogLayout.Center)
    }
    
    SkyStryker = sprites.create(img`
            ..................
            .....5............
            ....5f5...........
            ...5f2f5..........
            ...ff22f5.........
            ...5f222f55.......
            ....5ffffff555....
            ...5ffffffffff55..
            ...ff2222ff99fff55
            ...5ffffffffff55..
            ....5ffffff555....
            ...5f222f55.......
            ...ff22f5.........
            ...5f2f5..........
            ....5f5...........
            .....5............
            ..................
            `, SpriteKind.Player)
    SkyStryker.setPosition(30, 40)
    SkyStryker.setStayInScreen(true)
    controller.player1.moveSprite(SkyStryker, 120, 120)
    animation.runImageAnimation(SkyStryker, [img`
                ...................
                ......5............
                ..22.5f5...........
                .2445f2f5..........
                2445ff22f5.........
                .2445f222f55.......
                ..22.5ffffff555....
                .2445ffffffffff55..
                2445ff2222ff99fff55
                .2445ffffffffff55..
                ..22.5ffffff555....
                .2445f222f55.......
                2445ff22f5.........
                .2445f2f5..........
                ..22.5f5...........
                ......5............
                ...................
                `, img`
                ...................
                ......5............
                ...2.5f5...........
                ..245f2f5..........
                .245ff22f5.........
                ..245f222f55.......
                ...2.5ffffff555....
                ..245ffffffffff55..
                .245ff2222ff99fff55
                ..245ffffffffff55..
                ...2.5ffffff555....
                ..245f222f55.......
                .245ff22f5.........
                ..245f2f5..........
                ...2.5f5...........
                ......5............
                ...................
                `, img`
                ...................
                ......5............
                .....5f5...........
                ...25f2f5..........
                ..24ff22f5.........
                ...25f222f55.......
                .....5ffffff555....
                ...25ffffffffff55..
                ..24ff2222ff99fff55
                ...25ffffffffff55..
                .....5ffffff555....
                ...25f222f55.......
                ..24ff22f5.........
                ...25f2f5..........
                .....5f5...........
                ......5............
                ...................
                `, img`
                ...................
                ......5............
                .....5f5...........
                ....5f2f5..........
                ...4ff22f5.........
                ....5f222f55.......
                .....5ffffff555....
                ....5ffffffffff55..
                ...4ff2222ff99fff55
                ....5ffffffffff55..
                .....5ffffff555....
                ....5f222f55.......
                ...4ff22f5.........
                ....5f2f5..........
                .....5f5...........
                ......5............
                ...................
                `, img`
                ...................
                ......5............
                .....5f5...........
                ...25f2f5..........
                ..24ff22f5.........
                ...25f222f55.......
                .....5ffffff555....
                ...25ffffffffff55..
                ..24ff2222ff99fff55
                ...25ffffffffff55..
                .....5ffffff555....
                ...25f222f55.......
                ..24ff22f5.........
                ...25f2f5..........
                .....5f5...........
                ......5............
                ...................
                `, img`
                ...................
                ......5............
                ...2.5f5...........
                ..245f2f5..........
                .245ff22f5.........
                ..245f222f55.......
                ...2.5ffffff555....
                ..245ffffffffff55..
                .245ff2222ff99fff55
                ..245ffffffffff55..
                ...2.5ffffff555....
                ..245f222f55.......
                .245ff22f5.........
                ..245f2f5..........
                ...2.5f5...........
                ......5............
                ...................
                `], 100, true)
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        info.player2.setLife(100)
        sprites.destroy(Executioner)
        game.showLongText("SUPER STRYKER AND HYPER EXECUTIONER PROTOCOLS ENGAGED", DialogLayout.Center)
        Executioner = sprites.create(img`
                ..................
                .....9............
                ....9f9...........
                ...9faf9..........
                ...ffaaf9.........
                ...9faaaf99.......
                ....9ffffff999....
                ...9ffffffffff99..
                ...ffaaaaff77fff99
                ...9ffffffffff99..
                ....9ffffff999....
                ...9faaaf99.......
                ...ffaaf9.........
                ...9faf9..........
                ....9f9...........
                .....9............
                ..................
                `, SpriteKind.Player)
        Executioner.setPosition(30, 60)
        Executioner.setStayInScreen(true)
        controller.player2.moveSprite(Executioner, 120, 120)
        animation.runImageAnimation(Executioner, [img`
                    ...................
                    ......9............
                    ..99.9f9...........
                    .9669faf9..........
                    9668ffaaf9.........
                    .9669faaaf99.......
                    ..99.9ffffff999....
                    .9669ffffffffff99..
                    9668ffaaaaff77fff99
                    .9669ffffffffff99..
                    ..99.9ffffff999....
                    .9669faaaf99.......
                    9668ffaaf9.........
                    .9669faf9..........
                    ..99.9f9...........
                    ......9............
                    ...................
                    `, img`
                    ...................
                    ......9............
                    ...9.9f9...........
                    ..969faf9..........
                    .968ffaaf9.........
                    ..969faaaf99.......
                    ...9.9ffffff999....
                    ..969ffffffffff99..
                    .968ffaaaaff77fff99
                    ..969ffffffffff99..
                    ...9.9ffffff999....
                    ..969faaaf99.......
                    .968ffaaf9.........
                    ..969faf9..........
                    ...9.9f9...........
                    ......9............
                    ...................
                    `, img`
                    ...................
                    ......9............
                    .....9f9...........
                    ...99faf9..........
                    ..96ffaaf9.........
                    ...99faaaf99.......
                    .....9ffffff999....
                    ...99ffffffffff99..
                    ..96ffaaaaff77fff99
                    ...99ffffffffff99..
                    .....9ffffff999....
                    ...99faaaf99.......
                    ..96ffaaf9.........
                    ...99faf9..........
                    .....9f9...........
                    ......9............
                    ...................
                    `, img`
                    ...................
                    ......9............
                    .....9f9...........
                    ....9faf9..........
                    ...6ffaaf9.........
                    ....9faaaf99.......
                    .....9ffffff999....
                    ....9ffffffffff99..
                    ...6ffaaaaff77fff99
                    ....9ffffffffff99..
                    .....9ffffff999....
                    ....9faaaf99.......
                    ...6ffaaf9.........
                    ....9faf9..........
                    .....9f9...........
                    ......9............
                    ...................
                    `, img`
                    ...................
                    ......9............
                    .....9f9...........
                    ...99faf9..........
                    ..96ffaaf9.........
                    ...99faaaf99.......
                    .....9ffffff999....
                    ...99ffffffffff99..
                    ..96ffaaaaff77fff99
                    ...99ffffffffff99..
                    .....9ffffff999....
                    ...99faaaf99.......
                    ..96ffaaf9.........
                    ...99faf9..........
                    .....9f9...........
                    ......9............
                    ...................
                    `, img`
                    ...................
                    ......9............
                    ...9.9f9...........
                    ..969faf9..........
                    .968ffaaf9.........
                    ..969faaaf99.......
                    ...9.9ffffff999....
                    ..969ffffffffff99..
                    .968ffaaaaff77fff99
                    ..969ffffffffff99..
                    ...9.9ffffff999....
                    ..969faaaf99.......
                    .968ffaaf9.........
                    ..969faf9..........
                    ...9.9f9...........
                    ......9............
                    ...................
                    `], 100, true)
    }
    
})
info.player2.onLifeZero(function on_player2_life_zero() {
    sprites.destroy(Executioner, effects.hearts, 100)
    Executioner.setStayInScreen(false)
    Executioner.x += 1000
    Executioner.setVelocity(0, 1000)
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life) == 0 && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life) == 0) {
        game.gameOver(false)
    }
    
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.BossEnemy, function on_on_overlap7(sprite7: Sprite, otherSprite7: Sprite) {
    
    sprites.destroy(Projectile_1, effects.fire, 100)
    BossHealth += -1
    scene.cameraShake(5, 200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    if (BossHealth == 0) {
        Lord_of_the_Red_Star.setPosition(85, 50)
        Lord_of_the_Red_Star.setVelocity(0, 0)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        sprites.destroy(Lord_of_the_Red_Star, effects.fire, 2000)
        scene.cameraShake(8, 2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        pause(2300)
        info.player1.setScore(100000)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.setScore(100000)
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function on_on_overlap8(sprite8: Sprite, otherSprite8: Sprite) {
    
    sprites.destroy(otherSprite8, effects.fire, 100)
    if (Is_Invincible == false) {
        if (sprite8 == SkyStryker) {
            info.player1.changeLifeBy(-1)
        } else {
            info.player2.changeLifeBy(-1)
        }
        
        scene.cameraShake(6, 200)
        if (info.life() >= 1) {
            music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
        }
        
        Is_Invincible = true
    }
    
})
controller.player2.onEvent(ControllerEvent.Disconnected, function on_player2_disconnected() {
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 0)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Enemy, function on_on_overlap9(sprite9: Sprite, otherSprite9: Sprite) {
    sprites.destroy(otherSprite9, effects.coolRadial, 100)
    sprites.destroy(Projectile_2)
    info.player2.changeScoreBy(30)
    scene.cameraShake(4, 200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
controller.player2.onEvent(ControllerEvent.Connected, function on_player2_connected() {
    
    Executioner = sprites.create(img`
            ..................
            .....2............
            ....2f2...........
            ...2faf2..........
            ...ffaaf2.........
            ...2faaaf22.......
            ....2ffffff222....
            ...2ffffffffff22..
            ...ffaaaafffafff22
            ...2ffffffffff22..
            ....2ffffff222....
            ...2faaaf22.......
            ...ffaaf2.........
            ...2faf2..........
            ....2f2...........
            .....2............
            ..................
            `, SpriteKind.Player)
    animation.runImageAnimation(Executioner, [img`
                ..................
                .....2............
                ....2f2...........
                .992faf2..........
                966ffaaf2.........
                .992faaaf22.......
                ....2ffffff222....
                .992ffffffffff22..
                966ffaaaafffafff22
                .992ffffffffff22..
                ....2ffffff222....
                .992faaaf22.......
                966ffaaf2.........
                .992faf2..........
                ....2f2...........
                .....2............
                ..................
                `, img`
                ..................
                .....2............
                ....2f2...........
                ..92faf2..........
                .96ffaaf2.........
                ..92faaaf22.......
                ....2ffffff222....
                ..92ffffffffff22..
                .96ffaaaafffafff22
                ..92ffffffffff22..
                ....2ffffff222....
                ..92faaaf22.......
                .96ffaaf2.........
                ..92faf2..........
                ....2f2...........
                .....2............
                ..................
                `, img`
                ..................
                .....2............
                ....2f2...........
                ...2faf2..........
                ..9ffaaf2.........
                ...2faaaf22.......
                ....2ffffff222....
                ...2ffffffffff22..
                ..9ffaaaafffafff22
                ...2ffffffffff22..
                ....2ffffff222....
                ...2faaaf22.......
                ..9ffaaf2.........
                ...2faf2..........
                ....2f2...........
                .....2............
                ..................
                `, img`
                ..................
                .....2............
                ....2f2...........
                ..92faf2..........
                .96ffaaf2.........
                ..92faaaf22.......
                ....2ffffff222....
                ..92ffffffffff22..
                .96ffaaaafffafff22
                ..92ffffffffff22..
                ....2ffffff222....
                ..92faaaf22.......
                .96ffaaf2.........
                ..92faf2..........
                ....2f2...........
                .....2............
                ..................
                `], 100, true)
    controller.player2.moveSprite(Executioner)
    Executioner.setPosition(30, 60)
    Executioner.setStayInScreen(true)
    info.player2.setLife(3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap10(sprite10: Sprite, otherSprite10: Sprite) {
    sprites.destroy(otherSprite10, effects.coolRadial, 100)
    sprites.destroy(Projectile_1)
    info.player1.changeScoreBy(30)
    scene.cameraShake(4, 200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap11(sprite11: Sprite, otherSprite11: Sprite) {
    sprites.destroy(otherSprite11, effects.hearts, 500)
    if (sprite11 == SkyStryker) {
        info.player1.changeLifeBy(1)
    } else {
        info.player2.changeLifeBy(1)
    }
    
    music.play(music.stringPlayable("F G A F - - - - ", 400), music.PlaybackMode.UntilDone)
})
let Vilgaxian_Warrior_Ship : Sprite = null
let Projectile_3 : Sprite = null
let Highbreed_Command_Ship : Sprite = null
let Projectile_8 : Sprite = null
let Projectile_7 : Sprite = null
let Projectile_2 : Sprite = null
let LifeUp_Heart : Sprite = null
let Executioner : Sprite = null
let Projectile_5 : Sprite = null
let NextBUse_2 = 0
let Projectile_4 : Sprite = null
let Lord_of_the_Red_Star : Sprite = null
let Projectile_1 : Sprite = null
let BossHealth = 0
let Is_Invincible = false
let NextBUse = 0
let SkyStryker : Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("PRESS A TO START")
SkyStryker = sprites.create(img`
        ..................
        .....7............
        ....7f7...........
        ...7f7f7..........
        ...ff77f7.........
        ...7f777f77.......
        ....7ffffff777....
        ...7ffffffffff77..
        ...ff7777fff7fff77
        ...7ffffffffff77..
        ....7ffffff777....
        ...7f777f77.......
        ...ff77f7.........
        ...7f7f7..........
        ....7f7...........
        .....7............
        ..................
        `, SpriteKind.Player)
animation.runImageAnimation(SkyStryker, [img`
            ..................
            .....7............
            ....7f7...........
            .227f7f7..........
            244ff77f7.........
            .227f777f77.......
            ....7ffffff777....
            .227ffffffffff77..
            244ff7777fff7fff77
            .227ffffffffff77..
            ....7ffffff777....
            .227f777f77.......
            244ff77f7.........
            .227f7f7..........
            ....7f7...........
            .....7............
            ..................
            `, img`
            ..................
            .....7............
            ....7f7...........
            ..27f7f7..........
            .24ff77f7.........
            ..27f777f77.......
            ....7ffffff777....
            ..27ffffffffff77..
            .24ff7777fff7fff77
            ..27ffffffffff77..
            ....7ffffff777....
            ..27f777f77.......
            .24ff77f7.........
            ..27f7f7..........
            ....7f7...........
            .....7............
            ..................
            `, img`
            ..................
            .....7............
            ....7f7...........
            ...7f7f7..........
            ..2ff77f7.........
            ...7f777f77.......
            ....7ffffff777....
            ...7ffffffffff77..
            ..2ff7777fff7fff77
            ...7ffffffffff77..
            ....7ffffff777....
            ...7f777f77.......
            ..2ff77f7.........
            ...7f7f7..........
            ....7f7...........
            .....7............
            ..................
            `, img`
            ..................
            .....7............
            ....7f7...........
            ..27f7f7..........
            .24ff77f7.........
            ..27f777f77.......
            ....7ffffff777....
            ..27ffffffffff77..
            .24ff7777fff7fff77
            ..27ffffffffff77..
            ....7ffffff777....
            ..27f777f77.......
            .24ff77f7.........
            ..27f7f7..........
            ....7f7...........
            .....7............
            ..................
            `], 100, true)
info.player1.setLife(3)
controller.player1.moveSprite(SkyStryker)
SkyStryker.setPosition(30, 40)
SkyStryker.setStayInScreen(true)
NextBUse = 0
let BossSpawned = false
Is_Invincible = false
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffff
    ffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffff5fffffffffffffffffffff555fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff5ffffffffffffffffffffff5fffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffff5fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffff5fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff555ffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff555ffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff555fffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffff555ffffffffffffff555ffffffffffff
    fffffffffffffffffffffffffffffff5ffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffff555ffffffffffffff555ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffff555ffffffffffffff555ffffffffffff
    ffffffffffff5fffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffff5fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff555ffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff555fffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff555fffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669fffffffffffffffff555ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69ffffffffffffffffff555ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6fffffffffffffffffff555ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866ffffffffffffffffffffffffffffffffffffffffff5ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff5ffffffffffff5fffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff555fffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffff
    fffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogFrame(img`
    ...cc..............................cc.....
    ..c55c..bbbb...bbbbb...bbbbb......c55c....
    .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
    b555555bbfffb111b777b111bfffb111b555555b..
    bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
    cb5555bcfff1111177711111fff11111cb5555bc..
    .c5bb5c1111f11171117111f111f11111c5bb5c...
    .cbbbbc11111111111111111111111111cbbbbc...
    ..b1111111111111111111111111111111711bb...
    ..b111111111111111111111111111111117bb7b..
    ..bb11111111111111111111111111111117b77b..
    .bb7b1711111111111111111111111111117777b..
    .b7777111111111111111111111111111171b7bb..
    .b77b71111111111111111111111111111111bb...
    .b7b1711111111111111111111111111111111b...
    .bb11171111111111111111111111111111111b...
    ..b1111111111111111111111111111111f111bb..
    ..b11111111111111111111111111111111f1bfb..
    ..bb1111111111111111111111111111111fbffb..
    .bbfb1f1111111111111111111111111111ffffb..
    .bffff1111111111111111111111111111f1bfbb..
    .bffbf1111111111111111111111111111111bb...
    .bfb1f11111111111111111111111111111111b...
    .bb111f1111111111111111111111111111111b...
    ..b11111111111111111111111111111117111bb..
    ..b1111111111111111111111111111111171b7b..
    ..bb11111111111111111111111111111117b77b..
    .bb7b1711111111111111111111111111117777b..
    .b7777111111111111111111111111111171b7bb..
    .b77b71111111111111111111111111111111bb...
    .b7bb111111111111111111111111111111111b...
    .bbb1111111111111111111111111111111111b...
    ..bcc111111111111111111111111111111cc1b...
    ..c55c1117111f111f11171117111f1111c55cb...
    .cb55bc7711111fff1111177711111fffcb55bc...
    b555555b11111bfb11111b7b11111bfbb555555b..
    bb5555bbb111bfffb111b777b111bfffbb5555bb..
    cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
    .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
    .cbbbbc..........................cbbbbc...
    ..........................................
    ..........................................
    `)
game.setDialogTextColor(2)
game.showLongText("THE ALIENS ARE HERE!!!", DialogLayout.Bottom)
game.showLongText("PREPARE TO COUNTER ATTACK!", DialogLayout.Bottom)
music.play(music.stringPlayable("G A B A B C5 - - ", 300), music.PlaybackMode.UntilDone)
let Level = 1
let Level_Up_1 = false
let Level_Up_2 = false
let Level_Up_3 = false
BossHealth = 25
game.onUpdateInterval(4000, function on_update_interval() {
    
    if (Level == 4) {
        Highbreed_Command_Ship = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . 2 2 5 a a a a a a
                . . . . . . . . . . . . a a a .
                . . . . . . . . . . . a a a . .
                . . . . . . 2 2 5 6 a a a . . .
                . . . . . . . . 6 a a a a 2 2 .
                . . . . . . . a a a a a 2 2 2 .
                . . . a a a a a a 2 2 a . . . .
                5 a a a 6 6 a a 2 2 a a . . . .
                . . . a a a a a a 2 2 a . . . .
                . . . . . . . a a a a a 2 2 2 .
                . . . . . . . . 6 a a a a 2 2 .
                . . . . . . 2 2 5 6 a a a . . .
                . . . . . . . . . . . a a a . .
                . . . . . . . . . . . . a a a .
                . . . . . . . . 2 2 5 a a a a a
                `, SpriteKind.Enemy)
        Highbreed_Command_Ship.setPosition(150, randint(10, 110))
        Highbreed_Command_Ship.setBounceOnWall(true)
        Highbreed_Command_Ship.setVelocity(0, 70)
    }
    
})
game.onUpdateInterval(4000, function on_update_interval2() {
    
    if (Level == 3) {
        Highbreed_Command_Ship = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . 2 2 5 7 7 7 7 7 7
                . . . . . . . . . . . . 7 7 7 .
                . . . . . . . . . . . 7 7 7 . .
                . . . . . . 2 2 5 8 7 7 7 . . .
                . . . . . . . . 8 7 7 7 7 2 2 .
                . . . . . . . 7 7 7 7 7 2 2 2 .
                . . . 7 7 7 7 7 7 2 2 7 . . . .
                5 7 7 7 8 8 7 7 2 2 7 7 . . . .
                . . . 7 7 7 7 7 7 2 2 7 . . . .
                . . . . . . . 7 7 7 7 7 2 2 2 .
                . . . . . . . . 8 7 7 7 7 2 2 .
                . . . . . . 2 2 5 8 7 7 7 . . .
                . . . . . . . . . . . 7 7 7 . .
                . . . . . . . . . . . . 7 7 7 .
                . . . . . . . . 2 2 5 7 7 7 7 7
                `, SpriteKind.Enemy)
        Highbreed_Command_Ship.setPosition(150, randint(10, 110))
        Highbreed_Command_Ship.setBounceOnWall(true)
        Highbreed_Command_Ship.setVelocity(0, 60)
    }
    
})
game.onUpdateInterval(1500, function on_update_interval3() {
    
    if (Level == 4) {
        for (let index of sprites.allOfKind(SpriteKind.Enemy)) {
            Projectile_3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . a . . . . . .
                    . . . . . . . . a a 2 2 . . . .
                    . . . . . . a f f f 4 4 2 . . .
                    . . . . . a a f f f 5 4 4 2 . .
                    . . . . . . a f f f 4 4 2 . . .
                    . . . . . . . . a a 2 2 . . . .
                    . . . . . . . . . a . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, index, -100, 0)
            Projectile_3.setKind(SpriteKind.EnemyProjectile)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        }
    }
    
})
forever(function on_forever() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 900 && Level_Up_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888851588888888888888888888888888888888888851588888888888888888888888888888
            8888888888888888888888888888888888888888888888888888885158888888888588888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888588888
            8888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
            8888888888888888888888885888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888851115888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888818888888888888888888888888888888888885888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888
            8888888888888858888888888888885111588888888888888888888888888888888851588888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888555888888888888888888888888888888888885888888888888888888888888888888851115888888888888888888888888888888888888888888885888888888
            8888888888888888888888888888888585888888888888888888888888888888888888888888888888888588888888888888885558888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888515888888888888888888888888888888888858888888888588888888888888888888888888888888888888888888888888888888888888888888888888888851588888888888
            8888888888888888888858888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888888888888888888888888888888888888885111588888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888
            8888888888888888888888888888888888885888888888888888888555888888888888888888888888888885888888888888888888888888888881888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888585888888888888888888888888888881888888888858888888888888888551158888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888511158888888888888888888888888855588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888888888888888888888888858588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888
            8888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888
            8888888888888888888885888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888881888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888511158888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888855588888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888851588888888888888888888888888888888888888885888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888851588888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888511158888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
            8888888888888888888888888888888888888888888888888855588888888888858888888888885888888888888885888888888888888888888888888888888888888888888888888888888888588888
            8888888888888888888588888888888888888888888888888858588888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888188888
            8888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888851115888
            8888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888888888888888888888688888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888866888888888888858888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888666688888888888888888888888888888888888866668888888888888888888888888888888888886666888888888888888888888888888888888888866688888888888888888888888
            8888888888866666888888888888888888888888888888888886666688888888888888888888888888888888888666668888888888888888888888888888888888866666888888888888888888888888
            8888888888888666888888888888888888888888888888888888866688888888888888888888888888888888888886668888888888888888888888888888888888888866888888888888888888888888
            8888888888886666688888888888888888888885888888888888666668888888888888888888888888888888888866666888888888888888888888888888888888886666688888888588888888888888
            8888888888886666666888888888888888888851588888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888
            8888888888866666688888888888888888888885888888888886666668888888888888888888588888888888888666666888888885888888888888858888888888866666688888888888888888888888
            8888888888666666668888888888888888888888888888888666666666888888888888888888888888888888886666666688888888888888888888888888888886666666668888888888888888888888
            8888888886866666666888888888888888888888888888888886666666688888888888888888888888888888888666666668888888888888888888888888888888866666666888888888888888885888
            8888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888888888888888666666688888888888888888888888
            8888888888886666668888886888888888888888888888888888666666888888668888888888888888888888888866666688888868888888888888888888888888886666668888886888888888888888
            8888888888666666666888886888888888888888888888888866666666688888668888888888888888888888886666666668888868888888888888888888888888666666666888886888888888888888
            8885888888666666666688866888888888888888888888888666666666668886668888888888888888888888886666666666888668888888888888888888888886666666666688866888888888888888
            8888888886666666668888886688888888888888888888866666666666888888668888888888888888888886666666666688888866888888888888888888888666666666668888886688888888888888
            8888888666666666668888866888888888888888888888888666666666888886668888888888888888888888886666666688888668888888888888888888888886666666668888866888888888888888
            8888888886666666888888666688888888888888888888888666666688888866668888888888888888888888886666668888886666888888888888888888888886666666888888666688888888888888
            8888888886666666666886666668888888888888888888886666666666688666666888888888888888888888666666666668866666668888888888888888888866666666666886666668888888888888
            8888888666666666666688866888888888886888888888888866666666668886668888888888688888888888886666666666888668888888888868888888888888666666666688866888888888886888
            8888888888666666666886666668888888886888888888886666666666688666666888888888688888888888666666666668866666668888888868888888888866666666666886666668888888886888
            8888888666666666666866666666888888866688888688866666666666686666666688888886668888868886666666666668666666668888888666888886888666666666666866666666888888866688
            8886888666666666666666666688888888886688888668888866666666666666668888888888668888866888886666666666666666888888888866888886688888666666666666666688888888886688
            8886688888666666666666666666888888866888886688886666666666666666666688888886688888668888666666666666666666668888888668888866888866666666666666666666888888866888
            8866888666666666666666666666688888666688888668866666666666666666666668888866668888866886666666666666666666666888886666888886688666666666666666666666688888666688
            8886688666666666666666666668888888866668886666666666666666666666666888888886666888666666666666666666666666668888888666688866666666666666666666666668888888866668
            8866666666666666666666666666688888666688888666666666666666666666666668888866668888866666666666666666666666666888886666888886666666666666666666666666688888666688
            8886666666666666666666666666668886666668888666666666666666666666666666888666666888866666666666666666666666666688866666688886666666666666666666666666668886666668
            8886666666666666666666666666888888666688886666666666666666666666666688888866668888666666666666666666666666668888886666888866666666666666666666666666888888666688
            8866666666666666666666666666668866666668866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666668
            8666666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666668866666666886666666666666666666666666666886666666688666666666666666666666666666688666666666866666666666666666666666666668866666666
            6666666666666666666666666666666866666666666666666666666666666666666666686666666666666666666666666666666666666668666666666666666666666666666666666666666866666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666eeeee66666666eee6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeee666666666666666666666666
            666666666eeeeeeeeeeeeeeeeeeee666eeeeeeee6666666666666666eeeee6666666666666eee666666666eeeeeeeeeee6666eeeeeee6666ee66eeeee666666eeeeeeeeeee6666666eeeeeeeeee66666
            666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeee666
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THE ALIENS HAVE LANDED ON EARTH!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        Level = 3
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_2 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 910 && Level_Up_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888851588888888888888888888888888888888888851588888888888888888888888888888
            8888888888888888888888888888888888888888888888888888885158888888888588888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888588888
            8888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
            8888888888888888888888885888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888851115888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888818888888888888888888888888888888888885888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888
            8888888888888858888888888888885111588888888888888888888888888888888851588888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888555888888888888888888888888888888888885888888888888888888888888888888851115888888888888888888888888888888888888888888885888888888
            8888888888888888888888888888888585888888888888888888888888888888888888888888888888888588888888888888885558888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888515888888888888888888888888888888888858888888888588888888888888888888888888888888888888888888888888888888888888888888888888888851588888888888
            8888888888888888888858888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888888888888888888888888888888888888885111588888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888
            8888888888888888888888888888888888885888888888888888888555888888888888888888888888888885888888888888888888888888888881888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888585888888888888888888888888888881888888888858888888888888888551158888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888511158888888888888888888888888855588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888888888888888888888888858588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888
            8888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888
            8888888888888888888885888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888881888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888511158888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888855588888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888851588888888888888888888888888888888888888885888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888851588888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888511158888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
            8888888888888888888888888888888888888888888888888855588888888888858888888888885888888888888885888888888888888888888888888888888888888888888888888888888888588888
            8888888888888888888588888888888888888888888888888858588888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888188888
            8888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888851115888
            8888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888888888888888888888688888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888866888888888888858888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888666688888888888888888888888888888888888866668888888888888888888888888888888888886666888888888888888888888888888888888888866688888888888888888888888
            8888888888866666888888888888888888888888888888888886666688888888888888888888888888888888888666668888888888888888888888888888888888866666888888888888888888888888
            8888888888888666888888888888888888888888888888888888866688888888888888888888888888888888888886668888888888888888888888888888888888888866888888888888888888888888
            8888888888886666688888888888888888888885888888888888666668888888888888888888888888888888888866666888888888888888888888888888888888886666688888888588888888888888
            8888888888886666666888888888888888888851588888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888
            8888888888866666688888888888888888888885888888888886666668888888888888888888588888888888888666666888888885888888888888858888888888866666688888888888888888888888
            8888888888666666668888888888888888888888888888888666666666888888888888888888888888888888886666666688888888888888888888888888888886666666668888888888888888888888
            8888888886866666666888888888888888888888888888888886666666688888888888888888888888888888888666666668888888888888888888888888888888866666666888888888888888885888
            8888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888888888888888666666688888888888888888888888
            8888888888886666668888886888888888888888888888888888666666888888668888888888888888888888888866666688888868888888888888888888888888886666668888886888888888888888
            8888888888666666666888886888888888888888888888888866666666688888668888888888888888888888886666666668888868888888888888888888888888666666666888886888888888888888
            8885888888666666666688866888888888888888888888888666666666668886668888888888888888888888886666666666888668888888888888888888888886666666666688866888888888888888
            8888888886666666668888886688888888888888888888866666666666888888668888888888888888888886666666666688888866888888888888888888888666666666668888886688888888888888
            8888888666666666668888866888888888888888888888888666666666888886668888888888888888888888886666666688888668888888888888888888888886666666668888866888888888888888
            8888888886666666888888666688888888888888888888888666666688888866668888888888888888888888886666668888886666888888888888888888888886666666888888666688888888888888
            8888888886666666666886666668888888888888888888886666666666688666666888888888888888888888666666666668866666668888888888888888888866666666666886666668888888888888
            8888888666666666666688866888888888886888888888888866666666668886668888888888688888888888886666666666888668888888888868888888888888666666666688866888888888886888
            8888888888666666666886666668888888886888888888886666666666688666666888888888688888888888666666666668866666668888888868888888888866666666666886666668888888886888
            8888888666666666666866666666888888866688888688866666666666686666666688888886668888868886666666666668666666668888888666888886888666666666666866666666888888866688
            8886888666666666666666666688888888886688888668888866666666666666668888888888668888866888886666666666666666888888888866888886688888666666666666666688888888886688
            8886688888666666666666666666888888866888886688886666666666666666666688888886688888668888666666666666666666668888888668888866888866666666666666666666888888866888
            8866888666666666666666666666688888666688888668866666666666666666666668888866668888866886666666666666666666666888886666888886688666666666666666666666688888666688
            8886688666666666666666666668888888866668886666666666666666666666666888888886666888666666666666666666666666668888888666688866666666666666666666666668888888866668
            8866666666666666666666666666688888666688888666666666666666666666666668888866668888866666666666666666666666666888886666888886666666666666666666666666688888666688
            8886666666666666666666666666668886666668888666666666666666666666666666888666666888866666666666666666666666666688866666688886666666666666666666666666668886666668
            8886666666666666666666666666888888666688886666666666666666666666666688888866668888666666666666666666666666668888886666888866666666666666666666666666888888666688
            8866666666666666666666666666668866666668866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666668
            8666666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666668866666666886666666666666666666666666666886666666688666666666666666666666666666688666666666866666666666666666666666666668866666666
            6666666666666666666666666666666866666666666666666666666666666666666666686666666666666666666666666666666666666668666666666666666666666666666666666666666866666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666eeeee66666666eee6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeee666666666666666666666666
            666666666eeeeeeeeeeeeeeeeeeee666eeeeeeee6666666666666666eeeee6666666666666eee666666666eeeeeeeeeee6666eeeeeee6666ee66eeeee666666eeeeeeeeeee6666666eeeeeeeeee66666
            666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeee666
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THE ALIENS HAVE LANDED ON EARTH!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        Level = 3
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_2 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 920 && Level_Up_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888851588888888888888888888888888888888888851588888888888888888888888888888
            8888888888888888888888888888888888888888888888888888885158888888888588888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888588888
            8888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
            8888888888888888888888885888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888851115888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888818888888888888888888888888888888888885888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888
            8888888888888858888888888888885111588888888888888888888888888888888851588888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888555888888888888888888888888888888888885888888888888888888888888888888851115888888888888888888888888888888888888888888885888888888
            8888888888888888888888888888888585888888888888888888888888888888888888888888888888888588888888888888885558888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888515888888888888888888888888888888888858888888888588888888888888888888888888888888888888888888888888888888888888888888888888888851588888888888
            8888888888888888888858888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888888888888888888888888888888888888885111588888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888
            8888888888888888888888888888888888885888888888888888888555888888888888888888888888888885888888888888888888888888888881888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888585888888888888888888888888888881888888888858888888888888888551158888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888511158888888888888888888888888855588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888888888888888888888888858588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888
            8888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888
            8888888888888888888885888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888881888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888511158888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888855588888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888851588888888888888888888888888888888888888885888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888851588888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888511158888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
            8888888888888888888888888888888888888888888888888855588888888888858888888888885888888888888885888888888888888888888888888888888888888888888888888888888888588888
            8888888888888888888588888888888888888888888888888858588888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888188888
            8888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888851115888
            8888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888888888888888888888688888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888866888888888888858888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888666688888888888888888888888888888888888866668888888888888888888888888888888888886666888888888888888888888888888888888888866688888888888888888888888
            8888888888866666888888888888888888888888888888888886666688888888888888888888888888888888888666668888888888888888888888888888888888866666888888888888888888888888
            8888888888888666888888888888888888888888888888888888866688888888888888888888888888888888888886668888888888888888888888888888888888888866888888888888888888888888
            8888888888886666688888888888888888888885888888888888666668888888888888888888888888888888888866666888888888888888888888888888888888886666688888888588888888888888
            8888888888886666666888888888888888888851588888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888
            8888888888866666688888888888888888888885888888888886666668888888888888888888588888888888888666666888888885888888888888858888888888866666688888888888888888888888
            8888888888666666668888888888888888888888888888888666666666888888888888888888888888888888886666666688888888888888888888888888888886666666668888888888888888888888
            8888888886866666666888888888888888888888888888888886666666688888888888888888888888888888888666666668888888888888888888888888888888866666666888888888888888885888
            8888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888888888888888666666688888888888888888888888
            8888888888886666668888886888888888888888888888888888666666888888668888888888888888888888888866666688888868888888888888888888888888886666668888886888888888888888
            8888888888666666666888886888888888888888888888888866666666688888668888888888888888888888886666666668888868888888888888888888888888666666666888886888888888888888
            8885888888666666666688866888888888888888888888888666666666668886668888888888888888888888886666666666888668888888888888888888888886666666666688866888888888888888
            8888888886666666668888886688888888888888888888866666666666888888668888888888888888888886666666666688888866888888888888888888888666666666668888886688888888888888
            8888888666666666668888866888888888888888888888888666666666888886668888888888888888888888886666666688888668888888888888888888888886666666668888866888888888888888
            8888888886666666888888666688888888888888888888888666666688888866668888888888888888888888886666668888886666888888888888888888888886666666888888666688888888888888
            8888888886666666666886666668888888888888888888886666666666688666666888888888888888888888666666666668866666668888888888888888888866666666666886666668888888888888
            8888888666666666666688866888888888886888888888888866666666668886668888888888688888888888886666666666888668888888888868888888888888666666666688866888888888886888
            8888888888666666666886666668888888886888888888886666666666688666666888888888688888888888666666666668866666668888888868888888888866666666666886666668888888886888
            8888888666666666666866666666888888866688888688866666666666686666666688888886668888868886666666666668666666668888888666888886888666666666666866666666888888866688
            8886888666666666666666666688888888886688888668888866666666666666668888888888668888866888886666666666666666888888888866888886688888666666666666666688888888886688
            8886688888666666666666666666888888866888886688886666666666666666666688888886688888668888666666666666666666668888888668888866888866666666666666666666888888866888
            8866888666666666666666666666688888666688888668866666666666666666666668888866668888866886666666666666666666666888886666888886688666666666666666666666688888666688
            8886688666666666666666666668888888866668886666666666666666666666666888888886666888666666666666666666666666668888888666688866666666666666666666666668888888866668
            8866666666666666666666666666688888666688888666666666666666666666666668888866668888866666666666666666666666666888886666888886666666666666666666666666688888666688
            8886666666666666666666666666668886666668888666666666666666666666666666888666666888866666666666666666666666666688866666688886666666666666666666666666668886666668
            8886666666666666666666666666888888666688886666666666666666666666666688888866668888666666666666666666666666668888886666888866666666666666666666666666888888666688
            8866666666666666666666666666668866666668866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666668
            8666666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666668866666666886666666666666666666666666666886666666688666666666666666666666666666688666666666866666666666666666666666666668866666666
            6666666666666666666666666666666866666666666666666666666666666666666666686666666666666666666666666666666666666668666666666666666666666666666666666666666866666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666eeeee66666666eee6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeee666666666666666666666666
            666666666eeeeeeeeeeeeeeeeeeee666eeeeeeee6666666666666666eeeee6666666666666eee666666666eeeeeeeeeee6666eeeeeee6666ee66eeeee666666eeeeeeeeeee6666666eeeeeeeeee66666
            666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeee666
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THE ALIENS HAVE LANDED ON EARTH!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        Level = 3
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_2 = true
    }
    
})
forever(function on_forever2() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 400 && Level_Up_1 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8883333388888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888883333388888888888888888888888
            8888333888888888888888688888888888888888888888688888833388888886888888888888888888888868888888888888888688888888888888888888886888888333888888688888888888888888
            8888383888888888888888888888888888888888888888888888838388888888888888888888888888888888888888888888888888888888888888888888888888888383888888888888888888888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886968888888888888888888888888888888
            8888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888668888888886888888688888888
            8888888888888888888888888888886968888888888888888888888388888888888888696888888888888888888888888888888888888869688888888888888888888668888888888888886968888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888838888888888888888888888888888888888866888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888888838888888888888888888888888888888888888888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888883333388888888888888888888888888888888888888888888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
            8888888333888888888888888888888888888888888888888888888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
            8888888383888888888888888888888888888888888888888888888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            888888888888888888ddd8888888888888888888888888888888888888ddd888888888888888888888888888888888888888888ddd88888888888888888888888888888888ddd8888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            8888888888888888888888888888888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888886668888888888888888888886688888888888888886888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888688888888888888888888886688888888888888866688888888888888888888888888
            8888888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888888868888888
            8888868888888888688888888888888688888888888888833388888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888838388888888888888888886888888888888688888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888668888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888333338888888888888888888888888668888888888
            8888888888888888888888888888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888833388888888888888888888888888888888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888838388888888888888888888888888888888888888
            8888888888888888888888888888888888888888888868888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888886888888888888888888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888
            8888888888888888888d88888888888888888888888888888888888888ddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888ddd88888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888
            8888888888888888888d88888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888
            8888888888888888888888888888868888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888666888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888868888888888888888868888888888888888888888888888888888
            8888888888388888888888888888888888888888888888888888888888888888888668888888888388888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888883888888888888888888888888888888888888888888888888888888886688888888883888888888888888888888888888888888888888888888888888888d8888888886888888888888888
            88888888333338888888688888888888888888888888888888888888d8888888888888888888833333888888888888888888888888888888888888888888888888888ddd888888888888888888888888
            8888888883338888888696888888888888888888888888888888888d3d88888888888888888888333888888888888888888d8888888888888888888888888888888888d8888888888888888888888888
            88888888838388888888688888888888888888888888888688888888d88888888888888888888838388888888888888888ddd88888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999
            8888888888888888888888888888888889999988888888888888888888888888888888888999998888888888888888888888888888888888899999888888888888888888888888888888888889999111
            8888888888888888888888888888888991111199888888888888888888888888888888899111119988888888888888888888888888888889911111998888888888888888888888888888888991111111
            8888888888888888888888888888999111111111998888888888888888888888888899911111111199888888888888888888888888889991111111119988888888888888888888888888999111111111
            8888888888888888888888888899111111111111119988888888888888888888888911111111111111998888888888888888888888991111111111111199888888888888888888888899111111111111
            9999999888888888888888899911111111111111111199888888888888888889991111111111111111119988888888888888888999111111111111111111998888888888888888899911111111111111
            1111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111111119999999999999999911111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111119991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111911119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111199111111111111111119111119111111111111111111111111111111111111111111111111111111111111111111111111111111111111191111111111111
            1111111111111111111111111111111111999111111111111111119111119111111111111111111111111111999999111111111111111999999111111111111111111111111111199919111111111111
            1111111111111111111111111111111199919111111111111111119111119111111111111111111111111199111111911111111111119911119911111111111111111111111111911111911111111111
            1111111111111111111111111111199911119911111111111111119111119111111111111111111111111191111111191111111111991111111911111111111111111111111199111111911111111111
            1111111111111111111111111119911111111911111111111111191111119111111111111111111111111191111111191111119999911111111191111111111111111111111991111111199111111111
            1111111111111111111111111111111111111991111111111111191111119111111111111111111111111191111111119111111111111111111191111111111111111111119911111111119111111111
            1111111111999911111111111111111111111191111111111111191111191111111111111111111111111191111111119111111111111111111191111111111111111111191111111111111911111111
            1111111199111191111111111111111111111191111111111111199111111111111111111991111111111191111111111911111111111111111119111111111111111111111111111111111911111111
            1111111991111119111111111111111111111111111111111111111111111111111111199919111111111191111111111911111111111111111111111111111111111111111111111111111991111111
            1111119111111111911111111111111111111111111111111111111111111111111111991119911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111191111111111911111111111111111111111111111111111111111111111111111911111911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111911111111111111111111111111111111111111111111111111119111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111191111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111911111111191111111119111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111119111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111191111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111119999111111111111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999111111111111111111
            1111111111111991119111111111111111111111119999911111111111111111111111111111111111111111111111111111111111111999111111111111111111111119911119911111111111111111
            1111111111119111119111111111111111111111199111911111111111111111111111111111911111111111111111111111111111119919911111111111111111111119111111911111111111111111
            1111111111191111119111111111111111111111991111191111111111111111111111111119911111111111111111111111111111991111991111111111111111111191111111991111111111111111
            1111111111191111111911111111111111111111911111199111111111111111111111111191191111111111111111111111111119111111191111111111111111111191111111191111111111111111
            1111111111911111111911111111111111111199111111119111111111111111111111111191191111111111111111111111111191111111191111111111111111111911111111119111111111111111
            1111111111911111111911111111111111111911111111119111111111111111111111111911191111111111111111111111119911111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111119911111111119111111111111111111111111911191111111111111111111111191111111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111199111111111119111111111111111111111119111191111111111111111111111991111111111119111111111111111191111111111119111111111111111
            1111111191111111111911111111111111111111111111111111111111111111111111119111191111111111111111111119111111111111119111111111111111191111111111119111111111111111
            1111111991111111111911111111111111111111111111111111111111111111111111991111191111111111111111111191111111111111119111111111111111911111111111119111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THEY'RE ATTACKING THE BASE ON THE SNOW PLANET!", DialogLayout.Center)
        game.showLongText("!!!CHARGE!!!", DialogLayout.Center)
        Level = 2
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_1 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 410 && Level_Up_1 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8883333388888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888883333388888888888888888888888
            8888333888888888888888688888888888888888888888688888833388888886888888888888888888888868888888888888888688888888888888888888886888888333888888688888888888888888
            8888383888888888888888888888888888888888888888888888838388888888888888888888888888888888888888888888888888888888888888888888888888888383888888888888888888888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886968888888888888888888888888888888
            8888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888668888888886888888688888888
            8888888888888888888888888888886968888888888888888888888388888888888888696888888888888888888888888888888888888869688888888888888888888668888888888888886968888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888838888888888888888888888888888888888866888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888888838888888888888888888888888888888888888888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888883333388888888888888888888888888888888888888888888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
            8888888333888888888888888888888888888888888888888888888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
            8888888383888888888888888888888888888888888888888888888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            888888888888888888ddd8888888888888888888888888888888888888ddd888888888888888888888888888888888888888888ddd88888888888888888888888888888888ddd8888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            8888888888888888888888888888888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888886668888888888888888888886688888888888888886888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888688888888888888888888886688888888888888866688888888888888888888888888
            8888888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888888868888888
            8888868888888888688888888888888688888888888888833388888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888838388888888888888888886888888888888688888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888668888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888333338888888888888888888888888668888888888
            8888888888888888888888888888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888833388888888888888888888888888888888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888838388888888888888888888888888888888888888
            8888888888888888888888888888888888888888888868888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888886888888888888888888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888
            8888888888888888888d88888888888888888888888888888888888888ddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888ddd88888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888
            8888888888888888888d88888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888
            8888888888888888888888888888868888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888666888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888868888888888888888868888888888888888888888888888888888
            8888888888388888888888888888888888888888888888888888888888888888888668888888888388888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888883888888888888888888888888888888888888888888888888888888886688888888883888888888888888888888888888888888888888888888888888888d8888888886888888888888888
            88888888333338888888688888888888888888888888888888888888d8888888888888888888833333888888888888888888888888888888888888888888888888888ddd888888888888888888888888
            8888888883338888888696888888888888888888888888888888888d3d88888888888888888888333888888888888888888d8888888888888888888888888888888888d8888888888888888888888888
            88888888838388888888688888888888888888888888888688888888d88888888888888888888838388888888888888888ddd88888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999
            8888888888888888888888888888888889999988888888888888888888888888888888888999998888888888888888888888888888888888899999888888888888888888888888888888888889999111
            8888888888888888888888888888888991111199888888888888888888888888888888899111119988888888888888888888888888888889911111998888888888888888888888888888888991111111
            8888888888888888888888888888999111111111998888888888888888888888888899911111111199888888888888888888888888889991111111119988888888888888888888888888999111111111
            8888888888888888888888888899111111111111119988888888888888888888888911111111111111998888888888888888888888991111111111111199888888888888888888888899111111111111
            9999999888888888888888899911111111111111111199888888888888888889991111111111111111119988888888888888888999111111111111111111998888888888888888899911111111111111
            1111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111111119999999999999999911111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111119991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111911119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111199111111111111111119111119111111111111111111111111111111111111111111111111111111111111111111111111111111111111191111111111111
            1111111111111111111111111111111111999111111111111111119111119111111111111111111111111111999999111111111111111999999111111111111111111111111111199919111111111111
            1111111111111111111111111111111199919111111111111111119111119111111111111111111111111199111111911111111111119911119911111111111111111111111111911111911111111111
            1111111111111111111111111111199911119911111111111111119111119111111111111111111111111191111111191111111111991111111911111111111111111111111199111111911111111111
            1111111111111111111111111119911111111911111111111111191111119111111111111111111111111191111111191111119999911111111191111111111111111111111991111111199111111111
            1111111111111111111111111111111111111991111111111111191111119111111111111111111111111191111111119111111111111111111191111111111111111111119911111111119111111111
            1111111111999911111111111111111111111191111111111111191111191111111111111111111111111191111111119111111111111111111191111111111111111111191111111111111911111111
            1111111199111191111111111111111111111191111111111111199111111111111111111991111111111191111111111911111111111111111119111111111111111111111111111111111911111111
            1111111991111119111111111111111111111111111111111111111111111111111111199919111111111191111111111911111111111111111111111111111111111111111111111111111991111111
            1111119111111111911111111111111111111111111111111111111111111111111111991119911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111191111111111911111111111111111111111111111111111111111111111111111911111911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111911111111111111111111111111111111111111111111111111119111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111191111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111911111111191111111119111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111119111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111191111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111119999111111111111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999111111111111111111
            1111111111111991119111111111111111111111119999911111111111111111111111111111111111111111111111111111111111111999111111111111111111111119911119911111111111111111
            1111111111119111119111111111111111111111199111911111111111111111111111111111911111111111111111111111111111119919911111111111111111111119111111911111111111111111
            1111111111191111119111111111111111111111991111191111111111111111111111111119911111111111111111111111111111991111991111111111111111111191111111991111111111111111
            1111111111191111111911111111111111111111911111199111111111111111111111111191191111111111111111111111111119111111191111111111111111111191111111191111111111111111
            1111111111911111111911111111111111111199111111119111111111111111111111111191191111111111111111111111111191111111191111111111111111111911111111119111111111111111
            1111111111911111111911111111111111111911111111119111111111111111111111111911191111111111111111111111119911111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111119911111111119111111111111111111111111911191111111111111111111111191111111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111199111111111119111111111111111111111119111191111111111111111111111991111111111119111111111111111191111111111119111111111111111
            1111111191111111111911111111111111111111111111111111111111111111111111119111191111111111111111111119111111111111119111111111111111191111111111119111111111111111
            1111111991111111111911111111111111111111111111111111111111111111111111991111191111111111111111111191111111111111119111111111111111911111111111119111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THEY'RE ATTACKING THE BASE ON THE SNOW PLANET!", DialogLayout.Center)
        game.showLongText("!!!CHARGE!!!", DialogLayout.Center)
        Level = 2
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_1 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 420 && Level_Up_1 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8883333388888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888883333388888888888888888888888
            8888333888888888888888688888888888888888888888688888833388888886888888888888888888888868888888888888888688888888888888888888886888888333888888688888888888888888
            8888383888888888888888888888888888888888888888888888838388888888888888888888888888888888888888888888888888888888888888888888888888888383888888888888888888888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886968888888888888888888888888888888
            8888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888668888888886888888688888888
            8888888888888888888888888888886968888888888888888888888388888888888888696888888888888888888888888888888888888869688888888888888888888668888888888888886968888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888838888888888888888888888888888888888866888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888888838888888888888888888888888888888888888888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888883333388888888888888888888888888888888888888888888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
            8888888333888888888888888888888888888888888888888888888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
            8888888383888888888888888888888888888888888888888888888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            888888888888888888ddd8888888888888888888888888888888888888ddd888888888888888888888888888888888888888888ddd88888888888888888888888888888888ddd8888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            8888888888888888888888888888888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888886668888888888888888888886688888888888888886888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888688888888888888888888886688888888888888866688888888888888888888888888
            8888888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888888868888888
            8888868888888888688888888888888688888888888888833388888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888838388888888888888888886888888888888688888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888668888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888333338888888888888888888888888668888888888
            8888888888888888888888888888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888833388888888888888888888888888888888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888838388888888888888888888888888888888888888
            8888888888888888888888888888888888888888888868888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888886888888888888888888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888
            8888888888888888888d88888888888888888888888888888888888888ddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888ddd88888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888
            8888888888888888888d88888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888
            8888888888888888888888888888868888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888666888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888868888888888888888868888888888888888888888888888888888
            8888888888388888888888888888888888888888888888888888888888888888888668888888888388888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888883888888888888888888888888888888888888888888888888888888886688888888883888888888888888888888888888888888888888888888888888888d8888888886888888888888888
            88888888333338888888688888888888888888888888888888888888d8888888888888888888833333888888888888888888888888888888888888888888888888888ddd888888888888888888888888
            8888888883338888888696888888888888888888888888888888888d3d88888888888888888888333888888888888888888d8888888888888888888888888888888888d8888888888888888888888888
            88888888838388888888688888888888888888888888888688888888d88888888888888888888838388888888888888888ddd88888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999
            8888888888888888888888888888888889999988888888888888888888888888888888888999998888888888888888888888888888888888899999888888888888888888888888888888888889999111
            8888888888888888888888888888888991111199888888888888888888888888888888899111119988888888888888888888888888888889911111998888888888888888888888888888888991111111
            8888888888888888888888888888999111111111998888888888888888888888888899911111111199888888888888888888888888889991111111119988888888888888888888888888999111111111
            8888888888888888888888888899111111111111119988888888888888888888888911111111111111998888888888888888888888991111111111111199888888888888888888888899111111111111
            9999999888888888888888899911111111111111111199888888888888888889991111111111111111119988888888888888888999111111111111111111998888888888888888899911111111111111
            1111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111111119999999999999999911111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111119991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111911119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111199111111111111111119111119111111111111111111111111111111111111111111111111111111111111111111111111111111111111191111111111111
            1111111111111111111111111111111111999111111111111111119111119111111111111111111111111111999999111111111111111999999111111111111111111111111111199919111111111111
            1111111111111111111111111111111199919111111111111111119111119111111111111111111111111199111111911111111111119911119911111111111111111111111111911111911111111111
            1111111111111111111111111111199911119911111111111111119111119111111111111111111111111191111111191111111111991111111911111111111111111111111199111111911111111111
            1111111111111111111111111119911111111911111111111111191111119111111111111111111111111191111111191111119999911111111191111111111111111111111991111111199111111111
            1111111111111111111111111111111111111991111111111111191111119111111111111111111111111191111111119111111111111111111191111111111111111111119911111111119111111111
            1111111111999911111111111111111111111191111111111111191111191111111111111111111111111191111111119111111111111111111191111111111111111111191111111111111911111111
            1111111199111191111111111111111111111191111111111111199111111111111111111991111111111191111111111911111111111111111119111111111111111111111111111111111911111111
            1111111991111119111111111111111111111111111111111111111111111111111111199919111111111191111111111911111111111111111111111111111111111111111111111111111991111111
            1111119111111111911111111111111111111111111111111111111111111111111111991119911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111191111111111911111111111111111111111111111111111111111111111111111911111911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111911111111111111111111111111111111111111111111111111119111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111191111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111911111111191111111119111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111119111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111191111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111119999111111111111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999111111111111111111
            1111111111111991119111111111111111111111119999911111111111111111111111111111111111111111111111111111111111111999111111111111111111111119911119911111111111111111
            1111111111119111119111111111111111111111199111911111111111111111111111111111911111111111111111111111111111119919911111111111111111111119111111911111111111111111
            1111111111191111119111111111111111111111991111191111111111111111111111111119911111111111111111111111111111991111991111111111111111111191111111991111111111111111
            1111111111191111111911111111111111111111911111199111111111111111111111111191191111111111111111111111111119111111191111111111111111111191111111191111111111111111
            1111111111911111111911111111111111111199111111119111111111111111111111111191191111111111111111111111111191111111191111111111111111111911111111119111111111111111
            1111111111911111111911111111111111111911111111119111111111111111111111111911191111111111111111111111119911111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111119911111111119111111111111111111111111911191111111111111111111111191111111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111199111111111119111111111111111111111119111191111111111111111111111991111111111119111111111111111191111111111119111111111111111
            1111111191111111111911111111111111111111111111111111111111111111111111119111191111111111111111111119111111111111119111111111111111191111111111119111111111111111
            1111111991111111111911111111111111111111111111111111111111111111111111991111191111111111111111111191111111111111119111111111111111911111111111119111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THEY'RE ATTACKING THE BASE ON THE SNOW PLANET!", DialogLayout.Center)
        game.showLongText("!!!CHARGE!!!", DialogLayout.Center)
        Level = 2
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_1 = true
    }
    
})
forever(function on_forever3() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 1400 && Level_Up_3 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            222222222222222222222222222222222222222222444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222244444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222244444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4422222222222222222222222222222222222222cc2222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc22222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222ccccc2222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222cccccc222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222cccccccc2444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444422222222222222222222222222222222ccccccccc244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444442222222222222222222222222222222cccccccccc44444444ccdddddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444422222222222222222222222222222ccccccccccc4444444ccccdddcddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444444222222222222222222222222222cccccccccccc444444ccccddcccdddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44444444442222222222222222222222222ccccccccccccccc4dddcc1cddcccddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444442222222222222222222222ccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444444442222222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd44444444444444444222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddd44444444444444444444222244444444ccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddd444444444444444444444444444444cc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddd4444444444444444444444444444cc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddd
            ddddddddddd4444444444444444444444444ccccccccccccddddddddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddd444444444444444444444ccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddddddd44444444444444dddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddddddddddfffff
            ddddddddddddddddddddcccbdcccddddccdcdddcccccccccccccccccdcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbdddddddddddddffffff
            dddddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddddddddddddfffffff
            dddddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbdddddddddddddfffffff
            dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbdddddddddddddffffffff
            dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbdddddddddddfffffffff
            dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddddddddddddddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddddddddddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddddddddddddddddddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbddddddddddffffffffff
            ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccdddddddddddddddddddddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbddddddddddffffffffff
            dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccddddddddddddddddddddddddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbbcbbccccccc1111111b1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbccbcccccccc111111bb1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbddddddddddfffffffffff
            ddddddddddddddddddddddcccccccccccccccccccccccc1111111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbdddddddddffffffffffff
            ddddddddddddddddddddddcccccccccccc111d1cccccccd1d1111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccddbccccccccccc1ddddbccccccccccccdddddddddddddddddddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccbcccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbdddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbdddddddffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbddddddfffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbddddddffffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbdddddfffffcfffffffffffff
            dddddddbbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddfffffffffffffffffff
            dbddddddddbbbbbdddddddccccccccccccccccccccccccccccccccccccccbcccccddddddddddddbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbdddbcccccccccccccccccccccccccccccbccccccccccccccdddddddddddbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccdddddddddbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
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
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("WE HAVE ARIVIED AT THE ALIENS HOME WORLD ", DialogLayout.Center)
        game.showLongText("DON'T HOLD ANYTHING BACK!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        info.player1.changeLifeBy(1)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player1.changeLifeBy(1)
        }
        
        Level = 4
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_3 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 1410 && Level_Up_3 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            222222222222222222222222222222222222222222444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222244444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222244444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4422222222222222222222222222222222222222cc2222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc22222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222ccccc2222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222cccccc222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222cccccccc2444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444422222222222222222222222222222222ccccccccc244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444442222222222222222222222222222222cccccccccc44444444ccdddddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444422222222222222222222222222222ccccccccccc4444444ccccdddcddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444444222222222222222222222222222cccccccccccc444444ccccddcccdddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44444444442222222222222222222222222ccccccccccccccc4dddcc1cddcccddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444442222222222222222222222ccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444444442222222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd44444444444444444222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddd44444444444444444444222244444444ccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddd444444444444444444444444444444cc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddd4444444444444444444444444444cc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddd
            ddddddddddd4444444444444444444444444ccccccccccccddddddddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddd444444444444444444444ccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddddddd44444444444444dddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddddddddddfffff
            ddddddddddddddddddddcccbdcccddddccdcdddcccccccccccccccccdcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbdddddddddddddffffff
            dddddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddddddddddddfffffff
            dddddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbdddddddddddddfffffff
            dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbdddddddddddddffffffff
            dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbdddddddddddfffffffff
            dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddddddddddddddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddddddddddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddddddddddddddddddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbddddddddddffffffffff
            ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccdddddddddddddddddddddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbddddddddddffffffffff
            dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccddddddddddddddddddddddddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbbcbbccccccc1111111b1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbccbcccccccc111111bb1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbddddddddddfffffffffff
            ddddddddddddddddddddddcccccccccccccccccccccccc1111111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbdddddddddffffffffffff
            ddddddddddddddddddddddcccccccccccc111d1cccccccd1d1111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccddbccccccccccc1ddddbccccccccccccdddddddddddddddddddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccbcccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbdddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbdddddddffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbddddddfffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbddddddffffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbdddddfffffcfffffffffffff
            dddddddbbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddfffffffffffffffffff
            dbddddddddbbbbbdddddddccccccccccccccccccccccccccccccccccccccbcccccddddddddddddbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbdddbcccccccccccccccccccccccccccccbccccccccccccccdddddddddddbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccdddddddddbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
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
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("WE HAVE ARIVIED AT THE ALIENS HOME WORLD ", DialogLayout.Center)
        game.showLongText("DON'T HOLD ANYTHING BACK!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        info.player1.changeLifeBy(1)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player1.changeLifeBy(1)
        }
        
        Level = 4
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_3 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 1420 && Level_Up_3 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            222222222222222222222222222222222222222222444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222244444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222244444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4422222222222222222222222222222222222222cc2222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc22222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222ccccc2222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222cccccc222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222cccccccc2444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444422222222222222222222222222222222ccccccccc244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444442222222222222222222222222222222cccccccccc44444444ccdddddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444422222222222222222222222222222ccccccccccc4444444ccccdddcddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444444222222222222222222222222222cccccccccccc444444ccccddcccdddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44444444442222222222222222222222222ccccccccccccccc4dddcc1cddcccddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444442222222222222222222222ccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444444442222222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd44444444444444444222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddd44444444444444444444222244444444ccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddd444444444444444444444444444444cc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddd4444444444444444444444444444cc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddd
            ddddddddddd4444444444444444444444444ccccccccccccddddddddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddd444444444444444444444ccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddddddd44444444444444dddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddddddddddfffff
            ddddddddddddddddddddcccbdcccddddccdcdddcccccccccccccccccdcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbdddddddddddddffffff
            dddddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddddddddddddfffffff
            dddddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbdddddddddddddfffffff
            dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbdddddddddddddffffffff
            dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbdddddddddddfffffffff
            dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddddddddddddddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddddddddddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddddddddddddddddddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbddddddddddffffffffff
            ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccdddddddddddddddddddddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbddddddddddffffffffff
            dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccddddddddddddddddddddddddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbbcbbccccccc1111111b1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbccbcccccccc111111bb1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbddddddddddfffffffffff
            ddddddddddddddddddddddcccccccccccccccccccccccc1111111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbdddddddddffffffffffff
            ddddddddddddddddddddddcccccccccccc111d1cccccccd1d1111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccddbccccccccccc1ddddbccccccccccccdddddddddddddddddddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccbcccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbdddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbdddddddffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbddddddfffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbddddddffffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbdddddfffffcfffffffffffff
            dddddddbbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddfffffffffffffffffff
            dbddddddddbbbbbdddddddccccccccccccccccccccccccccccccccccccccbcccccddddddddddddbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbdddbcccccccccccccccccccccccccccccbccccccccccccccdddddddddddbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccdddddddddbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
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
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("WE HAVE ARIVIED AT THE ALIENS HOME WORLD ", DialogLayout.Center)
        game.showLongText("DON'T HOLD ANYTHING BACK!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        info.player1.changeLifeBy(1)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player1.changeLifeBy(1)
        }
        
        Level = 4
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_3 = true
    }
    
})
game.onUpdateInterval(500, function on_update_interval4() {
    
    Is_Invincible = false
})
game.onUpdateInterval(30000, function on_update_interval5() {
    
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        LifeUp_Heart = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . b c c c b . . b c c c b . .
                . c 3 1 1 1 3 c c 3 1 1 1 3 c .
                b 1 3 1 1 1 3 3 3 3 1 1 1 3 1 b
                c 1 3 3 3 1 1 3 3 1 1 3 3 3 1 c
                c 1 1 1 3 c c 3 3 c c 3 1 1 1 c
                c 1 1 1 c 2 2 c c 2 2 c 1 1 1 c
                c 3 1 1 c 2 2 2 2 2 2 c 1 1 3 c
                c 3 3 3 3 c 2 2 2 2 c 3 3 3 3 c
                b 1 1 1 1 3 c 2 2 c 3 1 1 1 1 b
                . c 1 1 3 3 1 c c 1 3 3 1 1 c .
                . . b 3 3 1 1 3 3 1 1 3 3 b . .
                . . . c 1 1 1 3 3 1 1 1 c . . .
                . . . . b 1 1 3 3 1 1 b . . . .
                . . . . . c c 3 3 c c . . . . .
                . . . . . . b c c b . . . . . .
                `, SpriteKind.Food)
        LifeUp_Heart.setPosition(randint(30, 100), randint(30, 100))
    }
    
})
game.onUpdateInterval(6000, function on_update_interval6() {
    
    if (Level == 2) {
        Highbreed_Command_Ship = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . 9 9 8 d d d d d d
                . . . . . . . . . . . . d d d .
                . . . . . . . . . . . d d d . .
                . . . . . . 9 9 8 6 d d d . . .
                . . . . . . . . 6 d d d d 9 9 .
                . . . . . . . d d d d d 9 9 9 .
                . . . d d d d d d 6 6 d . . . .
                9 d d d 6 6 d d 6 6 d d . . . .
                . . . d d d d d d 6 6 d . . . .
                . . . . . . . d d d d d 9 9 9 .
                . . . . . . . . 6 d d d d 9 9 .
                . . . . . . 9 9 8 6 d d d . . .
                . . . . . . . . . . . d d d . .
                . . . . . . . . . . . . d d d .
                . . . . . . . . 9 9 8 d d d d d
                `, SpriteKind.Enemy)
        Highbreed_Command_Ship.setPosition(150, randint(10, 110))
        Highbreed_Command_Ship.setBounceOnWall(true)
        Highbreed_Command_Ship.setVelocity(0, 50)
    }
    
})
game.onUpdateInterval(6000, function on_update_interval7() {
    
    if (Level != 4) {
        if (Level != 3) {
            if (Level != 2) {
                Highbreed_Command_Ship = sprites.create(img`
                        . . . . . . . . . . . . . . . .
                        . . . . . . . 2 2 5 7 7 7 7 7 7
                        . . . . . . . . . . . . 7 7 7 .
                        . . . . . . . . . . . 7 7 7 . .
                        . . . . . . 2 2 5 8 7 7 7 . . .
                        . . . . . . . . 8 7 7 7 7 2 2 .
                        . . . . . . . 7 7 7 7 7 2 2 2 .
                        . . . 7 7 7 7 7 7 2 2 7 . . . .
                        5 7 7 7 8 8 7 7 2 2 7 7 . . . .
                        . . . 7 7 7 7 7 7 2 2 7 . . . .
                        . . . . . . . 7 7 7 7 7 2 2 2 .
                        . . . . . . . . 8 7 7 7 7 2 2 .
                        . . . . . . 2 2 5 8 7 7 7 . . .
                        . . . . . . . . . . . 7 7 7 . .
                        . . . . . . . . . . . . 7 7 7 .
                        . . . . . . . . 2 2 5 7 7 7 7 7
                        `, SpriteKind.Enemy)
                Highbreed_Command_Ship.setPosition(150, randint(10, 110))
                Highbreed_Command_Ship.setBounceOnWall(true)
                Highbreed_Command_Ship.setVelocity(0, 50)
            }
            
        }
        
    }
    
})
forever(function on_forever4() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 1400 && Level_Up_3 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            222222222222222222222222222222222222222222444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222244444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222244444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4422222222222222222222222222222222222222cc2222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc22222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222ccccc2222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222cccccc222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222cccccccc2444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444422222222222222222222222222222222ccccccccc244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444442222222222222222222222222222222cccccccccc44444444ccdddddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444422222222222222222222222222222ccccccccccc4444444ccccdddcddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444444222222222222222222222222222cccccccccccc444444ccccddcccdddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44444444442222222222222222222222222ccccccccccccccc4dddcc1cddcccddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444442222222222222222222222ccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444444442222222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd44444444444444444222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddd44444444444444444444222244444444ccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddd444444444444444444444444444444cc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddd4444444444444444444444444444cc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddd
            ddddddddddd4444444444444444444444444ccccccccccccddddddddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddd444444444444444444444ccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddddddd44444444444444dddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddddddddddfffff
            ddddddddddddddddddddcccbdcccddddccdcdddcccccccccccccccccdcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbdddddddddddddffffff
            dddddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddddddddddddfffffff
            dddddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbdddddddddddddfffffff
            dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbdddddddddddddffffffff
            dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbdddddddddddfffffffff
            dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddddddddddddddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddddddddddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddddddddddddddddddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbddddddddddffffffffff
            ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccdddddddddddddddddddddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbddddddddddffffffffff
            dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccddddddddddddddddddddddddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbbcbbccccccc1111111b1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbccbcccccccc111111bb1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbddddddddddfffffffffff
            ddddddddddddddddddddddcccccccccccccccccccccccc1111111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbdddddddddffffffffffff
            ddddddddddddddddddddddcccccccccccc111d1cccccccd1d1111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccddbccccccccccc1ddddbccccccccccccdddddddddddddddddddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccbcccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbdddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbdddddddffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbddddddfffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbddddddffffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbdddddfffffcfffffffffffff
            dddddddbbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddfffffffffffffffffff
            dbddddddddbbbbbdddddddccccccccccccccccccccccccccccccccccccccbcccccddddddddddddbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbdddbcccccccccccccccccccccccccccccbccccccccccccccdddddddddddbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccdddddddddbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
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
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("WE HAVE ARIVIED AT THE ALIENS HOME WORLD ", DialogLayout.Center)
        game.showLongText("DON'T HOLD ANYTHING BACK!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        info.player1.changeLifeBy(1)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player1.changeLifeBy(1)
        }
        
        Level = 4
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_3 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 1410 && Level_Up_3 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            222222222222222222222222222222222222222222444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222244444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222244444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4422222222222222222222222222222222222222cc2222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc22222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222ccccc2222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222cccccc222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222cccccccc2444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444422222222222222222222222222222222ccccccccc244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444442222222222222222222222222222222cccccccccc44444444ccdddddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444422222222222222222222222222222ccccccccccc4444444ccccdddcddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444444222222222222222222222222222cccccccccccc444444ccccddcccdddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44444444442222222222222222222222222ccccccccccccccc4dddcc1cddcccddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444442222222222222222222222ccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444444442222222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd44444444444444444222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddd44444444444444444444222244444444ccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddd444444444444444444444444444444cc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddd4444444444444444444444444444cc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddd
            ddddddddddd4444444444444444444444444ccccccccccccddddddddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddd444444444444444444444ccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddddddd44444444444444dddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddddddddddfffff
            ddddddddddddddddddddcccbdcccddddccdcdddcccccccccccccccccdcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbdddddddddddddffffff
            dddddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddddddddddddfffffff
            dddddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbdddddddddddddfffffff
            dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbdddddddddddddffffffff
            dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbdddddddddddfffffffff
            dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddddddddddddddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddddddddddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddddddddddddddddddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbddddddddddffffffffff
            ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccdddddddddddddddddddddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbddddddddddffffffffff
            dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccddddddddddddddddddddddddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbbcbbccccccc1111111b1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbccbcccccccc111111bb1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbddddddddddfffffffffff
            ddddddddddddddddddddddcccccccccccccccccccccccc1111111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbdddddddddffffffffffff
            ddddddddddddddddddddddcccccccccccc111d1cccccccd1d1111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccddbccccccccccc1ddddbccccccccccccdddddddddddddddddddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccbcccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbdddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbdddddddffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbddddddfffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbddddddffffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbdddddfffffcfffffffffffff
            dddddddbbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddfffffffffffffffffff
            dbddddddddbbbbbdddddddccccccccccccccccccccccccccccccccccccccbcccccddddddddddddbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbdddbcccccccccccccccccccccccccccccbccccccccccccccdddddddddddbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccdddddddddbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
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
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("WE HAVE ARIVIED AT THE ALIENS HOME WORLD ", DialogLayout.Center)
        game.showLongText("DON'T HOLD ANYTHING BACK!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        info.player1.changeLifeBy(1)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player1.changeLifeBy(1)
        }
        
        Level = 4
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_3 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 1420 && Level_Up_3 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            222222222222222222222222222222222222222222444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222244444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222244444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222224444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222244444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            22222222222222222222222222222222222222222222222222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            2222222222222222222222222222222222222222222222222222244444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4222222222222222222222222222222222222222222222222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4422222222222222222222222222222222222222cc2222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc222222224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222cccc22222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            442222222222222222222222222222222222222ccccc2222222444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222cccccc222222444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44422222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222ccccccc22224444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44442222222222222222222222222222222222cccccccc2444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444422222222222222222222222222222222ccccccccc244444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            4444442222222222222222222222222222222cccccccccc44444444ccdddddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444422222222222222222222222222222ccccccccccc4444444ccccdddcddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            444444444222222222222222222222222222cccccccccccc444444ccccddcccdddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            44444444442222222222222222222222222ccccccccccccccc4dddcc1cddcccddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444442222222222222222222222ccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            d444444444444442222222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd44444444444444444222222222222222ccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddd44444444444444444444222244444444ccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddd444444444444444444444444444444cc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddd4444444444444444444444444444cc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddd
            ddddddddddd4444444444444444444444444ccccccccccccddddddddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddd444444444444444444444ccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            ddddddddddddddddddd44444444444444dddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddddddddddfffff
            ddddddddddddddddddddcccbdcccddddccdcdddcccccccccccccccccdcccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbdddddddddddddffffff
            dddddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddddddddddddfffffff
            dddddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbdddddddddddddfffffff
            dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbdddddddddddddffffffff
            dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddddddddddddddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbdddddddddddfffffffff
            dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddddddddddddddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddddddddddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbddddddddddffffffffff
            dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddddddddddddddddddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbddddddddddffffffffff
            ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccdddddddddddddddddddddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbddddddddddffffffffff
            dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccddddddddddddddddddddddddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbbcbbccccccc1111111b1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbdddddddddfffffffffff
            ddddddddddddddddddddddccccccccccccbccbcccccccc111111bb1cccccccccccdddddddddddddddddddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbddddddddddfffffffffff
            ddddddddddddddddddddddcccccccccccccccccccccccc1111111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbdddddddddffffffffffff
            ddddddddddddddddddddddcccccccccccc111d1cccccccd1d1111bbcccccccccccddddddddddddddddddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccddbccccccccccc1ddddbccccccccccccdddddddddddddddddddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccbcccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbdddddddfffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbdddddddffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbdddddddffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbdddddddfffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbddddddfffffffffffffffcff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbddddddffffffffffffffffff
            ddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbdddddfffffcfffffffffffff
            dddddddbbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccdddddddddddddbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddfffffffffffffffffff
            dbddddddddbbbbbdddddddccccccccccccccccccccccccccccccccccccccbcccccddddddddddddbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbdddbcccccccccccccccccccccccccccccbccccccccccccccdddddddddddbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccdddddddddbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
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
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("WE HAVE ARIVIED AT THE ALIENS HOME WORLD ", DialogLayout.Center)
        game.showLongText("DON'T HOLD ANYTHING BACK!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        info.player1.changeLifeBy(1)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player1.changeLifeBy(1)
        }
        
        Level = 4
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_3 = true
    }
    
})
forever(function on_forever5() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 400 && Level_Up_1 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8883333388888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888883333388888888888888888888888
            8888333888888888888888688888888888888888888888688888833388888886888888888888888888888868888888888888888688888888888888888888886888888333888888688888888888888888
            8888383888888888888888888888888888888888888888888888838388888888888888888888888888888888888888888888888888888888888888888888888888888383888888888888888888888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886968888888888888888888888888888888
            8888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888668888888886888888688888888
            8888888888888888888888888888886968888888888888888888888388888888888888696888888888888888888888888888888888888869688888888888888888888668888888888888886968888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888838888888888888888888888888888888888866888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888888838888888888888888888888888888888888888888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888883333388888888888888888888888888888888888888888888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
            8888888333888888888888888888888888888888888888888888888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
            8888888383888888888888888888888888888888888888888888888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            888888888888888888ddd8888888888888888888888888888888888888ddd888888888888888888888888888888888888888888ddd88888888888888888888888888888888ddd8888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            8888888888888888888888888888888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888886668888888888888888888886688888888888888886888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888688888888888888888888886688888888888888866688888888888888888888888888
            8888888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888888868888888
            8888868888888888688888888888888688888888888888833388888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888838388888888888888888886888888888888688888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888668888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888333338888888888888888888888888668888888888
            8888888888888888888888888888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888833388888888888888888888888888888888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888838388888888888888888888888888888888888888
            8888888888888888888888888888888888888888888868888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888886888888888888888888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888
            8888888888888888888d88888888888888888888888888888888888888ddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888ddd88888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888
            8888888888888888888d88888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888
            8888888888888888888888888888868888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888666888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888868888888888888888868888888888888888888888888888888888
            8888888888388888888888888888888888888888888888888888888888888888888668888888888388888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888883888888888888888888888888888888888888888888888888888888886688888888883888888888888888888888888888888888888888888888888888888d8888888886888888888888888
            88888888333338888888688888888888888888888888888888888888d8888888888888888888833333888888888888888888888888888888888888888888888888888ddd888888888888888888888888
            8888888883338888888696888888888888888888888888888888888d3d88888888888888888888333888888888888888888d8888888888888888888888888888888888d8888888888888888888888888
            88888888838388888888688888888888888888888888888688888888d88888888888888888888838388888888888888888ddd88888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999
            8888888888888888888888888888888889999988888888888888888888888888888888888999998888888888888888888888888888888888899999888888888888888888888888888888888889999111
            8888888888888888888888888888888991111199888888888888888888888888888888899111119988888888888888888888888888888889911111998888888888888888888888888888888991111111
            8888888888888888888888888888999111111111998888888888888888888888888899911111111199888888888888888888888888889991111111119988888888888888888888888888999111111111
            8888888888888888888888888899111111111111119988888888888888888888888911111111111111998888888888888888888888991111111111111199888888888888888888888899111111111111
            9999999888888888888888899911111111111111111199888888888888888889991111111111111111119988888888888888888999111111111111111111998888888888888888899911111111111111
            1111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111111119999999999999999911111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111119991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111911119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111199111111111111111119111119111111111111111111111111111111111111111111111111111111111111111111111111111111111111191111111111111
            1111111111111111111111111111111111999111111111111111119111119111111111111111111111111111999999111111111111111999999111111111111111111111111111199919111111111111
            1111111111111111111111111111111199919111111111111111119111119111111111111111111111111199111111911111111111119911119911111111111111111111111111911111911111111111
            1111111111111111111111111111199911119911111111111111119111119111111111111111111111111191111111191111111111991111111911111111111111111111111199111111911111111111
            1111111111111111111111111119911111111911111111111111191111119111111111111111111111111191111111191111119999911111111191111111111111111111111991111111199111111111
            1111111111111111111111111111111111111991111111111111191111119111111111111111111111111191111111119111111111111111111191111111111111111111119911111111119111111111
            1111111111999911111111111111111111111191111111111111191111191111111111111111111111111191111111119111111111111111111191111111111111111111191111111111111911111111
            1111111199111191111111111111111111111191111111111111199111111111111111111991111111111191111111111911111111111111111119111111111111111111111111111111111911111111
            1111111991111119111111111111111111111111111111111111111111111111111111199919111111111191111111111911111111111111111111111111111111111111111111111111111991111111
            1111119111111111911111111111111111111111111111111111111111111111111111991119911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111191111111111911111111111111111111111111111111111111111111111111111911111911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111911111111111111111111111111111111111111111111111111119111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111191111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111911111111191111111119111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111119111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111191111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111119999111111111111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999111111111111111111
            1111111111111991119111111111111111111111119999911111111111111111111111111111111111111111111111111111111111111999111111111111111111111119911119911111111111111111
            1111111111119111119111111111111111111111199111911111111111111111111111111111911111111111111111111111111111119919911111111111111111111119111111911111111111111111
            1111111111191111119111111111111111111111991111191111111111111111111111111119911111111111111111111111111111991111991111111111111111111191111111991111111111111111
            1111111111191111111911111111111111111111911111199111111111111111111111111191191111111111111111111111111119111111191111111111111111111191111111191111111111111111
            1111111111911111111911111111111111111199111111119111111111111111111111111191191111111111111111111111111191111111191111111111111111111911111111119111111111111111
            1111111111911111111911111111111111111911111111119111111111111111111111111911191111111111111111111111119911111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111119911111111119111111111111111111111111911191111111111111111111111191111111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111199111111111119111111111111111111111119111191111111111111111111111991111111111119111111111111111191111111111119111111111111111
            1111111191111111111911111111111111111111111111111111111111111111111111119111191111111111111111111119111111111111119111111111111111191111111111119111111111111111
            1111111991111111111911111111111111111111111111111111111111111111111111991111191111111111111111111191111111111111119111111111111111911111111111119111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THEY'RE ATTACKING THE BASE ON THE SNOW PLANET!", DialogLayout.Center)
        game.showLongText("!!!CHARGE!!!", DialogLayout.Center)
        Level = 2
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_1 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 410 && Level_Up_1 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8883333388888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888883333388888888888888888888888
            8888333888888888888888688888888888888888888888688888833388888886888888888888888888888868888888888888888688888888888888888888886888888333888888688888888888888888
            8888383888888888888888888888888888888888888888888888838388888888888888888888888888888888888888888888888888888888888888888888888888888383888888888888888888888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886968888888888888888888888888888888
            8888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888668888888886888888688888888
            8888888888888888888888888888886968888888888888888888888388888888888888696888888888888888888888888888888888888869688888888888888888888668888888888888886968888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888838888888888888888888888888888888888866888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888888838888888888888888888888888888888888888888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888883333388888888888888888888888888888888888888888888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
            8888888333888888888888888888888888888888888888888888888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
            8888888383888888888888888888888888888888888888888888888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            888888888888888888ddd8888888888888888888888888888888888888ddd888888888888888888888888888888888888888888ddd88888888888888888888888888888888ddd8888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            8888888888888888888888888888888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888886668888888888888888888886688888888888888886888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888688888888888888888888886688888888888888866688888888888888888888888888
            8888888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888888868888888
            8888868888888888688888888888888688888888888888833388888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888838388888888888888888886888888888888688888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888668888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888333338888888888888888888888888668888888888
            8888888888888888888888888888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888833388888888888888888888888888888888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888838388888888888888888888888888888888888888
            8888888888888888888888888888888888888888888868888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888886888888888888888888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888
            8888888888888888888d88888888888888888888888888888888888888ddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888ddd88888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888
            8888888888888888888d88888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888
            8888888888888888888888888888868888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888666888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888868888888888888888868888888888888888888888888888888888
            8888888888388888888888888888888888888888888888888888888888888888888668888888888388888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888883888888888888888888888888888888888888888888888888888888886688888888883888888888888888888888888888888888888888888888888888888d8888888886888888888888888
            88888888333338888888688888888888888888888888888888888888d8888888888888888888833333888888888888888888888888888888888888888888888888888ddd888888888888888888888888
            8888888883338888888696888888888888888888888888888888888d3d88888888888888888888333888888888888888888d8888888888888888888888888888888888d8888888888888888888888888
            88888888838388888888688888888888888888888888888688888888d88888888888888888888838388888888888888888ddd88888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999
            8888888888888888888888888888888889999988888888888888888888888888888888888999998888888888888888888888888888888888899999888888888888888888888888888888888889999111
            8888888888888888888888888888888991111199888888888888888888888888888888899111119988888888888888888888888888888889911111998888888888888888888888888888888991111111
            8888888888888888888888888888999111111111998888888888888888888888888899911111111199888888888888888888888888889991111111119988888888888888888888888888999111111111
            8888888888888888888888888899111111111111119988888888888888888888888911111111111111998888888888888888888888991111111111111199888888888888888888888899111111111111
            9999999888888888888888899911111111111111111199888888888888888889991111111111111111119988888888888888888999111111111111111111998888888888888888899911111111111111
            1111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111111119999999999999999911111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111119991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111911119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111199111111111111111119111119111111111111111111111111111111111111111111111111111111111111111111111111111111111111191111111111111
            1111111111111111111111111111111111999111111111111111119111119111111111111111111111111111999999111111111111111999999111111111111111111111111111199919111111111111
            1111111111111111111111111111111199919111111111111111119111119111111111111111111111111199111111911111111111119911119911111111111111111111111111911111911111111111
            1111111111111111111111111111199911119911111111111111119111119111111111111111111111111191111111191111111111991111111911111111111111111111111199111111911111111111
            1111111111111111111111111119911111111911111111111111191111119111111111111111111111111191111111191111119999911111111191111111111111111111111991111111199111111111
            1111111111111111111111111111111111111991111111111111191111119111111111111111111111111191111111119111111111111111111191111111111111111111119911111111119111111111
            1111111111999911111111111111111111111191111111111111191111191111111111111111111111111191111111119111111111111111111191111111111111111111191111111111111911111111
            1111111199111191111111111111111111111191111111111111199111111111111111111991111111111191111111111911111111111111111119111111111111111111111111111111111911111111
            1111111991111119111111111111111111111111111111111111111111111111111111199919111111111191111111111911111111111111111111111111111111111111111111111111111991111111
            1111119111111111911111111111111111111111111111111111111111111111111111991119911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111191111111111911111111111111111111111111111111111111111111111111111911111911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111911111111111111111111111111111111111111111111111111119111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111191111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111911111111191111111119111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111119111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111191111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111119999111111111111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999111111111111111111
            1111111111111991119111111111111111111111119999911111111111111111111111111111111111111111111111111111111111111999111111111111111111111119911119911111111111111111
            1111111111119111119111111111111111111111199111911111111111111111111111111111911111111111111111111111111111119919911111111111111111111119111111911111111111111111
            1111111111191111119111111111111111111111991111191111111111111111111111111119911111111111111111111111111111991111991111111111111111111191111111991111111111111111
            1111111111191111111911111111111111111111911111199111111111111111111111111191191111111111111111111111111119111111191111111111111111111191111111191111111111111111
            1111111111911111111911111111111111111199111111119111111111111111111111111191191111111111111111111111111191111111191111111111111111111911111111119111111111111111
            1111111111911111111911111111111111111911111111119111111111111111111111111911191111111111111111111111119911111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111119911111111119111111111111111111111111911191111111111111111111111191111111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111199111111111119111111111111111111111119111191111111111111111111111991111111111119111111111111111191111111111119111111111111111
            1111111191111111111911111111111111111111111111111111111111111111111111119111191111111111111111111119111111111111119111111111111111191111111111119111111111111111
            1111111991111111111911111111111111111111111111111111111111111111111111991111191111111111111111111191111111111111119111111111111111911111111111119111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THEY'RE ATTACKING THE BASE ON THE SNOW PLANET!", DialogLayout.Center)
        game.showLongText("!!!CHARGE!!!", DialogLayout.Center)
        Level = 2
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_1 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 420 && Level_Up_1 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8888838888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888888888888888888888888888888888888888838888888888888888888888888
            8883333388888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888883333388888888888888888888888
            8888333888888888888888688888888888888888888888688888833388888886888888888888888888888868888888888888888688888888888888888888886888888333888888688888888888888888
            8888383888888888888888888888888888888888888888888888838388888888888888888888888888888888888888888888888888888888888888888888888888888383888888888888888888888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886968888888888888888888888888888888
            8888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888668888888886888888688888888
            8888888888888888888888888888886968888888888888888888888388888888888888696888888888888888888888888888888888888869688888888888888888888668888888888888886968888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888838888888888888888888888888888888888866888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888888838888888888888888888888888888888888888888888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
            8888883333388888888888888888888888888888888888888888888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
            8888888333888888888888888888888888888888888888888888888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
            8888888383888888888888888888888888888888888888888888888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            888888888888888888ddd8888888888888888888888888888888888888ddd888888888888888888888888888888888888888888ddd88888888888888888888888888888888ddd8888888888888888888
            8888888888888888888d888888888888888888888888888888888888888d88888888888888888888888888888888888888888888d8888888888888888888888888888888888d88888888888888888888
            8888888888888888888888888888888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888886668888888888888888888886688888888888888886888888888888888888888888888
            8888888888888888888888888888888888888888888888883888888888888888888888888888888888888888888688888888888888888888886688888888888888866688888888888888888888888888
            8888888888888888888888888888888888888888888888333338888888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888888868888888
            8888868888888888688888888888888688888888888888833388888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888838388888888888888888886888888888888688888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888883888888888888888888888888888668888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888333338888888888888888888888888668888888888
            8888888888888888888888888888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888833388888888888888888888888888888888888888
            8888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888838388888888888888888888888888888888888888
            8888888888888888888888888888888888888888888868888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888886888888888888888888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888688888888888888888888888888888888888888888888888888
            8888888888888888888d88888888888888888888888888888888888888ddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888ddd88888888888888888888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888688888888888888888888
            8888888888888888888d88888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888
            8888888888888888888888888888868888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888666888888888888888888888888888888888
            8888888888888888888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888868888888888888888868888888888888888888888888888888888
            8888888888388888888888888888888888888888888888888888888888888888888668888888888388888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888883888888888888888888888888888888888888888888888888888888886688888888883888888888888888888888888888888888888888888888888888888d8888888886888888888888888
            88888888333338888888688888888888888888888888888888888888d8888888888888888888833333888888888888888888888888888888888888888888888888888ddd888888888888888888888888
            8888888883338888888696888888888888888888888888888888888d3d88888888888888888888333888888888888888888d8888888888888888888888888888888888d8888888888888888888888888
            88888888838388888888688888888888888888888888888688888888d88888888888888888888838388888888888888888ddd88888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999
            8888888888888888888888888888888889999988888888888888888888888888888888888999998888888888888888888888888888888888899999888888888888888888888888888888888889999111
            8888888888888888888888888888888991111199888888888888888888888888888888899111119988888888888888888888888888888889911111998888888888888888888888888888888991111111
            8888888888888888888888888888999111111111998888888888888888888888888899911111111199888888888888888888888888889991111111119988888888888888888888888888999111111111
            8888888888888888888888888899111111111111119988888888888888888888888911111111111111998888888888888888888888991111111111111199888888888888888888888899111111111111
            9999999888888888888888899911111111111111111199888888888888888889991111111111111111119988888888888888888999111111111111111111998888888888888888899911111111111111
            1111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111111119999999999999999911111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111119991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111191119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111911119111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111199111111111111111119111119111111111111111111111111111111111111111111111111111111111111111111111111111111111111191111111111111
            1111111111111111111111111111111111999111111111111111119111119111111111111111111111111111999999111111111111111999999111111111111111111111111111199919111111111111
            1111111111111111111111111111111199919111111111111111119111119111111111111111111111111199111111911111111111119911119911111111111111111111111111911111911111111111
            1111111111111111111111111111199911119911111111111111119111119111111111111111111111111191111111191111111111991111111911111111111111111111111199111111911111111111
            1111111111111111111111111119911111111911111111111111191111119111111111111111111111111191111111191111119999911111111191111111111111111111111991111111199111111111
            1111111111111111111111111111111111111991111111111111191111119111111111111111111111111191111111119111111111111111111191111111111111111111119911111111119111111111
            1111111111999911111111111111111111111191111111111111191111191111111111111111111111111191111111119111111111111111111191111111111111111111191111111111111911111111
            1111111199111191111111111111111111111191111111111111199111111111111111111991111111111191111111111911111111111111111119111111111111111111111111111111111911111111
            1111111991111119111111111111111111111111111111111111111111111111111111199919111111111191111111111911111111111111111111111111111111111111111111111111111991111111
            1111119111111111911111111111111111111111111111111111111111111111111111991119911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111191111111111911111111111111111111111111111111111111111111111111111911111911111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111911111111111111111111111111111111111111111111111111119111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111191111111191111111191111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111911111111191111111119111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111119111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111191111111111191111111111111111111911111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111119999111111111111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999111111111111111111
            1111111111111991119111111111111111111111119999911111111111111111111111111111111111111111111111111111111111111999111111111111111111111119911119911111111111111111
            1111111111119111119111111111111111111111199111911111111111111111111111111111911111111111111111111111111111119919911111111111111111111119111111911111111111111111
            1111111111191111119111111111111111111111991111191111111111111111111111111119911111111111111111111111111111991111991111111111111111111191111111991111111111111111
            1111111111191111111911111111111111111111911111199111111111111111111111111191191111111111111111111111111119111111191111111111111111111191111111191111111111111111
            1111111111911111111911111111111111111199111111119111111111111111111111111191191111111111111111111111111191111111191111111111111111111911111111119111111111111111
            1111111111911111111911111111111111111911111111119111111111111111111111111911191111111111111111111111119911111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111119911111111119111111111111111111111111911191111111111111111111111191111111111191111111111111111119111111111119111111111111111
            1111111119111111111911111111111111199111111111119111111111111111111111119111191111111111111111111111991111111111119111111111111111191111111111119111111111111111
            1111111191111111111911111111111111111111111111111111111111111111111111119111191111111111111111111119111111111111119111111111111111191111111111119111111111111111
            1111111991111111111911111111111111111111111111111111111111111111111111991111191111111111111111111191111111111111119111111111111111911111111111119111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THEY'RE ATTACKING THE BASE ON THE SNOW PLANET!", DialogLayout.Center)
        game.showLongText("!!!CHARGE!!!", DialogLayout.Center)
        Level = 2
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_1 = true
    }
    
})
forever(function on_forever6() {
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 900 && Level_Up_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888851588888888888888888888888888888888888851588888888888888888888888888888
            8888888888888888888888888888888888888888888888888888885158888888888588888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888588888
            8888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
            8888888888888888888888885888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888851115888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888818888888888888888888888888888888888885888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888
            8888888888888858888888888888885111588888888888888888888888888888888851588888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888555888888888888888888888888888888888885888888888888888888888888888888851115888888888888888888888888888888888888888888885888888888
            8888888888888888888888888888888585888888888888888888888888888888888888888888888888888588888888888888885558888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888515888888888888888888888888888888888858888888888588888888888888888888888888888888888888888888888888888888888888888888888888888851588888888888
            8888888888888888888858888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888888888888888888888888888888888888885111588888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888
            8888888888888888888888888888888888885888888888888888888555888888888888888888888888888885888888888888888888888888888881888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888585888888888888888888888888888881888888888858888888888888888551158888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888511158888888888888888888888888855588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888888888888888888888888858588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888
            8888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888
            8888888888888888888885888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888881888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888511158888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888855588888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888851588888888888888888888888888888888888888885888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888851588888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888511158888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
            8888888888888888888888888888888888888888888888888855588888888888858888888888885888888888888885888888888888888888888888888888888888888888888888888888888888588888
            8888888888888888888588888888888888888888888888888858588888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888188888
            8888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888851115888
            8888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888888888888888888888688888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888866888888888888858888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888666688888888888888888888888888888888888866668888888888888888888888888888888888886666888888888888888888888888888888888888866688888888888888888888888
            8888888888866666888888888888888888888888888888888886666688888888888888888888888888888888888666668888888888888888888888888888888888866666888888888888888888888888
            8888888888888666888888888888888888888888888888888888866688888888888888888888888888888888888886668888888888888888888888888888888888888866888888888888888888888888
            8888888888886666688888888888888888888885888888888888666668888888888888888888888888888888888866666888888888888888888888888888888888886666688888888588888888888888
            8888888888886666666888888888888888888851588888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888
            8888888888866666688888888888888888888885888888888886666668888888888888888888588888888888888666666888888885888888888888858888888888866666688888888888888888888888
            8888888888666666668888888888888888888888888888888666666666888888888888888888888888888888886666666688888888888888888888888888888886666666668888888888888888888888
            8888888886866666666888888888888888888888888888888886666666688888888888888888888888888888888666666668888888888888888888888888888888866666666888888888888888885888
            8888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888888888888888666666688888888888888888888888
            8888888888886666668888886888888888888888888888888888666666888888668888888888888888888888888866666688888868888888888888888888888888886666668888886888888888888888
            8888888888666666666888886888888888888888888888888866666666688888668888888888888888888888886666666668888868888888888888888888888888666666666888886888888888888888
            8885888888666666666688866888888888888888888888888666666666668886668888888888888888888888886666666666888668888888888888888888888886666666666688866888888888888888
            8888888886666666668888886688888888888888888888866666666666888888668888888888888888888886666666666688888866888888888888888888888666666666668888886688888888888888
            8888888666666666668888866888888888888888888888888666666666888886668888888888888888888888886666666688888668888888888888888888888886666666668888866888888888888888
            8888888886666666888888666688888888888888888888888666666688888866668888888888888888888888886666668888886666888888888888888888888886666666888888666688888888888888
            8888888886666666666886666668888888888888888888886666666666688666666888888888888888888888666666666668866666668888888888888888888866666666666886666668888888888888
            8888888666666666666688866888888888886888888888888866666666668886668888888888688888888888886666666666888668888888888868888888888888666666666688866888888888886888
            8888888888666666666886666668888888886888888888886666666666688666666888888888688888888888666666666668866666668888888868888888888866666666666886666668888888886888
            8888888666666666666866666666888888866688888688866666666666686666666688888886668888868886666666666668666666668888888666888886888666666666666866666666888888866688
            8886888666666666666666666688888888886688888668888866666666666666668888888888668888866888886666666666666666888888888866888886688888666666666666666688888888886688
            8886688888666666666666666666888888866888886688886666666666666666666688888886688888668888666666666666666666668888888668888866888866666666666666666666888888866888
            8866888666666666666666666666688888666688888668866666666666666666666668888866668888866886666666666666666666666888886666888886688666666666666666666666688888666688
            8886688666666666666666666668888888866668886666666666666666666666666888888886666888666666666666666666666666668888888666688866666666666666666666666668888888866668
            8866666666666666666666666666688888666688888666666666666666666666666668888866668888866666666666666666666666666888886666888886666666666666666666666666688888666688
            8886666666666666666666666666668886666668888666666666666666666666666666888666666888866666666666666666666666666688866666688886666666666666666666666666668886666668
            8886666666666666666666666666888888666688886666666666666666666666666688888866668888666666666666666666666666668888886666888866666666666666666666666666888888666688
            8866666666666666666666666666668866666668866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666668
            8666666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666668866666666886666666666666666666666666666886666666688666666666666666666666666666688666666666866666666666666666666666666668866666666
            6666666666666666666666666666666866666666666666666666666666666666666666686666666666666666666666666666666666666668666666666666666666666666666666666666666866666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666eeeee66666666eee6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeee666666666666666666666666
            666666666eeeeeeeeeeeeeeeeeeee666eeeeeeee6666666666666666eeeee6666666666666eee666666666eeeeeeeeeee6666eeeeeee6666ee66eeeee666666eeeeeeeeeee6666666eeeeeeeeee66666
            666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeee666
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THE ALIENS HAVE LANDED ON EARTH!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        Level = 3
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_2 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 910 && Level_Up_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888851588888888888888888888888888888888888851588888888888888888888888888888
            8888888888888888888888888888888888888888888888888888885158888888888588888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888588888
            8888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
            8888888888888888888888885888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888851115888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888818888888888888888888888888888888888885888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888
            8888888888888858888888888888885111588888888888888888888888888888888851588888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888555888888888888888888888888888888888885888888888888888888888888888888851115888888888888888888888888888888888888888888885888888888
            8888888888888888888888888888888585888888888888888888888888888888888888888888888888888588888888888888885558888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888515888888888888888888888888888888888858888888888588888888888888888888888888888888888888888888888888888888888888888888888888888851588888888888
            8888888888888888888858888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888888888888888888888888888888888888885111588888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888
            8888888888888888888888888888888888885888888888888888888555888888888888888888888888888885888888888888888888888888888881888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888585888888888888888888888888888881888888888858888888888888888551158888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888511158888888888888888888888888855588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888888888888888888888888858588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888
            8888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888
            8888888888888888888885888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888881888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888511158888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888855588888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888851588888888888888888888888888888888888888885888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888851588888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888511158888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
            8888888888888888888888888888888888888888888888888855588888888888858888888888885888888888888885888888888888888888888888888888888888888888888888888888888888588888
            8888888888888888888588888888888888888888888888888858588888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888188888
            8888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888851115888
            8888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888888888888888888888688888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888866888888888888858888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888666688888888888888888888888888888888888866668888888888888888888888888888888888886666888888888888888888888888888888888888866688888888888888888888888
            8888888888866666888888888888888888888888888888888886666688888888888888888888888888888888888666668888888888888888888888888888888888866666888888888888888888888888
            8888888888888666888888888888888888888888888888888888866688888888888888888888888888888888888886668888888888888888888888888888888888888866888888888888888888888888
            8888888888886666688888888888888888888885888888888888666668888888888888888888888888888888888866666888888888888888888888888888888888886666688888888588888888888888
            8888888888886666666888888888888888888851588888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888
            8888888888866666688888888888888888888885888888888886666668888888888888888888588888888888888666666888888885888888888888858888888888866666688888888888888888888888
            8888888888666666668888888888888888888888888888888666666666888888888888888888888888888888886666666688888888888888888888888888888886666666668888888888888888888888
            8888888886866666666888888888888888888888888888888886666666688888888888888888888888888888888666666668888888888888888888888888888888866666666888888888888888885888
            8888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888888888888888666666688888888888888888888888
            8888888888886666668888886888888888888888888888888888666666888888668888888888888888888888888866666688888868888888888888888888888888886666668888886888888888888888
            8888888888666666666888886888888888888888888888888866666666688888668888888888888888888888886666666668888868888888888888888888888888666666666888886888888888888888
            8885888888666666666688866888888888888888888888888666666666668886668888888888888888888888886666666666888668888888888888888888888886666666666688866888888888888888
            8888888886666666668888886688888888888888888888866666666666888888668888888888888888888886666666666688888866888888888888888888888666666666668888886688888888888888
            8888888666666666668888866888888888888888888888888666666666888886668888888888888888888888886666666688888668888888888888888888888886666666668888866888888888888888
            8888888886666666888888666688888888888888888888888666666688888866668888888888888888888888886666668888886666888888888888888888888886666666888888666688888888888888
            8888888886666666666886666668888888888888888888886666666666688666666888888888888888888888666666666668866666668888888888888888888866666666666886666668888888888888
            8888888666666666666688866888888888886888888888888866666666668886668888888888688888888888886666666666888668888888888868888888888888666666666688866888888888886888
            8888888888666666666886666668888888886888888888886666666666688666666888888888688888888888666666666668866666668888888868888888888866666666666886666668888888886888
            8888888666666666666866666666888888866688888688866666666666686666666688888886668888868886666666666668666666668888888666888886888666666666666866666666888888866688
            8886888666666666666666666688888888886688888668888866666666666666668888888888668888866888886666666666666666888888888866888886688888666666666666666688888888886688
            8886688888666666666666666666888888866888886688886666666666666666666688888886688888668888666666666666666666668888888668888866888866666666666666666666888888866888
            8866888666666666666666666666688888666688888668866666666666666666666668888866668888866886666666666666666666666888886666888886688666666666666666666666688888666688
            8886688666666666666666666668888888866668886666666666666666666666666888888886666888666666666666666666666666668888888666688866666666666666666666666668888888866668
            8866666666666666666666666666688888666688888666666666666666666666666668888866668888866666666666666666666666666888886666888886666666666666666666666666688888666688
            8886666666666666666666666666668886666668888666666666666666666666666666888666666888866666666666666666666666666688866666688886666666666666666666666666668886666668
            8886666666666666666666666666888888666688886666666666666666666666666688888866668888666666666666666666666666668888886666888866666666666666666666666666888888666688
            8866666666666666666666666666668866666668866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666668
            8666666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666668866666666886666666666666666666666666666886666666688666666666666666666666666666688666666666866666666666666666666666666668866666666
            6666666666666666666666666666666866666666666666666666666666666666666666686666666666666666666666666666666666666668666666666666666666666666666666666666666866666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666eeeee66666666eee6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeee666666666666666666666666
            666666666eeeeeeeeeeeeeeeeeeee666eeeeeeee6666666666666666eeeee6666666666666eee666666666eeeeeeeeeee6666eeeeeee6666ee66eeeee666666eeeeeeeeeee6666666eeeeeeeeee66666
            666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeee666
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THE ALIENS HAVE LANDED ON EARTH!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        Level = 3
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_2 = true
    }
    
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 920 && Level_Up_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.none, 1)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        game.splash("Next Level!")
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888851588888888888888888888888888888888888851588888888888888888888888888888
            8888888888888888888888888888888888888888888888888888885158888888888588888888888888888888885888888888888888888888888888888888888885888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888588888
            8888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
            8888888888888888888888885888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888851115888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888818888888888888888888888888888888888885888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888
            8888888888888858888888888888885111588888888888888888888888888888888851588888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888555888888888888888888888888888888888885888888888888888888888888888888851115888888888888888888888888888888888888888888885888888888
            8888888888888888888888888888888585888888888888888888888888888888888888888888888888888588888888888888885558888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888515888888888888888888888888888888888858888888888588888888888888888888888888888888888888888888888888888888888888888888888888888851588888888888
            8888888888888888888858888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888
            8888888888888888888888888888888888888888888888888888885111588888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888
            8888888888888888888888888888888888885888888888888888888555888888888888888888888888888885888888888888888888888888888881888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888585888888888888888888888888888881888888888858888888888888888551158888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888511158888888888888888888888888855588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888888888888888888888888858588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888
            8888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888
            8888888888888888888885888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888881888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888511158888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888855588888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888858588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888851588888888888888888888888888888888888888885888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888851588888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888
            8888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8885158888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888588888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888511158888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
            8888888888888888888888888888888888888888888888888855588888888888858888888888885888888888888885888888888888888888888888888888888888888888888888888888888888588888
            8888888888888888888588888888888888888888888888888858588888888888888888888888851588888888888888888888888888888888888888888888888888888888888888888888888888188888
            8888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888851115888
            8888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885858888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888515888888888888888888888888888888888888888888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888
            8888888888888886888888888888888888888888888888888888888688888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888866888888888888858888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888
            8888888888888666688888888888888888888888888888888888866668888888888888888888888888888888888886666888888888888888888888888888888888888866688888888888888888888888
            8888888888866666888888888888888888888888888888888886666688888888888888888888888888888888888666668888888888888888888888888888888888866666888888888888888888888888
            8888888888888666888888888888888888888888888888888888866688888888888888888888888888888888888886668888888888888888888888888888888888888866888888888888888888888888
            8888888888886666688888888888888888888885888888888888666668888888888888888888888888888888888866666888888888888888888888888888888888886666688888888588888888888888
            8888888888886666666888888888888888888851588888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888
            8888888888866666688888888888888888888885888888888886666668888888888888888888588888888888888666666888888885888888888888858888888888866666688888888888888888888888
            8888888888666666668888888888888888888888888888888666666666888888888888888888888888888888886666666688888888888888888888888888888886666666668888888888888888888888
            8888888886866666666888888888888888888888888888888886666666688888888888888888888888888888888666666668888888888888888888888888888888866666666888888888888888885888
            8888888888666666688888888888888888888888888888888866666668888888888888888888888888888888886666666888888888888888888888888888888888666666688888888888888888888888
            8888888888886666668888886888888888888888888888888888666666888888668888888888888888888888888866666688888868888888888888888888888888886666668888886888888888888888
            8888888888666666666888886888888888888888888888888866666666688888668888888888888888888888886666666668888868888888888888888888888888666666666888886888888888888888
            8885888888666666666688866888888888888888888888888666666666668886668888888888888888888888886666666666888668888888888888888888888886666666666688866888888888888888
            8888888886666666668888886688888888888888888888866666666666888888668888888888888888888886666666666688888866888888888888888888888666666666668888886688888888888888
            8888888666666666668888866888888888888888888888888666666666888886668888888888888888888888886666666688888668888888888888888888888886666666668888866888888888888888
            8888888886666666888888666688888888888888888888888666666688888866668888888888888888888888886666668888886666888888888888888888888886666666888888666688888888888888
            8888888886666666666886666668888888888888888888886666666666688666666888888888888888888888666666666668866666668888888888888888888866666666666886666668888888888888
            8888888666666666666688866888888888886888888888888866666666668886668888888888688888888888886666666666888668888888888868888888888888666666666688866888888888886888
            8888888888666666666886666668888888886888888888886666666666688666666888888888688888888888666666666668866666668888888868888888888866666666666886666668888888886888
            8888888666666666666866666666888888866688888688866666666666686666666688888886668888868886666666666668666666668888888666888886888666666666666866666666888888866688
            8886888666666666666666666688888888886688888668888866666666666666668888888888668888866888886666666666666666888888888866888886688888666666666666666688888888886688
            8886688888666666666666666666888888866888886688886666666666666666666688888886688888668888666666666666666666668888888668888866888866666666666666666666888888866888
            8866888666666666666666666666688888666688888668866666666666666666666668888866668888866886666666666666666666666888886666888886688666666666666666666666688888666688
            8886688666666666666666666668888888866668886666666666666666666666666888888886666888666666666666666666666666668888888666688866666666666666666666666668888888866668
            8866666666666666666666666666688888666688888666666666666666666666666668888866668888866666666666666666666666666888886666888886666666666666666666666666688888666688
            8886666666666666666666666666668886666668888666666666666666666666666666888666666888866666666666666666666666666688866666688886666666666666666666666666668886666668
            8886666666666666666666666666888888666688886666666666666666666666666688888866668888666666666666666666666666668888886666888866666666666666666666666666888888666688
            8866666666666666666666666666668866666668866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666668
            8666666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666666886666666886666666666666666666666666666688666666688666666666666666666666666666668866666666866666666666666666666666666666886666666
            8866666666666666666666666666668866666666886666666666666666666666666666886666666688666666666666666666666666666688666666666866666666666666666666666666668866666666
            6666666666666666666666666666666866666666666666666666666666666666666666686666666666666666666666666666666666666668666666666666666666666666666666666666666866666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666eeeee66666666eee6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeee666666666666666666666666
            666666666eeeeeeeeeeeeeeeeeeee666eeeeeeee6666666666666666eeeee6666666666666eee666666666eeeeeeeeeee6666eeeeeee6666ee66eeeee666666eeeeeeeeeee6666666eeeeeeeeee66666
            666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeee666
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        game.setDialogTextColor(2)
        game.showLongText("THE ALIENS HAVE LANDED ON EARTH!", DialogLayout.Center)
        game.showLongText("!!!ATTACK!!!", DialogLayout.Center)
        Level = 3
        info.player1.changeScoreBy(100)
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
            info.player2.changeScoreBy(100)
        }
        
        Level_Up_2 = true
    }
    
})
forever(function on_forever7() {
    
    if (100000 == info.score()) {
        Level_Up_1 = false
        Level_Up_2 = false
        Level_Up_3 = false
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRammer, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.none, 1)
        sprites.destroyAllSpritesOfKind(SpriteKind.BossEnemy, effects.none, 1)
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `)
        game.setDialogFrame(img`
            ...cc..............................cc.....
            ..c55c..bbbb...bbbbb...bbbbb......c55c....
            .cb55bcbfffbbbbb777bbbbbfffbbbbbbcb55bc...
            b555555bbfffb111b777b111bfffb111b555555b..
            bb5555bbbbfb11111b7b11111bfb1111bb5555bb..
            cb5555bcfff1111177711111fff11111cb5555bc..
            .c5bb5c1111f11171117111f111f11111c5bb5c...
            .cbbbbc11111111111111111111111111cbbbbc...
            ..b1111111111111111111111111111111711bb...
            ..b111111111111111111111111111111117bb7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7b1711111111111111111111111111111111b...
            .bb11171111111111111111111111111111111b...
            ..b1111111111111111111111111111111f111bb..
            ..b11111111111111111111111111111111f1bfb..
            ..bb1111111111111111111111111111111fbffb..
            .bbfb1f1111111111111111111111111111ffffb..
            .bffff1111111111111111111111111111f1bfbb..
            .bffbf1111111111111111111111111111111bb...
            .bfb1f11111111111111111111111111111111b...
            .bb111f1111111111111111111111111111111b...
            ..b11111111111111111111111111111117111bb..
            ..b1111111111111111111111111111111171b7b..
            ..bb11111111111111111111111111111117b77b..
            .bb7b1711111111111111111111111111117777b..
            .b7777111111111111111111111111111171b7bb..
            .b77b71111111111111111111111111111111bb...
            .b7bb111111111111111111111111111111111b...
            .bbb1111111111111111111111111111111111b...
            ..bcc111111111111111111111111111111cc1b...
            ..c55c1117111f111f11171117111f1111c55cb...
            .cb55bc7711111fff1111177711111fffcb55bc...
            b555555b11111bfb11111b7b11111bfbb555555b..
            bb5555bbb111bfffb111b777b111bfffbb5555bb..
            cb5555bc7bbbbbfffbbbbb777bbbbbffcb5555bc..
            .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
            .cbbbbc..........................cbbbbc...
            ..........................................
            ..........................................
            `)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 1)
        game.setDialogTextColor(2)
        game.showLongText("!!!VICTORY!!!", DialogLayout.Center)
        game.splash("THANKS TO YOU")
        game.splash("HUMANITIE IS SAVED")
        game.splash("AND THE WAR HAS ENDED")
        game.gameOver(true)
        game.reset()
    }
    
})
game.onUpdateInterval(2000, function on_update_interval8() {
    
    if (Level != 4) {
        if (Level != 3) {
            if (Level != 2) {
                for (let index2 of sprites.allOfKind(SpriteKind.Enemy)) {
                    Projectile_3 = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . 2 . . . . . .
                            . . . . . . . . 2 2 . . . . . .
                            . . . . . . 2 1 1 1 4 . . . . .
                            . . . . . 2 2 1 1 1 2 4 . . . .
                            . . . . . . 2 1 1 1 4 . . . . .
                            . . . . . . . . 2 2 . . . . . .
                            . . . . . . . . . 2 . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            `, index2, -90, 0)
                    Projectile_3.setKind(SpriteKind.EnemyProjectile)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                }
            }
            
        }
        
    }
    
})
game.onUpdateInterval(2000, function on_update_interval9() {
    
    if (Level == 2) {
        for (let index3 of sprites.allOfKind(SpriteKind.Enemy)) {
            Projectile_3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . 4 . . . . . .
                    . . . . . . . . 4 4 9 9 . . . .
                    . . . . . . 4 f f f 6 6 9 . . .
                    . . . . . 4 4 f f f 8 6 6 9 . .
                    . . . . . . 4 f f f 6 6 9 . . .
                    . . . . . . . . 4 4 9 9 . . . .
                    . . . . . . . . . 4 . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, index3, -90, 0)
            Projectile_3.setKind(SpriteKind.EnemyProjectile)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        }
    }
    
})
game.onUpdateInterval(2000, function on_update_interval10() {
    
    if (Level == 3) {
        for (let index4 of sprites.allOfKind(SpriteKind.Enemy)) {
            Projectile_3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . 2 . . . . . .
                    . . . . . . . . 2 2 4 4 . . . .
                    . . . . . . 2 1 1 1 2 2 4 . . .
                    . . . . . 2 2 1 1 1 5 2 2 4 . .
                    . . . . . . 2 1 1 1 2 2 4 . . .
                    . . . . . . . . 2 2 4 4 . . . .
                    . . . . . . . . . 2 . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    `, index4, -100, 0)
            Projectile_3.setKind(SpriteKind.EnemyProjectile)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        }
    }
    
})
forever(function on_forever8() {
    
    if (Level == 4 && BossSpawned == false) {
        Lord_of_the_Red_Star = sprites.create(img`
                66.........6666.........66
                666622...26666662...226666
                .6662....22266222....2666.
                .6662......2662......2666.
                .22262.....2662.....26222.
                .2..262...226622...262..2.
                .....262.24466442.262.....
                ......262ffffffff262......
                .......2ffffffffff2.......
                .22...2ff2ffffff2ff2...22.
                .62..24ff222ff222ff42..26.
                6622224ffff2ff2ffff4222266
                6666666ffffffffffff6666666
                6622224ff2ffffff2ff4222266
                .62..24ff222ff222ff42..26.
                .22...2ffff2222ffff2...22.
                .......2ffffffffff2.......
                ......262ffffffff262......
                .....262.24466442.262.....
                .2..262...226622...262..2.
                .22262.....2662.....26222.
                .6662......2662......2666.
                .6662....22266222....2666.
                666622...26666662...226666
                66.........6666.........66
                `, SpriteKind.BossEnemy)
        animation.runImageAnimation(Lord_of_the_Red_Star, [img`
                    66.........6666.........66
                    666622...26666662...226666
                    .6662....22266222....2666.
                    .6662......2662......2666.
                    .22262.....2662.....26222.
                    .2..262...226622...262..2.
                    .....262.24466442.262.....
                    ......262ffffffff262......
                    .......2ffffffffff2.......
                    .22...2ff2ffffff2ff2...22.
                    .62..24ff222ff222ff42..26.
                    6622224ffff2ff2ffff4222266
                    6666666ffffffffffff6666666
                    6622224ff2ffffff2ff4222266
                    .62..24ff222ff222ff42..26.
                    .22...2ffff2222ffff2...22.
                    .......2ffffffffff2.......
                    ......262ffffffff262......
                    .....262.24466442.262.....
                    .2..262...226622...262..2.
                    .22262.....2662.....26222.
                    .6662......2662......2666.
                    .6662....22266222....2666.
                    666622...26666662...226666
                    66.........6666.........66
                    `, img`
                    ..........6666..........66
                    ........26666662....226666
                    66......22266222.....2666.
                    666622....2662.......2666.
                    .6662.....2662......26222.
                    .6662.....2662.....262..2.
                    .22262...226622...262.....
                    .2..262.24466442.262......
                    .....262ffffffff262.......
                    ......2ffffffffff2........
                    .22..2ff2ffffff2ff2....22.
                    .62.24ff222ff222ff42...26.
                    662224ffff2ff2ffff42222266
                    666666ffffffffffff66666666
                    662224ff2ffffff2ff42222266
                    .62.24ff222ff222ff42...26.
                    .22..2ffff2222ffff2....22.
                    ......2ffffffffff2........
                    .....262ffffffff262.......
                    .2..262.24466442.262..2...
                    .22262...226622...26222...
                    .6662.....2662.....2666...
                    .6662...22266222...2666...
                    666622..26666662..226666..
                    66........6666........66..
                    `, img`
                    .........6666...........66
                    .......26666662.....226666
                    .......22266222......2666.
                    .........2662........2666.
                    66.......2662.......26222.
                    666622...2662......262..2.
                    .6662....2662.....262.....
                    .6662...226622...262......
                    .22262.24466442.262.......
                    .2..262ffffffff262........
                    .....2ffffffffff2.........
                    .22.2ff2ffffff2ff2.....22.
                    .6224ff222ff222ff42....26.
                    66224ffff2ff2ffff422222266
                    66666ffffffffffff666666666
                    66224ff2ffffff2ff422222266
                    .6224ff222ff222ff42....26.
                    .22.2ffff2222ffff2.....22.
                    .....2ffffffffff2.........
                    .2..262ffffffff262..2.....
                    .22262.24466442.26222.....
                    .6662...226622...2666.....
                    .6662..22266222..2666.....
                    666622.26666662.226666....
                    66.......6666.......66....
                    `, img`
                    ..........6666..........66
                    ........26666662....226666
                    66......22266222.....2666.
                    666622....2662.......2666.
                    .6662.....2662......26222.
                    .6662.....2662.....262..2.
                    .22262...226622...262.....
                    .2..262.24466442.262......
                    .....262ffffffff262.......
                    ......2ffffffffff2........
                    .22..2ff2ffffff2ff2....22.
                    .62.24ff222ff222ff42...26.
                    662224ffff2ff2ffff42222266
                    666666ffffffffffff66666666
                    662224ff2ffffff2ff42222266
                    .62.24ff222ff222ff42...26.
                    .22..2ffff2222ffff2....22.
                    ......2ffffffffff2........
                    .....262ffffffff262.......
                    .2..262.24466442.262..2...
                    .22262...226622...26222...
                    .6662.....2662.....2666...
                    .6662...22266222...2666...
                    666622..26666662..226666..
                    66........6666........66..
                    `, img`
                    66.........6666.........66
                    666622...26666662...226666
                    .6662....22266222....2666.
                    .6662......2662......2666.
                    .22262.....2662.....26222.
                    .2..262...226622...262..2.
                    .....262.24466442.262.....
                    ......262ffffffff262......
                    .......2ffffffffff2.......
                    .22...2ff2ffffff2ff2...22.
                    .62..24ff222ff222ff42..26.
                    6622224ffff2ff2ffff4222266
                    6666666ffffffffffff6666666
                    6622224ff2ffffff2ff4222266
                    .62..24ff222ff222ff42..26.
                    .22...2ffff2222ffff2...22.
                    .......2ffffffffff2.......
                    ......262ffffffff262......
                    .....262.24466442.262.....
                    .2..262...226622...262..2.
                    .22262.....2662.....26222.
                    .6662......2662......2666.
                    .6662....22266222....2666.
                    666622...26666662...226666
                    66.........6666.........66
                    `, img`
                    66........6666........66..
                    666622..26666662..226666..
                    .6662...22266222...2666...
                    .6662.....2662.....2666...
                    .22262...226622...26222...
                    .2..262.24466442.262..2...
                    .....262ffffffff262.......
                    ......2ffffffffff2........
                    .22..2ff2ffffff2ff2....22.
                    .62.24ff222ff222ff42...26.
                    662224ffff2ff2ffff42222266
                    666666ffffffffffff66666666
                    662224ff2ffffff2ff42222266
                    .62.24ff222ff222ff42...26.
                    .22..2ffff2222ffff2....22.
                    ......2ffffffffff2........
                    .....262ffffffff262.......
                    .2..262.24466442.262......
                    .22262...226622...262.....
                    .6662....22662.....262..2.
                    .6662.....2662......26222.
                    666622....2662.......2666.
                    66......22266222.....2666.
                    ........26666662....226666
                    ..........6666..........66
                    `, img`
                    66.......6666.......66....
                    666622.26666662.226666....
                    .6662..22266222..2666.....
                    .6662...226622...2666.....
                    .22262.24466442.26222.....
                    .2..262ffffffff262..2.....
                    .....2ffffffffff2.........
                    .22.2ff2ffffff2ff2.....22.
                    .6224ff222ff222ff42....26.
                    66224ffff2ff2ffff422222266
                    66666ffffffffffff666666666
                    66224ff2ffffff2ff422222266
                    .6224ff222ff222ff42....26.
                    .22.2ffff2222ffff2.....22.
                    .....2ffffffffff2.........
                    .2..262ffffffff262........
                    .22262.24466442.262.......
                    .6662...226622...262......
                    .6662....2662.....262.....
                    666622...2662......262..2.
                    66.......2662.......26222.
                    .........2662........2666.
                    .......22266222......2666.
                    .......26666662.....226666
                    .........6666...........66
                    `, img`
                    66........6666........66..
                    666622..26666662..226666..
                    .6662...22266222...2666...
                    .6662.....2662.....2666...
                    .22262...226622...26222...
                    .2..262.24466442.262..2...
                    .....262ffffffff262.......
                    ......2ffffffffff2........
                    .22..2ff2ffffff2ff2....22.
                    .62.24ff222ff222ff42...26.
                    662224ffff2ff2ffff42222266
                    666666ffffffffffff66666666
                    662224ff2ffffff2ff42222266
                    .62.24ff222ff222ff42...26.
                    .22..2ffff2222ffff2....22.
                    ......2ffffffffff2........
                    .....262ffffffff262.......
                    .2..262.24466442.262......
                    .22262...226622...262.....
                    .6662....22662.....262..2.
                    .6662.....2662......26222.
                    666622....2662.......2666.
                    66......22266222.....2666.
                    ........26666662....226666
                    ..........6666..........66
                    `, img`
                    66.........6666.........66
                    666622...26666662...226666
                    .6662....22266222....2666.
                    .6662......2662......2666.
                    .22262.....2662.....26222.
                    .2..262...226622...262..2.
                    .....262.24466442.262.....
                    ......262ffffffff262......
                    .......2ffffffffff2.......
                    .22...2ff2ffffff2ff2...22.
                    .62..24ff222ff222ff42..26.
                    6622224ffff2ff2ffff4222266
                    6666666ffffffffffff6666666
                    6622224ff2ffffff2ff4222266
                    .62..24ff222ff222ff42..26.
                    .22...2ffff2222ffff2...22.
                    .......2ffffffffff2.......
                    ......262ffffffff262......
                    .....262.24466442.262.....
                    .2..262...226622...262..2.
                    .22262.....2662.....26222.
                    .6662......2662......2666.
                    .6662....22266222....2666.
                    666622...26666662...226666
                    66.........6666.........66
                    `, img`
                    ..66........6666........66
                    ..666622..26666662..226666
                    ...6662...22266222...2666.
                    ...6662.....2662.....2666.
                    ...22262....2662....26222.
                    ...2..262.24466442.262..2.
                    .......262ffffffff262.....
                    ........2ffffffffff2......
                    .22....2ff2ffffff2ff2..22.
                    .62...24ff222ff222ff42.26.
                    66222224ffff2ff2ffff422266
                    66666666ffffffffffff666666
                    66222224ff2ffffff2ff422266
                    .62...24ff222ff222ff42.26.
                    .22....2ffff2222ffff2..22.
                    ........2ffffffffff2......
                    .......262ffffffff262.....
                    ......262.24466442.262..2.
                    .....262...226622...26222.
                    .2..262.....2662.....2666.
                    .22262......2662.....2666.
                    .6662.......2662....226666
                    .6662.....22266222......66
                    666622....26666662........
                    66..........6666..........
                    `, img`
                    ....66.......6666.......66
                    ....666622.26666662.226666
                    .....6662..22266222..2666.
                    .....6662...226622...2666.
                    .....22262.24466442.26222.
                    .....2..262ffffffff262..2.
                    .........2ffffffffff2.....
                    .22.....2ff2ffffff2ff2.22.
                    .62....24ff222ff222ff4226.
                    662222224ffff2ff2ffff42266
                    666666666ffffffffffff66666
                    662222224ff2ffffff2ff42266
                    .62....24ff222ff222ff4226.
                    .22.....2ffff2222ffff2.22.
                    .........2ffffffffff2.....
                    ........262ffffffff262..2.
                    .......262.24466442.26222.
                    ......262...226622...2666.
                    .....262.....2662....2666.
                    .2..262......2662...226666
                    .22262.......2662.......66
                    .6662........2662.........
                    .6662......22266222.......
                    666622.....26666662.......
                    66...........6666.........
                    `, img`
                    ..66........6666........66
                    ..666622..26666662..226666
                    ...6662...22266222...2666.
                    ...6662.....2662.....2666.
                    ...22262....2662....26222.
                    ...2..262.24466442.262..2.
                    .......262ffffffff262.....
                    ........2ffffffffff2......
                    .22....2ff2ffffff2ff2..22.
                    .62...24ff222ff222ff42.26.
                    66222224ffff2ff2ffff422266
                    66666666ffffffffffff666666
                    66222224ff2ffffff2ff422266
                    .62...24ff222ff222ff42.26.
                    .22....2ffff2222ffff2..22.
                    ........2ffffffffff2......
                    .......262ffffffff262.....
                    ......262.24466442.262..2.
                    .....262...226622...26222.
                    .2..262.....2662.....2666.
                    .22262......2662.....2666.
                    .6662.......2662....226666
                    .6662.....22266222......66
                    666622....26666662........
                    66..........6666..........
                    `, img`
                    66.........6666.........66
                    666622...26666662...226666
                    .6662....22266222....2666.
                    .6662......2662......2666.
                    .22262.....2662.....26222.
                    .2..262...226622...262..2.
                    .....262.24466442.262.....
                    ......262ffffffff262......
                    .......2ffffffffff2.......
                    .22...2ff2ffffff2ff2...22.
                    .62..24ff222ff222ff42..26.
                    6622224ffff2ff2ffff4222266
                    6666666ffffffffffff6666666
                    6622224ff2ffffff2ff4222266
                    .62..24ff222ff222ff42..26.
                    .22...2ffff2222ffff2...22.
                    .......2ffffffffff2.......
                    ......262ffffffff262......
                    .....262.24466442.262.....
                    .2..262...226622...262..2.
                    .22262.....2662.....26222.
                    .6662......2662......2666.
                    .6662....22266222....2666.
                    666622...26666662...226666
                    66.........6666.........66
                    `, img`
                    66..........6666..........
                    666622....26666662........
                    .6662.....22266222......66
                    .6662.......2662....226666
                    .22262......2662.....2666.
                    .2..262.....2662.....2666.
                    .....262...226622...26222.
                    ......262.24466442.262..2.
                    .......262ffffffff262.....
                    ........2ffffffffff2......
                    .22....2ff2ffffff2ff2..22.
                    .62...24ff222ff222ff42.26.
                    66222224ffff2ff2ffff422266
                    66666666ffffffffffff666666
                    66222224ff2ffffff2ff422266
                    .62...24ff222ff222ff42.26.
                    .22....2ffff2222ffff2..22.
                    ........2ffffffffff2......
                    .......262ffffffff262.....
                    ...2..262.24466442.262..2.
                    ...22262...226622...26222.
                    ...6662.....2662.....2666.
                    ...6662...22266222...2666.
                    ..666622..26666662..226666
                    ..66........6666........66
                    `, img`
                    66...........6666.........
                    666622.....26666662.......
                    .6662......22266222.......
                    .6662........2662.........
                    .22262.......2662.......66
                    .2..262......2662...226666
                    .....262.....2662....2666.
                    ......262....2662....2666.
                    .......262.24466442.26222.
                    ........262ffffffff262..2.
                    .........2ffffffffff2.....
                    .22.....2ff2ffffff2ff2.22.
                    .62.....4ff222ff222ff4226.
                    662222224ffff2ff2ffff42266
                    666666666ffffffffffff66666
                    662222224ff2ffffff2ff42266
                    .62.....4ff222ff222ff4226.
                    .22.....2ffff2222ffff2.22.
                    .........2ffffffffff2.....
                    .....2..262ffffffff262..2.
                    .....22262.24466442.26222.
                    .....6662...226622...2666.
                    .....6662..22266222..2666.
                    ....666622.26666662.226666
                    ....66.......6666.......66
                    `, img`
                    66..........6666..........
                    666622....26666662........
                    .6662.....22266222......66
                    .6662.......2662....226666
                    .22262......2662.....2666.
                    .2..262.....2662.....2666.
                    .....262...226622...26222.
                    ......262.24466442.262..2.
                    .......262ffffffff262.....
                    ........2ffffffffff2......
                    .22....2ff2ffffff2ff2..22.
                    .62...24ff222ff222ff42.26.
                    66222224ffff2ff2ffff422266
                    66666666ffffffffffff666666
                    66222224ff2ffffff2ff422266
                    .62...24ff222ff222ff42.26.
                    .22....2ffff2222ffff2..22.
                    ........2ffffffffff2......
                    .......262ffffffff262.....
                    ...2..262.24466442.262..2.
                    ...22262...226622...26222.
                    ...6662.....2662.....2666.
                    ...6662...22266222...2666.
                    ..666622..26666662..226666
                    ..66........6666........66
                    `], 250, true)
        Lord_of_the_Red_Star.setStayInScreen(true)
        Lord_of_the_Red_Star.setBounceOnWall(true)
        Lord_of_the_Red_Star.setPosition(130, 60)
        Lord_of_the_Red_Star.setVelocity(60, 60)
        BossSpawned = true
    }
    
})
game.onUpdateInterval(25000, function on_update_interval11() {
    
    LifeUp_Heart = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . b c c c b . . b c c c b . .
            . c 3 1 1 1 3 c c 3 1 1 1 3 c .
            b 1 3 1 1 1 3 3 3 3 1 1 1 3 1 b
            c 1 3 3 3 1 1 3 3 1 1 3 3 3 1 c
            c 1 1 1 3 c c 3 3 c c 3 1 1 1 c
            c 1 1 1 c 2 2 c c 2 2 c 1 1 1 c
            c 3 1 1 c 2 2 2 2 2 2 c 1 1 3 c
            c 3 3 3 3 c 2 2 2 2 c 3 3 3 3 c
            b 1 1 1 1 3 c 2 2 c 3 1 1 1 1 b
            . c 1 1 3 3 1 c c 1 3 3 1 1 c .
            . . b 3 3 1 1 3 3 1 1 3 3 b . .
            . . . c 1 1 1 3 3 1 1 1 c . . .
            . . . . b 1 1 3 3 1 1 b . . . .
            . . . . . c c 3 3 c c . . . . .
            . . . . . . b c c b . . . . . .
            `, SpriteKind.Food)
    LifeUp_Heart.setPosition(randint(30, 100), randint(30, 100))
})
game.onUpdateInterval(1100, function on_update_interval12() {
    
    if (Level == 2) {
        Vilgaxian_Warrior_Ship = sprites.create(img`
                . . . . . . . . . . . . . . . . . . .
                . . 9 9 . . . . . . . . . . . 9 9 9 9
                . 9 6 d d d d d d d d d d . . 9 6 d .
                . 9 6 9 d d d d d d d d d d . 9 6 d .
                . . 9 . . 9 . 9 . . 9 . d d . . d d .
                . . . . 6 . . . 6 . . 6 d d . d d d .
                . . . . . 6 . 9 . . 9 . d d d d d d .
                . . . . 9 . . . 9 . . 6 d d d d d . .
                . . 9 . . 9 . 6 . . 9 . d d d . . . .
                . 9 6 9 d d d d d d d d d d . . . . .
                . 9 6 d d d d d d d d d d . . . . . .
                . . 9 9 . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . .
                `, SpriteKind.EnemyRammer)
        Vilgaxian_Warrior_Ship.setVelocity(-70, 0)
        Vilgaxian_Warrior_Ship.setPosition(160, randint(5, 115))
        Vilgaxian_Warrior_Ship.setFlag(SpriteFlag.AutoDestroy, true)
    }
    
})
game.onUpdateInterval(1100, function on_update_interval13() {
    
    if (Level != 2) {
        if (Level != 4) {
            Vilgaxian_Warrior_Ship = sprites.create(img`
                    . . . . . . . . . . . . . . . . . . .
                    . . 2 2 . . . . . . . . . . . 2 2 2 2
                    . 2 4 e e e e e e e e e e . . 2 4 e .
                    . 2 4 2 e e e e e e e e e e . 2 4 e .
                    . . 2 . . 2 . 2 . . 2 . e e . . e e .
                    . . . . 4 . . . 4 . . 4 e e . e e e .
                    . . . . . 4 . 2 . . 2 . e e e e e e .
                    . . . . 2 . . . 2 . . 4 e e e e e . .
                    . . 2 . . 2 . 4 . . 2 . e e e . . . .
                    . 2 4 2 e e e e e e e e e e . . . . .
                    . 2 4 e e e e e e e e e e . . . . . .
                    . . 2 2 . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . .
                    `, SpriteKind.EnemyRammer)
            if (Level == 3) {
                Vilgaxian_Warrior_Ship.setVelocity(-80, 0)
            } else {
                Vilgaxian_Warrior_Ship.setVelocity(-60, 0)
            }
            
            Vilgaxian_Warrior_Ship.setPosition(160, randint(5, 115))
            Vilgaxian_Warrior_Ship.setFlag(SpriteFlag.AutoDestroy, true)
        }
        
    }
    
})
