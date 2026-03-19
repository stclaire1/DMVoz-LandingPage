"use client";

import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'

const FloatingWhatsappBtn = () => {
    return (
        <FloatingWhatsApp
            className='hidden min-[400px]:flex'
            phoneNumber='+5534998125957'
            accountName='DmVoz Produções'
            avatar='/images/wpp-logo.png'
            chatMessage='Olá, como posso te ajudar?'
            statusMessage='Online'
            placeholder='Digite a sua mensagem'
            chatboxHeight={370}
            notification={true}
            notificationSound={true}
            allowClickAway={true}
            allowEsc={true}
        />
    )
}

export default FloatingWhatsappBtn;