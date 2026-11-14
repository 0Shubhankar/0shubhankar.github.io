// Reconstructed decision graph from original crime-policy-game.html.
// Forced restart branches are routed to a review and the next challenge.
const edge=(label,policy,next)=>({label,policy,next});
export const nodes={
 start:{chapter:0,title:'A town under pressure',options:[edge('Increase police presence','police','a'),edge('Implement public surveillance','surveillance','b')]},
 a:{chapter:0,title:'Guide the police force',options:[edge('Zero tolerance policy','zero','a1'),edge('Community policing','community','a2')]},
 a1:{chapter:0,title:'Respond to backlash',options:[edge('Police accountability','accountability','s'),edge('Double down on law and order','hardline','s')]},
 a2:{chapter:0,title:'Balance immediate and long-term safety',options:[edge('Community policing with targeted enforcement','targeted','s'),edge('Social programmes','social','s')]},
 b:{chapter:0,title:'Limits of public surveillance',options:[edge('Expand surveillance technology','advanced','b1'),edge('Reject widespread surveillance; social programmes','reject','b2')]},
 b1:{chapter:0,title:'Privacy concerns',options:[edge('Stricter privacy regulations','privacy','s'),edge('Expand surveillance despite concerns','expand','s')]},
 b2:{chapter:0,title:'Prevention alternatives',options:[edge('Community-based monitoring','watch','s'),edge('Job training, education and social services','heavySocial','s')]},
 s:{chapter:1,title:'Public opinion and the media',options:[edge('Public forums and open dialogue','forums','s1'),edge('Launch a media campaign','media','s2')]},
 s1:{chapter:1,title:'Maintain engagement',options:[edge('Continue public forums','continueForums','s1a'),edge('Shift focus to policy action','action','s1b')]},
 s1a:{chapter:1,title:'Choose a lasting strategy',options:[edge('Prioritize security over civil liberties','security','xa'),edge('Education, economic development and mental health','longTerm','xa')]},
 s1b:{chapter:1,title:'Security and freedom',options:[edge('Legislation safeguarding civil liberties','legislation','xb'),edge('Prioritize security over civil liberties','security','xb')]},
 s2:{chapter:1,title:'Respond to criticism',options:[edge('Dialogue with community leaders','dialogue','xc'),edge('Expand the media campaign','expandMedia','xc')]},
 xa:{chapter:2,title:'Safety and civil liberties',options:[edge('Strengthen civil liberties protections','rights','end'),edge('Public safety with oversight','safetyOversight','end')]},
 xb:{chapter:2,title:'Safety and civil liberties',options:[edge('Public safety with oversight','safetyOversight','end'),edge('Create a civilian oversight board','board','end')]},
 xc:{chapter:2,title:'Safety and civil liberties',options:[edge('Targeted public safety measures','targeted','end'),edge('Invest in preventive measures','prevent','end')]}
};
export function routes(node='start',path=[]){if(node==='end')return [path];return nodes[node].options.flatMap((e,i)=>routes(e.next,[...path,i]));}
