import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col relative min-h-full">
      <Header />
      <main>
        <div className="bg-white p-8  max-w-7xl mx-auto">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
