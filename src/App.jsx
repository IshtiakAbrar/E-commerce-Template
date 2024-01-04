
//import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ReviewsPage from "./pages/ReviewPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import PrivacyAndTermsPage from "./pages/PrivacyAndTermsPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

const App = () => {
    return (
        <div className="text-xl  font-poppins">
            <BrowserRouter>

                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/products"} element={<ProductPage/>}/>
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/cart"} element={<CartPage/>}/>
                    <Route path={"/checkout"} element={<CheckoutPage/>}/>
                    <Route path={"/thankyou"} element={<ThankYouPage/>}/>
                    <Route path={"/notfound"} element={<NotFoundPage/>}/>
                    <Route path={"/faq"} element={<FaqPage/>}/>
                    <Route path={"/review"} element={<ReviewPage/>}/>
                    <Route path={"/search"} element={<SearchResultPage/>}/>
                    <Route path={"/privacy&terms"} element={<PrivacyAndTermsPage/>}/>
                    <Route path={"/registration"} element={<RegistrationPage/>}/>
                    <Route path={"/blog"} element={<BlogPage/>}/>
                </Routes>

            </BrowserRouter>

        </div>
    );
};

export default App;