import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { InputGroup, Button, FormControl, Badge } from "react-bootstrap";
function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitted(true);
    const msg = e.target.msg.value;
    const res = await fetch("http://192.168.18.54:5000/chatbot?msg=" + msg);
    const data = await res.json();
    setResponse(data.response);
    setLoading(false);
  };
  return (
    <div className="m-3">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
          flexDirection: "column",
        }}
      >
        <h1>chatbot-test</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Message..."
              aria-label="Message..."
              aria-describedby="basic-addon2"
              name="msg"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              Send
            </Button>
          </InputGroup>
        </form>
        {input === "" ? (
          ""
        ) : (
          <div style={{ maxWidth: "500px", textAlign: "center" }}>
            <Badge bg="dark">input</Badge> {input}
          </div>
        )}
        {isSubmitted ? (
          <div style={{ maxWidth: "500px", textAlign: "center" }}>
            {loading ? (
              "loading..."
            ) : (
              <div>
                <Badge bg="success">response</Badge> {response}
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
