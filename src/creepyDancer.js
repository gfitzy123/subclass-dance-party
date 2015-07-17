
var makeCreepyDancer = function(top, left, timeBetweenSteps){
  
  Dancer.call(this, top, left, timeBetweenSteps)

};

makeCreepyDancer.prototype = Object.create(Dancer.prototype);
makeCreepyDancer.prototype.constructor = makeCreepyDancer;
makeCreepyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  };