import { redirect } from 'next/navigation';

export default function AfterTaxRedirect() {
  redirect('/tools/after-tax');
}
