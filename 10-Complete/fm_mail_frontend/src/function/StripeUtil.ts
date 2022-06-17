import ky from 'ky';
import type { CognitoUser } from '../atom/User';

type BillingPortalResponse = {
  billing_portal_url: string;
};

// Stripe請求ポータルを呼び出す
const openBillingPortal = async (user: CognitoUser | null) => {
  // Stripeの請求ポータル呼び出し用URL
  const stripeMyPortalUrl = `${
    import.meta.env.VITE_STRIPE_BASE_URL
  }/create-billing-portal-by-user`;

  if (!user) return;
  const resp: BillingPortalResponse = await ky
    .get(stripeMyPortalUrl, {
      headers: {
        Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
      },
    })
    .json();
  // Stripe請求ポータルに移動
  window.location.href = resp.billing_portal_url;
};

export default openBillingPortal;
