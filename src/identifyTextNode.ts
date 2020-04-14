// TODO - import lodash.capitalize instead of the whole thing
//   or use lodash-es (webpack should treeshake it)
import { capitalize, get } from 'lodash';

export function identifyTextNode(node: TextNode) {
  const nodeData = parseNodeData(node);

  return {
    ...nodeData,
    componentSource: formatComponentSource(nodeData),
  };
}

function parseNodeData(node: TextNode) {
  return {
    text: node.characters,
    fontFamily: (node.fontName as FontName).family,
    style: (node.fontName as FontName).style,
    fontSize: node.fontSize,
    lineHeight: (node.lineHeight as {
      value: number;
    }).value,
    color: get(node, 'fills[0].color'),
  };
}

function formatFontType(fontFamily: any) {
  let type = 'unknownFont';
  if (fontFamily.match(/garamond/i)) {
    type = 'serif';
  } else if (fontFamily.match(/unica/i)) {
    type = 'sans';
  } else if (fontFamily.match(/avant/i)) {
    type = 'display';
  }
  return type;
}

function formatItalic(style: string) {
  return style === 'Italic' && 'italic';
}

function formatColor(color: RGB) {
  return 'black100';
}

function formatComponentSource(nodeData) {
  const { fontFamily, text, color, style } = nodeData;

  const fontType = formatFontType(fontFamily);
  const componentTag = capitalize(fontType);
  const formattedColor = formatColor(color);
  const formattedItalic = formatItalic(style);

  return (
    '<' +
    componentTag +
    (formattedItalic ? ` ${formattedItalic}` : '') +
    (formattedColor ? ` color="${formattedColor}"` : '') +
    `>${text}</${componentTag}>`
  );
}
