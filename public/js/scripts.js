var speed = 5;
$(function() {
	$(".a1").typed({
		strings: ["private"],
		typeSpeed: speed,
		cursorChar: "|",
		callback: function() {
			$(".typed-cursor").fadeOut("fast");
			$(".a2").typed({
				strings: [" void "],
				typeSpeed: speed,
				cursorChar: "|",
				callback: function() {
					$(".typed-cursor").fadeOut("fast");
					$(".a3").typed({
						strings: [" generateWebsite"],
						typeSpeed: speed,
						cursorChar: "|",
						callback: function() {
							$(".typed-cursor").fadeOut("fast");
							$(".a4").typed({
								strings: ["()"],
								typeSpeed: speed,
								cursorChar: "|",
								callback: function() {
									$(".typed-cursor").fadeOut("fast");
									$(".a5").typed({
										strings: ["{"],
										typeSpeed: speed,
										cursorChar: "|",
										callback: function() {
											$(".s1").typed({
												strings: ["&nbsp;&nbsp;&nbsp;&nbsp;string"],
												typeSpeed: speed,
												cursorChar: "|",
												callback: function() {
													$(".typed-cursor").fadeOut("fast");
													$(".s2").typed({
														strings: [" name "],
														typeSpeed: speed,
														cursorChar: "|",
														callback: function() {
															$(".typed-cursor").fadeOut("fast");
															$(".s3").typed({
																strings: [" = "],
																typeSpeed: speed,
																cursorChar: "|",
																callback: function() {
																	$(".typed-cursor").fadeOut("fast");
																	$(".s4").typed({
																		strings: ["\"Tristan Fitzwater\""],
																		typeSpeed: speed,
																		cursorChar: "|",
																		callback: function() {
																			$(".typed-cursor").fadeOut("fast");
																			$(".s5").typed({
																				strings: [";"],
																				typeSpeed: speed,
																				cursorChar: "|"
																			})
																		}
																	})
																}
															})
														}
													})
												}
											})
										}
									})
								}
							})
						}
					})
				}
			})
		}
	})
});
