import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchComponent(props) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-16">
      <Switch
        onClick={props.darkModeToggleFunc}
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-gray-500" : "bg-gray-700"}
          relative inline-flex h-[28px] w-[60px] switch shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-8 bg-gray-900" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] align-center transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    <style>
      {`
       .switch{
        margin-top:3px;
      }
      @media (max-width:800px){
        .switch{
          display:none;
        }
      }
      `}
    </style>
    </div>
  );
}
