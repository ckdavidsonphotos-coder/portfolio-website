# Photography portfolio

A static site. No build step, no dependencies.

## Files
- `index.html`  page shell, leave as is
- `style.css`   all styling
- `site.js`     YOUR CONTENT: name, bio, email, projects and photo filenames
- `app.js`      site logic, leave as is
- `images/`     one folder per project

## Add your photos
1. Resize photos to about 2000px on the long edge and compress them (JPEG, 300 to 600 KB each).
2. Use lowercase filenames with no spaces, e.g. `01.jpg`. GitHub Pages is case-sensitive.
3. Drop them in the project's folder, e.g. `images/project-one/`.
4. In `site.js`, list them: `files:["01.jpg","02.jpg"]`.

To add a project: make a new folder in `images/` and add a line to `PROJECTS` in `site.js`.

## Publish with GitHub Pages
Settings > Pages > Deploy from a branch > `main` / `(root)` > Save.
