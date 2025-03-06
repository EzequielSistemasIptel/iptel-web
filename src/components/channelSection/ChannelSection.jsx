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
                <button>PAGAR EL SALDO DE MI CUENTA</button>
            </TextContainer>
            <ImageContainer>
                <img src={mercadoPago} alt="Mercado Pago/Facturas" />
            </ImageContainer>
        </MercadoPagoContainer>
        <WhatsappContainer>
        <TextContainer>
                <h3>ENCONTRANOS EN WHATSAPP</h3>
                <p>La mejor atención personalizada.</p>
                <button>WHATSAPP IPTEL</button>
            </TextContainer>
            <ImageContainer>
                <img src={whatsappImage} alt="Whatsapp contacto" />
            </ImageContainer>
        </WhatsappContainer>
    </ChannelContainer>
  )
}

export default ChannelSection