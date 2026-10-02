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

/** Issued to the recipient's inbox at web3forms.com. Empty = not yet wired. */
export const WEB3FORMS_ACCESS_KEY = "";
