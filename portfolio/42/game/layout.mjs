// Select real Riverbend objects rather than invented camera coordinates.
export function locations(state){
 const road=state.roads.find(r=>r.id==='road-v--360');
 const house=state.buildings.find(b=>b.type==='house'&&b.position.x===-450&&b.position.z===-44);
 const park=state.parks.find(p=>p.id==='park--270-90');
 const civic=state.buildings.find(b=>b.type==='civic'&&b.position.z===-136);
 if(!road||!house||!park||!civic)throw Error('Riverbend layout differs; inspect the city before applying the cinematic.');
 const tap={x:house.position.x+8,z:house.position.z+house.dimensions.depth/2+5};
 const wastewater={x:148,z:310};
 const scenes=[
 {id:'overview',title:'Your city',text:'Every city has ambitions. But not every city has the resources to achieve them.',target:[0,5,0],offset:[790,740,1050],travel:3,hold:6},
 {id:'roads',title:'Roads in decline',text:'Years of deferred investment have left our roads in need of rehabilitation. Further delay may make repairs more expensive.',target:[road.position.x,5,-90],offset:[7,35,82],travel:4,hold:7,detail:'40 km of roads · $40M estimated requirement'},
 {id:'water',title:'A neighbourhood without water',text:'For thousands of households, reliable drinking water remains out of reach. Our water network must reach underserved neighbourhoods.',target:[tap.x,5,tap.z],offset:[8,15,24],travel:4,hold:7,detail:'20,000 connections · $35M estimated requirement'},
 {id:'park',title:'Room to breathe',text:'This neighbourhood has no usable public green space. A vacant municipal site could become a park for the community.',target:[park.position.x,4,park.position.z],offset:[100,155,175],travel:4,hold:7,detail:'15 hectares · $15M estimated requirement'},
 {id:'solar',title:'The cost of electricity',text:'Electricity costs are placing pressure on the municipal budget. The empty roofs of public buildings offer an opportunity to reduce future expenditure.',target:[civic.position.x,32,civic.position.z],offset:[52,65,74],travel:4,hold:7,detail:'10 MW · $20M estimated requirement'},
 {id:'wastewater',title:'A river under pressure',text:'Wastewater treatment capacity has not kept pace with demand. The discharge outlet reveals the consequences of an overloaded system.',target:[92,7,wastewater.z+10],offset:[-92,116,68],travel:4,hold:7,detail:'20 MLD · $40M estimated requirement'},
 {id:'mandate',title:'The $100 Million City',text:'Five infrastructure needs. Ten years. One hundred million dollars in available capital. The estimated investment requirement is one hundred and fifty million. The decisions are yours.',target:[0,5,0],offset:[790,740,1050],travel:5,hold:9,detail:'$100M capital · $150M needs · 10 years'}
 ];
 return {road,house,park,civic,tap,wastewater,scenes};
}
