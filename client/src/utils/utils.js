export const router = {
  login: '/api/admin/login',
  home: '/api/homes',
  order: '/api/order/free',
  reviews: '/api/reviews',
  admin: {
    addHouseServerPath: '/api/admin/addHouse',
    addHouseServerIMGPath: '/api/admin/addHouse/img',
    imgHousePath: '/images/homes/',
    editHouse: '/api/admin/editHouse'
  }
}


export const reactRouter = {
  user: {
    homepage: '/',
    about: '/about',
    booking: '/booking',
    house: '/house',
    services: '/services',
    contacts: '/contacts',
    notfound: '*',
  },

  admin: {
    main: '/admin/main',

    allReservations: '/admin/reservations/all',
    addReservation: '/admin/reservations/add',
    editReservations: '/admin/reservations/edit/:id',

    allHouses: '/admin/houses/all',
    addHouse: '/admin/houses/add',
    login: '/admin/login',
    logout: '/admin/logout',
    addHouseServerPath: '/admin/addHouse',
    confirmReviews: '/admin/confirmReviews',
    chooseEditHouse: '/admin/houses/edit/:id',
    editHouse: '/admin/houses/edit/'

  },
}
