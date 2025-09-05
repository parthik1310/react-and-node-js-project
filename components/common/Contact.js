"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";

const Contact = ({ black_background }) => {
    const methods = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const handleFormSubmit = async (values) => {
        await axios
            .post(`/api/send-email`, values)
            .then((response) => {
                if (response.data?.status === 200) {
                    console.log(response.data);
                    setSuccessMessage(response.data?.message);
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <>
            <section className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1">
                <div className={`${black_background ? "for-bgc-black py-130 rpy-100" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-40">
                                        <span className="sub-title mb-15">Get In Touch</span>
                                        <h2>
                                            Let’s talk about <span>Your Project</span>
                                        </h2>
                                        <p>
                                            Share your project details, and let&apos;s turn your vision into
                                            reality. I&apos;m here to create impactful designs that resonate
                                            with your audience and elevate your brand.
                                        </p>
                                    </div>
                                    <ul className="list-style-two">
                                        <li>5+ Years Of Experience</li>
                                        <li>Professional Web Designer</li>
                                        <li>Mobile Apps Design</li>
                                        <li>Custom Design Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
                                    <FormProvider {...methods}>
                                        <form
                                            id="contactForm"
                                            className="contactForm"
                                            name="contactForm"
                                            onSubmit={handleSubmit(handleFormSubmit)}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Full Name</label>
                                                        <div className="form-input-wrapper">
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                className="form-control"
                                                                {...register("name", {
                                                                    required: "Please enter your Name",
                                                                })}
                                                            />
                                                            <label htmlFor="name" className="for-icon">
                                                                <i className="far fa-user"></i>
                                                            </label>
                                                        </div>
                                                        {errors?.name && (
                                                            <div className="help-block with-errors">
                                                                {errors?.name?.message}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email Address</label>
                                                        <div className="form-input-wrapper">
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                {...register("email", {
                                                                    required: "Please enter your Email",
                                                                })}
                                                            />
                                                            <label htmlFor="email" className="for-icon">
                                                                <i className="far fa-envelope"></i>
                                                            </label>
                                                        </div>
                                                        {errors?.email && (
                                                            <div className="help-block with-errors">
                                                                {errors?.email?.message}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="phone_number">Phone Number</label>
                                                        <div className="form-input-wrapper">
                                                            <input
                                                                type="text"
                                                                id="phone_number"
                                                                name="phone_number"
                                                                className="form-control"
                                                                {...register("phone", {
                                                                    required:
                                                                        "Please enter your Phone Number",
                                                                })}
                                                            />
                                                            <label
                                                                htmlFor="phone_number"
                                                                className="for-icon">
                                                                <i className="far fa-phone"></i>
                                                            </label>
                                                        </div>
                                                        {errors?.phone && (
                                                            <div className="help-block with-errors">
                                                                {errors?.phone?.message}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="subject">Subject</label>
                                                        <div className="form-input-wrapper">
                                                            <select
                                                                name="subject"
                                                                id="subject"
                                                                className="form-control"
                                                                {...register("subject", {
                                                                    required: "Please enter your Subject",
                                                                })}>
                                                                <option disabled value="Subject" selected>
                                                                    Subject
                                                                </option>
                                                                <option value="I would like to discussed">
                                                                    I would like to discussed
                                                                </option>
                                                                <option value="Mobile App UI/UX Design">
                                                                    Mobile App UI/UX Design
                                                                </option>
                                                                <option value="Website UI/UX Design">
                                                                    Website UI/UX Design
                                                                </option>
                                                                <option value="Social Media Post Design">
                                                                    Social Media Post Design
                                                                </option>
                                                                <option value="Graphics Design">
                                                                    Graphics Design
                                                                </option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                            <label htmlFor="subject" className="for-icon">
                                                                <i className="far fa-angle-down"></i>
                                                            </label>
                                                        </div>
                                                        {errors?.subject && (
                                                            <div className="help-block with-errors">
                                                                {errors?.subject?.message}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea
                                                            name="message"
                                                            id="message"
                                                            className="form-control"
                                                            rows="4"
                                                            {...register("message", {
                                                                required: "Please enter your Message",
                                                            })}></textarea>
                                                        {errors?.message && (
                                                            <div className="help-block with-errors">
                                                                {errors?.message?.message}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-0">
                                                        <button type="submit" className="theme-btn">
                                                            Send Us Message{" "}
                                                            <i className="far fa-angle-right"></i>
                                                        </button>
                                                        <div id="msgSubmit" className="hidden"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </FormProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
