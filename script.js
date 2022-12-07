// welcome tag
// $(document).ready(function (){})
$(document).ready(async function () {
    // welcomeHeight = $(".welcome").height()
    // console.log('1 : ', $(window).height())
    // console.log('2 : ', $(window).height() / 2)
    // console.log('3 : ', $(window).height() / 2)
    // $(".welcome-text").css({
    //     'margin-top': $(window).height() / 2 - (welcomeHeight / 4) + 'px',
    //     'margin-bottom': $(window).height() / 2 - (welcomeHeight / 2) + 'px'
    // })
    var trans = $(".transition");
    for (var i = 0; i < trans.length; i++) {
        $(trans[i]).addClass("visible");
    }

    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var transcrolls = $(".transcroll");

    for await (const transcroll of transcrolls) {
        if ($(transcroll).position().top < pageBottom) {
            $(transcroll).addClass("visible");
            await new Promise(r => setTimeout(r, 100));
        }
    }
});

$(document).scroll( async function () {
    console.log('1')
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var transcrolls = $(".transcroll");
    console.log('4')
    hello(pageBottom, transcrolls)
    console.log('5')
    
});

async function hello(pageBottom, transcrolls) {
    for await (const transcroll of transcrolls) {
        if ($(transcroll).position().top < pageBottom) {
            $(transcroll).addClass("visible");
            // await new Promise(r => setTimeout(r, 100))
        }
        // else {
        //   $(transcroll).removeClass("visible");
        // }
    }
}