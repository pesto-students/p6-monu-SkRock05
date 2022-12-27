function createIncrement() {
    letcount = 0;
    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

/*

-- When we call the main function (createIncrement) at line 16 it excuted for first time and returned value store's in respectived variable
-- and when we call increment for 3 time it increase the count value to 3 but it's the updated value of count is not assigned to message it happens
-- only first time when we call main function (createIncrement), SO the value of message is "Count is 0".

*/
