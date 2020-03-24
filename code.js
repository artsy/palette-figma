// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.on('selectionchange', () => {
    const results = [];
    for (const node of figma.currentPage.selection) {
        if (node.type === 'TEXT') {
            console.log('current selection:', node);
            results.push({
                text: node.characters,
                fontFamily: node.fontName.family,
                fontStyle: node.fontName.style,
                fontSize: node.fontSize,
                lineHeight: node.lineHeight.value,
            });
        }
    }
    figma.ui.postMessage(results);
});
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
// figma.ui.onmessage = msg => {
// };
