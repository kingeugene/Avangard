/*======================================================================*\
|| #################################################################### ||
|| # Package - Joomla Template based on YJSimpleGrid Framework          ||
|| # Copyright (C) 2010  Youjoomla.com. All Rights Reserved.            ||
|| # Authors - Dragan Todorovic and Constantin Boiangiu                 ||
|| # license - PHP files are licensed under  GNU/GPL V2                 ||
|| # license - CSS  - JS - IMAGE files  are Copyrighted material        ||
|| # bound by Proprietary License of Youjoomla.com                      ||
|| # for more information visit http://www.youjoomla.com/license.html   ||
|| # Redistribution and  modification of this software                  ||
|| # is bounded by its licenses                                         ||
|| # websites - http://www.youjoomla.com | http://www.yjsimplegrid.com  ||
|| #################################################################### ||
\*======================================================================*/
window.addEvent("domready", function() {
	/* Slider arrows */
   $$('.YJIS_outer').each(function (el) {
	var arrowleft		= el.getElement('.slideLeft');
	var arrowright		= el.getElement('.slideRight');
		arrowleft.setStyles({left:-55});
		arrowright.setStyles({right:-55});
	var fx = new Fx.Morph(arrowleft,{  duration: 150,'link': 'cancel',transition: Fx.Transitions.linear});
	var fx2 = new Fx.Morph(arrowright,{duration: 150,'link': 'cancel',transition: Fx.Transitions.linear});
    el.addEvents({
      mouseenter: function () {
		  fx.start({left:0  });
		  fx2.start({right:0});
      },
      mouseleave: function () {
		  fx.start({left:-55});
		  fx2.start({right:-55});
      }
    });
  });
  /* Slider intro */
   $$('.YJSlide_slide').each(function (el) {
	var findParent      = el.getParent().getParent();   
	var intro			= el.getElement('.YJSlide_intro');
	var fx4 = new Fx.Morph(intro,{     duration: 200,'link': 'cancel',transition: Fx.Transitions.linear});
    findParent.addEvents({
      mouseenter: function () {
		  fx4.start({top:120,opacity:1});
      },
      mouseleave: function () {
		  fx4.start({top:-280,opacity:0});
      }
    });
  });
   /* mbox hover */ 
   $$('.srmbox .popbox img, .srmbox .popboxv img').each(function (el) {
	var fx  = new Fx.Morph(el,{  duration: 150,'link': 'cancel',transition: Fx.Transitions.linear});
    el.addEvents({
      mouseenter: function () {
		  fx.start({opacity:0.3});
      },
      mouseleave: function () {
		  fx.start({opacity:1});
      }
    });
  });
	var getPreloaders = ['.yjme_item div.imageholder', '.YJIS_outer.srimageslider', '.catItemImage', '.itemImage'];
	  Array.each(getPreloaders, function (el, index) {
		  $$(el).addClass('addpreloader');
		  $$(el).each(function (elm) {
			  elm.addEvents({
				  mouseenter: function () {
					  elm.removeClass('addpreloader');
				  },
				  mouseleave: function () {
					  (function () {
						  elm.addClass('addpreloader');
					  }).delay(350);
				  }
			  });
		  });
	  });
});