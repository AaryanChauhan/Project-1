var building1,building2,building3,building4,building5,building6,building7,building8,building9;

function setup() {
  createCanvas(400, 400);
  background("skyblue");
  building1=new Building();
  building1.position=3.5;
  building1.floors=20;
  building1.display();
  
  building2=new Building();
  building2.position=0.1;
  building2.floors=16;
  building2.display();
 
  building3=new Building();
  building3.position=1.2
  building3.floors=20
  building3.display();
  
  building4=new Building();
  building4.position=2.4
  building4.floors=23
  building4.display();
  
  building5=new Building();
  building5.position=4.5
  building5.floors=12
  building5.display();
  
  building6=new Building();
  building6.position=7.2
  building6.floors=23
  building6.display();
  
  building7=new Building();
  building7.position=9.2
  building7.floors=20
  building7.display();
  
  building8=new Building();
  building8.position=6.3
  building8.floors=25
  building8.display();
  
  building9=new Building();
  building9.position=8.2
  building9.floors=21
  building9.display();
  
 fill(color(255, 204, 0));
  circle(200,80,80);
}
