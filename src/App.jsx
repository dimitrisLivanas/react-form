import { createRoot } from "react-dom/client";

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
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-teal-500"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
