class Form
 {
   constructor() 
   {

    this.name=null;
    this.input = createInput("name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.title1 = createElement('h3');
  }
      hide()
  { this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
   display()
  {
    this.title.html("WELCOME TO WILDLIFE LOOKOUT ZOO");
    this.title.position(displayWidth/2 - 50, 0);
    this.title1.html("ENTER YOUR NAME") ;
    this.title1.position(displayWidth/2 - 140 ,displayHeight/2 - 80); 
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    var name = this.input.value();
    this.button.mousePressed(()=>{
     this.input.hide();
    this.button.hide();
     gamestate=1;
     this.greeting.html("Hello " + name);
     this.greeting.position(displayWidth/2-80,displayHeight/2)
   })
  }
}
