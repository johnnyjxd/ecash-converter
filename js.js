var userammount = prompt("enter a number in usd")
var ecash = userammount * 22 / 2 + 55 - 3 * 20

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

const testSleep = async () => {
    console.log('calculating data');
    await sleep(5000);
    console.log(ecash);
}

testSleep();