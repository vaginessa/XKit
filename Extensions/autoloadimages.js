//* TITLE Auto Load Images **//
//* VERSION 0.1 REV A **//
//* DESCRIPTION Load inline photos automatically **//
//* DETAILS This extension removes the &quot;gray box&quot; that appears on the photos attached to non-photo posts, allowing the photos to load automatically without you having to click on them. **//
//* DEVELOPER STUDIOXENIX **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.autoloadimages = new Object({

	running: false,

	run: function() {

		this.running = true;

		if ($(".post").length === 0) {return; }

		XKit.post_listener.add("autoloadimages", XKit.extensions.autoloadimages.do);
		XKit.extensions.autoloadimages.do();

	},

	do: function() {

		var posts = XKit.interface.get_posts("xkit-autoloadimages-done");

		$(posts).each(function() {

			$(this).addClass("xkit-autoloadimages-done");

	  		if ($(this).find(".inline_external_image").length > 0) {

	  			$(this).find(".inline_external_image").each(function() {

	  				$(this).attr('src', $(this).attr('external_src'));
	  				$(this).addClass("enlarged");

	  			});

	  		}

		});

	},

	destroy: function() {
		this.running = false;
		XKit.post_listener.remove("autoloadimages");
	}

});