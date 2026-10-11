/* ============================================================
   EDIT THIS FILE. It is the only file you need to change.
   ============================================================ */

const SITE = {
  name: "Connor K Davidson",
  bio: "Photographer based in London, working on personal projects and commissions for magazines and cultural clients.",
  email: "hello@yourname.com",
  instagram: "https://instagram.com/yourhandle"
};

/* One entry per project.
   t     = title shown on the site
   g     = "Personal" or "Commissioned" (these are the two home page panels)
   slug  = folder name inside /images  (lowercase, no spaces)
   files = photo filenames in that folder, in the order you want them shown
   n     = only used while files is empty, to show grey placeholder tiles

   Example once you have photos:
   {t:"Long Walk Home", g:"Personal", slug:"long-walk-home",
    files:["01.jpg","02.jpg","03.jpg"]}
*/
/* Builds ["01.jpg","02.jpg", ... ] so you do not have to type each name */
const seq = (count, ext="jpg") => Array.from({length:count}, (_,i)=>String(i+1).padStart(2,"0")+"."+ext);

const PROJECTS = [
  {t:"Project One", g:"Personal", slug:"project-one", files:seq(31)},
  {t:"Project Two", g:"Personal", slug:"project-two", files:[], n:18},
  {t:"Project Three", g:"Personal", slug:"project-three", files:[], n:9},
  {t:"Magazine Feature, Publication", g:"Commissioned", slug:"magazine-feature", files:[], n:16},
  {t:"Portrait Series, Publication", g:"Commissioned", slug:"portrait-series", files:[], n:14},
  {t:"Editorial Story, Publication", g:"Commissioned", slug:"editorial-story", files:[], n:20}
];
