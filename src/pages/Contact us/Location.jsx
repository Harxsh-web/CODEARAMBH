import React from "react";

export const Location = () => {
    return (
        <div className="mt-30 px-4">
            <div className="text-left">
                <h2 className="text-3xl font-bold md:text-4xl">How can we help you?</h2>
                <p className="text-xl">
                    Need guidance, troubleshooting, or simply want to connect with fellow enthusiasts? <br />
                    Don't hesitate to reach out for assistance and collaboration opportunities!
                </p>
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-semibold">
                    Reaching{" "}
                    <span className="text-[#65B4D4] font-normal text-2xl">
                        HI-TECH Institute of Engineering & Technology, Ghaziabad
                    </span>
                </h2>
            </div>

            <div className="w-full h-[350px] mt-6 " >
                <iframe
                    title="Hi-Tech Institute Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5454092294053!2d77.49128877550228!3d28.673327175642513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf2c4cac27f99%3A0xd9961659aee6d5b2!2sHi-Tech%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1741631212223!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="rounded-2xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col md:flex-row space-x-10 space-y-5">
                    <div>
                        <h3 className="md:text-3xl text-2xl">Student Co-ordinators</h3>
                        <ul className="space-y-3 md:text-xl">
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl">
                            Faculty Co-ordinators

                        </h3>
                        <ul className="space-y-3 md:text-xl">
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                            <li> name : <a href="tel:+911234567890" className="text-blue-500 hover:underline">
                                +91 12345 67890
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-xl md:text-2xl md:w-[50vw] mt-10 md:mt-0 ">
                    <h2 className="text-3xl font-semibold">Address</h2>
                    <p>Hi-tech Institute of Engineering & Technology
                        26th KM Milestone,
                        NH-9, Ghaziabad,
                        Uttar Pradesh – 201015</p>
                    <a
                        href="https://www.google.com/maps?sca_esv=715d5d5656887f13&rlz=1C1RXQR_enIN1124IN1124&output=search&q=hitech+college&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjnSuuKZNj-6zieDk_gkn6AKnSLKCogWmTELYC4Vpj6g-WWn00XmA4gGIIJ-PmnKVd3JGlcDfFYJQtIaLnXvVy8hY2CveUcFfF3d27KlT4c6eUcSdLJVOezL04y6ywQmt7be_VPsnZomZkwc1xCKXX9aS0DIkBm3TtOmG1fp-GkXpGCi0w&entry=mc&ved=1t:200715&ictx=111"
                        className="text-[#65B4D4] hover:underline ">
                            <i className="fa-solid fa-up-right-from-square"></i>
                        Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
};
