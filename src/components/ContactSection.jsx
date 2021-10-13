import React from "react";

export const ContactSection = () => {
  return (
    <section class="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, sunt quos. Ipsum reiciendis quos illum esse non
                voluptatum sequi dolores?
              </p>
            </div>
            <div class="icons">
              <div class="row">
                <i class="fas fa-user"></i>
                <div class="info">
                  <div class="head">Name</div>
                  <div class="sub-title">Prakash Shahi</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-map-marker-alt"></i>
                <div class="info">
                  <div class="head">Address</div>
                  <div class="sub-title">Surkhet, Nepal</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-envelope"></i>
                <div class="info">
                  <div class="head">Email</div>
                  <div class="sub-title">abc@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message Me</div>
            <form action="#">
              <div class="fields">
                <div class="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div class="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div class="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div class="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>
              <div class="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
