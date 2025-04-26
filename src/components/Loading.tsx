import OrbitProgress from "react-loading-indicators/OrbitProgress";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <OrbitProgress variant="track-disc" color="purple" size="small" />
    </div>
  );
}
