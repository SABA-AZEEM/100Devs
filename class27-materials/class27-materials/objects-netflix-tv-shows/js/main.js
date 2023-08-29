//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTvShow{
    constructor(noOfShows,duration,serires,quality){
        this.noOfShows=noOfShows;
        this.duration=duration;
        this.serires=serires;
        this.quality=quality;
    }
    showDuration(){
        console.log(this.duration);
    }
    showSeries(){
        console.log(this.serires);
    }
    showQuality(){
        console.log(this.quality);
    }
}
const show1=new NetflixTvShow(20,2,30,true);
show1.showDuration();
show1.showSeries();
show1.showQuality();

