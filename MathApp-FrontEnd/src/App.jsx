import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [a, setA] = useState("0");
  const [b, setB] = useState("0");
  const [c, setC] = useState("0");

  const aAddB = () => {
    setC(parseInt(a) + parseInt(b));

    axios
      .post("http://localhost:3000/aAddB", {
        a: parseFloat(a),
        b: parseFloat(b),
      })
      .then((response) => {
        setC(response.data.result);
        console.log(response.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const pythagoras = async () => {
    setC(parseInt(a) * parseInt(b));

    try {
      const response = await fetch("http://localhost:3000/pythagoras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a: parseFloat(a),
          b: parseFloat(b),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setC(data.result);
        console.log(data.result);
      }
    } catch (error) {
      console.error(error);
    }
    // axios
    // .post("http://localhost:3000/pythagoras", {
    //   a: parseFloat(a),
    //   b: parseFloat(b),
    // })
    // .then((response) => {
    //   setC(response.data.result);
    //   console.log(result);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
  };
  const aPowB = async () => {
    setC(Math.pow(parseInt(a), parseInt(b)));

    try {
      const response = await fetch("http://localhost:3000/aPowB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a: parseFloat(a),
          b: parseFloat(b),
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setC(data.result);
        console.log(data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const aMulB = async () => {
    setC(parseInt(a) * parseInt(b));

    try {
      const response = await fetch("http://localhost:3000/aMulB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a: parseFloat(a),
          b: parseFloat(b),
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setC(data.result);
        console.log(data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const aAddBPower3 = async () => {
    try {
      const response = await fetch("http://localhost:3000/aAddB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a: parseFloat(a),
          b: parseFloat(b),
        }),
      });

      const responseData = await response.json(); 
      const x = responseData.result; // จำเป็นต้องเก็บผลลัพธ์ไว้ที่ responseData ก่อนแล้วค่อยส่งค่าไปที่ x

      const response2 = await fetch("http://localhost:3000/aPowB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a: x,
          b: 3,
        }),
      });

      const responseData2 = await response2.json();
      setC(responseData2.result);
      console.log(responseData2.result);


    } catch (error) {
      console.error(error);
    }
  };


  const factoriser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/pythagoras', {
        a: parseInt(a),
        b: parseInt(b),

      
      })

      const response2 = await axios.post('http://localhost:3000/aMulB', {
        a: parseInt(a),
        b: parseInt(b),
      })

      const response3 = await axios.post('http://localhost:3000/aAddB', {
        a: response.data.result,
        b: (response2.data.result*2),
      })
     
      setC(response3.data.result)
      console.log(response3.data.result)

    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <div className=" border border-black p-2 m-auto w-fit rounded-md p-4">
        <div className="flex-1 items-center">
          <div className="text-center text-4xl mb-2">Math</div>
          <div className="flex flex-row justify-center p-2 mb-2 gap-3">
            <div className="mr-2 text-xl">
              A :{" "}
              <input
                type="number"
                value={a}
                onChange={(e) => {
                  setA(e.target.value);
                }}
                className="input input-bordered max-w-xs text-xl"
              />{" "}
            </div>
            <div className="mr-2 text-xl">
              B :{" "}
              <input
                type="number"
                value={b}
                onChange={(e) => {
                  setB(e.target.value);
                }}
                className="input input-bordered max-w-xs text-xl"
              />
              <br />
            </div>
          </div>
        </div>
        <div className="flex justify-around mb-4 ">
          <button className="btn btn-neutral" onClick={aAddB}>
            C&nbsp;=&nbsp;A&nbsp;+&nbsp;B
          </button>
          <button className="btn btn-primary" onClick={pythagoras}>
            C&nbsp;=&nbsp;A<sup>2</sup>+&nbsp;B<sup>2</sup>
          </button>
          <button className="btn btn-accent" onClick={aPowB}>
            C&nbsp;=&nbsp;A<sup>b</sup>
          </button>
          <button className="btn btn-secondary" onClick={aMulB}>
            C&nbsp;=&nbsp;AB
          </button>
        </div>

        <div className="flex justify-around mb-4">
          <button className="btn btn-info" onClick={aAddBPower3}>
            C&nbsp;=&nbsp;(A+B)<sup>3</sup>
          </button>
          <button className="btn btn-warning " onClick={factoriser}>
            C&nbsp;=&nbsp;A<sup>2</sup>+&nbsp;2AB&nbsp;+&nbsp;B<sup>2</sup>
          </button>
        </div>
        <div className="text-center text-xl ">
          C :{" "}
          <input
            value={c}
            className="bg-base-100 text-center text-black cursor-not-allowed max-w-xs h-11 border rounded-md"
            disabled
          />
        </div>
      </div>
    </>
  );
}

export default App;
