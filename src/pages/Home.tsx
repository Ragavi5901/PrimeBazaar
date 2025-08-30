import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { motion } from "framer-motion";

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function Home() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      const snapshot = await getDocs(collection(db, "banners"));
      setBanners(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Banner)));
    };
    fetchBanners();
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden">
        {banners.length > 0 && (
          <motion.div
            key={banners[current].id}
            className="flex items-center justify-between h-full px-12"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Text */}
            <div className="w-1/2 space-y-4">
              <h1 className="text-4xl font-bold">{banners[current].title}</h1>
              <p className="text-lg text-gray-700">{banners[current].subtitle}</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Shop Now
              </button>
            </div>

            {/* Right Image */}
            <div className="w-1/2 flex justify-center">
              <img
                src={banners[current].imageUrl}
                alt={banners[current].title}
                className="max-h-[400px] object-contain"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-6 md:px-20 bg-white text-center">
        <div>
          <img src="/icons/delivery.svg" alt="Free Delivery" className="mx-auto mb-3 h-12" />
          <h3 className="font-semibold">Free Delivery</h3>
        </div>
        <div>
          <img src="/icons/quality.svg" alt="Quality Guarantee" className="mx-auto mb-3 h-12" />
          <h3 className="font-semibold">Quality Guarantee</h3>
        </div>
        <div>
          <img src="/icons/offers.svg" alt="Daily Offers" className="mx-auto mb-3 h-12" />
          <h3 className="font-semibold">Daily Offers</h3>
        </div>
        <div>
          <img src="/icons/payment.svg" alt="Secure Payment" className="mx-auto mb-3 h-12" />
          <h3 className="font-semibold">100% Secure Payment</h3>
        </div>
      </div>
    </div>
  );
}
