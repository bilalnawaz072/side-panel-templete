chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "openSidePanel",
      title: "Open Side Panel",
      contexts: ["all"]
    });
  });
  
  // Handle context menu click
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openSidePanel") {
      chrome.sidePanel.open({ windowId: tab.windowId });
    }
  });