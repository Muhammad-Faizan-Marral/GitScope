// components/SearchBar.tsx
"use client";
import { FormEvent, useState } from "react";
import { useStore } from "@/app/lib/store";
import { ToastContainer, Bounce, toast } from "react-toastify";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");

  const setUserInfo = useStore((s) => s.setUserInfo);
  const setRepos = useStore((s) => s.setRepos);
  const setLoading = useStore((s) => s.setLoading);
  const setError = useStore((s) => s.setError);
  const setPage = useStore((s) => s.setPage);
  const perPage = useStore((s) => s.perPage);
  const setUsername = useStore((s) => s.setUsername);


  const notify = () =>
    toast("Input Feild Required!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const fetchUserAndFirstPage = async (u: string) => {
    setLoading(true);
    setError(null);
    setUsername(u);

    try {
      // Validate username
      const userRes = await fetch(
        `/api/github/repo/user?username=${encodeURIComponent(u)}`
      );
      if (!userRes.ok) {
        const err = await userRes.json();
        setError(err?.error || "User fetch failed");
        setRepos([]);
        setLoading(false);
        return;
      }
      const user = await userRes.json();
      setUserInfo(user);
      console.log(user);

      
      // Fetch first page repos
      const repoRes = await fetch(
        `/api/github/repo/repos?username=${encodeURIComponent(
          u
        )}&page=1&per_page=${perPage}`
      );

      if (!repoRes.ok) {
        const err = await repoRes.json();
        setError(err?.error || "Repos fetch failed");
        setRepos([]);
        setLoading(false);
        return;
      }

      const { repos } = await repoRes.json();
      console.log(repos);
      setRepos(repos || []);
      setPage(1);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputValue == "") {
      notify();
      console.log("empty input");
    } else {
      console.log("User input:", inputValue);
      setInputValue("");
      fetchUserAndFirstPage(inputValue.trim());
    
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="relative w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <svg
            onClick={handleSubmit}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2} // notice number without quotes
              d="M21 21l-4.35-4.35m0 0A7 7 0 104.65 4.65a7 7 0 0012 12z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search user...."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-transparent border border-gray-500 rounded-lg py-2 pl-14 pr-8 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-300"
          />
        </form>
      </div>
    </>
  );
}
