import Team from '../Team';

test('should return name member', () => {
  const members = new Team();
  members.add({ name: 'Test' });
  const res = members.toArray();

  expect(res).toEqual([{ name: 'Test' }]);
});

test('should return error if member exosts', () => {
  const members = new Team();
  const member = { name: 'Test' };
  members.add(member);

  expect(() => members.add(member)).toThrow('В команде уже есть такой персонаж');
});
