import getSpecial, { character } from '../js/app';

test('', () => {
  const result = getSpecial(character);
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание не доступно',
    },
  ];

  expect(result).toEqual(expected);
});
