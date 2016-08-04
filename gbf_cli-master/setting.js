var $ = jQuery = require("./jquery-2.1.4.min.js");
const ipcRenderer = require('electron').ipcRenderer;

$(function(){
    $.getJSON('resources/multi.json', function(json){
        var form = $('#multi');
        json.forEach(function(value, index, array){
            form.prepend(value + ': <input type="checkbox" class="select" name="'+value+'" /><br />');
        })
    })
})

$(document).on('click', '#setting_submit', function(event){
    var form = $('#multi');
    var setting = [];
    form.children('.select').each(function(checkbox){
        if ($(this).prop('checked')) setting.push($(this).attr('name'));
    });

    ipcRenderer.send('setting_submit', setting);
    event.preventDefault();
});