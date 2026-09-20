const ie={LEFT:-1,RIGHT:1};let St=location.hostname==="127.0.0.1",Ke=null,Ze;function it(){return St}function $t(n){St=n}function k(){if(!Ke)throw new Error("Context requested before being set");return Ke}function ei(n){Ke=n}function E(n,e,r){const i=document.createElement("div");return i.classList.add(n),e&&(i.textContent=e),r&&(i.id=r),i}function W(n,e){n.addEventListener("click",r=>e(r)),n.addEventListener("touchend",r=>{if(r instanceof TouchEvent){if(!(n instanceof HTMLElement))return}else return;const i=r.changedTouches[0],l=n.getBoundingClientRect();i.clientX>=l.left&&i.clientX<=l.right&&i.clientY>=l.top&&i.clientY<=l.bottom&&e(r)})}function nt(n,e=!0,r=()=>{},i){if(!n)return;let l=!1,o=0,c=0,d=e?n.parentElement:n;if(!d){It("Birb: Parent element not found");return}n.addEventListener("mousedown",f=>{l=!0,o=f.clientX-d.offsetLeft,c=f.clientY-d.offsetTop}),n.addEventListener("touchstart",f=>{l=!0;const h=f.touches[0];o=h.clientX-d.offsetLeft,c=h.clientY-d.offsetTop,f.preventDefault(),f.stopPropagation()}),document.addEventListener("mouseup",f=>{l&&(r(d.offsetTop,d.offsetLeft),f.preventDefault()),l=!1}),document.addEventListener("touchend",f=>{l&&(r(d.offsetTop,d.offsetLeft),f.preventDefault()),l=!1}),document.addEventListener("mousemove",f=>{const h=i||document.documentElement,A=h.scrollWidth-d.clientWidth,p=h.scrollHeight-d.clientHeight;l&&(d.style.left=`${Math.max(0,Math.min(A,f.clientX-o))}px`,d.style.top=`${Math.max(0,Math.min(p,f.clientY-c))}px`)}),document.addEventListener("touchmove",f=>{if(l){const h=f.touches[0];d.style.left=`${Math.max(0,h.clientX-o)}px`,d.style.top=`${Math.max(0,h.clientY-c)}px`}})}function rt(n,e,r=!0){e&&W(e,n),document.addEventListener("keydown",i=>{e&&!e.isConnected||r&&i.key==="Escape"&&n()})}function kt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function $(){console.log("Birb: ",...arguments)}function ti(){it()&&console.debug("Birb: ",...arguments)}function It(){console.error("Birb: ",...arguments)}function z(n,e,r){const i=[];for(let l=0;l<r;l++)i.push(n[l].slice(e*r,(e+1)*r));return i}function V(){return window.innerHeight}function ii(){return document.documentElement.clientHeight}function ni(n){Ze=n}function x(){if(!Ze)throw new Error("Shadow root requested before being set");return Ze}const ri={bluebird:{name:"Eastern Bluebird",description:"Native to North American and very social, though can be timid around people.",latinName:"Sialia sialis",url:"https://en.wikipedia.org/wiki/Eastern_bluebird",colors:{foot:"#af8e75",face:"#639bff",belly:"#f8b143",underbelly:"#ec8637",wing:"#578ae6","wing-edge":"#326ed9"}},shimaEnaga:{name:"Shima Enaga",description:"Small, fluffy birds found in the snowy regions of Japan, these birds are highly sought after by ornithologists and nature photographers.",latinName:"Aegithalos caudatus",url:"https://en.wikipedia.org/wiki/Long-tailed_tit",colors:{foot:"#af8e75",face:"#ffffff",belly:"#ebe9e8",underbelly:"#ebd9d0",wing:"#f3d3c1","wing-edge":"#2d2d2d","theme-highlight":"#d7ac93"}},tuftedTitmouse:{name:"Tufted Titmouse",description:"Native to the eastern United States, full of personality, and notably my wife's favorite bird.",latinName:"Baeolophus bicolor",url:"https://en.wikipedia.org/wiki/Tufted_titmouse",colors:{foot:"#af8e75",face:"#c7cad7",belly:"#e4e5eb",underbelly:"#d7cfcb",wing:"#b1b5c5","wing-edge":"#9d9fa9","theme-highlight":"#b9abcf"},tags:["tuft"]},europeanRobin:{name:"European Robin",description:"Native to western Europe, this is the quintessential robin. Quite friendly, you'll often find them searching for worms.",latinName:"Erithacus rubecula",url:"https://en.wikipedia.org/wiki/European_robin",colors:{foot:"#af8e75",face:"#ffaf34",hood:"#aaa094",belly:"#ffaf34",underbelly:"#babec2",wing:"#aaa094","wing-edge":"#888580","theme-highlight":"#ffaf34"}},redCardinal:{name:"Red Cardinal",description:"Native to the eastern United States, this strikingly red bird is hard to miss.",latinName:"Cardinalis cardinalis",url:"https://en.wikipedia.org/wiki/Red_cardinal",colors:{beak:"#d93619",foot:"#af8e75",face:"#31353d",hood:"#e83a1b",belly:"#e83a1b",underbelly:"#dc3719",wing:"#d23215","wing-edge":"#b1321c",collar:"#e83a1b",scruff:"#d23215"},tags:["tuft"]},americanGoldfinch:{name:"American Goldfinch",description:"Coloured a brilliant yellow, this bird feeds almost entirely on the seeds of plants such as thistle, sunflowers, and coneflowers.",latinName:"Spinus tristis",url:"https://en.wikipedia.org/wiki/American_goldfinch",colors:{beak:"#ffaf34",foot:"#af8e75",face:"#fff255",nose:"#383838",hood:"#383838",belly:"#fff255",underbelly:"#f5ea63",wing:"#e8e079","wing-edge":"#191919","theme-highlight":"#ffcc00"}},barnSwallow:{name:"Barn Swallow",description:"Agile birds that often roost in man-made structures, these birds are known to build nests near Ospreys for protection.",latinName:"Hirundo rustica",url:"https://en.wikipedia.org/wiki/Barn_swallow",colors:{foot:"#af8e75",face:"#db7c4d",belly:"#f7e1c9",underbelly:"#ebc9a3",wing:"#2252a9","wing-edge":"#1c448b",hood:"#2252a9"}},mistletoebird:{name:"Mistletoebird",description:"Native to Australia, these birds eat mainly mistletoe and in turn spread the seeds far and wide.",latinName:"Dicaeum hirundinaceum",url:"https://en.wikipedia.org/wiki/Mistletoebird",colors:{foot:"#6c6a7c",face:"#352e6d",belly:"#fd6833",underbelly:"#e6e1d8",wing:"#342b7c","wing-edge":"#282065"}},scarletRobin:{name:"Scarlet Robin",description:"Native to Australia, this striking robin can be found in Eucalyptus forests.",latinName:"Petroica boodang",url:"https://en.wikipedia.org/wiki/Scarlet_robin",colors:{foot:"#494949",face:"#3d3d3d",belly:"#fc5633",underbelly:"#dcdcdc",wing:"#2b2b2b","wing-edge":"#ebebeb",nose:"#ebebeb","theme-highlight":"#fc5633"}},americanRobin:{name:"American Robin",description:"While not a true robin, this social North American bird is so named due to its orange coloring. It seems unbothered by nearby humans.",latinName:"Turdus migratorius",url:"https://en.wikipedia.org/wiki/American_robin",colors:{beak:"#e89f30",foot:"#9f8075",face:"#2d2d2d",belly:"#eb7a3a",underbelly:"#eb7a3a",wing:"#444444","wing-edge":"#232323","theme-highlight":"#eb7a3a"}},carolinaWren:{name:"Carolina Wren",description:"Native to the eastern United States, these little birds are known for their curious and energetic nature.",latinName:"Thryothorus ludovicianus",url:"https://en.wikipedia.org/wiki/Carolina_wren",colors:{foot:"#af8e75",face:"#edc7a9",nose:"#f7eee5",hood:"#c58a5b",belly:"#e1b796",underbelly:"#c79e7c",wing:"#c58a5b","wing-edge":"#866348"}},blackCappedChickadee:{name:"Black-capped Chickadee",description:"Native to North America, these small and curious birds are known for their distinctive call from which they get their name.",latinName:"Poecile atricapillus",url:"https://en.wikipedia.org/wiki/Black-capped_chickadee",colors:{hood:"#363636",cheek:"#363636",eyebrow:"#363636",nose:"#363636",collar:"#363636",belly:"#d6d4cf",underbelly:"#cfc5b4",face:"#eaeaea",wing:"#8f8e9a","wing-edge":"#706f7d",scruff:"#8f8e9a",foot:"#535259"},tags:[]},blueJay:{name:"Blue Jay",description:"This loud and rambunctious bird is native to North America and is known for challenging anything in its path.",latinName:"Cyanocitta cristata",url:"https://en.wikipedia.org/wiki/Blue_jay",colors:{foot:"#5a626b",face:"#ebf2ff",belly:"#e5ecfa",underbelly:"#c4cbd6",wing:"#5890ff","wing-edge":"#3a77e8",hood:"#6391e8",nose:"#6391e8",collar:"#2e3136",scruff:"#6391e8"},tags:["tuft"]},darkEyedJunco:{name:"Dark-eyed Junco",description:"Native across North America, these social birds will often be seen hopping along the ground in winter.",latinName:"Junco hyemalis",url:"https://en.wikipedia.org/wiki/Dark-eyed_junco",colors:{face:"#55565e",wing:"#5c5f69","wing-edge":"#444547",belly:"#6c7180",underbelly:"#b8bbcc",foot:"#87776d",beak:"#ab8a98"}},houseFinch:{name:"House Finch",description:"Native to North America, these highly social birds sing cheerful songs and are often seen at bird feeders.",latinName:"Haemorhous mexicanus",url:"https://en.wikipedia.org/wiki/House_finch",colors:{face:"#cc3a3f",wing:"#ae8e78","wing-edge":"#8f6c54",belly:"#d97c77",underbelly:"#c5a489",foot:"#705b4c",beak:"#cf8479",hood:"#b02f35",nose:"#ab2b31","theme-highlight":"#ef444d"}},pigeon:{name:"Rock Pigeon",description:"Descended from the Rock Dove, these once domesticated birds are often found in cities worldwide. Quite friendly and intelligent, they were favored companions of Nikola Tesla.",latinName:"Columba livia",url:"https://en.wikipedia.org/wiki/Rock_dove",colors:{foot:"#ef6e5b",face:"#5a6c91","wing-edge":"#65686e",nose:"#ebebeb",belly:"#977699",underbelly:"#b0b3ba",wing:"#c7cbd4"}},redAvadavat:{name:"Red Avadavat",description:"Native to India and southeast Asia, these birds are also known as Strawberry Finches due to their speckled plumage.",latinName:"Amandava amandava",url:"https://en.wikipedia.org/wiki/Red_avadavat",colors:{beak:"#f71919",foot:"#af7575",face:"#cb092b",belly:"#ae1724",underbelly:"#831b24",wing:"#7e3030","wing-edge":"#490f0f","wing-spots":"#e8e4e4"},rarity:"uncommon"},pinkRobin:{name:"Pink Robin",description:"Native to Australia, these bubblegum-pink puffballs are quieter than most, instead relying on their vibrant colours to attract partners.",latinName:"Petroica rodinogaster",url:"https://en.wikipedia.org/wiki/Pink_robin",colors:{face:"#403a46",wing:"#38333d","wing-edge":"#252325",underbelly:"#ff7eb8",belly:"#ff6eaf",foot:"#3c393c","theme-highlight":"#ff82ba"},rarity:"uncommon"},spangledCotinga:{name:"Spangled Cotinga",description:"This South American bird can be found in the Amazon rainforest, flashing its iridescent turquoise feathers high above in the canopy.",latinName:"Cotinga cayana",url:"https://en.wikipedia.org/wiki/Spangled_cotinga",colors:{face:"#62eafe",chin:"#a12457",collar:"#a12457",belly:"#62eafe",underbelly:"#5cd8ea",wing:"#227c89","wing-edge":"#13353a",foot:"#68696b","collar-scruff":"#62eafe"},rarity:"uncommon"},elegantEuphonia:{name:"Elegant Euphonia",description:"This vividly coloured finch is found throughout Central America and is known for the distinctive blue hood that crowns its head.",latinName:"Chlorophonia elegantissima",url:"https://en.wikipedia.org/wiki/Elegant_euphonia",colors:{wing:"#2d31a1","wing-edge":"#191c6d",face:"#1f2392",hood:"#6bc6ed","nose-tip":"#fd7e1d",foot:"#555650",belly:"#ff952b",underbelly:"#fd7e1d",temple:"#57c8fa","upper-corner-eye":"#57c8fa","upper-eyelid":"#57c8fa","collar-scruff":"#57c8fa",scruff:"#57c8fa",beak:"#252c31",collar:"#191c6d"},rarity:"uncommon"},paintedBunting:{name:"Painted Bunting",description:"A remarkably colourful bird, this North American species is quite difficult to observe despite its vivid palette due to its shy nature and vulnerable habitat.",latinName:"Passerina ciris",url:"https://en.wikipedia.org/wiki/Painted_bunting",colors:{face:"#5567f0",underbelly:"#f16534",belly:"#ef3b3b",wing:"#a3e65a","wing-edge":"#91cc50",shoulder:"#f6fe40",foot:"#767980"},rarity:"uncommon"},redWarbler:{name:"Red Warbler",description:"Endemic to the highlands of Mexico, this bird has the rare distinction of being one of the very few toxic birds in the world.",latinName:"Cardellina rubra",url:"https://en.wikipedia.org/wiki/Red_warbler",colors:{face:"#e80a28",belly:"#d90921",underbelly:"#c70c18",wing:"#ba121d","wing-edge":"#5b3535",foot:"#5e4645","behind-eye":"#deedff",temple:"#e8f0fa","corner-eye":"#d5e4f5","lower-eyelid":"#e34a61",beak:"#873535",cheek:"#db1734"},rarity:"uncommon"},cubanTody:{name:"Cuban Tody",description:"As the name suggests, this little green bird is only found on the island of Cuba and is known for being particularly round.",latinName:"Todus multicolor",url:"https://en.wikipedia.org/wiki/Cuban_tody",colors:{beak:"#f16f54",face:"#5ad63e",chin:"#e8273b",collar:"#f12d3e",belly:"#f6f5e4","collar-scruff":"#a3ebff",underbelly:"#eae9d2",wing:"#11c751","wing-edge":"#156631",foot:"#ac7055",scruff:"#11c751","theme-highlight":"#4adc67"},rarity:"uncommon"},violetBackedStarling:{name:"Violet-backed Starling",description:"Native to Sub-Saharan Africa, these small starlings are known for being the most vividly purple birds in the world.",latinName:"Cinnyricinclus leucogaster",url:"https://en.wikipedia.org/wiki/Violet-backed_starling",colors:{face:"#9c3af2",wing:"#8f37ed","wing-edge":"#5b20c2",belly:"#ffffff",underbelly:"#f2f2f2",foot:"#736a66",collar:"#b760e6",nose:"#7a2ec7",cheek:"#7a2ec7","nose-tip":"#7a2ec7"},rarity:"uncommon"}},s=Object.freeze({THEME_HIGHLIGHT:"theme-highlight",TRANSPARENT:"transparent",OUTLINE:"outline",BORDER:"border",FOOT:"foot",BEAK:"beak",EYE:"eye",FACE:"face",HOOD:"hood",EYEBROW:"eyebrow",UPPER_EYELID:"upper-eyelid",UPPER_CORNER_EYE:"upper-corner-eye",BEHIND_EYE:"behind-eye",CORNER_EYE:"corner-eye",TEMPLE:"temple",LOWER_EYELID:"lower-eyelid",NOSE:"nose",NOSE_TIP:"nose-tip",CHEEK:"cheek",SCRUFF:"scruff",CHIN:"chin",COLLAR:"collar",COLLAR_SCRUFF:"collar-scruff",BELLY:"belly",UNDERBELLY:"underbelly",WING:"wing",SHOULDER:"shoulder",WING_SPOTS:"wing-spots",WING_EDGE:"wing-edge",HEART:"heart",HEART_BORDER:"heart-border",HEART_SHINE:"heart-shine",FEATHER_SPINE:"feather-spine"}),$e={transparent:s.TRANSPARENT,"#fff000":s.THEME_HIGHLIGHT,"#ffffff":s.BORDER,"#000000":s.OUTLINE,"#010a19":s.BEAK,"#190301":s.EYE,"#af8e75":s.FOOT,"#639bff":s.FACE,"#99e550":s.HOOD,"#ff5573":s.EYEBROW,"#ff768e":s.UPPER_EYELID,"#ff90a4":s.UPPER_CORNER_EYE,"#ff2c88":s.BEHIND_EYE,"#e34f9c":s.CORNER_EYE,"#b53477":s.TEMPLE,"#ae65f1":s.LOWER_EYELID,"#d95763":s.NOSE,"#b93844":s.NOSE_TIP,"#ff67a9":s.CHEEK,"#c5e550":s.SCRUFF,"#b87af1":s.CHIN,"#ffe955":s.COLLAR,"#f8ff55":s.COLLAR_SCRUFF,"#f8b143":s.BELLY,"#ec8637":s.UNDERBELLY,"#578ae6":s.WING,"#55d1f3":s.SHOULDER,"#90b0e8":s.WING_SPOTS,"#326ed9":s.WING_EDGE,"#c82e2e":s.HEART,"#501a1a":s.HEART_BORDER,"#ff6b6b":s.HEART_SHINE,"#373737":s.FEATHER_SPINE};s.HOOD+"",s.FACE,s.EYEBROW+"",s.FACE,s.UPPER_EYELID+"",s.EYEBROW,s.UPPER_CORNER_EYE+"",s.EYEBROW,s.BEHIND_EYE+"",s.FACE,s.CORNER_EYE+"",s.FACE,s.TEMPLE+"",s.FACE,s.LOWER_EYELID+"",s.FACE,s.NOSE+"",s.FACE,s.NOSE_TIP+"",s.NOSE,s.CHEEK+"",s.FACE,s.SCRUFF+"",s.FACE,s.CHIN+"",s.FACE,s.COLLAR+"",s.FACE,s.COLLAR_SCRUFF+"",s.COLLAR,s.WING_SPOTS+"",s.WING,s.SHOULDER+"",s.WING;const He=Object.freeze({COMMON:"common",UNCOMMON:"uncommon"});class oi{constructor(e,r,i,l,o,c=[],d=He.COMMON){this.name=e,this.description=r,this.latinName=i,this.url=l;const f={[s.TRANSPARENT]:"transparent",[s.OUTLINE]:"#000000",[s.BORDER]:"#ffffff",[s.BEAK]:"#000000",[s.EYE]:"#000000",[s.HEART]:"#c82e2e",[s.HEART_BORDER]:"#501a1a",[s.HEART_SHINE]:"#ff6b6b",[s.FEATHER_SPINE]:"#373737",[s.HOOD]:o.face,[s.EYEBROW]:o.face,[s.UPPER_EYELID]:o.eyebrow||o.face,[s.UPPER_CORNER_EYE]:o.eyebrow||o.face,[s.BEHIND_EYE]:o.face,[s.CORNER_EYE]:o.face,[s.TEMPLE]:o.face,[s.LOWER_EYELID]:o.face,[s.NOSE]:o.face,[s.NOSE_TIP]:o.nose||o.face,[s.CHEEK]:o.face,[s.SCRUFF]:o.face,[s.CHIN]:o.face,[s.COLLAR]:o.face,[s.COLLAR_SCRUFF]:o.collar||o.face,[s.SHOULDER]:o.wing};this.colors={...f,...o,[s.THEME_HIGHLIGHT]:o[s.THEME_HIGHLIGHT]??o.hood??o.face},this.tags=c,this.rarity=d}}function Ge(n,e=!0,r=!0){return new Promise((i,l)=>{const o=new Image;o.src=n,o.onload=()=>{const c=document.createElement("canvas");c.width=o.width,c.height=o.height;const d=c.getContext("2d");if(!d){l(new Error("Failed to get canvas context"));return}d.drawImage(o,0,0);const h=d.getImageData(0,0,o.width,o.height).data,A=[];for(let p=0;p<o.height;p++){const v=[];for(let fe=0;fe<o.width;fe++){const X=(p*o.width+fe)*4,de=h[X],L=h[X+1],ue=h[X+2];h[X+3]===0?v.push(s.TRANSPARENT):e?v.push(ci(de,L,ue,r)):v.push(Le(de,L,ue))}A.push(v)}i(A)},o.onerror=c=>{l(c)}})}function ai(n){const e=parseInt(n.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function Le(n,e,r){return`#${((1<<24)+(n<<16)+(e<<8)+r).toString(16).slice(1)}`}function si(n,e){return Math.abs(n[0]-e[0])+Math.abs(n[1]-e[1])+Math.abs(n[2]-e[2])}const li=Object.entries($e).filter(([n])=>n!=="transparent").map(([n,e])=>({rgb:ai(n),palette:e}));function ci(n,e,r,i){const l=Le(n,e,r);if($e[l])return $e[l];if(!i)return Le(n,e,r);const o=50;let c=null,d=256;for(const{rgb:f,palette:h}of li){const A=si([n,e,r],f);A<=o&&A<d&&(d=A,c=h)}return c||Le(n,e,r)}const _=Object.fromEntries(Object.entries(ri).map(([n,e])=>[n,new oi(e.name,e.description,e.latinName,e.url,e.colors,e.tags,e.rarity)])),ne={DEFAULT:"default"};class F{constructor(e,r=ne.DEFAULT){this.pixels=e,this.tag=r}}class Z{#e={};constructor(e){let r=new Set;for(let i of e)r.add(i.tag);r.add(ne.DEFAULT);for(let i of r){let l=e.reduce((o,c)=>Math.max(o,c.pixels.length),0);if(e[0].tag!==ne.DEFAULT)throw new Error("First layer must have the 'default' tag");for(this.pixels=e[0].pixels.map(o=>o.slice());this.pixels.length<l;)this.pixels.unshift(new Array(this.pixels[0].length).fill(s.TRANSPARENT));for(let o=1;o<e.length;o++)if(e[o].tag===ne.DEFAULT||e[o].tag===i){let c=e[o].pixels,d=l-c.length;for(let f=0;f<c.length;f++)for(let h=0;h<c[f].length;h++)this.pixels[f+d][h]=c[f][h]!==s.TRANSPARENT?c[f][h]:this.pixels[f+d][h]}this.#e[i]=this.pixels.map(o=>o.slice())}}getPixels(e=[ne.DEFAULT]){for(let r=e.length-1;r>=0;r--){const i=e[r];if(this.#e[i])return this.#e[i]}return this.#e[ne.DEFAULT]}draw(e,r,i,l,o){e.clearRect(0,0,e.canvas.width,e.canvas.height);const c=this.getPixels(o);for(let d=0;d<c.length;d++){const f=c[d];for(let h=0;h<c[d].length;h++){const A=r===ie.LEFT?f[h]:f[c[d].length-h-1];e.fillStyle=l[A]??A,e.fillRect(h*i,d*i,i,i),l[A]}}}}class he{constructor(e,r,i=!0){this.frames=e,this.durations=r,this.loop=i,this.lastFrameIndex=-1,this.lastDirection=null,this.lastTimeStart=null}getAnimationDuration(){return this.durations.reduce((e,r)=>e+r,0)}getCurrentFrameIndex(e){let r=0;for(let i=0;i<this.durations.length;i++)if(r+=this.durations[i],e<r)return i;return this.frames.length-1}#e(){this.lastFrameIndex=-1,this.lastDirection=null}#t(e,r){return e!==this.lastFrameIndex||r!==this.lastDirection}draw(e,r,i,l,o,c){this.lastTimeStart!==i&&(this.#e(),this.lastTimeStart=i);let d=Date.now()-i;const f=this.getAnimationDuration();this.loop&&(d%=f);const h=this.getCurrentFrameIndex(d);return this.#t(h,r)&&(this.frames[h].draw(e,r,l,o,c),this.lastFrameIndex=h,this.lastDirection=r),!this.loop&&d>=f}}const Ht=12,T={NONE:"none",TOP_HAT:"top-hat",FEZ:"fez",WIZARD_HAT:"wizard-hat",BASEBALL_CAP:"baseball-cap",FLOWER_HAT:"flower-hat",COWBOY_HAT:"cowboy-hat",BEANIE:"beanie",SUN_HAT:"sun-hat",VIKING_HELMET:"viking-helmet",STRAW_HAT:"straw-hat",CORDOVAN_HAT:"cordovan-hat"},vt={[T.NONE]:{name:"Invisible Hat",description:"It's like you're wearing nothing at all!"},[T.TOP_HAT]:{name:"Top Hat",description:"The mark of a true gentlebird."},[T.VIKING_HELMET]:{name:"Viking Helmet",description:"Sure, vikings never actually wore this style of helmet, but why let facts get in the way of good fashion?"},[T.COWBOY_HAT]:{name:"Cowboy Hat",description:"You can't jam with the console cowboys without the appropriate attire."},[T.FEZ]:{name:"Fez",description:"It's a fez. Fezzes are cool."},[T.WIZARD_HAT]:{name:"Wizard Hat",description:"Grants the bearer terrifying mystical power, but luckily birds only use it to summon old ladies with bread crumbs."},[T.BASEBALL_CAP]:{name:"Baseball Cap",description:"Birds unfortunately only ever hit 'fowl' balls..."},[T.FLOWER_HAT]:{name:"Flower Hat",description:"To be fair, this is less of a hat and more of a dirt clod that your pet happened to pick up."},[T.BEANIE]:{name:"Beanie",description:"Keeps feathers warm on those long migrations south!"},[T.SUN_HAT]:{name:"Sun Hat",description:"Perfect for frolicking through enchanted flower fields."},[T.STRAW_HAT]:{name:"Straw Hat",description:"A classic design, though keep away from water as this particular hat is seemingly unable to float."},[T.CORDOVAN_HAT]:{name:"Cordovan Hat",description:"A traditional Spanish hat that stays put even in the wildest of sword fights."}};function di(n){const e={base:[],down:[]};let r=0;for(const[i,l]of Object.entries(T)){if(i==="NONE")continue;const o=xt(n,l,r),c=xt(n,l,r,1);e.base.push(o),e.down.push(c),r++}return e}function bi(n,e){const r=hi(e,n),i=[new Z([r])];return new he(i,[1e3],!0)}function xt(n,e,r,i=0){const c=5+i,d=Math.max(0,15-i);let f=z(n,r,Ht);return f=ot(f,c,d,6,14),f=Lt(f,!1),new F(f,e)}function hi(n,e){if(e===T.NONE)return new F([],ne.DEFAULT);const r=Object.values(T).indexOf(e)-1;let i=z(n,r,Ht);return i=ot(i,1,1,1,1),i=Lt(i,!0),i=fi(i),new F(i,ne.DEFAULT)}function ot(n,e,r,i,l){const o=[],c=n[0].length+i+l;for(let d=0;d<e;d++)o.push(Array(c).fill(s.TRANSPARENT));for(let d=0;d<n.length;d++){const f=[];for(let h=0;h<i;h++)f.push(s.TRANSPARENT);for(let h=0;h<n[d].length;h++)f.push(n[d][h]);for(let h=0;h<l;h++)f.push(s.TRANSPARENT);o.push(f)}for(let d=0;d<r;d++)o.push(Array(c).fill(s.TRANSPARENT));return o}function Lt(n,e=!1){let r=[[-1,0],[1,0],[0,-1],[-1,-1],[1,-1]];e&&r.push([0,1],[-1,1],[1,1]);for(let i=0;i<n.length;i++)for(let l=0;l<n[i].length;l++){const o=n[i][l];if(o!==s.TRANSPARENT&&o!==s.BORDER)for(let[c,d]of r){const f=l+c,h=i+d;h>=0&&h<n.length&&f>=0&&f<n[h].length&&n[h][f]===s.TRANSPARENT&&(n[h][f]=s.BORDER)}}return n}function fi(n){let e=n.slice(),r=0;for(;e.length>1&&e[e.length-1].every(l=>l===s.TRANSPARENT);)e.pop(),r++;return e=ot(e,r,0,0,0),e}const P={STILL:"STILL",BOB:"BOB",FLYING:"FLYING",HEART:"HEART"};class ui{animStart=Date.now();x=0;y=0;direction=ie.RIGHT;isAbsolutePositioned=!1;visible=!0;currentAnimation=P.STILL;constructor(e,r,i,l,o,c){this.canvasPixelSize=r,this.spriteWidth=l,this.spriteHeight=o,this.layers={base:new F(z(i,0,this.spriteWidth)),down:new F(z(i,1,this.spriteWidth)),heartOne:new F(z(i,2,this.spriteWidth)),heartTwo:new F(z(i,3,this.spriteWidth)),heartThree:new F(z(i,4,this.spriteWidth)),tuftBase:new F(z(i,5,this.spriteWidth),"tuft"),tuftDown:new F(z(i,6,this.spriteWidth),"tuft"),wingsUp:new F(z(i,7,this.spriteWidth)),wingsDown:new F(z(i,8,this.spriteWidth)),happyEye:new F(z(i,9,this.spriteWidth))};const d=di(c);this.frames={base:new Z([this.layers.base,this.layers.tuftBase,...d.base]),headDown:new Z([this.layers.down,this.layers.tuftDown,...d.down]),wingsDown:new Z([this.layers.base,this.layers.tuftBase,this.layers.wingsDown,...d.base]),wingsUp:new Z([this.layers.down,this.layers.tuftDown,this.layers.wingsUp,...d.down]),heartOne:new Z([this.layers.base,this.layers.tuftBase,this.layers.happyEye,...d.base,this.layers.heartOne]),heartTwo:new Z([this.layers.base,this.layers.tuftBase,this.layers.happyEye,...d.base,this.layers.heartTwo]),heartThree:new Z([this.layers.base,this.layers.tuftBase,this.layers.happyEye,...d.base,this.layers.heartThree]),heartFour:new Z([this.layers.base,this.layers.tuftBase,this.layers.happyEye,...d.base,this.layers.heartTwo])},this.animations={[P.STILL]:new he([this.frames.base],[1e3]),[P.BOB]:new he([this.frames.base,this.frames.headDown],[420,420]),[P.FLYING]:new he([this.frames.base,this.frames.wingsUp,this.frames.headDown,this.frames.wingsDown],[30,80,30,60]),[P.HEART]:new he([this.frames.heartOne,this.frames.heartTwo,this.frames.heartThree,this.frames.heartFour,this.frames.heartThree,this.frames.heartFour,this.frames.heartThree,this.frames.heartFour],[60,80,250,250,250,250,250,250],!1)},this.canvas=document.createElement("canvas"),this.canvas.id="birb",this.canvas.width=this.frames.base.getPixels()[0].length*r,this.canvas.height=o*r,this.ctx=this.canvas.getContext("2d"),x().appendChild(this.canvas)}draw(e,r){return this.animations[this.currentAnimation].draw(this.ctx,this.direction,this.animStart,this.canvasPixelSize,e.colors,[...e.tags,r||""])}getCurrentAnimation(){return this.currentAnimation}setAnimation(e){this.currentAnimation=e,this.animStart=Date.now()}getFrames(){return this.frames}getElement(){return this.canvas}getElementWidth(){return this.canvas.getBoundingClientRect().width}getElementHeight(){return this.canvas.getBoundingClientRect().height}getElementTop(){return this.canvas.getBoundingClientRect().top}setX(e){this.x=e,this.canvas.style.left=`${e-this.canvas.width/2-(this.direction===ie.RIGHT?2:-2)}px`}setY(e){this.y=e;let r;this.isAbsolutePositioned?r=e-window.scrollY-(V()-ii()):r=e,this.canvas.style.bottom=`${r}px`}getX(){return this.x}getY(){return this.y}setDirection(e){this.direction=e}setAbsolutePositioned(e){this.isAbsolutePositioned=e,e?this.canvas.classList.add("birb-absolute"):this.canvas.classList.remove("birb-absolute"),this.setY(this.y)}setVisible(e){this.visible=e,this.canvas.style.display=e?"":"none"}isVisible(){return this.visible}}class pi{audioContext;chirp(){const e=Math.floor(1+Math.random()*1.5);for(let r=0;r<e;r++)setTimeout(()=>{this.audioContext||(this.audioContext=new AudioContext);const i=[0,.06,.1,.15],l=[2200,3500+Math.random()*600*e,2100+Math.random()*200*e,1600+Math.random()*400*e],o=[5e-5,.165,.165,1e-4],c=this.audioContext.createOscillator();c.type="sine";const d=this.audioContext.createGain();c.connect(d),d.connect(this.audioContext.destination);const f=this.audioContext.currentTime;for(let h=0;h<i.length;h++){const A=i[h]+f;h===0?(c.frequency.setValueAtTime(l[h],A),d.gain.setValueAtTime(o[h],A)):(c.frequency.exponentialRampToValueAtTime(l[h],A),d.gain.exponentialRampToValueAtTime(o[h],A))}c.start(f),c.stop(f+i[i.length-1])},r*120)}}const je="birbSaveData",gi="https://cdn.jsdelivr.net/gh/idreesinc/Monocraft@99b32ab40612ff2533a69d8f14bd8b3d9e604456/dist/Monocraft.otf";class mi{async getSaveData(){throw new Error("Method not implemented")}async putSaveData(e){throw new Error("Method not implemented")}resetSaveData(){throw new Error("Method not implemented")}getFocusableElements(){return["img","video",".birb-sticky-note"]}getFocusElementTopMargin(){return 80}getPath(){return window.location.href}getActivePage(){return document.documentElement}isPathApplicable(e){const r=window.location.href,i=e.split("?")[0],l=r.split("?")[0];if(i!==l)return!1;const o=Tt(e),c=Tt(r);return!(window.location.hostname==="www.youtube.com"&&c.v!==void 0&&c.v!==o.v)}areStickyNotesEnabled(){return!0}isLinkBackEnabled(){return!1}getFontStyles(){return Ei(gi)}getFeatherChanceMod(){return 1}getHatChanceMod(){return 1}}class wi extends mi{async getSaveData(){return $("Loading save data from localStorage"),JSON.parse(localStorage.getItem(je)??"{}")}async putSaveData(e){$("Saving data to localStorage"),localStorage.setItem(je,JSON.stringify(e))}isLinkBackEnabled(){return!0}resetSaveData(){$("Resetting save data in localStorage"),localStorage.removeItem(je)}getFeatherChanceMod(){return 4}getHatChanceMod(){return 2}}function Ei(n){return`@font-face { font-family: 'Monocraft'; src: url("${n}") format('opentype'); font-weight: normal; font-style: normal; }`}function Tt(n){const e=n.split("?")[1];return e?e.split("&").reduce((r,i)=>{const[l,o]=i.split("=");return{...r,[l]:o}},{}):{}}class Ot{constructor(e,r="",i="",l=0,o=0){this.id=e,this.site=r,this.content=i,this.top=l,this.left=o}}function Dt(n,e,r,i){const l=E("birb-window");l.classList.add("birb-sticky-note");const o=yi(n.id);l.style.setProperty("--birb-highlight",o),l.style.setProperty("--birb-border-color",o);const c=E("birb-window-header"),d=E("birb-window-title","Sticky Note"),f=E("birb-window-close","x");c.appendChild(d),c.appendChild(f);const h=E("birb-window-content"),A=document.createElement("textarea");if(A.className="birb-sticky-note-input",A.style.width="150px",A.placeholder="Write your notes here and they'll stick to the page!",A.value=n.content,h.appendChild(A),l.appendChild(c),l.appendChild(h),l.style.top=`${n.top}px`,l.style.left=`${n.left}px`,e.appendChild(l),nt(c,!0,(p,v)=>{n.top=p,n.left=v,r()},e),f&&rt(()=>{(n.content.trim()===""||confirm("Are you sure you want to delete this sticky note?"))&&(i(),l.remove())},f,!1),A&&A instanceof HTMLTextAreaElement){let p;A.addEventListener("input",()=>{n.content=A.value,p&&clearTimeout(p),p=setTimeout(()=>{r()},250)})}return window.addEventListener("resize",()=>{const p=`${n.top-Math.min(window.innerHeight-l.offsetHeight,n.top)}px`,v=`${n.left-Math.min(window.innerWidth-l.offsetWidth,n.left)}px`;l.style.transform=`scale(var(--birb-ui-scale)) translate(-${v}, -${p})`}),l}function Ct(n,e,r){document.querySelectorAll(".birb-sticky-note").forEach(c=>c.remove());const l=k().getActivePage(),o=k();for(let c of n)o.isPathApplicable(c.site)&&Dt(c,l,e,()=>r(c))}function Ai(n,e,r){if(k().areStickyNotesEnabled()===!1)return;const i=Date.now().toString(),l=k().getPath(),o=new Ot(i,l,""),c=k().getActivePage(),d=Dt(o,c,e,()=>r(o));d.style.left=`${c.clientWidth/2-d.offsetWidth/2}px`,d.style.top=`${c.scrollTop+c.clientHeight/2-d.offsetHeight/2}px`,o.top=parseInt(d.style.top,10),o.left=parseInt(d.style.left,10),n.push(o),e()}function yi(n){const e=["#ff8baa","#79bcff","#d18bff","#6de192","#ffd17c","#ffb37c","#ff7c7c"],r=parseInt(n,10)%e.length;return e[r]}const ye="birb-menu",at="birb-menu-exit";class B{constructor(e,r,i,l=!0){this.text=e,this.action=r,this.icon=i,this.removeMenu=l}}class et extends B{constructor(e,r,i,l){super(e,r,void 0,!1),this.leftAction=i,this.rightAction=l}}class ve extends B{constructor(e,r,i,l,o=!0){super(e,r,l,o),this.condition=i}}class Ae extends ve{constructor(e,r,i=!0){super(e,r,()=>it(),void 0,i)}}class Oe extends B{constructor(){super("",()=>{})}}function Mt(n,e){if(n instanceof Oe)return E("birb-window-separator");let r=E("birb-menu-item",typeof n.text=="function"?n.text():n.text);if(n.icon){const i=document.createElement("canvas");i.width=7,i.height=6,i.classList.add("birb-menu-item-icon");const l=i.getContext("2d");if(l)for(let o=0;o<n.icon.length;o++)for(let c=0;c<n.icon[o].length;c++)n.icon[o][c]&&(l.fillStyle="black",l.fillRect(c,o,1,1));r.prepend(i)}if(n instanceof et){r.classList.add("birb-menu-item-spinner");const i=E("birb-menu-item-spinner-container");W(i,c=>c.stopPropagation()),r.appendChild(i);const l=E("birb-spinner-button","-"),o=E("birb-spinner-button","+");W(l,c=>{n.leftAction(),c.stopPropagation()}),W(o,c=>{n.rightAction(),c.stopPropagation()}),i.appendChild(l),i.appendChild(o)}return W(r,()=>{n.removeMenu&&e(),n.action()}),r}function vi(n,e,r){if(x().querySelector("#"+ye))return;let i=E("birb-window",void 0,ye),l=E("birb-window-header");const o=E("birb-window-title",e);l.appendChild(o);let c=E("birb-window-content");const d=()=>st();for(const h of n)(!(h instanceof ve)||h.condition())&&c.appendChild(Mt(h,d));i.appendChild(l),i.appendChild(c),x().appendChild(i),nt(x().querySelector(".birb-window-header"));let f=E("birb-window-exit",void 0,at);W(f,d),x().appendChild(f),rt(d),r(i)}function st(){const n=x().querySelector("#"+ye);n&&n.remove();const e=x().querySelector("#"+at);e&&e.remove()}function xi(){return x().querySelector("#"+ye)!==null}function Rt(n,e){const r=x().querySelector("#"+ye);if(!r||!(r instanceof HTMLElement))return;const i=r.querySelector(".birb-window-content");if(!i){It("Birb: Content not found");return}for(;i.firstChild;)i.removeChild(i.firstChild);const l=()=>st();for(const o of n)(!(o instanceof ve)||o.condition())&&i.appendChild(Mt(o,l));e(r)}const Ti={birbMode:!1,soundEnabled:!0,birbScaleMultiplier:1.5,uiScaleMultiplier:1},Je=32,Qe=32,Ve=32,tt=1,Re=kt()?.9:1,M=1,Ci=M*tt,Ri=`:root {
	--birb-border-size: 2px;
	--birb-neg-border-size: calc(var(--birb-border-size) * -1);
	--birb-double-border-size: calc(var(--birb-border-size) * 2);
	--birb-neg-double-border-size: calc(var(--birb-neg-border-size) * 2);
	--birb-highlight: #ffa3cb;
	--birb-border-color: var(--birb-highlight);
	--birb-background-color: #ffecda;
	--birb-mix-color: color-mix(in srgb, var(--birb-highlight) 50%, var(--birb-background-color));
	--birb-scale: 1;
	--birb-ui-scale: 1;
}

#birb {
	image-rendering: pixelated;
	position: fixed;
	bottom: 0;
	transform: scale(var(--birb-scale));
	transform-origin: bottom;
	z-index: 2147483638;
	cursor: pointer;
}

#birb.birb-absolute {
	position: absolute;
}

.birb-decoration {
	image-rendering: pixelated;
	position: fixed;
	bottom: 0;
	transform: scale(var(--birb-scale));
	transform-origin: bottom;
	z-index: 2147483630;
}

.birb-item {
	image-rendering: pixelated;
	position: absolute;
	bottom: 0;
	transform: scale(calc(var(--birb-scale) * 1.5));
	transform-origin: bottom;
	transition-duration: 0.15s;
	z-index: 2147483630;
	cursor: pointer;
}

.birb-item:hover {
	transform: scale(calc(var(--birb-scale) * 1.9));
	transition-duration: 0.15s;
}

.birb-window {
	font-family: "Monocraft", monospace;
	line-height: initial;
	color: #000000;
	z-index: 2147483639;
	position: fixed;
	background-color: var(--birb-background-color);
	box-shadow:
		var(--birb-border-size) 0 var(--birb-border-color),
		var(--birb-neg-border-size) 0 var(--birb-border-color),
		0 var(--birb-neg-border-size) var(--birb-border-color),
		0 var(--birb-border-size) var(--birb-border-color),
		var(--birb-double-border-size) 0 var(--birb-border-color),
		var(--birb-neg-double-border-size) 0 var(--birb-border-color),
		0 var(--birb-neg-double-border-size) var(--birb-border-color),
		0 var(--birb-double-border-size) var(--birb-border-color),
		0 0 0 var(--birb-border-size) var(--birb-border-color),
		0 0 0 var(--birb-double-border-size) white,
		var(--birb-double-border-size) 0 0 var(--birb-border-size) white,
		var(--birb-neg-double-border-size) 0 0 var(--birb-border-size) white,
		0 var(--birb-neg-double-border-size) 0 var(--birb-border-size) white,
		0 var(--birb-double-border-size) 0 var(--birb-border-size) white;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	transform: scale(var(--birb-ui-scale));
	animation: pop-in 0.08s;
	transition-timing-function: ease-in;
}

#birb-menu {
	transition-duration: 0.2s;
	transition-timing-function: ease-out;
	min-width: 140px;
	z-index: 2147483639;
}

#birb-menu-exit {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2147483637;
}

@keyframes pop-in {
	0% {
		opacity: 1;
		transform: scale(0.1);
	}

	100% {
		opacity: 1;
		transform: scale(var(--birb-ui-scale));
	}
}

.birb-window-header {
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 7px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 30px;
	padding-right: 30px;
	background-color: var(--birb-highlight);
	box-shadow:
		var(--birb-border-size) 0 var(--birb-highlight),
		var(--birb-neg-border-size) 0 var(--birb-highlight),
		0 var(--birb-neg-border-size) var(--birb-highlight),
		var(--birb-neg-border-size) var(--birb-border-size) var(--birb-border-color),
		var(--birb-border-size) var(--birb-border-size) var(--birb-border-color);
	color: var(--birb-border-color);
	font-size: 16px;
}

.birb-window-title {
	text-align: center;
	flex-grow: 1;
	user-select: none;
	color: var(--birb-background-color);
	white-space: nowrap;
}

.birb-window-close {
	position: absolute;
	top: 1px;
	right: 0;
	color: var(--birb-background-color);
	user-select: none;
	cursor: pointer;
	padding-left: 5px;
	padding-right: 5px;
}

.birb-window-close:hover {
	transform: scale(1.1);
}

.birb-window-content {
	box-sizing: border-box;
	background-color: var(--birb-background-color);
	margin-top: var(--birb-border-size);
	flex-grow: 1;
	box-shadow:
		var(--birb-border-size) 0 var(--birb-background-color),
		var(--birb-neg-border-size) 0 var(--birb-background-color),
		0 var(--birb-border-size) var(--birb-background-color),
		0 var(--birb-neg-border-size) var(--birb-border-color),
		0 var(--birb-border-size) var(--birb-border-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: calc(var(--birb-double-border-size));
	padding-bottom: var(--birb-border-size);
}

.birb-pico-8-content {
	background: #111111;
	box-shadow: none;
	display: flex;
	justify-content: center;
	overflow: hidden;
	border: none;
}

.birb-pico-8-content iframe {
	width: 300px;
	margin-left: -15px;
	margin-right: -30px;
	margin-top: -10px;
	margin-bottom: -23px;
	border: none;
	aspect-ratio: 1;
}

.birb-music-player-content {
	background: var(--birb-background-color);
	box-shadow:
		var(--birb-border-size) 0 var(--birb-background-color),
		var(--birb-neg-border-size) 0 var(--birb-background-color),
		0 var(--birb-border-size) var(--birb-background-color),
		0 var(--birb-neg-border-size) var(--birb-border-color),
		0 var(--birb-border-size) var(--birb-border-color);
	display: flex;
	justify-content: center;
	overflow: hidden;
	padding: 10px;
}

.birb-menu-item {
	width: calc(100% - var(--birb-double-border-size));
	white-space: nowrap;
	font-size: 14px;
	padding-top: 4px;
	padding-bottom: 4px;
	padding-left: 2px;
	padding-right: 10px;
	box-sizing: border-box;
	opacity: 0.7;
	user-select: none;
	display: flex;
	justify-content: left;
	align-items: center;
	cursor: pointer;
	color: black;
	transition: background 0.1s, color 0.1s;
}

.birb-menu-item:hover:not(.birb-menu-item-spinner) {
	opacity: 1;
	background: var(--birb-highlight);
	color: white;
	box-shadow:
		var(--birb-border-size) 0 var(--birb-highlight),
		var(--birb-neg-border-size) 0 var(--birb-highlight),
		0 var(--birb-neg-border-size) var(--birb-highlight),
		0 var(--birb-border-size) var(--birb-highlight);
	transition: none;
}

.birb-menu-item-icon {
	height: calc(6 * var(--birb-border-size));
	padding-right: calc(5 * var(--birb-border-size));
	flex-shrink: 0;
	image-rendering: pixelated;
	color: var(--birb-highlight);
	opacity: 0.9;
}

.birb-menu-item:hover > .birb-menu-item-icon {
	filter: invert(1);
}

.birb-menu-item-arrow {
	display: inline-block;
}

.birb-menu-item-spinner {
	display: flex;
	justify-content: space-between;
}

.birb-menu-item-spinner-container {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	gap: 8px;
	margin-left: 10px;
	justify-content:end;
	width: 40px;
}

.birb-spinner-button {
	box-sizing: border-box;
	width: 1em;
	height: calc(7 * var(--birb-border-size));
	display: flex;
	justify-content: center;
	align-items: center;
	--spinner-border-color: var(--birb-highlight);
	background-color: var(--birb-background-color);
	/* color: var(--birb-highlight); */
	font-size: 14px;
	padding-top: 0.5px;
	padding-left: 0.75px;
	margin-top: -0.5px;
	text-align: center;
	box-shadow:
		var(--birb-border-size) 0 var(--spinner-border-color),
		var(--birb-neg-border-size) 0 var(--spinner-border-color),
		0 var(--birb-neg-border-size) var(--spinner-border-color),
		0 var(--birb-border-size) var(--spinner-border-color);
	/* border-radius: 3px; */
	cursor: pointer;
}

.birb-spinner-button:hover {
	background-color: var(--birb-highlight);
	box-shadow:
		var(--birb-border-size) 0 var(--birb-highlight),
		var(--birb-neg-border-size) 0 var(--birb-highlight),
		0 var(--birb-neg-border-size) var(--birb-highlight),
		0 var(--birb-border-size) var(--birb-highlight);
	color: white;
}

.birb-window-separator {
	width: 100%;
	height: var(--birb-border-size);
	background-color: var(--birb-border-color);
	box-sizing: border-box;
	margin-top: var(--birb-double-border-size);
	margin-bottom: var(--birb-double-border-size);
	opacity: 0.4;
}

#birb-field-guide, #birb-wardrobe {
	width: 322px;
}

#birb-field-guide .birb-grid-content {
	grid-template-columns: repeat(4, auto);
}

#birb-wardrobe .birb-grid-content {
	grid-template-columns: repeat(4, auto);
	grid-auto-flow: row;
}

.birb-grid-content {
	display: grid;
	grid-auto-flow: row;
	gap: 10px;
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 10px;
	padding-right: 10px;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
}

.birb-grid-item {
	width: 64px;
	height: 64px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: border-color 0.1s;
}

.birb-grid-item:hover {
	border-color: var(--birb-highlight);
	transition: none;
}

.birb-grid-item canvas {
	image-rendering: pixelated;
	transform: scale(2);
	padding-bottom: var(--birb-border-size);
}

.birb-grid-item, .birb-field-guide-description, .birb-message-content {
	border: var(--birb-border-size) solid #ffcf90;
	box-shadow: 0 0 0 var(--birb-border-size) white;
	background: rgba(255, 221, 177, 0.5);
}

.birb-grid-item-locked {
	cursor: auto;
	filter: grayscale(100%) sepia(30%);
}

.birb-grid-item-locked canvas {
	filter: contrast(90%);
}

.birb-grid-item-selected {
	border: var(--birb-border-size) solid var(--birb-highlight);
	background: var(--birb-mix-color);
}

.birb-field-guide-section-label {
	padding-top: 4px;
	/* padding-left: calc(10px + var(--birb-border-size) / 2); */
	color: #876c4e;
	text-align: center;
	/* Italics */
	font-style: italic;
}

.birb-field-guide-description {
	max-width: calc(100% - 20px);
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 5px;
	padding: 8px;
	padding-top: 4px;
	padding-bottom: 4px;
	margin-bottom: 10px;
	font-size: 14px;
	box-sizing: border-box;
	color: #7c6c4b;
}

.birb-field-guide-latin-name {
	text-decoration: underline;
	font-style: italic;
	font-weight: bold;
	color: inherit;
}

#birb-feather {
	cursor: pointer;
}

.birb-message-content {
	box-sizing: border-box;
	margin: 2px;
	width: 100%;
	padding: 10px;
	font-size: 14px;
	color: #7c6c4b;
}

.birb-sticky-note {
	position: absolute;
	box-sizing: border-box;
	animation: fade-in 0.15s ease-in;
	z-index: 2147483637;
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

.birb-sticky-note > .birb-window-content {
	padding: 0;
}

.birb-sticky-note-input {
	width: 100%;
	height: 100%;
	padding: 10px;
	resize: both;
	min-width: 175px;
	min-height: 135px;
	box-sizing: border-box;
	font-family: "Monocraft", monospace;
	font-size: 14px;
	color: black;
	background-color: transparent;
	border: none;
}

.birb-sticky-note-input::placeholder {
	font-family: "Monocraft", monospace;
	font-size: 14px;
	background-color: transparent;
	color: rgba(0, 0, 0, 0.35);
}

.birb-sticky-note-input:focus {
	outline: none;
	box-shadow: none;
}

@media print {
	#birb {
		display: none;
	}
}`,Ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAgCAYAAABjE6FEAAAAAXNSR0IArs4c6QAABORJREFUeJztnU9IHFccx79vE6g0BEK7BJzNwR6apReFQElKjpZaeol7EHuRQhFaECIEIkF6LGkQGqyQ0EBa+u8iHjZCCfXQUw7qRVDwYKQEirtt0yVtMRaFdn857L7x7Tizf3Rn3oz7/cDi8+3s/t44733m9+afACGEEEII6SyU7QaQ+CMiEvSeUop9iCQWdt4EYFNAOnYukwEA5AuFmnIUbSCEdChSZdBxZNBxDpTrybFd8QcdR5Z6e0XGxg6Uw45PSJikbDeANCaXyeBGOo18LnegHCXLjx7hRjrtlglJOhRggrAloHyhgFulUk3drVLJnQITQkgomFPgpd5e9xXVFNivDVHGJoTEAPEh6tg2BWS2gfIjpMMQkcrBf+Nn1PFtC8iG/AkJk5O2G5A0lvv6rMRVSikREZuXnvByF0I6FJ356OyPWRAhyYd79BYwpcdsKHq8Ox1uA3JU2IFIItDy084TkcgFSAF3KH5nQDkFJBaQe4VBAWDtBFA1dqz7P8dp8zS8ENrc85ovNLhHtZ1QwAQA7hUGddHKCSCllNuGuGV/3nFhY5wmkbpngc0/ptH5oOtEBCIiYXYG79THqA89NokXH2UeWN3WNgXcDOZQGJ4qunX0XzCBAjTFs3DpbfRcexXny2eA1zKAcxYo1EoQIewV4yBgQjS2BVwHUUq50jvudJ9Q8tv/0pZtUTcDTJ1yoF7uxrtr68DaOsoj03A+fx/FNz7DuR+yGFrdrjko3U4RxkHAhCQACRLf5tZ25I0Jm+4TSt77soyHH6faIsHALzAF9NPkP279v38Cbz6dw693f8R06Xu3fq7vtP5ccLAWBCUikjrl1NSVR6bh3K8I+GHXX/jmq09841KEpEOoK7+VmSziOl2PC4EZoL7zAAAGxkex8MV9AEDu01HsnQWure3L7/KTHaSMYw5+HGa6Wt4p1gh4AcCdD//G1tM5nLm7BJSAodXtmrhmRui3Ts3GJiTODE8VrR7YG1rdduOnFvYzzdkJB0mSbt2GVoWF3fl+vHTpFQDA3tIzAMBIzwNcfrKDxcflA59763zKrddp+MpMtuVrt3R8+WPIFfDAeEXAI2tfu8uZ7ahuAL/vqqwwJUiOAUECNMdbyCIKzD6TJMGm7wXW4tPM9Z3GL1c38Pq5yhTUlN7i47J3QxzpTNTe0jMMjI/WtqNnX3yLxrLDU0VfAfNsGDlOfJsdwQcb+7Mw73iLQkCbW9vu+E8qh34Ywu58P7quZIGrGwCAza3a9/3Ed5Tsy6aACYkjd/7LYexkHohYfI0YnipidsKROLSlEQ2nwKhmT7vz/TXvPV9/DgBITy4HfXY/yCHFZ07B/ei68jMuVAXspd0CJiRulG5edDv3O79/59avzGSj6udywUhCTGYnnEQcdmrYMD8Jafn5kZ5cbtuK2xYwIXHHlCAq4yHqvi46CfGKUEswzuOvKQGiKqHSzYt1l22n/Mz4tgRMCGkKAQCvCJMgwIbHAPXlMNUVCZRgmOLRsVHZ4wUuR/kRYgWFytS7MvgCDkslGvNpGPnb192nYuhymA8o8Nzo7Rs/7DYQQhrjfWJO3MdjS/8WUymF/O3r7u9mGSFmXfp768Vn5kdIPKjejAAkYDy2dBmMORX1lqOgUfy4/7EJOe4kbQy21Nh66WwUK247PiHkePECZQPi+PbreqwAAAAASUVORK5CYII=",Si="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAARhJREFUWIXtlbENwjAQRf8hSiZIRQ+9WQNRUFIAKzACBSsAA1Ag1mAABqCCBomG3hQQ9OMEx4ZDNH5SikSJ3/fZ5wCJRCKRSPwZ0RzMWmtLAhGvQyUAi9mXP/aFaGjJRQQiguHihMvcFMJUVUYlAMuHixPGy4en1WmVQqgHYHkuZjiEj6a2/LjtYzTY0eiZbgC37Mxh1UN3sn/dr6cCz/LHB/DJj9s+2oMdbtdz6TtfFwQHcMvOInfmQNjsgchNWLXmdfK6gyioAu/6uKrsm1kWLAciKuCuey5nYuXAh234bdmZ6INIUw4E/Ix49xtjCmXfzLL8nY/ktdgnAKwxxgIoXIyqmAOwvIqfiN0ALNd21HYBO9XXGMAdnZTYyHWzWjQAAAAASUVORK5CYII=",ki="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAMCAYAAACjpxUSAAAAAXNSR0IArs4c6QAAA29JREFUWIXtl11oW2UYx3+v3ZCuc1ktIpvowrCBjmkdtl6ouBthWMeGTkQxuA9QKCiym20OBfVG3YUVOobYIszLyXY16HYxvOicns3NRoR267ZG04aOdc3Jx8lJsujjRZOzeE5y+raETjR/CJyc9/98vv/zvOdAAw000EADDWhB3e0E6gURkfK1Uuo/U9dS4567GFs0OHqOymJIKud/JeoV5/8AjyBaV7bJhrWdEmxtl3pumgv195tUEO1wRAGwdzg4F6whCm14BHFvU/NCfYjrp4WWF05TV2EEBIKjfFN4CUpi6Fy3mf0/hfys3Hnr1rDQenW4futLJmiPIO5vaSNrZ3XtZebJ5/k51M13wY3IhQA6hXf1GgQCqxaTb1U47wwBYc8DJ/h0YhOd6zaz65GjtK18yNf2Un/Yyavv1Wd0wkksFsMwDAzDQKfeQmSQxNkvAETMqnwZvvgrNYTpXvPYLuaBrIVl7htlMUQT4wt2drinFbkAqjspfi+sZ187SPvXn+u6dRdZ1a9SSpWPhoPrR4ARdslR9m38ft4Al/rDZFImFyOJeXOJxWLE43HGx7X6I4XIIFY6RcacRkwg2oGYo6JW1+yPHO47gplI8sEn788vttFDpNIWtpXEti1CPQM1ex9sbZcVzSugtM8Ve+zwPYI4/9R6bs3Okk88CsATV6/qFO5AdSd9C+jqNdj0bROUjg1raIufeCR84EcArv8+TTGf4vyJnb5iU0px8r1tjI1dRimFiFT76nAafeXUhHNzjXe90k6Mjh1ce/ZtJuNTACRu5+gnxLtcqZaTAJzbdryCH+IdcxS12pv3WHSKgeND5P+YwEwkSc6m2f36Wzz9ysuMRaeq9gZgePsxUnkb888imcl05VrNHvmdAI5RWT1ZO0smlwJgxr5RletOys+vm9/Va2AVmvjlzf20fbYPa2iLL/+5HX1YmQT54nIAfjvzoR9fF1JxVJBJmc51eUrsPfaDO44zHcooT4lwOOzhFiKDAFjp1J045rRz/fDWQx6bj/q+Ij85STH/FzO3bpLNZVnz+GN8+fEBr/9rg1CYnZsOudvY6ZtzKyVWqGfAbcOL7W9IJmuRy88JIkcGgMjMOYe31N/rugKab1QuOm8RkdLEWGgMLf6/0L8APHjfWpqXtVB5ZNhFixvp+D+M/gZZI68eaJ1OpQAAAABJRU5ErkJggg==",Ne="birb-field-guide",Xe="birb-feather",qe="birb-wardrobe",Nt="birb-hat",Se="bluebird",ke=T.NONE,Ii=.07,Hi=kt()?.175:.25,Ie=35,Li=1e3/60,Oi=it()?0:1e3*5,Di=1e3*60*60,Mi=1e3,Fi=150,Pi=500,_i=1/(60*2.5),zi=1/1200,Bi=1/(3600*60*2),Ui=.15,Wi=1/(3600*25),Yi=1,Gi=1e3*60*5,ji=2,Ji=1.5,Qi=100;let Q={};async function Vi(n){$("birbOS booting up..."),ei(n),$("Loading sprite sheets...");const e=await Ge(Ni),r=await Ge(Si),i=await Ge(ki,!0,!1);Xi(e,r,i)}function Xi(n,e,r){const i=n,l=e,o=r,c={feather:new F(z(l,0,Ve))},d={feather:new Z([c.feather])},f={feather:new he([d.feather],[1e3])},h=[new B(()=>`Pet ${J()}`,Ue,[[0,1,1,0,1,1,0],[1,0,0,1,0,0,1],[1,0,0,0,0,0,1],[0,1,0,0,0,1,0],[0,0,1,0,1,0,0],[0,0,0,1,0,0,0]]),new B("Field Guide",jt,[[0,1,1,0,1,1,0],[1,0,0,1,0,0,1],[1,0,0,1,0,0,1],[1,0,0,1,0,0,1],[1,0,0,1,0,0,1],[1,1,1,0,1,1,1]]),new B("Wardrobe",Jt,[[0,1,1,0,1,1,0],[1,0,0,1,0,0,1],[1,1,0,0,0,1,1],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0],[0,1,1,1,1,1,0]]),new ve("Sticky Note",()=>Ai(q,I,Fe),()=>k().areStickyNotesEnabled(),[[0,0,1,1,1,1,0],[0,1,0,0,0,1,0],[1,0,0,1,0,1,0],[1,0,1,0,0,1,0],[1,0,0,0,0,1,0],[1,1,1,1,1,1,0]]),new B(()=>`Hide ${J()}`,()=>p.setVisible(!1),[[0,1,0,1,0,1,0],[1,0,0,1,0,0,1],[1,0,0,1,0,0,1],[1,0,0,0,0,0,1],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0]]),new Ae("Freeze",()=>{X=!X}),new Ae("Reset Data",Pt),new Ae("Unlock All",()=>{for(let t in _)ht(t);for(let t in T)ft(T[t])}),new Ae("Add Feather",()=>{bt()}),new Ae("Disable Debug",()=>{$t(!1)}),new Oe,new ve(`Adopt A ${J()}`,()=>{window.open("https://idreesinc.itch.io/pocket-bird","_blank")},()=>k().isLinkBackEnabled(),[[0,0,1,1,0,0,0],[0,1,0,0,1,0,0],[1,0,1,0,0,1,0],[1,0,0,1,0,1,0],[1,0,0,0,0,1,0],[0,1,1,1,1,0,0]]),new B("Settings",()=>Rt(A,Be),[[0,0,0,0,1,1,1],[1,1,1,1,1,0,1],[0,0,0,0,1,1,1],[1,1,1,0,0,0,0],[1,0,1,1,1,1,1],[1,1,1,0,0,0,0]],!1)],A=[new B("Go Back",()=>Rt(h,Be),void 0,!1),new Oe,new et(`${J()} Scale`,()=>{Q.birbScaleMultiplier=1,I(),Te()},()=>{const t=U().birbScaleMultiplier;let a;t<=2?a=t-.25:a=t-1,a=Math.max(.25,Math.round(a*4)/4),Q.birbScaleMultiplier=a,I(),Te()},()=>{const t=U().birbScaleMultiplier;let a;t<2?a=t+.25:a=t+1,a=Math.max(.25,Math.round(a*4)/4),Q.birbScaleMultiplier=a,I(),Te()}),new et("UI Scale",()=>{Q.uiScaleMultiplier=1,I(),Ce()},()=>{const t=U().uiScaleMultiplier;Q.uiScaleMultiplier=Math.max(.1,Math.round((t-.1)*10)/10),I(),Ce()},()=>{const t=U().uiScaleMultiplier;Q.uiScaleMultiplier=Math.round((t+.1)*10)/10,I(),Ce()}),new B(()=>`${U().soundEnabled?"Disable":"Enable"} Sound`,()=>{Q.soundEnabled=!U().soundEnabled,I()}),new B(()=>`Toggle ${J(!0)} Mode`,()=>{Q.birbMode=!U().birbMode,I();const t=E("birb-message-content");t.appendChild(document.createTextNode(`Your ${J().toLowerCase()} shall now be referred to as "${J()}"`)),U().birbMode&&(t.appendChild(document.createElement("br")),t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode("Welcome back to 2012"))),ze(`${J()} Mode`,t)}),new Oe,new B(()=>`Source Code ${We()?" ❤":""}`,()=>{window.open("https://github.com/IdreesInc/Pocket-Bird")}),new B("Build 2026.5.12",()=>{alert("Thank you for using Pocket Bird! You are on version: 2026.5.12")},void 0,!1)];let p;const v={IDLE:"idle",HOP:"hop",FLYING:"flying"},fe=new pi;let X=!1,de=Date.now(),L=v.IDLE,ue=0,Y=0,O=40,xe=0,se=0,ee=0,D=0,G=null,N={left:0,right:0,top:0},le=Date.now(),pe=[],j=Se,re=[Se],oe=[ke],ae=ke,ge=0,lt=0,q=[];async function De(){const t=++lt;let a=await k().getSaveData();if(t!==lt){console.warn("Aborting load due to newer load call");return}if("settings"in a||$("No user settings found in save data, starting fresh"),a=Ft(a,{unlockedSpecies:re,unlockedHats:oe}),ti("Loaded data: "+JSON.stringify(a)),Q=a.settings??{},re=a.unlockedSpecies??[Se],j=a.currentSpecies??Se,oe=a.unlockedHats??[ke],ae=a.currentHat??ke,q=[],a.stickyNotes)for(let b of a.stickyNotes)b.id&&q.push(new Ot(b.id,b.site,b.content,b.top,b.left));$(q.length+" sticky notes loaded"),gt(j,!1),mt(ae,!1)}function I(){const t={unlockedSpecies:re,currentSpecies:j,unlockedHats:oe,currentHat:ae,settings:Q};q.length>0&&(t.stickyNotes=q.map(a=>({id:a.id,site:a.site,content:a.content,top:a.top,left:a.left}))),k().putSaveData(t)}function Ft(t,a){const b=Array.from(new Set([...t.unlockedSpecies??[],...a.unlockedSpecies??[]])),u=Array.from(new Set([...t.unlockedHats??[],...a.unlockedHats??[]]));return{...t,unlockedSpecies:b,unlockedHats:u}}function Pt(){k().resetSaveData(),De()}function U(){return{...Ti,...Q}}function J(t=!1){return U().birbMode!==t?"Birb":"Bird"}function _t(){if($("Sprite sheets loaded successfully, initializing bird..."),window!==window.top){$("In iframe, skipping Birb script initialization");return}const t=document.createElement("div");t.id="birb-shadow-host",document.body.appendChild(t);const a=t.attachShadow({mode:"open"});ni(a),De().then(zt)}function zt(){dt(k().getFontStyles()),dt(Ri),Te(),Ce(),p=new ui(tt,M,i,Je,Qe,o),p.setAnimation(P.BOB),window.addEventListener("scroll",()=>{le=Date.now()}),window.addEventListener("focus",()=>{De()}),W(document,b=>{le=Date.now(),b.composedPath().some(w=>w instanceof Element&&w.id===at)&&st()});const t=p.getElement();W(t,()=>{p.getCurrentAnimation()===P.HEART&&Date.now()-ge<Mi||vi(h,`${J().toLowerCase()}OS`,Be)}),t.addEventListener("mouseover",()=>{le=Date.now(),L===v.IDLE&&(pe.push(Date.now()),pe.length>10&&pe.shift(),pe.filter(u=>Date.now()-u<1e3).length>=3&&(Ue(),pe=[]))}),t.addEventListener("touchmove",b=>{Ue()}),Ct(q,I,Fe);let a=k().getPath().split("?")[0];setInterval(()=>{const b=k().getPath().split("?")[0];b!==a&&($("Path changed from '"+a+"' to '"+b+"'"),a=b,Ct(q,I,Fe))},Fi),setInterval(Bt,Li),we(!0)}function Bt(){if(ue++,document.fullscreenElement&&p.setVisible(!1),L===v.IDLE&&!X&&!xi()?Date.now()-de>Pi&&Math.random()<_i&&p.getCurrentAnimation()!==P.HEART?Xt():Date.now()-le>Oi&&(G===null||Math.random()<zi)&&(we(),le=Date.now()):L===v.HOP&&wt(Ii)&&Ee(v.IDLE),p.isVisible()&&Date.now()-le<Di){const t=k().getFeatherChanceMod(),a=k().getHatChanceMod();Math.random()<Bi*t*(We()?ji:1)&&(ge=0,bt()),Math.random()<Wi*a*(We()?Ji:1)&&(ge=0,Yt())}Gt()}function ct(){if(requestAnimationFrame(ct),!p||!p.isVisible())return;yt(),L===v.IDLE?(G&&!Qt()&&we(),Y=me()):L===v.FLYING&&wt(Hi,2)&&Ee(v.IDLE);const t=D;D=me(),se+=D-t,(D<0||D>V())&&we(),p.draw(_[j],ae)&&p.setAnimation(P.STILL);const a=V()*1.5;se=Math.min(se,a),Y=Math.min(Y,a),D=Math.min(D,a),p.setX(O),p.setY(Y)}function Me(t,a){x().host.style.setProperty(t,a),document.documentElement.style.setProperty(t,a)}function Te(){Me("--birb-scale",U().birbScaleMultiplier*tt)}function Ce(){Me("--birb-ui-scale",U().uiScaleMultiplier*Re)}function dt(t){if(!t)return;const a=document.createElement("style");a.textContent=t,x().appendChild(a);const b=document.createElement("style");b.textContent=t,document.head.appendChild(b)}function Fe(t){q=q.filter(a=>a.id!==t.id),I()}function Pe(t,a,b,u){const w=E("birb-window",void 0,t),y=E("birb-window-header"),C=E("birb-window-title");C.textContent=a;const g=E("birb-window-close");g.textContent="x",y.appendChild(C),y.appendChild(g);const m=E("birb-window-content");return m.appendChild(b),w.appendChild(y),w.appendChild(m),x().appendChild(w),nt(y),rt(()=>{w.remove()},g),w}function bt(){if(x().querySelector("#"+Xe))return;const t=Math.random()<Ui?He.UNCOMMON:He.COMMON,a=Object.keys(_).filter(u=>!re.includes(u)&&_[u].rarity===t);if(a.length===0)return;const b=a[Math.floor(Math.random()*a.length)];Ut(b)}function Ut(t){let a=_[t];const b=document.createElement("canvas");b.id=Xe,b.classList.add("birb-decoration"),b.width=Ve*M,b.height=Ve*M;const u=b.width*2+Math.random()*(window.innerWidth-b.width*4);b.style.marginLeft=`${u}px`,b.style.top=`${-b.height}px`;const w=b.getContext("2d");w&&(f.feather.draw(w,ie.LEFT,Date.now(),M,a.colors,a.tags),x().appendChild(b),W(b,()=>{ht(t),Wt()}))}function Wt(){const t=x().querySelector("#"+Xe);t&&t.remove()}function Yt(){if(x().querySelector("#"+Nt))return;const t=Object.values(T).filter(g=>g!==T.NONE&&!oe.includes(g));if(t.length===0)return;const a=t[Math.floor(Math.random()*t.length)],b=At();if(!b)return;const u=document.createElement("canvas");u.id=Nt,u.classList.add("birb-item"),u.width=14*M,u.height=14*M;const w=u.getContext("2d");if(!w)return;W(u,()=>{ft(a),u.remove()}),bi(a,o).draw(w,ie.LEFT,Date.now(),M,_[j].colors,[ne.DEFAULT]);const C=b.getBoundingClientRect();u.style.left=C.left+C.width/2-u.width/2+"px",u.style.top=C.top-u.height+window.scrollY+"px",x().appendChild(u)}function ht(t){if(!re.includes(t)){re.push(t),I();const a=E("birb-message-content");a.appendChild(document.createTextNode("You've found a "));const b=document.createElement("b");b.textContent=_[t].name,a.appendChild(b),a.appendChild(document.createTextNode(" feather! Use the Field Guide to switch your bird's species.")),ut(),ze("New Bird Unlocked!",a)}}function ft(t){if(!oe.includes(t)){oe.push(t),I();const a=E("birb-message-content");a.appendChild(document.createTextNode("You've unlocked the "));const b=document.createElement("b");b.textContent=vt[t].name,a.appendChild(b),a.appendChild(document.createTextNode("! To see all of your unlocked accessories, click the Wardrobe from the menu.")),pt(),ze("New Hat Found!",a)}}function Gt(){const t=x().querySelector("#birb-feather");if(!t||!(t instanceof HTMLElement))return;const a=parseInt(t.style.top||"0")+Yi;t.style.top=`${Math.min(a,V()-t.offsetHeight)}px`,a<V()-t.offsetHeight&&(t.style.left=`${Math.sin(3.14*2*(ue/120))*25}px`)}function _e(t){t.style.left=`${window.innerWidth/2-t.offsetWidth/2}px`,t.style.top=`${V()/2-t.offsetHeight/2}px`}function ze(t,a){if(x().querySelector("#"+Ne))return;const b=Pe("birb-modal",t,a);b.style.width="270px",_e(b)}function Be(t){let a=O,b=p.getElementTop()+p.getElementHeight()/2+Ci*10;const u=20;a<window.innerWidth/2?a+=u:a-=(t.offsetWidth+u)*Re,b>V()/2?b-=(t.offsetHeight+u+10)*Re:b+=u,t.style.left=`${a}px`,t.style.top=`${b}px`}function jt(){if(x().querySelector("#"+Ne))return;pt();const t=document.createElement("div"),a=E("birb-grid-content"),b=E("birb-grid-content"),u=document.createElement("div");u.className="birb-field-guide-section-label",u.textContent=`----- Familiar ${J()}s -----`;const w=document.createElement("div");w.className="birb-field-guide-section-label",w.textContent=`----- Uncommon ${J()}s -----`,w.title="Arbitrarily classified birds that are a little harder to find, but worth the wait!";const y=E("birb-field-guide-description");t.appendChild(u),t.appendChild(a),t.appendChild(w),t.appendChild(b),t.appendChild(y);const C=Pe(Ne,"Field Guide",t),g=m=>{const R=_[m],te=re.includes(m),S=document.createElement("b");S.textContent=R.name;const H=document.createElement("div");H.style.height="0.3em";const K=document.createElement("a");K.className="birb-field-guide-latin-name",K.textContent=R.latinName,K.href=R.url,K.target="_blank";const ce=document.createElement("div");ce.style.height="0.4em";const Ye=document.createTextNode(te?R.description:"Not yet unlocked"),be=document.createDocumentFragment();return be.appendChild(S),be.appendChild(H),be.appendChild(K),be.appendChild(ce),be.appendChild(Ye),be};y.appendChild(g(j));for(const[m,R]of Object.entries(_)){const te=re.includes(m),S=E("birb-grid-item");m===j&&S.classList.add("birb-grid-item-selected");const H=document.createElement("canvas");H.width=Je*M,H.height=Qe*M;const K=H.getContext("2d");if(!K)return;p.getFrames().base.draw(K,ie.RIGHT,M,R.colors,R.tags),S.appendChild(H);let ce=a;R.rarity===He.UNCOMMON&&(ce=b),ce.appendChild(S),te?W(S,()=>{gt(m),x().querySelectorAll(".birb-grid-item").forEach(Ye=>{Ye.classList.remove("birb-grid-item-selected")}),S.classList.add("birb-grid-item-selected")}):S.classList.add("birb-grid-item-locked"),S.addEventListener("mouseover",()=>{y.textContent="",y.appendChild(g(m))}),S.addEventListener("mouseout",()=>{y.textContent="",y.appendChild(g(j))})}_e(C)}function ut(){const t=x().querySelector("#"+Ne);t&&t.remove()}function Jt(){if(console.log("Inserting wardrobe"),x().querySelector("#"+qe))return;ut();const t=document.createElement("div"),a=E("birb-grid-content"),b=E("birb-field-guide-description");t.appendChild(a),t.appendChild(b);const u=Pe(qe,"Wardrobe",t),w=y=>{const C=vt[y]??{name:"Unknown Hat",description:"todo"},g=oe.includes(y),m=document.createElement("b");m.textContent=C.name;const R=document.createElement("div");R.style.height="0.3em";const te=document.createTextNode(g?C.description:"Not yet unlocked"),S=document.createDocumentFragment();return S.appendChild(m),S.appendChild(R),S.appendChild(te),S};b.appendChild(w(ae));for(const y of Object.values(T)){const C=oe.includes(y),g=E("birb-grid-item");y===ae&&g.classList.add("birb-grid-item-selected");const m=document.createElement("canvas");m.width=Je*M,m.height=Qe*M;const R=m.getContext("2d");if(!R)return;p.getFrames().base.draw(R,ie.RIGHT,M,_[j].colors,[..._[j].tags,y]),g.appendChild(m),a.appendChild(g),C?W(g,()=>{mt(y),x().querySelectorAll(".birb-grid-item").forEach(te=>{te.classList.remove("birb-grid-item-selected")}),g.classList.add("birb-grid-item-selected")}):g.classList.add("birb-grid-item-locked"),g.addEventListener("mouseover",()=>{b.textContent="",b.appendChild(w(y))}),g.addEventListener("mouseout",()=>{b.textContent="",b.appendChild(w(ae))})}_e(u)}function pt(){const t=x().querySelector("#"+qe);t&&t.remove()}function gt(t,a=!0){j=t,Me("--birb-highlight",_[t].colors[s.THEME_HIGHLIGHT]),x().host.style.setProperty("--birb-highlight",_[t].colors[s.THEME_HIGHLIGHT]),a&&I()}function mt(t,a=!0){ae=t,a&&I()}function wt(t,a=2.5){const b=ee-xe,u=D-se,w=Math.sqrt(b*b+u*u),y=Date.now()-de;w>Math.max(window.innerWidth,V())/2&&(t*=1.3);const C=Math.min(1,y/(w/t)),{x:g,y:m}=Zt(xe,se,ee,D,C,a);O=g,Y=m;const R=Math.abs(O-ee)<1&&Math.abs(Y-D)<1;return R?(O=ee,Y=D):p.setDirection(ee>O?ie.RIGHT:ie.LEFT),R}function Et(){return Math.random()*(N.right-N.left)+N.left}function Qt(){return O>=N.left&&O<=N.right}function me(){return V()-N.top}function At(){const t=k().getFocusElementTopMargin(),a=document.querySelectorAll(k().getFocusableElements().join(", ")),b=Array.from(a).filter(g=>{const m=g.getBoundingClientRect();return m.left>=0&&m.top>=t&&m.right<=window.innerWidth&&m.top<=V()}),u=Array.from(b).filter(g=>{const m=window.getComputedStyle(g);return!(m.display==="none"||m.visibility==="hidden"||m.opacity&&parseFloat(m.opacity)<.25)}),y=Array.from(u).filter(g=>g instanceof HTMLElement&&g!==G&&g.offsetWidth>=Qi).filter(g=>!0);return y.length===0?null:y[Math.floor(Math.random()*y.length)]}function we(t=!1){if(X)return!1;const a=G;return G=At(),yt(),t?Vt(Et(),me()):G!==a&&qt(Et(),me()),G!==null}function Vt(t,a){O=t,Y=a,Ee(v.IDLE)}function yt(){if(G===null){N={left:0,right:window.innerWidth,top:V()};return}let{left:t,right:a,top:b}=G.getBoundingClientRect();if(G.classList.contains("birb-sticky-note")&&(b-=4.5*Re,N.left!==t)){const u=N.right-N.left,w=a-t;u===w&&(L===v.IDLE?O+=t-N.left:L===v.HOP&&(xe+=t-N.left,se+=b-N.top,ee+=t-N.left,D+=b-N.top))}N={left:t,right:a,top:b}}function Xt(){X||L===v.IDLE&&(Ee(v.HOP),p.setAnimation(P.FLYING),Math.random()<.5&&O-Ie>N.left||O+Ie>N.right?ee=O-Ie:ee=O+Ie,D=me())}function Ue(){L===v.IDLE&&p.getCurrentAnimation()!==P.HEART&&(U().soundEnabled&&fe.chirp(),p.setAnimation(P.HEART),ge=Date.now())}function We(){return Date.now()-ge<Gi}function qt(t,a){ee=t,D=a,Ee(v.FLYING),p.setAnimation(P.FLYING)}function Kt(){return G!==null&&(L===v.IDLE||L===v.HOP)}function Ee(t){de=Date.now(),xe=O,se=Y,L=t,t===v.IDLE&&p.setAnimation(P.BOB),p.setAbsolutePositioned(Kt()),p.setY(Y)}function Zt(t,a,b,u,w,y=1.2){const C=b-t,g=u-a,m=Math.sqrt(C*C+g*g),R=Math.atan2(g,C),te=t+Math.cos(R)*m/2,S=a+Math.sin(R)*m/2+m/4*y,H=w,K=(1-H)**2*t+2*(1-H)*H*te+H**2*b,ce=(1-H)**2*a+2*(1-H)*H*S+H**2*u;return{x:K,y:ce}}_t(),ct()}window.matchMedia("(prefers-reduced-motion: reduce)").matches||Vi(new wi);
