import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <br />
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" autocomplete="name" onChange={this.handleChange} />
            </label>
          </p>
          <br />
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" autocomplete="email" onChange={this.handleChange} />
            </label>
          </p>
          <br />
          <p>
            <label>
              Your Message:<br />
              <textarea name="message" cols="80" placeholder="A hundred year life span is not enough..." onChange={this.handleChange} />
            </label>
          </p>
          <br />
          <p>
            <button type="submit">Send</button>
          </p>
          {/* --- STYLES --- */}
          <style jsx>{`
            input {
              width: 100%;
              height: 2rem;
              caret-color: #1eaedb;
              margin-bottom: .5rem;
            }

            textarea {
              width: 100%;
              height: 6rem;
            }

            button {
              font-family: "Do Hyeon", sans-serif;
              font-size: 30px;
              float: right;
              text-transform: uppercase;

            }

            button:hover {
                background-color: #3e3e3c;
              color: #1eaedb;
            }
          `}</style>
        </form>
      </div>
    );
  }
}
