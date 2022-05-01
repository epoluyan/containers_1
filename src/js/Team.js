export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('В команде уже есть такой персонаж');
    } else {
      this.members.add(member);
    }
  }

  addAll(...member) {
    member.forEach((el) => {
      this.members.add(el);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
