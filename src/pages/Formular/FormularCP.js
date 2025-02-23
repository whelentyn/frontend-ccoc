import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        duration: "30 minutes",
        reason: "",
        contactMethod: "Phone",
        location: "Office",
        additionalInfo: "",
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Scheduled: ", formData);
    };

    return (
        <div className="container mt-5">
            <form id="appointment-form" style={{backgroundColor: "var(--g0)"}} className="appointment-form p-4 border rounded" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Schedule an Appointment</h2>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Appointment Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Appointment Time</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Duration</label>
                    <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="30 minutes">30 minutes</option>
                        <option value="1 hour">1 hour</option>
                        <option value="1.5 hours">1.5 hours</option>
                        <option value="2 hours">2 hours</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Reason for Appointment</label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Describe the purpose of your appointment..."
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Preferred Contact Method</label>
                    <div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="contactPhone"
                                name="contactMethod"
                                value="Phone"
                                checked={formData.contactMethod === "Phone"}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label htmlFor="contactPhone" className="form-check-label">Phone</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="contactEmail"
                                name="contactMethod"
                                value="Email"
                                checked={formData.contactMethod === "Email"}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label htmlFor="contactEmail" className="form-check-label">Email</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="contactSMS"
                                name="contactMethod"
                                value="SMS"
                                checked={formData.contactMethod === "SMS"}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label htmlFor="contactSMS" className="form-check-label">SMS</label>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Appointment Location</label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="Office">Office</option>
                        <option value="Remote via Zoom">Remote via Zoom</option>
                        <option value="Client's Address">Client's Address</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Add any additional notes or preferences here..."
                    ></textarea>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        className="form-check-input"
                        required
                    />
                    <label htmlFor="agreement" className="form-check-label">
                        I agree to the terms and conditions.
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Schedule Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
