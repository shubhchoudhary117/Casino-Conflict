class AuthorizationError extends Error {

  constructor(message = 'Access Denied', statusCode = 403) {
    super(message);
    this.name = 'AuthorizationError';
    this.statusCode = statusCode;
  }
}
