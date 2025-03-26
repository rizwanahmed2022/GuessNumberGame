"use client";
import React from "react";
export default function Home() {
  const reloadPage = () => {
    window.location.reload();
  };
  let start = () => {
    let a = document.getElementById("id");
    let b = document.getElementById("landing");
    a.style.display = "flex";
    b.style.display = "none";
  };
  let submit = () => {
    let answer = document.getElementById("answer");
    let userguess = document.getElementById("userguess").value;
    if (userguess == "") {
      alert("please Enter Number");
    } else {
      let num = Math.random() * (10 - 0 + 1) + 0;
      let num2 = Math.round(num);
      console.log(num2);

      if (num2 == userguess) {
        answer.innerHTML = `Correct: Your Guess ${userguess} is Equals to ${num2}`;
      } else {
        answer.innerHTML = `incorrect: Your Guess ${userguess} is but the correct number was ${num2}`;
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center py-29">
      <div
        id="id"
        className=" text-center hidden border px-20 py-9 w-full h-full"
      >
        <input
          type="number"
          name="number"
          id="userguess"
          placeholder="Guess The Number"
          className="border py-3 px-7"
        />
        <button
          onClick={submit}
          className="border px-8 py-2 bg-blue-600 text-2xl text-white"
        >
          Click me
        </button>
        <h1 className=" text-9xl" id="answer">
          Answer
        </h1>
        <button onClick={reloadPage}>Reload Page</button>
      </div>

      <div id="landing">
        <button onClick={start}>Let's Get Start</button>
      </div>
    </div>
  );
}
