import { render } from "solid-js/web";
import "./index.css";
const Popup = () => {
  return (
    <>
      <div class="h-96 w-96 flex flex-col gap-8 items-center justify-center bg-gray-900 text-white">
        <h1 class="text-6xl">Popup</h1>
      </div>
    </>
  );
};

render(() => <Popup />, document.getElementById("root") as HTMLElement);
