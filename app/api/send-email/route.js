import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    const payload = await request.json();

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "jariwalasaloni3091@gmail.com",
            pass: "tofwtvywsbtuulof",
        },
    });

    try {
        const info = await transporter.sendMail({
            from: "jariwalasaloni3091@gmail.com",
            to: "sahilmavani01@gmail.com",
            subject: payload?.subject,
            text: `Name: ${payload?.name}\nEmail: ${payload?.email}\nPhone: ${payload?.phone}\nSubject: ${payload?.subject}\nMessage: ${payload?.message}`,
        });

        console.log("Email sent:", info.response);

        return NextResponse.json({
            status: 200,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({
            status: 500,
            message: "Failed to send email",
            error,
        });
    }
}
