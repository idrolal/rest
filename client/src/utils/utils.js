export const router = {
  login: '/api/admin/login',
  home: '/api/homes',
  reviews: '/api/reviews',
  admin: {
    addHouseServerPath: '/api/admin/addHouse',
    addHouseServerIMGPath: '/api/admin/addHouse/img',
    imgHousePath: '/images/homes/'
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
  },

  admin: {
    main: '/admin/main',

    allReservations: '/admin/reservations/all',
    addReservation: '/admin/reservations/add',

    allHouses: '/admin/houses/all',
    addHouse: '/admin/houses/add',
    login: '/admin/login',
    logout: '/admin/logout',
    addHouseServerPath: '/admin/addHouse',
    confirmReviews: '/admin/confirmReviews'

  },


}
