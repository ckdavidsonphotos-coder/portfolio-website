/* ============================================================
   EDIT THIS FILE. It is the only file you need to change.
   ============================================================ */

const SITE = {
  name: "Connor K Davidson",
  bio: "Photographer based in London, working on personal projects and commissions for magazines and cultural clients.",
  email: "hello@yourname.com",
  instagram: "https://instagram.com/yourhandle"
};

/* One entry per project. Photos are found automatically.
   t     = title shown on the site
   g     = "Personal" or "Commissioned" (the two home page sections)
   slug  = folder name inside /images  (lowercase, no spaces)
   n     = only used for grey placeholders if NO photos are found anywhere

   The site looks in each folder for 01.jpg up to SCAN.jpg and shows whatever exists.
   Projects with no photos are hidden. To force a specific order or names instead,
   add files:["a.jpg","b.jpg"] to a project.
*/
const SCAN = 31;   // highest photo number to look for
/* Builds ["01.jpg","02.jpg", ... ] so you do not have to type each name */
const seq = (count, ext="jpg") => Array.from({length:count}, (_,i)=>String(i+1).padStart(2,"0")+"."+ext);

const PROJECTS = [
  {t:"Project One", g:"Personal", slug:"project-one", n:12},
  {t:"Project Two", g:"Personal", slug:"project-two", n:18},
  {t:"Project Three", g:"Personal", slug:"project-three", n:9},
  {t:"Magazine Feature, Publication", g:"Commissioned", slug:"magazine-feature", n:16},
  {t:"Portrait Series, Publication", g:"Commissioned", slug:"portrait-series", n:14},
  {t:"Editorial Story, Publication", g:"Commissioned", slug:"editorial-story", n:20}
];
