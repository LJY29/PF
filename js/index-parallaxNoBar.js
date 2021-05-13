document.addEventListener('DOMContentLoaded', function(){
    document.getElementsByClassName('hamburger')[0].addEventListener('click', function(){
        var menuItem = document.getElementsByClassName('menu-item');
        if(this.classList.contains('on')){
            for(var i=0; i < menuItem.length; i++){
                menuItem[i].style = "";
                menuItem[i].style.transition = "all 0.3s ease " + (menuItem.length - i) / 10 + "s";
            }
            this.classList.remove('on');
        }else{
            for(var i=0; i < menuItem.length; i++){
                menuItem[i].style = "";
            }
            this.classList.add('on');
            setMenuItem(40, 60, -45, 90);
        }
    });

    //페럴렉스 셋팅
    setParallaxNoBar();

    //반딧불이 셋팅
    setFirefly(0.5);

});

    
/**
* @param circleDiameter : 원지름
* @param distance : 중심원으로부터의 거리
* @param startAngle : 펼칠 각도 중 시작부분 0~360도
* @param endAngle : 펼칠 각도 중 끝부분 0~360도
*/
function setMenuItem(pCircleDiameter, pDistance, pStartAngle, pEndAngle){
    var hamburger = document.getElementsByClassName('hamburger')[0];
    var hamDiameter = hamburger.clientWidth;
    var menuItem = document.getElementsByClassName('menu-item');
    var itemLen = menuItem.length;

    var circleDiameter = pCircleDiameter; //원지름
    var distance = pDistance;  //중심원으로부터의 거리
    var angle = [pStartAngle, pEndAngle] // 펼칠 각도 //0~360

    var perDegree = itemLen === 1 ? (angle[1] - angle[0]) / 2 : (angle[1] - angle[0]) / (itemLen - 1);
    var perRadian = perDegree * Math.PI / 180;

    for(var i=0; i<itemLen; i++){
        var j = angle[0] * Math.PI / 180 + perRadian * i;
        console.log(j, Math.sin(j))
        menuItem[i].style.top = (Math.sin(j) * distance + (hamDiameter - circleDiameter)/2) + "px";
        menuItem[i].style.left = (Math.cos(j) * distance + (hamDiameter - circleDiameter)/2) + "px";
        menuItem[i].style.transition = "all 0.3s ease " + i / 10 + "s";
    }
}

function setParallaxNoBar(){
    var numPage = $('.scroll-page').length; //num of .scroll-page
    var pagePrev = 0;
    var pageNow = 0; //currnt page, //0: header
    var pageNext = 0;
    
    var direction = 0; //Wheel direction //1: down, -1: up
    var isWheelBlocked = false; // Whether wheel blocked or not
    var timeId = 0; //setTimeout

    //set li
    $('.scroll-page').each(function(idx) {
        $('#page-indicator').append('<li><a href="#">'+ (idx+ 1) +'페이지</a></li>\n');
        $(this).css({'top': (idx * 100) + '%'});
                    
        if(idx === 0){
            $(this).prepend('<a href="#" class="hidden start">Start of Cover</a>')
                .append('<a href="#" class="hidden end">End of Cover</a>');
        }else{
            $(this).prepend('<a href="#" class="hidden start">Start of Page' + (idx) + '</a>')
                .append('<a href="#" class="hidden end">End of Page' + (idx) + '</a>');
        }
    });
    
    // $('#footer').css({'top': '100%'});
    // $('#footer').prepend('<a href="#" class="hidden start">푸터 페이지 시작</a>')
    //             .append('<a href="#" class="hidden end">푸터 페이지 끝</a>');


    showPage(0);


    //indicator event
    $('#page-indicator li a').on('click', function(){
        var index = $('#page-indicator li').index($(this).parent());
        showPage(index);
        $('.scroll-page:eq('+ index +') a.hidden.start').trigger('focus');
    });

    //mousewheel event
    $(window).on('mousewheel DOMMouseScroll', function(e){
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
            //next page
            if(pageNow === numPage - 1){
                showPage(pageNow);
            }else{
                showPage(pageNext);
            }
        }else{
            //prev page
            showPage(pagePrev);
        }
    });

    //focus in event
    $('.scroll-page').on('focusin', function(){
        var index = $('.scroll-page').index($(this));
        showPage(index);
    })
    // $('#footer').on('focusin', function() {
    //     showPage('footer');
    // });

    function showPage(n){
        // if (pageNow === 0) {
        //     $('#main').css({'transition': 'none'});
        // } else {
            $('#main').css({'transition': 'top 0.5s'});
        // }

        if(n === numPage - 1){
            //last page
            n = numPage - 1;
            $('#main').css({'top': -(n * 100) + "%"});
        }else{
            $('#main').css({'top': -(n * 100) + "%"});
        }

        $('#page-indicator li').removeClass('on');
        $('#page-indicator li:eq('+ n + ')').addClass('on');
        
        pageNow = n;
        pagePrev = n - 1 < 0 ? 0 : n - 1;
        pageNext = n + 1 === numPage ? numPage : n + 1;
        console.log(pagePrev + ' / ' + pageNow + ' / ' + pageNext);
    }

}

function setFireflyES6() {
//     var c = init("canvas");
//     var w = (canvas.width = window.innerWidth);
//     var h = (canvas.height = window.innerHeight);
//     //initiation

//     class firefly {
//         constructor() {
//             this.x = Math.random() * w;
//             this.y = Math.random() * h;
//             this.s = Math.random() * 2;
//             this.ang = Math.random() * 2 * Math.PI;
//             this.v = (this.s * this.s) / 4;
//         }
//         move() {
//             this.x += this.v * Math.cos(this.ang);
//             this.y += this.v * Math.sin(this.ang);
//             this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
//         }
//         show() {
//             c.beginPath();
//             c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
//             c.fillStyle = "#fddba3";
//             c.fill();
//         }
//     }

//     let fly = [];

//     function draw() {
//         if (fly.length < 100) {
//             for (let j = 0; j < 10; j++) {
//                 fly.push(new firefly());
//             }
//         }
//         //animation
//         for (let i = 0; i < fly.length; i++) {
//             fly[i].move();
//             fly[i].show();
//             if (fly[i].x < 0 || fly[i].x > w || fly[i].y < 0 || fly[i].y > h) {
//                 fly.splice(i, 1);
//             }
//         }
//     }

//     let mouse = {};
//     let last_mouse = {};

//     canvas.addEventListener("mousemove", function (e) {
//         last_mouse.x = mouse.x;
//         last_mouse.y = mouse.y;

//         mouse.x = e.pageX - this.offsetLeft;
//         mouse.y = e.pageY - this.offsetTop;
//     }, false);

//     function init(elemid) {
//         let canvas = document.getElementById(elemid),
//             c = canvas.getContext("2d"),
//             w = (canvas.width = window.innerWidth),
//             h = (canvas.height = window.innerHeight);
//         c.fillStyle = "rgba(30,30,30,1)";
//         c.fillRect(0, 0, w, h);
//         return c;
//     }

//     window.requestAnimFrame = function () {
//         return (
//             window.requestAnimationFrame ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame ||
//             window.oRequestAnimationFrame ||
//             window.msRequestAnimationFrame ||
//             function (callback) {
//             window.setTimeout(callback);
//             }
//         );
//     };

//     function loop() {
//         window.requestAnimFrame(loop);
//         c.clearRect(0, 0, w, h);
//         draw();
//     }

//     window.addEventListener("resize", function () {
//         w = canvas.width = window.innerWidth;
//         h = canvas.height = window.innerHeight;
//         loop();
//     });

//     loop();
//     setInterval(loop, 1000 / 60);
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