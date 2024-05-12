export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
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
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getSpecial(object) {
  const arrSpecial = [];

  object.special.forEach((elem) => {
    const {
      id, name, description = 'Описание не доступно', icon,
    } = elem;

    arrSpecial.push({
      id, name, description, icon,
    });
  });

  return arrSpecial;
}
