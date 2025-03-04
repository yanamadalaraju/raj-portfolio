require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Email transporter (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail email
    pass: process.env.GMAIL_PASS, // Your Gmail App Password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Send email to you (Admin)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "rajeshyanamadala2000@gmail.com", // Change this to your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Me! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">Hello ${name},</h2>
          <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
          <p>Here are the details you provided:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>Feel free to explore more on my website while I get back to you.</p>
          <p>Best regards,</p>
          <p><strong>Rajesh Yanamadala</strong></p>
        </div>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
