import "./styles.css";
import { useState } from "react";

export default function App() {
  const [d, u] = useState(true);
  const [a, ua] = useState("plz type");

  function sub(e) {
    let v = e.target.value;
    console.log(v);
    // console.log(v)
    if (v === "") {
      u(true);
      ua("ok");
    } else {
      u(false);
      u("not entered");
    }
  }

  function r(e) {
    let v = e.target.value;
    //  console.log(v)
    if (v === "") {
      u(true);
    } else {
      u(false);
    }
  }
  return (
    <div className="App">
      <input type="text" onChange={r} />
      <button type="button" onClick={sub} disabled={d}>
        submit
      </button>
      {a}
    </div>
  );
}
