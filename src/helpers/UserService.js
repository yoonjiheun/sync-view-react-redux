var UserService = {
  login: function (email, password) {
    // Simulating ajax call
    return new Promise((resolve, reject) => {
        if(email === 'test@test.com' && password ==='test') resolve({ statusCode: 200, message: 'Login successful!' });
        else resolve ({ statusCode: 400, message: 'Login attempt unsuccessful!' });
    })
  }
}

export default UserService;
