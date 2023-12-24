//1
let myPromise = new Promise((resolve, reject) => {
    let x = 1;
    if (x == 1) {
        resolve('Ok Done');
    }
    else {
        reject('Sorry Fail');
    }
})
myPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//2
const demo = () => {
    x = 2;
    return new Promise((resolve, reject) => {
        if (x == 1) {
            resolve('Ok Done');
        }
        else {
            reject('Sorry Fail');
        }
    })
}
demo().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});