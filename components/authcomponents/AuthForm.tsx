"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Lock, Mail, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface AuthFormProps {
  isSignUp: boolean;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export default function AuthForm({
  isSignUp,
  isLoading,
  onSubmit,
}: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {isSignUp && (
        <>
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="firstName"
                name="first_name"
                type="text"
                placeholder="Enter your name"
                required
                className={cn(
                  "pl-10 py-4 transition-all duration-300 focus:ring-2 focus:ring-blue-500",
                  isLoading && "opacity-50 pointer-events-none",
                )}
                disabled={isLoading}
              />
              <UserRoundPen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Enter your lastname"
                required
                className={cn(
                  "pl-10 py-4 transition-all duration-300 focus:ring-2 focus:ring-blue-500",
                  isLoading && "opacity-50 pointer-events-none",
                )}
                disabled={isLoading}
              />
              <UserRoundPen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </>
      )}

      <div className="space-y-2">
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className={cn(
              "pl-10 py-4 transition-all duration-300 focus:ring-2 focus:ring-blue-500",
              isLoading && "opacity-50 pointer-events-none",
            )}
            disabled={isLoading}
          />
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
            className={cn(
              "pl-10 py-4 transition-all duration-300 focus:ring-2 focus:ring-blue-500",
              isLoading && "opacity-50 pointer-events-none",
            )}
            disabled={isLoading}
          />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/forgot-password"
          className="text-sm text-primary hover:text-primary/90 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full py-4 text-base relative overflow-hidden transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-primary"
          >
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </motion.div>
        ) : isSignUp ? (
          "Sign up"
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
