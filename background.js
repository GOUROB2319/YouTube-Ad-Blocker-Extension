chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1,
            priority: 1,
            action: { type: "block" },
            condition: {
                urlFilter: "||googlevideo.com^",
                resourceTypes: ["media"]
            }
        },
        {
            id: 2,
            priority: 1,
            action: { type: "block" },
            condition: {
                urlFilter: "||doubleclick.net^",
                resourceTypes: ["script"]
            }
        },
        {
            id: 3,
            priority: 1,
            action: { type: "block" },
            condition: {
                urlFilter: "||googleadservices.com^",
                resourceTypes: ["script"]
            }
        }
    ],
    removeRuleIds: [1, 2, 3]
});
