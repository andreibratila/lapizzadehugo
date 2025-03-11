'use client';

import { useState } from 'react';

import Link from 'next/link';

import { z } from 'zod';

import { enviarMail } from '@/actions/enviarMail.action';
import { generateInputClass, sendMessage } from '@/helpers';
import type { IFormState } from '@/interface/Mail';

export const ReactForm = () => {
  const [formData, setFormData] = useState<IFormState>({
    name: '',
    email: '',
    subject: '',
    phone: null,
    message: '',
    termsConfirmed: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    type: false,
    text: '',
    open: false,
    title: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? (value ? parseInt(value, 10) : null) : value,
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
        name: '',
        email: '',
        subject: '',
        phone: null,
        message: '',
        termsConfirmed: false,
      });

      setModal({
        open: true,
        text: 'Nos pondremos en contacto contigo en breve.',
        title: 'Email enviado',
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
          text: 'Contacta con administración',
          title: 'Algo ha ido mal!',
          type: true,
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      {modal.open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div
            className={`${
              modal.type ? 'bg-red-200' : 'bg-green-200'
            } tb:max-w-[500px] fixed max-w-[60vw] rounded-3xl p-[2vw]`}
          >
            <h1 className="mb-5 text-center text-4xl font-bold">
              {modal.title}
            </h1>
            <h2 className="text-center text-xl">{modal.text}</h2>

            <div className="mt-4 flex place-content-center place-items-center">
              <button
                onClick={() => setModal({ ...modal, open: false })}
                className="rounded-xl bg-black px-4 py-2 text-xl text-white transition-all duration-300 hover:scale-110"
              >
                CERRAR
              </button>
            </div>
          </div>
          <div
            className="top-0 h-full w-full"
            onClick={() => setModal({ ...modal, open: false })}
          ></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex flex-col gap-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <div>
          <label
            className={`mb-2 block text-sm font-bold text-gray-700 ${
              errors.name && 'text-red-700'
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
            className={`mb-2 block text-sm font-bold text-gray-700 ${
              errors.email && 'text-red-700'
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
            className={`mb-2 block text-sm font-bold text-gray-700 ${
              errors.subject && 'text-red-700'
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
            className={`mb-2 block text-sm font-bold text-gray-700 ${
              errors.phone && 'text-red-700'
            }`}
          >
            Teléfono: {errors.phone && <span>{errors.phone}</span>}
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone ? formData.phone.toString() : ''}
            onChange={handleChange}
            className={generateInputClass(errors.phone)}
          />
        </div>

        <div>
          <label
            className={`mb-2 block text-sm font-bold text-gray-700 ${
              errors.message && 'text-red-700'
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

        <div className="mb-4 flex items-start">
          <input
            id="terms"
            name="termsConfirmed"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                errors.termsConfirmed && 'text-red-700'
              }`}
            >
              Acepto la{' '}
              <Link href="/politica-de-privacidad" className="font-bold">
                política de privacidad
              </Link>{' '}
              {errors.termsConfirmed && (
                <span className="text-red-700">{errors.termsConfirmed}</span>
              )}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          disabled={loading}
        >
          {!loading ? (
            'Enviar'
          ) : (
            <div role="status">
              <svg
                aria-hidden="true"
                className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </form>
    </>
  );
};
