let hotel = {
   occupiedRooms: 80,
   amenities : ['outdoor swimming pool', 'cable TV', 'free Wi-Fi', 'hot tub'],
   totalRooms: 150,
   calculateAvailableRooms: function(){
       var availableRooms = this.totalRooms - this.occupiedRooms;
       return availableRooms;
   },
   bookRoom: function(){
       var availableRooms = this.calculateAvailableRooms();
       if(availableRooms > 0){
          availableRooms = availableRooms - 1;
          console.log(availableRooms);
       }
       else{
          console.log("Sorry, all rooms are occupied.");
       }
   },
   checkOutRoom: function(){
       var availableRooms = this.calculateAvailableRooms();
       availableRooms = availableRooms + 1;
       return availableRooms;
   }
   
};