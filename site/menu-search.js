// Search only descriptive catalog fields; coordinates, URLs and source citations are not results.
export const normalizeSearch=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('nl').replace(/[^a-z0-9]+/g,' ').trim();
export function searchPlaces(items,query){
 const words=normalizeSearch(query).split(' ').filter(Boolean);
 return items.filter(item=>{
  const text=normalizeSearch([item.name,item.markerName,item.aliases,item.alternativeNames,item.alternateNames,item.address,item.street,item.place,item.description,item.locationNote,item.locationContext,item.lead].flat(Infinity).filter(value=>typeof value==='string').join(' '));
  return words.every(word=>text.includes(word));
 });
}
export function createMenuSearch(catalog,stories,onSelect){
 const content=document.querySelector('#places-content');
 const header=document.createElement('div');header.className='menu-search-header';
 header.innerHTML='<label for="place-search">Zoek een plek of verhaal</label><div class="menu-search-field"><input id="place-search" type="search" placeholder="Naam of straat…" autocomplete="off" spellcheck="false" aria-controls="place-search-results" aria-describedby="place-search-status"><button id="place-search-clear" type="button" aria-label="Zoekopdracht wissen" hidden>×</button></div><p id="place-search-status" role="status" aria-live="polite" aria-atomic="true"></p>';
 const results=document.createElement('div');results.id='place-search-results';results.hidden=true;
 content.prepend(header);header.after(results);
 const input=header.querySelector('input'),clear=header.querySelector('button'),status=header.querySelector('[role=status]');
 const groups=[['Gebouwen & plekken',catalog],['Verhalen · WOII',stories]];
 function update(){
  const active=Boolean(input.value.trim());content.classList.toggle('is-searching',active);results.hidden=!active;clear.hidden=!active;results.replaceChildren();
  if(!active){status.textContent='';return;}
  let count=0;
  for(const [name,items] of groups){
   const matches=searchPlaces(items,input.value);count+=matches.length;if(!matches.length)continue;
   const h=document.createElement('h2');h.textContent=`${name} (${matches.length})`;results.append(h);
   for(const meta of matches){const b=document.createElement('button');b.type='button';b.textContent=meta.name;b.dataset.searchResult=meta.id;b.onclick=()=>onSelect(meta);results.append(b);}
  }
  status.textContent=`${count} ${count===1?'resultaat':'resultaten'}`;
  if(!count){const p=document.createElement('p');p.className='menu-note';p.textContent='Geen plekken gevonden. Probeer een andere naam of straat.';results.append(p);}
  content.scrollTop=0;
 }
 input.addEventListener('input',update);clear.onclick=()=>{input.value='';update();input.focus();};
 input.addEventListener('keydown',event=>{if(event.key==='Escape'&&input.value){event.stopPropagation();clear.click();}});
}
