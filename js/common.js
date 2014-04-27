(function(doc, script) {
    var js, 
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        };

    // Google Analytics
    window._gaq = [['_setAccount', 'UA-5924545-2'],['_trackPageview']];
    add(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js', 'ga');
    // Google+ button
    //add('//apis.google.com/js/plusone.js');
    // Facebook SDK
    //add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=292896510767559', 'facebook-jssdk');
    // Twitter SDK
    //add('//platform.twitter.com/widgets.js', 'twitter-wjs');
}(document, 'script'));