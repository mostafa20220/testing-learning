const { generateText, checkAndGenerate } = require ('./util');


// unit tests for generateText function

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
    const text2 = generateText('Anna', 28);
    expect(text2).toBe('Anna (28 years old)');
}
);

test('should output data-less text', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
    const text2 = generateText('',null);
    expect(text2).toBe(' (null years old)');
});


// integration tests for checkAndGenerate function

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
}
);
