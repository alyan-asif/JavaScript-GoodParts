class Gadget {

    constructor(startTime, salePrice) {
      this.startTime = startTime;
      this.salePrice = salePrice;
    }

    start() {
      console.log('Gadget started');
    }
  
    end() {
      console.log('Gadget ended');
    }
  }

  class StopWatch extends Gadget {

    constructor(startTime, salePrice, stopWatchType) {
      super(startTime, salePrice);
      this.stopWatchType = stopWatchType;
    }
  }

  class SmartWatch extends Gadget {

    constructor(startTime, salePrice, screenSize) {
      super(startTime, salePrice);
      this.screenSize = screenSize;
    }
  }
  
  let stopWatch = new StopWatch(new Date(), 250, 'digital');
  
  console.log(stopWatch.startTime); 
  console.log(stopWatch.salePrice); 
  console.log(stopWatch.stopWatchType); 
  
  stopWatch.start();
  
  let smartWatch1 = new SmartWatch(new Date(), 200, '420mm');
  let smartWatch2 = new SmartWatch(new Date(), 300, '123mm');
  
  
  SmartWatch.prototype.connectToInternet = function() {
    console.log('Connecting to the internet...');
  }
  

  smartWatch1.connectToInternet(); 
  smartWatch2.connectToInternet(); 