import React from "react";
import { Link } from "react-router-dom";

export default function ReturnsRefunds() {
  return (
    <div className="min-h-[70vh] bg-linear-to-b from-rose-50 via-pink-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-rose-600">
            <Link to="/" className="hover:text-rose-900">
              Home
            </Link>{" "}
            <span className="text-rose-300">/</span>{" "}
            <span className="font-semibold text-rose-950">
              Returns & Refunds
            </span>
          </div>

          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-rose-950 sm:text-3xl">
            Returns & Refund Policy
          </h1>
        </div>

        <div className="mt-6 space-y-5 rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          {/* Return Window */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">Return Window</h2>
            <p className="mt-2 text-sm leading-6 text-rose-700">
              Returns are accepted within{" "}
              <span className="font-semibold">7 days</span> of delivery.
              Requests raised after this window may not be accepted.
            </p>
          </section>

          {/* Eligibility & Conditions */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">
              Eligibility & Conditions
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-rose-700">
              <li>
                Returns are only accepted if you received an incorrect item or
                an item not listed on your bill due to our error.
              </li>
              <li>
                We recommend recording a short video while opening your parcel
                for proof in case of defective or incorrect items.
              </li>
              <li>
                For branded items, returns are accepted only if original
                packaging and all contents are intact.
              </li>
              <li>
                Personalized products cannot be cancelled or returned once
                processed.
              </li>
              <li>
                A return authorization is mandatory before sending any product.
                Unauthorized returns will be sent back to the customer.
              </li>
            </ul>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">Return Process</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-rose-700">
              <li>Once approved, we will provide a return shipping label.</li>
              <li>
                You must securely pack the product with all original contents.
              </li>
              <li>
                We strongly recommend using original packaging if available.
              </li>
              <li>
                Record a video while packing your return item for verification.
              </li>
              <li>
                Our team will also record an unboxing video upon receiving the
                returned item.
              </li>
            </ul>
          </section>

          {/* How to Initiate */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">
              How to Initiate a Return
            </h2>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-rose-700">
              <li>
                Contact support at{" "}
                <span className="font-semibold">
                  support@pecifycollections.com
                </span>{" "}
                with your order ID.
              </li>
              <li>
                Share images/video if the product is damaged or incorrect.
              </li>
              <li>
                We will arrange pickup (subject to serviceability) or provide
                return instructions.
              </li>
            </ol>
          </section>

          {/* Exchange */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">Exchange</h2>
            <p className="mt-2 text-sm leading-6 text-rose-700">
              We will exchange your product for the same model (subject to
              availability). If unavailable, a refund or store credit will be
              provided.
            </p>
          </section>

          {/* Refunds */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">Refunds</h2>
            <p className="mt-2 text-sm leading-6 text-rose-700">
              Refunds are processed within{" "}
              <span className="font-semibold">5–10 business days</span> after
              the item passes quality check. Packaging and shipping charges are
              non-refundable. COD refunds are processed via bank transfer/UPI
              after verification.
            </p>
          </section>

          {/* Damaged */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">
              Damaged / Wrong Item
            </h2>
            <p className="mt-2 text-sm leading-6 text-rose-700">
              If you receive a damaged or incorrect item, contact us within{" "}
              <span className="font-semibold">48 hours</span> with images or
              unboxing video. We will resolve it via replacement or refund.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-sm font-bold text-rose-950">Contact</h2>
            <p className="mt-2 text-sm leading-6 text-rose-700">
              For any questions, reach us at{" "}
              <span className="font-semibold">
                support@pecifycollections.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
