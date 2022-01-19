/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useDispatch } from "react-redux";
import { createExpense } from "../actions/expense";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NotificationManager } from "react-notifications";

export default function Expense() {
  const dispatch = useDispatch();

  const expenseSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    payee: Yup.string().required(),
    type: Yup.string().required(),
    price: Yup.number().required(),
  });

  const { register, handleSubmit, control, formState, reset } = useForm({
    resolver: yupResolver(expenseSchema),
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    dispatch(createExpense({ ...data }, "expenses"));
    clearForm();
    NotificationManager.success("İşleminiz kaydedildi", "Başarılı");
  };

  const clearForm = () => {
    reset();
  };

  return (
    <div>
      <Head>
        <title>Expense Tracker | Giderler </title>
        <meta name="description" content="Gider Takibim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Gider Ekle
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Hangi alanda aylık sabit gideriniz var?
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-8 ">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gider Başlığı
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="off"
                        {...register("title")}
                        error={errors.title ? true : false}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-8 ">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gider Tutarı
                      </label>
                      <input
                        type="text"
                        {...register("price")}
                        error={errors.price ? true : false}
                        name="price"
                        id="price"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-8 sm:col-span-3">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gider Türü
                      </label>

                      <select
                        id="type"
                        {...register("type")}
                        error={errors.type ? true : false}
                        name="type"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="bank_credit">Banka Kredi</option>
                        <option value="credit_cart">Kredi Kartı</option>
                        <option value="dues">Aidat</option>
                        <option value="shop">Market</option>
                        <option value="fuel_oil">Benzin</option>
                        <option value="market">Pazar</option>
                        <option value="electric">Elektrik</option>
                        <option value="water">Su</option>
                        <option value="gas">Doğalgaz</option>
                        <option value="phone">Telefon</option>
                        <option value="internet">İnternet Harcama</option>
                      </select>
                    </div>

                    <div className="col-span-8 sm:col-span-5">
                      <label
                        htmlFor="payee"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Alacaklı
                      </label>
                      <input
                        type="text"
                        name="payee"
                        id="payee"
                        placeholder="Alacaklı/Banka Adı/Telekom Adı/Market Adı/..."
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("payee")}
                        error={errors.payee ? true : false}
                      />
                    </div>

                    <div className="col-span-8">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gider Açıklaması
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        {...register("description")}
                        error={errors.description ? true : false}
                        rows={2}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
