import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  redirect(`/${locale}/homepage`);
}
