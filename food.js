 class Food{

constructor()
{
  this.foodStock=0;
  this.lastFed;
  milk=loadImage("images/milk.png")
 
  getFoodStock(foodStock)
  {
    this.foodStock=foodStock

  }
  
  getFedtime(lastFed)
  {
    this.lastFed=lastFed

  }

  deductFood()
  {
    if( this.foodStock>0)
    {
       this.foodStock=this.foodStock-1
    }

  }

    getFoodStock()
    { 
       return this.foodStock
    }
    
    
    function setup()
    {


      
    }

      
       
    

  
  
}
 
}
