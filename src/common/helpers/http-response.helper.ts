/* eslint-disable prettier/prettier */
export const httpResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    statusCode,
    data,
  });
}

export const httpSuccessResponse = (res, data, statusCode = 200, message = 'Success') => {
  if (message === 'Success') {
    switch (statusCode) {
      case 201: message = 'Successfully Created'; break;
    }
  }
  return res.status(statusCode).json({
    statusCode,
    message,
    data,
  });
}

export const httpErrorResponse = (res, error, statusCode = 500, message = 'error') => {
  if (message === 'OK') {
    switch (statusCode) {
      case 201: message = 'Successfully Created'; break;
    }
  }
  return res.status(statusCode).json({
    statusCode,
    message,
    error,
  });
}
// Respuestas informativas (100–199),
// Respuestas satisfactorias (200–299),
// Redirecciones (300–399),
// Errores de los clientes (400–499),
// y errores de los servidores (500–599).
