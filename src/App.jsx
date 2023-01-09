import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";

import "./styles.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("Estudar");
  const [message2, setMessage2] = useState("Codificar");
  const [message3, setMessage3] = useState("Dormir");
  const [message4, setMessage4] = useState("Repetir");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback = () => {
    setMessage1("Desenvolver novas habilidades");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Trabalhar em um projeto");
  };

  const someCallback3 = () => {
    setMessage3("Recarregar as energias");
    fireConfetti();
  };

  const someCallback4 = () => {
    setMessage4("Refazer o processo 🔁");
    fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <div className="wrapper">

      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message">{message1}</div>
      </div>

      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message">{message2}</div>
      </div>

      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message">{message3}</div>
      </div>

      <div id="timeline4" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          3
        </div>
        <div className="message">{message4}</div>
      </div>

    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">
      <h1>React-timeline component</h1>
      <div className="stub1">⬇️ Scroll para iniciar ⬇️</div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="blue"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
