jQuery(function($){

	//Do not show for low res
	if ($(window).width() < 600) return false;

	// AdPacks CSS
	var css = '\
				#adpacks-wrapper{font-family: Arial, Helvetica;width:280px;position:fixed;_position: absolute;bottom: 0;right: 5px;z-index: 9999;background: #eee;padding: 15px;box-shadow: 0 0 2px #444;border-radius: 5px 5px 0 0;}\
				body .adpacks{background:#fff;padding:15px;margin:15px 0 0;border:3px solid #eee;}\
				body .one .bsa_it_ad{background:transparent;border:none;font-family:inherit;padding:0;margin:0;}/\
				body .one .bsa_it_ad .bsa_it_i{display:block;padding:0;float:left;margin:0 10px 0 0;}\
				body .one .bsa_it_ad .bsa_it_i img{padding:0;border:none;}\
				body .one .bsa_it_ad .bsa_it_t{padding: 0 0 6px 0; font-size: 11px;}\
				body .one .bsa_it_p{display:none;}\
				body #bsap_aplink,body #bsap_aplink:hover{display:block;font-size:9px;margin: -20px 0 0 0;text-align:right;}\
				body .one .bsa_it_ad .bsa_it_d{font-size: 11px;}\
				body .one{overflow: hidden}\
				';

	addStyle(css);

	// AdPacks markup
	$('body').append('<div id="adpacks-wrapper">\
    	<div id="bsap_1257097" class="bsarocks bsap_a5f348233fceef06ba365ab392938d10"></div>\
	    <a href="http://adpacks.com" id="bsap_aplink">via Ad Packs</a>\
	</div>');
	
	// AdPacks.com ad code
	(function(){
	  var bsa = document.createElement('script');
		 bsa.type = 'text/javascript';
		 bsa.async = true;
		 bsa.src = '//s3.buysellads.com/ac/bsa.js';
	  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
	})();
	
	
	function addStyle(param){
		var style = document.createElement('style');
	
		style.setAttribute("type", "text/css");
		if (style.styleSheet) {
			style.styleSheet.cssText = param;
		} else {
			style.appendChild(document.createTextNode(param));
		}
		
		jQuery('head').append(style);
	}
});