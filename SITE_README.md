# Dummy Website (static)

This folder contains a minimal static "dummy" website for testing and demos.

Files created:

- [index.html](index.html) — main page
- [styles.css](styles.css) — basic styling
- [script.js](script.js) — small client-side behaviors

Quick run:

Open `index.html` in a browser, or serve on localhost:

```bash
# Python 3
python -m http.server 8000

# then open http://localhost:8000/index.html
```

Feel free to edit the files to customize the content.

Background image instructions
-----------------------------

To use a picture of Barack Obama as the site background, place an image file at `images/obama.jpg` (relative to the project root). The CSS now references that path and will scale the image to cover the viewport.

Attribution and licensing
-------------------------

- Make sure the image you use is licensed for your intended use. A good source is Wikimedia Commons where many photos have explicit reuse licenses.
- Example attribution format you can add to this README after downloading an image:

	Photo: "Barack Obama" by [Photographer Name] / Source: Wikimedia Commons — License: [License Name]

If you'd like, I can download a specific publicly-licensed image for you and add it to `images/obama.jpg` (please point me to the exact Commons file or confirm you want me to pick one).
