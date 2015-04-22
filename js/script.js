(function($) {
			$(document).ready(function() {

				//Keyboard and Screen Reader Access
				$('#mainnav > ul > li > a').on('focus',function(){
					$(this).parent('li').siblings('li').removeClass('focus');
					$(this).parent('li').addClass('focus');
				});

        $('#mainnav ul ul a').on('focus',function(){
          $(this).parent('li').parent('ul').parent('li').siblings('li').removeClass('focus');
					$(this).parent('li').parent('ul').parent('li').addClass('focus');
				});

		    window.onresize = function() {
					$('#mainnav > ul > li').removeClass('focus');
				}
	    		//Open/Close Mobile Menu
		    	$('#menu-toggle').on('click', function(){
		    		$('#mainnav').toggleClass('open');
		    		$(this).toggleClass('open');
		    	});

		    	//Add Overview links to menu (so can toggle top item)
	    		$('#mainnav > ul > li').each(function(){
	    			if($(this).children('ul').length){
	    				$(this).addClass('hasChildren');
	    				var theLink=$(this).children('a').attr('href');
	    				$(this).children('ul').prepend('<li>'+'<a href="'+theLink+'">Overview</a></li>')
	    			}
	    		});


	    		//Prevent Top menu items from being clicked through if have children
	    		$('#mainnav > ul > li.hasChildren > a').on('click',function(e){
		    		e.preventDefault();
		    		$(this).parent().toggleClass('open');
		    	});

	    	});
		})(jQuery);
