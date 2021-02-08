var g1,BG;
 var name;
  var gamestate =0;
   function setup()
   {
		createCanvas(displayWidth,displayHeight);
   } 

	 function preload()
	 {
	 //BG=loadImage("BG1.png");
	 }
		 

	 function draw()
	 {
	   // background(BG);

	   if(gamestate===0)
	   {
			input = createInput("name");
			button = createButton('Play');
			greeting = createElement('h2');
			title = createElement('h2');	
			title1 = createElement('h3');
	  
		title.html("WELCOME TO WILDLIFE LOOKOUT ZOO");
		title.position(displayWidth/2 - 50, 0);

		title1.html("ENTER YOUR NAME") ;
		title1.position(displayWidth/2 - 140 ,displayHeight/2 - 80); 

		input.position(displayWidth/2 - 40 , displayHeight/2 - 80);

		button.position(displayWidth/2 + 30, displayHeight/2);
		 name = input.value();
		button.mousePressed(()=>{
			gamestate=1;
		})


		// form=new Form();
		 //form.display();
	}
	 if(gamestate===1){
		 clear();
		 play1();
		// form.hide();
	 }  
	drawSprites(); 
}

 function play1()
 {
	input.hide();
	button.hide();
	title1.hide();


	 greeting.html("Hello " + name);
	 greeting.position(displayWidth/2-80,displayHeight/2)
 }