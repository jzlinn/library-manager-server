const jsonResponse = (error = false, data = {}, message = '') => {
  return {
    error, data, message
  };
};

export default jsonResponse