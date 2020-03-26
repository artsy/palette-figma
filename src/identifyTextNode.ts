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
    componentText: formatComponentText(nodeData),
  };
}

function formatComponentText(nodeData) {
  return '<Serif />';
}
