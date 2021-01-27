// document.querySelectorAll(".counter-count").each(function () {
//   $(this)
//     .prop("Counter", 0)
//     .animate(
//       {
//         Counter: $(this).text(),
//       },
//       {
//         duration: 5000,
//         easing: "swing",
//         step: function (now) {
//           $(this).text(Math.ceil(now));
//         },
//       }
//     );
// });

window.onload = () => {
  const nodes = document.querySelectorAll(".counter-count span:first-of-type");
  const c1 = () => {
    const final_count = Number(nodes[0].innerText);
    let initial_count = 0;
    let id = setInterval(() => {
      if (initial_count === final_count) clearInterval(id);
      nodes[0].innerHTML = initial_count;
      initial_count++;
    }, 120);
  };

  const c2 = () => {
    const final_count = Number(nodes[1].innerText);
    let initial_count = 0;
    let id = setInterval(() => {
      if (initial_count === final_count) clearInterval(id);
      nodes[1].innerHTML = initial_count;
      initial_count++;
    }, 30);
  };

  const c3 = () => {
    const final_count = Number(nodes[2].innerText);
    let initial_count = 0;
    let id = setInterval(() => {
      if (initial_count === final_count) clearInterval(id);
      nodes[2].innerHTML = initial_count;
      initial_count++;
    }, 107);
  };

  const c4 = () => {
    const final_count = Number(nodes[3].innerText);
    let initial_count = 0;
    let id = setInterval(() => {
      if (initial_count === final_count) clearInterval(id);
      nodes[3].innerHTML = initial_count;
      initial_count++;
    }, 166);
  };

  const c5 = () => {
    const final_count = Number(nodes[4].innerText);
    let initial_count = 0;
    let id = setInterval(() => {
      if (initial_count >= final_count) clearInterval(id);
      nodes[4].innerHTML = initial_count;
      initial_count += 20;
    }, 4);
  };

  c1();
  c2();
  c3();
  c4();
  c5();
};
