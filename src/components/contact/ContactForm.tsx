"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  name: string;
  email: string;
  business?: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      toast.error("Something went wrong. Please email hello@narinderkumar.com.");
      return;
    }

    toast.success("Thank you. I’ll reply as soon as I can.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          className="mt-2"
          autoComplete="name"
          {...register("name", { required: "Please enter your name." })}
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-brand-pink">{errors.name.message}</p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          className="mt-2"
          autoComplete="email"
          {...register("email", {
            required: "Please enter your email.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email.",
            },
          })}
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-brand-pink">{errors.email.message}</p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="business">Business (optional)</Label>
        <Input id="business" className="mt-2" {...register("business")} />
      </div>
      <div>
        <Label htmlFor="message">How can I help?</Label>
        <Textarea
          id="message"
          className="mt-2"
          {...register("message", { required: "Please share a short message." })}
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-brand-pink">{errors.message.message}</p>
        ) : null}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
