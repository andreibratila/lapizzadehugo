"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { z } from "zod";

import { Loading } from "@/data/svg";
import { sendMessage, generateInputClass } from "@/helpers";
import { enviarMail } from "@/actions/enviarMail.action";
import type { IFormState } from "@/interface/Mail";

export const ReactForm = () => {
  const [formData, setFormData] = useState<IFormState>({
    name: "",
    email: "",
    subject: "",
    phone: null,
    message: "",
    termsConfirmed: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    type: false,
    text: "",
    open: false,
    title: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? (value ? parseInt(value, 10) : null) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      sendMessage.parse(formData);
      setErrors({});

      await enviarMail(formData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: null,
        message: "",
        termsConfirmed: false,
      });

      setModal({
        open: true,
        text: "Nos pondremos en contacto contigo en breve.",
        title: "Email enviado",
        type: false,
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formErrors: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          formErrors[error.path[0] as string] = error.message;
        });
        setErrors(formErrors);
      } else {
        setModal({
          open: true,
          text: "Contacta con administración",
          title: "Algo ha ido mal!",
          type: true,
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      {modal.open && (
        <div className="fixed inset-0 z-[999] flex justify-center items-center">
          <div
            className={`${
              modal.type ? "bg-red-200" : "bg-green-200"
            } p-[2vw]  fixed  tb:max-w-[500px] max-w-[60vw] rounded-3xl`}
          >
            <h1 className="text-center text-4xl font-bold mb-5">
              {modal.title}
            </h1>
            <h2 className="text-center text-xl">{modal.text}</h2>

            <div className="flex place-content-center place-items-center mt-4">
              <button
                onClick={() => setModal({ ...modal, open: false })}
                className="hover:scale-110 transition-all duration-300 text-white bg-black rounded-xl text-xl py-2 px-4"
              >
                CERRAR
              </button>
            </div>
          </div>
          <div
            className=" top-0 w-full h-full"
            onClick={() => setModal({ ...modal, open: false })}
          ></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <label
            className={`block text-gray-700 text-sm font-bold mb-2 ${
              errors.name && "text-red-700"
            }`}
          >
            Nombre: {errors.name && <span>{errors.name}</span>}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className={generateInputClass(errors.name)}
          />
        </div>

        <div>
          <label
            className={`block text-gray-700 text-sm font-bold mb-2 ${
              errors.email && "text-red-700"
            }`}
          >
            Email: {errors.email && <span>{errors.email}</span>}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className={generateInputClass(errors.email)}
          />
        </div>

        <div className="">
          <label
            className={`block text-gray-700 text-sm font-bold mb-2 ${
              errors.subject && "text-red-700"
            }`}
          >
            Asuto: {errors.subject && <span>{errors.subject}</span>}
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            className={generateInputClass(errors.subject)}
          />
        </div>

        <div className="">
          <label
            className={`block text-gray-700 text-sm font-bold mb-2 ${
              errors.phone && "text-red-700"
            }`}
          >
            Teléfono: {errors.phone && <span>{errors.phone}</span>}
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone ? formData.phone.toString() : ""}
            onChange={handleChange}
            className={generateInputClass(errors.phone)}
          />
        </div>

        <div>
          <label
            className={`block text-gray-700 text-sm font-bold mb-2 ${
              errors.message && "text-red-700"
            }`}
          >
            Mensaje: {errors.message && <span>{errors.message}</span>}
          </label>
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            className={generateInputClass(errors.message)}
            rows={4}
          />
        </div>

        <div className="flex items-start mb-4">
          <input
            id="terms"
            name="termsConfirmed"
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            onChange={() =>
              setFormData({
                ...formData,
                termsConfirmed: !formData.termsConfirmed,
              })
            }
            checked={formData.termsConfirmed}
          />
          <div className="ml-2 block text-sm">
            <label
              htmlFor="terms"
              className={`text-gray-900 ${
                errors.termsConfirmed && "text-red-700"
              }`}
            >
              Acepto la{" "}
              <Link href="/politica-de-privacidad" className="font-bold">
                política de privacidad
              </Link>{" "}
              {errors.termsConfirmed && (
                <span className="text-red-700">{errors.termsConfirmed}</span>
              )}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {!loading ? (
            "Enviar"
          ) : (
            <Image src={Loading} className="w-6 h-auto" alt="Cargando" />
          )}
        </button>
      </form>
    </>
  );
};
