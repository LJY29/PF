document.addEventListener('DOMContentLoaded', function(){
    //페럴렉스 셋팅
    setParallaxCover();

    //반딧불이 셋팅
    setFirefly(0.5);

    //더보기 클릭
    console.log(document.getElementsByClassName('more'));
    document.getElementById('more-fourth').addEventListener('click', function(){
        // document.getElementById('wrap').classList.add('focus_cover');
        document.getElementById('modal-layout').classList.add('active');
        document.querySelectorAll('.modal.fourth')[0].classList.add('active');
    });
    document.getElementById('more-third').addEventListener('click', function(){
        // document.getElementById('wrap').classList.add('focus_cover');
        document.getElementById('modal-layout').classList.add('active');
        document.querySelectorAll('.modal.third')[0].classList.add('active');
    });
    document.getElementById('more-second').addEventListener('click', function(){
        // document.getElementById('wrap').classList.add('focus_cover');
        document.getElementById('modal-layout').classList.add('active');
        document.querySelectorAll('.modal.second')[0].classList.add('active');
    });
    document.getElementById('more-first').addEventListener('click', function(){
        // document.getElementById('wrap').classList.add('focus_cover');
        document.getElementById('modal-layout').classList.add('active');
        document.querySelectorAll('.modal.first')[0].classList.add('active');
    });

    document.getElementById('modal-close').addEventListener('click', function(){
        // document.getElementById('wrap').classList.remove('focus_cover');
        document.getElementById('modal-layout').classList.remove('active');
        for(var i=0; i<document.querySelectorAll('.modal').length; i++){
            document.querySelectorAll('.modal')[i].classList.remove('active');
        }
    });
});

function setParallaxCover(){    
    var direction = 0; //Wheel direction //1: down, -1: up
    var isWheelBlocked = false; //Wheel 블락 여부
    var timeId = 0; //setTimeout
    var pageNum = 0; //현재 페이지 번호 //cover: 0

    //mousewheel event
    $('#cover').on('wheel', function(e){
        clearTimeout(timeId);
        timeId = setTimeout(function() {
            isWheelBlocked = false;
        }, 200);

        if(isWheelBlocked) return false;
        isWheelBlocked = true;

        if(e.originalEvent.wheelDelta === undefined){
            direction = e.originalEvent.detail / 3;
        }else{
            direction = e.originalEvent.wheelDelta / -120;
        }

        if(direction > 0){
            //다음 페이지
            showPage(1);
            pageNum = 1;
        }
    });
    $('#page1').on('wheel', function(e){
        clearTimeout(timeId);
        timeId = setTimeout(function() {
            isWheelBlocked = false;
        }, 200);

        if(isWheelBlocked) return false;
        isWheelBlocked = true;

        if(e.originalEvent.wheelDelta === undefined){
            direction = e.originalEvent.detail / 3;
        }else{
            direction = e.originalEvent.wheelDelta / -120;
        }

        if(direction < 0){
            //이전 페이지
            if(document.documentElement.scrollTop === 0){
                showPage(0);
                pageNum = 0;
                $('#wrap').addClass('focus_cover');
            }
        }
    });
    $('#cover').on('transitionend', function(){
        if(pageNum === 0){
        }else{
            $('#wrap').removeClass('focus_cover');
        }
    });
    $('#skip-nav').on('click', function(){
        //다음 페이지
        showPage(1);
        pageNum = 1;
    })

    //swipe
    var touchstartX = 0; //터치 시작 x좌표
    var touchstartY = 0; //터치 시작 y좌표
    $('#cover').on('touchstart', function(e){
        var touch = e.touches[0];
        touchstartX = touch.clientX;
        touchstartY = touch.clientY;
    });
    $('#cover').on('touchmove', function(e){
        var touch = e.changedTouches[e.changedTouches.length - 1];
        var touchoffsetX = touch.clientX - touchstartX;
        var touchoffsetY = touch.clientY - touchstartY;

        if(Math.abs(touchoffsetY) >= 50) {
            if(touchoffsetY < 0){
                //다음 페이지
                showPage(1);
                pageNum = 1;
            }
        }
    });
    
    $('#page1').on('touchstart', function(e){
        var touch = e.touches[0];
        touchstartX = touch.clientX;
        touchstartY = touch.clientY;
    });
    $('#page1').on('touchmove', function(e){
        var touch = e.changedTouches[e.changedTouches.length - 1];
        var touchoffsetX = touch.clientX - touchstartX;
        var touchoffsetY = touch.clientY - touchstartY;

        if(Math.abs(touchoffsetY) >= 50) {
            //이전 페이지
            if(document.documentElement.scrollTop === 0){
                showPage(0);
                pageNum = 0;
                $('#wrap').addClass('focus_cover');
            }
        }
    });


    function showPage(n){
        if(n === 0){
            $('#cover').css({'top': "0"});
        }else{
            $('#cover').css({'top': "-100vh"});
            $('section.projects h2 span').css('animation-play-state','running');
        }
    }
}

/**
* @param fillHeight : 반딧불이 채울 높이 0 ~ 1
*/
function setFirefly(fillHeight /*0 ~ 1*/) {
    function _instanceof(left, right) { 
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
             return !!right[Symbol.hasInstance](left); 
        } else {
            return left instanceof right; 
        }
    }
    function _classCallCheck(instance, Constructor) { 
        if (!_instanceof(instance, Constructor)) { 
            throw new TypeError("Cannot call a class as a function"); 
        } 
    }
    function _defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) 
                descriptor.writable = true; 
            Object.defineProperty(target, descriptor.key, descriptor); 
        } 
    }
    function _createClass(Constructor, protoProps, staticProps) { 
        if (protoProps) 
            _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) 
            _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    var c = init("canvas");
    var w = canvas.width = window.innerWidth;
    var h = canvas.height = window.innerHeight *fillHeight; //initiation

    var firefly = /*#__PURE__*/function () {
        function firefly() {
            _classCallCheck(this, firefly);

            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.s = Math.random() * 2;
            this.ang = Math.random() * 2 * Math.PI;
            this.v = this.s * this.s / 4;
        }

        _createClass(firefly, [{
            key: "move",
            value: function move() {
            this.x += this.v * Math.cos(this.ang);
            this.y += this.v * Math.sin(this.ang);
            this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
            }
        }, {
            key: "show",
            value: function show() {
            c.beginPath();
            c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
            c.fillStyle = "#fddba3";
            c.fill();
            }
        }]);

        return firefly;
    }();

    var fly = [];
    function draw() {
        if (fly.length < 100) {
            for (var j = 0; j < 10; j++) {
                fly.push(new firefly());
            }
        } //animation


        for (var i = 0; i < fly.length; i++) {
            fly[i].move();
            fly[i].show();

            if (fly[i].x < 0 || fly[i].x > w || fly[i].y < 0 || fly[i].y > h) {
                fly.splice(i, 1);
            }
        }
    }

    var mouse = {};
    var last_mouse = {};
    canvas.addEventListener("mousemove", function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);

    function init(elemid) {
    var canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight * fillHeight;
        c.fillStyle = "rgba(30,30,30,1)";
        c.fillRect(0, 0, w, h);
        return c;
    }

    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback);
        };
    };

    function loop() {
        window.requestAnimFrame(loop);
        c.clearRect(0, 0, w, h);
        draw();
    }

    window.addEventListener("resize", function () {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight * fillHeight;
        loop();
    });
    loop();
    setInterval(loop, 1000 / 60);
} 