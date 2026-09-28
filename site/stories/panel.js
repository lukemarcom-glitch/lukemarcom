import {sourceList} from '../sources.js?v=1';
import {storyGalleryMarkup} from './gallery.js?v=sources-1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Documentary originals remain primary evidence; AI variants are explicitly labelled.
export function storyMarkup(meta,related){
 return `<div class="sheet-bar"><button class="sheet-expand" aria-expanded="false">Meer ruimte ↑</button><button class="landmark-close" aria-label="Verhaal sluiten">×</button></div>
 <span class="eyebrow">BIJZONDERE VERHALEN · WOII</span>
 <div class="story-meta"><span>${esc(meta.theme)}</span><span class="evidence-badge">${esc(meta.evidenceLabel)}</span></div>
 <h2>${esc(meta.name)}</h2>
 <p class="story-date">${esc(meta.periodNote)}<span>${esc(meta.place)}</span></p>
 ${storyGalleryMarkup(meta.photos)}
 ${meta.locationContext?`<div class="story-place-context"><strong>${esc(meta.locationContext.role)}</strong><dl><dt>Toen</dt><dd>${esc(meta.locationContext.then)}</dd><dt>Nu</dt><dd>${esc(meta.locationContext.now)}</dd></dl>${meta.identityNote?`<p>${esc(meta.identityNote)}</p>`:''}</div>`:''}
 <p class="story-lead">${esc(meta.lead)}</p>
 <section class="building-story" aria-label="Het verhaal">${meta.story.split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('')}</section>
 ${meta.memorials?.length?`<section class="story-memorials"><h3>Herdenken &amp; terugvinden</h3>${meta.memorials.map(m=>`<article><h4>${esc(m.name)}</h4><p>${esc(m.description)}</p><p class="micro">${esc(m.address)}${m.year?' · '+esc(m.year):''}</p><a href="${esc(m.url)}" target="_blank" rel="noopener noreferrer">${esc(m.linkLabel||'Over deze herinneringsplek ↗')}</a></article>`).join('')}<p class="micro">Een latere herdenkingsplek kan elders liggen dan de gebeurtenis op de kaart.</p></section>`:''}
 <section class="story-evidence"><h3>Wat weten we zeker?</h3><p>${esc(meta.evidenceNote)}</p></section>
 <section class="story-location"><h3>Deze plek op de kaart</h3><p>${esc(meta.locationNote)}</p><p class="micro">De marker blijft in Toen en Nu op dezelfde historische plek. De kaart van vóór mei 1940 toont geen reconstructie van de oorlogsschade.</p>${related?`<button class="story-related" data-related="${esc(related.id)}">${esc(meta.relatedLabel||`Bekijk ${related.name} in 3D →`)}</button>`:''}</section>
 ${sourceList(meta)}`;
}
