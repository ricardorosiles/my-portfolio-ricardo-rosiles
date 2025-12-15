/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Error al enviar mensaje");
      }

      setSuccess("Mensaje enviado correctamente. ¡Gracias por contactarme!");
      form.reset();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input name="name" type="text" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" required />
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea name="message" rows={4} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {success && <p className="success-text">{success}</p>}
        {error && <p className="error-text">{error}</p>}
      </form>
    </section>
  );
}
