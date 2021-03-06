import faker from 'faker';
import lengthEquals from '.';

describe('Tests lengthEquals rule', () => {
  const length = faker.random.number();
  const word = faker.random.word();
  const boolean = faker.random.boolean();

  describe('First argument is array or string', () => {
    describe('When first argument is equal to a given value', () => {
      it('Should return true for an array equal to length', () => {
        expect(lengthEquals(new Array(length), length)).toBe(true);
      });

      it('Should return true for a string equal to word length', () => {
        expect(lengthEquals(word, word.length)).toBe(true);
      });
    });

    describe('When first argument is shorter', () => {
      it('Should return false for an array shorter than length', () => {
        expect(lengthEquals(new Array(length), length + 1)).toBe(false);
      });

      it('Should return false for a string shorter than word length', () => {
        expect(lengthEquals(word, word.length + 1)).toBe(false);
      });
    });

    describe('When first argument is longer', () => {
      it('Should return false for an array longer than length', () => {
        expect(lengthEquals(new Array(length), length - 1)).toBe(false);
      });

      it('Should return false for a string longer than word length', () => {
        expect(lengthEquals(word, word.length - 1)).toBe(false);
      });
    });
  });

  describe("First argument isn't array or string", () => {
    it('Should throw error', () => {
      expect(() => lengthEquals(undefined, 0)).toThrow(TypeError);
    });

    it('Should return false for number argument', () => {
      expect(lengthEquals(length, 0)).toBe(false);
    });

    it('Should return false for boolean argument', () => {
      expect(lengthEquals(boolean, 0)).toBe(false);
    });
  });

  it('Should expose negativeForm property', () => {
    expect(lengthEquals.negativeForm).toBe('lengthNotEquals');
  });
});
