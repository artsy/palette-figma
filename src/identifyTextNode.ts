// TODO - import lodash.capitalize instead of the whole thing
//   or use lodash-es (webpack should treeshake it)
import { capitalize } from 'lodash';

export function identifyTextNode(node: TextNode) {
  const nodeData = {
    text: node.characters,
    fontFamily: (node.fontName as FontName).family,
    italic: (node.fontName as FontName).style === 'Italic',
    fontSize: node.fontSize,
    // tsc: is this how i type lineHeight as an unnamed type of a union type?
    //   e.g. `{ value: number} | { unit: "AUTO" }`
    lineHeight: (node.lineHeight as { value: number }).value,
  };

  return {
    ...nodeData,
    componentSource: formatComponentSource(nodeData),
  };
}

function formatComponentSource(nodeData) {
  const { fontFamily, italic, text } = nodeData;

  // TODO - extract this
  let type = 'unknownFont';
  if (fontFamily.match(/garamond/i)) {
    type = 'serif';
  } else if (fontFamily.match(/unica/i)) {
    type = 'sans';
  } else if (fontFamily.match(/avant/i)) {
    type = 'display';
  }

  const componentTag = capitalize(type);
  return (
    '<' +
    componentTag +
    (italic ? ' italic' : '') +
    `>${text}</${componentTag}>`
  );
}
