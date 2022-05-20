function circleArea(par){
    
  if(typeof par === 'number'){
      let radius = par
      let circleArea = (radius * radius * Math.PI);
      console.log(circleArea.toFixed(2))
  }else {
      console.log(`We can not calculate the circle area, because we receive a ${typeof par}.`)
}
}


circleArea(5)