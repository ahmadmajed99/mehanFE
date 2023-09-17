import React from "react";
import styles from "./contact.module.css";
import icon1 from "../../assets/assets/Icons/icons8-envelope-48.png";
import icon2 from "../../assets/assets/Icons/icons8-globe-48.png";
import icon3 from "../../assets/assets/Icons/icons8-location-50.png";
import icon4 from "../../assets/assets/Icons/icons8-phone-48.png";
import icon5 from "../../assets/assets/Icons/icons8-printer-64.png";
import { useState, useRef } from "react";
import axios from "axios";
import { MenuBar, Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Alert from "../../components/Alert";
const Contact = () => {
  const [menubar, setMenuBar] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const submit = async (event) => {
    if (fullName.length === 0 || email.length === 0 || text.length === 0) {
      setOpen(true);
      setSeverity("error");
      return setMessage("Please fill all fields!");
    }
    event.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName: fullName, email: email, text: text }),
    };
    try {
      const fetchResponse = await fetch(
        `https://mehan-consulting.onrender.com/api/contact`,
        settings
      );
      if (fetchResponse.status === 200) {
        event.preventDefault();
        setOpen(true);
        setSeverity("success");
        setMessage("Your Email is sent!");
        setEmail("");
        setFullName("");
        setText("");
      }
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  return (
    <>
      <Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.c1}>
            <div>
              <h1 className={styles.contactTitle}>Contact Us</h1>
              <p className={styles.desc}>
                Al Khuwair, PO Box 1677, PC 122, Sultanate Of Oman
              </p>
              <p className={styles.desc}>(+968) 2448 7535 - (+968) 9887 7660</p>
              <p className={styles.desc}>info@mehanconsulting.com</p>
            </div>
            <div>
              <h3 className={styles.followTitle}>Follow Us</h3>
              <ul className={styles.unorderList}>
                <li class="">
                  <a
                    href="https://www.facebook.com/profile.php?id=100066260061041&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 32 32"
                    >
                      <path d="M12.026 6.81v4.13H9v5.051h3.026V31h6.216V15.992h4.171s.391-2.422.58-5.07h-4.728V7.469c0-.516.678-1.21 1.348-1.21H23V1.001h-4.605c-6.523 0-6.369 5.055-6.369 5.81z"></path>
                    </svg>
                  </a>
                </li>
                <li class="">
                  <a
                    href="https://twitter.com/llumarfilms?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 32 32"
                    >
                      <path d="M31 6.883a12.292 12.292 0 01-3.534.969 6.178 6.178 0 002.705-3.402 12.386 12.386 0 01-3.911 1.494A6.137 6.137 0 0021.768 4a6.154 6.154 0 00-5.995 7.555 17.473 17.473 0 01-12.684-6.43 6.103 6.103 0 00-.832 3.093 6.153 6.153 0 002.737 5.122 6.162 6.162 0 01-2.788-.772v.077a6.161 6.161 0 004.936 6.035 6.225 6.225 0 01-1.622.216c-.397 0-.782-.039-1.159-.114a6.159 6.159 0 005.748 4.274 12.346 12.346 0 01-7.643 2.63c-.497 0-.986-.03-1.468-.084a17.398 17.398 0 009.433 2.769c11.321 0 17.509-9.377 17.509-17.509l-.021-.797a12.291 12.291 0 003.078-3.179z"></path>
                    </svg>
                  </a>
                </li>
                <li class="">
                  <a
                    href="https://www.linkedin.com/in/mehan-consulting-78b93a1a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path d="M29.333 18.777v9.83h-5.716v-9.172c0-2.304-.827-3.876-2.896-3.876-1.579 0-2.519 1.06-2.933 2.085-.151.366-.19.877-.19 1.389v9.574h-5.717s.077-15.534 0-17.144h5.717v2.43l-.038.055h.038v-.055c.76-1.166 2.116-2.833 5.152-2.833 3.762 0 6.582 2.45 6.582 7.716zM5.902 3.2c-1.956 0-3.235 1.279-3.235 2.961 0 1.646 1.242 2.964 3.159 2.964h.038c1.994 0 3.234-1.318 3.234-2.964C9.06 4.479 7.858 3.2 5.902 3.2zM3.006 28.608h5.715V11.464H3.006v17.144z"></path>
                    </svg>
                  </a>
                </li>
                <li class="">
                  <a
                    href="https://instagram.com/mehan_consulting?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 8.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 12.188A4.695 4.695 0 0111.312 16c0-2.586 2.104-4.688 4.688-4.688s4.688 2.102 4.688 4.688A4.695 4.695 0 0116 20.688zm8.063-11.751a.999.999 0 110-1.997.999.999 0 010 1.997zM21.625 1h-11.25A9.376 9.376 0 001 10.375v11.25A9.376 9.376 0 0010.375 31h11.25A9.376 9.376 0 0031 21.625v-11.25A9.376 9.376 0 0021.625 1zm6.563 20.625a6.57 6.57 0 01-6.563 6.563h-11.25a6.57 6.57 0 01-6.563-6.563v-11.25a6.57 6.57 0 016.563-6.563h11.25a6.57 6.57 0 016.563 6.563v11.25z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form className={styles.c2}>
            <input placeholder="Full Name" className={styles.inputField} />
            <input placeholder="Email" className={styles.inputField} />
            <textarea
              placeholder="Type a message . . ."
              className={styles.inputTextarea}
            />
            <div className={styles.submitBtnContainer}>
              <button className={styles.submitBtn}>Submit</button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUxkGobyTX4jK8sY_5-E7QpTfhk0WBjuLjsqxw99INpOEuag/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.uploadBtn}
              >
                Upload Resume
              </a>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Alert
          message={message}
          open={open}
          setOpen={setOpen}
          severity={severity}
        ></Alert>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
