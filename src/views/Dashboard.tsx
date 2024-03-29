import Sidebar from "../components/dashborad/Sidebar"
import HorizontalNavBar from "../components/dashborad/HorizontalNavBar"
import CongratulatoryMessage from "../components/dashborad/CongratulationsMessage"
import ProgressCard from "../components/dashborad/ProgressCard"
import TotalRevenue from "../components/dashborad/TotalRevenue"
import Growth from "../components/dashborad/Growth"
import ProfileReport from "../components/dashborad/ProfileReport"
import OrderStatistics from "../components/dashborad/OrderStatistics"
import Trasactions from "../components/dashborad/Transactions"
import IncomeExpensesProfitsTABS from "../components/dashborad/IncomeExpensesProfitsTABS"
import { LuWallet } from "react-icons/lu";
import { AiFillPieChart } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa6";
import { BiCreditCard } from "react-icons/bi"
import React from "react"

const Dashboard : React.FC = () => {
    return (
        <main className="min-w-fit  flex w-[100vw] bg-slate-100 min-h-screen">
            <Sidebar />
            <section className="min-w-fit w-[calc(100vw-170px)] xl:w-[calc(100vw-240px)] ml-3 " >
                <HorizontalNavBar />
                <section className=" xl:flex w-full justify-between mb-3 " >
                    <div className="mb-3 xl:mb-0   mr-4 w-full">
                        <CongratulatoryMessage name={"John"} progressPercentage={72} />
                    </div>
                    <div className="mx-auto flex min-w-[450px]  lg:min-w-[350px] w-full justify-center item lg:justify-between relative lg:right-1" >
                        <div className="ml-1 mr-3 w-full" >
                            <ProgressCard icon={{ icon: AiFillPieChart, size: 40, backgroundColor: "#ecfccb", color: "#84cc16" }} title={"profit"} progressPercentage={72.8} amount={12628} />
                        </div>

                        <div className="w-full ">
                            <ProgressCard icon={{ icon: LuWallet, size: 40, backgroundColor: "#cffafe", color: "#22d3ee" }} title={"sales"} progressPercentage={28.42} amount={4678} />
                        </div>
                    </div>
                </section>
                <section className="xl:flex mb-3">
                    <section className="mb-3 lg:flex justify-between bg-white min-w-[450px]  lg:min-w-[670px]  w-full rounded-xl border-r-0 overflow-x-hidden border-2 border-slate-200" style={{ border: '2px solid #e2e8f0' }} >
                        <TotalRevenue
                            heading={"Total Revenue"}
                            years={["2021", "2022"]}
                            // months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                            verticalValues={[30, 20, 10, 0, -10, -20]}
                        />
                        <div className="flex items-center justify-center" >
                            <Growth />
                        </div>
                    </section>
                    <section className="w-full min-w-[450px] md:min-w-[300px] ml-1 xl:ml-3 relative" >
                        <div className="mx-auto flex justify-between  relative right-[2px]" >
                            <div className="mr-3 w-full">
                                <ProgressCard icon={{ icon: FaPaypal, size: 30, backgroundColor: "#fee2e2", color: "#ef4444" }} title={"payment"} progressPercentage={-14.82} amount={2468} />
                            </div>
                            <div className="w-full">
                                <ProgressCard icon={{ icon: BiCreditCard, size: 30, backgroundColor: "#dbeafe", color: "#a5b4fc" }} title={"transactions"} progressPercentage={28.14} amount={14857} />
                            </div>
                        </div>
                        <div className="mx-auto mt-3  w-full  bottom-0 right-0 ">
                            <ProfileReport year={"2022"} amount={84686} heading={"Profile Report"} progressPercentage={68.2} />
                        </div>
                    </section>

                </section>

                <section className="xl:flex justify-between mt-3 w-full min-w-[450px] ">
                    <div className="mb-3 lg:mr-3 xl:flex  lg:min-w-[670px] w-full xl:w-[65%]" >
                        <div className="w-full md:mr-3 h-full mb-3">
                            <OrderStatistics heading={"Order Statistics"} totalOrders={8258} totalSales={42.82} weeklyPercentage={38} />
                        </div>
                        <div className="w-full " >
                            <IncomeExpensesProfitsTABS />
                        </div>
                    </div>
                    <div className="mb-3  min-w-[300px] xl:w-[35%] w-full">
                        <Trasactions heading={"Transactions"} />
                    </div>
                </section>
            </section>
        </main>
    )
}
export default Dashboard