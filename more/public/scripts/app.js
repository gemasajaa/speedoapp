const speedo = {
	seconds:0,
	distance:0,
	start:null,
	coords:[],
	timer:find('#timer'),
	meters:find('#meters'),
	distances(){
		
		this.watchPosId = navigator.geolocation.watchPosition((x)=>{
			const posobj = {lat:x.coords.latitude,lon:x.coords.longitude,time:this.seconds};
			
			if(!this.start)this.start = posobj;
			
			this.coords.push(posobj);
			
			//this.calcDistance(posobj);
			
			//speedo.distances();
			this.meters.innerHTML += `${JSON.stringify(x.coords.latitude)}<br>`; 
		},(e)=>{
			handleerror(e);
		});
		
	},
	process(){
		this.seconds += 1;
		this.timer.innerHTML = `${this.seconds} s`;
		//get data longi dan lati.
		//this.distances();
	},
	update(){
		//this.process();
		//setTimeout(()=>{speedo.update()},1000);
	},
	init(){
		//getting permission.
		//this.distances();
		//this.update();
		find('#startbutton').onclick = ()=>{
			navigator.geolocation.getCurrentPosition(handlePos,handleError);
		}
	},
	calcDistance(to){
		const distance = distVincenty(this.start.lat,this.start.lon,to.lat,to.lon);
		this.distance += distance;
		this.meters.innerHTML = `${distance} m<br>${JSON.stringify(to)}`;
		this.start = to;
	}
}
const handlePos = (x)=>{
	this.meters.innerHTML += `${x.coords.longitude}, ${x.coords.latitude}<br>`;
}
const handleError = (x)=>{
	speedo.meters.innerHTML += 'error found!';
}
speedo.init();
