const base = import.meta.env.BASE_URL;

export const projectGalleries = {
  "bond-platform": [
    { src: `${base}gallery/bond/01-bond-transfer.png`, caption: "Bond transfer — customer search" },
    { src: `${base}gallery/bond/02-transfer-details.png`, caption: "Transfer details" },
    { src: `${base}gallery/bond/03-coupon.png`, caption: "Coupon and interest" },
    { src: `${base}gallery/bond/04-payment.png`, caption: "Payment" },
    { src: `${base}gallery/bond/05-summary.png`, caption: "Summary" },
    { src: `${base}gallery/bond/06-submit.png`, caption: "Submit" },
    { src: `${base}gallery/bond/07-review.png`, caption: "Review" },
    { src: `${base}gallery/bond/08-status.png`, caption: "Status" },
  ],
  "document-qr": [
    { src: `${base}gallery/qr/01-generate-encrypt-flow.png`, caption: "Generate — dual AES-GCM encrypt pipeline" },
    { src: `${base}gallery/qr/02-verify-decrypt-flow.png`, caption: "Verify — decrypt and identity check" },
    { src: `${base}gallery/qr/03-verify-start.png`, caption: "Customer portal — start verification (sanitized mock)" },
    { src: `${base}gallery/qr/04-identity-challenge.png`, caption: "Identity challenge + bot check (sanitized mock)" },
    { src: `${base}gallery/qr/05-document-view.png`, caption: "Verified document view (sanitized mock)" },
  ],
  "utility-payments": [],
};

export const galleryLabels = {
  "bond-platform": "Bond",
  "document-qr": "QR",
  "utility-payments": "Utility",
};
