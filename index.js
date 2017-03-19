const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map(function(robot, index){
  var changed = Object.assign({}, robot);
    if (knownDecepticons.includes(robot.name)) {
    changed.alliance = 'decepticon';
  } else {
    changed.alliance = 'autobot';
  }
  return changed;
});

var coloredZebraStripes = zebraStripes.map(function(zebra,index){
  var changed = Object.assign({}, zebra);
  if (index % 2 === 0) {
    changed.color = 'black';
  } else {
    changed.color = 'white';
  }
  return changed
});
