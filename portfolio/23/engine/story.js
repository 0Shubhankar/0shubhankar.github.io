// Original source branch IDs retained; restart leaves now advance to review.
const n=(chapter,title,options)=>({chapter,title,options:options.map(([label,policy,next])=>({label,policy,next}))});
export const nodes={
start:n(0,'Reviving downtown', [['Business incentives','incentives','a'],['Infrastructure investment','infrastructure','b']]),
a:n(0,'The future of subsidies',[['Diversify incentives','diversify','a1'],['Phase out incentives','phaseOut','a2']]),
a1:n(0,'Targeting support',[['Sector-specific support','targeted','s'],['Unrestricted incentives','broad','s']]),
a2:n(0,'Commercial affordability',[['Commercial rent cap','rentCap','s'],['Landlord tax incentives','landlord','s']]),
b:n(0,'Delivering regeneration',[['Public-private partnerships','ppp','b1'],['Zoning reform','zoning','b2']]),
b1:n(0,'Partnership accountability',[['PPP oversight committee','oversight','s'],['Shared-risk agreements','riskShare','s']]),
b2:n(0,'Implementing zoning',[['Phased zoning rollout','phased','s'],['Strategic compliance','compliance','s']]),
s:n(1,'Sustaining growth',[['Mixed-use development','mixed','s1'],['Economic development zones','zones','s2']]),
s1:n(1,'Affordability in mixed-use projects',[['Market-led affordability','market','s1a'],['Affordable-unit incentives','affordable','s1b']]),
s1a:n(1,'Developer commitments',[['Rely on developer promises','promises','x'],['Affordable housing partnerships','affordablePPP','x']]),
s1b:n(1,'Delivering affordable units',[['Streamline permits','permits','x'],['Developer tax breaks','developerTax','x']]),
s2:n(1,'Who benefits from growth?',[['Support local businesses','local','x'],['Attract major corporations','corporate','x']]),
x:n(2,'Resolving stakeholder conflicts',[['Revitalization advisory board','board','end'],['Stakeholder impact assessments','impact','end']])};
export const chapters=['Reviving downtown','Sustaining growth without displacement','Resolving stakeholder conflicts'];
export function* routes(node='start',path=[]){if(node==='end'){yield path;return;}for(let i=0;i<nodes[node].options.length;i++)yield* routes(nodes[node].options[i].next,[...path,i]);}
