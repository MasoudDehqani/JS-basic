
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function sendEmailToGold() {
  try {
    const p1 = await getCustomer(1);
    console.log(p1)
    const p2 = await getTopMovies();
    if (p1.isGold) {
      console.log(`Top movies: ${p2}`)
      sendEmail();
    }
  }
  catch(err) {
    console.log(new Error(err.message))
  }
}

sendEmailToGold();

function getCustomer(id) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);
  })
}

function getTopMovies() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
  
}

function sendEmail(email, movies) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log('Email sent...')
      resolve();
    }, 4000);
  })
}