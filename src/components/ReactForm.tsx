'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { z } from 'zod';

import { enviarMail } from '@/actions/enviarMail.action';
import { Loading } from '@/data/svg';
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
            <Image src={Loading} className="h-auto w-6" alt="Cargando" />
          )}
        </button>
      </form>
    </>
  );
};
