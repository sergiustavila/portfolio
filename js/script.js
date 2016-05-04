$(function(){

    function setImg(src,id){
        $("#main").attr("src",src);
        var path="text/"+id+".txt"; //apel catre fisierul textual corespunzator imaginii apasate
        $.get(path,function(data){ //returneaza continutul fisierului textual
            $("#description p").html(data);
        });

        // var xmlhttprequest=new xmlhttprequest();
    }

    $("#portfolio img").click(function(){
        // var src=$(this).attr("src"); //in variabila src se introduce calea catre imagine data de atributul src
        // current_li = $(this).parent(); //link catre <li>
        // $("#main").attr("src",src); //in div cu id-ul frame se introduce sursa imaginii selectate
        // $("#frame").fadeIn();
        // $("#overlay").fadeIn();
        var src=$(this).attr("src");
        var id=$(this).attr("id");
        current_li = $(this).parent();
        setImg(src,id);
        $("#frame").fadeIn();
        $("#overlay").fadeIn();
    });


    $("#overlay").click(function(){
        $(this).fadeOut();
        $("#frame").fadeOut();
    });

    $("#right").click(function(){

        if(current_li.is(":last-child")){ //daca s-a ajuns la ultima imagine
            var next_li=$("#portfolio li").first(); //revenim la prima imagine
        }else{
            var next_li=current_li.next(); //link catre <li> urmator
        }

        var next_src=next_li.children("img").attr("src"); //link catre imaginea copilul tagului <li>
        var id=next_li.children("img").attr("id");
        // $("#main").attr("src",next_src);
        setImg(next_src,id);
        current_li=next_li; //<li> curent devine urmatorul
    });

    $("#left").click(function(){

        if(current_li.is(":first-child")){ //daca s-a ajuns la ultima imagine
            var prev_li=$("#portfolio li").last(); //revenim la prima imagine
        }else{
            var prev_li=current_li.prev(); //link catre <li> precedent
        }

        var prev_src=prev_li.children("img").attr("src"); //link catre imaginea copilul tagului <li>
        var id=prev_li.children("img").attr("id");
        // $("#main").attr("src",prev_src);
        setImg(prev_src,id);
        current_li=prev_li; //<li> curent devine precedentul
    });

    $("#right, #left").mouseover(function(){
        $(this).css("opacity","0.75");
    });

    $("#right, #left").mouseleave(function(){
        $(this).css("opacity","0.5");
    });

});