import { createRoot } from "react-dom/client";
import IMAGES from "../public/images";

const App = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-latoBold">Let us get started 👋</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            commodi ipsam voluptas repellat rem consequuntur dolor.
          </p>
          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            {/* Country input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="country"
              >
                Country
              </label>
              <select
                name="country"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="">United States</option>
                <option value="">United Kingdom</option>
                <option value="">United Arab Emirates</option>
                <option value="">Greece</option>
              </select>
            </div>
            {/* Terms of service */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="terms"
              >
                Terms of service
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                />
                <p className="text-sm font=latoBold text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  soluta magni, fugit est.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Lorem, ipsum dolor!
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
