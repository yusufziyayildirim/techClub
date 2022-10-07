import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const SendMail = ({ styles, width }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Get value from inputs 
  const getDataFromForm = () => {
    return {
      firstName: formRef.current[0].value,
      lastName: formRef.current[1].value,
      email: formRef.current[2].value,
      phone: formRef.current[3].value,
      cv: formRef.current[4].files[0]
    }
  }
  // It is working when form submited
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    // Appending input values ​​to the formData
    Object.entries(getDataFromForm()).forEach(([key, value]) => formData.append(key, value));
    // To disabled submit button
    setLoading(true)
    // HTTP request
    const promiseThen = axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/coop/submit",
      data: formData,
      headers: { 'content-type': 'multipart/form-data' },
    }).then(
      //  To enabled submit button
      () => setLoading(false)
    )
    // Show the response to the user
    await toast.promise(promiseThen, {
      loading: 'Loading',
      success: 'Your internship application has been received..!',
      error: (err) => { setLoading(false); return (err.response.data.message.substring(0, err.response.data.message.indexOf('.'))) },
    });
    // Cleaning form elements when form posted
    formRef.current.reset();
  }

  return (
    <div>
      {/* Sendmail background image */}
      <div className='bg-about-image absolute w-full min-h-screen bg-center bg-cover'></div>
      {/* Sendmail content */}
      <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className="!max-w-lg relative mx-auto h-screen py-8 px-3 xs:px-0  flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-[#FF8D02] mb-3">Send CV</h1>
        {/* Cv Form */}
        <div style={width < 485 && width > 475 && width * 0.0021 < 1 ? styles.scale : {}} className='bg-white py-10 px-6 rounded-xl shadow-[0px_20.0px_30.0px_rgba(38,57,77,0.38)] w-full h-screen flex items-center justify-center xs:h-auto xs:block'>
          <form onSubmit={handleSubmit} encType="multipart/form-data" ref={formRef}>
            <div className="grid gap-6 mb-6 xs:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name *</label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name *</label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email *</label>
                <input
                  type="email"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="example@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone *</label>
                <input
                  type="text"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload CV *</label>
              <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                accept="application/pdf"
              />
              <p className="mt-1 text-sm text-gray-500" id="file_input_help">You can only upload files with PDF extension <br></br> (Max : 2MB)</p>
            </div>
            <button type="submit" disabled={loading} className={`${loading ? "cursor-not-allowed" : ""}  bg-[#FF8D02] text-white hover:bg-yellow-500 focus:ring-2 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors`}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SendMail