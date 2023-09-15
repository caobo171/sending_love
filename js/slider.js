var slides = [
	{ image: '', caption: 'Từ cái lần đầu tiên em gật đầu thích anh, anh đã cảm thấy mình thật may mắn' },
	{ image: '', caption: 'Từng ngày từng ngày em dạy anh nhiều thứ ' },
	{ image: '', caption: 'Em mở rộng thế giới của anh ' },
	{ image: '', caption: 'Rồi những chuyến đi của anh không còn một mình ' },
	{ image: '', caption: 'Anh có thêm em, người luôn khiến anh vui,  ' },
	{ image: '', caption: 'Em vẫn như thế luôn bình tĩnh, vui tươi ' },
	{ image: '', caption: '... luôn ấm áp từ đằng sau ' },
	{ image: '', caption: 'Anh cũng nhờ thế mà từng ngày thay đổi, ... ' },
	{ image: '', caption: 'Anh giờ không còn nghiệp dư nữa :)) ' },
	{ image: '', caption: 'Anh không buồn một mình nữa ' },
	{ image: '', caption: 'Giấc mơ tương lai của anh rõ ràng hơn  ' },
	{ image: '', caption: 'Cùng nhau mình vượt mọi chướng ngại, Em nhé !! ' },
]

var html = '';
for (var i = 0; i < slides.length; i++) {
	html += `<div class="mySlides fade">
		<img src="img/slides/pic${i+1}.jpg " style="width:100%">
		<div class="text">${slides[i].caption}</div>
	</div>`
}

$('.slideshow-container').html(html);

var interval = null;
function showSlides() {
	$('.slideshow-container').show();
	$('#info').hide();


	let slideIndex = 1;
	runSlides(slideIndex);

	interval = setInterval(() => {
		plusSlides(1);
	}, 15000);

	// Next/previous controls
	function plusSlides(n) {
		runSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
		runSlides(slideIndex = n);
	}

	function runSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		if (n > slides.length) { slideIndex = 1 }
		if (n < 1) { slideIndex = slides.length }
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex - 1].style.display = "block";
	}
}





function hideSlides() {
	if (interval){
		clearInterval(interval)
	}
	$('.slideshow-container').hide();
	$('#info').show();
};

hideSlides();