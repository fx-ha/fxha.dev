import { useRouter } from 'next/router'

type Languages = 'en' | 'de'

const defaultLang: Languages = 'en'

const useLang = () => {
  const { locale } = useRouter()

  return (locale as Languages) ?? defaultLang
}

export default useLang
