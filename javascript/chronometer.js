class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
  const intervalId = setInterval(() => {
    this.currentTime ++;
  }, 1000);
  }
  

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {

 const seconds = this.currentTime - this.getMinutes() * 60
 return seconds

  }

  twoDigitsNumber(str) {

    const twodigits =  str.toString().padStart(2, "0")
    return twodigits  
  
}
  
  stopClick() {
    clearInterval(this.IntervalId)
  }

  resetClick() {
   this.currentTime = 0;
  }

  splitClick() {

 let min = this.getMinutes()
 let sec = this.getSeconds()

 if (min < 10 && sec < 10) {
   return `${0}${min}:${0}${sec}`
 } else if (min < 10 && sec > 10) {
   return `0${min}:${sec}`
 } else if (min > 10 && sec < 10) {
   return `${min}:0${sec}`
 } else {
   return `${min}:${sec}`
 }
    
  }
}
