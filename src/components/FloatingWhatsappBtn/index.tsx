import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'
import profilePic from '../../assets/images/wpp-logo.png'

const FloatingWhatsappBtn = () => {
    return (
        <FloatingWhatsApp
            className='hidden min-[400px]:flex'
            phoneNumber='+5534998125957'
            accountName='DmVoz Produções'
            avatar={profilePic}
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