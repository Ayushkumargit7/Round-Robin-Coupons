import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CouponDisplay = () => {
  const [coupon, setCoupon] = useState(null);
  const [loading, setLoading] = useState(false);

  const claimCoupon = async () => {
    setLoading(true);
    try {
      
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/claim`, { withCredentials: true });
      setCoupon(res.data.couponCode);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error claiming coupon.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={claimCoupon}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        {loading ? "Processing..." : "🎟 Claim Your Coupon"}
      </button>

      {coupon && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-lg font-semibold border border-green-300 shadow-md">
          ✅ Your Coupon: <span className="text-green-900 font-bold">{coupon}</span>
        </div>
      )}
    </div>
  );
};

export default CouponDisplay;
