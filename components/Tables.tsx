import React, { useState } from "react";
import data from "../data/data.json";
import Button from "./Button";
import DocTypeDetailsModal from "./DocTypeDetailsModal";
import Modal from "./Modal";

const Tables = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [docId, setDocId] = useState(0);
  const [cusipId, setCusipId] = useState(0);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModals = (id: number, cusip: number) => {
    setCusipId(cusip);
    setDocId(id);
    setIsOpen(true);
  };

  return (
    <div className="my-10">
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-4">ID Number</th>
            <th>CUSIP</th>
            <th>Document Type</th>
            <th>Form Type</th>
            <th>POST</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id}
              className={`${
                i % 2 !== 0 && "bg-gray-300"
              }  hover:bg-gray-600 hover:text-white cursor-pointer`}
            >
              <td>{row.id + 1}</td>
              <td>{row.cusip}</td>
              <td className="uppercase">
                {row.doc_type === 1 && "Preliminary pricing supplement"}
                {row.doc_type === 2 && "Amended – free Writing Prospectus"}
                {row.doc_type === 3 && "Free Writing Prospectus"}
                {row.doc_type === 4 &&
                  "Amended – Preliminary pricing supplement"}
                {row.doc_type === 5 && "Final pricing supplement"}
                {row.doc_type === 6 && "Amended – Final pricing supplement"}
              </td>
              <td>{row.form_type}</td>
              <td className="flex justify-center py-2">
                <Button
                  text="Submit"
                  onClick={() => openModals(row.doc_type, row.cusip)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal maxWidth="max-w-5xl" isOpen={isOpen} closeModal={closeModal}>
        <DocTypeDetailsModal
          cusipId={cusipId}
          docId={docId}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
};

export default Tables;
