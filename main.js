
var canvas = new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image,x,y,w,h)
{
	fabric.Image.fromURL(get_image,function(Img){
        player_object = Img;
        player_object.scaleToWidth(w);
        player_object.scaleToHeight(h);
        player_object.set({
            top:y,
            left:x
        });
        canvas.add(player_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image("rr1.png",block_x,block_y,block_image_width,block_image_height);
	}
	if(keyPressed == '71')
	{
		block_x = 180;
		new_image("gr.png",block_x,block_y,block_image_width,block_image_height);
	}
	
	if(keyPressed == '89')
	{
		block_x =330;
		new_image("yr.png",block_x,block_y,block_image_width,block_image_height);
	}
	if(keyPressed == '80')
	{
		block_x = 570;
		new_image("pr.png",block_x,block_y,block_image_width,block_image_height);
	}
	if(keyPressed == '66')
	{
		block_x = 670;
		new_image("br.png",block_x,block_y,block_image_width,block_image_height);
	}
	
}

