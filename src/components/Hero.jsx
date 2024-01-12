const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-cyan-400 to-slate-50 h-[90vh] px-12 lg:py-8 py-4">
      <div className="h-full xl:w-9/12 w-full lg:flex lg:px-4 pt-4 rounded-xl shadow-xl bg-gradient-to-t from-amber-500 to-gray-50">
        

        <div className="flex flex-col lg:h-full h-2/5 lg:flex-1 gap-4 xl:gap-12 justify-center px-6 sm:px-32 lg:px-12 mx-auto xl:items-start">
          <div className="flex items-center gap-4">
            <div className="md:w-16 md:h-16 w-12 h-12 relative bg-white shadow-lg rounded-full flex items-center justify-center">
              <svg
                className="md:w-10 md:h-10 w-6 h-6 text-amber-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <div>
              <p className="text-base md:text-lg">+91-999-999-9999</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="md:w-16 md:h-16 w-12 h-12 relative bg-white shadow-lg rounded-full flex items-center justify-center">
              <svg
                className="md:w-10 md:h-10 w-6 h-6 text-amber-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <div>
              <p className="text-base md:text-lg">+91-999-999-9999</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="md:w-16 md:h-16 w-12 h-12 relative bg-white shadow-lg rounded-full flex items-center justify-center">
              <svg
                className="md:w-10 md:h-10 w-6 h-6 text-amber-700 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </div>
            <div>
              <p className="text-base md:text-lg">
                Agra Uttar PradeshM
                <br /> 110062
              </p>
            </div>
          </div>
        </div>

        <div className="lg:h-full h-3/5">
          <img
            src="/doctor.png"
            alt="Doctor"
            className="w-full h-full lg:object-cover object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
