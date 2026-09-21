import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { coursesList } from "./coursesList"
import { isValidPhone, normalizePhone, PHONE_ERROR } from "./utils/phone"

export default function ZoomSignupForm({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
    }
  })

  async function onSubmit(values) {
    setSubmitError('')
    setIsSubmitting(true)

    try {
      const templateParams = {
        to_email: 'info@thoughtflows.in',
        from_name: values.name,
        from_email: values.email,
        phone: normalizePhone(values.phone),
        course: values.course,
        subject: `Free Zoom Trial Registration - ${values.name}`,
        full_message: `
          New Free Zoom Trial Registration:
          
          Name: ${values.name}
          Email: ${values.email}
          Phone: ${values.phone}
          Course: ${values.course}
        `
      };

      await emailjs.send(
        'service_2anzqj9',
        'template_vx3lkna',
        templateParams,
        "KLhirNBaXDhIlDonK"
      );

      setIsSuccess(true)
      // Reset form after successful submission
      setTimeout(() => {
        reset()
        setIsSuccess(false)
        onClose()
      }, 3000)

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Something went wrong. Please try again or call us on +91 93845 76852.');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[80%] max-w-6xl p-6 md:p-8 lg:p-10 mx-auto rounded-lg relative"
        style={{
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#c9edf3"
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold bg-[#c9edf3]"
          style={{ cursor: 'pointer' }}
        >
          ×
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium" style={{ color: "#003366" }}>
              Sign Up For a
              <span className="block text-4xl md:text-5xl font-bold mt-1">
                Free Trial lesson by zoom
              </span>
            </h2>

            {isSuccess ? (
              <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you for signing up! We'll contact you soon to schedule your free lesson.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full h-14 rounded-md bg-white px-4 border border-gray-300"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="Mail Id"
                    type="email"
                    className="w-full h-14 rounded-md bg-white px-4 border border-gray-300"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      validate: (v) => isValidPhone(v) || PHONE_ERROR
                    })}
                    placeholder="Phone number"
                    type="tel"
                    className="w-full h-14 rounded-md bg-white px-4 border border-gray-300"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <select
                    {...register("course", { required: "Please select a course" })}
                    className="w-full h-14 rounded-md bg-white px-4 border border-gray-300"
                  >
                    <option value="">Select Course</option>
                    {coursesList.map((group) => (
                      <optgroup key={group.category} label={group.category}>
                        {group.courses.map(course => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="OTHER">Other</option>
                  </select>
                  {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
                </div>

                {submitError && <p role="alert" className="text-red-500 text-sm">{submitError}</p>}
                <button
                  type="submit"
                  className="w-32 h-14 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#003366" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
