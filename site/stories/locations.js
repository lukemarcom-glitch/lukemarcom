// Historical anchors are shared with the corresponding model in both eras.
// Never geocode a present-day name to silently relocate a historical story.
export function resolveStoryLocations(stories,landmarks){
 return stories.map(story=>{
  const anchor=story.anchor;
  if(!anchor||!anchor.sourceUrl||!story.locationContext)throw Error(`Locatieverantwoording ontbreekt: ${story.id}`);
  if(!['historic-map','landmark','route-start'].includes(anchor.type))throw Error(`Onbekend historisch anker: ${story.id}`);
  if(anchor.type==='historic-map'){if(!story.center?.length||!story.center.every(Number.isFinite))throw Error(`Ongeldige kaartpositie: ${story.id}`);return story;}
  const landmark=landmarks.find(m=>m.id===anchor.landmarkId);
  if(!landmark)throw Error(`Historisch gebouw ontbreekt: ${anchor.landmarkId}`);
  const center=anchor.type==='route-start'?landmark.route?.[0]:landmark.center;
  if(!center)throw Error(`Historisch kaartanker ontbreekt: ${story.id}`);
  return {...story,center:[...center],height:anchor.type==='route-start'?story.height:landmark.height};
 });
}
