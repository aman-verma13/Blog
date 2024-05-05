import GamingAdvertiseSide from "@/View/Home/GamingAdvertiseSide";
import GlobalNews from "@/View/Home/GlobalNews";
import HomeMain from "@/View/Home/HomeMain";
import ImageCard from "@/View/Home/ImageCard";
import LatestArticle from "@/View/Home/LatestArticle";
import MediumHeadline from "@/View/Home/MediumHeadline";
import SocialMediaCounts from "@/View/Home/SocialMediaCounts";

export default function Home() {
    return (
        <main>
            <HomeMain />

            <div className="grid gap-4 md:gap-10 lg:grid-cols-3 grid-cols-1">
                <GlobalNews />
                <SocialMediaCounts />
            </div>
            
            <ImageCard />

            <div className="grid gap-4 md:gap-10 lg:grid-cols-3 grid-cols-1">
                <MediumHeadline />
                <GamingAdvertiseSide />
            </div>

            <div className="grid gap-4 md:gap-10 lg:grid-cols-3 grid-cols-1">
                <LatestArticle />
                <GamingAdvertiseSide />
            </div>
        </main>
    );
}
