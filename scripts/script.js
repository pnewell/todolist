$(document).ready(function() {
    
    $(document).on("click",".items",function() {
        $(this).remove();
    });
    
    $(document).on("click","li", function () {
        $("li").removeAttr("class");
        $(this).attr("class","selectedlist");
        $(".items, #itemsbar > p").remove();
        $("#itemsbar").append('<div class=\"items\" id=\"c1div\"><input type=\"checkbox\" id=\"c1\" name=\"c1\" /> \
        <label for=\"c1\"><span></span>New Box~</label></div><p>Click to Add</p>');
    });
    
    $(document).on("click","#itemsbar > p",function () {
        $(this).remove();
        $("#itemsbar").append('<input class="addnew" type=\"text\"></input>');
    });
    
    $(document).on("keyup",'.addnew', function (e) {
        if (e.which == 13) {
            var value = $(".addnew").val();
            $("#itemsbar").append('<div class=\"items\" id=\"c1div\"><input type=\"checkbox\" id=\"c1\" name=\"c1\" /> \
            <label for=\"c1\"><span></span>' + value + '</label></div>');
            $(this).remove();
            e.preventDefault();
            $("#itemsbar").append('<p>Click to Add</p>');
        }
    });
    
    $(document).on("click","#addlist",function() {
        $("#listsbar").append('<input class="addnewlist" type=\"text\"></input>');
    });

    $(document).on("keyup",'.addnewlist', function (e) {
        if (e.which == 13) {
            var value = $(".addnewlist").val();
            $("#lists").append('<li id="l3">' + value + '</li>');
            $(this).remove();
            e.preventDefault();
        }
    });
    
});