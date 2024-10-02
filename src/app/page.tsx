"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./globals.css";
import { RevealWrapper } from "next-reveal";
import { RevealList } from  'next-reveal'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const { error } = await supabase.from("subscribers").insert([{ email }]);

      if (error) throw error;

      setMessage({
        type: "success",
        text: "Thanks for subscribing! We'll keep you updated.",
      });
      setEmail("");
    } catch (error) {
      setMessage({
        type: "error",
        text: "This email is already subscribed or invalid.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
        <nav className="nav">
          <RevealWrapper delay={2300}>
          <div className="logo">
            <img src="/logo.png" alt="Kishu Logo" width={100} />
          </div>
          </RevealWrapper>
          <RevealWrapper delay={2300}>
          <div className="social-links">
            <a href="mailto:kishucollections@gmail.com">
              <i className="fa fa-envelope" />
            </a>
            <a href="https://www.instagram.com/kishucollections/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://x.com/kishustore">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://in.pinterest.com/kishucollections/">
              <i className="fab fa-pinterest" />
            </a>
          </div>
          </RevealWrapper>
        </nav>

      <div className="content">

        <h1>
  <RevealList interval={100} delay={100}>
    <span className="element">C</span>
    <span className="element">o</span>
    <span className="element">m</span>
    <span className="element">i</span>
    <span className="element">n</span>
    <span className="element">g</span>
    <span className="element">&nbsp;</span>
    <span className="element">S</span>
    <span className="element">o</span>
    <span className="element">o</span>
    <span className="element">n</span>
    <span className="element accent-dark">.</span>
  </RevealList>
</h1>

<RevealWrapper delay={2300}>

        <p className="paragraph">
          Welcome to Kishu Collections, your destination for elegant traditional
          desi women&apos;s wear! Our collection is <strong>launching soon</strong>{" "}
          on both web and app platforms.
          <br />
          Sign up for updates - no spam, we promise!
          <br />
          Want to shop now? Head over to our&nbsp; 
          <a
            className="accent-dark"
            href="https://www.instagram.com/kishucollections/"
          >
            Instagram
          </a>&nbsp;
           and start shopping today!
        </p>
</RevealWrapper>
<RevealWrapper delay={3000}>

        <form className="email-form" id="emailForm" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            className="email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Notify Me"}
          </button>
        </form>

        {message && (
          <p className={`message ${message.type}`}>{message.text}</p>
        )}
        </RevealWrapper>
      </div>
    
    </div>
  );
}
