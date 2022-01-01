const { configureSitemap } = require("@sergeymyssak/nextjs-sitemap");
const tracks = require("./public/data/tracks.json");

async function fetchDynamicPaths() {
  let items = Object.keys(tracks).map(
    (trackNameKey) => `/tracks/${trackNameKey}`
  );
  let paths = Object.values(tracks).map((track) =>
    track?.quests.map((quest) => `/quest/${quest?.slug}`)
  );
  items = [].concat.apply(items, paths);
  console.log(items);
  return items;
}

fetchDynamicPaths().then((paths) => {
  const Sitemap = configureSitemap({
    domains: [{ domain: "openquest.xyz", defaultLocale: "en" }],
    include: paths,
    exclude: ["/tracks/[trackNameKey]", "/quest/[questNameSlug]", "/api/*"],
    excludeIndex: true,
    pagesConfig: {
      "/tracks/*": {
        priority: "0.5",
        changefreq: "daily",
      },
      "/quest/*": {
        priority: "0.5",
        changefreq: "daily",
      },
    },
    trailingSlash: true,
    targetDirectory: __dirname + "/public",
    pagesDirectory: __dirname + "/pages",
  });

  Sitemap.generateSitemap();
});
