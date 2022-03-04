module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        dataIn: '2022-02-27',
        dataOut: '2022-03-01',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        user_id: 2,
        dataIn: '2022-03-01',
        dataOut: '2022-03-04',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        dataIn: '2022-03-07',
        dataOut: '2022-03-08',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        dataIn: '2022-03-10',
        dataOut: '2022-03-12',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        dataIn: '2022-03-13',
        dataOut: '2022-03-15',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        dataIn: '2022-03-02',
        dataOut: '2022-03-04',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        dataIn: '2022-03-10',
        dataOut: '2022-03-12',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        dataIn: '2022-03-10',
        dataOut: '2022-03-12',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        dataIn: '2022-03-05',
        dataOut: '2022-03-07',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        dataIn: '2022-03-15',
        dataOut: '2022-03-17',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        dataIn: '2022-03-17',
        dataOut: '2022-03-19',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
