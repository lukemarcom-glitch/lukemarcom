const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = (url, label, cls='') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
export function provider(url='') {
 try {
  const host = new URL(url).hostname;
  if (host.includes('wikimedia.org')) return 'Wikimedia Commons · bestandsgegevens';
  if (/handle.net/.test(host)) return 'Archief · oorspronkelijke registratie';
  if (host.includes('archieven.nl') || host.includes('stadsarchief.rotterdam.nl')) return 'Stadsarchief Rotterdam · beeldregistratie';
  if (host.includes('museumrotterdam.nl')) return 'Museum Rotterdam · collectie';
  return host.replace(/^www\./,'');
 } catch {return 'Bronregistratie';}
}
export function photoCredit(photo, ai=false) {
 const origin = photo.archiveUrl || photo.url;
 const links = [link(origin, photo.sourceLabel || provider(origin), 'photo-source-link')];
 if (photo.archiveUrl && photo.archiveUrl !== photo.url) links.push(link(photo.url, provider(photo.url), 'photo-metadata-link'));
 const license = photo.licenseUrl ? link(photo.licenseUrl, photo.license || 'Gebruiksrechten') : esc(photo.license || 'Gebruiksrechten niet vastgesteld');
 return `<span class="photo-credit"><span class="photo-credit-heading">${ai?'Bron van het oorspronkelijke beeld':'Herkomst van deze foto'}</span><span>${esc(photo.author || 'Maker onbekend')} · ${esc(photo.date || 'Datering niet vermeld')}</span>${photo.identifier?`<span>Collectienummer: ${esc(photo.identifier)}</span>`:''}<span class="photo-source-links">${links.join(' · ')}</span><span class="photo-license">Rechten origineel: ${license}</span>${ai?`<span>AI-bewerking door RDAM39; kleuren en details kunnen afwijken van het origineel.${photo.aiLicense?` Licentie bewerking: ${photo.aiLicenseUrl?link(photo.aiLicenseUrl,photo.aiLicense):esc(photo.aiLicense)}.`:''}</span>`:''}${photo.rightsNote?`<span class="photo-rights-note">${esc(photo.rightsNote)}</span>`:''}${photo.sourceNote?`<span class="source-note">${esc(photo.sourceNote)}</span>`:''}</span>`;
}
export function sourceList(meta) {
 const sources = meta.sources || [];
 return `<section class="story-sources content-sources" aria-label="Bronnen bij de tekst"><h3>Bronnen bij dit verhaal</h3><p class="micro">Open de specifieke pagina of archiefregistratie. Bij elke bron staat waarvoor deze is opgenomen. Fotoherkomst en rechten staan ook direct onder de gekozen foto.</p><ol>${sources.map(s=>`<li>${s.unavailable?`<span class="source-unavailable">${esc(s.title)}</span>`:link(s.url,s.title)}${s.supports?`<p>${esc(s.supports)}</p>`:''}${s.accessNote?`<p class="source-note">${esc(s.accessNote)}${s.accessUrl?` ${link(s.accessUrl,s.accessLabel||'Beschikbaarheid van deze bron')}`:''}</p>`:''}${s.unavailable?`<details class="source-original-url"><summary>Oorspronkelijke verwijzing</summary><p>${esc(s.url)}</p></details>`:''}</li>`).join('')}</ol>${meta.sourceAuditNote?`<p class="source-note">${esc(meta.sourceAuditNote)}</p>`:''}</section>`;
}
export function wikiBackground(meta) {
 if (!meta.wikipedia || meta.sources?.some(s=>s.url===meta.wikipedia)) return '';
 let title;try {title=decodeURIComponent(new URL(meta.wikipedia).pathname.split('/wiki/')[1]||'Wikipedia').replaceAll('_',' ');}catch{title='Wikipedia';}
 return `<p class="wiki-background">${link(meta.wikipedia,`Aanvullende achtergrond: ${title}`)}<small>${esc(meta.wikipediaNote || 'Wikipedia is aanvullende achtergrond; de specifieke bronnen voor deze plek staan hieronder.')}</small></p>`;
}
