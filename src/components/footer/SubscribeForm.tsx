import * as React from "react";
import { SubscribeFormProps } from "./types";

export const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="email" className="text-base leading-7">
        Subscribe
      </label>
      <div className="flex flex-col mt-3 w-full text-sm rounded-md max-w-[248px] text-slate-500">
        <div className="flex gap-5 justify-between pl-4 bg-white rounded-md ">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="my-auto bg-blend-normal w-full border-none focus:outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="flex shrink-0 bg-[#0081FE] rounded-r-md h-[50px] w-[50px] items-center justify-center"
            aria-label="Subscribe"
          >
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z" fill="white"/>
</svg>
            </button>
          </div>
      </div>
      <div className="mt-3 text-xs leading-5 opacity-60">
        Hello, we are 1Lane. We provide strategic distribution solutions for
        music and other content, ensuring that our artists' work reaches the
        widest audience possible across all major platforms.
      </div>
    </form>
  );
};
