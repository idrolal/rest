module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Admins', [{
      name: 'Andew',
      email: 'a@yandex.ru',
      password: '123456789',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
