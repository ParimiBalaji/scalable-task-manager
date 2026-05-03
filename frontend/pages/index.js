import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [value, updateValue] = useState("No tasks available");
  const [input, setInput] = useState("");

  const baseUrl = "http://localhost:5001";
  const getDataUrl = `${baseUrl}/data`;
  const createDataUrl = `${baseUrl}/create`;

  const getData = async () => {
    try {
      const { data } = await axios.get(getDataUrl);
      updateValue(data);
      console.log({ message: "got data", data });
      return data;
    } catch (error) {
      console.error({ message: "failed fetching data.", error });
    }
  };

  const createData = async (inputText) => {
    try {
      const { data } = await axios.post(createDataUrl, {
        data: inputText,
      });

      console.log({ message: "posted data", data });
      return data;
    } catch (error) {
      console.error({ message: "failed creating data.", error });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!input.trim()) return;

    await createData(input);

    setInput("");
  };

  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f172a, #111827)",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "700px",
          backgroundColor: "#1e293b",
          padding: "40px",
          borderRadius: "14px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          TaskFlow Pro
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Scalable microservice-based task management platform powered by
          Redis caching, MySQL, Dockerized backend services, and distributed
          architecture.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Enter task title..."
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
            style={{
              padding: "12px",
              width: "320px",
              borderRadius: "8px",
              border: "1px solid #475569",
              outline: "none",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Create Task
          </button>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={getData}
            style={{
              padding: "12px 20px",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Load Tasks
          </button>
        </div>

        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#0f172a",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#38bdf8",
            }}
          >
            Recent Tasks
          </h3>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              color: "#e2e8f0",
              lineHeight: "1.5",
            }}
          >
            {JSON.stringify(value, null, 2)}
          </pre>
        </div>
      </section>
    </main>
  );
}