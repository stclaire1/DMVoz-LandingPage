import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { useForm, type SubmitHandler } from "react-hook-form"
import type { formData } from '../../types/formData';
import { useHookFormMask } from 'use-mask-input';
import emailjs from '@emailjs/browser';
import { Spinner } from "@/components/ui/spinner"
import { toast, Toaster } from "sonner"

const ContactUsSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<formData>()
    const registerWithMask = useHookFormMask(register);
    const form = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = "service_0p0u5dc";
    const TEMPLATE_ID = "template_97zadgx";
    const PUBLIC_KEY = "Tiu1FTJdTn501Bd_y";

    const onSubmit: SubmitHandler<formData> = async (_data) => {
        if (!form.current) return;
        setLoading(true);
        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            );
            toast.success("Sua mensagem foi enviada com sucesso!", {
                description: "Entraremos em contato em breve.",
                className: "bg-green-50/80 backdrop-blur-md border border-green-500 text-green-900",
                classNames: {
                    icon: "text-green-500",
                    description: "text-green-800",
                },
                toasterId: "contact-toaster",
            })
            reset();
        } catch (error) {
            toast.error("Erro ao enviar a mensagem!", {
                description: "Por favor, tente enviar novamente.",
                className: "bg-red-50/80 backdrop-blur-md border border-red-500 text-red-900",
                classNames: {
                    icon: "text-red-500",
                    description: "text-red-800",
                },
                toasterId: "contact-toaster",
            });
            console.log("Erro: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full bg-cover bg-center bg-[url(assets/images/background-recording.jpg)]">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" />
            <div className='flex flex-col items-center py-10 sm:py-15 lg:px-20 lg:py-20 xl:px-30 2xl:px-40 relative z-10'>
                <div className="flex flex-col items-center md-6 sm:mb-10 md:mb-12">
                    <h2 className="text-white text-shadow-lg text-2xl font-bold mb-6 lg:text-4xl 2xl:text-5xl">Fale conosco!</h2>
                    <p className="text-white text-shadow-lg text-sm text-center px-10 max-w-md lg:text-lg lg:px-0 mb-2">Agora é com você! Deixe sua mensagem e entraremos em contato em breve.</p>
                    <p className="text-primary text-shadow-lg text-xs font-semibold italic">* Campos obrigatórios</p>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-2xl w-full px-10 gap-4 sm:px-15 lg:px-0">
                    <span className="flex flex-col gap-2">
                        <label htmlFor="" className="text-white text-sm"><span className="text-primary">* </span>Nome</label>
                        <input
                            type="text"
                            inputMode="text"
                            placeholder="Seu nome completo"
                            autoComplete="name"
                            aria-invalid={errors.name ? "true" : "false"}
                            className={`border rounded-sm p-3 text-white focus:outline-none placeholder:opacity-85 placeholder:text-xs placeholder:italic ${errors.name ? "border-red-500" : "border-white"}`}
                            {...register("name", {
                                required: "É necessário informar seu nome completo",
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ\s]+$/,
                                    message: "Digite apenas letras e espaços",
                                }
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
                        )}
                        {!errors.name && (
                            <p className="text-xs h-4 invisible">placeholder</p>
                        )}
                    </span>
                    <span className="flex flex-col gap-2">
                        <label htmlFor="" className="text-white text-xs"><span className="text-primary">* </span>Telefone</label>
                        <input
                            type="text"
                            placeholder="(__) _____-____"
                            aria-invalid={errors.phone ? "true" : "false"}
                            className={`border rounded-sm p-3 text-white focus:outline-none placeholder:opacity-85 placeholder:text-xs placeholder:italic ${errors.phone ? "border-red-500" : "border-white"}`}
                            {...registerWithMask("phone", "(99) 99999-9999", {
                                required: "É necessário informar seu telefone",
                            })}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
                        )}
                        {!errors.phone && (
                            <p className="text-xs h-4 invisible">placeholder</p>
                        )}
                    </span>
                    <span className="flex flex-col gap-2">
                        <label htmlFor="" className="text-white text-sm"><span className="text-primary">* </span>Email</label>
                        <input
                            type="email"
                            placeholder="Informe seu email"
                            aria-invalid={errors.email ? "true" : "false"}
                            className={`border rounded-sm p-3 text-white focus:outline-none placeholder:opacity-85 placeholder:text-xs placeholder:italic ${errors.email ? "border-red-500" : "border-white"}`}
                            {...register("email", {
                                required: "É necessário informar seu email",
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs italic">{errors.email.message}</p>
                        )}
                        {!errors.email && (
                            <p className="text-xs h-4 invisible">placeholder</p>
                        )}
                    </span>
                    <span className="flex flex-col gap-2 mb-6">
                        <label htmlFor="" className="text-white text-sm"><span className="text-primary">* </span>Mensagem</label>
                        <textarea
                            placeholder="Digite sua dúvida, sugestão ou solicite um orçamento"
                            rows={4}
                            aria-invalid={errors.message ? "true" : "false"}
                            className={`border rounded-sm p-3 text-white focus:outline-none min-h-[120px] placeholder:opacity-85 placeholder:text-xs placeholder:italic ${errors.message ? "border-red-500" : "border-white"}`}
                            {...register("message", { required: "Por favor, escreva o motivo do seu contato!"  })}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs italic">{errors.message.message}</p>
                        )}
                        {!errors.message && (
                            <p className="text-xs h-4 invisible">placeholder</p>
                        )}
                    </span>
                    <Button size="lg" type='submit' className="duration-300 hover:bg-secondary cursor-pointer text-xs md:text-base md:p-5 lg:p-6 2xl:text-lg" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner className="mr-2" data-icon="inline-start" />
                            </>
                        ) : (
                            'Enviar agora'
                        )}
                    </Button>
                </form>
                <Toaster id="contact-toaster" richColors={false} />
            </div>
        </section>
    )
}

export default ContactUsSection;