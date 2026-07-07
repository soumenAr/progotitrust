jQuery(document).ready(function ($) {
	const location = [{
		id: 1,
		stateCode: "IN-JK",
		title: "<a href='/insights/stories' target='_blank'>Jammu and Kashmir<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position1",
		top: "12%",
		left: "27%",
		address: "<div class='map-data-text light-green'><h3>1,43,313 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-jk_poster.jpg",
	}, {
		id: 2,
		stateCode: "IN-MH",
		title: "<a href='/insights/stories' target='_blank'>Maharashtra<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position2",
		top: "58%",
		left: "28%",
		address: "<div class='map-data-text light-green'><h3>1,62,79,909 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-mh_poster.jpg",
	}, {
		id: 3,
		stateCode: "IN-UP",
		title: "<a href='/insights/stories' target='_blank'>Uttar Pradesh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position3",
		top: "34%",
		left: "43%",
		address: "<div class='map-data-text light-green'><h3>77,76,435 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-up_poster.jpg",
	}, {
		id: 4,
		stateCode: "IN-GJ",
		title: "<a href='/insights/stories' target='_blank'>Gujarat<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position4",
		top: "46%",
		left: "18%",
		address: "<div class='map-data-text light-green'><h3>83,90,485 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-gj_poster.jpg",
	}, {
		id: 5,
		stateCode: "IN-PB",
		title: "<a href='/insights/stories' target='_blank'>Punjab<span>Click here to read more</span></a>",
		img: "ripple.svg",
		top: "22%",
		left: "28.5%",
		markerPosition: "marker-icon mrk_position5",
		address: "<div class='map-data-text light-green'><h3>22,89,366 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-pb_poster.jpg",
	}, {
		id: 6,
		stateCode: "IN-MP",
		title: "<a href='/insights/stories' target='_blank'>Madhya Pradesh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position6",
		top: "46%",
		left: "36%",
		address: "<div class='map-data-text light-green'><h3>56,79,585 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-mp_poster.jpg",
	}, {
		id: 7,
		stateCode: "IN-RJ",
		title: "<a href='/insights/stories' target='_blank'>Rajasthan<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position7",
		top: "35%",
		left: "24%",
		address: "<div class='map-data-text light-green'><h3>24,39,025 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-rj_poster.jpg",
	}, {
		id: 8,
		stateCode: "IN-OR",
		title: "<a href='/insights/stories' target='_blank'>Odisha<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position8",
		top: "53.5%",
		left: "54%",
		address: "<div class='map-data-text light-green'><h3>47,83,187 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-or_poster.jpg",
	}, {
		id: 9,
		stateCode: "IN-AR",
		title: "<a href='/insights/stories' target='_blank'>Arunachal Pradesh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position9",
		top: "30%",
		left: "82%",
		address: "<div class='map-data-text light-green'><h3>1,822 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_2.jpg",
	}, {
		id: 10,
		stateCode: "IN-MZ",
		title: "<a href='/insights/stories' target='_blank'>Mizoram<span>Click here to read more</span></a>",
		img: "ripple.svg",
		top: "45%",
		left: "76%",
		markerPosition: "marker-icon mrk_position10",
		address: "<div class='map-data-text light-green'><h3>1,04,545 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-mz_poster.jpg",
	}, {
		id: 11,
		stateCode: "IN-KA",
		title: "<a href='/insights/stories' target='_blank'>Karnataka<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position11",
		top: "71.5%",
		left: "30%",
		address: "<div class='map-data-text light-green'><h3>37,13,006 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-ka_poster.jpg",
	}, {
		id: 12,
		stateCode: "IN-KL",
		title: "<a href='/insights/stories' target='_blank'>Kerala<span>Click here to read more</span></a>",
		img: "ripple.svg",
		top: "84%",
		left: "31.5%",
		markerPosition: "marker-icon mrk_position12",
		address: "<div class='map-data-text light-green'><h3>39,14,162 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-kl_poster.jpg",
	}, {
		id: 13,
		stateCode: "IN-AP",
		title: "<a href='/insights/stories' target='_blank'>Andhra Pradesh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		top: "70%",
		left: "38%",
		markerPosition: "marker-icon mrk_position13",
		address: "<div class='map-data-text light-green'><h3>45,42,956 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-ap_poster.jpg",
	}, {
		id: 14,
		stateCode: "IN-LA",
		title: "<a href='/insights/stories' target='_blank'>Ladakh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position14",
		top: "10%",
		left: "33%",
		address: "<div class='map-data-text light-green'><h3>108 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_1.jpg",
	}, {
		id: 15,
		stateCode: "IN-LD",
		title: "<a href='/insights/stories' target='_blank'>Lakshadweep<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position15",
		top: "80.5%",
		left: "21%",
		address: "<div class='map-data-text light-green'><h3>22 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_4.jpg",
	}, {
		id: 16,
		stateCode: "IN-AN",
		title: "<a href='/insights/stories' target='_blank'>Andaman and Nicobar<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position16",
		top: "76%",
		left: "76%",
		address: "<div class='map-data-text light-green'><h3>377 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_3.jpg",
	}, {
		id: 17,
		stateCode: "IN-AS",
		title: "<a href='/insights/stories' target='_blank'>Assam<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position17",
		top: "36.5%",
		left: "77%",
		address: "<div class='map-data-text light-green'><h3>10,16,470 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-as_poster.jpg",
	}, {
		id: 18,
		stateCode: "IN-BR",
		title: "<a href='/insights/stories' target='_blank'>Bihar<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position18",
		top: "38.5%",
		left: "57%",
		address: "<div class='map-data-text light-green'><h3>22,43,033 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-br_poster.jpg",
	}, {
		id: 19,
		stateCode: "IN-UT",
		title: "<a href='/insights/stories' target='_blank'>Uttarakhand<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position19",
		top: "24.5%",
		left: "39%",
		address: "<div class='map-data-text light-green'><h3>8,63,348 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-ut_poster.jpg",
	}, {
		id: 20,
		stateCode: "IN-HP",
		title: "<a href='/insights/stories' target='_blank'>Himachal Pradesh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position20",
		top: "19%",
		left: "34%",
		address: "<div class='map-data-text light-green'><h3>1,73,239 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-hp_poster.jpg",
	}, {
		id: 21,
		stateCode: "IN-HR",
		title: "<a href='/insights/stories' target='_blank'>Haryana<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position21",
		top: "26.8%",
		left: "31.5%",
		address: "<div class='map-data-text light-green'><h3>11,14,766 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-hr_poster.jpg",
	}, {
		id: 22,
		stateCode: "IN-DL",
		title: "<a href='/insights/stories' target='_blank'>Delhi<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position22",
		top: "29.2%",
		left: "33%",
		address: "<div class='map-data-text light-green'><h3>25,43,375 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-dl_poster.jpg",
	}, {
		id: 23,
		stateCode: "IN-CT",
		title: "<a href='/insights/stories' target='_blank'>Chhattisgarh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position23",
		top: "50%",
		left: "47%",
		address: "<div class='map-data-text light-green'><h3>13,04,872 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-ct_poster.jpg",
	}, {
		id: 24,
		stateCode: "IN-TG",
		title: "<a href='/insights/stories' target='_blank'>Telangana<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position24",
		top: "61.5%",
		left: "38.5%",
		address: "<div class='map-data-text light-green'><h3>60,37,586 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-tg_poster.jpg",
	}, {
		id: 25,
		stateCode: "IN-GA",
		title: "<a href='/insights/stories' target='_blank'>Goa<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position25",
		top: "68.6%",
		left: "24.5%",
		address: "<div class='map-data-text light-green'><h3>3,74,569 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "j-n-k-poster.jpg",
	}, {
		id: 26,
		stateCode: "IN-SK",
		title: "<a href='/insights/stories' target='_blank'>Sikkim<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position26",
		top: "32.5%",
		left: "64.2%",
		address: "<div class='map-data-text light-green'><h3>5,770 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-sk-poster.jpg",
	}, {
		id: 27,
		stateCode: "IN-ML",
		title: "<a href='/insights/stories' target='_blank'>Meghalaya<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position27",
		top: "39%",
		left: "72%",
		address: "<div class='map-data-text light-green'><h3>97,256 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_3.jpg",
	}, {
		id: 28,
		stateCode: "IN-MN",
		title: "<a href='/insights/stories' target='_blank'>Manipur<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position28",
		top: "41.2%",
		left: "79%",
		address: "<div class='map-data-text light-green'><h3>1,41,554 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_1.jpg",
	}, {
		id: 29,
		stateCode: "IN-NL",
		title: "<a href='/insights/stories' target='_blank'>Nagaland<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position29",
		top: "37%",
		left: "81%",
		address: "<div class='map-data-text light-green'><h3>837 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-nl_poster.jpg",
	}, {
		id: 30,
		stateCode: "IN-TR",
		title: "<a href='/insights/stories' target='_blank'>Tripura<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position30",
		top: "44.2%",
		left: "73%",
		address: "<div class='map-data-text light-green'><h3>1,53,046 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_4.jpg",
	}, {
		id: 31,
		stateCode: "IN-WB",
		title: "<a href='/insights/stories' target='_blank'>West Bengal<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position31",
		top: "46%",
		left: "62%",
		address: "<div class='map-data-text light-green'><h3>56,69,756 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-wb_poster.jpg",
	}, {
		id: 32,
		stateCode: "IN-TN",
		title: "<a href='/insights/stories' target='_blank'>Tamil Nadu<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position32",
		top: "82%",
		left: "37%",
		address: "<div class='map-data-text light-green'><h3>46,57,502 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-tn_poster.jpg",
	}, {
		id: 33,
		stateCode: "IN-DH",
		title: "<a href='/insights/stories' target='_blank'>Dādra and Nagar Haveli and Damān and Diu<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position33",
		top: "54.5%",
		left: "22%",
		address: "<div class='map-data-text light-green'><h3>89,260 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "generic-image_1.jpg",
	}, {
		id: 34,
		stateCode: "IN-CH",
		title: "<a href='/insights/stories' target='_blank'>Chandigarh<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position34",
		top: "22.5%",
		left: "32%",
		address: "<div class='map-data-text light-green'><h3>1,57,803 <p>Reach (number of lives)</p></h3></div></div>",
		locationImage: "generic-image_2.jpg",
	}, {
		id: 35,
		stateCode: "IN-PY",
		title: "<a href='/insights/stories' target='_blank'>Pondicherry<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position35",
		top: "78.4%",
		left: "40.2%",
		address: "<div class='map-data-text light-green'><h3>1,85,913 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-py_poster.png",
	}, {
		id: 36,
		stateCode: "IN-JH",
		title: "<a href='/insights/stories' target='_blank'>Jharkhand<span>Click here to read more</span></a>",
		img: "ripple.svg",
		markerPosition: "marker-icon mrk_position36",
		top: "44.6%",
		left: "55.5%",
		address: "<div class='map-data-text light-green'><h3>19,36,510 <p>Reach (number of lives)</p></h3></div>",
		locationImage: "in-jh_poster.jpg",
	},

	];

	//RENDER THE MARKER
	$("#markers").append(`
        ${location.reduce((updated, latest) => updated.concat(`<img role="button" aria-label="Ripple" data-id="${latest.id}" data-code="${latest.stateCode}" src='/themes/custom/reliancefoundation/images/${latest.img}'
                        style="top:${latest.top}; left:${latest.left}" class="${latest.markerPosition}"/>`), "")}
      `);

	//DEALY FOR ADDING CLASS FOR ANIMATE;
	setTimeout(() => {
		$("#markers img").addClass("active");
		location.forEach((item) => {
			$("#address .content").append(`
			<div class="location-item" data-code="${item.stateCode}">
			<div class="img_holder">
			<img src="/themes/custom/reliancefoundation/images/${item.locationImage}" 
															alt="RF Location" 
															class="img-fluid">
			<strong>${item.title}</strong>
			</div>
			<div>
			<p>${item.address}</p>
			</div>
			</div>
			`);
    });
	}
		, 0);

	//get location address by ID
	$(".india_map [data-code]").on("click", function () {
		$("#address, .close-tooltip").show();
		$('body').addClass('hideScroll');
		const thisId = $(this).attr("data-code");
		$('.india_map [data-code]').removeClass('activeState');
		$('.india_map [data-code=' + thisId + ']').addClass('activeState');

		const getAddress = location?.filter((data) => data?.stateCode == thisId);
		$(".location-item").removeClass("active");
		$(`.location-item[data-code="${thisId}"]`).addClass("active");
		
	});

	$(".close-tooltip").click(function () {
		$("#address").hide();
		$('.india_map [data-code]').removeClass('activeState');
		$('body').removeClass('hideScroll');
	});

	//Map Height and width and resize
	let widthOfSvg = $(".india_map").width();
	$(window).resize(function () {
		let widthOfSvg = $(".india_map").width();

		$(".india_map svg ,.india_map svg >g").width(widthOfSvg);
		$(".india_map svg ,.india_map svg >g").height(widthOfSvg);
	});
	$(".india_map svg,.india_map svg >g").width(widthOfSvg);
	$(".india_map svg,.india_map svg >g").height(widthOfSvg);

});