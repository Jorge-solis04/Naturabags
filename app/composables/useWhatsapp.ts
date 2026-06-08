/**
 * Composable para generar enlaces de WhatsApp con mensajes pre-llenados.
 * Número de contacto oficial de NaturaBags Salamanca: +52 464 652 6465
 */
export const useWhatsapp = () => {
  const phoneNumber = '524646526465'

  const getWhatsappUrl = (message?: string) => {
    const baseUrl = `https://wa.me/${phoneNumber}`
    if (!message) return baseUrl
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }

  return {
    getWhatsappUrl,
    phoneNumber
  }
}
