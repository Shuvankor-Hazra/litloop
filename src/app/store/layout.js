import Sidebar from "../ui/sidebar/Sidebar";
import StoreProvider from "../provider";

export const metadata = {
    title: "LitLoop - Buy or Rent Books",
    description: "An Online Bookstore to Sale and Rent Used Books",
};

export default function BookStoreLayout({ children }) {
    return (
        <StoreProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
                <Sidebar />
                <div className="flex flex-wrap p-2 justify-center w-full">
                    {children}
                </div>
            </div>
        </StoreProvider>
    );
}
