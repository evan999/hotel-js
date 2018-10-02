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
       availableRooms = availableRooms - 1;
       return availableRooms;
   },
   relinquishRoom: function(){
       var availableRooms = this.calculateAvailableRooms();
       availableRooms = availableRooms + 1;
       return availableRooms;
   }
   
};