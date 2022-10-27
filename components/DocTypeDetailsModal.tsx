import React from "react";
import Button from "./Button";

const DocTypeDetailsModal = ({ cusipId, docId, closeModal }) => {
  return (
    <div className="">
      <h1 className="text-center text-xl font-bold uppercase">
        {docId === 1 && "Preliminary pricing supplement"}
        {docId === 2 && "Amended - free Writing Prospectus"}
        {docId === 3 && "Free Writing Prospectus"}
        {docId === 4 && "Amended - Preliminary pricing supplement"}
        {docId === 5 && "Final pricing supplement"}
        {docId === 6 && "Amended - Final pricing supplement"}
      </h1>

      <p className="text-center font-bold my-2 text-xl">{cusipId}</p>

      <form className="w-11/12 mx-auto mt-10 mb-4">
        <div className="flex gap-x-5 justify-between items-center">
          <h1 className="font-bold text-sm p-2 w-1/6">Launch Date</h1>
          <input
            type="date"
            name="date"
            id=""
            className="w-5/6 border border-gray-300 rounded-lg p-2"
          />
        </div>

        {(docId === 5 || docId === 6) && (
          <>
            <div className="flex gap-x-5 justify-between items-center">
              <h1 className="font-bold text-sm p-2 w-1/6">
                Link of Pricing Supplement
              </h1>
              <input
                type="text"
                name="pricingSupplementLink"
                id=""
                className="w-5/6 border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="flex gap-x-5 justify-between items-center">
              <h1 className="font-bold text-sm p-2 w-1/6">Link of Exhibit</h1>
              <input
                type="text"
                name="exhibitLink"
                id=""
                className="w-5/6 border border-gray-300 rounded-lg p-2"
              />
            </div>
          </>
        )}

        {(docId === 1 || docId === 2 || docId === 3 || docId === 4) && (
          <div className="flex items-center justify-between gap-x-5 py-2">
            <h1 className="font-bold text-sm p-2 w-1/6">Link</h1>
            <input
              type="text"
              name="link"
              //   rows={5}
              className="w-5/6 border border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-x-5 py-2">
          <h1 className="font-bold text-sm p-2 w-1/6">Accession Number</h1>
          <input
            type="number"
            name="accession number"
            id=""
            className="w-5/6 border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex justify-center my-4">
          <Button text="Submit" className="w-1/2" onClick={closeModal} />
        </div>
      </form>
    </div>
  );
};

export default DocTypeDetailsModal;
