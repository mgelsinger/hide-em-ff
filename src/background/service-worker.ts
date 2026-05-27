import browser from 'webextension-polyfill';
import { onRulesChanged } from '../shared/storage.js';

// Subscribe to rule changes so the event listener is registered in the service worker.
// Content script broadcasting is wired up in M2 when content scripts exist.
onRulesChanged((_rules) => {
  // M2: broadcast to all content-script tabs via browser.tabs.sendMessage
});

// Toolbar button click → open options. The action has no default_popup, so
// onClicked fires for both mouse clicks and the _execute_action keyboard shortcut.
browser.action.onClicked.addListener(() => {
  void browser.runtime.openOptionsPage();
});
