import { render } from "solid-js/web";
import "./index.css";
import { createSignal } from "solid-js";

const NewTab = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="h-screen w-screen flex flex-col gap-8 items-center justify-center bg-gray-900 text-white">
        <div class="text-6xl">Solid.js + Rspack + Tailwindcss</div>
        <button
          class="hover:bg-blue-800 bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count() + 1)}
        >
          Count : {count()}
        </button>
      </div>
    </>
  );
};

render(() => <NewTab />, document.getElementById("root") as HTMLElement);
