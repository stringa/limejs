goog.provide('test.video');


goog.require('lime');
goog.require('lime.Video');

goog.require('lime.Director');
goog.require('lime.Label');

goog.require('lime.Layer');
goog.require('lime.Scene');

goog.require('lime.Sprite');
goog.require('lime.Circle');

goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.Loop');


test.WIDTH = 600;
test.HEIGHT = 400;


test.start = function() {

    //director
    test.director = new lime.Director(document.body, test.WIDTH, test.HEIGHT);
    test.director.makeMobileWebAppCapable();


    var videoscene = new lime.Scene;

    var layer = (new lime.Layer).setSize(test.WIDTH, test.HEIGHT).setPosition(0, 0);//.setRenderer(lime.Renderer.CANVAS);
    videoscene.appendChild(layer);

    var video = new lime.Video().setSize(320, 220).setVideoUrl('assets/eye_of_beholder_intro.mp4');

    //layer.appendChild(video);


    var sprite = new lime.Sprite();//.setRenderer(lime.Renderer.CANVAS);

    sprite.appendChild(video);

    var ch1 = new lime.Circle().setSize(30, 30).setPosition(100, 100).setFill('#c00');
    sprite.appendChild(ch1);

    var ch2 = new lime.Circle().setSize(30, 30).setPosition(150, 100).setFill('#c00');
    sprite.appendChild(ch2);

    var ch3 = new lime.Circle().setSize(30, 30).setPosition(200, 100).setFill('#c00');
    sprite.appendChild(ch3);

    layer.appendChild(sprite);

    goog.events.listen(video, ['VideoCanPlay', 'VideoCanPlayThrough'], function () {
        video.playVideo();
    }, false, this);


//    var anim = new lime.animation.Loop(
//        new lime.animation.ScaleTo(.3).setDuration(3).enableOptimizations(),
//        new lime.animation.MoveTo(0,-30).setDuration(3).enableOptimizations(),
//        new lime.animation.ScaleTo(1).setDuration(3).enableOptimizations(),
//        new lime.animation.MoveTo(300,300).setDuration(3).enableOptimizations()
//    );
//
//    sprite.runAction(anim);

    // set active scene
    test.director.replaceScene(videoscene);


};

goog.exportSymbol('test.start', test.start);
