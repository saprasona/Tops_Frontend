function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log('login is working');
        if (username == 'Sona' && password == '12345') {
            resolve(username);
        }
        else {
            reject('username & password does not matched');
        }
    })
}
function displayData(username) {
    return new Promise((resolve, reject) => {
        console.log('displaying Data');
        resolve("hello " + username);
    })
}

// login('Sona', '12345').then((data) => {
//     console.log(data);
//     displayData(data).then((res) => {
//         console.log(res);
//     })
// })
//     .catch((err) => {
// console.log(err);
//     })

async function doThis() {
    try {
        const data = await login('Sona', '123456');
        console.log(data);
        const res = await displayData(data);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
doThis();