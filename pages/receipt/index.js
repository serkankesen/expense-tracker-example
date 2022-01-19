import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIncomes } from "../actions/income";
import { fetchExpenses } from "../actions/expense";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Chart } from "react-google-charts";

export const options = {
  title: "Gider Dağılımı",
};

export default function Receipt() {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.incomes.incomes);
  const expenses = useSelector((state) => state.expenses.expenses);
  const data = [["Gelirler", "Tutar"]];
  expenses.map((expense) => data.push([expense.title, expense.price]));
  console.log(data);
  useEffect(() => {
    dispatch(fetchExpenses("expenses"));
    dispatch(fetchIncomes("incomes"));
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Özet</title>
        <meta name="description" content="Özetim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Özet
              </h3>
              <p className="mt-1 text-sm text-gray-600">Gelir/Gider özetiniz</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form noValidate autoComplete="off">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-8">
                      Gelir: {incomes.reduce((a, b) => a + b.price, 0)}
                    </div>
                    <div className="col-span-8">
                      Gider: {expenses.reduce((a, b) => a + b.price, 0)}
                    </div>
                    <div className="col-span-8">
                      Net:{" "}
                      {incomes.reduce((a, b) => a + b.price, 0) -
                        expenses.reduce((a, b) => a + b.price, 0)}
                    </div>
                    <div className="col-span-8 ">
                      {expenses.length > 0 && (
                        <Chart
                          chartType="PieChart"
                          data={data}
                          options={options}
                          width={"100%"}
                          height={"400px"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
