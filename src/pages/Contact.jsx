import { TitleBar } from "../components/SectionCard"
import './Contact.css'
import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
    };

    return (
        <>
            <div className="about-title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-container">
                <TitleBar title="Let's make your brand brilliant!" />
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label><br />
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Message:</label><br />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <br />
                <button type="submit">Send Message</button>
            </form>

        </>
    )
}