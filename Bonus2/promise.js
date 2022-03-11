function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
}

async function asyncCall() {
  try {
    let mess = (await resolveAfter2Seconds()) + 9;
    console.log(mess);
  } catch (err) {
    console.log(err);
  }
}

asyncCall();
