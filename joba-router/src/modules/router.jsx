import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import HelpLayout from "../layouts/HelpLayout";
import Faq from "../pages/Help/Faq";
import Contact from '../pages/Help/Contact';
import NotFound from '../pages/Error/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
