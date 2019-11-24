class Room{
    constructor(K){
        this.length = K
        this._room = []
    }
    cleanRoom(curDate){
        var _new_room = []
        for (var i = 0; i < this._room.length; i++){
            if (this._room[i].endDate >= curDate){
                _new_room.push(this._room[i])
            }
        }
        this._room = _new_room
    }
    isAvailable(curDate){
        this.cleanRoom(curDate)
        return this._room.length < this.length
    }
    bookRoom(curDate, time){
        this._room.push({endDate: curDate + time - 1});
    }
    getFreeRooms(){
        return this.length - this._room.length
    }
}
function calculate(arrivals , departures, K){
    const rooms = new Room(K)
    let days = 0;
    for (var i = 0; i < arrivals.length; i++){
        if (rooms.isAvailable(arrivals[i])){
            rooms.bookRoom(arrivals[i], departures[i])
        }
        else {
            console.log(false, `at day ${arrivals[i]}, there are ${rooms._room.length + 1} guests in hotel. But we have only ${rooms.length} room`)
        }
    }
}
//complexity: O(n*n) memory used: n + 3
calculate([1,3,5,7,8,9], [2,6,10,2,4,6], 3)