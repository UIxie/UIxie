"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AuthHeader from "./AuthHeader";
import AuthForm from "./AuthForm";
import SocialDivider from "./SocialDivider";
import SocialLogin from "./SocialLogin";
import AuthToggle from "./AuthToggle";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function AuthComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      if (isSignUp) {
        const first_name = formData.get("first_name") as string;
        const last_name = formData.get("last_name") as string;

        const response = await axios.post(
          "http://localhost:5000/users/create",
          {
            first_name,
            last_name,
            email,
            password,
          },
        );

        console.log("Usuario creado:", response.data);
        alert("Registro exitoso");
      } else {
        const response = await axios.post("http://localhost:5000/users/login", {
          email,
          password,
        });

        const { token } = response.data;
        localStorage.setItem("token", token);

        window.location.href = "http://localhost:3000/";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al procesar la solicitud");
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("github", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("GitHub login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm space-y-6"
      >
        <AuthHeader isSignUp={isSignUp} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AuthForm
            isSignUp={isSignUp}
            isLoading={isLoading}
            onSubmit={handleSubmit}
          />
        </motion.div>
        <SocialDivider />
        <SocialLogin
          onGoogleLogin={handleGoogleLogin}
          onGitHubLogin={handleGitHubLogin}
        />
        <AuthToggle
          isSignUp={isSignUp}
          onToggle={() => setIsSignUp(!isSignUp)}
        />
      </motion.div>
    </div>
  );
}
