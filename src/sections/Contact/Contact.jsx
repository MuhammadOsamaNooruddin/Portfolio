import { useState } from "react";
import emailjs from '@emailjs/browser';import Alert from "../../components/Alert";
; 

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("Success");
    const [alertMessage, setAlertmessage] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleAlertMessage = (type, message) => {
        setShowAlert(true);
        setAlertType(type);
        setAlertmessage(message);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true);
        try{
            console.log("Form submitted:", formData);
            await emailjs.send("service_93xbu3k", "template_c7t1tj6", {
            from_name: formData.name,
            to_name: "Osama",
            from_email: formData.email,
            to_email: "usamanooruddin3@gmail.com",
            message: formData.message
        },"Jg0lWYuEFhIygxCnz");
        setIsLoading(false);
        setShowAlert(true);
        handleAlertMessage("Success", "Email sent successfully!");
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        }catch(err){
        setIsLoading(false);
            console.error("Email sending failed:", err);
        handleAlertMessage("danger", "Failed to send email. Please try again later.");
        }
        // service_93xbu3k
        // template_c7t1tj6 templateID
    }

  return (
    <section className="relative flex items-center c-space section-space mt-20 md:mt-30" id='contactEmail'>
        { showAlert && <Alert type={alertType} message={alertMessage} />}
        <div className="flex flex-col items-center justify-center w-full max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
            <p className="font-normal text-neutral-400">
                Get In Touch
            </p>
            <h2 className="text-heading">Contact</h2>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="field-label" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="field-input field-input-focus"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="mb-5">
                <label className="field-label" htmlFor="name">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="field-input field-input-focus"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="mb-5">
                <label className="field-label" htmlFor="message">Message</label>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Type your message here"
                    className="field-input field-input-focus"
                    autoComplete="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    />
            </div>

            <button type="submit" className="w-full px-1 py-1 text-lg text-center rounded-md cursor-pointer bg-[#00776a] hover-animation">{!isLoading ? "Send" : "Sending"} </button>
        </form>

        </div>

        

    </section>
  )}

export default Contact;