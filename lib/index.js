/**
 * dsh-zmd-theme — host half.
 *
 * The skin is entirely a browser-side concern: `lib/client.js` injects the
 * ZMD stylesheet and folds the ZMD alias tokens into the active theme through
 * `ctx.theme.overrideTokens`. Nothing on the Host side needs a service, so
 * this half is intentionally inert.
 */

/** Host plugin body — no Host-side behaviour. */
export function apply() {}

export const name = "dsh-zmd-theme";
