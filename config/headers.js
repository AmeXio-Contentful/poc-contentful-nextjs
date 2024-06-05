const securityHeaders = [

];

module.exports = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: securityHeaders,
    },
  ];
};
