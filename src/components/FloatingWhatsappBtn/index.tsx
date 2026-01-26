import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'

const FloatingWhatsappBtn = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='+5534998125957'
            accountName='DmVoz Produções'
            avatar='/path/to/avatar.jpg'
            chatMessage='Olá, como posso te ajudar?'
            statusMessage='Online'
            placeholder='Digite a sua mensagem'
            chatboxHeight={370}
            notification={true}
            allowClickAway={true}
            allowEsc={true}
        />
    )
}

export default FloatingWhatsappBtn;