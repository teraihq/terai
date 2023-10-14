// Dependencies
import { cookies } from 'next/headers'

// Constants
import { LOCALE_COOKIE } from '../constants'

// Types
import type { Locale } from '@koi18n/types'

export const getLocale = (): Locale => {
  return cookies().get(LOCALE_COOKIE)?.value as Locale
}
