const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  }
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
