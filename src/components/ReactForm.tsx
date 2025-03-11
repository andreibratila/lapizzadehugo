'use client';

import { useActionState, useEffect } from 'react';

import Link from 'next/link';

import { toast } from 'sonner';

import {
  type ActionResponse,
  sendEmailAction,
} from '@/actions/sendEmailAction';

const initialState: ActionResponse = {
  success: false,
};
export const ReactForm = () => {
  const [state, action, isPending] = useActionState(
    sendEmailAction,
    initialState,
  );

  useEffect(() => {
    if (state.errors) {
      toast.error(
        'Error enviando el mail, porfavor contacta con administracion',
      );
      console.error('Errors:', JSON.stringify(state.errors, null, 2));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.success('Mensaje enviado correctamente, le contactaremos pronto'),
        (state.success = false);
    }
  }, [state.success]);

  return (
    <form
      action={action}
      className="mb-4 flex flex-col gap-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
    >
      <input
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-1 text-gray-900 shadow-sm focus:border-blue-500"
        type="text"
        name="name"
        placeholder="Tu Nombre"
        required
        maxLength={50}
      />

      <input
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-1 text-gray-900 shadow-sm focus:border-blue-500"
        type="email"
        name="email"
        required
        maxLength={55}
        placeholder="Tu correo electronico"
      />

      <input
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-1 text-gray-900 shadow-sm focus:border-blue-500"
        type="text"
        name="subject"
        required
        maxLength={50}
        placeholder="Asunto"
      />

      <input
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-1 text-gray-900 shadow-sm focus:border-blue-500"
        type="text"
        name="phone"
        minLength={9}
        maxLength={15}
        placeholder="Tu teléfono"
      />

      <textarea
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-1 text-gray-900 shadow-sm focus:border-blue-500"
        name="message"
        placeholder="Tu mensaje"
        required
        maxLength={1000}
        rows={4}
      />

      <div className="mb-4 flex items-start">
        <input
          id="terms"
          name="termsConfirmed"
          type="checkbox"
          required
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <div className="ml-2 block text-sm">
          <label htmlFor="terms" className="text-gray-900">
            Acepto la{' '}
            <Link href="/politica-de-privacidad" className="font-bold">
              política de privacidad
            </Link>{' '}
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        disabled={isPending}
      >
        {!isPending ? 'Enviar' : 'Enviando mensaje...'}
      </button>
    </form>
  );
};
