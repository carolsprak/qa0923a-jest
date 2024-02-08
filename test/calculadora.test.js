const {soma, subtracao, multiplicacao, divisao} = require('../src/calculadora');

test('Testar a Função Somar ', () => {
  expect(soma(1, 2)).toBe(3); 
  expect(soma("1", "2")).toBe("12");
  expect(soma("1", -1)).toBe("1-1"); 
  expect(soma("1", 1)).toBe("11"); 
      
});

test('Testar a Função Subtrair ', () => {
    expect(subtracao(2, 1)).toBe(1);
    expect(subtracao(-8, -5)).toBe(-3); // (-8) - (-5)
    expect(subtracao(-8, 5)).toBe(-13); // (-8) - (5)
    expect(subtracao(8, -5)).toBe(13); // (8) - (-5)
  });

test('Testar a Função Multiplicar', () => {
    expect(multiplicacao(1, 2)).toBe(2);
  });

  test('Testar a Função Divisão', () => {
    expect(divisao(4, 2)).toBe(2);
    expect(divisao(4, 0)).toBe(Infinity);
  });