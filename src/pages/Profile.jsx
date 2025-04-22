import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/context/UserContext";

const ProfilePage = () => {
    const { user } = useUser();
    return (
        <>
            <section className="w-full max-w-container mx-auto px-2">
                <div className="max-w-screen-container flex mx-auto gap-6 pt-48 lg:pt-60 pb-8 px-2 justify-between items-center">
                    <h1 className="text-2xl sm:text-4xl">Conta de utilizador</h1>
                </div>
            </section>
            <section className="w-full flex-center pb-20 px-2">
                <Tabs defaultValue="personal" className="w-full font-brandon-500 text-fofalText text-xl">
                    <TabsList className="grid w-full max-w-container grid-cols-3 mx-auto">
                        <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
                        <TabsTrigger value="orders">Encomendas</TabsTrigger>
                        <TabsTrigger value="history">Histórico</TabsTrigger>
                    </TabsList>
                    <TabsContent value="personal">
                        <div className="w-full max-w-container mx-auto px-2 py-14 space-y-4">
                            <h2 className="text-2xl font-brandon-500 text-fofalText max-w-full underline p-4">Identificação</h2>
                            <p className="font-brandon-500 border border-zinc-900 p-4">Nome: <i className="font-brandon-400">{user.firstName} {user.lastName}</i></p>
                            <p className="font-brandon-500 border border-zinc-900 p-4">Email: <i className="font-brandon-400">{user.email}</i></p>
                            <p className="font-brandon-500 border border-zinc-900 p-4">Telefone: <i className="font-brandon-400">{user.phone}</i></p>
                            <p className="font-brandon-500 border border-zinc-900 p-4">Morada: <i className="font-brandon-400">{user.address} | {user.postalCode} | {user.country}</i></p>
                        </div>
                    </TabsContent>
                    <TabsContent value="orders">
                        <div className="w-full max-w-container mx-auto px-2 py-14 space-y-4">
                            <h2 className="text-2xl font-brandon-500 text-fofalText max-w-full p-1 underline">Suas encomendas</h2>

                            {user.orders.length === 0 ? (
                                <div className="w-full max-w-container mx-auto px-2 py-14 space-y-4">
                                    <p className="font-brandon-500 w-full text-center">Não possui encomendas pendentes.</p>
                                </div>
                            ) : (
                                <div className="font-brandon-500 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] items-center gap-4">{user.orders.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-2 border border-zinc-900 p-4">
                                        <h3>Item: {item.product}</h3>
                                        <p className="font-brandon-500">Valor da compra: € {item.price.toFixed(2)}</p>
                                        <small className="font-brandon-500">Data da compra: {item.purchaseDate}</small>
                                        <small className="font-brandon-500">Status: {item.statusOrder}</small>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </TabsContent>
                    <TabsContent value="history">
                    <div className="w-full max-w-container mx-auto px-2 py-14 space-y-4">
                            <h2 className="text-2xl font-brandon-500 text-fofalText max-w-full p-1 underline">Histórico de encomendas</h2>

                            {user.orderHistory.length === 0 ? (
                                <div className="w-full max-w-container mx-auto px-2 py-14 space-y-4">
                                    <p className="font-brandon-500 w-full text-center">Não possui encomendas pendentes.</p>
                                </div>
                            ) : (
                                <div className="font-brandon-500 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] items-center gap-4">{user.orderHistory.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-2 border border-zinc-900 p-4">
                                        <h3>Item: {item.product}</h3>
                                        <p className="font-brandon-500">Valor da compra: € {item.price.toFixed(2)}</p>
                                        <small className="font-brandon-500">Data da compra: {item.purchaseDate}</small>
                                        <small className="font-brandon-500">Status: {item.statusOrder}</small>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs >
            </section >
        </>
    )
}

export default ProfilePage