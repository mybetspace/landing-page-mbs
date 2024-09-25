import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (
  src,
  { baseURL } = {}
) => {
  return {
    url: `${baseURL}${src}`
  }
}
