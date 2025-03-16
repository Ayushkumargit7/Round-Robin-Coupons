import CouponDisplay from "./components/CouponDisplay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
        🎁 Claim Your Exclusive Coupon!
      </h1>
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg w-96 text-center">
        <CouponDisplay />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

