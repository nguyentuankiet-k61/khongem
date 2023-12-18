var sound = new Howl({
    urls: ['Merry Christmas_song_lastchrismas.mp3'],
    loop: true
  });
function loading() {
    $('body').css('height', $(window).height());
    $('#loading').css('visibility', 'visible');
    setTimeout('loadingVisible()', 1500);
}

function loadingVisible() {
    $('#loading').css('visibility', 'hidden');
    $('body').css({
        'overflow': 'visible',
        'height': '100%'
    });
    sound.play();
}
var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}
