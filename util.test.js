const { generateText } = require ('./util');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('0 (29 years old)');
    const text2 = generateText('Anna', 28);
    expect(text2).toBe('Anna (28 years old)');
}
);
