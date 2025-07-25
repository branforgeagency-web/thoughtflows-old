import { useState } from "react"
import { useForm } from "react-hook-form"

export default function ZoomSignupForm({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
    }
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after successful submission
    setTimeout(() => {
      reset()
      setIsSuccess(false)
    }, 3000)
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
            <h1 className="text-3xl md:text-4xl font-medium" style={{ color: "#003366" }}>
              Sign Up For a
              <span className="block text-4xl md:text-5xl font-bold mt-1">
                Free Trail lesson by zoom
              </span>
            </h1>
            
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
                      minLength: {
                        value: 10,
                        message: "Phone number must be at least 10 digits"
                      }
                    })}
                    placeholder="Phone number" 
                    type="tel"
                    className="w-full h-14 rounded-md bg-white px-4 border border-gray-300"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <input 
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="Subject" 
                    className="w-full h-14 rounded-md bg-white px-4 border border-gray-300"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
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
