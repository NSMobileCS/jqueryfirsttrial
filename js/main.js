console.log('js loaded');

$('#updatetitlebtn').click(function(){
    console.log('btnpush');
    var newTitle = $('#titlesetting').val();
    console.log(newTitle);
    $('title').text(newTitle);
})


$('#colorinputbtn').click(function(){
    console.log('buttonpushed');
    var hexcolor = $('#colorinput').val();
    console.log(hexcolor);
    $('body').css('background-color', hexcolor);
});

