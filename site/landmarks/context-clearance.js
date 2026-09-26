// Clear only indicative context houses when a separately reconstructed landmark occupies the site.
let sites=[];
export function configureLandmarkContext(catalog){sites=catalog.filter(m=>!m.photoPoints&&!['hang-steigers','hoogstraat','kolk-open-rijstuin','oude-diergaarde','burgemeester-hoffmanplein'].includes(m.id));}
const inside=(p,poly)=>{let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;};
const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
const segment=(a,b,c,d)=>cross(a,b,c)*cross(a,b,d)<=0&&cross(c,d,a)*cross(c,d,b)<=0&&Math.max(Math.min(a[0],b[0]),Math.min(c[0],d[0]))<=Math.min(Math.max(a[0],b[0]),Math.max(c[0],d[0]))&&Math.max(Math.min(a[1],b[1]),Math.min(c[1],d[1]))<=Math.min(Math.max(a[1],b[1]),Math.max(c[1],d[1]));
export function contextOccupied(meta,x,z,w,d){
 const a=meta.angle||0,c=Math.cos(a),s=Math.sin(a),pad=.7;
 const poly=[[-w/2-pad,-d/2-pad],[w/2+pad,-d/2-pad],[w/2+pad,d/2+pad],[-w/2-pad,d/2+pad]].map(([u,v])=>[meta.center[0]+c*(x+u)+s*(z+v),meta.center[1]+s*(x+u)-c*(z+v)]);
 return sites.some(m=>{if(m.id===meta.id||!m.polygon)return false;const q=m.polygon;if(poly.some(p=>inside(p,q))||q.some(p=>inside(p,poly)))return true;return poly.some((p,i)=>q.some((v,j)=>segment(p,poly[(i+1)%4],v,q[(j+1)%q.length])));});
}
