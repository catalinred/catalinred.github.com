jQuery(function($){

	//Do not show for low res
	if ($(window).width() < 600) return false;

	// AdPacks CSS
	var css = '\
				#adpacks-wrapper{font-family: Arial, Helvetica;width:280px;position:fixed;_position: absolute;bottom: 0;right: 5px;z-index: 9999;background: #eee;padding: 15px;box-shadow: 0 0 2px #444;border-radius: 5px 5px 0 0;}\
				body .adpacks{background:#fff;padding:15px;margin:15px 0 0;border:3px solid #eee;}\
				.adpacks-wrap { \
				    display: block;\
				    overflow: hidden;\
				}\
				.adpacks-img {\
				    float: left;\
				    margin-right: 10px;\
				    width: 130px;\
				    height: 100px;\
				}\
				.adpacks-text {\
				    display: block;\
				    line-height: normal;\
				    color: #333;\
				    font-size: 12px;\
				    text-decoration: none;\
				    text-align: left;\
				}\
				.adpacks-poweredby {\
				    display: none;\
				}\
				';

	addStyle(css);

	// AdPacks markup
	$('body').append('<div id="adpacks-wrapper"></div>');
	
	// AdPacks.com ad code
	(function(){
	  var bsa = document.createElement('script');
		 bsa.id = '_adpacks_js';
		 bsa.async = true;
		 bsa.src = '//cdn.adpacks.com/adpacks.js?zoneid=1386&serve=C6SI42Y&placement=wwwredteamdesigncom';
	  	 document.getElementById('adpacks-wrapper').appendChild(bsa);
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