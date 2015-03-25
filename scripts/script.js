var listid;
var itemsid;
var listname;

$(document).ready(function() {

    // Setup listsbar
    var lists = {l0:'Test List'};
    localStorage['lists'] = JSON.stringify(lists);
    localStorage['listcount'] = 1;
    listname = 0;
    var str_listcount = localStorage['listcount'];
    var listcount = parseInt(str_listcount);
    listid = 'l0';
    itemsid = 'i0';
    for (i = 0; i < listcount; i++) {
        lists = JSON.parse(localStorage['lists']);
        var value = lists['l0'];
        $('#lists').append('<li id="l' + i + '">' + value + '</li>');
    }
    $('#l0').attr('class','selectedlist');

    // Setup itemsbar
    var items = ['Test Item 1', 'Test Item 2', 'Test Item 3'];
    localStorage['i0'] = JSON.stringify(items);
    items = JSON.parse(localStorage['i0']);
    
    for (i = 0; i < items.length; i++) {
        $('#itemsbar').append('<div class="items" id="c' + i + 'div"><input type="checkbox" id="c' + i + '" name="c' + i + '" /> \
        <label for="c' + i + '"><span></span>' + items[i] + '</label></div>');
    }
    $('#itemsbar').append('<p>Click to Add</p>');
    
    // Remove checked items
    $(document).on('click','.items',function() {
        var checkedid = $(this).attr('id');
        var listnum = checkedid.charAt(1);
        var listint = parseInt(listnum);
        var templistarray = JSON.parse(localStorage[itemsid]);
        delete templistarray[listint];
        localStorage[itemsid] = JSON.stringify(templistarray);
        $(this).remove();
    });
    
    // Change list displayed on click
    $(document).on('click','li', function () {
        $('li').removeAttr('class');
        $(this).attr('class','selectedlist');
        $('.items, #itemsbar > p, input').remove();
        listid = $(this).attr('id');
        var listnum = listid.charAt(1);
        itemsid = 'i' + listnum;
        var items = JSON.parse(localStorage[itemsid]);
        for (i = 0; i < items.length; i++) {
            if (items[i] === null) {
            }
            else {    
                $('#itemsbar').append('<div class="items" id="c' + i + 'div"><input type="checkbox" id="c' + i + '" name="c' + i + '" /> \
                <label for="c' + i + '"><span></span>' + items[i] + '</label></div>');
            }
        }
        $('#itemsbar').append('<p>Click to Add</p>');
    });
    
    // Add new item textbox
    $(document).on('click','#itemsbar > p',function () {
        $(this).remove();
        $('#itemsbar').append('<input class="addnew" type="text"></input>');
    });
    
    // Add new item
    $(document).on('keyup','.addnew', function (e) {
        if (e.which == 13) {
            var value = $('.addnew').val();
            var items = JSON.parse(localStorage[itemsid]);
            items.push(value);
            var newitemid = items.length - 1;
            $('#itemsbar').append('<div class="items" id="c' + newitemid + 'div"><input type="checkbox" id="c' + newitemid + '" name="c' + newitemid + '" /> \
            <label for="c' + newitemid + '"><span></span>' + value + '</label></div>');
            localStorage[itemsid] = JSON.stringify(items);
            $(this).remove();
            e.preventDefault();
            $('#itemsbar').append('<p>Click to Add</p>');
        }
    });
    
   // Add new list textbox
    $(document).on('click','#addlist',function() {
        $('#listsbar').append('<input class="addnewlist" type="text"></input>');
    });

    // Add new list
    $(document).on('keyup','.addnewlist', function (e) {
        if (e.which == 13) {
            var value = $('.addnewlist').val();
            listname++;
            $('#lists').append('<li id="l' + listname + '">' + value + '</li>');
            var newname = 'l' + listname;
            var lists = JSON.parse(localStorage['lists']);
            lists[newname] = value;
            localStorage['lists'] = JSON.stringify(lists);
            var newitemsname = 'i' + listname;
            var newitemsarray = [];
            localStorage[newitemsname] = JSON.stringify(newitemsarray);
            $(this).remove();
            e.preventDefault();
        }
    });
    
});