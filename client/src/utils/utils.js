export const router = {
  login: '/api/admin/login',
  home: '/api/homes',
  reviews: '/api/reviews',
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
    addHouseServerPath: '/admin/addHouse',
    confirmReviews: '/admin/confirmReviews'
  },


}
