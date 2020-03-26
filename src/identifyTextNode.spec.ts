import { identifyTextNode } from './identifyTextNode';

describe('identifyTextNode', () => {
  describe('font name', () => {
    it('identifies Adobe Garamond Pro as Serif', () => {
      const textNode = {
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

      const result = identifyTextNode(textNode as TextNode);

      expect(result.componentText).toContain('<Serif ');
    });
  });
});
