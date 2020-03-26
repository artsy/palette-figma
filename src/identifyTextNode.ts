// TODO - import lodash.capitalize instead of the whole thing
import { capitalize, findKey } from 'lodash';

export function identifyTextNode(node: TextNode) {
  const nodeData = {
    text: node.characters,
    fontFamily: (node.fontName as FontName).family,
    fontStyle: (node.fontName as FontName).style,
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
  // TODO - extract this
  let type = 'unknownFont';
  if (nodeData.fontFamily.match(/garamond/i)) {
    type = 'serif';
  } else if (nodeData.fontFamily.match(/unica/i)) {
    type = 'sans';
  } else if (nodeData.fontFamily.match(/avant/i)) {
    type = 'display';
  }

  return `<${capitalize(type)} />`;
}
