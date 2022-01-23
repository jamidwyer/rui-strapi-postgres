module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53e8725057993c635a77d24f724efb26'),
  },
});
