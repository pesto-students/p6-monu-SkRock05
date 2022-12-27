const doTask1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 Completed");
    }, 1000);
  });
};

const doTask2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 Completed");
    }, 1000);
  });
};

const doTask3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 Completed");
    }, 1000);
  });
};

const taskStatus = async () => {
  const task1 = await doTask1();
  console.log(`${task1} completes its execution`);

  const task2 = await doTask2();
  console.log(`${task2} completes its execution`);

  const task3 = await doTask3();
  console.log(`${task3} completes its execution`);
};

taskStatus();

async function* generator() {
  const task1 = await doTask1();
  console.log(task1);
  yield task1;

  const task2 = await doTask1();
  console.log(task2);
  yield task2;

  const task3 = await doTask1();
  console.log(task3);
  yield task3;
}

const gen = generator();

gen.next();
// gen.next();
// gen.next();
