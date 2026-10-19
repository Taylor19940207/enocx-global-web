/**
 * Contact form delivery.
 *
 * The site is a static export with no server to receive a POST, so the form
 * submits straight from the browser to Web3Forms, which forwards it by email.
 * The recipient address lives in the Web3Forms account, not here: the access
 * key only identifies the form and is public by design, so it is safe in this
 * (public) repo. Changing the recipient is done on web3forms.com, not in code.
 */
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/** Form access key from web3forms.com (public by design, see above). */
export const WEB3FORMS_ACCESS_KEY = "8da88933-9a3c-4e2c-9879-53863e7386bc";

/**
 * Web3Forms' shared hCaptcha site key for free plans. It only works once
 * hCaptcha is chosen as the captcha for this form in the Web3Forms dashboard,
 * and from then on Web3Forms rejects any submission without a valid token.
 * Deploy the form first, then switch it on: the other order refuses every
 * real enquiry until the new form is live.
 */
export const WEB3FORMS_HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
