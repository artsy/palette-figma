import './ui.css';

const inspectorText = document.getElementById('inspector-text');
const inspectorFontFamily = document.getElementById('inspector-font-family');
const inspectorFontStyle = document.getElementById('inspector-font-style');
const inspectorFontSize = document.getElementById('inspector-font-size');
const inspectorLineHeight = document.getElementById('inspector-line-height');

onmessage = event => {
  if (event.data.pluginMessage.length === 0) {
    inspectorText.innerText = '';
    inspectorFontFamily.innerText = '';
    inspectorFontStyle.innerText = '';
    inspectorFontSize.innerText = '';
    inspectorLineHeight.innerText = '';
  } else {
    const item = event.data.pluginMessage[0];
    inspectorText.innerText = item.text;
    inspectorFontFamily.innerText = item.fontFamily;
    inspectorFontStyle.innerText = item.fontStyle;
    inspectorFontSize.innerText = item.fontSize;
    inspectorLineHeight.innerText = item.lineHeight;
  }
};
