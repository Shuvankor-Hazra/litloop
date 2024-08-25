import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
    title: "LitLoop - Buy or Rent Books",
    description: "An Online Bookstore to Sale and Rent Used Books",
};

export default function BookStoreLayout({ children }) {
    return (
        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
            <div className="flex flex-wrap p-2 justify-center">
            <Sidebar />
                {children}
            </div>
        </div>
    );
}
