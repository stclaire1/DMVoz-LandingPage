interface TestimonialCardProps {
    author: string;
    testimonial: string;
    logo: string;
}

const TestimonialCard = ({ author, testimonial, logo }: TestimonialCardProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-6 text-center h-full border border-[#1D0200] rounded-sm p-7 shadow-lg bg-orange-100 backdrop-blur-sm lg:min-h-[450px]">
            <img src={logo} alt={`Logo ${author}`} className="w-[100px]" />
            <p className="w-full text-sm lg:text-base">{testimonial}</p>
            <span className="w-full text-sm font-bold mt-auto">- {author}</span>
        </div>
    )
}

export default TestimonialCard;