import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700 p-20">
          <h1>Let us get started 👋</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            commodi ipsam voluptas repellat rem consequuntur dolor.
          </p>
        </div>
        <div></div>
      </form>
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
