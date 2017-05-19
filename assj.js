$(document).ready(function(){
    $("nav ul li:eq(0)").click(function(){
        $("#post1").show();
        $("#post2").hide();
        $("#post3").hide();
        $("#post4").hide();});
$("nav ul li:eq(1)").click(function(){
        $("#post2").show();
        $("#post1").hide();
        $("#post3").hide();
        $("#post4").hide();});
$("nav ul li:eq(2)").click(function(){
        $("#post3").show();
        $("#post2").hide();
        $("#post1").hide();
        $("#post4").hide();});
$("nav ul li:eq(3)").click(function(){
        $("#post4").show();
        $("#post2").hide();
        $("#post3").hide();
        $("#post1").hide();});
});
