# Riskstriker website

Public marketing website for Cybernetic Limited / RiskStriker.

Build: `npm ci` then `npm run build`. The pinned Vinext/React starter is preserved. Static export is used for both Sites and GitHub Pages. The postbuild step prepares directory routes and removes unnecessary client scripts because all current pages are reading-only.

GitHub Pages publishes `main:/docs`. Commit the refreshed `docs` directory after a successful build. `pagesBase` supports the default project URL; set it to an empty string and rebuild before using a custom domain.

Source: https://github.com/gocybernetic/riskstriker-website

Product claims remain bounded; synthetic scenarios are illustrations, not measured results. No analytics, enquiry form, or unverified email endpoint is included. A confirmed public enquiry mailbox can be added later.
