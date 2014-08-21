var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

module.exports = { 

 getChange : function(price,amountPaid) {
   'use strict'
   var change = [];
   
   var totalChange = price - amountPaid ;
   
   
   for(var i in coins){
	   var coin = coins[i];
	   
	   while(totalChange >= coin){
		   totalChange = totalChange - coin;
		   change.push(coin);
	   }
	}
   
   return change;
 }
}