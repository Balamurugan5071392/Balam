//stopWatch designing

function stopWatch(){
    let sTime,eTime,run,dur=0;
    this.start = function(){
        if(run){
            throw("Watch is already running")
        }
        run=true
        sTime=new Date()
    }
    this.stop = function(){
        if(!run){
            throw("Watch is not started")
        }
        run=false
        eTime = new Date()
        const sec = (eTime.getTime()-sTime.getTime())/1000
        dur+=sec
    }
    this.reset=function(){
        sTime=0
        eTime=0
        run=0
        dur=0
    }
    this.dur=function(){
        return dur
    }
}
