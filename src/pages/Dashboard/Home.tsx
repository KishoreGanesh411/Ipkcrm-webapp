import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import Alert from "../../components/ui/alert/Alert"; // ✅ import TailAdmin alert

export default function Home() {
  const location = useLocation();
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  useEffect(() => {
    if (location.state?.loginSuccess) {
      setShowLoginAlert(true);

      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        setShowLoginAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <PageMeta
        title="React.js CRM Dashboard | IPK-WEALTH"
        description="Dashboard page for IPK-wealth"
      />

      {/* ✅ Login success alert */}
      {showLoginAlert && (
        <div className="mb-2">
          <Alert
            variant="success"
            title="Login Successful"
            message="Welcome back! You have logged in successfully."
            showLink={false}
          />
        </div>
      )}

      {/* ✅ Dashboard grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
