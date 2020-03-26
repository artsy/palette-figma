import { identifyTextNode } from './identifyTextNode';

describe('identifyTextNode', () => {
  describe('font name', () => {
    it('identifies Adobe Garamond Pro as Serif', () => {
      const textNode = aTextNode();
      textNode.fontName.family = 'Adobe Garamond Pro';

      const result = identifyTextNode(textNode as TextNode);

      expect(result.componentSource).toContain('<Serif>');
    });

    it('identifies Unica77 LL as Sans', () => {
      const textNode = aTextNode();
      textNode.fontName.family = 'Unica77 LL';

      const result = identifyTextNode(textNode as TextNode);

      expect(result.componentSource).toContain('<Sans>');
    });

    // TODO - figure out what the actual display font is
    it('identifies avant something as Display', () => {
      const textNode = aTextNode();
      textNode.fontName.family = 'Avant';

      const result = identifyTextNode(textNode as TextNode);

      expect(result.componentSource).toContain('<Display>');
    });
  });

  describe('text contents', () => {
    it('emits text content of selected node', () => {
      const textNode = aTextNode();
      textNode.characters = 'The contents of the text node';

      const result = identifyTextNode(textNode as TextNode);

      expect(result.componentSource).toContain(
        '>The contents of the text node<'
      );
    });
  });

  describe('italics', () => {
    it('emits italic prop for italic text', () => {
      const textNode = aTextNode();
      textNode.fontName.style = 'Italic';

      const result = identifyTextNode(textNode as TextNode);

      expect(result.componentSource).toContain('<Serif italic>');
    });
  });
});

function aTextNode() {
  return {
    fontName: {
      family: 'Adobe Garamond Pro',
      style: 'Regular',
    },
    characters: 'this is a text node!',
    fontSize: 16,
    lineHeight: {
      value: 20,
    },
  };
}
