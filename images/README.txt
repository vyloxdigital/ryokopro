Ryoko Pro — images folder
=========================

Drop your six image files into this folder using these exact filenames.
The page references these and nothing else.

File                       Used where                                Declared size
-------------------------  ----------------------------------------  --------------
ryoko-pro-wifi.webp        Hero, right-hand column (LCP image)       900 x 1200
ryoko-pro.webp             "The Ryoko Pro in the hand" + site icon   1000 x 750
ryoko-pro-review-1.webp    Reviews section, first column             600 x 800
ryoko-pro-review-2.webp    Reviews section, second column            600 x 800
ryoko-pro-review-3.webp    Reviews section, third column             600 x 800
ryoko-pro-guarantee.webp   "Returns, refunds and warranty"           1000 x 750

Notes
-----

1. IMAGES SIZE TO THEMSELVES. Every slot is width:100% with height:auto, so
   your file keeps its own proportions and nothing is ever letterboxed into
   blank bands. Whatever shape your screenshots are, they will fill their
   column exactly.

2. The "Declared size" column above is what index.html currently states in
   each img tag's width and height attributes. Those attributes are what
   reserves space on screen before the file downloads, which is what keeps
   cumulative layout shift at zero. If your real files are a noticeably
   different shape, send me the actual pixel dimensions and I will update the
   six attributes — it is a two-minute change and it is worth doing.

3. The three review screenshots sit side by side on desktop and stack on a
   phone. They are top-aligned, so if the three are different heights the
   captions will sit at different heights too. Cropping all three to roughly
   the same shape is the easy way to keep that row tidy.

4. ryoko-pro-wifi.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high", so it is the one file worth compressing hardest
   — aim for under 90 KB. The other five are lazy-loaded and matter far less
   to the speed score.

5. This page is DARK (near-black #0b0e0c). Product shots cut out on black or
   on a transparent background will sit on it seamlessly. The review
   screenshots are the exception: they are almost certainly white, so they
   are given a panel background and a hairline border to stop them floating
   as bright rectangles.

6. Keep the .webp extensions. These filenames appear in index.html,
   sitemap.xml, manifest.json and the Open Graph / Twitter meta tags, so
   renaming one means editing four files.

7. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
