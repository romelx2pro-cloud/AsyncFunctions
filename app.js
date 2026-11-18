// // async function hello() {
// // }

// const { Children } = require("react");

// const sing = async () => {
//     throw "OH NO, PROBLEM!"
//     return 'LA LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log("PROMISE RESOLVED WITH:", data)
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED!")
//         console.log(err)
//     })

// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'corgifeetarecute') return 'WELCOME!'
//     throw 'Invalid Password'
// }

// login('todd', 'corgifeetarecute')
//     .then(msg => {
//         console.log("LOGGED IN!")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("ERROR!")
//         console.log(err)
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// // delayedColorChange('red', 1000)
// //     .then(() => delayedColorChange('orange', 1000))
// //     .then(() => delayedColorChange('yellow', 1000))
// //     .then(() => delayedColorChange('green', 1000))
// //     .then(() => delayedColorChange('blue', 1000))
// //     .then(() => delayedColorChange('indigo', 1000))
// //     .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return "ALL DONE!"
// }

// // rainbow().then(() => console.log("END OF RAINBOW!"))

// async function printRainbow() {
//     await rainbow();
//     console.log("END OF RAINBOW!")
// }

// printRainbow();

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 2000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     } catch (e) {
//         console.log("CAUGHT AN ERROR!")
//         console.log("error is:", e)
//     }

// }
// async function name() {}
// const h = async () => {
//   throw new Error("oh no!");
//   return "lalalala";
// };
// h()
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((er) => {
//     console.log("oh no, promise rejected ", er);
//   });
// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentials";
//   if (password === "corgifeetarecute") return "WELCOME!";
//   throw "Invalid Password";
// };
// login("akjsdhsa", "corgifeetarecute")
//   .then((msg) => {
//     console.log("li");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Err!", err);
//   });
// async function name() {}
// const sing = async () => {
//   // aklsdas.caosed();
//   throw 'new Error("ahhh!")';
//   return "lalala";
// };
// sing()
//   .then((data) => {
//     console.log("promise resolved with", data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });
// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "missing credentials";
//   } else if (password === 1) {
//     return "wc";
//   } else {
//     return "wrong p";
//   }
// };
// login(addEventListener, 1)
//   .then((res) => {
//     console.log("scs", res);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };
// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   console.log("r");
//   await delayedColorChange("green", 1000);
//   console.log("g");
//   await delayedColorChange("blue", 1000);
//   console.log("b");
//   return "ALL DONE!";
// }
// // rainbow().then((res) => {
// //   console.log("end r", res);
// // });
// async function printRainbow() {
//   await rainbow();
//   console.log("end");
// }
// async function name() {}
// const sing = async () => {
//   // asdasd.asdasdas();
//   throw "OH NO , Prob!";
//   return "lalala";
// };
// sing()
//   .then((data) => {
//     console.log("res", data);
//   })
//   .catch((err) => {
//     console.log("rej", err);
//   });
// function login(uName,pass) {

// }
// const login = async (uName, pass) => {
//   if (!uName || !pass) throw "missing credentials";
//   if (pass === 1) return "wc";
//   throw "invalid pass";
// };
// login("a", 1)
//   .then((m) => {
//     console.log("li", m);
//   })
//   .catch((e) => {
//     console.log("err", e);
//   });
function rgb(c, d) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = c;
      resolve("scs");
    }, d);
  });
}
async function bcc() {
  await rgb("red", 1000);
  console.log("r");
  await rgb("green", 1000);
  console.log("g");
  await rgb("blue", 1000);
  console.log("b");
  return "bcc end1";
}
// bcc().then((d) => {
//   console.log("end", d);
// });
async function bccf() {
  await bcc();
  console.log("bccf");
}
bccf();
