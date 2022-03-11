module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Admins', [{
      name: 'Andew',
      email: 'aa@yandex.ru',
      password: '123456789',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
