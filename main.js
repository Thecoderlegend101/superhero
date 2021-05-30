var canvas = new fabric.Canvas('canv');

b_width = 30
b_height = 30
p_x = 10
p_y = 10

player = ""
block = ""

function p_update() {
fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing", function img() {
player = img;

player.scaleToWIdth(150);
player.scaleToHeight(140);
player.set({
top:p_y,
left:p_x
});
canvas.add(player)
})

}


function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block = Img;

	block.scaleToWidth(b_width);
	block.scaleToHeight(b_height);
	block.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block);

	});

}

window.addEventListener('keydown', my_keydown)

function my_keydown(e) {
	keypressed = e.keycode

	if (e.shiftkey == true && keypressed == '80') {
		b_width += 10
		b_height += 10	
	
	}
	
	if (e.shiftkey == true && keypressed == '77') {
		b_width -= 10
		b_height -= 10
		
	
	}
	if (keypressed == '70'){
		Math.floor(Math.random() * 5)
		new_image('')
	}
}



for (i = 0; i != 10; i--) {

}
k = 1
k--
console.log(k)