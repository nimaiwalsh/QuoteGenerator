$(document).ready(function() {
    
  
    //retrieve and insert the JSON data
    function getQuote() {
        
        $(".quote-box").fadeIn("slow");
        
        $.ajax({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
            dataType: 'json', 
            cache: false, // 'cache: false' must be present for IE 7 & 8
            success: function(data) {
                $("#quote-content").html(data[0].content);
                $("#author").html("\u2014 " + data[0].title);
                
                //Convert quote to readable twitter URI format
                var simpleText = $("#quote-content").html(data[0].content).text()
                var encode = encodeURI(simpleText);
                $("#tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encode + "\u2014 " + data[0].title);
            }
        });
    }
    
    //Update quote when button clicked
    $("#get-another-quote").on("click", function(event) {
        
        event.preventDefault();             
        $(".quote-box").fadeOut("slow");
        getQuote();
    });
    
    //Call when page loaded
    getQuote();
        
});
