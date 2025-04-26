

type Props = {
    errorMessage?: string;
};

const Error = ({errorMessage = "Что-то пошло не так. Попробуйте позже.",}: Props) => {
    return (
        <div className="w-full max-w-md mx-auto mt-4 bg-red-100 text-red-700 border border-red-300 px-4 py-3 rounded-lg shadow-sm">
            <p className="font-semibold">Ошибка</p>
            <p className="text-sm">{errorMessage}</p>
        </div>
    );
};

export default Error;
