# Privacy Policy — hide-em

_Last updated: 2026-05-19_

hide-em is a personal attention filter that runs entirely inside your browser. This document describes what the extension does and does not do with your data.

## Summary

- hide-em does **not** collect, transmit, or sell any personal data.
- hide-em does **not** include analytics, telemetry, crash reporting, or any form of remote logging.
- hide-em does **not** make network requests to any server operated by the developer or by any third party.
- All data the extension stores stays on your devices.

## What the extension stores

hide-em stores two kinds of data, both via the standard browser extension storage APIs:

1. **Your blocklist rules** — the names, keywords, phrases, and regular expressions you add, along with their associated settings (type, aliases, case sensitivity, whole-word, scopes, action). Stored via `chrome.storage.sync`, which means the browser may synchronize this data across browsers signed into the same browser account. This is a feature of the browser, not of the extension; the extension does not operate any sync server.
2. **Local counters and settings** — per-rule hit counts and the debug toggle. Stored via `chrome.storage.local`, which never leaves the device.

The extension does not store the text of pages you visit, the URLs you visit, or any browsing history.

## How the extension processes page content

To do its job, the extension reads visible text from the pages you load and tests that text against your rules. This processing happens entirely inside the content script running in your browser tab. No text is sent off-device, no text is persisted beyond the lifetime of the page, and no text is shared with any other process, extension, or server.

## Permissions

- **`storage`** — required to save your blocklist rules and settings.
- **Host permission `<all_urls>`** — required because the extension's purpose is to apply your rules on every site you visit. There is no per-site configuration; one content script runs on all pages.

The extension does not request `tabs`, `webRequest`, `cookies`, `history`, `bookmarks`, or any other permission that would let it observe or modify browsing data beyond the matching it performs in-page.

## Third parties

The extension uses no third-party SDKs, analytics services, advertising networks, or hosted services of any kind.

## Children

The extension is not directed at children and does not knowingly collect any data from anyone, including children.

## Changes

If this policy changes, the updated text will be published in the extension's repository and the "Last updated" date above will be revised.

## Contact

Questions about this policy can be sent to: mgelsinger@proton.me
