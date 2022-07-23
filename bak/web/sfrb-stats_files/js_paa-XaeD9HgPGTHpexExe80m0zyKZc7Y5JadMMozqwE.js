/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
!function(e,t,n){function a(t,n){this.element=t,this.settings=e.extend({},i,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=i,this._name=s,this.init()}var i={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},s="slicknav",o="slicknav";Keyboard={DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,RIGHT:39,SPACE:32,TAB:9,UP:38},a.prototype.init=function(){var n,a,i=this,s=e(this.element),r=this.settings;if(r.duplicate?i.mobileNav=s.clone():i.mobileNav=s,r.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})),r.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("class")})),r.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("style")})),n=o+"_icon",""===r.label&&(n+=" "+o+"_no-text"),"a"==r.parentTag&&(r.parentTag='a href="#"'),i.mobileNav.attr("class",o+"_nav"),a=e('<div class="'+o+'_menu"></div>'),""!==r.brand){var l=e('<div class="'+o+'_brand">'+r.brand+"</div>");e(a).append(l)}i.btn=e(["<"+r.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+o+"_btn "+o+'_collapsed">','<span class="'+o+'_menutxt">'+r.label+"</span>",'<span class="'+n+'">','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>',"</span>","</"+r.parentTag+">"].join("")),e(a).append(i.btn),""!==r.appendTo?e(r.appendTo).append(a):e(r.prependTo).prepend(a),a.append(i.mobileNav);var c=i.mobileNav.find("li");e(c).each(function(){var t=e(this),n={};if(n.children=t.children("ul").attr("role","menu"),t.data("menu",n),n.children.length>0){var a=t.contents(),s=!1,l=[];e(a).each(function(){return e(this).is("ul")?!1:(l.push(this),void(e(this).is("a")&&(s=!0)))});var c=e("<"+r.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+o+'_item"/>');if(r.allowParentLinks&&!r.nestedParentLinks&&s)e(l).wrapAll('<span class="'+o+"_parent-link "+o+'_row"/>').parent();else{var d=e(l).wrapAll(c).parent();d.addClass(o+"_row")}r.showChildren?t.addClass(o+"_open"):t.addClass(o+"_collapsed"),t.addClass(o+"_parent");var p=e('<span class="'+o+'_arrow">'+(r.showChildren?r.openedSymbol:r.closedSymbol)+"</span>");r.allowParentLinks&&!r.nestedParentLinks&&s&&(p=p.wrap(c).parent()),e(l).last().after(p)}else 0===t.children().length&&t.addClass(o+"_txtnode");t.children("a").attr("role","menuitem").click(function(t){r.closeOnClick&&!e(t.target).parent().closest("li").hasClass(o+"_parent")&&e(i.btn).click()}),r.closeOnClick&&r.allowParentLinks&&(t.children("a").children("a").click(function(t){e(i.btn).click()}),t.find("."+o+"_parent-link a:not(."+o+"_item)").click(function(t){e(i.btn).click()}))}),e(c).each(function(){var t=e(this).data("menu");r.showChildren||i._visibilityToggle(t.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).mousedown(function(){i._outlines(!1)}),e(t).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+o+"_item",function(t){t.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(t){var n=t||event;switch(n.keyCode){case Keyboard.ENTER:case Keyboard.SPACE:case Keyboard.DOWN:t.preventDefault(),n.keyCode===Keyboard.DOWN&&e(i.btn).hasClass(o+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown","."+o+"_item",function(t){var n=t||event;switch(n.keyCode){case Keyboard.ENTER:t.preventDefault(),i._itemClick(e(t.target));break;case Keyboard.RIGHT:t.preventDefault(),e(t.target).parent().hasClass(o+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown",'[role="menuitem"]',function(t){var n=t||event;switch(n.keyCode){case Keyboard.DOWN:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=a.index(t.target),r=s+1;a.length<=r&&(r=0);var l=a.eq(r);l.focus();break;case Keyboard.UP:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=a.index(t.target),l=a.eq(s-1);l.focus();break;case Keyboard.LEFT:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(o+"_open")){var c=e(t.target).parent().parent().prev();c.focus(),i._itemClick(c)}else e(t.target).parent().parent().hasClass(o+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case Keyboard.ESCAPE:t.preventDefault(),i._menuToggle(),e(i.btn).focus()}}),r.allowParentLinks&&r.nestedParentLinks&&e("."+o+"_item a").click(function(e){e.stopImmediatePropagation()})},a.prototype._menuToggle=function(e){var t=this,n=t.btn,a=t.mobileNav;n.hasClass(o+"_collapsed")?(n.removeClass(o+"_collapsed"),n.addClass(o+"_open")):(n.removeClass(o+"_open"),n.addClass(o+"_collapsed")),n.addClass(o+"_animating"),t._visibilityToggle(a,n.parent(),!0,n)},a.prototype._itemClick=function(e){var t=this,n=t.settings,a=e.data("menu");a||(a={},a.arrow=e.children("."+o+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(o+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(o+"_collapsed")?(a.arrow.html(n.openedSymbol),a.parent.removeClass(o+"_collapsed"),a.parent.addClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(n.closedSymbol),a.parent.addClass(o+"_collapsed"),a.parent.removeClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e))},a.prototype._visibilityToggle=function(t,n,a,i,s){function r(t,n){e(t).removeClass(o+"_animating"),e(n).removeClass(o+"_animating"),s||d.afterOpen(t)}function l(n,a){t.attr("aria-hidden","true"),p.attr("tabindex","-1"),c._setVisAttr(t,!0),t.hide(),e(n).removeClass(o+"_animating"),e(a).removeClass(o+"_animating"),s?"init"==n&&d.init():d.afterClose(n)}var c=this,d=c.settings,p=c._getActionItems(t),u=0;a&&(u=d.duration),t.hasClass(o+"_hidden")?(t.removeClass(o+"_hidden"),s||d.beforeOpen(i),"jquery"===d.animations?t.stop(!0,!0).slideDown(u,d.easingOpen,function(){r(i,n)}):"velocity"===d.animations&&t.velocity("finish").velocity("slideDown",{duration:u,easing:d.easingOpen,complete:function(){r(i,n)}}),t.attr("aria-hidden","false"),p.attr("tabindex","0"),c._setVisAttr(t,!1)):(t.addClass(o+"_hidden"),s||d.beforeClose(i),"jquery"===d.animations?t.stop(!0,!0).slideUp(u,this.settings.easingClose,function(){l(i,n)}):"velocity"===d.animations&&t.velocity("finish").velocity("slideUp",{duration:u,easing:d.easingClose,complete:function(){l(i,n)}}))},a.prototype._setVisAttr=function(t,n){var a=this,i=t.children("li").children("ul").not("."+o+"_hidden");n?i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=a._getActionItems(t);i.attr("tabindex","-1"),a._setVisAttr(t,n)}):i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=a._getActionItems(t);i.attr("tabindex","0"),a._setVisAttr(t,n)})},a.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+o+"_item")),e.data("menu",t)}return t.links},a.prototype._outlines=function(t){t?e("."+o+"_item, ."+o+"_btn").css("outline",""):e("."+o+"_item, ."+o+"_btn").css("outline","none")},a.prototype.toggle=function(){var e=this;e._menuToggle()},a.prototype.open=function(){var e=this;e.btn.hasClass(o+"_collapsed")&&e._menuToggle()},a.prototype.close=function(){var e=this;e.btn.hasClass(o+"_open")&&e._menuToggle()},e.fn[s]=function(t){var n=arguments;if(void 0===t||"object"==typeof t)return this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new a(this,t))});if("string"==typeof t&&"_"!==t[0]&&"init"!==t){var i;return this.each(function(){var o=e.data(this,"plugin_"+s);o instanceof a&&"function"==typeof o[t]&&(i=o[t].apply(o,Array.prototype.slice.call(n,1)))}),void 0!==i?i:this}}}(jQuery,document,window);;
/*
 * jQuery Superfish Menu Plugin - v1.7.10
 * Copyright (c) 2018 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;!function(a,b){"use strict";var c=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},d=function(){var b=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return b&&a("html").css("cursor","pointer").on("click",a.noop),b}(),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}(),f=function(){return!!b.PointerEvent}(),g=function(a,b,d){var e,f=c.menuClass;b.cssArrows&&(f+=" "+c.menuArrowClass),e=d?"addClass":"removeClass",a[e](f)},h=function(b,d){return b.find("li."+d.pathClass).slice(0,d.pathLevels).addClass(d.hoverClass+" "+c.bcClass).filter(function(){return a(this).children(d.popUpSelector).hide().show().length}).removeClass(d.pathClass)},i=function(a,b){var d=b?"addClass":"removeClass";a.children("a")[d](c.anchorClass)},j=function(a){var b=a.css("ms-touch-action"),c=a.css("touch-action");c=c||b,c="pan-y"===c?"auto":"pan-y",a.css({"ms-touch-action":c,"touch-action":c})},k=function(a){return a.closest("."+c.menuClass)},l=function(a){return k(a).data("sfOptions")},m=function(){var b=a(this),c=l(b);clearTimeout(c.sfTimer),b.siblings().superfish("hide").end().superfish("show")},n=function(b){b.retainPath=a.inArray(this[0],b.$path)>-1,this.superfish("hide"),this.parents("."+b.hoverClass).length||(b.onIdle.call(k(this)),b.$path.length&&a.proxy(m,b.$path)())},o=function(){var b=a(this),c=l(b);d?a.proxy(n,b,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(n,b,c),c.delay))},p=function(b){var c=a(this),d=l(c),e=c.siblings(b.data.popUpSelector);return d.onHandleTouch.call(e)===!1?this:void(e.length>0&&e.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type||"pointerdown"===b.type?c.trigger("focus"):a.proxy(m,c.parent("li"))()))},q=function(b,c){var g="li:has("+c.popUpSelector+")";a.fn.hoverIntent&&!c.disableHI?b.hoverIntent(m,o,g):b.on("mouseenter.superfish",g,m).on("mouseleave.superfish",g,o);var h="MSPointerDown.superfish";f&&(h="pointerdown.superfish"),d||(h+=" touchend.superfish"),e&&(h+=" mousedown.superfish"),b.on("focusin.superfish","li",m).on("focusout.superfish","li",o).on(h,"a",c,p)};return{hide:function(b){if(this.length){var c=this,d=l(c);if(!d)return this;var e=d.retainPath===!0?d.$path:"",f=c.find("li."+d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),g=d.speedOut;if(b&&(f.show(),g=0),d.retainPath=!1,d.onBeforeHide.call(f)===!1)return this;f.stop(!0,!0).animate(d.animationOut,g,function(){var b=a(this);d.onHide.call(b)})}return this},show:function(){var a=l(this);if(!a)return this;var b=this.addClass(a.hoverClass),c=b.children(a.popUpSelector);return a.onBeforeShow.call(c)===!1?this:(c.stop(!0,!0).animate(a.animation,a.speed,function(){a.onShow.call(c)}),this)},destroy:function(){return this.each(function(){var b,d=a(this),e=d.data("sfOptions");return!!e&&(b=d.find(e.popUpSelector).parent("li"),clearTimeout(e.sfTimer),g(d,e),i(b),j(d),d.off(".superfish").off(".hoverIntent"),b.children(e.popUpSelector).attr("style",function(a,b){if("undefined"!=typeof b)return b.replace(/display[^;]+;?/g,"")}),e.$path.removeClass(e.hoverClass+" "+c.bcClass).addClass(e.pathClass),d.find("."+e.hoverClass).removeClass(e.hoverClass),e.onDestroy.call(d),void d.removeData("sfOptions"))})},init:function(b){return this.each(function(){var d=a(this);if(d.data("sfOptions"))return!1;var e=a.extend({},a.fn.superfish.defaults,b),f=d.find(e.popUpSelector).parent("li");e.$path=h(d,e),d.data("sfOptions",e),g(d,e,!0),i(f,!0),j(d),q(d,e),f.not("."+c.bcClass).superfish("hide",!0),e.onInit.call(this)})}}}();a.fn.superfish=function(b,d){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist on jQuery.fn.superfish"):c.init.apply(this,arguments)},a.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,onDestroy:a.noop,onHandleTouch:a.noop}}(jQuery,window);;
/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b="inline-block"===a.css("display")?"inline-block":"block";a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),f=0;if(d.target)f=
d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b={display:"inline-block"===a.css("display")?"inline-block":"block"};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),a.css(d.property,
f-b))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);;
(function($) {
  'use strict';

  Drupal.behaviors.mobileNavigation = {
    attach: function(context, settings) {
      // Define accessibility link to added to mobile nav on all sites.
      // @todo Move this to PHP.
      var $accessibilityLink = $('<a>', {
        href: '//sfgov.org/sfhome/accessibility-services',
        text: Drupal.t('Accessibility Services'),
        title: Drupal.t('Download viewers, Text Only, Listen Now'),
        class: 'main-menu--accessibility'
      });

      // Initialize SlickNav mobile navigation.
      $('#header ul.menu:first', context).slicknav({
        brand: '<a href="http://sfgov.org">'+ Drupal.t('SFgov') + '</a>',
        label: Drupal.t('Open'),
        duplicate: false,
        duration: 500,
        prependTo: '#global-mobile-container',
        allowParentLinks: true,
        closedSymbol: "&#xf078;",
        openedSymbol: "&#xf077;",
        init: function() {
          // Add the "Accessibility Services" link as the last menu item.
          $accessibilityLink.appendTo('ul.slicknav_nav').end().wrap('<li/>');
          // Set the default state of the Slicknav.
          $('body', context).addClass('slicknav-collapsed');
        },
        beforeOpen: function(trigger) {
          if ($(trigger).hasClass('slicknav_btn')) {
            $('.slicknav_btn').attr('title', Drupal.t('Click to toggle the Main Menu navigation.'));
            $('.slicknav_menutxt').text(Drupal.t('Close'));
            $('body', context).removeClass('slicknav-collapsed').addClass('slicknav-open');
          }
        },
        afterClose: function(trigger) {
          if ($(trigger).hasClass('slicknav_btn')) {
            $('.slicknav_menutxt').text(Drupal.t('Open'));
            $('body', context).removeClass('slicknav-open').addClass('slicknav-collapsed');
          }
        },
      });
    }
  };

  Drupal.behaviors.desktopNavigation = {
    attach: function(context, settings) {
      // Initialize Superfish dropdown navigation.
      $('#navigation ul.menu:first', context).superfish();
      $('#navigation ul.menu:first > li > a').matchHeight();
    }
  };

  Drupal.behaviors.homeLink = {
    attach: function(context, settings) {
      // Add home icon to first link.
      $('#navigation ul.menu:first > li.first > a', context)
        .wrapInner('<span class="element-invisible"/>')
        .prepend('<i class="fa sf-icon-home"/>')
        .addClass('navigation--home-link');
    }
  };
  
  // Rename Workbench "moderate" tab on node view
  jQuery(document).ready(function($){
    $('ul.tabs--primary a').each(function() {
      if ($(this).text().indexOf('Moderate') != -1) {
        $(this).text('History and Revisions');
      }
    });
    
    // Add alert banner
    var banner_test = function(){
        $('<div id="myModal" class="modal"><span class="close">&times;</span><div class="modal-content"><div id="bannerCopy"></div><div id="timer"></div></div></div>').prependTo("body");
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
		        span.style.display = "none";
		        $("#homeslider").css("margin-top",'248px');
        }
    }

    //bannerCopy 
    var c = 'Visit San Francisco’s new website, <a href="https://sf.gov">SF.gov</a>';
    if(c){ 
          banner_test();  
        $("#bannerCopy").html(c);
		    var bh=$("#myModal").height() + 248;
		    $("#homeslider").css("margin-top",bh+'px');
    }
  });
  
  // ReachDeck accessibility widget
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  // If URL parameters or cookie are set launch browsealoud widget
  setTimeout(function(){
    if(urlParams.getAll('read') == 'now') {
      ReachDeck.panel.toggleBar();
    }
  },2500);
  
})(jQuery);
;
(function($){
    $(document).ready(function(){
		var access=getUrlVars()['access'];
		if(access === 'to'){
			localStorage.setItem('accessibility','to');
		}else if(access === 'hc'){
			localStorage.setItem('accessibility','hc');
		}

		var a=localStorage.getItem('accessibility');
		if(a && a.length>1){textOnly(a);}

		$("#sfgv").delegate("a","click", function (e){
			localStorage.setItem('accessibility',0);
			window.location = window.location.pathname;
			e.preventDefault();
		});			
		$(document).delegate('#sfato a', 'click', function (e) {
			localStorage.setItem('accessibility','to');
			location.reload();
			e.preventDefault();
		});
		$(document).delegate('#sfahc a', 'click', function (e) {
			localStorage.setItem('accessibility','hc');
			location.reload();
			e.preventDefault();
		});

		function textOnly(mode){

				$('*[style],*[bgcolor],*[color]').each(function (i) {
					$(this).removeAttr('style');
					$(this).removeAttr('bgcolor');
					$(this).removeAttr('color');
				});
			  
			  $('html').addClass(mode);  
			  $('body').prepend('<p id="sfgv"><a href="#">Back to Graphic version</a></p>');

			  $('img').each(function () {
				var a = '';
				if ($(this).attr('title')) {
					a = $(this).attr('title');
				}
				if ($(this).attr('alt')) {
					a = $(this).attr('alt');
				}
				$(this).replaceWith(' ' + a + ' ');
			  });
			  if (typeof $("#home-rotator").cycle == 'function') {
				$("#home-rotator").cycle("pause");
			  }
			  twitterfix();
		}

	function twitterfix() {
			if(typeof $("#twitter-widget-0").contents().find(".load-more").html() == 'undefined') {
				setTimeout(twitterfix, 2000);
				}
			else {
                var a=localStorage.getItem('accessibility');
				var head = $("#twitter-widget-0").contents().find("head");
                var sstr= '<style>img.u-photo.avatar{display:none !important;}';
                if (a === 'hc'){
                    sstr += '.stream{color:#eaf574!important;background-color: #000!important;}';
                }
				head.append(sstr);
			}
		}

		function getUrlVars()
		{
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++)
			{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		}
     });
})(jQuery);;
jQuery(document).ready(function($){
  // Modify primary tab links
  $('ul.tabs.primary a').each(function() {
    if ($(this).text().indexOf('List links') != -1) {
      $(this).text('Edit Menu Links');
    }
    // Hide Edit Menu tab for non-admin users
    if ($('body').hasClass('user-role-authenticated-user') && !$('body').hasClass('user-role-administrator')) {
      if ($(this).text().indexOf('Edit menu') != -1) {
        $(this).hide();
      }
    }
    // Hide My Sections link
    if ($(this).text().indexOf('My sections') != -1) {
      $(this).hide();
    }
    // Rename moderate tab
    if ($(this).text().indexOf('Moderate') != -1) {
      $(this).text('History and Revisions');
    }
    // Rename files tab
    if ($(this).text().indexOf('Moderate') != -1) {
      $(this).text('History and Revisions');
    }
  });
    
  // Hide File Browser buttons
  if ($('body').hasClass('page-admin-content-file')) {
    $('.tabs-secondary a').each(function() {
      if ($(this).text().indexOf('Thumbnails Plus') == -1 && $(this).text().indexOf('Files') == -1) {
        $(this).hide();
      }
      if ($(this).text().indexOf('Files') != -1) {
        $(this).text('List of Files');
      }
    });
  }
  
  // Update Workbench Info block
  $('form#workbench-moderation-moderate-form').css('display', 'block');
  $('form#workbench-moderation-moderate-form').css('width', '45%');
  $('form#workbench-moderation-moderate-form label').text('Review and publish');
  $('form#workbench-moderation-moderate-form label').css('display', 'block');
  $('form#workbench-moderation-moderate-form label').removeClass('element-invisible');
  
  // Modify submit button
  if($('form#workbench-moderation-moderate-form #edit-state option:selected').text() == 'Needs Review') {
    $('form#workbench-moderation-moderate-form #edit-submit').val('Submit');
  }
  if($('form#workbench-moderation-moderate-form #edit-state option:selected').text() == 'Published') {
    $('form#workbench-moderation-moderate-form #edit-submit').val('Publish');
  }
  // Modify submit button when new option is selected
  $('form#workbench-moderation-moderate-form #edit-state').change(function() {
    if($('form#workbench-moderation-moderate-form #edit-state option:selected').text() == 'Needs Review') {
      $('form#workbench-moderation-moderate-form #edit-submit').val('Submit');
    }
    if($('form#workbench-moderation-moderate-form #edit-state option:selected').text() == 'Published') {
      $('form#workbench-moderation-moderate-form #edit-submit').val('Publish');
    }
  });
  
  setTimeout(delayedOps, 1500);
  
  function delayedOps() {
    // Hide My Sections link
    $('#admin-menu-menu a[href="/admin/workbench/sections"]').each(function() {
      $(this).hide();
    });
    // Hide files link
    $('#admin-menu-menu a[href="/admin/content/file/list"]').each(function() {
      $(this).hide();
    });
    // Hide thumbnails link
    $('#admin-menu-menu a[href="/admin/content/file/thumbnails"]').each(function() {
      $(this).hide();
    });
    // Redirect menu link to main menu
    $('#admin-menu-menu a[href="/admin/structure/menu"]').each(function() {
      $(this).attr('href', '/admin/structure/menu/manage/main-menu');
    });
    // Hide More Buttons menu item
    $('#admin-menu-menu li a').each(function() {
      if ($('body').hasClass('logged-in') && !$('body').hasClass('user-role-administrator')) {
        if ($(this).text().indexOf('More Buttons') != -1) {
          $(this).hide();
        }
      }
    });
  }
});
;
