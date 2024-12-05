//React Imports
import { useState } from "react";

//Shad Imports
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

//CSS Imports
import "./styles/contactdialog.css";

//Component Imports
import FooterContent from "@/components/FooterContent.tsx"

function ContactDialog() {
    const [open, setOpen] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted");
        setOpen(false); // Close dialog after submission
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost">Contact</Button>
            </DialogTrigger>
            <DialogContent className="contact-dialog">
                <h3>Contact Me</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <Button type="submit">Send</Button>
                </form>
                <div className="contact-footer">
                <FooterContent />
                </div>
            </DialogContent>

        </Dialog>
    );
}

export default ContactDialog;
