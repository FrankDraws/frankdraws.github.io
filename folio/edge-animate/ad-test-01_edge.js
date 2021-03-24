(function(compId) {
	var _ = null,
		y = true,
		n = false,
		x9 = '77',
		x10 = 'gotham',
		x11 = '700',
		e43 = '${HogwartsNight}',
		x7 = 'rgba(255,255,255,1.00)',
		x20 = '13',
		x5 = 'horizontal',
		i = 'none',
		x37 = 'rgba(192,192,192,1)',
		x3 = '6.0.0.400',
		x24 = '36',
		x22 = '46',
		lf = 'left',
		e58 = '${offerPanel}',
		e48 = '${_2-NIGHT}',
		e42 = '${CBBR}',
		x39 = '500',
		x27 = '400',
		xc = 'rgba(0,0,0,1)',
		x1 = '6.0.0',
		x13 = 'nowrap',
		x2 = '5.0.0',
		e44 = '${and}',
		g = 'image',
		x4 = 'both',
		e52 = '${blue-divider-top}',
		e55 = '${GETAWAY}',
		x = 'text',
		e45 = '${Night}',
		m = 'rect',
		x33 = '0px',
		e60 = '${perAdultNight}',
		x32 = '60',
		bg = 'background-color',
		e59 = '${UOR-logo-with-glow-400x400}',
		p = 'px',
		o = 'opacity',
		e57 = '${Day}',
		x41 = 'rgba(0,0,0,1.00)',
		e51 = '${Play}',
		e54 = '${hulaGirls}',
		x30 = '28',
		x12 = 'break-word',
		e53 = '${cta}',
		x36 = 'Arial, Helvetica, sans-serif',
		x6 = 'rgba(0,0,0,0)',
		l = 'normal',
		e56 = '${FROM_ONLY}',
		e50 = '${Stay}',
		x15 = 'none solid rgb(255, 255, 255)',
		x26 = '18',
		e49 = '${price}',
		x35 = '14',
		e47 = '${blue-divider-bottom}',
		e46 = '${carat}',
		tp = 'top',
		x28 = '18px';
	var g40 = 'UOR-logo-with-glow-400x400.png';
	var s38 = "FIND OUT MORE &gt;",
		s34 = "PER ADULT, PER NIGHT,<br>TAX INCLUDED",
		s23 = "GETAWAY",
		s31 = "155",
		s18 = "Day.",
		s19 = "CABANA BAY BEACH RESORT",
		s29 = "$",
		s21 = "2-NIGHT",
		s16 = "Night",
		s14 = "Stay.",
		s17 = "and",
		s8 = "Play.",
		s25 = "FROM<br>ONLY";
	var im = 'images/',
		aud = 'media/',
		vid = 'media/',
		js = 'js/',
		fonts = {
			'didact-gothic, sans-serif': '<script src=\"http://use.edgefonts.net/didact-gothic:n4:all.js\"></script>',
			'gotham': ''
		}, opts = {
			'gAudioPreloadPreference': 'auto',
			'gVideoPreloadPreference': 'auto'
		}, resources = [],
		scripts = [],
		symbols = {
			"stage": {
				v: x1,
				mv: x2,
				b: x3,
				stf: x4,
				cg: x5,
				rI: n,
				cn: {
					dom: [{
						id: 'HogwartsNight',
						t: g,
						r: ['-216px', '-19px', '1009px', '757px', 'auto', 'auto'],
						o: '0',
						f: [x6, 'www/media/1000x750-ME_1_cbbr.jpg', '0px', '0px']
					}, {
						id: 'hulaGirls',
						t: g,
						r: ['-133px', '-63px', '1105px', '736px', 'auto', 'auto'],
						o: '0.4',
						f: [x6, 'www/media/DSC_0474_lr.jpg', '0px', '0px']
					}, {
						id: 'carat',
						t: m,
						r: ['721px', '-40px', '34px', '33px', 'auto', 'auto'],
						autoOrient: false,
						f: [x7],
						s: [0, "rgb(0, 0, 0)", i],
						tf: [
							[],
							['45']
						]
					}, {
						id: 'offerPanel',
						t: m,
						r: ['-229px', '0px', '222px', '541px', 'auto', 'auto'],
						autoOrient: false,
						f: [x7],
						s: [0, "rgb(0, 0, 0)", i]
					}, {
						id: 'Play',
						t: x,
						r: ['467px', '136px', 'auto', 'auto', 'auto', 'auto'],
						o: '1',
						text: s8,
						n: [x10, [x9, p], "rgba(255,255,255,1.00)", x11, i, "", x12, x13],
						textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
					}, {
						id: 'Stay',
						t: x,
						r: ['392px', '201px', 'auto', 'auto', 'auto', 'auto'],
						o: '1',
						text: s14,
						align: "left",
						n: [x10, [x9, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13],
						textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
					}, {
						id: 'Night',
						t: x,
						r: ['140px', '117px', 'auto', 'auto', 'auto', 'auto'],
						autoOrient: true,
						overflow: 'hidden',
						o: '0',
						text: s16,
						align: "left",
						n: [x10, [x9, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13],
						textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 8]
					}, {
						id: 'and',
						t: x,
						r: ['90px', '182px', 'auto', 'auto', 'auto', 'auto'],
						autoOrient: true,
						overflow: 'hidden',
						o: '0',
						text: s17,
						align: "left",
						n: [x10, [x9, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13],
						textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 8]
					}, {
						id: 'Day',
						t: x,
						r: ['12px', '247px', 'auto', 'auto', 'auto', 'auto'],
						autoOrient: true,
						overflow: 'hidden',
						o: '0',
						text: s18,
						align: "left",
						n: [x10, [x9, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13],
						textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 8]
					}, {
						id: 'CBBR',
						t: x,
						r: ['751px', '68px', 'auto', 'auto', 'auto', 'auto'],
						o: '0',
						text: s19,
						align: "left",
						n: [x10, [x20, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13]
					}, {
						id: 'blue-divider-top',
						t: m,
						r: ['751px', '86px', '201px', '3px', 'auto', 'auto'],
						o: '0',
						f: [x7],
						s: [0, xc, i]
					}, {
						id: 'blue-divider-bottom',
						t: m,
						r: ['751px', '653px', '201px', '3px', 'auto', 'auto'],
						o: '0',
						f: [x7],
						s: [0, xc, i]
					}, {
						id: '_2-NIGHT',
						t: x,
						r: ['752px', '89px', 'auto', 'auto', 'auto', 'auto'],
						o: '0',
						text: s21,
						align: "left",
						n: [x10, [x22, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13]
					}, {
						id: 'GETAWAY',
						t: x,
						r: ['753px', '131px', 'auto', 'auto', 'auto', 'auto'],
						o: '0',
						text: s23,
						align: "left",
						n: [x10, [x24, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13]
					}, {
						id: 'FROM_ONLY',
						t: x,
						r: ['753px', '194px', 'auto', 'auto', 'auto', 'auto'],
						o: '0',
						text: s25,
						align: "left",
						n: [x10, [x26, p], "rgba(255,255,255,1)", x27, x15, l, x12, x13],
						ts: ["", "", x28, "", ""]
					}, {
						id: 'price',
						t: 'group',
						r: ['828px', '183px', '123', '72', 'auto', 'auto'],
						o: '0',
						c: [{
							id: 'usd',
							t: x,
							r: ['0px', '8px', 'auto', 'auto', 'auto', 'auto'],
							o: '1',
							text: s29,
							align: "left",
							n: [x10, [x30, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13]
						}, {
							id: '_155',
							t: x,
							r: ['22px', '0px', 'auto', 'auto', 'auto', 'auto'],
							o: '1',
							text: s31,
							align: "left",
							n: [x10, [x32, p], "rgba(255,255,255,1)", x11, x15, l, x12, x13],
							ts: [x33, "", "", "", ""]
						}]
					}, {
						id: 'perAdultNight',
						t: x,
						r: ['770px', '248px', 'auto', 'auto', 'auto', 'auto'],
						o: '0',
						text: s34,
						align: "center",
						n: [x36, [x35, p], "rgba(255,255,255,1.00)", l, i, "", x12, x13]
					}, {
						id: 'cta',
						t: 'group',
						r: ['769px', '780px', '166', '34', 'auto', 'auto'],
						cu: 'pointer',
						o: '0',
						c: [{
							id: 'cta-button',
							t: m,
							r: ['0px', '0px', '166px', '34px', 'auto', 'auto'],
							br: ["3px", "3px", "3px", "3px 3px"],
							o: '1',
							f: [x37, [270, [
								['rgba(0,174,239,1.00)', 0],
								['rgba(0,29,124,1.00)', 100]
							]]],
							s: [0, "rgba(0,174,239,1.00)", i]
						}, {
							id: 'find-out-more',
							t: x,
							r: ['17px', '9px', 'auto', 'auto', 'auto', 'auto'],
							o: '1',
							text: s38,
							align: "left",
							n: [x10, [x35, p], "rgba(255,255,255,1)", x39, x15, l, x12, x13]
						}]
					}, {
						id: 'UOR-logo-with-glow-400x400',
						t: g,
						r: ['777px', '747px', '150px', '150px', 'auto', 'auto'],
						o: '0',
						f: [x6, im + g40, '0px', '0px']
					}],
					style: {
						'${Stage}': {
							isStage: true,
							r: ['null', 'null', '960px', '541px', 'auto', 'auto'],
							zr: ['', '960px', '', ''],
							overflow: 'hidden',
							f: [x41]
						}
					}
				},
				tt: {
					d: 4180,
					a: y,
					data: [
						["eid298", o, 2720, 704, "linear", e42, '0', '1'],
						["eid329", o, 2342, 1031, "linear", e43, '0', '1'],
						["eid197", o, 2177, 1286, "easeOutExpo", e44, '0', '1'],
						["eid198", o, 2177, 1286, "easeOutExpo", e45, '0', '1'],
						["eid232", tp, 2954, 361, "easeOutCubic", e46, '-40px', '389px'],
						["eid233", tp, 3315, 302, "easeOutBounce", e46, '389px', '154px'],
						["eid307", tp, 3377, 303, "easeOutExpo", e47, '653px', '171px'],
						["eid358", "textShadow.blur", 4180, 0, "easeOutExpo", e44, '8px', '8px'],
						["eid303", tp, 3299, 315, "easeOutExpo", e48, '571px', '89px'],
						["eid308", o, 3377, 303, "easeOutExpo", e47, '0', '1'],
						["eid315", o, 3536, 198, "easeOutExpo", e49, '0', '1'],
						["eid195", "location", 1963, 1500, "easeOutExpo", e45, [
							[248, 163, 0, 0, 0, 0, 0],
							[592, 163, 0, 0, 0, 0, 344]
						]],
						["eid61", lf, 0, 1808, "easeOutExpo", e50, '-199px', '74px'],
						["eid157", lf, 1808, 1155, "easeOutBack", e50, '74px', '392px'],
						["eid266", o, 0, 1780, "easeOutExpo", e51, '1', '0.9800000190734863'],
						["eid159", o, 1780, 902, "easeOutBack", e51, '0.9800000190734863', '0'],
						["eid299", tp, 3241, 277, "easeOutExpo", e52, '568px', '86px'],
						["eid60", lf, 0, 1780, "easeOutExpo", e51, '-358px', '74px'],
						["eid263", lf, 1780, 694, "easeOutBack", e51, '143px', '467px'],
						["eid301", o, 3241, 277, "linear", e52, '0', '1'],
						["eid320", o, 3614, 500, "easeOutExpo", e53, '0', '1'],
						["eid355", lf, 1963, 379, "easeInExpo", e54, '-133px', '383px'],
						["eid306", o, 3331, 313, "easeOutExpo", e55, '0', '1'],
						["eid309", tp, 3445, 268, "easeOutExpo", e56, '677px', '194px'],
						["eid196", "location", 1963, 1500, "easeOutExpo", e57, [
							[99, 293, 0, 0, 0, 0, 0],
							[613, 298, 0, 0, 0, 0, 514.02]
						]],
						["eid313", lf, 3536, 198, "easeOutExpo", e49, '828px', '829px'],
						["eid260", lf, 1963, 919, "easeOutBack", e58, '-229px', '738px'],
						["eid322", o, 3734, 446, "easeInOutCirc", e59, '0', '1'],
						["eid295", tp, 2720, 704, "easeOutExpo", e42, '550px', '68px'],
						["eid316", lf, 3582, 174, "easeOutExpo", e60, '770px', '769px'],
						["eid199", o, 2177, 1286, "easeOutExpo", e57, '0', '1'],
						["eid321", tp, 3734, 446, "easeOutBack", e59, '747px', '344px'],
						["eid155", tp, 1808, 1155, "easeOutBack", e50, '200px', '201px'],
						["eid328", o, 0, 609, "linear", e54, '0.4', '1'],
						["eid332", o, 1750, 642, "linear", e54, '1', '0'],
						["eid318", o, 3582, 174, "easeOutExpo", e60, '0', '1'],
						["eid304", o, 3299, 315, "easeOutExpo", e48, '0', '1'],
						["eid310", o, 3445, 268, "easeOutExpo", e56, '0', '1'],
						["eid194", "location", 1963, 1500, "easeOutExpo", e44, [
							[163, 228, 0, 0, 0, 0, 0],
							[627, 233, 0, 0, 0, 0, 464.03]
						]],
						["eid357", "textShadow.blur", 4180, 0, "easeOutExpo", e57, '8px', '8px'],
						["eid265", o, 0, 1808, "easeOutExpo", e50, '1', '0.9800000190734863'],
						["eid156", o, 1808, 874, "easeOutBack", e50, '0.9800000190734863', '0'],
						["eid346", lf, 2474, 989, "easeOutExpo", e43, '-256px', '-216px'],
						["eid158", tp, 1780, 1136, "easeOutBack", e51, '135px', '136px'],
						["eid359", "textShadow.blur", 4180, 0, "easeOutExpo", e45, '8px', '8px'],
						["eid334", bg, 2882, 501, "easeOutBack", e46, 'rgba(255,255,255,1.00)', 'rgba(172,172,172,1.00)'],
						["eid314", tp, 3536, 198, "easeOutExpo", e49, '665px', '183px'],
						["eid305", tp, 3331, 313, "easeOutExpo", e55, '613px', '131px'],
						["eid317", tp, 3582, 174, "easeOutExpo", e60, '730px', '248px'],
						["eid333", bg, 2882, 501, "easeOutBack", e58, 'rgba(255,255,255,1.00)', 'rgba(172,172,172,1.00)'],
						["eid319", tp, 3614, 500, "easeOutExpo", e53, '780px', '298px']
					]
				}
			}
		};
	AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-130370089");
(function($, Edge, compId) {
	var Composition = Edge.Composition,
		Symbol = Edge.Symbol;
	Edge.registerEventBinding(compId, function($) {
		//Edge symbol: 'stage'
		(function(symbolName) {
			var myStage = $('#Stage');
			$(myStage).wrap("<div class='new' style='color:white; font-family:Helvetica , sans-serif; margin-top: 40px;'></div>");
			Symbol.bindElementAction(compId, symbolName, "${cta}", "click", function(sym, e) {
				this.play(0);
			});
			//Edge binding end
			Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
				sym.$("head").append('<link rel="stylesheet" type="text/css" href="style.css"/>');
			});
			//Edge binding end
		})("stage");
		//Edge symbol end:'stage'
	})
})(AdobeEdge.$, AdobeEdge, "EDGE-130370089");