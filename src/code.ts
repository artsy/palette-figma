import { identifyTextNode } from './identifyTextNode';

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { height: 300, width: 400 });

figma.on('selectionchange', () => {
  const results = [];
  for (const node of figma.currentPage.selection) {
    if (node.type === 'TEXT') {
      console.log('current selection:', node);
      results.push(identifyTextNode(node));
    }
  }

  figma.ui.postMessage(results);
});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
// figma.ui.onmessage = msg => {
// };
