import React from 'react'
import {ChannelContainer,MercadoPagoContainer,WhatsappContainer, TextContainer, ImageContainer} from './channelStyles'
import mercadoPago from '../../assets/channelSection/mercado-pago.jpg'
import whatsappImage from '../../assets/channelSection/whatsapp.jpeg'

const ChannelSection = () => {
  return (
    <ChannelContainer>
        <MercadoPagoContainer>
            <TextContainer>
                <h3>ABONA TUS FACTURAS CON MERCADOPAGO</h3>
                <p>Paga tus facturas por Mercadopago.</p>
                <a href='#'>PAGAR EL SALDO DE MI CUENTA</a>
            </TextContainer>
            <ImageContainer>
                <img src={mercadoPago} alt="Mercado Pago/Facturas" />
            </ImageContainer>
        </MercadoPagoContainer>
        <WhatsappContainer>
        <TextContainer>
                <h3>ENCONTRANOS EN WHATSAPP</h3>
                <p>La mejor atención personalizada.</p>
                <a href='https://api.whatsapp.com/send?phone=543462369040' target='blank'>WHATSAPP IPTEL</a>
            </TextContainer>
            <ImageContainer>
                <img src={whatsappImage} alt="Whatsapp contacto" />
            </ImageContainer>
        </WhatsappContainer>
    </ChannelContainer>
  )
}

export default ChannelSection