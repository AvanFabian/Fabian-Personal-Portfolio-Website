const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withNextIntl = require("next-intl/plugin")("./i18n.ts")

module.exports = withNextIntl(
  withBundleAnalyzer({
    // your Next.js configuration
    images: {
      domains: ["i.scdn.co"],
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.pdf$/i,
        type: "asset/source",
      })

      return config
    },
    async headers() {
      return [
        {
          source: "/sitemap.xml.gz",
          headers: [
            {
              key: "Content-Type",
              value: "application/gzip",
            },
          ],
        },
      ]
    },
  }),
)
