// Date range picker
$(function() {

    $('input[name="daterange"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YY') + ' - ' + picker.endDate.format('MM/DD/YY'));

    });

    
  
    $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });



// Copy Text function

function copyFunction() {
    var copyText = document.getElementById("output");
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function copyFunction2() {
    var copyText = document.getElementById("output2");
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the URL: " + copyText.value);
}

// Validate the form
d3.selectAll("input").on("keyup", function(){

    // var url = d3.select("#url_input").node().value + "?scid="

    if(d3.select("#url_input").node().value){
        var url_temp = d3.select("#url_input").node().value
        var pattern = /\?/
        var result = pattern.test(url_temp)
        if (result){
            
            var url = d3.select("#url_input").node().value + "&scid="
        
        } else {var url = d3.select("#url_input").node().value + "?scid=" } 
        console.log(url)
    }
       
    if(d3.select("#channel_input").node().value){
        var str0 = d3.select("#channel_input").node().value
        var re0 = /.+\((\S+)\)/;
        var channel = str0.replace(re0, '$1')
    } else {var channel = ""}

    if(d3.select("#campaign_input").node().value){
        var campaign = ":" + d3.select("#campaign_input").node().value
        var campaign_2 = d3.select("#campaign_input").node().value
    } else {var campaign = ""; var campaign_2 = ""}

    if(d3.select("#date_input").node().value){
        var str = d3.select("#date_input").node().value;
        var re = /(\w+)\/(\w+)\/(\w+)\s\-\s(\w+)\/(\w+)\/(\w+)/;
        var newstr = str.replace(re, '$1$2$3_$4$5$6')
        var date = ":" + newstr
        
    } else {var date = ""}

    if(d3.select("#product_name").node().value){
        var product_name = ":" + d3.select("#product_name").node().value
    } else {var product_name = ""}

    if(d3.select("#language").node().value){
        var language = ":" + d3.select("#language").node().value
    } else {var language = ""}

    if(d3.select("#targeting").node().value){
        var targeting = ":" + d3.select("#targeting").node().value
    } else {var targeting = ""}

    if(d3.select("#kpi").node().value){
        var kpi = ":" + d3.select("#kpi").node().value
    } else {var kpi = ""}

    if(d3.select("#source").node().value){
        var source = ":" + d3.select("#source").node().value
    } else {var source = ""}
    
    if(d3.select("#keyword").node().value){
        var keyword = ":" + d3.select("#keyword").node().value
    } else {var keyword = ""}
    


    if(url){
        // output 1 : Universal tracking code
        var output_url = url + channel + campaign + date + product_name + language + targeting + kpi + source + keyword
        d3.select("#output").text(output_url).style("color", "red").style("font-size", "1.5rem")

        // output 2 : Email Tracking Code
        // var output_url_2 = url + "?ch=eml&cname=%%" + campaign_2 + "%%&rid=%%subscriberid%%&jobid=%%jobid%%"
        // var output_url_2 = url + channel + campaign + date + product_name + language
        // d3.select("#output2").text(output_url_2).style("color", "red").style("font-size", "1.5rem")

    }
    
})


// event listener
// function addGlobalEventListener (type, selector, callback) {
// 	document,addEventListener(type, e => {
// 		if (e.target.matches(selector)) callback(e)
// 	})
// }

// addGlobalEventListener("keyup", "#output", e=> {
//     console.log("_")

// })

// Keyboard input function
// $('#url_input').keyup(function () {
//     $('#output').text($(this).val());
//     $('#output2').text($(this).val());
//   });